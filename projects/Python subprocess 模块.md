# Python subprocess 模块

## 1. 概述

`subprocess` 是 Python 标准库中的一个模块，用于创建和管理子进程。它允许你在 Python 程序中执行外部命令，并与这些命令进行交互（获取输出、错误信息，提供输入等）。

相比旧的 `os.system()` 或 `os.popen()`，`subprocess` 更安全、灵活，能够精细控制子进程的输入/输出/错误流，适合处理复杂场景。

---

## 2. 核心功能

### 2.1 执行外部命令 – `subprocess.run()`

`subprocess.run()` 是最常用的函数，执行命令并等待其完成，返回一个 `CompletedProcess` 对象。

```python
import subprocess

result = subprocess.run(['ls', '-l'], capture_output=True, text=True)
print(result.stdout)          # 命令的标准输出
```

- `capture_output=True`：捕获 stdout 和 stderr
- `text=True`：以字符串形式返回（否则为字节串）

### 2.2 处理输入和输出

可以通过 `input` 参数向子进程的标准输入传递数据。

```python
result = subprocess.run(['grep', 'python'],
                        input='hello\npython\nworld',
                        capture_output=True,
                        text=True)
print(result.stdout)   # 'python\n'
```

### 2.3 处理错误

默认情况下，命令失败（返回码非零）不会引发异常。设置 `check=True` 会在失败时抛出 `CalledProcessError`。

```python
import subprocess

try:
    result = subprocess.run(['ls', 'nonexistent_file'],
                            capture_output=True,
                            text=True,
                            check=True)
except subprocess.CalledProcessError as e:
    print(f"命令失败，返回码 {e.returncode}")
    print(f"错误输出: {e.stderr}")
```

---

## 3. 高级用法

### 3.1 `subprocess.Popen` – 底层控制

`Popen` 提供更细粒度的控制，如与后台进程交互、实时读取输出等。

```python
process = subprocess.Popen(['ping', 'google.com'],
                           stdout=subprocess.PIPE,
                           text=True)

while True:
    output = process.stdout.readline()
    if output == '' and process.poll() is not None:
        break
    if output:
        print(output.strip())

return_code = process.poll()
print(f"进程结束，返回码 {return_code}")
```

### 3.2 管道连接多个命令

将一个命令的输出作为另一个命令的输入（类似 Shell 管道）。

```python
p1 = subprocess.Popen(['ls', '-l'], stdout=subprocess.PIPE)
p2 = subprocess.Popen(['grep', 'py'],
                      stdin=p1.stdout,
                      stdout=subprocess.PIPE,
                      text=True)

output = p2.communicate()[0]
print(output)
```

---

## 4. 常用方法速查表

| 方法                      | 说明                                                         | 示例                                                         |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `subprocess.run()`        | 执行命令并等待完成（推荐）                                   | `subprocess.run(["ls", "-l"], capture_output=True, text=True)` |
| `subprocess.Popen()`      | 创建子进程（底层控制）                                       | `proc = subprocess.Popen(["ping", "google.com"], stdout=subprocess.PIPE)` |
| `subprocess.call()`       | 执行命令并返回退出码（旧版，不推荐）                         | `exit_code = subprocess.call(["python", "--version"])`       |
| `subprocess.check_call()` | 执行命令，失败时抛出异常                                     | `subprocess.check_call(["git", "commit"])`                   |
| `subprocess.check_output()` | 执行命令并返回输出（旧版，不推荐）                          | `output = subprocess.check_output(["date"], text=True)`      |

---

## 5. `CompletedProcess` 对象属性（`run()` 返回）

| 属性         | 描述                               |
| ------------ | ---------------------------------- |
| `args`       | 执行的命令参数列表                 |
| `returncode` | 进程退出状态码（0 表示成功）       |
| `stdout`     | 标准输出内容（若 `capture_output`）|
| `stderr`     | 标准错误内容（若 `capture_output`）|

---

## 6. `subprocess.Popen` 常用方法/属性

| 方法/属性          | 描述                                 | 示例                                          |
| ------------------ | ------------------------------------ | --------------------------------------------- |
| `poll()`           | 检查进程是否终止（返回 `None` 表示运行中） | `if proc.poll() is None: print("运行中")`   |
| `wait()`           | 阻塞等待进程结束                     | `proc.wait()`                                 |
| `communicate()`    | 与进程交互（发送输入、读取输出）     | `out, err = proc.communicate(input="data")`   |
| `terminate()`      | 发送终止信号（SIGTERM）              | `proc.terminate()`                            |
| `kill()`           | 强制终止进程（SIGKILL）              | `proc.kill()`                                 |
| `stdin`            | 进程的标准输入流                     | `proc.stdin.write("input")`                   |
| `stdout`           | 进程的标准输出流                     | `print(proc.stdout.read())`                   |
| `stderr`           | 进程的标准错误流                     | `errors = proc.stderr.read()`                 |

---

## 7. 常用参数说明（适用于 `run()` 和 `Popen()`）

| 参数       | 说明                                                         | 示例值                                      |
| ---------- | ------------------------------------------------------------ | ------------------------------------------- |
| `args`     | 命令（推荐使用列表形式）                                     | `["ls", "-l"]` 或 `"ls -l"`（需 `shell=True`） |
| `stdin`    | 标准输入配置                                                 | `subprocess.PIPE`, `None`, 文件对象         |
| `stdout`   | 标准输出配置                                                 | `subprocess.PIPE`, `open('log.txt','w')`    |
| `stderr`   | 标准错误配置                                                 | `subprocess.STDOUT`（合并到 stdout）        |
| `shell`    | 是否通过 Shell 执行（允许使用管道、通配符等）                | `True` / `False`                            |
| `cwd`      | 工作目录路径                                                 | `"/tmp"`                                    |
| `env`      | 自定义环境变量                                               | `{"PATH": "/usr/bin"}`                      |
| `timeout`  | 超时时间（秒），超时后抛出 `TimeoutExpired`                  | `30`                                        |
| `text`     | 输入/输出是否为字符串（否则为字节串）                        | `True`                                      |

---

## 8. 使用示例

### 8.1 执行简单命令并捕获输出

```python
result = subprocess.run(["echo", "Hello"], capture_output=True, text=True)
print(result.stdout)   # Hello\n
```

### 8.2 通过 Shell 执行复杂命令（如管道）

```python
subprocess.run("grep 'error' log.txt | wc -l", shell=True, check=True)
```

### 8.3 实时获取输出（如 tail -f）

```python
proc = subprocess.Popen(["tail", "-f", "log.txt"], stdout=subprocess.PIPE, text=True)
while True:
    line = proc.stdout.readline()
    if not line:
        break
    print(line.strip())
```

### 8.4 超时控制

```python
try:
    subprocess.run(["sleep", "10"], timeout=5)
except subprocess.TimeoutExpired:
    print("命令执行超时！")
```

---

## 9. 注意事项

- 优先使用 `subprocess.run()`，除非你需要更底层的控制（实时交互、长时间运行等）。
- 当命令包含特殊字符（如 `|`、`>`、`&`）时，设置 `shell=True`，但要警惕安全问题（避免注入）。
- 始终推荐以 **列表** 形式传递 `args`，避免 shell 注入风险。
- 捕获输出时，注意设置 `text=True` 以方便字符串处理。

---
