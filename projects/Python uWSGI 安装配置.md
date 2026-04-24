# Python uWSGI 安装配置

本文介绍如何部署简单的 WSGI 应用以及常见的 Web 框架（如 Django、Flask）与 uWSGI 的整合。

---

## 1. 安装依赖包（以 Ubuntu/Debian 为例）

```bash
apt-get install build-essential python-dev
```

---

## 2. Python 安装 uWSGI

### 方式一：通过 pip 安装

```bash
pip install uwsgi
```

### 方式二：使用安装脚本

```bash
curl http://uwsgi.it/install | bash -s default /tmp/uwsgi
```

上述命令会将 uWSGI 二进制文件安装到 `/tmp/uwsgi`（可自定义路径）。

### 方式三：源代码安装

```bash
wget http://projects.unbit.it/downloads/uwsgi-latest.tar.gz
tar zxvf uwsgi-latest.tar.gz
cd uwsgi-latest
make
```

安装完成后，当前目录下会生成 `uwsgi` 二进制文件。

---

## 3. 第一个 WSGI 应用

创建文件 `foobar.py`，内容如下：

```python
def application(env, start_response):
    start_response('200 OK', [('Content-Type', 'text/html')])
    return [b"Hello World"]
```

> uWSGI Python 加载器默认会搜索名为 `application` 的函数。

启动 uWSGI HTTP 服务器，监听 9090 端口：

```bash
uwsgi --http :9090 --wsgi-file foobar.py
```

---

## 4. 添加并发和监控

默认情况下，uWSGI 启动一个进程和一个线程。可以通过 `--processes` 和 `--threads` 增加并发能力。

### 示例：4 个进程，每个进程 2 个线程

```bash
uwsgi --http :9090 --wsgi-file foobar.py --master --processes 4 --threads 2
```

### 启用监控（stats 子系统，输出 JSON 格式数据）

```bash
uwsgi --http :9090 --wsgi-file foobar.py --master --processes 4 --threads 2 --stats 127.0.0.1:9191
```

安装 `uwsgitop`（类似 Linux `top`）查看监控数据：

```bash
pip install uwsgitop
```

---

## 5. 结合 Web 服务器使用（如 Nginx）

将 uWSGI 与 Nginx 结合可以实现更高的并发性能。

### Nginx 配置示例

在 Nginx 配置文件中添加：

```nginx
location / {
    include uwsgi_params;
    uwsgi_pass 127.0.0.1:3031;
}
```

上述配置将 Nginx 接收的 Web 请求传递给端口 3031 上的 uWSGI 服务。

### 启动 uWSGI 使用 uwsgi 协议

```bash
uwsgi --socket 127.0.0.1:3031 --wsgi-file foobar.py --master --processes 4 --threads 2 --stats 127.0.0.1:9191
```

### 如果你的 Web 服务器使用 HTTP 协议（而非 uwsgi 协议）

```bash
uwsgi --http-socket 127.0.0.1:3031 --wsgi-file foobar.py --master --processes 4 --threads 2 --stats 127.0.0.1:9191
```

> 注意：`--http-socket` 直接让 uWSGI 使用 HTTP 协议，与 `--http`（会自己生成一个代理）不同。

---

## 6. 部署 Django

假设 Django 项目位于 `/home/foobar/myproject`，启动命令：

```bash
uwsgi --socket 127.0.0.1:3031 --chdir /home/foobar/myproject/ --wsgi-file myproject/wsgi.py --master --processes 4 --threads 2 --stats 127.0.0.1:9191
```

- `--chdir` 指定项目路径。

### 使用配置文件（推荐）

创建 `yourfile.ini`：

```ini
[uwsgi]
socket = 127.0.0.1:3031
chdir = /home/foobar/myproject/
wsgi-file = myproject/wsgi.py
processes = 4
threads = 2
stats = 127.0.0.1:9191
```

然后执行：

```bash
uwsgi yourfile.ini
```

---

## 7. 部署 Flask

创建 `myflaskapp.py`：

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "<span style='color:red'>I am app 1</span>"
```

启动命令（注意 `--callable app` 指定 Flask 应用实例名称）：

```bash
uwsgi --socket 127.0.0.1:3031 --wsgi-file myflaskapp.py --callable app --processes 4 --threads 2 --stats 127.0.0.1:9191
```

---
