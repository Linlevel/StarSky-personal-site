# Python MySQL 编程（mysql-connector 驱动）

## 1. 概述

MySQL 是最流行的关系型数据库管理系统。  
本章节介绍使用官方驱动 **mysql-connector** 连接和操作 MySQL。

---

## 2. 安装 mysql-connector

使用 pip 命令安装：

```bash
python -m pip install mysql-connector
```

### 测试安装是否成功

创建 `demo_mysql_test.py`：

```python
import mysql.connector
```

如果执行没有报错，说明安装成功。

---

## 3. MySQL 8.0 特殊配置说明

MySQL 8.0 默认密码插件为 `caching_sha2_password`，早期版本为 `mysql_native_password`。  
为了兼容性，可以修改为旧版插件：

1. 修改 `my.ini` 配置文件：

```ini
[mysqld]
default_authentication_plugin=mysql_native_password
```

2. 在 MySQL 中修改密码：

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';
```

> 更多内容参考：Python MySQL8.0 连接问题。

---

## 4. 创建数据库连接

使用 `mysql.connector.connect()` 方法建立连接。

```python
import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",       # 数据库主机地址
    user="yourusername",    # 数据库用户名
    passwd="yourpassword"   # 数据库密码
)

print(mydb)
```

---

## 5. 创建数据库

使用 `CREATE DATABASE` 语句。

```python
import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="123456"
)

mycursor = mydb.cursor()
mycursor.execute("CREATE DATABASE runoob_db")
```

### 查看所有数据库

```python
mycursor.execute("SHOW DATABASES")
for x in mycursor:
    print(x)
```

### 直接连接数据库（若不存在会报错）

```python
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="123456",
    database="runoob_db"   # 如果数据库不存在则出错
)
```

---

## 6. 创建数据表

使用 `CREATE TABLE` 语句，需确保数据库已存在。

```python
import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="123456",
    database="runoob_db"
)

mycursor = mydb.cursor()
mycursor.execute("CREATE TABLE sites (name VARCHAR(255), url VARCHAR(255))")
```

### 查看已有数据表

```python
mycursor.execute("SHOW TABLES")
for x in mycursor:
    print(x)
```

---

## 7. 主键设置

通常使用 `INT AUTO_INCREMENT PRIMARY KEY` 创建自增主键。

### 方式一：修改已存在的表，添加主键列

```python
mycursor.execute("ALTER TABLE sites ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY")
```

### 方式二：创建表时直接指定主键

```python
mycursor.execute("""
    CREATE TABLE sites (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        url VARCHAR(255)
    )
""")
```

---

## 8. 插入数据

使用 `INSERT INTO` 语句，并通过 `mydb.commit()` 提交事务。

### 单条插入

```python
sql = "INSERT INTO sites (name, url) VALUES (%s, %s)"
val = ("RUNOOB", "https://www.runoob.com")
mycursor.execute(sql, val)

mydb.commit()
print(mycursor.rowcount, "记录插入成功。")
```

### 批量插入

使用 `executemany()` 方法，第二个参数为元组列表。

```python
sql = "INSERT INTO sites (name, url) VALUES (%s, %s)"
val = [
    ('Google', 'https://www.google.com'),
    ('Github', 'https://www.github.com'),
    ('Taobao', 'https://www.taobao.com'),
    ('stackoverflow', 'https://www.stackoverflow.com/')
]

mycursor.executemany(sql, val)
mydb.commit()
print(mycursor.rowcount, "记录插入成功。")
```

### 获取插入记录的 ID

使用 `lastrowid` 属性。

```python
sql = "INSERT INTO sites (name, url) VALUES (%s, %s)"
val = ("Zhihu", "https://www.zhihu.com")
mycursor.execute(sql, val)
mydb.commit()
print("1 条记录已插入, ID:", mycursor.lastrowid)
```

---

## 9. 查询数据

使用 `SELECT` 语句，通过 `fetchall()` 获取所有记录，`fetchone()` 获取一条记录。

### 查询所有记录

```python
mycursor.execute("SELECT * FROM sites")
myresult = mycursor.fetchall()
for x in myresult:
    print(x)
