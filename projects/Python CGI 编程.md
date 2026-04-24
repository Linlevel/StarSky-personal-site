# Python CGI 编程

## 什么是 CGI？

**CGI**（Common Gateway Interface，通用网关接口）是一段运行在服务器（如 HTTP 服务器）上的程序，提供与客户端 HTML 页面的接口。  
目前由 NCSA 维护。

---

## 网页浏览流程

1. 浏览器访问 URL 并连接 Web 服务器。
2. 服务器解析 URL，查找请求的文件：
   - 存在 → 返回文件内容
   - 不存在 → 返回错误提示
3. 浏览器接收并显示文件内容或错误信息。

> CGI 程序可以用 Python、Perl、Shell、C/C++ 等语言编写。

---

## CGI 架构图

（架构图示意，原教程中图略）

---

## Web 服务器支持及配置

### Apache 支持 CGI 的配置

#### 1. 设置 CGI 目录

```apache
ScriptAlias /cgi-bin/ /var/www/cgi-bin/
```

所有 CGI 程序存放在预先配置的目录，通常为 `/var/www/cgi-bin`。  
CGI 文件扩展名常为 `.cgi`，Python 脚本也可使用 `.py`。

#### 2. 修改 `httpd.conf`（如需指定其他目录）

```apache
<Directory "/var/www/cgi-bin">
   AllowOverride None
   Options +ExecCGI
   Order allow,deny
   Allow from all
</Directory>
```

#### 3. 添加 `.py` 后缀支持

```apache
AddHandler cgi-script .cgi .pl .py
```

---

## 第一个 CGI 程序

创建 `/var/www/cgi-bin/hello.py`：

```python
#!/usr/bin/python3

print("Content-type:text/html")
print()                             # 空行，告诉服务器结束头部
print('<html>')
print('<head>')
print('<meta charset="utf-8">')
print('<title>Hello Word - 我的第一个 CGI 程序！</title>')
print('</head>')
print('<body>')
print('<h2>Hello Word! 我是来自高级教程的第一CGI程序</h2>')
print('</body>')
print('</html>')
```

设置文件权限：

```bash
chmod 755 hello.py
```

浏览器访问效果（图略）。

### 说明

- `Content-type:text/html` 发送给浏览器，告知内容类型为 HTML。
- 空行 `print()` 结束 HTTP 头部信息。

---

## HTTP 头部

格式：

```
HTTP 字段名: 字段内容
```

示例：

```
Content-type: text/html
```

常用 CGI 头部字段：

| 头部字段           | 描述                                                       |
| ------------------ | ---------------------------------------------------------- |
| `Content-type:`    | 实体对应的 MIME 类型（如 `text/html`）                     |
| `Expires: Date`    | 响应过期的日期和时间                                       |
| `Location: URL`    | 重定向到新 URL                                             |
| `Last-modified: Date` | 请求资源的最后修改时间                                   |
| `Content-length: N`  | 请求的内容长度                                           |
| `Set-Cookie: String` | 设置 HTTP Cookie                                          |

---

## CGI 环境变量

所有 CGI 程序都可接收以下环境变量：

| 变量名              | 描述                                                                 |
| ------------------- | -------------------------------------------------------------------- |
| `CONTENT_TYPE`      | 传递信息的 MIME 类型（如表单数据 `application/x-www-form-urlencoded`） |
| `CONTENT_LENGTH`    | POST 方式下，可从标准输入读取的有效数据字节数                         |
| `HTTP_COOKIE`       | 客户端的 Cookie 内容                                                  |
| `HTTP_USER_AGENT`   | 客户端浏览器信息（版本、厂商等）                                       |
| `PATH_INFO`         | CGI 程序名之后的路径信息，常作为参数                                  |
| `QUERY_STRING`      | GET 方式传递的信息（URL 中 `?` 后的部分）                             |
| `REMOTE_ADDR`       | 客户端 IP 地址                                                        |
| `REMOTE_HOST`       | 客户端主机名（可选）                                                   |
| `REQUEST_METHOD`    | 脚本调用方法（GET 或 POST）                                           |
| `SCRIPT_FILENAME`   | CGI 脚本的完整路径                                                     |
| `SCRIPT_NAME`       | CGI 脚本的名称                                                         |
| `SERVER_NAME`       | Web 服务器的主机名、别名或 IP                                         |
| `SERVER_SOFTWARE`   | HTTP 服务器的名称和版本号（如 `Apache/2.2.14(Unix)`）                  |

