# Python3 多线程

## 1. 多线程概述

多线程类似于同时执行多个不同程序，具有以下优点：

- 将占用长时间的程序任务放到后台处理
- 提升用户界面交互体验（如点击按钮后显示进度条）
- 可能加快程序运行速度
- 在等待任务（如用户输入、文件读写、网络收发）时释放内存等珍贵资源

每个独立线程拥有程序运行的入口、顺序执行序列和出口，但线程不能独立执行，必须依托于应用程序，由应用程序提供多个线程执行控制。

### 线程上下文

- 每个线程有一组 CPU 寄存器，称为**线程上下文**，反映线程上次运行时的寄存器状态
- 指令指针和堆栈指针寄存器是上下文中最重要的两个寄存器
- 线程总是在进程的上下文中运行，地址用于标志线程所属进程的内存空间

### 线程特性

- 可被抢占（中断）
- 可暂时搁置（睡眠），即线程的退让

### 线程分类

| 类型       | 描述                                 |
| ---------- | ------------------------------------ |
| 内核线程   | 由操作系统内核创建和撤销             |
| 用户线程   | 不需要内核支持，在用户程序中实现     |

---

## 2. Python3 线程模块

Python3 提供两个主要线程模块：

- `_thread`（低级别，原始线程，简单锁；`thread` 模块已废弃，Python3 中重命名为 `_thread`）
- `threading`（推荐使用，功能更全面）

---

## 3. 使用 `_thread` 模块创建线程

### 语法

```python
_thread.start_new_thread(function, args[, kwargs])
```

**参数说明**：

- `function`：线程函数
- `args`：传递给线程函数的参数，必须是元组类型
- `kwargs`：可选参数

### 示例

```python
#!/usr/bin/python3
import _thread
import time

# 线程函数
def print_time(threadName, delay):
    count = 0
    while count < 5:
        time.sleep(delay)
        count += 1
        print("%s: %s" % (threadName, time.ctime(time.time())))

# 创建两个线程
try:
    _thread.start_new_thread(print_time, ("Thread-1", 2))
    _thread.start_new_thread(print_time, ("Thread-2", 4))
except:
    print("Error: 无法启动线程")

# 主线程循环，防止退出
while 1:
    pass
```

**输出示例**：

```
Thread-1: Wed Jan  5 17:38:08 2022
Thread-2: Wed Jan  5 17:38:10 2022
Thread-1: Wed Jan  5 17:38:10 2022
...
```

> 按 `Ctrl-C` 可退出程序。

---

## 4. `threading` 模块

### 常用函数

| 函数                                 | 描述                                         |
| ------------------------------------ | -------------------------------------------- |
| `threading.current_thread()`         | 返回当前线程变量                             |
| `threading.enumerate()`              | 返回正在运行的线程列表（启动后、结束前）     |
| `threading.active_count()`           | 返回正在运行的线程数量，等同于 `len(threading.enumerate())` |

### `threading.Thread` 类

**构造函数**：

```python
threading.Thread(target, args=(), kwargs={}, daemon=None)
```

**参数**：

- `target`：线程执行的目标函数
- `args`：目标函数的位置参数（元组）
- `kwargs`：目标函数的关键字参数（字典）
- `daemon`：是否守护线程

**常用方法与属性**：

| 方法 / 属性              | 描述                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `start()`                | 启动线程，调用 `run()` 方法                                  |
| `run()`                  | 定义线程要执行的代码                                         |
| `join(timeout=None)`     | 等待线程终止。若指定 `timeout`，最多等待 `timeout` 秒        |
| `is_alive()`             | 返回线程是否在运行                                           |
| `getName()` / `setName()`| 获取 / 设置线程名称                                          |
| `ident`                  | 线程唯一标识符                                               |
| `daemon`                 | 守护标志，指示是否为守护线程                                 |
| `isDaemon()`             | 判断是否是守护线程                                           |

### 简单示例

```python
import threading
import time

def print_numbers():
    for i in range(5):
        time.sleep(1)
        print(i)

thread = threading.Thread(target=print_numbers)
thread.start()
thread.join()
```

输出：

```
0
1
2
3
4
```

---

## 5. 通过继承 `threading.Thread` 创建线程

自定义线程类，继承 `Thread`，重写 `run()` 方法。

```python
#!/usr/bin/python3
import threading
import time

exitFlag = 0

class myThread(threading.Thread):
    def __init__(self, threadID, name, delay):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.name = name
        self.delay = delay

    def run(self):
        print("开始线程：" + self.name)
        print_time(self.name, self.delay, 5)
        print("退出线程：" + self.name)

def print_time(threadName, delay, counter):
    while counter:
        if exitFlag:
            threadName.exit()
        time.sleep(delay)
        print("%s: %s" % (threadName, time.ctime(time.time())))
        counter -= 1

# 创建新线程
thread1 = myThread(1, "Thread-1", 1)
thread2 = myThread(2, "Thread-2", 2)

# 启动线程
thread1.start()
thread2.start()

# 等待线程结束
thread1.join()
thread2.join()

print("退出主线程")
```

