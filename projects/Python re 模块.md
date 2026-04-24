# Python re 模块

## 1. 概述

`re` 模块是 Python 标准库中用于处理正则表达式（Regular Expression）的模块。正则表达式是一种强大的工具，用于匹配、搜索和操作文本。通过 `re` 模块，可以简洁高效地完成字符串的查找、验证、替换和分割等任务。

---

## 2. 基本用法

### 2.1 导入模块

```python
import re
```

### 2.2 常用函数

| 函数                      | 说明                                                         | 示例                                                         |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `re.match(pattern, string)` | 从字符串**起始位置**匹配，成功返回匹配对象，否则 `None`      | `re.match(r'hello', 'hello world')` → 匹配 `'hello'`         |
| `re.search(pattern, string)` | 扫描整个字符串，返回**第一个**匹配项                         | `re.search(r'world', 'hello world')` → 匹配 `'world'`        |
| `re.findall(pattern, string)` | 返回所有非重叠匹配的字符串列表                               | `re.findall(r'\d+', 'a1b22c')` → `['1', '22']`               |
| `re.finditer(pattern, string)` | 返回匹配对象的迭代器，可获取匹配位置                         | `for m in re.finditer(r'\d+', 'a1b2'): print(m.group())`     |
| `re.sub(pattern, repl, string)` | 将匹配的内容替换为 `repl`                                    | `re.sub(r'\d+', 'X', 'a1b2')` → `'aXbX'`                     |
| `re.split(pattern, string)`   | 按匹配项分割字符串，返回列表                                 | `re.split(r'\d+', 'a1b2c')` → `['a', 'b', 'c']`              |
| `re.compile(pattern)`         | 预编译正则表达式，提升复用性能                               | `pat = re.compile(r'\d+')`                                   |
| `re.escape(string)`           | 转义字符串中的特殊字符                                       | `re.escape('C:\\Users\\test.txt')`                           |
| `re.purge()`                  | 清除正则表达式缓存                                           | `re.purge()`                                                 |

**示例**：

```python
import re

# match
m = re.match(r'hello', 'hello world')
print(m.group())      # hello

# search
m = re.search(r'world', 'hello world')
print(m.group())      # world

# findall
print(re.findall(r'\d+', 'There are 3 apples and 5 oranges.'))  # ['3', '5']

# sub
print(re.sub(r'apple', 'banana', 'I have an apple.'))  # I have an banana.
```

---

## 3. 匹配对象（Match）常用方法/属性

当匹配成功时，返回一个 `Match` 对象，常用属性和方法如下：

| 方法/属性                | 说明                                   | 示例                                                         |
| ------------------------ | -------------------------------------- | ------------------------------------------------------------ |
| `group()`                | 返回整个匹配的字符串                   | `m.group()` → `'12'`                                         |
| `group(n)`               | 返回第 n 个捕获组的内容                | `m = re.search(r'(\d)(\d)', '12'); m.group(1)` → `'1'`       |
| `groups()`               | 返回所有捕获组的元组                   | `m.groups()` → `('1','2')`                                   |
| `start()` / `end()`      | 匹配的起始/结束位置                    | `m.start()` → `0`, `m.end()` → `2`                           |
| `span()`                 | 返回 `(start, end)` 元组               | `m.span()` → `(0, 2)`                                        |

---

## 4. 正则表达式基本语法

### 4.1 普通字符

字母、数字等直接匹配自身。

```python
re.search(r'cat', 'The cat is on the mat.')   # 匹配 'cat'
```

### 4.2 特殊字符（元字符）

| 元字符 | 说明                             | 示例匹配             |
| ------ | -------------------------------- | -------------------- |
| `.`    | 匹配除换行符外的任意单个字符     | `a.c` → `'abc'`      |
| `*`    | 匹配前面的字符 0 次或多次        | `a*` → `''` 或 `'a'` |
| `+`    | 匹配前面的字符 1 次或多次        | `a+` → `'a'`, `'aa'` |
| `?`    | 匹配前面的字符 0 次或 1 次       | `a?` → `''`, `'a'`   |
| `\d`   | 匹配任意数字（等价于 `[0-9]`）   | `\d+` → `'123'`      |
| `\D`   | 匹配非数字                       | `\D+` → `'abc'`      |
| `\w`   | 匹配字母、数字、下划线           | `\w+` → `'Ab_1'`     |
| `\W`   | 匹配非单词字符                   | `\W+` → `'!@#'`      |
| `\s`   | 匹配空白字符（空格、制表符等）   | `\s+` → `' \t'`      |
| `\S`   | 匹配非空白字符                   | `\S+` → `'abc'`      |
| `[]`   | 字符集，匹配其中任意一个字符     | `[A-Za-z]` → 任意字母 |
| `^`    | 匹配字符串开头                   | `^\d+` → 开头的数字  |
| `$`    | 匹配字符串结尾                   | `\d+$` → 结尾的数字  |
| `|`    | 或操作                           | `cat|dog` → `'cat'` 或 `'dog'` |
| `()`   | 捕获分组                         | `(\d+)` → 提取数字   |
| `{m,n}` | 匹配前一个字符 m 到 n 次        | `a{2,3}` → `'aa'` 或 `'aaa'` |

