# Python Scrapy 库

## 1. 概述

Scrapy 是一个功能强大的 Python 爬虫框架，专门用于抓取网页数据并提取信息，常被用于数据挖掘、信息处理或存储历史数据等应用。  
与简单的爬虫库（如 `requests` + `BeautifulSoup`）不同，Scrapy 是一个**全功能的爬虫框架**，具有高度的可扩展性和灵活性，适用于复杂和大规模的网页抓取任务。

> 官网：[https://scrapy.org/](https://scrapy.org/)  
> 特点与介绍：[https://www.runoob.com/w3cnote/scrapy-detail.html](https://www.runoob.com/w3cnote/scrapy-detail.html)

### Scrapy 架构图（绿线为数据流向）

（图片略）

### 核心组件

| 组件         | 说明                                                   |
| ------------ | ------------------------------------------------------ |
| **Spider**   | 定义如何从网页提取数据以及如何跟踪链接                   |
| **Item**     | 定义和存储抓取的数据（数据模型）                         |
| **Pipeline** | 处理抓取到的数据（清洗、存储等）                         |
| **Middleware** | 处理请求和响应（设置代理、处理 cookies、用户代理等）     |
| **Settings** | 配置项目参数（请求延迟、并发数等）                       |

---

## 2. 安装 Scrapy

```bash
pip install scrapy
```

---

## 3. Scrapy 项目结构

使用命令行创建新项目：

```bash
scrapy startproject myproject
```

生成的项目结构：

```
myproject/
    scrapy.cfg                  # 项目配置文件
    myproject/                  # 项目源代码文件夹
        __init__.py
        items.py                # 定义抓取的数据结构
        middlewares.py          # 定义中间件
        pipelines.py            # 定义数据处理管道
        settings.py             # 项目设置文件
        spiders/                # 存放爬虫代码的文件夹
            __init__.py
            myspider.py         # 自定义爬虫代码
```

---

## 4. 编写一个简单的 Scrapy 爬虫

### 4.1 创建项目

```bash
scrapy startproject runoob_test_spiders
cd runoob_test_spiders
```

### 4.2 生成爬虫

```bash
scrapy genspider douban_spider movie.douban.com
```

生成 `spiders/douban_spider.py`，初始内容：

```python
import scrapy

class DoubanSpiderSpider(scrapy.Spider):
    name = "douban_spider"
    allowed_domains = ["movie.douban.com"]
    start_urls = ["https://movie.douban.com"]

    def parse(self, response):
        pass
```

**字段说明**：
- `name`：爬虫名称（唯一）
- `allowed_domains`：限制爬取域名
- `start_urls`：起始页面列表
- `parse`：处理响应并提取数据的核心方法

### 4.3 修改 `settings.py`（添加反爬虫配置）

```python
# 设置 User-Agent
USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'

# 不遵守 robots.txt 规则
ROBOTSTXT_OBEY = False

# 下载延迟，避免过快请求
DOWNLOAD_DELAY = 2

# 启用自动限速
AUTOTHROTTLE_ENABLED = True
AUTOTHROTTLE_START_DELAY = 2
AUTOTHROTTLE_MAX_DELAY = 5
```

### 4.4 编写爬虫代码（豆瓣电影 Top 250）

在 `spiders/douban_spider.py` 中修改：

```python
import scrapy

class DoubanSpider(scrapy.Spider):
    name = "douban_spider"
    start_urls = ['https://movie.douban.com/top250']

    def start_requests(self):
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Referer': 'https://movie.douban.com/',
        }
        for url in self.start_urls:
            yield scrapy.Request(url, headers=headers, callback=self.parse)

    def parse(self, response):
        for movie in response.css('div.item'):
            yield {
                'title': movie.css('span.title::text').get(),
                'rating': movie.css('span.rating_num::text').get(),
                'quote': movie.css('span.inq::text').get(),
            }

        # 分页处理
        next_page = response.css('span.next a::attr(href)').get()
        if next_page:
            yield response.follow(next_page, callback=self.parse)
```

### 4.5 运行爬虫并导出数据

```bash
scrapy crawl douban_spider -o douban_movies.csv
```

> **注意**：请遵守目标网站的 `robots.txt` 规则，仅用于学习。

---

## 5. Scrapy 常用方法速查表

### 5.1 爬虫方法

| 方法                           | 描述                                                         | 示例                                                         |
| ------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `start_requests()`             | 生成初始请求，可自定义请求头、方法等                         | `yield scrapy.Request(url, callback=self.parse)`             |
| `parse(response)`              | 处理响应并提取数据                                           | `yield {'title': response.css('h1::text').get()}`            |
| `follow(url, callback)`        | 自动处理相对 URL 并生成新请求（分页或链接跳转）              | `yield response.follow(next_page, callback=self.parse)`      |
| `closed(reason)`               | 爬虫关闭时调用，用于清理资源或记录日志                       | `def closed(self, reason): print('Closed:', reason)`         |
| `log(message)`                 | 记录日志信息                                                 | `self.log('This is a log message')`                          |

### 5.2 数据提取方法

| 方法                         | 描述                                         | 示例                                           |
| ---------------------------- | -------------------------------------------- | ---------------------------------------------- |
| `response.css(selector)`     | 使用 CSS 选择器提取数据                      | `title = response.css('h1::text').get()`       |
| `response.xpath(selector)`   | 使用 XPath 选择器提取数据                    | `title = response.xpath('//h1/text()').get()`  |
| `get()`                      | 从 SelectorList 中提取第一个匹配结果（字符串）| `title = response.css('h1::text').get()`       |
| `getall()`                   | 提取所有匹配结果（列表）                     | `titles = response.css('h1::text').getall()`   |
| `attrib`                     | 提取当前节点的属性                           | `link = response.css('a::attr(href)').get()`   |

### 5.3 请求与响应方法

| 方法                                              | 描述                               | 示例                                                         |
| ------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------ |
| `scrapy.Request(url, callback, method, headers, meta)` | 创建新请求                         | `yield scrapy.Request(url, callback=self.parse, headers=headers)` |
| `response.url`                                    | 获取当前响应的 URL                 | `current_url = response.url`                                 |
| `response.status`                                 | 获取响应状态码                     | `if response.status == 200: print('Success')`                |
| `response.meta`                                   | 获取请求中传递的额外数据           | `value = response.meta.get('key')`                           |
| `response.headers`                                | 获取响应头信息                     | `content_type = response.headers.get('Content-Type')`        |

### 5.4 中间件与管道方法

| 方法                                        | 描述                       | 示例                                                  |
| ------------------------------------------- | -------------------------- | ----------------------------------------------------- |
| `process_request(request, spider)`          | 请求发送前处理（下载中间件）| `request.headers['User-Agent'] = 'Mozilla/5.0'`      |
| `process_response(request, response, spider)`| 响应返回后处理             | `if response.status == 403: return request.replace(dont_filter=True)` |
| `process_item(item, spider)`                | 处理提取的数据（管道）     | `if item['price'] < 0: raise DropItem('Invalid')`    |
| `open_spider(spider)`                       | 爬虫启动时调用（管道）     | `self.file = open('items.json', 'w')`                |
| `close_spider(spider)`                      | 爬虫关闭时调用（管道）     | `self.file.close()`                                  |

### 5.5 工具与扩展方法

| 方法                                | 描述                               | 示例                                      |
| ----------------------------------- | ---------------------------------- | ----------------------------------------- |
| `scrapy shell`                      | 启动交互式 Shell，调试选择器       | `scrapy shell 'http://example.com'`       |
| `scrapy crawl <spider_name>`        | 运行指定爬虫                       | `scrapy crawl myspider -o output.json`    |
| `scrapy check`                      | 检查爬虫代码正确性                 | `scrapy check`                           |
| `scrapy fetch`                      | 下载指定 URL 的内容                | `scrapy fetch 'http://example.com'`       |
| `scrapy view`                       | 在浏览器中查看 Scrapy 下载的页面   | `scrapy view 'http://example.com'`        |

### 5.6 常用设置（`settings.py`）

| 设置项                     | 描述                     | 示例                                                         |
| -------------------------- | ------------------------ | ------------------------------------------------------------ |
| `USER_AGENT`               | 请求头 User-Agent        | `USER_AGENT = 'Mozilla/5.0'`                                 |
| `ROBOTSTXT_OBEY`           | 是否遵守 robots.txt      | `ROBOTSTXT_OBEY = False`                                     |
| `DOWNLOAD_DELAY`           | 下载延迟（秒）           | `DOWNLOAD_DELAY = 2`                                         |
| `CONCURRENT_REQUESTS`      | 并发请求数               | `CONCURRENT_REQUESTS = 16`                                   |
| `ITEM_PIPELINES`           | 启用管道                 | `ITEM_PIPELINES = {'myproject.pipelines.MyPipeline': 300}`   |
| `AUTOTHROTTLE_ENABLED`     | 启用自动限速             | `AUTOTHROTTLE_ENABLED = True`                                |

### 5.7 其他常用方法

| 方法                                        | 描述                               | 示例                                                         |
| ------------------------------------------- | ---------------------------------- | ------------------------------------------------------------ |
| `response.follow_all(links, callback)`      | 批量处理链接并生成请求             | `yield from response.follow_all(links, callback=self.parse)` |
| `response.json()`                           | 将响应内容解析为 JSON              | `data = response.json()`                                     |
| `response.text`                             | 获取响应文本内容                   | `html = response.text`                                       |
| `response.selector`                         | 获取 Selector 对象                 | `title = response.selector.css('h1::text').get()`            |

---

## 6. 常用方法使用举例

### 6.1 `start_requests()`

```python
class MySpider(scrapy.Spider):
    name = 'myspider'
    def start_requests(self):
        urls = ['http://example.com/page1', 'http://example.com/page2']
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)
```

### 6.2 `parse()`

```python
def parse(self, response):
    title = response.css('title::text').get()
    yield {'title': title}
```

### 6.3 `parse_item()`

```python
def parse_item(self, response):
    item = {}
    item['name'] = response.css('div.name::text').get()
    item['price'] = response.css('div.price::text').get()
    yield item
```

### 6.4 `follow()`

```python
def parse(self, response):
    for link in response.css('a::attr(href)'):
        yield response.follow(link, self.parse_item)
```

### 6.5 `yield` 生成项目

```python
def parse(self, response):
    yield {'title': response.css('title::text').get()}
```

### 6.6 Item 类

```python
import scrapy
class MyItem(scrapy.Item):
    name = scrapy.Field()
    price = scrapy.Field()
```

### 6.7 ItemLoader

```python
from scrapy.loader import ItemLoader
from myproject.items import MyItem

def parse(self, response):
    loader = ItemLoader(item=MyItem(), response=response)
    loader.add_css('name', 'div.name::text')
    loader.add_css('price', 'div.price::text')
    yield loader.load_item()
```

### 6.8 Request 类

```python
def parse(self, response):
    yield scrapy.Request(url='http://example.com/page3', callback=self.parse_item)
```

### 6.9 Response 类

```python
def parse(self, response):
    print(response.status)
    print(response.body)
```

### 6.10 Selector

```python
def parse(self, response):
    title = response.xpath('//title/text()').get()
    yield {'title': title}
```

### 6.11 CrawlSpider 与 Rule

```python
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor

class MyCrawlSpider(CrawlSpider):
    name = 'mycrawlspider'
    allowed_domains = ['example.com']
    start_urls = ['http://example.com']
    rules = (
        Rule(LinkExtractor(allow=('page/\d+',)), callback='parse_item'),
    )
    def parse_item(self, response):
        yield {'title': response.css('title::text').get()}
```

### 6.12 LinkExtractor

```python
from scrapy.linkextractors import LinkExtractor

def parse(self, response):
    extractor = LinkExtractor(allow=('page/\d+',))
    links = extractor.extract_links(response)
    for link in links:
        yield scrapy.Request(link.url, callback=self.parse_item)
```

### 6.13 Pipeline

```python
class MyPipeline:
    def process_item(self, item, spider):
        # 处理 item 数据
        return item
```

### 6.14 Middleware

```python
class MyMiddleware:
    def process_request(self, request, spider):
        request.headers['User-Agent'] = 'MyCustomUserAgent'
        return None
```

---
