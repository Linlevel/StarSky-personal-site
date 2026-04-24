# Python Pickle 模块

## 1. 概述

在 Python 开发中，经常需要将运行时的对象保存下来，或在程序重启后恢复之前的状态，例如：
- 将计算结果缓存到磁盘，避免重复计算
- 保存用户配置、程序中间状态
- 在不同 Python 进程之间传递复杂对象

`pickle` 模块正是 Python 为解决这类问题提供的官方内置方案，用于**序列化**和**反序列化** Python 对象。

- **序列化（Pickling）**：将 Python 对象转换为字节序列
- **反序列化（Unpickling）**：将字节序列转换回 Python 对象

> `pickle` 可以将几乎所有 Python 对象（列表、字典、类实例等）保存到文件或通过网络传输，之后重新加载。

---

## 2. 为什么使用 Pickle？

- **数据持久化**：将对象保存到文件，程序关闭后仍可访问
- **数据传输**：在分布式系统中传递 Python 对象
- **快速存储和加载**：高效处理复杂数据结构

### 典型使用场景
- 本地数据持久化
- 程序运行状态保存与恢复
- 中间计算结果缓存
- Python 进程间通信（IPC）
- 机器学习模型、特征数据保存

### 不适合的场景
- 跨语言数据交换
- 前后端接口数据传输
- 反序列化不可信数据源（存在安全风险）

---

## 3. Pickle 支持的对象类型

| 类型                                 | 是否支持 |
| ------------------------------------ | -------- |
| `int` / `float` / `bool` / `str`     | ✅       |
| `list` / `tuple` / `dict` / `set`    | ✅       |
| `None`                               | ✅       |
| 自定义类实例                         | ✅       |
| 嵌套结构                             | ✅       |
| 打开的文件对象、socket、数据库连接等 | ❌ 不支持 |

---

## 4. 基本用法

### 4.1 序列化到文件：`pickle.dump(obj, file)`

```python
import pickle

data = {
    'name': 'Alice',
    'age': 25,
    'hobbies': ['reading', 'traveling']
}

with open('data.pkl', 'wb') as file:
    pickle.dump(data, file)
```

- `'wb'`：二进制写模式
- 将 `data` 序列化并写入文件

### 4.2 从文件反序列化：`pickle.load(file)`

```python
import pickle

with open('data.pkl', 'rb') as file:
    loaded_data = pickle.load(file)

print(loaded_data)
```

- `'rb'`：二进制读模式
- 从文件读取字节流并反序列化为 Python 对象

### 4.3 序列化到字节串：`pickle.dumps(obj)`

```python
import pickle

data = [1, 2, 3, 4, 5]
byte_data = pickle.dumps(data)
print(byte_data)   # 类似 b'\x80\x04\x95\x0f...'
```

### 4.4 从字节串反序列化：`pickle.loads(bytes)`

```python
import pickle

byte_data = b'\x80\x04\x95\x0f\x00\x00\x00\x00\x00\x00\x00]\x94(K\x01K\x02K\x03K\x04K\x05e.'
original_data = pickle.loads(byte_data)
print(original_data)   # [1, 2, 3, 4, 5]
```

---

## 5. 序列化不同数据类型

### 5.1 混合类型数据

```python
import pickle

numbers = [1, 2, 3]
text = "Hello, Pickle"
dictionary = {'key': 'value'}
tuple_data = (1, 2, 3)
set_data = {1, 2, 3}

all_data = [numbers, text, dictionary, tuple_data, set_data]

with open('mixed_data.pkl', 'wb') as f:
    pickle.dump(all_data, f)

with open('mixed_data.pkl', 'rb') as f:
    loaded_data = pickle.load(f)
    print(loaded_data)
```

### 5.2 序列化自定义类实例

```python
import pickle

class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    def __repr__(self):
        return f"Student(name={self.name}, age={self.age}, grade={self.grade})"

student = Student("李四", 20, "大三")

with open('student.pkl', 'wb') as f:
    pickle.dump(student, f)

with open('student.pkl', 'rb') as f:
    loaded_student = pickle.load(f)
    print(loaded_student)   # Student(name=李四, age=20, grade=大三)
```

### 5.3 序列化多个对象（多次 dump）

