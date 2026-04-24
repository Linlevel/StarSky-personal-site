# Python requests 模块

## 1. requests 简介

`requests` 是一个常用的 HTTP 请求库，可以方便地向网站发送 HTTP 请求并获取响应结果。相比 `urllib` 模块，`requests` 更加简洁易用。

---

## 2. 基本使用

### 导入模块并发送 GET 请求

```python
import requests

x = requests.get('https://www.runoob.com/')
print(x.text)               # 输出网页内容
```

每次调用请求后，会返回一个 `response` 对象，包含状态码、响应头、响应内容等信息。

---

## 3. Response 对象常用属性/方法

| 属性/方法                        | 说明                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------ |
| `apparent_encoding`              | 编码方式                                                                       |
| `close()`                        | 关闭与服务器的连接                                                             |
| `content`                        | 返回响应的内容（字节为单位）                                                   |
| `cookies`                        | 返回一个 `CookieJar` 对象，包含服务器发回的 cookie                             |
| `elapsed`                        | 返回 `timedelta` 对象，包含请求到响应的时间量，可用于测试响应速度                |
| `encoding`                       | 解码 `r.text` 的编码方式                                                       |
| `headers`                        | 返回响应头（字典格式）                                                         |
| `history`                        | 返回包含请求历史的响应对象列表（url）                                          |
| `is_permanent_redirect`          | 如果是永久重定向的 URL 则返回 `True`，否则 `False`                             |
| `is_redirect`                    | 如果响应被重定向则返回 `True`，否则 `False`                                    |
| `iter_content()`                 | 迭代响应                                                                       |
| `iter_lines()`                   | 迭代响应的行                                                                   |
| `json()`                         | 返回结果的 JSON 对象（需响应内容为 JSON 格式，否则引发错误）                   |
| `links`                          | 返回响应的解析头链接                                                           |
| `next`                           | 返回重定向链中下一个请求的 `PreparedRequest` 对象                              |
| `ok`                             | 若 `status_code < 400` 返回 `True`，否则 `False`                               |
| `raise_for_status()`             | 发生错误时返回一个 `HTTPError` 对象                                            |
| `reason`                         | 响应状态的描述（如 `"Not Found"` 或 `"OK"`）                                   |
| `request`                        | 返回请求此响应的请求对象                                                       |
| `status_code`                    | 返回 HTTP 状态码（如 `200`, `404`）                                            |
| `text`                           | 返回响应的内容（Unicode 类型）                                                 |
| `url`                            | 返回响应的 URL                                                                 |

### 示例

```python
import requests

x = requests.get('https://www.runoob.com/')
print(x.status_code)          # 200
print(x.reason)               # OK
print(x.apparent_encoding)    # utf-8
```

**输出：**

```
200
OK
utf-8
```

### 请求 JSON 数据并解析

```python
import requests

x = requests.get('https://www.runoob.com/try/ajax/json_demo.json')
print(x.json())
```

**输出示例：**

```json
{'name': '网站', 'num': 3, 'sites': [{'name': 'Google', 'info': ['Android', 'Google 搜索', 'Google 翻译']}, {'name': 'Runoob', 'info': ['菜鸟教程', '菜鸟工具', '菜鸟微信']}, {'name': 'Taobao', 'info': ['淘宝', '网购']}]}
```

---

## 4. requests 支持的 HTTP 方法

| 方法                              | 描述                                   |
| --------------------------------- | -------------------------------------- |
| `delete(url, args)`               | 发送 DELETE 请求                       |
| `get(url, params, args)`          | 发送 GET 请求                          |
| `head(url, args)`                 | 发送 HEAD 请求                         |
| `patch(url, data, args)`          | 发送 PATCH 请求                        |
| `post(url, data, json, args)`     | 发送 POST 请求                         |
| `put(url, data, args)`            | 发送 PUT 请求                          |
| `request(method, url, args)`      | 向指定 URL 发送指定的请求方法          |

### 使用 `request()` 发送 GET 请求

```python
import requests

x = requests.request('get', 'https://www.runoob.com/')
print(x.status_code)   # 200
```

---

## 5. 设置请求头与参数

### GET 请求带查询参数和自定义请求头

```python
import requests

kw = {'s': 'python 教程'}
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36"
}

response = requests.get("https://www.runoob.com/", params=kw, headers=headers)

print(response.status_code)   # 200
print(response.encoding)      # UTF-8
print(response.url)           # https://www.runoob.com/?s=python+%E6%95%99%E7%A8%8B
print(response.text)          # 网页内容
```

---

## 6. POST 请求

### 基本 POST 请求

```python
import requests

x = requests.post('https://www.runoob.com/try/ajax/demo_post.php')
print(x.text)
```

**输出示例：**

```
<p style='color:red;'>本内容是使用 POST 方法请求的。</p><p style='color:red;'>请求时间：2022-05-26 17:30:47</p>
```

### POST 请求带表单数据

```python
import requests

myobj = {'fname': 'RUNOOB', 'lname': 'Boy'}
x = requests.post('https://www.runoob.com/try/ajax/demo_post2.php', data=myobj)
print(x.text)
```

**输出示例：**

```
<p style='color:red;'>你好，RUNOOB Boy，今天过得怎么样？</p>
```

---

## 7. 附加请求参数（请求头、查询参数、请求体）

```python
import requests

headers = {'User-Agent': 'Mozilla/5.0'}
params = {'key1': 'value1', 'key2': 'value2'}
data = {'username': 'example', 'password': '123456'}

response = requests.post('https://www.runoob.com', headers=headers, params=params, data=data)
```

> `requests` 同样支持 PUT、DELETE、HEAD、OPTIONS 等 HTTP 方法，用法与 GET/POST 类似。

---
