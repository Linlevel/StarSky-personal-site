# Python3 JSON 数据解析

## 1. JSON 简介

**JSON**（JavaScript Object Notation）是一种轻量级的数据交换格式，易于人阅读和编写，也易于机器解析和生成。

> 如果不熟悉 JSON 语法，可先查阅 [JSON 教程](https://www.runoob.com/json/json-tutorial.html)。

---

## 2. Python 的 `json` 模块

Python3 标准库提供 `json` 模块，用于 JSON 数据的编码（序列化）和解码（反序列化）。核心函数：

| 函数                        | 描述                     |
| --------------------------- | ------------------------ |
| `json.dumps(obj)`           | 将 Python 对象编码为 JSON 字符串 |
| `json.loads(json_string)`   | 将 JSON 字符串解码为 Python 对象 |
| `json.dump(obj, file)`      | 将 Python 对象写入 JSON 文件 |
| `json.load(file)`           | 从 JSON 文件读取并解码为 Python 对象 |

---

## 3. 类型转换对照表

### Python → JSON 编码转换

| Python 类型                         | JSON 类型 |
| ----------------------------------- | --------- |
| `dict`                              | object    |
| `list`, `tuple`                     | array     |
| `str`                               | string    |
| `int`, `float`, 枚举派生类型        | number    |
| `True`                              | true      |
| `False`                             | false     |
| `None`                              | null      |

### JSON → Python 解码转换

| JSON 类型       | Python 类型 |
| --------------- | ----------- |
| object          | dict        |
| array           | list        |
| string          | str         |
| number (整数)   | int         |
| number (实数)   | float       |
| true            | True        |
| false           | False       |
| null            | None        |

---

## 4. 基本示例：`dumps()` 与 `loads()`

### 编码示例（Python → JSON）

```python
#!/usr/bin/python3
import json

# Python 字典
data = {
    'no': 1,
    'name': 'Runoob',
    'url': 'https://www.runoob.com'
}

json_str = json.dumps(data)
print("Python 原始数据：", repr(data))
print("JSON 对象：", json_str)
```

**输出：**

```
Python 原始数据： {'no': 1, 'name': 'Runoob', 'url': 'https://www.runoob.com'}
JSON 对象： {"no": 1, "name": "Runoob", "url": "https://www.runoob.com"}
```

### 解码示例（JSON → Python）

```python
#!/usr/bin/python3
import json

data1 = {
    'no': 1,
    'name': 'Runoob',
    'url': 'https://www.runoob.com'
}

json_str = json.dumps(data1)
print("Python 原始数据：", repr(data1))
print("JSON 对象：", json_str)

# 解码 JSON 字符串为 Python 字典
data2 = json.loads(json_str)
print("data2['name']:", data2['name'])
print("data2['url']:", data2['url'])
```

**输出：**

```
Python 原始数据： {'no': 1, 'name': 'Runoob', 'url': 'https://www.runoob.com'}
JSON 对象： {"no": 1, "name": "Runoob", "url": "https://www.runoob.com"}
data2['name']: Runoob
data2['url']: https://www.runoob.com
```

---

## 5. 文件读写：`dump()` 与 `load()`

当需要直接读写 JSON 文件时，使用 `json.dump()` 和 `json.load()` 更方便，无需手动处理字符串转换。

### 写入 JSON 文件

```python
import json

data = {
    'no': 1,
    'name': 'Runoob',
    'url': 'https://www.runoob.com'
}

with open('data.json', 'w') as f:
    json.dump(data, f)
```

### 读取 JSON 文件

```python
import json

with open('data.json', 'r') as f:
    data = json.load(f)

print(data)
```

---

## 6. 其他常用参数

`json.dumps()` 和 `json.dump()` 支持多个可选参数，常见的有：

- `indent`：缩进空格数，美化输出
- `sort_keys`：是否按 key 排序（默认 `False`）
- `ensure_ascii`：是否将非 ASCII 字符转义为 `\uXXXX`（默认 `True`，设为 `False` 可保留原字符）

### 示例：美化输出并保留中文

```python
import json

data = {'name': '高级教程', 'url': 'https://www.runoob.com'}
json_str = json.dumps(data, indent=4, ensure_ascii=False)
print(json_str)
```

**输出：**

```json
{
    "name": "高级教程",
    "url": "https://www.runoob.com"
}
```

---

## 7. 参考文档

更多详细信息请参阅 Python 官方文档：  
[https://docs.python.org/3/library/json.html](https://docs.python.org/3/library/json.html)

---
