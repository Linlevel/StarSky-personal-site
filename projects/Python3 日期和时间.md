# Python3 日期和时间

## 概述

Python 程序可以通过多种方式处理日期和时间，其中 `time` 模块和 `calendar` 模块是常用的工具。时间间隔以秒为单位的浮点数表示，每个时间戳表示自 **1970 年 1 月 1 日午夜（历元）** 以来经过的秒数。

> 注意：1970 年之前的日期以及过于遥远的未来日期可能无法表示（UNIX 和 Windows 只支持到 2038 年）。

---

## 1. 获取当前时间戳

使用 `time.time()` 获取当前时间戳（浮点数）。

```python
#!/usr/bin/python3
import time

ticks = time.time()
print("当前时间戳为:", ticks)
```

**输出示例：**

```
当前时间戳为: 1459996086.7115328
```

---

## 2. 时间元组（struct_time）

多数 Python 时间函数将时间处理为 9 个数字组成的元组，称为 **struct_time**。

### 字段说明

| 索引 | 字段       | 值范围                     |
| ---- | ---------- | -------------------------- |
| 0    | 4 位数年份 | 如 2008                    |
| 1    | 月         | 1 到 12                    |
| 2    | 日         | 1 到 31                    |
| 3    | 小时       | 0 到 23                    |
| 4    | 分钟       | 0 到 59                    |
| 5    | 秒         | 0 到 61（60/61 为闰秒）    |
| 6    | 一周的第几日 | 0 到 6（0 表示周一）       |
| 7    | 一年的第几日 | 1 到 366（儒略历）         |
| 8    | 夏令时     | -1（未知），0（否），1（是） |

### 属性名称

| 索引 | 属性       | 含义                       |
| ---- | ---------- | -------------------------- |
| 0    | `tm_year`  | 年份                       |
| 1    | `tm_mon`   | 月份（1-12）               |
| 2    | `tm_mday`  | 日期（1-31）               |
| 3    | `tm_hour`  | 小时（0-23）               |
| 4    | `tm_min`   | 分钟（0-59）               |
| 5    | `tm_sec`   | 秒（0-61）                 |
| 6    | `tm_wday`  | 星期几（0 为周一，6 为周日）|
| 7    | `tm_yday`  | 一年中的第几天（1-366）    |
| 8    | `tm_isdst` | 夏令时标志（-1, 0, 1）     |

---

## 3. 获取当前时间（本地时间）

使用 `time.localtime()` 将时间戳转换为本地时间的 struct_time。

```python
#!/usr/bin/python3
import time

localtime = time.localtime(time.time())
print("本地时间为:", localtime)
```

**输出示例：**

```
本地时间为 : time.struct_time(tm_year=2016, tm_mon=4, tm_mday=7, tm_hour=10, tm_min=28, tm_sec=49, tm_wday=3, tm_yday=98, tm_isdst=0)
```

---

## 4. 获取格式化的时间

使用 `time.asctime()` 获得简单可读的时间字符串。

```python
#!/usr/bin/python3
import time

localtime = time.asctime(time.localtime(time.time()))
print("本地时间为:", localtime)
```

**输出示例：**

```
本地时间为 : Thu Apr  7 10:29:13 2016
```

---

## 5. 格式化日期时间：`strftime()` 和 `strptime()`

### `time.strftime(format[, t])`

将时间元组格式化为指定格式的字符串。

```python
#!/usr/bin/python3
import time

# 格式化为 "2016-03-20 11:45:39" 形式
print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))

# 格式化为 "Sat Mar 28 22:24:24 2016" 形式
print(time.strftime("%a %b %d %H:%M:%S %Y", time.localtime()))

# 将格式字符串转换为时间戳
a = "Sat Mar 28 22:24:24 2016"
print(time.mktime(time.strptime(a, "%a %b %d %H:%M:%S %Y")))
```

**输出示例：**

```
2016-04-07 10:29:46
Thu Apr 07 10:29:46 2016
1459175064.0
```

### 常用格式化符号

| 符号 | 含义                         | 示例           |
| ---- | ---------------------------- | -------------- |
| `%y` | 两位数的年份（00-99）        | `16`           |
| `%Y` | 四位数的年份（0000-9999）    | `2016`         |
| `%m` | 月份（01-12）                | `04`           |
| `%d` | 月内中的一天（01-31）        | `07`           |
| `%H` | 24 小时制小时（00-23）       | `10`           |
| `%I` | 12 小时制小时（01-12）       | `10`           |
| `%M` | 分钟（00-59）                | `29`           |
| `%S` | 秒（00-59）                  | `46`           |
| `%a` | 本地简化星期名称             | `Thu`          |
| `%A` | 本地完整星期名称             | `Thursday`     |
| `%b` | 本地简化月份名称             | `Apr`          |
| `%B` | 本地完整月份名称             | `April`        |
| `%c` | 本地日期和时间表示           | `Thu Apr 7 10:29:46 2016` |
| `%j` | 年内的一天（001-366）        | `098`          |
| `%p` | 本地 A.M. 或 P.M. 等价符     | `AM`           |
| `%U` | 一年中的星期数（周日为每周第一天，00-53） | `14` |
| `%w` | 星期（0 为周日，6 为周六）   | `3`            |
| `%W` | 一年中的星期数（周一为每周第一天，00-53） | `14` |
| `%x` | 本地日期表示                 | `04/07/16`     |
| `%X` | 本地时间表示                 | `10:29:46`     |
| `%Z` | 当前时区名称                 | `CST`          |
| `%%` | 百分号本身                   | `%`            |

