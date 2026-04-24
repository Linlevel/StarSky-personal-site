# Python asyncio 模块

## 1. 概述

`asyncio` 是 Python 标准库中的异步 I/O 框架，用于编写**单线程并发**代码。它特别适合 I/O 密集型任务（如网络请求、文件读写、数据库操作），通过事件循环和协程实现在等待 I/O 时切换执行其他任务，从而提高程序吞吐量。

> **比喻**：  
> 同步模式：只有一个厨师，煎牛排时必须干等5分钟，无法做其他事。  
> 异步模式：厨师开始煎牛排后立即去给其他客人倒水，利用等待时间处理其他任务。  
> `asyncio` 就是实现这种高效工作模式的 Python 库。

---

## 2. 核心概念

| 概念           | 说明                                                                 |
| -------------- | -------------------------------------------------------------------- |
| **协程 (Coroutine)** | 使用 `async def` 定义的函数，内部可通过 `await` 暂停执行，让出控制权给事件循环。 |
| **事件循环 (Event Loop)** | 负责调度和运行协程/任务，当遇到 `await` 时挂起当前任务，执行其他就绪任务。 |
| **任务 (Task)** | 对协程的封装，用于并发执行。通过 `asyncio.create_task()` 创建后立即加入事件循环。 |
| **Future**      | 低层级对象，表示一个尚未完成的操作结果。通常不直接使用，由 `await` 自动处理。 |

---

## 3. 入门示例：同步 vs 异步

### 3.1 同步版本（使用 `requests` + `time.sleep()`）

```python
import time
import requests

def fetch_url(url):
    print(f"开始获取: {url}")
    time.sleep(2)          # 阻塞整个线程
    print(f"完成获取: {url}")
    return f"来自 {url} 的数据"

def main_sync():
    urls = ['https://httpbin.org/get', 'https://httpbin.org/delay/1', 'https://httpbin.org/headers']
    start = time.time()
    results = [fetch_url(url) for url in urls]
    print(f"同步总耗时: {time.time()-start:.2f} 秒")

main_sync()
# 输出：约 6 秒（三个任务顺序执行，每个2秒）
```

### 3.2 异步版本（使用 `aiohttp` + `asyncio.sleep()`）

```python
import asyncio
import aiohttp
import time

async def fetch_url_async(session, url):
    print(f"开始异步获取: {url}")
    async with session.get(url) as response:
        await asyncio.sleep(2)               # 模拟 I/O 等待，不阻塞线程
        text = await response.text()
        print(f"完成异步获取: {url}")
        return f"来自 {url} 的数据 (长度: {len(text)})"

async def main_async():
    urls = ['https://httpbin.org/get', 'https://httpbin.org/delay/1', 'https://httpbin.org/headers']
    async with aiohttp.ClientSession() as session:
        tasks = [asyncio.create_task(fetch_url_async(session, url)) for url in urls]
        print("所有任务已创建，开始并发执行...")
        results = await asyncio.gather(*tasks)
        return results

if __name__ == "__main__":
    start = time.time()
    results = asyncio.run(main_async())
    print(f"异步总耗时: {time.time()-start:.2f} 秒")
```

**输出**：并发执行，总耗时约 **2 秒**（接近最慢任务）。

---

## 4. 调度流程（可视化）

```
事件循环（调度员）
    │
    ├─ 任务队列：[T1(运行中), T2, T3]
    │
    T1 执行到 await I/O → 挂起并移出就绪队列
    │
    ├─ 事件循环调度 T2 运行
    T2 执行到 await → 挂起
    │
    T3 运行...  etc.
    │
    (I/O 完成后) → 任务重新进入就绪队列，被继续执行
```

> 在 I/O 等待期间，CPU 不会空闲，而是执行其他就绪任务，实现单线程并发。

---

## 5. 常用函数与类速查表

### 5.1 顶层函数（最常用）

