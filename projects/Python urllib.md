# Python urllib 

## 1. urllib 概述

`urllib` 是 Python 标准库，用于操作 URL 并对网页内容进行抓取处理。  
它包含以下四个模块：

- `urllib.request`：打开和读取 URL
- `urllib.error`：包含 `urllib.request` 抛出的异常
- `urllib.parse`：解析 URL
- `urllib.robotparser`：解析 `robots.txt` 文件

---

## 2. urllib.request 模块

`urllib.request` 定义了一些打开 URL 的函数和类，支持授权验证、重定向、浏览器 cookies 等，可以模拟浏览器的请求过程。

### 2.1 `urlopen()` 方法

语法：

```python
urllib.request.urlopen(url, data=None, [timeout, ]*, cafile=None, capath=None, cadefault=False, context=None)
```

**参数说明：**

| 参数                     | 描述                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `url`                    | 目标 URL 地址                                                |
| `data`                   | 发送到服务器的其他数据对象，默认为 `None`                    |
| `timeout`                | 设置访问超时时间                                             |
| `cafile`、`capath`       | CA 证书及其路径，用于 HTTPS                                  |
| `cadefault`              | 已弃用                                                       |
| `context`                | `ssl.SSLContext` 类型，指定 SSL 设置                         |

#### 示例1：读取整个网页内容

```python
from urllib.request import urlopen

myURL = urlopen("https://www.runoob.com/")
print(myURL.read())                     # 读取全部内容
print(myURL.read(300))                  # 只读取前300字节
```

#### 示例2：按行读取

```python
from urllib.request import urlopen

myURL = urlopen("https://www.runoob.com/")
print(myURL.readline())                 # 读取一行

lines = myURL.readlines()               # 读取所有行，返回列表
for line in lines:
    print(line)
```

#### 示例3：获取网页状态码

```python
import urllib.request

myURL1 = urllib.request.urlopen("https://www.runoob.com/")
print(myURL1.getcode())   # 200 表示正常

try:
    myURL2 = urllib.request.urlopen("https://www.runoob.com/no.html")
except urllib.error.HTTPError as e:
    if e.code == 404:
        print(404)        # 页面不存在
```