```

输出示例：

```
(1, 'RUNOOB', 'https://www.runoob.com')
(2, 'Google', 'https://www.google.com')
(3, 'Github', 'https://www.github.com')
(4, 'Taobao', 'https://www.taobao.com')
(5, 'stackoverflow', 'https://www.stackoverflow.com/')
(6, 'Zhihu', 'https://www.zhihu.com')
```

### 查询指定字段

```python
mycursor.execute("SELECT name, url FROM sites")
myresult = mycursor.fetchall()
for x in myresult:
    print(x)
```

### 读取一条数据

```python
mycursor.execute("SELECT * FROM sites")
myresult = mycursor.fetchone()
print(myresult)   # 输出第一条记录
```

---

## 10. WHERE 条件语句

使用 `WHERE` 筛选条件。

### 精确匹配

```python
sql = "SELECT * FROM sites WHERE name = 'RUNOOB'"
mycursor.execute(sql)
myresult = mycursor.fetchall()
for x in myresult:
    print(x)
```

### 使用通配符 `%`

```python
sql = "SELECT * FROM sites WHERE url LIKE '%oo%'"
mycursor.execute(sql)
myresult = mycursor.fetchall()
for x in myresult:
    print(x)
```

### 使用占位符 `%s` 防止 SQL 注入

```python
sql = "SELECT * FROM sites WHERE name = %s"
na = ("RUNOOB", )
mycursor.execute(sql, na)
myresult = mycursor.fetchall()
for x in myresult:
    print(x)
```

---

## 11. 排序

使用 `ORDER BY` 语句，默认为升序（`ASC`），降序使用 `DESC`。

### 升序

```python
sql = "SELECT * FROM sites ORDER BY name"
mycursor.execute(sql)
myresult = mycursor.fetchall()
for x in myresult:
    print(x)
```

### 降序

```python
sql = "SELECT * FROM sites ORDER BY name DESC"
mycursor.execute(sql)
myresult = mycursor.fetchall()
for x in myresult:
    print(x)
```

---

## 12. LIMIT 限制查询数量

使用 `LIMIT` 限制返回的记录数。

### 读取前 3 条

```python
mycursor.execute("SELECT * FROM sites LIMIT 3")
myresult = mycursor.fetchall()
```

### 指定起始位置（OFFSET）

```python
# 从第 2 条开始（索引 1），读取 3 条
mycursor.execute("SELECT * FROM sites LIMIT 3 OFFSET 1")
```

---

## 13. 删除记录

使用 `DELETE FROM` 语句，**务必指定 WHERE 条件**，否则会清空整表。

```python
sql = "DELETE FROM sites WHERE name = 'stackoverflow'"
mycursor.execute(sql)
mydb.commit()
print(mycursor.rowcount, "条记录删除")
```

### 使用占位符防止注入

```python
sql = "DELETE FROM sites WHERE name = %s"
na = ("stackoverflow", )
mycursor.execute(sql, na)
mydb.commit()
```

---

## 14. 更新表数据

使用 `UPDATE` 语句，**务必指定 WHERE 条件**。

```python
sql = "UPDATE sites SET name = 'ZH' WHERE name = 'Zhihu'"
mycursor.execute(sql)
mydb.commit()
print(mycursor.rowcount, "条记录被修改")
```

### 使用占位符

```python
sql = "UPDATE sites SET name = %s WHERE name = %s"
val = ("Zhihu", "ZH")
mycursor.execute(sql, val)
mydb.commit()
```

---

## 15. 删除表

使用 `DROP TABLE` 语句，建议加上 `IF EXISTS` 避免表不存在时报错。

```python
sql = "DROP TABLE IF EXISTS sites"
mycursor.execute(sql)
```

---