| 函数                                            | 说明                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| `asyncio.run(coro, debug=False)`                | 运行顶层协程，自动创建和关闭事件循环（Python 3.7+ 推荐入口）。 |
| `asyncio.create_task(coro, name=None)`          | 将协程包装为 Task 并立即加入事件循环，实现并发。              |
| `asyncio.gather(*aws, return_exceptions=False)` | 并发运行多个异步对象，等待全部完成，返回结果列表。           |
| `asyncio.wait(aws, timeout=None, return_when=ALL_COMPLETED)` | 并发运行任务，可设置超时和返回条件，返回 `(done, pending)`。 |
| `asyncio.sleep(delay, result=None)`             | 异步休眠（非阻塞），常用来模拟 I/O 或让出控制权。            |
| `asyncio.to_thread(func, /, *args, **kwargs)`   | (Python 3.9+) 将同步阻塞函数放到线程池执行，返回可等待协程。 |
| `asyncio.current_task()`                        | 返回当前正在运行的 Task。                                    |
| `asyncio.all_tasks(loop=None)`                  | 返回事件循环中所有未完成的 Task 集合。                       |
| `asyncio.shield(coro)`                          | 保护一个协程不被取消（即使外层任务取消）。                   |
| `asyncio.wait_for(coro, timeout)`               | 设置超时等待协程完成，超时后抛出 `TimeoutError`。             |

### 5.2 同步原语（线程安全，用于协程）

| 类                      | 说明                               |
| ----------------------- | ---------------------------------- |
| `asyncio.Lock()`        | 异步互斥锁，`async with lock:` 使用 |
| `asyncio.Event()`       | 异步事件，`await event.wait()`     |
| `asyncio.Queue(maxsize)`| 异步队列，`await queue.put/get`    |
| `asyncio.Semaphore(value)` | 异步信号量，限制并发数           |

### 5.3 网络与子进程

| 函数/类                                      | 说明                     |
| -------------------------------------------- | ------------------------ |
| `asyncio.open_connection(host, port)`        | 建立 TCP 连接            |
| `asyncio.start_server(handler, host, port)`  | 创建 TCP 服务器          |
| `asyncio.create_subprocess_exec(cmd, ...)`   | 异步创建子进程           |

### 5.4 任务（Task）方法

| 方法/属性          | 说明                   |
| ------------------ | ---------------------- |
| `task.cancel()`    | 取消任务               |
| `task.done()`      | 返回是否已完成         |
| `task.result()`    | 获取结果（需已完成）   |
| `task.add_done_callback(cb)` | 添加完成回调       |

---

## 6. 实战示例

### 6.1 并发执行多个协程

```python
import asyncio

async def task1():
    print("Task1 start")
    await asyncio.sleep(1)
    print("Task1 end")
    return "A"

async def task2():
    print("Task2 start")
    await asyncio.sleep(2)
    print("Task2 end")
    return "B"

async def main():
    results = await asyncio.gather(task1(), task2())
    print(results)   # ['A', 'B']

asyncio.run(main())
```

### 6.2 超时控制

```python
async def long_task():
    await asyncio.sleep(10)
    return "Done"

async def main():
    try:
        result = await asyncio.wait_for(long_task(), timeout=5)
    except asyncio.TimeoutError:
        print("任务超时")
```

### 6.3 异步队列（生产者-消费者）

```python
async def producer(queue):
    for i in range(5):
        await queue.put(i)
        await asyncio.sleep(0.1)

async def consumer(queue):
    while True:
        item = await queue.get()
        print(f"Consumed {item}")
        queue.task_done()

async def main():
    queue = asyncio.Queue()
    await asyncio.gather(producer(queue), consumer(queue))
```

### 6.4 使用 `to_thread` 处理阻塞函数

```python
def blocking_io():
    time.sleep(2)
    return "Result"

async def main():
    result = await asyncio.to_thread(blocking_io)
    print(result)
```

---

## 7. 注意事项

- **版本要求**：`asyncio.run()` 需要 Python 3.7+；早期版本可使用 `loop = asyncio.get_event_loop(); loop.run_until_complete(main())`。
- **避免阻塞**：在协程中不要使用 `time.sleep()`，必须用 `await asyncio.sleep()`；同步阻塞会卡住整个事件循环。
- **调试**：设置环境变量 `PYTHONASYNCIODEBUG=1` 可启用调试模式，检测常见错误（如忘记 `await`）。
- **取消任务**：被取消的 Task 会抛出 `asyncio.CancelledError`，应在 `except` 中适当清理资源。
- **CPU 密集型任务**：不适合 `asyncio`，应使用多进程（`concurrent.futures.ProcessPoolExecutor`）。

---

## 8. 底层事件循环操作（不常用，了解即可）

```python
loop = asyncio.get_running_loop()
loop.call_soon(print, "立即执行")
loop.call_later(5, print, "5秒后执行")
loop.call_soon_threadsafe(callback)  # 线程安全
```

> 大部分应用场景只需使用高层 API（`asyncio.run()`, `create_task`, `gather` 等）。

---