```python
import pickle

data1 = {'item': 'apple', 'count': 5}
data2 = ['banana', 'orange', 'grape']
data3 = 42

with open('multiple.pkl', 'wb') as f:
    pickle.dump(data1, f)
    pickle.dump(data2, f)
    pickle.dump(data3, f)

with open('multiple.pkl', 'rb') as f:
    loaded_data1 = pickle.load(f)
    loaded_data2 = pickle.load(f)
    loaded_data3 = pickle.load(f)

print(loaded_data1, loaded_data2, loaded_data3, sep='\n')
```

---

## 6. 实际应用示例

### 6.1 保存和加载机器学习模型配置

```python
import pickle

model_config = {
    'model_type': 'RandomForest',
    'n_estimators': 100,
    'max_depth': 10,
    'trained_date': '2024-01-13',
    'accuracy': 0.95
}

with open('model_config.pkl', 'wb') as f:
    pickle.dump(model_config, f)

with open('model_config.pkl', 'rb') as f:
    config = pickle.load(f)
    print(f"模型类型: {config['model_type']}")
    print(f"准确率: {config['accuracy']}")
```

### 6.2 缓存计算结果

```python
import pickle
import os

def expensive_computation(n):
    return sum(i ** 2 for i in range(n))

def compute_with_cache(n, cache_file='cache.pkl'):
    if os.path.exists(cache_file):
        with open(cache_file, 'rb') as f:
            cache = pickle.load(f)
            if n in cache:
                print("从缓存中读取结果")
                return cache[n]
    else:
        cache = {}

    print("执行计算...")
    result = expensive_computation(n)

    cache[n] = result
    with open(cache_file, 'wb') as f:
        pickle.dump(cache, f)

    return result

print(compute_with_cache(1000000))   # 第一次计算
print(compute_with_cache(1000000))   # 从缓存读取
```

---

## 7. 高级用法：自定义序列化逻辑

通过实现 `__getstate__()` 和 `__setstate__()` 方法，可以控制对象的序列化和反序列化行为。

```python
import pickle

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __getstate__(self):
        # 自定义序列化逻辑（返回需要保存的状态字典）
        return {'name': self.name, 'age': self.age}

    def __setstate__(self, state):
        # 自定义反序列化逻辑
        self.name = state['name']
        self.age = state['age']

person = Person('Bob', 30)
with open('person.pkl', 'wb') as file:
    pickle.dump(person, file)

with open('person.pkl', 'rb') as file:
    loaded_person = pickle.load(file)
    print(loaded_person.name, loaded_person.age)   # Bob 30
```

---

## 8. 常用方法速查表

| 方法                             | 说明                                   | 示例                                                         |
| -------------------------------- | -------------------------------------- | ------------------------------------------------------------ |
| `pickle.dump(obj, file)`         | 将对象序列化并写入文件                 | `pickle.dump(data, open('data.pkl', 'wb'))`                  |
| `pickle.load(file)`              | 从文件读取并反序列化对象               | `data = pickle.load(open('data.pkl', 'rb'))`                 |
| `pickle.dumps(obj)`              | 将对象序列化为字节串                   | `bytes_data = pickle.dumps([1,2,3])`                         |
| `pickle.loads(bytes)`            | 从字节串反序列化对象                   | `lst = pickle.loads(bytes_data)`                             |
| `pickle.HIGHEST_PROTOCOL`        | 可用的最高协议版本（属性）             | `pickle.dump(obj, file, protocol=pickle.HIGHEST_PROTOCOL)`    |
| `pickle.DEFAULT_PROTOCOL`        | 默认协议版本（通常为 4）               | `pickle.dumps(obj, protocol=pickle.DEFAULT_PROTOCOL)`         |

---

## 9. 协议版本

| 协议版本 | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| 0        | 人类可读的 ASCII 格式（兼容旧版）                            |
| 1        | 二进制格式（兼容旧版）                                       |
| 2        | Python 2.3+ 引入，支持新式类                                 |
| 3        | Python 3.0+ 默认协议（不支持 Python 2）                      |
| 4        | Python 3.4+ 支持更大对象和更多数据类型                       |
| 5        | Python 3.8+ 支持内存优化和数据共享                           |

---

## 10. 注意事项

- **安全性**：`pickle` 反序列化时会执行任意代码，**不要加载来自不可信来源的 pickle 数据**。
- **兼容性**：生成的字节流是 Python 特有的，不同 Python 版本之间可能存在兼容性问题。
- **性能**：对于大型数据集，`pickle` 可能较慢；可考虑 `json`、`msgpack` 等替代方案。
- **不支持跨语言**：无法与其他语言（如 Java、JavaScript）直接交换数据。

---
