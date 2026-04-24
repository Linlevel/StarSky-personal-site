# Python3 MySQL 数据库连接 - PyMySQL 驱动

## 1. 什么是 PyMySQL？

**PyMySQL** 是 Python3.x 版本中用于连接 MySQL 服务器的库（Python2 中使用 `mysqldb`）。  
- 遵循 Python 数据库 API v2.0 规范。  
- 包含一个纯 Python 实现的 MySQL 客户端库。

---

## 2. PyMySQL 安装

### 使用 pip 安装

```bash
pip3 install PyMySQL
```

### 其他安装方式

**方式一：从 GitHub 克隆安装**

```bash
git clone https://github.com/PyMySQL/PyMySQL
cd PyMySQL/
python3 setup.py install
```

**方式二：指定版本号安装（使用 curl）**

```bash
# X.X 为 PyMySQL 版本号
curl -L https://github.com/PyMySQL/PyMySQL/tarball/pymysql-X.X | tar xz
cd PyMySQL*
python3 setup.py install
```

> **注意**：安装时可能需要 root 权限。

### 常见问题处理

若出现 `ImportError: No module named setuptools`，表示未安装 `setuptools`。  
可访问 https://pypi.python.org/pypi/setuptools 查找安装方法。

**Linux 安装 setuptools 示例：**

```bash
wget https://bootstrap.pypa.io/ez_setup.py
python3 ez_setup.py
```

---

## 3. 数据库连接

### 连接前的准备

- 已创建数据库（如 `TESTDB`）。
- 已在数据库中创建表（如 `EMPLOYEE` 表，包含字段：`FIRST_NAME`, `LAST_NAME`, `AGE`, `SEX`, `INCOME`）。
- 连接用户（如 `testuser` / `test123`）具备相应权限。
- 已安装 `pymysql` 模块。

### 连接示例

```python
#!/usr/bin/python3
import pymysql

# 打开数据库连接
db = pymysql.connect(host='localhost',
                     user='testuser',
                     password='test123',
                     database='TESTDB')

# 使用 cursor() 方法创建一个游标对象
cursor = db.cursor()

# 执行 SQL 查询
cursor.execute("SELECT VERSION()")

# 使用 fetchone() 获取单条数据
data = cursor.fetchone()
print("Database version : %s " % data)

# 关闭数据库连接
db.close()
```

**输出示例：**

```
Database version : 5.5.20-log
```

---

## 4. 创建数据库表

通过 `execute()` 方法执行 SQL 语句来创建表。

```python
#!/usr/bin/python3
import pymysql

db = pymysql.connect(host='localhost',
                     user='testuser',
                     password='test123',
                     database='TESTDB')

cursor = db.cursor()

# 如果表已存在，则删除
cursor.execute("DROP TABLE IF EXISTS EMPLOYEE")

# 创建表的 SQL 语句
sql = """CREATE TABLE EMPLOYEE (
         FIRST_NAME  CHAR(20) NOT NULL,
         LAST_NAME  CHAR(20),
         AGE INT,  
         SEX CHAR(1),
         INCOME FLOAT )"""

cursor.execute(sql)

db.close()
```

---

## 5. 数据库插入操作

### 方式一：直接拼接参数（不推荐，存在 SQL 注入风险）

```python
#!/usr/bin/python3
import pymysql

db = pymysql.connect(host='localhost',
                     user='testuser',
                     password='test123',
                     database='TESTDB')

cursor = db.cursor()

# SQL 插入语句（使用 % 格式化，有注入风险）
sql = "INSERT INTO EMPLOYEE(FIRST_NAME, \
       LAST_NAME, AGE, SEX, INCOME) \
       VALUES ('%s', '%s',  %s,  '%s',  %s)" % \
       ('Mac', 'Mohan', 20, 'M', 2000)

try:
    cursor.execute(sql)
    db.commit()          # 提交事务
except:
    db.rollback()        # 发生错误时回滚

db.close()
```

### 方式二：使用参数化查询（推荐，防 SQL 注入）

```python
#!/usr/bin/python3
import pymysql

db = pymysql.connect(host='localhost',
                     user='testuser',
                     password='test123',
                     database='TESTDB')

cursor = db.cursor()

# 使用 %s 作为占位符，参数以元组形式传递
sql = "INSERT INTO EMPLOYEE(FIRST_NAME, LAST_NAME, AGE, SEX, INCOME) VALUES (%s, %s, %s, %s, %s)"
val = ('Mac', 'Mohan', 20, 'M', 2000)

try:
    cursor.execute(sql, val)
    db.commit()
except:
    db.rollback()

db.close()
```