### 4.3 字符集示例

```python
re.findall(r'[aeiou]', 'Hello World!')   # ['e', 'o', 'o']
```

### 4.4 分组示例

```python
re.search(r'(ab)+', 'ababab').group()   # 'ababab'
```

---

## 5. 编译标志（flags）

| 标志                       | 说明                                                         |
| -------------------------- | ------------------------------------------------------------ |
| `re.IGNORECASE` (`re.I`)   | 忽略大小写                                                   |
| `re.MULTILINE` (`re.M`)    | 多行模式，`^` 和 `$` 匹配每行的开头/结尾                     |
| `re.DOTALL` (`re.S`)       | 使 `.` 匹配包括换行符在内的所有字符                          |
| `re.ASCII`                 | 使 `\w`、`\W` 等仅匹配 ASCII 字符                            |
| `re.VERBOSE` (`re.X`)      | 允许正则表达式中添加注释和空白，提高可读性                   |

**示例**：

```python
# 忽略大小写
re.search(r'abc', 'ABC', re.I)          # 匹配成功

# 多行模式
re.findall(r'^\d+', '1\n2\n3', re.M)    # ['1', '2', '3']

# 详细注释模式
pattern = re.compile(r'''
    ^(?P<username>\w+)   # 用户名
    :(?P<password>\S+)   # 密码
    @(?P<domain>\w+\.\w+) # 域名
$''', re.VERBOSE)
```

---

## 6. 实践练习

### 6.1 验证电子邮件地址

```python
pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
email = "example@example.com"
if re.match(pattern, email):
    print("有效的电子邮件地址")
```

### 6.2 提取电话号码（格式：123-456-7890）

```python
text = "My phone number is 123-456-7890."
match = re.search(r'\d{3}-\d{3}-\d{4}', text)
if match:
    print("找到的电话号码:", match.group())
```

### 6.3 提取所有邮箱地址

```python
text = "Contact: admin@example.com, support@test.org"
emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', text)
print(emails)   # ['admin@example.com', 'support@test.org']
```

### 6.4 替换日期格式（MM-DD-YYYY → YYYY年MM月DD日）

```python
date_str = "Today is 05-15-2023"
new_str = re.sub(r'(\d{2})-(\d{2})-(\d{4})', r'\3年\1月\2日', date_str)
print(new_str)   # Today is 2023年05月15日
```

### 6.5 使用 `re.VERBOSE` 解析用户:密码@域名

```python
pattern = re.compile(r'''
    ^(?P<username>\w+)  # 用户名
    :(?P<password>\S+)  # 密码
    @(?P<domain>\w+\.\w+)  # 域名
$''', re.VERBOSE)

m = pattern.match("john:pass123@example.com")
if m:
    print(m.groupdict())   # {'username': 'john', 'password': 'pass123', 'domain': 'example.com'}
```

### 6.6 按数字分割字符串

```python
text = "Apple1Banana2Cherry3Date"
parts = re.split(r'\d+', text)
print(parts)   # ['Apple', 'Banana', 'Cherry', 'Date']
```

---

## 7. 注意事项

- **原始字符串**：建议使用 `r''` 定义正则表达式，避免转义符冲突（如 `r'\d'` 而非 `'\\d'`）。
- **贪婪与懒惰**：默认 `*` 和 `+` 是贪婪的（匹配尽可能多的字符），使用 `*?` 或 `+?` 可变为非贪婪（匹配尽可能少的字符）。
- **性能**：频繁使用的正则表达式应使用 `re.compile()` 预编译；避免灾难性回溯（如 `(a+)+` 等嵌套量词）。
- **安全性**：不要对不可信输入使用 `re.match` 或 `re.search` 处理可能消耗大量时间的模式。

---
