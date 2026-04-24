# Python3 XML 解析

## 1. 什么是 XML？

**XML**（可扩展标记语言，eXtensible Markup Language）是标准通用标记语言的子集，用于标记电子文件，使其具有结构性。XML 被设计用来传输和存储数据，是一套定义语义标记的规则，这些标记将文档分成多个部件并加以标识。

XML 也是一种**元标记语言**，即定义了用于定义其他与特定领域相关的、语义化的、结构化标记语言的句法语言。

---

## 2. Python 解析 XML 的常见方法

Python 提供了三种常用的 XML 解析接口：

| 方法            | 描述                                                                 |
| --------------- | -------------------------------------------------------------------- |
| **ElementTree** | `xml.etree.ElementTree` 模块，简单高效的 API，用于解析和生成 XML 文档 |
| **SAX**         | 事件驱动模型，解析时触发事件并调用用户定义的回调函数                 |
| **DOM**         | 将 XML 数据在内存中解析成树结构，通过对树的操作来操作 XML            |

本章节使用以下 XML 文件 `movies.xml` 作为示例：

```xml
<collection shelf="New Arrivals">
    <movie title="Enemy Behind">
        <type>War, Thriller</type>
        <format>DVD</format>
        <year>2003</year>
        <rating>PG</rating>
        <stars>10</stars>
        <description>Talk about a US-Japan war</description>
    </movie>
    <movie title="Transformers">
        <type>Anime, Science Fiction</type>
        <format>DVD</format>
        <year>1989</year>
        <rating>R</rating>
        <stars>8</stars>
        <description>A schientific fiction</description>
    </movie>
    <movie title="Trigun">
        <type>Anime, Action</type>
        <format>DVD</format>
        <episodes>4</episodes>
        <rating>PG</rating>
        <stars>10</stars>
        <description>Vash the Stampede!</description>
    </movie>
    <movie title="Ishtar">
        <type>Comedy</type>
        <format>VHS</format>
        <rating>PG</rating>
        <stars>2</stars>
        <description>Viewable boredom</description>
    </movie>
</collection>
```

---

## 3. 使用 ElementTree 解析 XML

`xml.etree.ElementTree` 是 Python 标准库中处理 XML 的模块。

### 核心概念

- **ElementTree**：代表整个 XML 文档的树形结构，包含一个或多个 `Element` 对象。
- **Element**：代表 XML 文档中的一个元素，每个元素有标签、属性和零个或多个子元素。

### 解析 XML

#### 从字符串解析：`fromstring()`

```python
import xml.etree.ElementTree as ET

xml_string = '<root><element>Some data</element></root>'
root = ET.fromstring(xml_string)
```

#### 从文件解析：`parse()`

```python
tree = ET.parse('example.xml')
root = tree.getroot()
```

### 遍历 XML 树

- `find(tag)`：查找第一个匹配的子元素
- `findall(tag)`：查找所有匹配的子元素

```python
title_element = root.find('title')
book_elements = root.findall('book')
```

### 访问元素属性和文本

- `attrib` 属性：获取元素的属性字典
- `text` 属性：获取元素的文本内容

```python
price = book_element.attrib['price']
title_text = title_element.text
```

### 创建 XML

```python
# 创建新元素
new_element = ET.Element('new_element')

# 创建子元素
new_sub_element = ET.SubElement(root, 'new_sub_element')
```

### 修改 XML

- 直接修改 `attrib` 和 `text` 属性来更改元素。
- 使用 `remove()` 删除元素：`root.remove(title_element)`

### 示例：读取 XML 字符串

```python
import xml.etree.ElementTree as ET

xml_string = '''
<bookstore>
    <book>
        <title>Introduction to Python</title>
        <author>John Doe</author>
        <price>29.99</price>
    </book>
    <book>
        <title>Data Science with Python</title>
        <author>Jane Smith</author>
        <price>39.95</price>
    </book>
</bookstore>
'''

root = ET.fromstring(xml_string)

for book in root.findall('book'):
    title = book.find('title').text
    author = book.find('author').text
    price = book.find('price').text
    print(f'Title: {title}, Author: {author}, Price: {price}')
```

**输出：**

```
Title: Introduction to Python, Author: John Doe, Price: 29.99
Title: Data Science with Python, Author: Jane Smith, Price: 39.95
```

### 示例：创建并解析 XML 文件

```python
import xml.etree.ElementTree as ET

# 创建 XML 文档
root = ET.Element('bookstore')

# 添加第一本书
book1 = ET.SubElement(root, 'book')
title1 = ET.SubElement(book1, 'title')
title1.text = 'Introduction to Python'
author1 = ET.SubElement(book1, 'author')
author1.text = 'John Doe'
price1 = ET.SubElement(book1, 'price')
price1.text = '29.99'

# 添加第二本书
book2 = ET.SubElement(root, 'book')
title2 = ET.SubElement(book2, 'title')
title2.text = 'Data Science with Python'
author2 = ET.SubElement(book2, 'author')
author2.text = 'Jane Smith'
price2 = ET.SubElement(book2, 'price')
price2.text = '39.95'

# 保存到文件
tree = ET.ElementTree(root)
tree.write('books.xml')

# 从文件解析
parsed_tree = ET.parse('books.xml')
parsed_root = parsed_tree.getroot()

# 遍历并打印
for book in parsed_root.findall('book'):
    title = book.find('title').text
    author = book.find('author').text
    price = book.find('price').text
    print(f'Title: {title}, Author: {author}, Price: {price}')
```

