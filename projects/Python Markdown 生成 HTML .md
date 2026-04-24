# Python Markdown 生成 HTML 

## 1. 概述

Markdown 是一种轻量级标记语言，使用易读易写的纯文本格式编写文档，可转换为结构化的 HTML。它语法简单直观，常用于博客、文档、README 文件等。

> 更多 Markdown 语法参考：[Markdown 教程](https://www.runoob.com/markdown/md-tutorial.html)

Python 通过 `markdown` 模块，可以方便地将 Markdown 文本转换为 HTML。

---

## 2. 安装 markdown 库

使用 pip 安装：

```bash
pip install markdown
```

---

## 3. 基本用法

### 3.1 将 Markdown 字符串转换为 HTML

```python
import markdown

md_text = """
# 这是标题
这是 **加粗** 的文本。
这是 *斜体* 的文本。

- 列表项 1
- 列表项 2

[点击这里](https://www.runoob.com) 访问网站。
"""

html_output = markdown.markdown(md_text)
print(html_output)
```

**输出 HTML 示例：**

```html
<h1>这是标题</h1>
<p>这是 <strong>加粗</strong> 的文本。  
这是 <em>斜体</em> 的文本。</p>
<ul>
<li>列表项 1</li>
<li>列表项 2</li>
</ul>
<p><a href="https://www.runoob.com">点击这里</a> 访问网站。</p>
```

### 3.2 将 Markdown 文件转换为 HTML 文件

创建一个脚本 `convert_markdown_to_html.py`：

```python
import markdown

# 读取 Markdown 文件
with open('example.md', 'r', encoding='utf-8') as file:
    markdown_text = file.read()

# 转换为 HTML
html = markdown.markdown(markdown_text)

# 写入 HTML 文件
with open('example.html', 'w', encoding='utf-8') as file:
    file.write(html)

print("Markdown 文件已成功转换为 HTML 文件！")
```

执行脚本：

```bash
python convert_markdown_to_html.py
```

运行后，`example.md` 将被转换为 `example.html`。

---

## 4. 代码说明

- `import markdown`：导入将 Markdown 转换为 HTML 的库。
- `open('example.md', 'r', encoding='utf-8')`：以只读方式打开 Markdown 文件，指定 UTF-8 编码避免中文乱码。
- `markdown.markdown(markdown_text)`：将 Markdown 文本转换为 HTML 字符串。
- `open('example.html', 'w', encoding='utf-8')`：以写入方式创建 HTML 文件，并将转换结果写入。

---

## 5. 扩展功能

`markdown` 库支持多种扩展，例如表格、代码高亮等。启用扩展的方式：

```python
html = markdown.markdown(markdown_text, extensions=['tables', 'fenced_code'])
```

- `tables`：支持 Markdown 表格
- `fenced_code`：支持围栏式代码块（如 ````python` 形式）

可以根据需要添加更多扩展，并自定义 HTML 输出的样式和结构。

---

## 6. 总结

通过 Python 的 `markdown` 库，可以轻松将 Markdown 内容转换为 HTML，这对自动化文档生成（如博客、项目说明等）非常实用。只需几行代码即可完成转换，并且支持多种扩展以满足更复杂的格式需求。

---
