# Python hashlib 模块

## 1. 概述

`hashlib` 是 Python 内置的模块，主要用于进行哈希（Hash）操作。  
哈希是一种将任意长度的输入数据映射为固定长度输出数据的算法，常用于验证数据完整性、安全存储密码等场景。哈希函数的输出通常是一串看似随机的字母和数字。

`hashlib` 提供了常见哈希算法的实现，如 MD5、SHA-1、SHA-256 等。

使用前需导入：

```python
import hashlib
```

查看模块内容：

```python
>>> import hashlib
>>> dir(hashlib)
```

---

## 2. 常用方法

### 2.1 `hashlib.new(name, data=None)`

创建一个哈希对象。  
- `name`：哈希算法的名称（字符串）  
- `data`：可选，要哈希的数据（字节串）

```python
import hashlib

sha256_hash = hashlib.new('sha256')
sha256_hash.update(b'RUNOOB')
print(sha256_hash.hexdigest())
# 输出：673dc967d03201db7fe47b7eabd56c47ca5bc694222de303106a5504e5d0daa8
```

### 2.2 直接使用特定哈希算法构造

如 `hashlib.md5()`、`hashlib.sha1()`、`hashlib.sha256()` 等，可以直接传入数据并得到哈希对象。

```python
md5_hash = hashlib.md5(b'RUNOOB')
print(md5_hash.hexdigest())
# 输出：18fa661e2a4a7dd6471cc1407290cf6e
```

---

## 3. 哈希对象方法

### 3.1 `update(data)`

更新哈希对象的消息内容，可以多次调用以增量方式处理数据。

```python
sha256_hash = hashlib.sha256()
sha256_hash.update(b'Hello, ')
sha256_hash.update(b'Runoob!')
print(sha256_hash.hexdigest())
# 输出：1b56561022276e9a5a8e1cda72e1b39fca6f6074326a74d39f6dfd9540c8ecd7
```

### 3.2 `hexdigest()`

返回十六进制字符串表示的哈希值。

### 3.3 `digest()`

返回二进制格式的哈希值（字节串）。

```python
sha1_hash = hashlib.sha1(b'RUNOOB')
print(sha1_hash.digest())
# 输出：b'4\x17\t\xd0\xdb\xc2f3/\x1c\xbc\xd8\xc2_\xd4\xa0T\x12\xb7\xd4'
```

---

## 4. 常见哈希算法示例

### MD5

```python
import hashlib
md5_hash = hashlib.md5(b'RUNOOB')
print(md5_hash.hexdigest())
# 18fa661e2a4a7dd6471cc1407290cf6e
```

### SHA-1

```python
sha1_hash = hashlib.sha1(b'RUNOOB')
print(sha1_hash.hexdigest())
# 341709d0dbc266332f1cbcd8c25fd4a05412b7d4
```

### SHA-256

```python
sha256_hash = hashlib.sha256(b'RUNOOB')
print(sha256_hash.hexdigest())
# 673dc967d03201db7fe47b7eabd56c47ca5bc694222de303106a5504e5d0daa8
```

### SHA-512

```python
sha512_hash = hashlib.sha512(b'RUNOOB')
print(sha512_hash.hexdigest())
# 7cfe50493eebd48ee7330c797459c2d0d5ca943bd1c84ad7a0b6783b11cd49d06b4a1dc84ee9ea5e20d0bfedbdb67e716500a20e5870abecea3f32dc8484a811
```

---

## 5. 哈希算法对比

| 算法        | 摘要长度（位） | 输出长度（字节） | 安全性   | 典型用途                               |
| ----------- | -------------- | ---------------- | -------- | -------------------------------------- |
| `md5`       | 128            | 16               | 不安全   | 数据完整性验证（已不推荐安全场景）     |
| `sha1`      | 160            | 20               | 不安全   | 数据完整性验证（已不推荐安全场景）     |
| `sha224`    | 224            | 28               | 低       | 数字签名、完整性验证                   |
| `sha256`    | 256            | 32               | 中等     | 数字签名、密码存储、区块链             |
| `sha384`    | 384            | 48               | 高       | 数字签名、加密算法                     |
| `sha512`    | 512            | 64               | 高       | 数字签名、加密算法                     |
| `sha3_224`  | 224            | 28               | 高       | SHA-3 标准，数字签名等                 |
| `sha3_256`  | 256            | 32               | 高       | SHA-3 标准，数字签名等                 |
| `sha3_384`  | 384            | 48               | 高       | SHA-3 标准，数字签名等                 |
| `sha3_512`  | 512            | 64               | 高       | SHA-3 标准，数字签名等                 |
| `shake_128` | 可变           | 可变             | 高       | 可扩展输出长度的哈希函数（XOF）        |
| `shake_256` | 可变           | 可变             | 高       | 可扩展输出长度的哈希函数（XOF）        |

> **注意**：MD5 和 SHA-1 已被认为不安全，尤其在安全领域，推荐使用 SHA-256 或 SHA-512 等更强大的算法。

---