---

## 4. 使用 SAX 解析 XML

**SAX** (Simple API for XML) 是一种事件驱动的 API。解析器读取 XML 文档时，向事件处理器发送事件（如元素开始、元素结束），事件处理器对事件作出响应并处理数据。

### 适用场景

- 处理大型文件
- 只需要文件的部分内容或特定信息
- 需要建立自己的对象模型时

### 常用的 ContentHandler 方法

| 方法                         | 调用时机                                                     |
| ---------------------------- | ------------------------------------------------------------ |
| `characters(content)`        | 遇到字符数据时调用，`content` 为字符串                       |
| `startDocument()`            | 文档启动时调用                                               |
| `endDocument()`              | 解析器到达文档结尾时调用                                     |
| `startElement(name, attrs)`  | 遇到 XML 开始标签时调用，`name` 为标签名，`attrs` 为属性字典 |
| `endElement(name)`           | 遇到 XML 结束标签时调用                                      |

### 创建解析器并解析

- `xml.sax.make_parser([parser_list])`：创建新的解析器对象
- `xml.sax.parse(xmlfile, contenthandler[, errorhandler])`：解析 XML 文件
- `xml.sax.parseString(xmlstring, contenthandler[, errorhandler])`：解析 XML 字符串

### 示例：解析 movies.xml

```python
#!/usr/bin/python3
import xml.sax

class MovieHandler(xml.sax.ContentHandler):
    def __init__(self):
        self.CurrentData = ""
        self.type = ""
        self.format = ""
        self.year = ""
        self.rating = ""
        self.stars = ""
        self.description = ""

    # 元素开始调用
    def startElement(self, tag, attributes):
        self.CurrentData = tag
        if tag == "movie":
            print("*****Movie*****")
            title = attributes["title"]
            print("Title:", title)

    # 元素结束调用
    def endElement(self, tag):
        if self.CurrentData == "type":
            print("Type:", self.type)
        elif self.CurrentData == "format":
            print("Format:", self.format)
        elif self.CurrentData == "year":
            print("Year:", self.year)
        elif self.CurrentData == "rating":
            print("Rating:", self.rating)
        elif self.CurrentData == "stars":
            print("Stars:", self.stars)
        elif self.CurrentData == "description":
            print("Description:", self.description)
        self.CurrentData = ""

    # 读取字符时调用
    def characters(self, content):
        if self.CurrentData == "type":
            self.type = content
        elif self.CurrentData == "format":
            self.format = content
        elif self.CurrentData == "year":
            self.year = content
        elif self.CurrentData == "rating":
            self.rating = content
        elif self.CurrentData == "stars":
            self.stars = content
        elif self.CurrentData == "description":
            self.description = content

if __name__ == "__main__":
    # 创建 XMLReader
    parser = xml.sax.make_parser()
    # 关闭命名空间
    parser.setFeature(xml.sax.handler.feature_namespaces, 0)

    # 重写 ContextHandler
    Handler = MovieHandler()
    parser.setContentHandler(Handler)

    parser.parse("movies.xml")
```

**输出结果**（部分）：

```
*****Movie*****
Title: Enemy Behind
Type: War, Thriller
Format: DVD
Year: 2003
Rating: PG
Stars: 10
Description: Talk about a US-Japan war
...
```

> 完整的 SAX API 文档可参考 Python SAX APIs。

---

## 5. 使用 xml.dom 解析 XML

**DOM**（Document Object Model，文档对象模型）将 XML 文档一次性读入内存，形成一个树结构，开发者可以方便地读取或修改文档内容，并将修改后的内容写回文件。

Python 中使用 `xml.dom.minidom` 模块来解析 XML。

### 示例：解析 movies.xml

```python
#!/usr/bin/python3
from xml.dom.minidom import parse
import xml.dom.minidom

# 使用 minidom 解析器打开 XML 文档
DOMTree = xml.dom.minidom.parse("movies.xml")
collection = DOMTree.documentElement

if collection.hasAttribute("shelf"):
    print("Root element : %s" % collection.getAttribute("shelf"))

# 获取所有电影
movies = collection.getElementsByTagName("movie")

# 打印每部电影的详细信息
for movie in movies:
    print("*****Movie*****")
    if movie.hasAttribute("title"):
        print("Title: %s" % movie.getAttribute("title"))

    type = movie.getElementsByTagName('type')[0]
    print("Type: %s" % type.childNodes[0].data)
    format = movie.getElementsByTagName('format')[0]
    print("Format: %s" % format.childNodes[0].data)
    rating = movie.getElementsByTagName('rating')[0]
    print("Rating: %s" % rating.childNodes[0].data)
    description = movie.getElementsByTagName('description')[0]
    print("Description: %s" % description.childNodes[0].data)
```

**输出结果：**

```
Root element : New Arrivals
*****Movie*****
Title: Enemy Behind
Type: War, Thriller
Format: DVD
Rating: PG
Description: Talk about a US-Japan war
*****Movie*****
Title: Transformers
Type: Anime, Science Fiction
Format: DVD
Rating: R
Description: A schientific fiction
...
```

---
