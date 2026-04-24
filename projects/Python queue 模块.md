# Python queue 模块

## 1. 概述

`queue` 模块是 Python 标准库的一部分，提供了线程安全的队列实现，用于在多线程编程中安全地传递数据。  
队列是一种先进先出（FIFO）的数据结构，但该模块也提供了后进先出（LIFO）和优先级队列。

所有队列类都内置了锁机制，无需额外的同步即可在多个线程间使用。

---

## 2. 队列类型

| 类                        | 说明                                                     |
| ------------------------- | -------------------------------------------------------- |
| `queue.Queue`             | 先进先出（FIFO）队列，最常用的通用队列                   |
| `queue.LifoQueue`         | 后进先出（LIFO）队列，类似栈                             |
| `queue.PriorityQueue`     | 优先级队列，按元素优先级（从小到大）取出                 |
| `queue.SimpleQueue`       | 简单的 FIFO 队列（Python 3.7+），比 `Queue` 开销更小     |

---

## 3. 基本用法示例

### 3.1 `Queue`（FIFO）

```python
import queue

q = queue.Queue()
q.put(1)
q.put(2)
q.put(3)

print(q.get())   # 1
print(q.get())   # 2
print(q.get())   # 3
```

### 3.2 `LifoQueue`（LIFO）

```python
q = queue.LifoQueue()
q.put(1)
q.put(2)
q.put(3)

print(q.get())   # 3
print(q.get())   # 2
print(q.get())   # 1
```

### 3.3 `PriorityQueue`（优先级）

元素以 `(priority, data)` 形式放入，优先级值越小，越先被取出。

```python
q = queue.PriorityQueue()
q.put((3, 'Low priority'))
q.put((1, 'High priority'))
q.put((2, 'Medium priority'))

print(q.get()[1])   # 'High priority'
print(q.get()[1])   # 'Medium priority'
print(q.get()[1])   # 'Low priority'
```

---

## 4. 常用方法（所有队列类通用）

| 方法                                    | 描述                                                         |
| --------------------------------------- | ------------------------------------------------------------ |
| `put(item, block=True, timeout=None)`   | 将元素放入队列。若 `block=False` 且队列满，则引发 `Full`；若 `timeout` 秒后仍无空闲位置，引发 `Full`。 |
| `get(block=True, timeout=None)`         | 取出并移除元素。若队列空且 `block=False`，引发 `Empty`；若 `timeout` 秒后仍无元素，引发 `Empty`。 |
| `empty()`                               | 若队列为空返回 `True`，否则 `False`。                           |
| `full()`                                | 若队列已满返回 `True`，否则 `False`（需指定 `maxsize`）。        |
| `qsize()`                               | 返回队列中大约的元素数量（因并发可能不精确）。               |
| `task_done()`                           | 表示之前已取出的任务已完成，用于配合 `join()`。              |
| `join()`                                | 阻塞直到队列中所有任务都已被处理（每个 `get()` 后需调用 `task_done()`）。 |

### 阻塞与超时示例

```python
try:
    item = q.get(block=False)        # 等价于 get_nowait()
except queue.Empty:
    print("队列为空")

try:
    q.put(obj, timeout=2)            # 等待最多2秒
except queue.Full:
    print("队列已满，无法放入")
```

---

## 5. 线程安全与生产者-消费者模型

所有队列都是线程安全的，常用于生产者-消费者模式。

```python
import queue
import threading
import time

q = queue.Queue()

def producer():
    for i in range(5):
        q.put(f"Task-{i}")
        print(f"生产: Task-{i}")
        time.sleep(0.5)
    q.put(None)      # 结束信号

def consumer():
    while True:
        item = q.get()
        if item is None:
            break
        print(f"消费: {item}")
        q.task_done()   # 标记任务完成
    q.task_done()

threading.Thread(target=producer).start()
threading.Thread(target=consumer).start()

q.join()              # 等待所有任务完成
print("所有任务处理完毕")
```

---

## 6. 优先级队列实际应用

```python
import queue

tasks = queue.PriorityQueue()
tasks.put((5, "普通清理"))
tasks.put((1, "紧急杀毒"))
tasks.put((3, "备份日志"))

while not tasks.empty():
    priority, action = tasks.get()
    print(f"优先级 {priority} -> {action}")
# 输出顺序：紧急杀毒 -> 备份日志 -> 普通清理
```

---

## 7. 常用方法和属性速查表

| 方法/属性            | 说明                                             |
| -------------------- | ------------------------------------------------ |
| `Queue(maxsize=0)`   | 创建 FIFO 队列，`maxsize=0` 表示无大小限制       |
| `LifoQueue(maxsize=0)` | 创建 LIFO 队列                                 |
| `PriorityQueue(maxsize=0)` | 创建优先级队列（最小堆）                     |
| `SimpleQueue()`      | 无大小限制的简单 FIFO 队列（不支持 `task_done` 等） |
| `put_nowait(item)`   | 非阻塞放入，相当于 `put(item, block=False)`      |
| `get_nowait()`       | 非阻塞取出，相当于 `get(block=False)`            |
| `qsize()`            | 近似队列大小                                     |

> 注意：`SimpleQueue` 是 Python 3.7 新增，它比 `Queue` 更轻量，但缺少 `task_done()` 和 `join()` 方法。

---