### 示例：输出 CGI 环境变量

```python
#!/usr/bin/python3
import os

print("Content-type: text/html")
print()
print('<meta charset="utf-8">')
print("<b>环境变量</b><br>")
print("<ul>")
for key in os.environ.keys():
    print("<li><span style='color:green'>%30s </span> : %s </li>" % (key, os.environ[key]))
print("</ul>")
```

保存为 `test.py`，权限 `755`，访问结果（图略）。

---

## GET 和 POST 方法

浏览器通过 GET 或 POST 向服务器传递信息。

### GET 方法

- 数据编码在 URL 中，以 `?` 分割：  
  `http://www.test.com/cgi-bin/hello.py?key1=value1&key2=value2`
- 特点：
  - 可被缓存
  - 保留在浏览器历史记录
  - 可收藏为书签
  - **不应处理敏感数据**
  - 有长度限制
  - 只应用于获取数据

#### URL 示例：`hello_get.py`

```python
#!/usr/bin/python3
import cgi, cgitb

form = cgi.FieldStorage()
site_name = form.getvalue('name')
site_url  = form.getvalue('url')

print("Content-type:text/html")
print()
print("""<html>
<head><meta charset="utf-8"><title>高级教程 CGI 测试实例</title></head>
<body><h2>{}官网：{}</h2></body>
</html>""".format(site_name, site_url))
```

权限 `755`。  
请求示例：  
`/cgi-bin/hello_get.py?name=高级教程&url=http://www.runoob.com`

#### HTML 表单（GET）

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>高级教程(runoob.com)</title></head>
<body>
<form action="/cgi-bin/hello_get.py" method="get">
站点名称: <input type="text" name="name"><br>
站点 URL: <input type="text" name="url">
<input type="submit" value="提交">
</form>
</body>
</html>
```

### POST 方法

更安全可靠，适用于敏感信息（如密码）。  
处理 POST 数据的脚本与 GET 相同（使用 `cgi.FieldStorage()` 统一获取）。

#### HTML 表单（POST）

```html
<form action="/cgi-bin/hello_get.py" method="post">
...
</form>
```

---

## 各类表单元素处理

### 1. Checkbox（复选框）

HTML：`checkbox.html`

```html
<form action="/cgi-bin/checkbox.py" method="POST" target="_blank">
<input type="checkbox" name="runoob" value="on" /> 高级教程
<input type="checkbox" name="google" value="on" /> Google
<input type="submit" value="选择站点" />
</form>
```

Python 脚本：`checkbox.py`

```python
#!/usr/bin/python3
import cgi, cgitb

form = cgi.FieldStorage()
google_flag = "是" if form.getvalue('google') else "否"
runoob_flag = "是" if form.getvalue('runoob') else "否"

print("Content-type:text/html\n")
print("""
<html><head><meta charset='utf-8'>
<title>高级教程 CGI 测试实例</title></head>
<body>
<h2>高级教程是否选择了 : {}</h2>
<h2>Google 是否选择了 : {}</h2>
</body></html>""".format(runoob_flag, google_flag))
```

### 2. Radio（单选框）

HTML：

```html
<form action="/cgi-bin/radiobutton.py" method="post" target="_blank">
<input type="radio" name="site" value="runoob" /> 高级教程
<input type="radio" name="site" value="google" /> Google
<input type="submit" value="提交" />
</form>
```

脚本：`radiobutton.py`

```python
#!/usr/bin/python3
import cgi, cgitb

form = cgi.FieldStorage()
site = form.getvalue('site') if form.getvalue('site') else "提交数据为空"

print("Content-type:text/html\n")
print("""
<html><head><meta charset='utf-8'>
<title>高级教程 CGI 测试实例</title></head>
<body><h2>选中的网站是 {}</h2></body></html>""".format(site))
```

### 3. Textarea（多行文本）

HTML：

```html
<form action="/cgi-bin/textarea.py" method="post" target="_blank">
<textarea name="textcontent" cols="40" rows="4">在这里输入内容...</textarea>
<input type="submit" value="提交" />
</form>
```

脚本：`textarea.py`

```python
#!/usr/bin/python3
import cgi, cgitb

form = cgi.FieldStorage()
text_content = form.getvalue('textcontent') if form.getvalue('textcontent') else "没有内容"

