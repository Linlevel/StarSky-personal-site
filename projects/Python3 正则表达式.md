# Python3 正则表达式

## 概述

正则表达式是一个特殊的字符序列，用于检查一个字符串是否与某种模式匹配。在 Python 中，通过 `re` 模块提供正则表达式的支持。

`re` 模块提供了一系列函数，允许在字符串中进行模式匹配、搜索、替换等操作，使 Python 具备完整的正则表达式功能。

---

## 1. `re.match()` 函数

尝试从字符串的**起始位置**匹配一个模式。如果不是起始位置匹配成功，则返回 `None`。

### 语法

```python
re.match(pattern, string, flags=0)
```

### 参数说明

| 参数      | 描述                                                         |
|-----------|--------------------------------------------------------------|
| `pattern` | 匹配的正则表达式                                             |
| `string`  | 要匹配的字符串                                               |
| `flags`   | 标志位，控制匹配方式（如大小写敏感、多行匹配等），可选参数 |

### 返回值

- 匹配成功：返回一个匹配对象（`Match` object）
- 匹配失败：返回 `None`

### 匹配对象方法

| 方法                  | 描述                                                                 |
|-----------------------|----------------------------------------------------------------------|
| `group(num=0)`        | 返回整个匹配的字符串，可指定多个组号，返回对应值的元组               |
| `groups()`            | 返回一个包含所有小组字符串的元组（从第1组开始）                      |

### 示例

```python
import re

print(re.match('www', 'www.runoob.com').span())  # 起始位置匹配，输出 (0, 3)
print(re.match('com', 'www.runoob.com'))         # 非起始位置，输出 None
```

```python
import re

line = "Cats are smarter than dogs"
# .*? 表示非贪婪匹配
matchObj = re.match(r'(.*) are (.*?) .*', line, re.M | re.I)

if matchObj:
    print("matchObj.group() : ", matchObj.group())      # 整个匹配
    print("matchObj.group(1) : ", matchObj.group(1))    # 第一个分组
    print("matchObj.group(2) : ", matchObj.group(2))    # 第二个分组
else:
    print("No match!!")
```

**输出：**

```
matchObj.group() :  Cats are smarter than dogs
matchObj.group(1) :  Cats
matchObj.group(2) :  smarter
```

---

## 2. `re.search()` 函数

扫描**整个字符串**，返回第一个成功的匹配。

### 语法

```python
re.search(pattern, string, flags=0)
```

参数说明与 `re.match()` 相同。

### 示例

```python
import re

print(re.search('www', 'www.runoob.com').span())  # 输出 (0, 3)
print(re.search('com', 'www.runoob.com').span())  # 输出 (11, 14)
```

```python
import re

line = "Cats are smarter than dogs"
searchObj = re.search(r'(.*) are (.*?) .*', line, re.M | re.I)

if searchObj:
    print("searchObj.group() : ", searchObj.group())
    print("searchObj.group(1) : ", searchObj.group(1))
    print("searchObj.group(2) : ", searchObj.group(2))
```

**输出：**

```
searchObj.group() :  Cats are smarter than dogs
searchObj.group(1) :  Cats
searchObj.group(2) :  smarter
```

---

## 3. `re.match()` 与 `re.search()` 的区别

- `re.match()` 只从字符串**开头**匹配，若开头不符合则失败返回 `None`
- `re.search()` 搜索整个字符串，直到找到第一个匹配

### 示例对比

```python
import re

line = "Cats are smarter than dogs"

matchObj = re.match(r'dogs', line, re.M | re.I)
if matchObj:
    print("match -->", matchObj.group())
else:
    print("No match!!")          # 输出 No match!!

searchObj = re.search(r'dogs', line, re.M | re.I)
if searchObj:
    print("search -->", searchObj.group())  # 输出 search --> dogs
```

---

## 4. 检索和替换：`re.sub()`

用于替换字符串中的匹配项。

### 语法

```python
re.sub(pattern, repl, string, count=0, flags=0)
```

### 参数说明

| 参数      | 描述                                                       |
|-----------|------------------------------------------------------------|
| `pattern` | 正则表达式模式                                             |
| `repl`    | 替换的字符串，也可以是一个函数                             |
| `string`  | 原始字符串                                                 |
| `count`   | 替换的最大次数，默认 0 表示替换所有匹配                    |
| `flags`   | 匹配模式，数字形式                                         |