---

## 6. 获取某月日历：`calendar` 模块

```python
#!/usr/bin/python3
import calendar

cal = calendar.month(2016, 1)
print("以下输出2016年1月份的日历:")
print(cal)
```

**输出：**

```
以下输出2016年1月份的日历:
    January 2016
Mo Tu We Th Fr Sa Su
             1  2  3
 4  5  6  7  8  9 10
11 12 13 14 15 16 17
18 19 20 21 22 23 24
25 26 27 28 29 30 31
```

---

## 7. `time` 模块常用函数

| 函数                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `time.altzone`                                               | 返回格林威治西部夏令时地区的偏移秒数（负数表示东部）         |
| `time.asctime([tupletime])`                                  | 接受时间元组，返回可读字符串如 `"Tue Dec 11 18:07:14 2008"`   |
| `time.clock()` （已废弃，Python 3.8 移除）                   | 返回当前 CPU 时间，推荐用 `perf_counter()` 或 `process_time()` |
| `time.perf_counter()`                                        | 返回系统运行时间（含睡眠），适合性能测量                      |
| `time.process_time()`                                        | 返回当前进程 CPU 时间（不含睡眠）                            |
| `time.ctime([secs])`                                         | 等价于 `asctime(localtime(secs))`，无参时返回当前时间        |
| `time.gmtime([secs])`                                        | 接收时间戳，返回格林威治天文时间的时间元组（`tm_isdst=0`）    |
| `time.localtime([secs])`                                     | 接收时间戳，返回本地时间的时间元组                            |
| `time.mktime(tupletime)`                                     | 接受时间元组，返回时间戳                                     |
| `time.sleep(secs)`                                           | 推迟调用线程运行 `secs` 秒                                   |
| `time.strftime(fmt[, tupletime])`                            | 格式化时间元组为字符串                                       |
| `time.strptime(str, fmt='%a %b %d %H:%M:%S %Y')`            | 将字符串按格式解析为时间元组                                 |
| `time.time()`                                                | 返回当前时间戳                                               |
| `time.tzset()`                                               | 根据环境变量 `TZ` 重新初始化时间设置                         |

### `sleep()` 示例

```python
#!/usr/bin/python3
import time

print("Start : %s" % time.ctime())
time.sleep(5)
print("End : %s" % time.ctime())
```

### `time` 模块属性

| 属性               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| `time.timezone`    | 当地时区（未启用夏令时）距格林威治的偏移秒数（美洲为正，欧亚非为负或零） |
| `time.tzname`      | 一对字符串，分别为带夏令时和不带夏令时的本地时区名称         |

---

## 8. `calendar` 模块常用函数

| 函数                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `calendar.calendar(year, w=2, l=1, c=6)`                    | 返回多行字符串格式的年历，3 个月一行                         |
| `calendar.firstweekday()`                                   | 返回当前每周起始日期的设置（默认 0 为周一）                  |
| `calendar.isleap(year)`                                      | 判断是否为闰年，返回 `True` 或 `False`                       |
| `calendar.leapdays(y1, y2)`                                 | 返回 `y1` 到 `y2` 之间的闰年总数（不含 `y2`）                |
| `calendar.month(year, month, w=2, l=1)`                     | 返回多行字符串格式的月历                                     |
| `calendar.monthcalendar(year, month)`                       | 返回整数的嵌套列表，每个子列表代表一周，当日为 0 表示该月外的日期 |
| `calendar.monthrange(year, month)`                          | 返回两个整数：该月第一天的星期几（0=周一）和该月的天数      |
| `calendar.prcal(year, w=0, l=0, c=6, m=3)`                 | 打印年历，相当于 `print(calendar.calendar(...))`             |
| `calendar.prmonth(theyear, themonth, w=0, l=0)`            | 打印月历，相当于 `print(calendar.month(...))`                |
| `calendar.setfirstweekday(weekday)`                         | 设置每周起始日（0=周一，6=周日）                             |
| `calendar.timegm(tupletime)`                                | 与 `time.gmtime` 相反：接受时间元组，返回时间戳              |
| `calendar.weekday(year, month, day)`                        | 返回给定日期的星期码（0=周一，6=周日）                       |

### `monthrange()` 示例

```python
import calendar
print(calendar.monthrange(2014, 11))  # 输出 (5, 30)
# 解释：5 表示 2014 年 11 月第一天是周六，30 表示该月有 30 天
```

---

## 9. 其他相关模块

- **`time`** 模块：底层时间处理
- **`datetime`** 模块：更高级的日期时间操作（支持时区、算术运算等）

---