print("Content-type:text/html\n")
print("""
<html><head><meta charset='utf-8'>
<title>高级教程 CGI 测试实例</title></head>
<body><h2>输入的内容是：{}</h2></body></html>""".format(text_content))
```

### 4. 下拉菜单（Select）

HTML：

```html
<form action="/cgi-bin/dropdown.py" method="post" target="_blank">
<select name="dropdown">
<option value="runoob" selected>高级教程</option>
<option value="google">Google</option>
</select>
<input type="submit" value="提交"/>
</form>
```

脚本：`dropdown.py`

```python
#!/usr/bin/python3
import cgi, cgitb

form = cgi.FieldStorage()
dropdown_value = form.getvalue('dropdown') if form.getvalue('dropdown') else "没有内容"

print("Content-type:text/html\n")
print("""
<html><head><meta charset='utf-8'>
<title>高级教程 CGI 测试实例</title></head>
<body><h2>选中的选项是：{}</h2></body></html>""".format(dropdown_value))
```

---

## CGI 中使用 Cookie

### Cookie 语法

通过 HTTP 头部发送：

```
Set-cookie: name=value; expires=date; path=path; domain=domain; secure
```

- `name=value`：键值对，多个用 `;` 分隔
- `expires`：有效期，格式 `"Wdy, DD-Mon-YYYY HH:MM:SS"`
- `path`：Cookie 生效路径
- `domain`：生效域名
- `secure`：仅通过 HTTPS 传递

### 设置 Cookie

`cookie_set.py`：

```python
#!/usr/bin/python3
print('Set-Cookie: name="高级教程"; expires=Wed, 28 Aug 2016 18:30:00 GMT')
print('Content-Type: text/html\n')
print("""
<html><head><meta charset="utf-8"><title>高级教程(runoob.com)</title></head>
<body><h1>Cookie set OK!</h1></body>
</html>""")
```

权限 `755`。

### 检索 Cookie

Cookie 存储在环境变量 `HTTP_COOKIE` 中，格式如 `key1=value1;key2=value2`。  
使用 `http.cookies.SimpleCookie` 解析。

`cookie_get.py`：

```python
#!/usr/bin/python3
import os
import http.cookies

print("Content-type: text/html\n")
print("""
<html><head><meta charset="utf-8"><title>高级教程(runoob.com)</title></head>
<body><h1>读取cookie信息</h1>""")

if 'HTTP_COOKIE' in os.environ:
    cookie_string = os.environ.get('HTTP_COOKIE')
    c = http.cookies.SimpleCookie()
    c.load(cookie_string)
    try:
        data = c['name'].value
        print("cookie data: " + data + "<br>")
    except KeyError:
        print("cookie 没有设置或者已过期<br>")
else:
    print("cookie 没有设置或者已过期<br>")

print("</body></html>")
```

权限 `755`。

---

## 文件上传

HTML 表单必须设置 `enctype="multipart/form-data"`：

```html
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>高级教程(runoob.com)</title></head>
<body>
<form enctype="multipart/form-data" action="/cgi-bin/save_file.py" method="post">
   <p>选中文件: <input type="file" name="filename" /></p>
   <p><input type="submit" value="上传" /></p>
</form>
</body>
</html>
```

服务器脚本 `save_file.py`：

```python
#!/usr/bin/python3
import cgi, os
import cgitb; cgitb.enable()

form = cgi.FieldStorage()
fileitem = form['filename']

if fileitem.filename:
    fn = os.path.basename(fileitem.filename)
    # Unix/Linux 下注意路径分隔符
    # fn = os.path.basename(fileitem.filename.replace("\\", "/"))
    open('/tmp/' + fn, 'wb').write(fileitem.file.read())
    message = '文件 "' + fn + '" 上传成功'
else:
    message = '文件没有上传'

print("""\
Content-Type: text/html\n
<html><head><meta charset="utf-8"><title>高级教程(runoob.com)</title></head>
<body><p>%s</p></body>
</html>""" % message)
```

权限 `755`。

---

## 文件下载

通过设置 HTTP 头部 `Content-Disposition: attachment` 实现。

示例：下载 `foo.txt`

```python
#!/usr/bin/python3
print("Content-Disposition: attachment; filename=\"foo.txt\"")
print()
fo = open("foo.txt", "rb")
print(fo.read())
fo.close()
```

> 注意：文件需要存在于服务器相应路径。

---