前三个为必选参数。

### 示例

```python
import re

phone = "2004-959-559 # 这是一个电话号码"

# 删除注释
num = re.sub(r'#.*$', "", phone)
print("电话号码 : ", num)   # 输出 2004-959-559

# 移除非数字字符
num = re.sub(r'\D', "", phone)
print("电话号码 : ", num)   # 输出 2004959559
```

### `repl` 参数为函数示例

```python
import re

def double(matched):
    value = int(matched.group('value'))
    return str(value * 2)

s = 'A23G4HFD567'
print(re.sub('(?P<value>\d+)', double, s))  # 输出 A46G8HFD1134
```

---

## 5. `re.compile()` 函数

编译正则表达式，生成一个正则表达式对象（`Pattern`），可复用供 `match()`、`search()` 等函数使用。

### 语法

```python
re.compile(pattern[, flags])
```

### 常用标志（flags）

| 标志                     | 描述                                                   |
|--------------------------|--------------------------------------------------------|
| `re.IGNORECASE` / `re.I` | 忽略大小写                                             |
| `re.MULTILINE` / `re.M`  | 多行模式，影响 `^` 和 `$`                              |
| `re.DOTALL` / `re.S`     | 使 `.` 匹配包括换行符在内的任意字符                    |
| `re.ASCII`               | 使 `\w`、`\d` 等仅匹配 ASCII 字符                      |
| `re.VERBOSE` / `re.X`    | 忽略空格和注释，便于组织复杂表达式                     |

这些标志可单独使用，也可通过按位或 `|` 组合。

### 示例

```python
import re

pattern = re.compile(r'\d+')   # 匹配至少一个数字
m = pattern.match('one12twothree34four', 3, 10)  # 从索引3开始匹配
print(m)                       # 返回 Match 对象
print(m.group(0))              # '12'
print(m.start(0))              # 3
print(m.end(0))                # 5
print(m.span(0))               # (3, 5)
```

```python
pattern = re.compile(r'([a-z]+) ([a-z]+)', re.I)
m = pattern.match('Hello World Wide Web')
print(m.group(0))      # 'Hello World'
print(m.group(1))      # 'Hello'
print(m.group(2))      # 'World'
print(m.groups())      # ('Hello', 'World')
```

---

## 6. `re.findall()`

查找字符串中所有匹配的子串，返回一个列表。若有多个匹配模式，返回元组列表；无匹配时返回空列表。

### 语法

```python
re.findall(pattern, string, flags=0)
# 或
pattern.findall(string[, pos[, endpos]])
```

### 示例

```python
import re

result1 = re.findall(r'\d+', 'runoob 123 google 456')
print(result1)   # ['123', '456']

pattern = re.compile(r'\d+')
result2 = pattern.findall('runoob 123 google 456')
result3 = pattern.findall('run88oob123google456', 0, 10)
print(result2)   # ['123', '456']
print(result3)   # ['88', '12']

# 多个匹配模式，返回元组列表
result = re.findall(r'(\w+)=(\d+)', 'set width=20 and height=10')
print(result)    # [('width', '20'), ('height', '10')]
```

---

## 7. `re.finditer()`

与 `findall` 类似，但返回一个迭代器，每个元素是匹配对象。

### 语法

```python
re.finditer(pattern, string, flags=0)
```

### 示例

```python
import re

it = re.finditer(r"\d+", "12a32bc43jf3")
for match in it:
    print(match.group())
# 输出：
# 12
# 32
# 43
# 3
```

---

## 8. `re.split()`

按照能够匹配的子串分割字符串，返回列表。

### 语法

```python
re.split(pattern, string[, maxsplit=0, flags=0])
```

| 参数       | 描述                         |
|------------|------------------------------|
| `maxsplit` | 分割次数，默认为 0 表示不限制 |

### 示例

```python
import re

print(re.split('\W+', 'runoob, runoob, runoob.'))
# ['runoob', 'runoob', 'runoob', '']

print(re.split('(\W+)', ' runoob, runoob, runoob.'))
# ['', ' ', 'runoob', ', ', 'runoob', ', ', 'runoob', '.', '']

print(re.split('\W+', ' runoob, runoob, runoob.', 1))
# ['', 'runoob, runoob, runoob.']

# 找不到匹配时，不分割
print(re.split('a*', 'hello world'))   # ['hello world']
```