**输出示例**：

```
开始线程：Thread-1
开始线程：Thread-2
Thread-1: Wed Jan  5 17:34:54 2022
Thread-2: Wed Jan  5 17:34:55 2022
...
退出线程：Thread-1
退出线程：Thread-2
退出主线程
```

---

## 6. 线程同步

当多个线程共享数据时，可能出现数据不一致的问题。**锁（Lock）** 用于实现线程同步。

### 使用 `threading.Lock`

- `acquire()`：获取锁
- `release()`：释放锁

只有获得锁的线程才能访问共享资源，其他线程阻塞等待。

### 示例

```python
#!/usr/bin/python3
import threading
import time

class myThread(threading.Thread):
    def __init__(self, threadID, name, delay):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.name = name
        self.delay = delay

    def run(self):
        print("开启线程：", self.name)
        threadLock.acquire()          # 获取锁
        print_time(self.name, self.delay, 3)
        threadLock.release()          # 释放锁

def print_time(threadName, delay, counter):
    while counter:
        time.sleep(delay)
        print("%s: %s" % (threadName, time.ctime(time.time())))
        counter -= 1

threadLock = threading.Lock()
threads = []

# 创建线程
thread1 = myThread(1, "Thread-1", 1)
thread2 = myThread(2, "Thread-2", 2)

# 启动线程
thread1.start()
thread2.start()

# 等待所有线程完成
for t in threads:
    t.join()

print("退出主线程")
```

**输出**（注意 Thread-2 必须等待 Thread-1 释放锁后才能执行）：

```
开启线程： Thread-1
开启线程： Thread-2
Thread-1: Wed Jan  5 17:36:50 2022
Thread-1: Wed Jan  5 17:36:51 2022
Thread-1: Wed Jan  5 17:36:52 2022
Thread-2: Wed Jan  5 17:36:54 2022
Thread-2: Wed Jan  5 17:36:56 2022
Thread-2: Wed Jan  5 17:36:58 2022
退出主线程
```

---

## 7. 线程优先级队列（`Queue`）

`queue` 模块提供同步、线程安全的队列类：

- `Queue`：FIFO（先进先出）
- `LifoQueue`：LIFO（后进先出）
- `PriorityQueue`：优先级队列

这些队列实现了锁原语，可直接用于多线程间的同步。

### 常用方法

| 方法                             | 描述                                   |
| -------------------------------- | -------------------------------------- |
| `qsize()`                        | 返回队列大小                           |
| `empty()`                        | 队列为空返回 `True`                    |
| `full()`                         | 队列满返回 `True`                      |
| `get([block[, timeout]])`        | 获取队列，`timeout` 为等待时间         |
| `get_nowait()`                   | 相当于 `get(False)`                    |
| `put(item[, block[, timeout]])`  | 写入队列，`timeout` 为等待时间         |
| `put_nowait(item)`               | 相当于 `put(item, False)`              |
| `task_done()`                    | 完成一项工作后发送信号                 |
| `join()`                         | 等待队列为空，再执行后续操作           |

### 示例

```python
#!/usr/bin/python3
import queue
import threading
import time

exitFlag = 0

class myThread(threading.Thread):
    def __init__(self, threadID, name, q):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.name = name
        self.q = q

    def run(self):
        print("开启线程：" + self.name)
        process_data(self.name, self.q)
        print("退出线程：" + self.name)

def process_data(threadName, q):
    while not exitFlag:
        queueLock.acquire()
        if not workQueue.empty():
            data = q.get()
            queueLock.release()
            print("%s processing %s" % (threadName, data))
        else:
            queueLock.release()
        time.sleep(1)

threadList = ["Thread-1", "Thread-2", "Thread-3"]
nameList = ["One", "Two", "Three", "Four", "Five"]

queueLock = threading.Lock()
workQueue = queue.Queue(10)
threads = []
threadID = 1

# 创建线程
for tName in threadList:
    thread = myThread(threadID, tName, workQueue)
    thread.start()
    threads.append(thread)
    threadID += 1

# 填充队列
queueLock.acquire()
for word in nameList:
    workQueue.put(word)
queueLock.release()

# 等待队列清空
while not workQueue.empty():
    pass

# 通知线程退出
exitFlag = 1

# 等待所有线程完成
for t in threads:
    t.join()

print("退出主线程")
```

**输出示例**：

```
开启线程：Thread-1
开启线程：Thread-2
开启线程：Thread-3
Thread-3 processing One
Thread-1 processing Two
Thread-2 processing Three
Thread-3 processing Four
Thread-1 processing Five
退出线程：Thread-3
退出线程：Thread-2
退出线程：Thread-1
退出主线程
```

---
