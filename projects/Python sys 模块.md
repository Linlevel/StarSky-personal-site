# Python sys 模块

## 1. 概述

`sys` 是 Python 标准库中的一个模块，提供了与 Python 解释器及其环境交互的功能。通过 `sys` 库，你可以访问解释器相关的变量和函数，例如命令行参数、标准输入输出、程序退出等。

使用前需先导入：

```python
import sys
```

查看模块内容：

```python
import sys
print(dir(sys))
```

---

## 2. 常用功能

### 2.1 命令行参数：`sys.argv`

`sys.argv` 是一个包含命令行参数的列表。`sys.argv[0]` 是脚本的名称，后续元素是传递给脚本的参数。

```python
import sys

print("脚本名称:", sys.argv[0])
print("参数列表:", sys.argv[1:])
```

运行方式：

```bash
python script.py arg1 arg2
```

**输出：**

```
脚本名称: script.py
参数列表: ['arg1', 'arg2']
```

### 2.2 程序退出：`sys.exit()`

用于退出程序。可以传递一个整数作为退出状态码，通常 `0` 表示成功，非零值表示错误。

```python
import sys

print("程序开始")
sys.exit(0)
print("这行代码不会执行")
```

### 2.3 标准输入、输出、错误流

- `sys.stdin`：标准输入流
- `sys.stdout`：标准输出流
- `sys.stderr`：标准错误流

可以重定向这些流以实现自定义输入输出行为。

```python
import sys

# 重定向标准输出到文件
with open('output.txt', 'w') as f:
    sys.stdout = f
    print("这行内容将写入 output.txt")

# 恢复标准输出
sys.stdout = sys.__stdout__
print("这行内容将显示在控制台")
```

### 2.4 Python 版本信息：`sys.version` 与 `sys.version_info`

```python
import sys

print("Python 版本:", sys.version)
print("版本信息:", sys.version_info)
```

**输出示例：**

```
Python 版本: 3.9.7 (default, Aug 31 2021, 13:28:12) [GCC 7.5.0]
版本信息: sys.version_info(major=3, minor=9, micro=7, releaselevel='final', serial=0)
```

### 2.5 模块搜索路径：`sys.path`

`sys.path` 是一个列表，包含了 Python 解释器在导入模块时搜索的路径。可以修改该列表来添加自定义的模块搜索路径。

```python
import sys

print("模块搜索路径:", sys.path)
sys.path.append('/custom/path')
print("更新后的模块搜索路径:", sys.path)
```

---

## 3. sys 模块常用属性

| 属性               | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| `sys.argv`         | 命令行参数列表，`sys.argv[0]` 是脚本名称                     |
| `sys.path`         | Python 模块搜索路径（对应 `PYTHONPATH`）                     |
| `sys.modules`      | 已加载模块的字典                                             |
| `sys.platform`     | 操作系统平台标识（如 `'win32'`, `'linux'`, `'darwin'`）      |
| `sys.version`      | Python 解释器版本信息                                        |
| `sys.executable`   | Python 解释器的绝对路径                                      |
| `sys.stdin`        | 标准输入流（文件对象）                                       |
| `sys.stdout`       | 标准输出流（文件对象）                                       |
| `sys.stderr`       | 标准错误流（文件对象）                                       |
| `sys.byteorder`    | 本机字节序（`'little'` 或 `'big'`）                          |
| `sys.maxsize`      | 最大整数值（32 位系统为 `2**31-1`，64 位系统为 `2**63-1`）   |

---

## 4. sys 模块常用方法

| 方法                                          | 说明                                                         |
| --------------------------------------------- | ------------------------------------------------------------ |
| `sys.exit([status])`                          | 退出程序，`status=0` 表示正常退出                            |
| `sys.getsizeof(obj)`                          | 返回对象占用的内存字节数                                     |
| `sys.getdefaultencoding()`                    | 获取默认字符串编码（通常为 `'utf-8'`）                       |
| `sys.setrecursionlimit(limit)`                | 设置递归深度限制（默认 1000）                                |
| `sys.getrecursionlimit()`                     | 获取当前递归深度限制                                         |
| `sys.getrefcount(obj)`                        | 返回对象的引用计数                                           |
| `sys.exc_info()`                              | 获取当前异常信息（元组 `(type, value, traceback)`）        |
| `sys.settrace(tracefunc)`                     | 设置调试跟踪函数                                             |
| `sys.setprofile(profilefunc)`                 | 设置性能分析函数                                             |

---
