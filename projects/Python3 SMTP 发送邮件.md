# Python3 SMTP 发送邮件

## 1. SMTP 简介

**SMTP**（Simple Mail Transfer Protocol，简单邮件传输协议）是一组用于从源地址到目的地址传输邮件的规则，控制信件的中转方式。

Python 的 `smtplib` 模块对 SMTP 协议进行了简单封装，提供发送电子邮件的便捷途径。

---

## 2. 创建 SMTP 对象

```python
import smtplib

smtpObj = smtplib.SMTP([host [, port [, local_hostname]]])
```

### 参数说明

| 参数              | 描述                                                         |
| ----------------- | ------------------------------------------------------------ |
| `host`            | SMTP 服务器主机（IP 地址或域名，如 `runoob.com`），可选参数     |
| `port`            | 若提供了 `host` 参数，需指定 SMTP 服务端口号，通常为 **25**     |
| `local_hostname`  | 若 SMTP 服务器在本机，可指定为 `localhost`                    |

---

## 3. 发送邮件：`sendmail()` 方法

```python
SMTP.sendmail(from_addr, to_addrs, msg[, mail_options, rcpt_options])
```

### 参数说明

| 参数         | 描述                         |
| ------------ | ---------------------------- |
| `from_addr`  | 邮件发送者地址               |
| `to_addrs`   | 字符串列表，收件人地址       |
| `msg`        | 邮件内容（需符合 SMTP 协议格式） |

> **注意**：`msg` 是字符串，邮件通常包含标题、发信人、收件人、内容、附件等，需按 SMTP 协议格式构造。

---

## 4. 简单邮件发送实例（本地 sendmail）

```python
#!/usr/bin/python3
import smtplib
from email.mime.text import MIMEText
from email.header import Header

sender = 'from@runoob.com'
receivers = ['429240967@qq.com']   # 收件人，可改为自己的邮箱

# 构造 MIMEText 对象：内容，文本格式，编码
message = MIMEText('Python 邮件发送测试...', 'plain', 'utf-8')
message['From'] = Header("菜鸟教程", 'utf-8')   # 发送者
message['To'] = Header("测试", 'utf-8')         # 接收者

subject = 'Python SMTP 邮件测试'
message['Subject'] = Header(subject, 'utf-8')

try:
    smtpObj = smtplib.SMTP('localhost')
    smtpObj.sendmail(sender, receivers, message.as_string())
    print("邮件发送成功")
except smtplib.SMTPException:
    print("Error: 无法发送邮件")
```

> **前提**：本机已安装并运行 sendmail 服务。

---

## 5. 使用第三方 SMTP 服务发送

若本机无 sendmail，可使用其他服务商的 SMTP（如 QQ、网易、Gmail 等）。

```python
#!/usr/bin/python3
import smtplib
from email.mime.text import MIMEText
from email.header import Header

# 第三方 SMTP 服务配置
mail_host = "smtp.XXX.com"   # SMTP 服务器地址
mail_user = "XXXX"           # 用户名
mail_pass = "XXXXXX"         # 授权码或密码

sender = 'from@runoob.com'
receivers = ['429240967@qq.com']

message = MIMEText('Python 邮件发送测试...', 'plain', 'utf-8')
message['From'] = Header("菜鸟教程", 'utf-8')
message['To'] = Header("测试", 'utf-8')
message['Subject'] = Header('Python SMTP 邮件测试', 'utf-8')

try:
    smtpObj = smtplib.SMTP()
    smtpObj.connect(mail_host, 25)      # 连接 SMTP 服务器，端口 25
    smtpObj.login(mail_user, mail_pass) # 登录
    smtpObj.sendmail(sender, receivers, message.as_string())
    print("邮件发送成功")
except smtplib.SMTPException:
    print("Error: 无法发送邮件")
```

---

## 6. 发送 HTML 格式邮件

只需将 `MIMEText` 的 `_subtype` 参数设置为 `'html'`。

```python
#!/usr/bin/python3
import smtplib
from email.mime.text import MIMEText
from email.header import Header

sender = 'from@runoob.com'
receivers = ['429240967@qq.com']

mail_msg = """
<p>Python 邮件发送测试...</p>
<p><a href="http://www.runoob.com">这是一个链接</a></p>
"""

message = MIMEText(mail_msg, 'html', 'utf-8')
message['From'] = Header("菜鸟教程", 'utf-8')
message['To'] = Header("测试", 'utf-8')
message['Subject'] = Header('Python SMTP 邮件测试', 'utf-8')

try:
    smtpObj = smtplib.SMTP('localhost')
    smtpObj.sendmail(sender, receivers, message.as_string())
    print("邮件发送成功")
except smtplib.SMTPException:
    print("Error: 无法发送邮件")
```