---

## 9. 正则表达式对象

### `re.RegexObject`

- `re.compile()` 返回的对象，即编译后的正则表达式对象。

### `re.MatchObject`

- `group()`：返回被 RE 匹配的字符串
- `start()`：返回匹配开始的位置
- `end()`：返回匹配结束的位置（最后一个字符索引+1）
- `span()`：返回元组 `(start, end)`

---

## 10. 正则表达式修饰符（可选标志）

以下标志可单独使用或通过 `|` 组合。

| 修饰符                       | 描述                                                         | 示例                                                         |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `re.I` (IGNORECASE)          | 忽略大小写                                                   | `pattern = re.compile(r'apple', re.I)`<br>`pattern.match('Apple').group()` → `'Apple'` |
| `re.M` (MULTILINE)           | 多行匹配，影响 `^` 和 `$`                                    | `re.compile(r'^\d+', re.M).findall('123\n456\n789')` → `['123','456','789']` |
| `re.S` (DOTALL)              | 使 `.` 匹配包括换行符在内的任意字符                          | `re.compile(r'a.b', re.S).match('a\nb').group()` → `'a\nb'` |
| `re.ASCII`                   | 使 `\w`, `\d`, `\s` 等仅匹配 ASCII 字符                      | `re.compile(r'\w+', re.ASCII).match('Hello123').group()` → `'Hello123'` |
| `re.X` (VERBOSE)             | 忽略空格和注释，可清晰组织复杂表达式                         | `re.compile(r'''\d+  # 数字<br>[a-z]+ # 小写字母''', re.X).match('123abc').group()` → `'123abc'` |

---

## 11. 常用正则表达式模式

### 特殊字符（常用）

| 模式       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| `^`        | 匹配字符串开头                                               |
| `$`        | 匹配字符串结尾                                               |
| `.`        | 匹配除换行符外的任意字符（`re.S` 时匹配换行符）              |
| `[...]`    | 匹配中括号内的任意一个字符                                   |
| `[^...]`   | 匹配不在中括号内的任意一个字符                               |
| `re*`      | 匹配 0 个或多个 `re`                                         |
| `re+`      | 匹配 1 个或多个 `re`                                         |
| `re?`      | 匹配 0 个或 1 个 `re`（非贪婪）                              |
| `re{n}`    | 匹配 n 个 `re`                                               |
| `re{n,}`   | 匹配至少 n 个 `re`                                           |
| `re{n,m}`  | 匹配 n 到 m 个 `re`（贪婪）                                  |
| `a|b`      | 匹配 a 或 b                                                  |
| `(re)`     | 分组，捕获括号内的表达式                                     |
| `(?P<name>re)` | 命名分组                                                   |
| `(?:re)`   | 非捕获分组                                                   |
| `(?=re)`   | 前向肯定断言                                                 |
| `(?!re)`   | 前向否定断言                                                 |
| `\w`       | 匹配字母、数字、下划线，等价于 `[A-Za-z0-9_]`                |
| `\W`       | 匹配非单词字符                                               |
| `\s`       | 匹配空白字符（空格、制表符、换页符等）                       |
| `\S`       | 匹配非空白字符                                               |
| `\d`       | 匹配数字，等价于 `[0-9]`                                     |
| `\D`       | 匹配非数字                                                   |
| `\b`       | 单词边界                                                     |
| `\B`       | 非单词边界                                                   |
| `\n, \t`   | 匹配换行符、制表符等                                         |
| `\1...\9`  | 匹配第 n 个分组的内容                                        |

### 常见实例

| 实例              | 描述                         |
| ----------------- | ---------------------------- |
| `[Pp]ython`       | 匹配 "Python" 或 "python"    |
| `[aeiou]`         | 匹配任意一个元音字母         |
| `[0-9]`           | 匹配任意数字                 |
| `[a-z]`           | 匹配任意小写字母             |
| `[A-Z]`           | 匹配任意大写字母             |
| `[^aeiou]`        | 匹配除元音外的任意字符       |
| `\d{3}-\d{3}-\d{4}` | 匹配形如 123-456-7890 的电话号 |

---
