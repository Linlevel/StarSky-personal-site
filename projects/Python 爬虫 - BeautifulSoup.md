# Python 爬虫 - BeautifulSoup 

## 1. 概述

Python 爬虫（Web Scraping）是指通过编写 Python 程序从互联网上自动提取信息的过程。基本流程包括：

1. 发送 HTTP 请求（常用 `requests` 库）
2. 解析 HTML 内容（常用 `BeautifulSoup`、`lxml`、`Scrapy` 等）
3. 提取数据（定位 HTML 元素）
4. 存储数据（数据库、CSV、JSON 等）

本章重点介绍 **BeautifulSoup**，它是一个用于解析 HTML 和 XML 文档的 Python 库，非常适合网页抓取和数据挖掘。

---

## 2. 安装 BeautifulSoup

需要安装 `beautifulsoup4` 和一个解析器（推荐 `lxml`，也可使用内置的 `html.parser`）。

```bash
pip install beautifulsoup4
pip install lxml      # 可选，速度更快
```

---

## 3. 基本用法

### 3.1 导入并解析网页

通常与 `requests` 配合使用：

```python
from bs4 import BeautifulSoup
import requests

url = 'https://cn.bing.com/'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'lxml')   # 使用 lxml 解析器
# 或 soup = BeautifulSoup(response.text, 'html.parser')
```

### 3.2 获取网页标题

```python
title_tag = soup.find('title')
if title_tag:
    print(title_tag.get_text())
else:
    print("未找到<title>标签")
```

### 3.3 处理中文乱码

- 方法一：自动检测编码（使用 `chardet`）
- 方法二：手动指定编码，如 `response.encoding = 'utf-8'`

```python
import requests
import chardet

response = requests.get('https://cn.bing.com/')
encoding = chardet.detect(response.content)['encoding']
response.encoding = encoding
```

---

## 4. 查找标签

### 4.1 `find()` 与 `find_all()`

- `find()`：返回第一个匹配的标签
- `find_all()`：返回所有匹配的标签列表

```python
# 查找第一个 <a> 标签
first_link = soup.find('a')
print(first_link)

# 获取 href 属性
first_link_url = first_link.get('href')
print(first_link_url)

# 查找所有 <a> 标签
all_links = soup.find_all('a')
print(all_links)
```

### 4.2 获取标签文本

`get_text()` 提取标签内的纯文本内容：

```python
paragraph_text = soup.find('p').get_text()
all_text = soup.get_text()
```

### 4.3 查找子标签和父标签

```python
# 父标签
parent_tag = first_link.parent

# 子标签
children = first_link.children
```

### 4.4 查找具有特定属性的标签

使用 `class_` 参数（注意下划线）或 `id` 参数：

```python
# 查找 class="example-class" 的所有 <div>
divs = soup.find_all('div', class_='example-class')

# 查找 id="unique-id" 的 <p>
unique_p = soup.find('p', id='unique-id')
```

示例：获取百度搜索按钮的 `value` 属性

```python
unique_input = soup.find('input', id='su')
input_value = unique_input['value']
print(input_value)   # 百度一下
```

---

## 5. 高级用法

### 5.1 CSS 选择器

使用 `select()` 方法，支持类似 jQuery 的语法：

```python
# 查找所有 class="example" 的 <div>
example_divs = soup.select('div.example')

# 查找所有带有 href 属性的 <a>
links = soup.select('a[href]')
```

### 5.2 处理嵌套标签

递归查找嵌套结构：

```python
nested_divs = soup.find_all('div', class_='nested')
for div in nested_divs:
    print(div.get_text())
```

### 5.3 修改网页内容

- 修改属性：`tag['attr'] = new_value`
- 修改文本：`tag.string = new_text`
- 删除标签：`tag.decompose()`

```python
# 修改第一个 <a> 的 href
first_link['href'] = 'http://new-url.com'

# 修改第一个 <p> 的文本
first_paragraph = soup.find('p')
first_paragraph.string = 'Updated content'

# 删除标签
first_paragraph.decompose()
```

### 5.4 转换回字符串

```python
html_str = str(soup)   # 将 BeautifulSoup 对象转为 HTML 字符串
```

---

## 6. BeautifulSoup 常用方法/属性速查表