---

## 7. 发送带附件的邮件

使用 `MIMEMultipart` 构造复合邮件，然后添加附件（可多个）。

```python
#!/usr/bin/python3
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header

sender = 'from@runoob.com'
receivers = ['429240967@qq.com']

# 创建带附件的实例
message = MIMEMultipart()
message['From'] = Header("菜鸟教程", 'utf-8')
message['To'] = Header("测试", 'utf-8')
message['Subject'] = Header('Python SMTP 邮件测试', 'utf-8')

# 邮件正文
message.attach(MIMEText('这是菜鸟教程Python 邮件发送测试……', 'plain', 'utf-8'))

# 构造附件1（test.txt）
att1 = MIMEText(open('test.txt', 'rb').read(), 'base64', 'utf-8')
att1["Content-Type"] = 'application/octet-stream'
att1["Content-Disposition"] = 'attachment; filename="test.txt"'
message.attach(att1)

# 构造附件2（runoob.txt）
att2 = MIMEText(open('runoob.txt', 'rb').read(), 'base64', 'utf-8')
att2["Content-Type"] = 'application/octet-stream'
att2["Content-Disposition"] = 'attachment; filename="runoob.txt"'
message.attach(att2)

try:
    smtpObj = smtplib.SMTP('localhost')
    smtpObj.sendmail(sender, receivers, message.as_string())
    print("邮件发送成功")
except smtplib.SMTPException:
    print("Error: 无法发送邮件")
```

---

## 8. 在 HTML 文本中嵌入图片

多数邮件服务商会屏蔽外链图片，正确做法是将图片作为附件内嵌，并在 HTML 中通过 `cid` 引用。

```python
#!/usr/bin/python3
import smtplib
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.header import Header

sender = 'from@runoob.com'
receivers = ['429240967@qq.com']

msgRoot = MIMEMultipart('related')
msgRoot['From'] = Header("菜鸟教程", 'utf-8')
msgRoot['To'] = Header("测试", 'utf-8')
msgRoot['Subject'] = Header('Python SMTP 邮件测试', 'utf-8')

msgAlternative = MIMEMultipart('alternative')
msgRoot.attach(msgAlternative)

mail_msg = """
<p>Python 邮件发送测试...</p>
<p><a href="http://www.runoob.com">菜鸟教程链接</a></p>
<p>图片演示：</p>
<p><img src="cid:image1"></p>
"""
msgAlternative.attach(MIMEText(mail_msg, 'html', 'utf-8'))

# 读取图片文件
fp = open('test.png', 'rb')
msgImage = MIMEImage(fp.read())
fp.close()

# 定义图片 ID，与 HTML 中的 cid 对应
msgImage.add_header('Content-ID', '<image1>')
msgRoot.attach(msgImage)

try:
    smtpObj = smtplib.SMTP('localhost')
    smtpObj.sendmail(sender, receivers, msgRoot.as_string())
    print("邮件发送成功")
except smtplib.SMTPException:
    print("Error: 无法发送邮件")
```

---

## 9. 使用 QQ 邮箱 SMTP 服务发送

QQ 邮箱需要开启 SMTP 服务并获取**授权码**（代替密码）。

### 配置信息

- **SMTP 服务器**：`smtp.qq.com`
- **SSL 端口**：`465`

```python
#!/usr/bin/python3
import smtplib
from email.mime.text import MIMEText
from email.utils import formataddr

my_sender = '429240967@qq.com'      # 发件人邮箱账号
my_pass = 'xxxxxxxxxx'              # 授权码（非登录密码）
my_user = '429240967@qq.com'        # 收件人邮箱账号

def mail():
    ret = True
    try:
        msg = MIMEText('填写邮件内容', 'plain', 'utf-8')
        msg['From'] = formataddr(["FromRunoob", my_sender])
        msg['To'] = formataddr(["FK", my_user])
        msg['Subject'] = "菜鸟教程发送邮件测试"

        server = smtplib.SMTP_SSL("smtp.qq.com", 465)   # 使用 SSL
        server.login(my_sender, my_pass)
        server.sendmail(my_sender, [my_user], msg.as_string())
        server.quit()
    except Exception:
        ret = False
    return ret

if mail():
    print("邮件发送成功")
else:
    print("邮件发送失败")
```

---

## 10. 参考文档

更多示例请参阅 Python 官方文档：  
[https://docs.python.org/3/library/email-examples.html](https://docs.python.org/3/library/email-examples.html)

---
