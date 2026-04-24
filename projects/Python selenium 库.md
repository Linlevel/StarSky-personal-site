# Python selenium 库

## 1. 概述

Selenium 是一个用于自动化 Web 浏览器操作的强大工具，广泛应用于 Web 应用程序测试、网页数据抓取和任务自动化等场景。它支持多种编程语言（C#、JavaScript、Java、Python、Ruby），并提供相应的 API。

> Selenium 教程：[https://www.runoob.com/selenium/](https://www.runoob.com/selenium/)

---

## 2. 安装 Selenium 和 WebDriver

### 2.1 安装 Selenium 库

使用 pip 安装：

```bash
pip install selenium
```

查看已安装版本：

```bash
pip show selenium
```

或在 Python 中查看：

```python
import selenium
print(selenium.__version__)
```

### 2.2 下载 WebDriver

Selenium 需要 WebDriver 来与浏览器交互。不同浏览器对应不同驱动：

| 浏览器   | WebDriver 名称      | 下载地址                                                               |
| -------- | ------------------- | ---------------------------------------------------------------------- |
| Chrome   | ChromeDriver        | [https://chromedriver.chromium.org/](https://chromedriver.chromium.org/) |
| Firefox  | GeckoDriver         | [https://github.com/mozilla/geckodriver](https://github.com/mozilla/geckodriver) |
| Edge     | EdgeDriver          | [https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) |
| Safari   | SafariDriver        | 内置，需启用开发者模式                                                 |

下载后，将驱动所在目录添加到系统 `PATH` 环境变量中，或在代码中直接指定路径。

### 2.3 初始化 WebDriver

#### 方式一：Selenium 3 及早期方式（手动指定路径）

```python
from selenium import webdriver

driver = webdriver.Chrome(executable_path='/path/to/chromedriver')
# driver = webdriver.Firefox(executable_path='/path/to/geckodriver')
# driver = webdriver.Edge(executable_path='/path/to/msedgedriver')
```

#### 方式二：Selenium 4 推荐方式（使用 Service 对象）

从 Selenium 4 开始，建议通过 `Service` 对象指定驱动路径，避免弃用警告。

```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService

service = ChromeService(executable_path="/path/to/chromedriver")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)
```

#### 方式三：Selenium 4 自动检测驱动（需能访问外网）

```python
from selenium import webdriver

driver = webdriver.Chrome()   # 自动检测 Chrome 并下载驱动
```

> 由于国内网络限制，自动下载驱动可能失败，建议手动下载驱动并设置路径。

**示例：指定驱动路径获取网页标题**

```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService

service = ChromeService(executable_path="/RUNOOB/Downloads/chromedriver-mac-arm64/chromedriver")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://cn.bing.com")
print(driver.title)   # 打印页面标题
driver.quit()
```

---

## 3. 基本用法

### 3.1 初始化 WebDriver

```python
from selenium import webdriver

driver = webdriver.Chrome()   # Chrome
# driver = webdriver.Firefox() # Firefox
# driver = webdriver.Edge()    # Edge
```

### 3.2 打开网页

```python
driver.get("https://www.baidu.com")
```

### 3.3 查找页面元素

Selenium 提供多种查找方式，推荐使用 `By` 类：

```python
from selenium.webdriver.common.by import By

# 通过 ID 查找单个元素
search_box = driver.find_element(By.ID, "kw")

# 通过类名查找第一个元素
search_button = driver.find_element(By.CLASS_NAME, "s_ipt")

# 通过标签名查找所有匹配元素
links = driver.find_elements(By.TAG_NAME, "a")
```

### 3.4 模拟用户操作

```python
# 在输入框中输入文本
search_box.send_keys("Selenium Python")

# 点击按钮
search_button.click()
```

### 3.5 获取元素属性和文本

```python
# 获取元素文本
text = search_box.text

# 获取元素属性值
placeholder = search_box.get_attribute("placeholder")
```

### 3.6 等待机制

- **显式等待**：等待某个条件成立后继续执行。

```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "kw"))
)
```

- **隐式等待**：设置全局最大等待时间。

```python
driver.implicitly_wait(10)   # 最多等待 10 秒
```

### 3.7 关闭浏览器

```python
driver.quit()   # 关闭所有窗口并结束进程
# driver.close() # 仅关闭当前窗口
```

---

## 4. 简单自动化示例

以下示例演示自动搜索关键词并获取结果页标题。

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 配置驱动路径
service = ChromeService(executable_path="/RUNOOB/Downloads/chromedriver-mac-arm64/chromedriver")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

try:
    # 打开百度首页
    driver.get("https://www.baidu.com")

    # 定位搜索框并输入关键词
    search_box = driver.find_element(By.ID, "kw")
    search_box.send_keys("Selenium Python")

    # 提交搜索（相当于按回车）
    search_box.send_keys(Keys.RETURN)

    # 等待搜索结果区域加载完成
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "content_left"))
    )

    # 输出页面标题
    print("页面标题是:", driver.title)

finally:
    driver.quit()
```

---

## 5. Selenium 常用方法速查表

| 方法                                                      | 说明                               | 示例代码                                                                 |
| --------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------ |
| `webdriver.Chrome()`                                      | 初始化 Chrome 浏览器               | `driver = webdriver.Chrome()`                                            |
| `driver.get(url)`                                         | 访问指定 URL                       | `driver.get("https://example.com")`                                      |
| `driver.find_element(By, value)`                          | 查找第一个匹配的元素               | `driver.find_element(By.ID, "id")`                                       |
| `driver.find_elements(By, value)`                         | 查找所有匹配的元素                 | `driver.find_elements(By.CLASS_NAME, "class")`                           |
| `element.click()`                                         | 点击元素                           | `element.click()`                                                        |
| `element.send_keys(value)`                                | 向元素发送键盘输入                 | `element.send_keys("text")`                                              |
| `element.text`                                            | 获取元素的文本内容                 | `text = element.text`                                                    |
| `driver.back()`                                           | 浏览器后退                         | `driver.back()`                                                          |
| `driver.forward()`                                        | 浏览器前进                         | `driver.forward()`                                                       |
| `driver.refresh()`                                        | 刷新当前页面                       | `driver.refresh()`                                                       |
| `driver.execute_script(script, *args)`                    | 执行 JavaScript 脚本               | `driver.execute_script("alert('Hello!')")`                               |
| `driver.switch_to.frame(frame_reference)`                 | 切换到指定的 iframe                | `driver.switch_to.frame("frame_id")`                                     |
| `driver.switch_to.default_content()`                      | 切换回主文档                       | `driver.switch_to.default_content()`                                     |
| `driver.quit()`                                           | 关闭浏览器并退出驱动               | `driver.quit()`                                                          |
| `driver.close()`                                          | 关闭当前窗口                       | `driver.close()`                                                         |

---