| 方法/属性                     | 描述                                           | 示例                                                       |
| ----------------------------- | ---------------------------------------------- | ---------------------------------------------------------- |
| `BeautifulSoup()`             | 解析 HTML/XML 文档，返回 BeautifulSoup 对象   | `soup = BeautifulSoup(html, 'html.parser')`                |
| `.prettify()`                 | 格式化并美化文档内容                           | `print(soup.prettify())`                                   |
| `.find(name, attrs)`          | 查找第一个匹配的标签                           | `tag = soup.find('a')`                                     |
| `.find_all(name, attrs)`      | 查找所有匹配的标签，返回列表                   | `tags = soup.find_all('a')`                                |
| `.find_all_next()`            | 查找当前标签后所有符合条件的标签               | `tags = soup.find('div').find_all_next('p')`               |
| `.find_all_previous()`        | 查找当前标签前所有符合条件的标签               | `tags = soup.find('div').find_all_previous('p')`           |
| `.find_parent()`              | 返回当前标签的父标签                           | `parent = tag.find_parent()`                               |
| `.find_all_parents()`         | 查找当前标签的所有父标签                       | `parents = tag.find_all_parents()`                         |
| `.find_next_sibling()`        | 查找当前标签的下一个兄弟标签                   | `next_sib = tag.find_next_sibling()`                       |
| `.find_previous_sibling()`    | 查找当前标签的前一个兄弟标签                   | `prev_sib = tag.find_previous_sibling()`                   |
| `.parent`                     | 获取当前标签的父标签                           | `parent = tag.parent`                                      |
| `.next_sibling`               | 获取当前标签的下一个兄弟标签                   | `next_sib = tag.next_sibling`                              |
| `.previous_sibling`           | 获取当前标签的前一个兄弟标签                   | `prev_sib = tag.previous_sibling`                          |
| `.get_text()`                 | 提取标签内的文本内容（忽略 HTML 标签）         | `text = tag.get_text()`                                    |
| `.attrs`                      | 返回标签的所有属性（字典）                     | `href = tag.attrs['href']`                                 |
| `.string`                     | 获取标签内的字符串内容（若只有文本）           | `content = tag.string`                                     |
| `.name`                       | 返回标签的名称                                 | `tag_name = tag.name`                                      |
| `.contents`                   | 返回标签的所有子元素（列表）                   | `children = tag.contents`                                  |
| `.descendants`                | 返回标签的所有后代元素（生成器）               | `for child in tag.descendants: print(child)`               |
| `.previous_element`           | 获取当前标签的前一个元素（不含文本）           | `prev_elem = tag.previous_element`                         |
| `.next_element`               | 获取当前标签的下一个元素（不含文本）           | `next_elem = tag.next_element`                             |
| `.decompose()`                | 从树中删除当前标签及其内容                     | `tag.decompose()`                                          |
| `.unwrap()`                   | 移除标签本身，保留其子内容                     | `tag.unwrap()`                                             |
| `.insert(pos, new_tag)`       | 向标签内插入新标签或文本                       | `tag.insert(0, new_tag)`                                   |
| `.insert_before(new_tag)`     | 在当前标签前插入新标签                         | `tag.insert_before(new_tag)`                               |
| `.insert_after(new_tag)`      | 在当前标签后插入新标签                         | `tag.insert_after(new_tag)`                                |
| `.extract()`                  | 删除标签并返回该标签                           | `extracted = tag.extract()`                                |
| `.replace_with(new_tag)`      | 替换当前标签及其内容                           | `tag.replace_with(new_tag)`                                |
| `.has_attr(attr)`             | 检查标签是否有指定属性                         | `if tag.has_attr('href'):`                                 |
| `.get(attr, default)`         | 获取指定属性的值                               | `href = tag.get('href')`                                   |
| `.clear()`                    | 清空标签的所有内容                             | `tag.clear()`                                              |
| `.encode()`                   | 编码标签内容为字节流                           | `encoded = tag.encode()`                                   |
| `.is_empty_element`           | 检查是否为空元素（如 `<br>`）                  | `if tag.is_empty_element:`                                 |
| `.is_ancestor_of(other)`      | 检查当前标签是否是的祖先                       | `if tag.is_ancestor_of(another_tag):`                      |
| `.is_descendant_of(other)`    | 检查当前标签是否是的后代                       | `if tag.is_descendant_of(another_tag):`                    |
| `.style`                      | 获取内联样式                                   | `style = tag['style']`                                     |
| `.id`                         | 获取 id 属性                                   | `id = tag['id']`                                           |
| `.class_`                     | 获取 class 属性                                | `class_name = tag['class']`                                |
| `find_all(string=...)`        | 使用字符串查找匹配的标签                       | `tag = soup.find('div', class_='container')`               |
| `find_all(id=...)`            | 查找指定 id 的标签                             | `tag = soup.find_all(id='main')`                           |
| `find_all(attrs={...})`       | 查找具有指定属性的标签                         | `tag = soup.find_all(attrs={"href": "http://example.com"})` |

---
