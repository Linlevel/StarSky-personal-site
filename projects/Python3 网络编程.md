# Python3 网络编程

## 概述

Python 提供两个级别的网络服务访问：

1. **低级别网络服务**：基于 Socket，支持标准的 BSD Sockets API，可访问底层操作系统 Socket 接口的全部方法。
2. **高级别网络服务**：`SocketServer` 模块，提供服务器中心类，简化网络服务器的开发。

---

## 什么是 Socket？

**Socket**（套接字）是应用程序向网络发出请求或应答网络请求的工具，用于实现主机间或同一主机上进程间的通信。

---

## `socket()` 函数

在 Python 中使用 `socket.socket()` 创建套接字。

### 语法

```python
socket.socket([family[, type[, proto]]])
```

### 参数说明

| 参数     | 描述                                                     |
|----------|----------------------------------------------------------|
| `family` | 套接字家族，可以是 `AF_UNIX` 或 `AF_INET`                |
| `type`   | 套接字类型，面向连接用 `SOCK_STREAM`，无连接用 `SOCK_DGRAM` |
| `proto`  | 协议号，通常省略，默认为 0                               |

---

## Socket 对象常用方法

### 服务器端套接字方法

| 方法               | 描述                                                               |
| ------------------ | ------------------------------------------------------------------ |
| `s.bind(address)`  | 绑定地址 `(host, port)` 到套接字                                   |
| `s.listen(backlog)`| 开始 TCP 监听，`backlog` 指定最大挂起连接数（至少 1，常用 5）        |
| `s.accept()`       | 被动接受 TCP 客户端连接（阻塞式），等待连接到来                     |

### 客户端套接字方法

| 方法                    | 描述                                                             |
| ----------------------- | ---------------------------------------------------------------- |
| `s.connect(address)`    | 主动初始化 TCP 服务器连接，出错时抛出 `socket.error`               |
| `s.connect_ex(address)` | `connect()` 的扩展版本，出错时返回错误码而非抛出异常               |

### 公共用途方法

| 方法                                  | 描述                                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------ |
| `s.recv(bufsize[, flag])`             | 接收 TCP 数据，返回字符串，`bufsize` 指定最大数据量                             |
| `s.send(string[, flag])`              | 发送 TCP 数据，返回实际发送的字节数（可能小于字符串长度）                       |
| `s.sendall(string[, flag])`           | 完整发送 TCP 数据，尝试发送所有数据，成功返回 `None`，失败抛出异常             |
| `s.recvfrom(bufsize[, flag])`         | 接收 UDP 数据，返回 `(data, address)`                                          |
| `s.sendto(string, address)`           | 发送 UDP 数据，`address` 为 `(ipaddr, port)` 元组，返回发送字节数               |
| `s.close()`                           | 关闭套接字                                                                     |
| `s.getpeername()`                     | 返回连接套接字的远程地址 `(ipaddr, port)`                                      |
| `s.getsockname()`                     | 返回套接字自己的地址 `(ipaddr, port)`                                          |
| `s.setsockopt(level, optname, value)` | 设置套接字选项的值                                                             |
| `s.getsockopt(level, optname[, buflen])` | 返回套接字选项的值                                                           |
| `s.settimeout(timeout)`               | 设置套接字操作超时时间（秒），`timeout` 为浮点数，`None` 表示无超时            |
| `s.gettimeout()`                      | 返回当前超时值（秒），未设置则返回 `None`                                      |
| `s.fileno()`                          | 返回套接字的文件描述符                                                         |
| `s.setblocking(flag)`                 | `flag` 为 `False` 时设为非阻塞模式，否则为阻塞模式（默认）                     |
| `s.makefile()`                        | 创建与该套接字关联的文件对象                                                   |

---

## 简单实例

### 服务端 (`server.py`)

```python
#!/usr/bin/python3
# 文件名：server.py

import socket
import sys

# 创建 socket 对象
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 获取本地主机名
host = socket.gethostname()
port = 9999

# 绑定端口
serversocket.bind((host, port))

# 设置最大连接数，超过后排队
serversocket.listen(5)

while True:
    # 建立客户端连接
    clientsocket, addr = serversocket.accept()
    print("连接地址: %s" % str(addr))

    msg = '欢迎访问高级教程！\r\n'
    clientsocket.send(msg.encode('utf-8'))
    clientsocket.close()
```

### 客户端 (`client.py`)

```python
#!/usr/bin/python3
# 文件名：client.py

import socket
import sys

# 创建 socket 对象
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 获取本地主机名
host = socket.gethostname()
port = 9999

# 连接服务，指定主机和端口
s.connect((host, port))

# 接收小于 1024 字节的数据
msg = s.recv(1024)
s.close()

print(msg.decode('utf-8'))
```

### 运行示例

**终端1（服务端）：**

```bash
$ python3 server.py
```

**终端2（客户端）：**

```bash
$ python3 client.py
欢迎访问高级教程！
```

**服务端输出：**

```
连接地址: ('192.168.0.118', 33397)
```

---

## Python Internet 模块

| 协议    | 功能                     | 端口号 | Python 模块                            |
| ------- | ------------------------ | ------ | -------------------------------------- |
| HTTP    | 网页访问                 | 80     | `httplib`, `urllib`, `xmlrpclib`       |
| NNTP    | 阅读和张贴新闻文章（帖子）| 119    | `nntplib`                              |
| FTP     | 文件传输                 | 20     | `ftplib`, `urllib`                     |
| SMTP    | 发送邮件                 | 25     | `smtplib`                              |
| POP3    | 接收邮件                 | 110    | `poplib`                               |
| IMAP4   | 获取邮件                 | 143    | `imaplib`                              |
| Telnet  | 命令行                   | 23     | `telnetlib`                            |
| Gopher  | 信息查找                 | 70     | `gopherlib`, `urllib`                  |

> 更多内容可参考官网：[Python Socket Library and Modules](https://docs.python.org/3/library/socket.html)

---
