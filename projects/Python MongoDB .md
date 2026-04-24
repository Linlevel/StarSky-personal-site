# Python MongoDB 

## 1. MongoDB 简介

**MongoDB** 是目前最流行的 NoSQL 数据库之一，使用的数据类型为 **BSON**（类似 JSON）。

> 更多内容可参考 [MongoDB 教程](https://www.runoob.com/mongodb/mongodb-tutorial.html)。

---

## 2. PyMongo 驱动安装

Python 连接 MongoDB 需要使用 PyMongo 驱动。

### 使用 pip 安装

```bash
# 安装最新版
python3 -m pip install pymongo

# 安装指定版本
python3 -m pip install pymongo==3.5.1

# 升级 PyMongo
python3 -m pip install --upgrade pymongo
```

### 使用 easy_install 安装（旧版 Python）

```bash
python -m easy_install pymongo
python -m easy_install -U pymongo   # 升级
```

---

## 3. 测试 PyMongo 是否安装成功

创建 `demo_test_mongodb.py`：

```python
#!/usr/bin/python3
import pymongo
```

运行无报错即表示安装成功。

---

## 4. 创建数据库

使用 `MongoClient` 对象连接 MongoDB，并指定数据库名。

```python
#!/usr/bin/python3
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["runoobdb"]
```

> **注意**：在 MongoDB 中，数据库只有在插入内容后才会真正创建。也就是说，创建数据库后，需要先创建集合（数据表）并插入文档（记录），数据库才会生效。

### 判断数据库是否已存在

```python
#!/usr/bin/python3
import pymongo

myclient = pymongo.MongoClient('mongodb://localhost:27017/')
dblist = myclient.list_database_names()   # Python 3.7+ 推荐
# dblist = myclient.database_names()      # 旧版，已废弃

if "runoobdb" in dblist:
    print("数据库已存在！")
```

---

## 5. 创建集合

MongoDB 中的集合类似于 SQL 中的表。

### 创建集合

```python
#!/usr/bin/python3
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["runoobdb"]

mycol = mydb["sites"]
```

> **注意**：集合同样在插入第一个文档后才会真正创建。

### 判断集合是否已存在

```python
#!/usr/bin/python3
import pymongo

myclient = pymongo.MongoClient('mongodb://localhost:27017/')
mydb = myclient['runoobdb']

collist = mydb.list_collection_names()    # Python 3.7+ 推荐
# collist = mydb.collection_names()       # 旧版，已废弃

if "sites" in collist:
    print("集合已存在！")
```

---

## 6. 后续操作

| 序号 | 功能     | 说明             |
| ---- | -------- | ---------------- |
| 1    | 添加数据 | 插入文档         |
| 2    | 查询数据 | 查询文档         |
| 3    | 修改数据 | 更新文档         |
| 4    | 数据排序 | 对结果集排序     |
| 5    | 删除数据 | 删除文档或集合   |

> 详细操作方法可参考相关教程。

---
