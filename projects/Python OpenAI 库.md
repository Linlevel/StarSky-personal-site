# Python OpenAI 库

## 1. 概述

`openai` 是一个官方 Python 库，用于与 OpenAI 的各种模型和服务交互。它封装了所有 RESTful API 调用，使开发者能轻松集成 AI 能力，如自然语言处理、图像生成、语音识别等。

### 主要功能

- **文本生成**：使用 GPT-4、GPT-5 等模型生成文章、代码、摘要、对话等
- **图像生成**：通过 DALL‑E 模型根据文本描述生成图像
- **嵌入（Embeddings）**：将文本转换为向量表示，用于语义搜索、分类、聚类等
- **语音转文本**：使用 Whisper 模型将音频转录为文字
- **微调（Fine‑tuning）**：使用自有数据集定制模型
- **助手（Assistants）API**：构建有长期上下文、能调用工具的复杂应用

> 开源地址：[https://github.com/openai/openai-python](https://github.com/openai/openai-python)

---

## 2. 安装与环境要求

### 环境要求

- Python 版本 ≥ 3.9
- 依赖库：`httpx`（默认）、`aiohttp`（可选）、`websockets`（Realtime API 需要）

### 安装

```bash
pip install openai
```

或

```bash
pip3 install openai
```

### 查看安装版本

```python
import openai
print(openai.__version__)
```

---

## 3. 基本使用（标准 OpenAI）

### 准备 API Key

前往 [OpenAI 平台](https://platform.openai.com/) 注册并生成 API Key。

### 创建客户端并发送请求（新版 Responses API）

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key="你申请的 API key",   # 也可以从环境变量读取
)

response = client.responses.create(
    model="gpt-4o",
    instructions="You are a coding assistant that talks like a pirate.",
    input="How do I check if a Python object is an instance of a class?",
)

print(response.output_text)
```

### 参数说明

| 参数           | 必填 | 类型         | 作用                                                         |
| -------------- | ---- | ------------ | ------------------------------------------------------------ |
| `api_key`      | 是   | `str`        | 申请的 OpenAI Key                                            |
| `model`        | 是   | `str`        | 使用的模型（决定能力与成本）                                 |
| `instructions` | 否   | `str`        | 系统指令，定义模型的身份、行为规范，优先级高于 `input`       |
| `input`        | 是   | `str` / list | 用户输入，描述具体问题或任务                                 |

---

## 4. 第三方兼容模型（国内可用）

### 4.1 DeepSeek

DeepSeek API 完全兼容 OpenAI 格式，只需修改 `base_url` 和 `api_key`。

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ.get('DEEPSEEK_API_KEY'),   # 推荐环境变量
    base_url="https://api.deepseek.com"
)

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello"},
    ],
    stream=False    # False 为非流式，True 为流式实时返回
)

print(response.choices[0].message.content)
```

**DeepSeek 模型说明**

| 模型               | 说明                       |
| ------------------ | -------------------------- |
| `deepseek-chat`    | 非思考模式，响应快         |
| `deepseek-reasoner`| 思考模式，推理能力更强     |

### 4.2 阿里百炼（通义千问）

阿里云百炼也支持 OpenAI 兼容接口。需先开通服务并获取 API Key。

**兼容配置**

- `base_url`：`https://coding.dashscope.aliyuncs.com/v1`
- `api_key`：百炼 Coding Plan 套餐的专属 API Key
- `model`：如 `qwen3-coder-plus`

#### 非流式调用示例

```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-xxx",   # 阿里云百炼 API Key
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'user', 'content': '你是谁？'}
    ]
)

print(completion.choices[0].message.content)
```

#### 流式调用示例

```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-xxx",
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {'role': 'system', 'content': 'You are a helpful assistant.'},
        {'role': 'user', 'content': '你是谁？'}
    ],
    stream=True,
    stream_options={"include_usage": True}
)

for chunk in completion:
    if hasattr(chunk, "choices") and len(chunk.choices) > 0:
        choice = chunk.choices[0]
        if hasattr(choice, "delta") and hasattr(choice.delta, "content"):
            print(choice.delta.content, end='', flush=True)
```

---

## 5. 视觉（多模态）功能

支持图片 URL 或 Base64 编码输入。

### 图片 URL 输入

```python
prompt = "What is in this image?"
img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2023_06_08_Raccoon1.jpg/1599px-2023_06_08_Raccoon1.jpg"

response = client.responses.create(
    model="gpt-5.2",
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": prompt},
                {"type": "input_image", "image_url": img_url},
            ],
        }
    ],
)
print(response.output_text)
```

### Base64 编码图片输入

```python
import base64
from openai import OpenAI

client = OpenAI()

with open("path/to/image.png", "rb") as image_file:
    b64_image = base64.b64encode(image_file.read()).decode("utf-8")

response = client.responses.create(
    model="gpt-5.2",
    input=[
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": prompt},
                {"type": "input_image", "image_url": f"data:image/png;base64,{b64_image}"},
            ],
        }
    ],
)
```

---

## 6. 异步使用（AsyncOpenAI）

### 基础异步示例

```python
import asyncio
from openai import AsyncOpenAI

client = AsyncOpenAI()

async def main():
    response = await client.responses.create(
        model="gpt-5.2",
        input="Explain disestablishmentarianism to a smart five year old."
    )
    print(response.output_text)

asyncio.run(main())
```

### 使用 aiohttp 后端（优化大量并发）

```bash
pip install openai[aiohttp]
```

```python
import asyncio
from openai import DefaultAioHttpClient, AsyncOpenAI

async def main():
    async with AsyncOpenAI(
        http_client=DefaultAioHttpClient(),
    ) as client:
        chat_completion = await client.chat.completions.create(
            messages=[{"role": "user", "content": "Say this is a test"}],
            model="gpt-5.2",
        )

asyncio.run(main())
```

---

## 7. 流式响应（Streaming）

基于 Server‑Sent Events (SSE) 实时获取响应。

### 同步流式

```python
from openai import OpenAI

client = OpenAI()
stream = client.responses.create(
    model="gpt-5.2",
    input="Write a one-sentence bedtime story about a unicorn.",
    stream=True,
)

for event in stream:
    print(event)
```

### 异步流式

```python
import asyncio
from openai import AsyncOpenAI

client = AsyncOpenAI()

async def main():
    stream = await client.responses.create(
        model="gpt-5.2",
        input="Write a one-sentence bedtime story about a unicorn.",
        stream=True,
    )
    async for event in stream:
        print(event)

asyncio.run(main())
```

---

## 8. 实时 API（Realtime API）

基于 WebSocket 的低延迟多模态对话（文本/音频）。

### 基础文本示例

```python
import asyncio
from openai import AsyncOpenAI

async def main():
    client = AsyncOpenAI()
    async with client.realtime.connect(model="gpt-realtime") as connection:
        # 配置仅输出文本
        await connection.session.update(
            session={"type": "realtime", "output_modalities": ["text"]}
        )
        # 发送用户消息
        await connection.conversation.item.create(
            item={
                "type": "message",
                "role": "user",
                "content": [{"type": "input_text", "text": "Say hello!"}],
            }
        )
        # 触发响应
        await connection.response.create()
        # 监听事件
        async for event in connection:
            if event.type == "response.output_text.delta":
                print(event.delta, end="")
            elif event.type == "response.output_text.done":
                print()
            elif event.type == "response.done":
                break

asyncio.run(main())
```

### 错误处理

```python
async for event in connection:
    if event.type == 'error':
        print(f"错误类型：{event.error.type}")
        print(f"错误码：{event.error.code}")
        print(f"错误信息：{event.error.message}")
```

---

## 9. 图像生成（DALL‑E）

```python
image = client.images.generate(
    model="gpt-image-1",
    prompt="一只在写代码的猫",
    size="1024x1024"
)
print(image.data[0].url)
```

---

## 10. 嵌入生成（Embeddings）

```python
embedding = client.embeddings.create(
    model="text-embedding-3-small",
    input="Hello world"
)
print(embedding.data[0].embedding)
```

---

## 11. 音频转文本（Whisper）

```python
audio_file = open("speech.mp3", "rb")
transcript = client.audio.transcriptions.create(
    model="whisper-1",
    file=audio_file
)
print(transcript.text)
```

---

## 12. 文本转语音

```python
speech = client.audio.speech.create(
    model="gpt-4o-mini-tts",
    voice="alloy",
    input="你好，欢迎使用 OpenAI"
)
with open("output.mp3", "wb") as f:
    f.write(speech)
```

---

## 13. 文件管理（Files API）

```python
from pathlib import Path

# 上传文件
client.files.create(
    file=Path("data.jsonl"),
    purpose="fine-tune"
)

# 列出文件
files = client.files.list()
for f in files:
    print(f.id, f.filename)

# 删除文件
client.files.delete(file_id="file-xxx")
```

---

## 14. 模型微调

```python
job = client.fine_tuning.jobs.create(
    training_file="file-xxx",
    model="gpt-3.5-turbo"
)
print(job.id, job.status)
```

---

## 15. Webhook 验证

```python
# 验证并解析请求
event = client.webhooks.unwrap(request_body, request_headers)

# 仅验证签名
client.webhooks.verify_signature(request_body, request_headers)
```

---

## 16. 错误处理

```python
import openai

try:
    client.responses.create(model="gpt-5.2", input="test")
except openai.RateLimitError as e:
    print("触发速率限制：", e)
except openai.APIConnectionError as e:
    print("连接失败：", e)
except openai.APIStatusError as exc:
    # 获取请求 ID
    print(exc.request_id)
```

---

## 17. Azure OpenAI 兼容

```python
from openai import AzureOpenAI

client = AzureOpenAI(
    api_version="2023-07-01-preview",
    azure_endpoint="https://xxx.openai.azure.com"
)
```

---

## 18. 版本与日志

```python
import openai
print(openai.__version__)
```

开启调试日志：

```bash
export OPENAI_LOG=debug
```

> 更多 API 参考：[https://github.com/openai/openai-python/blob/main/api.md](https://github.com/openai/openai-python/blob/main/api.md)

---