> 更多 HTTP 状态码参考：[HTTP 状态码](https://www.runoob.com/http/http-status-codes.html)

#### 示例4：保存网页到本地

```python
from urllib.request import urlopen

myURL = urlopen("https://www.runoob.com/")
f = open("runoob_urllib_test.html", "wb")
content = myURL.read()      # 读取网页内容
f.write(content)
f.close()
```

### 2.2 URL 编码与解码

使用 `quote()` 编码，`unquote()` 解码。

```python
import urllib.request

encode_url = urllib.request.quote("https://www.runoob.com/")
print(encode_url)                       # https%3A//www.runoob.com/

unencode_url = urllib.request.unquote(encode_url)
print(unencode_url)                     # https://www.runoob.com/
```

### 2.3 模拟头部信息（Request 类）

使用 `urllib.request.Request` 类可以自定义 HTTP 头部。

**语法：**

```python
class urllib.request.Request(url, data=None, headers={}, origin_req_host=None, unverifiable=False, method=None)
```

**参数：**

- `url`：URL 地址
- `data`：发送的数据（如 POST 数据）
- `headers`：HTTP 请求头部（字典）
- `origin_req_host`：请求的主机地址（IP 或域名）
- `unverifiable`：设置是否需要验证，默认 `False`
- `method`：请求方法（GET、POST、DELETE、PUT 等）

#### 示例：抓取网页并模拟浏览器头部

```python
import urllib.request
import urllib.parse

url = 'https://www.runoob.com/?s='
keyword = 'Python 教程'
key_code = urllib.request.quote(keyword)          # 对关键词编码
url_all = url + key_code

headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Fedora; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
}

request = urllib.request.Request(url_all, headers=headers)
response = urllib.request.urlopen(request).read()

with open("./urllib_test_runoob_search.html", "wb") as f:
    f.write(response)
```

### 2.4 表单 POST 数据提交

示例：提交表单数据并保存结果。

```python
import urllib.request
import urllib.parse

url = 'https://www.runoob.com/try/py3/py3_urllib_test.php'
data = {'name': 'RUNOOB', 'tag': '高级教程'}
headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Fedora; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
}

# 编码数据
data = urllib.parse.urlencode(data).encode('utf8')

# 创建请求对象
request = urllib.request.Request(url, data, headers)
response = urllib.request.urlopen(request).read()

# 保存结果
with open("./urllib_test_post_runoob.html", "wb") as f:
    f.write(response)
```

> 对应的 PHP 接收脚本（示例中提供）会处理 POST 数据并返回输出。

---

## 3. urllib.error 模块

该模块定义了 `urllib.request` 可能引发的异常。

- **URLError**：`OSError` 的子类，属性 `reason` 为异常原因。
- **HTTPError**：`URLError` 的子类，用于处理 HTTP 错误，包含 `code`（状态码）、`reason`（原因）、`headers`（响应头）。

### 异常处理示例

```python
import urllib.request
import urllib.error

myURL1 = urllib.request.urlopen("https://www.runoob.com/")
print(myURL1.getcode())          # 200

try:
    myURL2 = urllib.request.urlopen("https://www.runoob.com/no.html")
except urllib.error.HTTPError as e:
    if e.code == 404:
        print(404)               # 404
```

---

## 4. urllib.parse 模块

用于解析 URL 字符串。

### `urlparse()` 函数

语法：

```python
urllib.parse.urlparse(urlstring, scheme='', allow_fragments=True)
```

- `urlstring`：URL 字符串
- `scheme`：协议类型
- `allow_fragments`：若为 `False`，片段标识符会被解析为路径、参数或查询的一部分

#### 示例

```python
from urllib.parse import urlparse

o = urlparse("https://www.runoob.com/?s=python+%E6%95%99%E7%A8%8B")
print(o)                     # 返回 ParseResult 对象
print(o.scheme)              # 输出协议：https
```

**输出内容：**

```
ParseResult(scheme='https', netloc='www.runoob.com', path='/', params='', query='s=python+%E6%95%99%E7%A8%8B', fragment='')
```

### 结果对象属性与索引对照表

| 属性       | 索引 | 描述               | 默认值（若不存在） |
| ---------- | ---- | ------------------ | ------------------ |
| `scheme`   | 0    | URL 协议           | `scheme` 参数      |
| `netloc`   | 1    | 网络位置部分       | 空字符串           |
| `path`     | 2    | 分层路径           | 空字符串           |
| `params`   | 3    | 最后路径元素的参数 | 空字符串           |
| `query`    | 4    | 查询组件           | 空字符串           |
| `fragment` | 5    | 片段识别           | 空字符串           |
| `username` | -    | 用户名             | `None`             |
| `password` | -    | 密码               | `None`             |
| `hostname` | -    | 主机名（小写）     | `None`             |
| `port`     | -    | 端口号             | `None`             |

---

## 5. urllib.robotparser 模块

用于解析网站的 `robots.txt` 文件（告诉搜索引擎的抓取规则）。

### RobotFileParser 类

语法：

```python
class urllib.robotparser.RobotFileParser(url='')
```

**常用方法：**

| 方法                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| `set_url(url)`                  | 设置 `robots.txt` 文件的 URL                                 |
| `read()`                        | 读取并解析 `robots.txt` 文件                                 |
| `parse(lines)`                  | 解析行列表                                                   |
| `can_fetch(useragent, url)`     | 返回该 `useragent` 是否允许抓取指定 `url`                    |
| `mtime()`                       | 返回最近一次获取 `robots.txt` 的时间                         |
| `modified()`                    | 将最近获取时间设置为当前时间                                 |
| `crawl_delay(useragent)`        | 返回 `Crawl-delay` 参数（秒），若无则返回 `None`             |
| `request_rate(useragent)`       | 返回 `RequestRate(requests, seconds)` 命名元组               |
| `site_maps()`                   | 返回 `Sitemap` 参数的列表                                     |

### 示例

```python
import urllib.robotparser

rp = urllib.robotparser.RobotFileParser()
rp.set_url("http://www.musi-cal.com/robots.txt")
rp.read()

print(rp.crawl_delay("*"))                       # 输出 Crawl-delay
rate = rp.request_rate("*")
if rate:
    print(rate.requests, rate.seconds)           # 请求次数和秒数

print(rp.can_fetch("*", "http://www.musi-cal.com/cgi-bin/search?city=San+Francisco"))  # False
print(rp.can_fetch("*", "http://www.musi-cal.com/"))                                    # True
```

---