### 动态传递变量示例

```python
user_id = "test123"
password = "password"
con.execute('insert into Login values(%s, %s)', (user_id, password))
```

---

## 6. 数据库查询操作

常用方法：
- `fetchone()`：获取下一行结果集，返回一个对象。
- `fetchall()`：获取所有返回的行。
- `rowcount`：只读属性，返回 `execute()` 影响的行数。

### 查询示例（工资大于 1000 的员工）

```python
#!/usr/bin/python3
import pymysql

db = pymysql.connect(host='localhost',
                     user='testuser',
                     password='test123',
                     database='TESTDB')

cursor = db.cursor()

# 查询语句
sql = "SELECT * FROM EMPLOYEE WHERE INCOME > %s" % (1000)

try:
    cursor.execute(sql)
    results = cursor.fetchall()
    for row in results:
        fname = row[0]
        lname = row[1]
        age = row[2]
        sex = row[3]
        income = row[4]
        print("fname=%s, lname=%s, age=%s, sex=%s, income=%s" % \
              (fname, lname, age, sex, income))
except:
    print("Error: unable to fetch data")

db.close()
```

**输出示例：**

```
fname=Mac, lname=Mohan, age=20, sex=M, income=2000
```

---

## 7. 数据库更新操作

### 示例：将性别为 'M' 的员工年龄加 1

```python
#!/usr/bin/python3
import pymysql

db = pymysql.connect(host='localhost',
                     user='testuser',
                     password='test123',
                     database='TESTDB')

cursor = db.cursor()

sql = "UPDATE EMPLOYEE SET AGE = AGE + 1 WHERE SEX = '%c'" % ('M')

try:
    cursor.execute(sql)
    db.commit()
except:
    db.rollback()

db.close()
```

---

## 8. 删除操作

### 示例：删除年龄大于 20 的员工记录

```python
#!/usr/bin/python3
import pymysql

db = pymysql.connect(host='localhost',
                     user='testuser',
                     password='test123',
                     database='TESTDB')

cursor = db.cursor()

sql = "DELETE FROM EMPLOYEE WHERE AGE > %s" % (20)

try:
    cursor.execute(sql)
    db.commit()
except:
    db.rollback()

db.close()
```

---

## 9. 执行事务

事务具有 ACID 特性：
- **原子性**：事务中的操作要么全部成功，要么全部失败。
- **一致性**：事务将数据库从一个一致状态变到另一个一致状态。
- **隔离性**：事务之间互不干扰。
- **持久性**：事务提交后，数据改变是永久性的。

Python DB API 2.0 提供 `commit()` 和 `rollback()` 方法。

### 事务使用示例

```python
# SQL 删除语句
sql = "DELETE FROM EMPLOYEE WHERE AGE > %s" % (20)
try:
    cursor.execute(sql)
    db.commit()     # 提交事务
except:
    db.rollback()   # 回滚事务
```

> 游标建立时，会自动开始一个隐式事务。  
> `commit()` 会提交所有更新操作，`rollback()` 会回滚当前游标的所有操作。每个方法调用后都会开始一个新的事务。

---

## 10. 错误处理

PyMySQL 遵循 DB API 定义的异常类，继承结构如下：

```
Exception
|__ Warning
|__ Error
   |__ InterfaceError
   |__ DatabaseError
      |__ DataError
      |__ OperationalError
      |__ IntegrityError
      |__ InternalError
      |__ ProgrammingError
      |__ NotSupportedError
```

### 异常说明表

| 异常               | 描述                                                           |
| ------------------ | -------------------------------------------------------------- |
| `Warning`          | 严重警告，如数据截断等，是 `StandardError` 的子类              |
| `Error`            | 除警告外的其他错误                                             |
| `InterfaceError`   | 数据库接口模块本身的错误（非数据库错误）                       |
| `DatabaseError`    | 与数据库相关的错误                                             |
| `DataError`        | 数据处理错误（如除零、数据超范围）                             |
| `OperationalError` | 非用户控制的数据库操作错误（如连接断开、事务失败）             |
| `IntegrityError`   | 完整性约束错误（如外键检查失败）                               |
| `InternalError`    | 数据库内部错误（如游标失效、事务同步失败）                     |
| `ProgrammingError` | 程序错误（如表不存在、SQL 语法错误、参数数量错误）             |
| `NotSupportedError`| 不支持的函数或 API（如在不支持事务的数据库上调用 `rollback()`）|

---
