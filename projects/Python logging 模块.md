# Python logging 模块

## 1. 概述

日志记录（logging）是编程中的重要工具，用于跟踪程序运行状态、调试错误以及记录重要信息。Python 内置的 `logging` 模块比 `print` 更灵活、强大，适用于不同场景下的日志需求。

**主要优势：**
- **灵活性**：可设置日志级别、格式和输出位置
- **可扩展性**：支持输出到文件、控制台、网络等多种目标
- **结构化日志**：便于后续分析和处理
- **性能优化**：适合生产环境使用

---

## 2. 基本用法

### 2.1 导入模块

```python
import logging
```

### 2.2 配置日志级别

日志级别控制详细程度（从低到高）：

| 级别       | 数值 | 说明                         |
| ---------- | ---- | ---------------------------- |
| `DEBUG`    | 10   | 详细调试信息                 |
| `INFO`     | 20   | 正常运行信息                 |
| `WARNING`  | 30   | 潜在问题（默认级别）         |
| `ERROR`    | 40   | 错误，某些功能无法工作       |
| `CRITICAL` | 50   | 严重错误，可能导致程序崩溃   |

```python
logging.basicConfig(level=logging.DEBUG)
```

### 2.3 记录日志

```python
logging.debug("这是一条调试信息")
logging.info("这是一条普通信息")
logging.warning("这是一条警告信息")
logging.error("这是一条错误信息")
logging.critical("这是一条严重错误信息")
```

### 2.4 自定义日志格式

```python
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
```

### 2.5 输出到文件

```python
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    filename="app.log"
)
```

---

## 3. 高级用法

### 3.1 使用多个日志记录器（Logger）

为不同模块创建独立的日志记录器：

```python
logger = logging.getLogger("my_logger")
logger.setLevel(logging.DEBUG)

# 文件处理器
file_handler = logging.FileHandler("my_logger.log")
file_handler.setLevel(logging.DEBUG)

# 控制台处理器
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)

# 格式器
formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
file_handler.setFormatter(formatter)
console_handler.setFormatter(formatter)

# 添加处理器
logger.addHandler(file_handler)
logger.addHandler(console_handler)

# 记录日志
logger.debug("调试信息")
logger.info("普通信息")
```

### 3.2 日志过滤器（Filter）

控制哪些日志被记录：

```python
class MyFilter(logging.Filter):
    def filter(self, record):
        return record.levelno == logging.ERROR

logger.addFilter(MyFilter())
```

### 3.3 日志轮转（RotatingFileHandler）

当文件过大时自动分割：

```python
from logging.handlers import RotatingFileHandler

handler = RotatingFileHandler("app.log", maxBytes=1024, backupCount=3)
logger.addHandler(handler)
```

- `maxBytes`：单个文件最大字节数（如 1e6 = 1MB）
- `backupCount`：保留的备份文件数量

---

## 4. 常用类、方法和属性

### 4.1 核心类

| 类                     | 说明                                     |
| ---------------------- | ---------------------------------------- |
| `logging.Logger`       | 记录器，通过 `getLogger(name)` 获取      |
| `logging.Handler`      | 处理器，决定日志输出位置                 |
| `logging.Formatter`    | 格式化器，控制日志输出格式               |
| `logging.Filter`       | 过滤器，更精细地控制日志记录             |

### 4.2 Logger 对象常用方法

| 方法                     | 说明                         |
| ------------------------ | ---------------------------- |
| `setLevel(level)`        | 设置日志级别                 |
| `debug(msg)`             | 记录 DEBUG 级别日志          |
| `info(msg)`              | 记录 INFO 级别日志           |
| `warning(msg)`           | 记录 WARNING 级别日志        |
| `error(msg)`             | 记录 ERROR 级别日志          |
| `critical(msg)`          | 记录 CRITICAL 级别日志       |
| `addHandler(handler)`    | 添加处理器                   |
| `addFilter(filter)`      | 添加过滤器                   |

### 4.3 常用 Handler 类型

| Handler 类型                  | 说明                           |
| ----------------------------- | ------------------------------ |
| `StreamHandler`               | 输出到流（如控制台）           |
| `FileHandler`                 | 输出到文件                     |
| `RotatingFileHandler`         | 按文件大小轮转                 |
| `TimedRotatingFileHandler`    | 按时间轮转（如每天午夜）       |
| `SMTPHandler`                 | 通过邮件发送日志               |

### 4.4 Formatter 常用格式字段

| 字段             | 说明             | 示例输出                          |
| ---------------- | ---------------- | --------------------------------- |
| `%(asctime)s`    | 日志创建时间     | `2023-01-01 12:00:00,123`         |
| `%(levelname)s`  | 日志级别名称     | `INFO`                            |
| `%(message)s`    | 日志消息内容     | `程序启动成功`                    |
| `%(name)s`       | 记录器名称       | `my_logger`                       |
| `%(filename)s`   | 生成日志的文件名 | `app.py`                          |
| `%(lineno)d`     | 行号             | `42`                              |
| `%(funcName)s`   | 函数名           | `main`                            |

### 4.5 快速配置方法 `basicConfig()`

```python
logging.basicConfig(
    level=logging.INFO,                          # 日志级别
    filename="app.log",                          # 输出文件（可选）
    filemode="w",                                # 文件模式，默认为 'a'
    format="%(levelname)s - %(message)s",        # 格式
    datefmt="%Y-%m-%d %H:%M:%S"                  # 日期格式
)
```

---

## 5. 完整实例

### 5.1 基础配置

```python
import logging

logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    filename='app.log'
)

logger = logging.getLogger("my_app")
logger.info("程序启动")
```

### 5.2 多处理器复杂配置

```python
import logging

# 创建记录器
logger = logging.getLogger("my_module")
logger.setLevel(logging.DEBUG)

# 控制台处理器（只记录 WARNING 及以上）
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.WARNING)

# 文件处理器（记录 DEBUG 及以上）
file_handler = logging.FileHandler("debug.log")
file_handler.setLevel(logging.DEBUG)

# 格式器
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
console_handler.setFormatter(formatter)
file_handler.setFormatter(formatter)

# 添加处理器
logger.addHandler(console_handler)
logger.addHandler(file_handler)

# 使用
logger.debug("调试信息")   # 仅写入文件
logger.warning("警告！")   # 同时输出到控制台和文件
```

### 5.3 日志分割（RotatingFileHandler）

```python
from logging.handlers import RotatingFileHandler

handler = RotatingFileHandler(
    "app.log", maxBytes=1_000_000, backupCount=3   # 每个文件 1MB，保留 3 个备份
)
logger.addHandler(handler)
```

---
