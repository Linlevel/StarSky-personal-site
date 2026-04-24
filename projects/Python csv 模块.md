# Python csv 模块
## 1. 概述

CSV（Comma-Separated Values）文件是一种常见的纯文本表格格式，每行代表一行数据，列之间用逗号（或其他分隔符）分隔。CSV 广泛用于数据交换，简单且易于处理。

Python 内置的 `csv` 模块提供了读取和写入 CSV 文件的功能，可以轻松操作表格数据。

---

## 2. 读取 CSV 文件

使用 `csv.reader` 对象读取 CSV 文件。

```python
import csv

with open('data.csv', mode='r', encoding='utf-8') as file:
    csv_reader = csv.reader(file)
    for row in csv_reader:
        print(row)          # 每行是一个字符串列表
```

**代码说明**：
- `open('data.csv', 'r', encoding='utf-8')`：以只读方式打开文件，指定 UTF-8 编码。
- `csv.reader(file)`：创建 `reader` 对象。
- 遍历 `csv_reader` 可逐行获取数据，每行为一个列表。

---

## 3. 写入 CSV 文件

使用 `csv.writer` 对象写入 CSV 文件。

```python
import csv

data = [
    ['Name', 'Age', 'City'],
    ['Alice', '30', 'New York'],
    ['Bob', '25', 'Los Angeles']
]

with open('output.csv', mode='w', encoding='utf-8', newline='') as file:
    csv_writer = csv.writer(file)
    for row in data:
        csv_writer.writerow(row)
```

**代码说明**：
- `newline=''`：避免 Windows 系统中写入时出现多余空行。
- `writerow(row)`：写入单行数据。

也可以使用 `writerows(rows)` 一次写入多行：

```python
csv_writer.writerows(data)
```

---

## 4. 使用字典处理 CSV：`DictReader` 和 `DictWriter`

`csv.DictReader` 将 CSV 每一行读取为字典（首行作为字段名）。  
`csv.DictWriter` 将字典写入 CSV 文件。

### 4.1 使用 `DictReader` 读取

```python
import csv

with open('data.csv', mode='r', encoding='utf-8') as file:
    dict_reader = csv.DictReader(file)
    for row in dict_reader:
        print(dict(row))            # 每行是一个字典，键为表头字段
        # 也可通过字段名访问，如 row['Name']
```

### 4.2 使用 `DictWriter` 写入

```python
import csv

data = [
    {'Name': 'Alice', 'Age': '30', 'City': 'New York'},
    {'Name': 'Bob', 'Age': '25', 'City': 'Los Angeles'}
]

with open('output.csv', 'w', encoding='utf-8', newline='') as file:
    fieldnames = ['Name', 'Age', 'City']
    dict_writer = csv.DictWriter(file, fieldnames=fieldnames)
    
    dict_writer.writeheader()       # 写入表头
    for row in data:
        dict_writer.writerow(row)   # 写入数据行
```

---

## 5. 核心方法与类速查表

| 类/函数                             | 说明                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| `csv.reader(file, ...)`             | 返回一个读取器对象，逐行生成列表                             |
| `csv.writer(file, ...)`             | 返回一个写入器对象，用于将列表写入 CSV                       |
| `csv.DictReader(file, ...)`         | 将 CSV 行读取为字典（首行为字段名）                          |
| `csv.DictWriter(file, fieldnames)`  | 将字典写入 CSV，需指定 `fieldnames`                          |
| `csv.register_dialect(name, ...)`   | 注册自定义方言（如分隔符、引用符等）                         |
| `csv.unregister_dialect(name)`      | 删除已注册的方言                                             |
| `csv.list_dialects()`               | 列出所有已注册的方言名称                                     |

### 写入器与读取器常用方法

| 方法                        | 适用对象       | 说明                 |
| --------------------------- | -------------- | -------------------- |
| `writerow(row)`             | `csv.writer`   | 写入一行（列表）     |
| `writerows(rows)`           | `csv.writer`   | 写入多行             |
| `writeheader()`             | `csv.DictWriter` | 写入表头（字段名）   |
| 迭代 `reader` / `DictReader` | 读取器         | 逐行获取数据         |

---

## 6. 常用参数说明

| 参数                | 默认值     | 说明                                                         |
| ------------------- | ---------- | ------------------------------------------------------------ |
| `delimiter`         | `','`      | 字段分隔符，例如 `'\t'` 表示 TSV                            |
| `quotechar`         | `'"'`      | 引用字符，用于包围包含特殊字符的字段                         |
| `quoting`           | `QUOTE_MINIMAL` | 引用规则：`QUOTE_ALL`（全部引用）、`QUOTE_NONNUMERIC`、`QUOTE_NONE` 等 |
| `skipinitialspace`  | `False`    | 是否忽略分隔符后的空格                                       |
| `lineterminator`    | `'\r\n'`   | 行结束符（写入时使用）                                       |
| `dialect`           | `'excel'`  | 预定义的方言名称，例如 `'excel'`、`'excel-tab'`              |

### 自定义方言示例（处理 TSV 文件）

```python
import csv

csv.register_dialect('tsv', delimiter='\t', quoting=csv.QUOTE_NONE)

with open('data.tsv', 'r') as file:
    reader = csv.reader(file, dialect='tsv')
    for row in reader:
        print(row)
```

---

## 7. 完整示例汇总

### 示例 1：基本 CSV 读取

```python
import csv

with open('data.csv', 'r') as f:
    reader = csv.reader(f, delimiter=',')
    for row in reader:
        print(row)
```

### 示例 2：写入多行数据

```python
data = [['Name', 'Age'], ['Alice', 25], ['Bob', 30]]
with open('output.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerows(data)
```

### 示例 3：使用字典方式读写（带表头）

```python
# 读取
with open('data.csv', 'r') as f:
    dict_reader = csv.DictReader(f)
    for row in dict_reader:
        print(row['Name'], row['Age'])

# 写入
fieldnames = ['Name', 'Age']
with open('output.csv', 'w', newline='') as f:
    dict_writer = csv.DictWriter(f, fieldnames=fieldnames)
    dict_writer.writeheader()
    dict_writer.writerow({'Name': 'Alice', 'Age': 25})
```

---
