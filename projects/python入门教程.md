# Python3 入门笔记

 ---
 
 # 目录
 
 - [第一个 Python 程序](#第一个-python-程序)
 - [Python3 基础语法](#python3-基础语法)
   - [编码](#编码)
   - [标识符](#标识符)
   - [Python 保留关键字](#python-保留关键字)
   - [注释](#注释)
   - [行与缩进](#行与缩进)
   - [多行语句](#多行语句)
   - [数字（Number）类型](#数字number类型)
   - [字符串（String）](#字符串string)
   - [空行](#空行)
   - [等待用户输入](#等待用户输入)
   - [同一行显示多条语句](#同一行显示多条语句)
   - [多个语句构成代码组](#多个语句构成代码组)
   - [print 输出](#print-输出)
   - [import 与 from...import](#import-与-fromimport)
 - [Python3 基本数据类型](#python3-基本数据类型)
   - [变量赋值](#变量赋值)
   - [标准数据类型](#标准数据类型)
     - [Number（数字）](#number数字)
     - [String（字符串）](#string字符串-1)
     - [bool（布尔类型）](#bool布尔类型)
     - [List（列表）](#list列表)
     - [Tuple（元组）](#tuple元组)
     - [Set（集合）](#set集合)
     - [Dictionary（字典）](#dictionary字典)
     - [bytes 类型](#bytes-类型)
   - [数据类型转换](#数据类型转换)
 - [Python3 数据类型转换](#python3-数据类型转换)
   - [隐式类型转换](#隐式类型转换)
   - [显式类型转换](#显式类型转换)
   - [内置类型转换函数一览](#内置类型转换函数一览)
 - [Python3 注释](#python3-注释)
   - [单行注释](#单行注释-1)
   - [多行注释](#多行注释-1)
   - [Docstring 文档字符串](#docstring-文档字符串)
     - [基本语法](#docstring基本语法)
     - [使用 help() 查看文档](#使用-help-查看文档)
     - [使用 inspect 模块提取文档](#使用-inspect-模块提取文档)
     - [多行 Docstring](#多行-docstring)
     - [类的 Docstring](#类的-docstring)
     - [Docstring 风格规范](#docstring-风格规范)
 - [Python3 运算符](#python3-运算符)
   - [算术运算符](#算术运算符)
   - [比较运算符](#比较运算符)
   - [赋值运算符](#赋值运算符)
   - [位运算符](#位运算符)
   - [逻辑运算符](#逻辑运算符)
   - [成员运算符](#成员运算符)
   - [身份运算符](#身份运算符)
   - [运算符优先级](#运算符优先级)
 - [Python3 数字（Number）](#python3-数字number)
   - [数字类型转换](#数字类型转换)
   - [数字运算](#数字运算)
   - [数学函数](#数学函数)
   - [随机数函数](#随机数函数)
   - [三角函数](#三角函数)
   - [数学常量](#数学常量)
 - [Python3 字符串](#python3-字符串)
   - [访问字符串中的值](#访问字符串中的值)
   - [字符串更新](#字符串更新)
   - [转义字符](#转义字符)
   - [字符串运算符](#字符串运算符)
   - [字符串格式化](#字符串格式化)
   - [str.format() 与 f-string](#strformat-与-f-string)
   - [三引号](#三引号)
   - [Unicode 字符串](#unicode-字符串)
   - [字符串内建函数](#字符串内建函数)
 - [Python3 列表](#python3-列表)
   - [创建列表](#创建列表)
   - [访问列表元素](#访问列表元素)
   - [更新列表](#更新列表)
   - [删除列表元素](#删除列表元素)
   - [列表操作符](#列表操作符)
   - [列表截取与拼接](#列表截取与拼接)
   - [嵌套列表](#嵌套列表)
   - [列表比较](#列表比较)
   - [列表常用函数](#列表常用函数)
   - [列表常用方法](#列表常用方法)
 - [Python3 元组](#python3-元组)
   - [创建元组](#创建元组)
   - [访问元组](#访问元组)
   - [修改元组](#修改元组)
   - [删除元组](#删除元组)
   - [元组运算符](#元组运算符)
   - [元组索引与截取](#元组索引与截取)
   - [元组内置函数](#元组内置函数)
 - [Python3 字典](#python3-字典)
   - [创建字典](#创建字典)
   - [访问字典](#访问字典)
   - [修改字典](#修改字典)
   - [删除字典元素](#删除字典元素)
   - [字典键的特性](#字典键的特性)
   - [字典内置函数](#字典内置函数)
   - [字典内置方法](#字典内置方法)
 - [Python3 集合](#python3-集合)
   - [创建集合](#创建集合)
   - [集合运算](#集合运算)
   - [集合推导式](#集合推导式)
   - [集合基本操作](#集合基本操作)
   - [集合内置方法完整列表](#集合内置方法完整列表)
 - [Python3 条件控制](#python3-条件控制)
   - [if 语句](#if-语句)
   - [if 嵌套](#if-嵌套)
   - [match...case](#matchcase)
 - [Python3 循环语句](#python3-循环语句)
   - [while 循环](#while-循环)
   - [for 语句](#for-语句)
   - [range() 函数](#range-函数)
   - [break、continue 与循环中的 else](#breakcontinue-与循环中的-else)
   - [pass 语句](#pass-语句)
 - [Python3 编程第一步](#python3-编程第一步)
   - [基本示例](#基本示例)
   - [斐波那契数列](#斐波那契数列)
   - [end 关键字](#end-关键字)
 - [Python 推导式](#python-推导式)
   - [列表推导式](#列表推导式-1)
   - [字典推导式](#字典推导式-1)
   - [集合推导式](#集合推导式-2)
   - [元组推导式（生成器表达式）](#元组推导式生成器表达式)
 - [Python3 迭代器与生成器](#python3-迭代器与生成器)
   - [迭代器](#迭代器)
   - [生成器](#生成器)
 - [Python with 关键字](#python-with-关键字)
   - [为什么需要 with 语句？](#为什么需要-with-语句)
   - [with 语句的基本语法](#with-语句的基本语法)
   - [上下文管理协议](#上下文管理协议)
   - [实际应用场景](#实际应用场景)
   - [创建自定义上下文管理器](#创建自定义的上下文管理器)
 - [Python3 函数](#python3-函数)
   - [定义函数](#定义一个函数)
   - [函数调用](#函数调用)
   - [参数传递](#参数传递)
   - [参数类型](#参数类型)
   - [匿名函数（lambda）](#匿名函数lambda)
   - [return 语句](#return-语句)
   - [强制位置参数](#强制位置参数)
 - [Python lambda（匿名函数）](#python-lambda匿名函数)
 - [Python 装饰器](#python-装饰器)
   - [基本语法](#基本语法-1)
   - [实例：打印日志](#实例打印日志)
   - [带参数的装饰器](#带参数的装饰器)
   - [带参数的装饰器（装饰器工厂）](#带参数的装饰器装-饰器工厂)
   - [类装饰器](#类装饰器)
   - [内置装饰器](#内置装饰器)
   - [多个装饰器堆叠](#多个装饰器堆叠)
 - [Python3 数据结构](#python3-数据结构)
   - [列表](#列表)
   - [将列表当作栈使用](#将列表当作栈使用)
   - [将列表当作队列使用](#将列表当作队列使用)
   - [列表推导式](#列表推导式-2)
   - [嵌套列表解析](#嵌套列表解析)
   - [del 语句](#del-语句)
   - [元组和序列](#元组和序列)
   - [集合](#集合)
   - [字典](#字典)
   - [遍历技巧](#遍历技巧)
 - [Python3 模块](#python3-模块)
   - [import 语句](#import-语句)
   - [模块的搜索路径](#模块的搜索路径)
   - [深入模块](#深入模块)
   - [from … import 语句](#from--import-语句)
   - [from … import \* 语句](#from--import--语句)
   - [\_\_name\_\_ 属性](#__name__-属性)
   - [dir() 函数](#dir-函数)
   - [标准模块](#标准模块)
   - [包](#包)
 - [Python \_\_name\_\_ 与 \_\_main\_\_](#python-__name__-与-__main__)
 - [Python3 输入和输出](#python3-输入和输出)
   - [输出格式美化](#输出格式美化)
   - [读取键盘输入](#读取键盘输入)
   - [读和写文件](#读和写文件)
   - [pickle 模块](#pickle-模块)
 - [Python3 File(文件) 方法](#python3-file文件-方法)
 - [Python3 OS 文件/目录方法](#python3-os-文件目录方法)
 - [Python3 错误和异常](#python3-错误和异常)
   - [语法错误](#语法错误)
   - [异常](#异常)
   - [异常处理](#异常处理)
   - [抛出异常](#抛出异常)
   - [用户自定义异常](#用户自定义异常)
   - [定义清理行为](#定义清理行为)
   - [预定义的清理行为](#预定义的清理行为)
 - [Python3 面向对象](#python3-面向对象)
   - [类定义](#类定义)
   - [类对象](#类对象)
   - [self 参数](#self-参数)
   - [类的方法](#类的方法)
   - [继承](#继承)
   - [多继承](#多继承)
   - [方法重写](#方法重写)
   - [类属性与方法](#类属性与方法)
   - [运算符重载](#运算符重载)
 - [Python3 命名空间和作用域](#python3-命名空间和作用域)
   - [命名空间](#命名空间)
   - [作用域](#作用域)
   - [全局变量和局部变量](#全局变量和局部变量)
   - [global 和 nonlocal 关键字](#global-和-nonlocal-关键字)
 - [Python 类型注解（Type Hints）](#python-类型注解type-hints)
   - [基础语法详解](#基础语法详解)
   - [复杂类型注解](#复杂类型注解)
   - [类型检查实战](#类型检查实战)
   - [最佳实践指南](#最佳实践指南)
   - [常见问题解答](#常见问题解答)
   - [总结与实践](#总结与实践)
 - [Python3 标准库概览](#python3-标准库概览)
   - [操作系统接口](#操作系统接口)
   - [文件通配符](#文件通配符)
   - [命令行参数](#命令行参数)
   - [错误输出重定向和程序终止](#错误输出重定向和程序终止)
   - [字符串正则匹配](#字符串正则匹配)
   - [数学](#数学)
   - [访问互联网](#访问互联网)
   - [日期和时间](#日期和时间)
   - [数据压缩](#数据压缩)
   - [性能度量](#性能度量)
   - [测试模块](#测试模块)
 
 ---
 

## 第一个 Python 程序
对于大多数编程语言，第一个入门示例都是输出 "Hello World!"。以下是用 Python 实现的方式：

**hello.py 文件代码：**
```python
#!/usr/bin/python3

print("Hello, World!")
```

**运行程序：**
```bash
$ python3 hello.py
```

**输出结果：**
```
Hello, World!
```

Python 常用文件扩展名为 `.py`，可将上述代码保存为 `hello.py` 并使用 `python3` 命令执行。

---

## Python3 基础语法

### 编码

默认情况下，Python3 源码文件以 **UTF-8** 编码，所有字符串都是 unicode 字符串。也可以为源码文件指定不同的编码，例如：

```python
# -*- coding: cp-1252 -*-
```

上述声明允许源文件使用 Windows-1252 字符集（适用于保加利亚语、白俄罗斯语、马其顿语、俄语、塞尔维亚语等）。

### 标识符

**规则：**
- 第一个字符必须是字母（a-z, A-Z）或下划线 `_`。
- 其余部分由字母、数字和下划线组成。
- 标识符**大小写敏感**，`count` 和 `Count` 代表不同的标识符。
- 长度无硬性限制，但建议保持简洁（一般不超过 20 个字符）。
- 不能使用保留关键字（如 `if`、`for`、`class` 等）。

**合法标识符示例：**
```python
age = 25                # 普通变量名
user_name = "Alice"     # 下划线连接单词，清晰易读
_total = 100            # 下划线开头通常表示“内部使用”或“私有”
MAX_SIZE = 1024         # 全大写通常表示常量
calculate_area()        # 函数名，动词+名词
StudentInfo             # 类名，首字母大写（驼峰命名法）
__private_var           # 双下划线开头，具有特殊含义
```

**非法标识符示例：**
```python
2nd_place = "silver"    # 错误：以数字开头
user-name = "Bob"       # 错误：包含连字符
class = "Math"          # 错误：使用关键字
$price = 9.99          # 错误：包含特殊字符
for = "loop"           # 错误：使用关键字
```

Python 3 允许使用 Unicode 字符作为标识符，因此中文变量名等非 ASCII 标识符也是合法的：
```python
姓名 = "张三"   # 合法
π = 3.14159    # 合法
```

**测试标识符是否合法的小例子：**
```python
def is_valid_identifier(name):
    try:
        exec(f"{name} = None")
        return True
    except:
        return False

print(is_valid_identifier("2var"))  # False
print(is_valid_identifier("var2"))  # True
```

### Python 保留关键字

保留字（关键字）不能用作标识符名称。通过 `keyword` 模块可以查看当前版本的所有关键字：

```python
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await',
 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except',
 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is',
 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return',
 'try', 'while', 'with', 'yield']
```

**关键字分类简表：**

| 类别 | 关键字 | 说明 |
|------|--------|------|
| 逻辑值 | `True`, `False`, `None` | 布尔真值、假值、空值 |
| 逻辑运算 | `and`, `or`, `not` | 逻辑与、或、非 |
| 条件控制 | `if`, `elif`, `else` | 条件判断 |
| 循环控制 | `for`, `while`, `break`, `continue` | 循环与中断、跳过 |
| 异常处理 | `try`, `except`, `finally`, `raise` | 异常捕获与抛出 |
| 函数定义 | `def`, `return`, `lambda` | 函数、返回、匿名函数 |
| 类与对象 | `class`, `del` | 定义类、删除对象引用 |
| 模块导入 | `import`, `from`, `as` | 导入模块及别名 |
| 作用域 | `global`, `nonlocal` | 全局与非局部变量声明 |
| 异步编程 | `async`, `await` | 异步函数与等待 |
| 其他 | `assert`, `in`, `is`, `pass`, `with`, `yield` | 断言、成员测试、身份测试、空占位、上下文管理、生成器返回值 |

更多保留关键字说明可参考：[Python3 关键字](https://www.runoob.com/python3/python3-keyword.html)

### 注释

- **单行注释**以 `#` 开头。
- **多行注释**可使用多个 `#`，或使用三个单引号 `'''` / 三个双引号 `"""` 将注释内容括起来。

**示例：**
```python
#!/usr/bin/python3

# 第一个注释
print("Hello, Python!")  # 第二个注释

'''
第三注释
第四注释
'''

"""
第五注释
第六注释
"""
print("Hello, Python!")
```

**输出：**
```
Hello, Python!
Hello, Python!
```

### 行与缩进

Python 最具特色的就是**使用缩进表示代码块**，不需要大括号 `{}`。  
同一个代码块中的语句必须包含**相同的缩进空格数**。

**正确示例：**
```python
if True:
    print("True")
else:
    print("False")
```

**错误示例（缩进不一致）：**
```python
if True:
    print("Answer")
    print("True")
else:
    print("Answer")
  print("False")    # 缩进不一致，导致运行错误
```

运行时会报错：
```
IndentationError: unindent does not match any outer indentation level
```

### 多行语句

Python 通常一行写完一条语句。如果语句很长，可使用反斜杠 `\` 实现多行语句：

```python
total = item_one + \
        item_two + \
        item_three
```

示例：
```python
item_one = 1
item_two = 2
item_three = 3
total = item_one + \
        item_two + \
        item_three
print(total)  # 输出 6
```

在 `[]`、`{}` 或 `()` 内部的多行语句，**不需要使用反斜杠**：
```python
total = ['item_one', 'item_two', 'item_three',
         'item_four', 'item_five']
```

### 数字（Number）类型

Python 中数字有四种类型：

- **int**（整数）：如 `1`，Python3 中只有一种 int 类型，无 long。
- **bool**（布尔）：如 `True`、`False`。
- **float**（浮点数）：如 `1.23`、`3E-2`。
- **complex**（复数）：由实部和虚部组成，形式为 `a + bj`，如 `1 + 2j`、`1.1 + 2.2j`。

### 字符串（String）

- 单引号 `'` 和双引号 `"` 用法完全相同。
- 三引号（`'''` 或 `"""`）可指定多行字符串。
- 转义符 `\` 可转义特殊字符；在字符串前加 `r` 可使其变为原始字符串，反斜杠不会发生转义。
- 字符串可通过 `+` 连接、通过 `*` 重复。
- Python 字符串有两种索引方式：正索引从 0 开始，负索引从 -1 开始。
- 字符串是**不可变**的，不能修改单个字符。
- 没有单独的字符类型，单个字符即长度为 1 的字符串。
- 切片语法：`str[start:end:step]`，`start`（包含）到 `end`（不包含），可加步长。

**示例：**
```python
str = '123456789'

print(str)                 # 输出字符串：123456789
print(str[0:-1])           # 从第一个到倒数第二个：12345678
print(str[0])              # 第一个字符：1
print(str[2:5])            # 索引2到4（不含5）：345
print(str[2:])             # 从索引2开始到末尾：3456789
print(str[1:5:2])          # 索引1,3（步长为2）：24
print(str * 2)             # 重复两次：123456789123456789
print(str + '你好')         # 拼接：123456789你好

print('hello\nrunoob')      # 换行输出 hello 和 runoob
print(r'hello\nrunoob')     # 原始字符串，输出 hello\nrunoob
```

### 空行

函数之间或类的方法之间用空行分隔，表示新代码段的开始。空行不是 Python 语法强制要求，但可以增加可读性，是代码维护的一部分。

### 等待用户输入

```python
#!/usr/bin/python3

input("\n\n按下 enter 键后退出。")
```

`\n\n` 会在输出前打印两个空行。程序等待用户按下回车键后退出。

### 同一行显示多条语句

使用分号 `;` 在同一行编写多条语句：

```python
#!/usr/bin/python3

import sys; x = 'runoob'; sys.stdout.write(x + '\n')
```

输出：
```
runoob
```

在交互式环境中执行时，还会显示字符数（`runoob` 6 个字符 + `\n` 1 个字符 = 7）：
```
>>> import sys; x = 'runoob'; sys.stdout.write(x + '\n')
runoob
7
```

### 多个语句构成代码组

缩进相同的一组语句构成代码块（代码组）。像 `if`、`while`、`def`、`class` 等复合语句，首行以关键字开始，以冒号 `:` 结束，该行之后的一行或多行代码组成代码组，称为子句（clause）。

示例：
```python
if expression:
    suite
elif expression:
    suite
else:
    suite
```

### print 输出

`print` 默认换行。若不希望换行，可在末尾添加 `end=""` 参数：

```python
x = "a"
y = "b"
# 换行输出
print(x)
print(y)

print('---------')
# 不换行输出
print(x, end=" ")
print(y, end=" ")
print()
```

输出：
```
a
b
---------
a b
```

### import 与 from...import

- 导入整个模块：`import somemodule`
- 从模块导入某个函数：`from somemodule import somefunction`
- 导入多个函数：`from somemodule import firstfunc, secondfunc, thirdfunc`
- 导入全部函数：`from somemodule import *`

**导入 sys 模块示例：**
```python
import sys
print('================Python import mode==========================')
print('命令行参数为:')
for i in sys.argv:
    print(i)
print('\n python 路径为', sys.path)
```

**导入特定成员：**
```python
from sys import argv, path  # 导入特定的成员

print('================python from import===================================')
print('path:', path)  # 无需加 sys.path，直接使用
```

---

## Python3 基本数据类型

### 变量赋值

Python 中的变量不需要声明，但必须赋值后才能使用。变量没有类型，类型指的是变量所指向内存中对象的类型。

```python
counter = 100          # 整型
miles   = 1000.0       # 浮点型
name    = "runoob"     # 字符串

print(counter)
print(miles)
print(name)
```

输出：
```
100
1000.0
runoob
```

**多变量赋值：**
- 同时赋相同值：`a = b = c = 1`
- 同时赋不同值：`a, b, c = 1, 2, "runoob"`

**检查类型：**
```python
x = 10
y = 3.14
name = "Alice"
is_active = True

a, b, c = 1, 2, "three"

print(type(x))          # <class 'int'>
print(type(y))          # <class 'float'>
print(type(name))       # <class 'str'>
print(type(is_active))  # <class 'bool'>
```

### 标准数据类型

Python3 中有 6 种标准数据类型（将 `bool` 单独列出时可为 7 种）：

- **不可变数据**（4 个）：Number（数字）、String（字符串）、bool（布尔）、Tuple（元组）
- **可变数据**（3 个）：List（列表）、Dictionary（字典）、Set（集合）

还有高级数据类型如 `bytes`。

#### Number（数字）

支持 `int`、`float`、`bool`、`complex`。  
可使用 `type()` 查询类型，也可用 `isinstance()` 判断是否属于某类型。

**`type()` 与 `isinstance()` 的区别：**
- `type()` 认为子类不是父类类型。
- `isinstance()` 认为子类是父类类型。

```python
class A:
    pass

class B(A):
    pass

print(isinstance(A(), A))  # True
print(type(A()) == A)      # True
print(isinstance(B(), A))  # True
print(type(B()) == A)      # False
```

**注意：** `bool` 是 `int` 的子类，`True == 1` 和 `False == 0` 返回 `True`，但最好用 `==` 比较值，用 `is` 比较身份时应谨慎（避免与字面量整数比较）。

**数值运算示例：**
```python
>>> 5 + 4      # 加法 -> 9
>>> 4.3 - 2    # 减法 -> 2.3
>>> 3 * 7      # 乘法 -> 21
>>> 2 / 4      # 除法（浮点） -> 0.5
>>> 2 // 4     # 整除（向下取整） -> 0
>>> 17 % 3     # 取余 -> 2
>>> 2 ** 5     # 乘方 -> 32
```

**数值类型实例：**

| int | float | complex |
|-----|-------|---------|
| 10 | 0.0 | 3.14j |
| 100 | 15.20 | 45.j |
| -786 | -21.9 | 9.322e-36j |
| 0o17 | 32.3e+18 | .876j |
| -0o112 | -90. | -.6545+0J |
| -0x260 | -32.54e100 | 3e+26J |
| 0x69 | 70.2E-12 | 4.53e-7j |

Python 3 中不允许前导零（如 `080`）。八进制使用 `0o` 前缀，十六进制使用 `0x` 前缀，二进制使用 `0b` 前缀。复数可用 `a + bj` 或 `complex(a, b)` 表示。

#### String（字符串）

字符串用单引号或双引号包围，支持转义、索引、切片、拼接和重复。

```python
my_str = 'Runoob'

print(my_str)             # Runoob
print(my_str[0:-1])       # Runoo
print(my_str[0])          # R
print(my_str[2:5])        # noo
print(my_str[2:])         # noob
print(my_str * 2)         # RunoobRunoob
print(my_str + "TEST")    # RunoobTEST
```

原始字符串 `r'...'` 可防止转义。字符串不可变，没有单独的字符类型。

#### bool（布尔类型）

布尔类型只有 `True` 和 `False`，是 `int` 的子类。在数值上下文中 `True` 相当于 1，`False` 相当于 0。  
`bool()` 函数可以将其他值转换为布尔值，以下值转换为 `False`：  
`None`、`False`、`0`、`0.0`、`0j`、空序列（`''`、`()`、`[]`）、空映射（`{}`）。其余值为 `True`。

**示例：**
```python
a = True
b = False
print(type(a))            # <class 'bool'>

print(int(True))          # 1
print(int(False))         # 0

print(bool(0))            # False
print(bool(42))           # True
print(bool(''))           # False
print(bool('Python'))     # True
print(bool([]))           # False
print(bool([1, 2, 3]))    # True

print(True and False)     # False
print(True or False)      # True
print(not True)           # False

print(5 > 3)              # True
print(2 == 2)             # True
print(7 < 4)              # False

if True:
    print("This will always print")
```

#### List（列表）

列表使用 `[]`，元素可修改，支持索引、切片、拼接 (`+`) 和重复 (`*`)。

```python
my_list = ['abcd', 786, 2.23, 'runoob', 70.2]
tinylist = [123, 'runoob']

print(my_list)                # ['abcd', 786, 2.23, 'runoob', 70.2]
print(my_list[0])             # abcd
print(my_list[1:3])           # [786, 2.23]
print(my_list[2:])            # [2.23, 'runoob', 70.2]
print(tinylist * 2)           # [123, 'runoob', 123, 'runoob']
print(my_list + tinylist)     # 拼接
```

列表元素可被修改：
```python
a = [1, 2, 3, 4, 5, 6]
a[0] = 9
a[2:5] = [13, 14, 15]
print(a)                      # [9, 2, 13, 14, 15, 6]
a[2:5] = []                   # 删除部分元素
print(a)                      # [9, 2, 6]
```

切片可带步长参数，也可逆向读取。

#### Tuple（元组）

元组使用 `()`，元素**不可修改**。构造单元素元组时需加逗号 `(20,)`，否则会被当成普通括号。

```python
my_tuple = ('abcd', 786, 2.23, 'runoob', 70.2)
tinytuple = (123, 'runoob')

print(my_tuple)               # 完整元组
print(my_tuple[0])            # abcd
print(my_tuple[1:3])          # (786, 2.23)
print(my_tuple[2:])           # 从索引2开始
print(tinytuple * 2)          # 重复
print(my_tuple + tinytuple)   # 拼接
```

#### Set（集合）

集合是无序、可变的，元素唯一。使用 `{}` 或 `set()` 创建。空集合必须用 `set()`。

```python
sites = {'Google', 'Taobao', 'Runoob', 'Facebook', 'Zhihu', 'Baidu'}
print(sites)   # 无序输出，自动去重

if 'Runoob' in sites:
    print('Runoob 在集合中')

a = set('abracadabra')
b = set('alacazam')
print(a)          # a 中唯一字符
print(a - b)      # 差集
print(a | b)      # 并集
print(a & b)      # 交集
print(a ^ b)      # 对称差集
```

#### Dictionary（字典）

字典是键值对映射，键必须不可变且唯一。使用 `{}` 创建，Python 3.7 起保持插入顺序。

```python
my_dict = {}
my_dict['one'] = "1 - 入门教程"
my_dict[2]     = "2 - 入门工具"

tinydict = {'name': 'runoob', 'code': 1, 'site': 'www.runoob.com'}

print(my_dict['one'])          # 1 - 入门教程
print(my_dict[2])              # 2 - 入门工具
print(tinydict)                # 完整字典
print(tinydict.keys())         # 所有键
print(tinydict.values())       # 所有值
```

通过 `dict()` 构造函数可创建字典：
```python
dict([('Runoob', 1), ('Google', 2), ('Taobao', 3)])
{x: x**2 for x in (2, 4, 6)}     # 字典推导式
dict(Runoob=1, Google=2, Taobao=3)
```

#### bytes 类型

`bytes` 表示不可变的二进制序列，每个元素是 0~255 的整数。常用于处理二进制数据。

```python
x = b"hello"
print(x)              # b'hello'
print(type(x))        # <class 'bytes'>
print(x[0])           # 104 (ASCII 值)

y = x[1:3]            # 切片 b'el'
z = x + b"world"      # 拼接 b'helloworld'

if x[0] == ord("h"):  # ord("h") == 104
    print("第一个元素是 'h'")
```

### 数据类型转换

常用内置转换函数一览：

| 函数 | 描述 |
|------|------|
| `int(x [,base])` | 转换为整数 |
| `float(x)` | 转换为浮点数 |
| `complex(real [,imag])` | 创建复数 |
| `str(x)` | 转换为字符串 |
| `repr(x)` | 转换为表达式字符串 |
| `eval(str)` | 计算字符串中的 Python 表达式 |
| `tuple(s)` | 转换为元组 |
| `list(s)` | 转换为列表 |
| `set(s)` | 转换为可变集合 |
| `dict(d)` | 从 (key, value) 序列创建字典 |
| `frozenset(s)` | 转换为不可变集合 |
| `chr(x)` | 整数转字符（Unicode） |
| `ord(x)` | 字符转整数（Unicode 码点） |
| `hex(x)` | 整数转十六进制字符串 |
| `oct(x)` | 整数转八进制字符串 |

---
# Python3 数据类型转换

有时候我们需要对数据的内置类型进行转换，只需要将数据类型作为函数名即可。  
Python 的数据类型转换可以分为两种：

- **隐式类型转换** —— 自动完成
- **显式类型转换** —— 需要使用类型函数来转换

## 隐式类型转换

在隐式类型转换中，Python 会自动将一种数据类型转换为另一种数据类型，无需我们干预。  
当对两种不同类型的数据进行运算时，较低的数据类型（如整数）会自动转换为较高的数据类型（如浮点数），以避免数据丢失。

**示例：**
```python
num_int = 123
num_flo = 1.23

num_new = num_int + num_flo

print("num_int 数据类型为:", type(num_int))
print("num_flo 数据类型为:", type(num_flo))

print("num_new 值为:", num_new)
print("num_new 数据类型为:", type(num_new))
```

**输出：**
```
num_int 数据类型为: <class 'int'>
num_flo 数据类型为: <class 'float'>
num_new: 值为: 124.23
num_new 数据类型为: <class 'float'>
```

**解析：**  
`num_int` 是整型（`int`），`num_flo` 是浮点型（`float`）。两者相加后，新变量 `num_new` 自动变为浮点型。

---

**整型与字符串相加则无法隐式转换：**
```python
num_int = 123
num_str = "456"

print("num_int 数据类型为:", type(num_int))
print("num_str 数据类型为:", type(num_str))

print(num_int + num_str)
```

**输出：**
```
num_int 数据类型为: <class 'int'>
num_str 数据类型为: <class 'str'>
Traceback (most recent call last):
  File "/runoob-test/test.py", line 7, in <module>
    print(num_int+num_str)
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

整型和字符串类型直接运算会报 `TypeError`，此时需要**显式类型转换**。

## 显式类型转换

显式类型转换需要使用预定义函数，如 `int()`、`float()`、`str()` 等，将数据从一种类型强制转换为另一种类型。

### 常用转换示例

- **`int()` 强制转换为整型：**
```python
x = int(1)      # 1
y = int(2.8)    # 2（截断小数部分）
z = int("3")    # 3
```

- **`float()` 强制转换为浮点型：**
```python
x = float(1)      # 1.0
y = float(2.8)    # 2.8
z = float("3")    # 3.0
w = float("4.2")  # 4.2
```

- **`str()` 强制转换为字符串类型：**
```python
x = str("s1")   # 's1'
y = str(2)      # '2'
z = str(3.0)    # '3.0'
```

### 整型与字符串运算时的显式转换

```python
num_int = 123
num_str = "456"

print("num_int 数据类型为:", type(num_int))
print("类型转换前，num_str 数据类型为:", type(num_str))

num_str = int(num_str)    # 强制转换为整型
print("类型转换后，num_str 数据类型为:", type(num_str))

num_sum = num_int + num_str

print("num_int 与 num_str 相加结果为:", num_sum)
print("sum 数据类型为:", type(num_sum))
```

**输出：**
```
num_int 数据类型为: <class 'int'>
类型转换前，num_str 数据类型为: <class 'str'>
类型转换后，num_str 数据类型为: <class 'int'>
num_int 与 num_str 相加结果为: 579
sum 数据类型为: <class 'int'>
```

## 内置类型转换函数一览

| 函数 | 描述 |
|------|------|
| `int(x [,base])` | 将 x 转换为整数 |
| `float(x)` | 将 x 转换为浮点数 |
| `complex(real [,imag])` | 创建一个复数 |
| `str(x)` | 将对象 x 转换为字符串 |
| `repr(x)` | 将对象 x 转换为表达式字符串 |
| `eval(str)` | 计算字符串中的有效 Python 表达式，返回一个对象 |
| `tuple(s)` | 将序列 s 转换为元组 |
| `list(s)` | 将序列 s 转换为列表 |
| `set(s)` | 转换为可变集合 |
| `dict(d)` | 从 (key, value) 元组序列创建字典 |
| `frozenset(s)` | 转换为不可变集合 |
| `chr(x)` | 将整数转换为对应字符（Unicode） |
| `ord(x)` | 将字符转换为整数（Unicode 码点） |
| `hex(x)` | 将整数转换为十六进制字符串 |
| `oct(x)` | 将整数转换为八进制字符串 |
| `bool(x)` | 将对象 x 转换为布尔值（True 或 False） |
| `bytes([source[, encoding[, errors]]])` | 将对象转换为不可变字节序列 |
| `bytearray([source[, encoding[, errors]]])` | 将对象转换为可变字节数组 |
| `memoryview(obj)` | 返回给定参数的内存视图对象（不复制数据） |
| `bin(x)` | 将整数转换为二进制字符串 |
| `ascii(x)` | 返回对象的 ASCII 表示，非 ASCII 字符会被转义 |

---

# Python3 注释

注释不会影响程序的执行，但能让代码更易于阅读和理解。Python 中的注释分为**单行注释**和**多行注释**。

## 单行注释

单行注释以 `#` 开头，`#` 之后的所有文本都会被解释器忽略。

```python
# 这是一个注释
print("Hello, World!")
# 这也是注释
```

## 多行注释

Python 中可以使用三个单引号 `'''` 或三个双引号 `"""` 包围的文本块作为多行注释。虽然本质上是字符串字面量，只要不被使用，就不会影响程序运行。

### 使用三个单引号
```python
#!/usr/bin/python3

'''
这是多行注释，用三个单引号
这是多行注释，用三个单引号
这是多行注释，用三个单引号
'''
print("Hello, World!")
```

### 使用三个双引号
```python
#!/usr/bin/python3

"""
这是多行注释，用三个双引号
这是多行注释，用三个双引号
这是多行注释，用三个双引号
"""
print("Hello, World!")
```

### 多行注释注意事项

多行注释不能**嵌套**。当你开始一个多行注释块时，Python 会将后续的行都当作注释，直到遇到另一组同样的三引号。嵌套多行注释会导致语法错误。

**错误示例（嵌套多行注释）：**
```python
'''
这是外部的多行注释
    '''
    这是尝试嵌套的多行注释
    会导致语法错误
    '''
'''
```
内部的三引号会被解释为普通字符串的开始或结束，导致代码结构不正确。

**正确做法：在多行注释内部使用单行注释 `#` 进行嵌套说明。**
```python
'''
这是外部的多行注释
可以包含一些描述性的内容

# 这是内部的单行注释
# 可以嵌套在多行注释中
'''
```

## Docstring 文档字符串

Docstring（文档字符串）是用于为函数、类、模块等添加文档说明的特殊注释。与普通注释不同，Docstring 可通过 `__doc__` 属性直接访问，也可以使用 `help()` 函数查看。

### 基本语法

使用三个双引号 `"""` 或三个单引号 `'''` 包围，放在函数、类、模块的开头。

```python
def add(a, b):
    """返回两数之和"""
    return a + b

# 通过 __doc__ 属性访问
print(add.__doc__)  # 输出: 返回两数之和
```

### 使用 help() 查看文档

```python
def add(a, b):
    """返回两数之和"""
    return a + b

help(add)
```

运行结果预期：
```
Help on function add in module __main__:

add(a, b)
    返回两数之和
```

### 使用 inspect 模块提取文档

```python
import inspect

def add(a, b):
    """返回两数之和"""
    return a + b

print(inspect.getdoc(add))  # 输出: 返回两数之和
```

### 多行 Docstring

对于复杂的函数，建议使用多行 Docstring 描述参数、返回值等。

```python
def calculate(a, b, operation="add"):
    """
    执行数学运算

    参数:
        a: 第一个数字
        b: 第二个数字
        operation: 操作类型，可选 "add", "subtract", "multiply"

    返回:
        计算结果
    """
    if operation == "add":
        return a + b
    elif operation == "subtract":
        return a - b
    elif operation == "multiply":
        return a * b
    else:
        raise ValueError("不支持的操作")

help(calculate)
```

运行结果预期：
```
Help on function calculate in module __main__:

calculate(a, b, operation='add')
    执行数学运算

    参数:
        a: 第一个数字
        b: 第二个数字
        operation: 操作类型，可选 "add", "subtract", "multiply"

    返回:
        计算结果
```

### 类的 Docstring

```python
class Person:
    """人物类，用于表示一个人的基本信息"""

    def __init__(self, name, age):
        """
        初始化人物对象

        参数:
            name: 姓名
            age: 年龄
        """
        self.name = name
        self.age = age

    def introduce(self):
        """介绍这个人"""
        return f"我叫{self.name}，今年{self.age}岁"

print(Person.__doc__)              # 人物类，用于表示一个人的基本信息
print(Person.introduce.__doc__)    # 介绍这个人
```

### Docstring 风格规范

常见风格有：

- **Google 风格**：使用缩进，参数和返回值明确标注。
- **Sphinx/reST 风格**：使用冒号开头，如 `:param name:`。
- **NumPy 风格**：类似 Google 风格，格式略有不同。

建议在项目中选择一种风格并保持统一。

# Python3 运算符

## 什么是运算符？

**运算符**是对操作数执行运算的符号。例如 `4 + 5 = 9` 中，`4` 和 `5` 是操作数，`+` 是运算符。

Python 支持以下类型的运算符：

- 算术运算符
- 比较（关系）运算符
- 赋值运算符
- 逻辑运算符
- 位运算符
- 成员运算符
- 身份运算符
- 运算符优先级

---

## 算术运算符

假设 `a = 10`，`b = 21`：

| 运算符 | 描述 | 实例 |
|--------|------|------|
| `+` | 加：两个对象相加 | `a + b` → `31` |
| `-` | 减：一个数减去另一个数 | `a - b` → `-11` |
| `*` | 乘：两个数相乘 / 重复字符串 | `a * b` → `210` |
| `/` | 除：x 除以 y，返回浮点数 | `b / a` → `2.1` |
| `%` | 取模：返回除法的余数 | `b % a` → `1` |
| `**` | 幂：x 的 y 次幂 | `a ** b` → `10` 的 `21` 次方 |
| `//` | 取整除：向下取整数 | `9 // 2` → `4`；`-9 // 2` → `-5` |

**示例：**
```python
a = 21
b = 10
c = 0

c = a + b
print("1 - c 的值为：", c)   # 31

c = a - b
print("2 - c 的值为：", c)   # 11

c = a * b
print("3 - c 的值为：", c)   # 210

c = a / b
print("4 - c 的值为：", c)   # 2.1

c = a % b
print("5 - c 的值为：", c)   # 1

a = 2
b = 3
c = a ** b
print("6 - c 的值为：", c)   # 8

a = 10
b = 5
c = a // b
print("7 - c 的值为：", c)   # 2
```

---

## 比较（关系）运算符

假设 `a = 10`，`b = 20`：

| 运算符 | 描述 | 实例 |
|--------|------|------|
| `==` | 等于：比较对象是否相等 | `a == b` → `False` |
| `!=` | 不等于：比较对象是否不相等 | `a != b` → `True` |
| `>` | 大于 | `a > b` → `False` |
| `<` | 小于 | `a < b` → `True` |
| `>=` | 大于等于 | `a >= b` → `False` |
| `<=` | 小于等于 | `a <= b` → `True` |

比较结果返回布尔值 `True` 或 `False`。

**示例：**
```python
a = 21
b = 10

if a == b:
    print("1 - a 等于 b")
else:
    print("1 - a 不等于 b")   # 执行

if a != b:
    print("2 - a 不等于 b")   # 执行
else:
    print("2 - a 等于 b")

if a < b:
    print("3 - a 小于 b")
else:
    print("3 - a 大于等于 b") # 执行

if a > b:
    print("4 - a 大于 b")     # 执行
else:
    print("4 - a 小于等于 b")

a = 5
b = 20
if a <= b:
    print("5 - a 小于等于 b") # 执行
else:
    print("5 - a 大于 b")

if b >= a:
    print("6 - b 大于等于 a") # 执行
else:
    print("6 - b 小于 a")
```

---

## 赋值运算符

假设 `a = 10`，`b = 20`：

| 运算符 | 描述 | 等效形式 |
|--------|------|----------|
| `=` | 简单赋值 | `c = a + b` |
| `+=` | 加法赋值 | `c += a` 等价于 `c = c + a` |
| `-=` | 减法赋值 | `c -= a` 等价于 `c = c - a` |
| `*=` | 乘法赋值 | `c *= a` 等价于 `c = c * a` |
| `/=` | 除法赋值 | `c /= a` 等价于 `c = c / a` |
| `%=` | 取模赋值 | `c %= a` 等价于 `c = c % a` |
| `**=` | 幂赋值 | `c **= a` 等价于 `c = c ** a` |
| `//=` | 取整除赋值 | `c //= a` 等价于 `c = c // a` |
| `:=` | **海象运算符**：表达式中赋值并返回赋值的值（3.8 新增） | `(n := len(a))` > 10 |

**示例（传统赋值）：**
```python
a = 21
b = 10
c = 0

c = a + b
print("1 - c 的值为：", c)   # 31

c += a
print("2 - c 的值为：", c)   # 52

c *= a
print("3 - c 的值为：", c)   # 1092

c /= a
print("4 - c 的值为：", c)   # 52.0

c = 2
c %= a
print("5 - c 的值为：", c)   # 2

c **= a
print("6 - c 的值为：", c)   # 2097152

c //= a
print("7 - c 的值为：", c)   # 99864
```

**海象运算符示例：**
```python
# 传统写法
n = 10
if n > 5:
    print(n)

# 使用海象运算符
if (n := 10) > 5:
    print(n)
```
海象运算符 `:=` 允许在 `if` 等表达式中直接赋值并判断，可避免重复计算，使代码更简洁。

---

## 位运算符

位运算符将数字视为二进制来执行逐位计算。以下假设 `a = 60`（二进制 `0011 1100`），`b = 13`（二进制 `0000 1101`）。

| 运算符 | 描述 | 示例与二进制解释 |
|--------|------|------------------|
| `&` | 按位与：两个对应位都为 1 时结果为 1，否则为 0 | `a & b` → `12` (`0000 1100`) |
| `\|` | 按位或：只要对应位有一个为 1，结果位即为 1 | `a \| b` → `61` (`0011 1101`) |
| `^` | 按位异或：对应位相异时结果为 1 | `a ^ b` → `49` (`0011 0001`) |
| `~` | 按位取反：每个位取反（相当于 `-x-1`） | `~a` → `-61` |
| `<<` | 左移：高位丢弃，低位补 0 | `a << 2` → `240` (`1111 0000`) |
| `>>` | 右移：低位丢弃，高位补符号位（或 0） | `a >> 2` → `15` (`0000 1111`) |

**示例：**
```python
a = 60      # 60 = 0011 1100
b = 13      # 13 = 0000 1101
c = 0

c = a & b   # 12 = 0000 1100
print("1 - c 的值为：", c)   # 12

c = a | b   # 61 = 0011 1101
print("2 - c 的值为：", c)   # 61

c = a ^ b   # 49 = 0011 0001
print("3 - c 的值为：", c)   # 49

c = ~a      # -61 = 1100 0011（有符号补码形式）
print("4 - c 的值为：", c)   # -61

c = a << 2  # 240 = 1111 0000
print("5 - c 的值为：", c)   # 240

c = a >> 2  # 15 = 0000 1111
print("6 - c 的值为：", c)   # 15
```

---

## 逻辑运算符

假设 `a = 10`，`b = 20`。

| 运算符 | 表达式 | 描述 | 实例 |
|--------|--------|------|------|
| `and` | `x and y` | 如果 `x` 为 `False`，返回 `x`，否则返回 `y` 的计算值 | `a and b` → `20` |
| `or` | `x or y` | 如果 `x` 为 `True`，返回 `x`，否则返回 `y` 的计算值 | `a or b` → `10` |
| `not` | `not x` | 布尔“非”，`True` 变 `False`，`False` 变 `True` | `not(a and b)` → `False` |

**示例：**
```python
a = 10
b = 20

if a and b:
    print("1 - 变量 a 和 b 都为 true")          # 执行
else:
    print("1 - 变量 a 和 b 有一个不为 true")

if a or b:
    print("2 - 变量 a 和 b 都为 true，或其中一个为 true")  # 执行
else:
    print("2 - 两者都不为 true")

a = 0
if a and b:
    print("3 - 变量 a 和 b 都为 true")
else:
    print("3 - 变量 a 和 b 有一个不为 true")    # 执行（因为 0 被视为 False）

if a or b:
    print("4 - 变量 a 和 b 都为 true，或其中一个为 true")  # 执行（b 非零）
else:
    print("4 - 两者都不为 true")

if not(a and b):
    print("5 - 变量 a 和 b 都为 false，或其中一个为 false")  # 执行
else:
    print("5 - 两者都为 true")
```

---

## 成员运算符

用于测试指定序列（如字符串、列表、元组）中是否包含某个值。

| 运算符 | 描述 |
|--------|------|
| `in` | 如果在序列中找到值返回 `True`，否则返回 `False` |
| `not in` | 如果在序列中没有找到值返回 `True`，否则返回 `False` |

**示例：**
```python
a = 10
b = 20
lst = [1, 2, 3, 4, 5]

if a in lst:
    print("1 - 变量 a 在列表中")      # 不执行
else:
    print("1 - 变量 a 不在列表中")    # 执行

if b not in lst:
    print("2 - 变量 b 不在列表中")    # 执行
else:
    print("2 - 变量 b 在列表中")

a = 2
if a in lst:
    print("3 - 变量 a 在列表中")      # 执行
else:
    print("3 - 变量 a 不在列表中")
```

---

## 身份运算符

用于比较两个对象的内存地址是否相同。

| 运算符 | 描述 | 类似表达式 |
|--------|------|------------|
| `is` | 判断两个标识符是否为同一个对象（内存地址相同） | `id(x) == id(y)` |
| `is not` | 判断两个标识符是否引用自不同对象 | `id(x) != id(y)` |

**示例：**
```python
a = 20
b = 20

if a is b:
    print("1 - a 和 b 有相同的标识")       # 执行（小整数缓存导致同一对象）
else:
    print("1 - a 和 b 没有相同的标识")

if id(a) == id(b):
    print("2 - a 和 b 有相同的标识")       # 执行
else:
    print("2 - a 和 b 没有相同的标识")

b = 30
if a is b:
    print("3 - 有相同的标识")
else:
    print("3 - 没有相同的标识")             # 执行

if a is not b:
    print("4 - a 和 b 没有相同的标识")      # 执行
else:
    print("4 - 有相同的标识")
```

**`is` 与 `==` 的区别：**
- `is` 判断两个变量是否引用**同一个对象**（内存地址相同）。
- `==` 判断两个变量的**值是否相等**。

```python
a = [1, 2, 3]
b = a
print(b is a)   # True（同一对象）
print(b == a)   # True

b = a[:]        # 创建副本
print(b is a)   # False（不同对象）
print(b == a)   # True（值相等）
```

---

## 运算符优先级

从最高到最低优先级的运算符大致如下（高优先级的先计算）：

| 优先级 | 运算符 | 描述 |
|--------|--------|------|
| 1 | `(...)`, `[...]`, `{...}` | 括号、列表、字典等字面量 |
| 2 | `x[index]`, `x[index:index]`, `x(arg...)`, `x.attr` | 下标、切片、调用、属性访问 |
| 3 | `await x` | await 表达式 |
| 4 | `**` | 乘方（指数） |
| 5 | `+x`, `-x`, `~x` | 正号、负号、按位取反（一元） |
| 6 | `*`, `@`, `/`, `//`, `%` | 乘、矩阵乘、除、整除、取余 |
| 7 | `+`, `-` | 加、减 |
| 8 | `<<`, `>>` | 移位 |
| 9 | `&` | 按位与 |
| 10 | `^` | 按位异或 |
| 11 | `\|` | 按位或 |
| 12 | `in`, `not in`, `is`, `is not`, `<`, `<=`, `>`, `>=`, `!=`, `==` | 比较、成员检测、身份检测 |
| 13 | `not x` | 逻辑非 |
| 14 | `and` | 逻辑与 |
| 15 | `or` | 逻辑或 |
| 16 | `if – else` | 条件表达式 |
| 17 | `lambda` | lambda 表达式 |
| 18 | `:=` | 赋值表达式 |

**优先级示例：**
```python
a = 20
b = 10
c = 15
d = 5

e = (a + b) * c / d          # (30 * 15) / 5 = 90.0
print("(a + b) * c / d 运算结果为：", e)

e = ((a + b) * c) / d        # (30 * 15) / 5 = 90.0
print("((a + b) * c) / d 运算结果为：", e)

e = (a + b) * (c / d)        # 30 * (15/5) = 90.0
print("(a + b) * (c / d) 运算结果为：", e)

e = a + (b * c) / d          # 20 + (150/5) = 50.0
print("a + (b * c) / d 运算结果为：", e)
```

**`and` 与 `or` 的优先级比较：**  
`and` 优先级高于 `or`。

```python
x = True
y = False
z = False

# 默认优先级：x or (y and z)
if x or y and z:
    print("yes")            # 输出 yes （因为 y and z 为 False，x or False 为 True）
else:
    print("no")

# 强制改变优先级：(x or y) and z
if (x or y) and z:
    print("yes")
else:
    print("no")             # 输出 no （因为 x or y 为 True，True and z 为 False）
```

---

# Python3 数字（Number）

Python 的 Number 数据类型用于存储数值。数字是不可变类型，当改变其值时，会重新分配内存空间。

## 创建与删除数字引用

```python
var1 = 1
var2 = 10
```

使用 `del` 语句可以删除对象引用：

```python
del var1
del var_a, var_b
```

## 数值类型

Python 支持三种不同的数值类型：

- **整型 (int)**：正负整数，无小数点，Python 3 中整数大小无限制（可表示任意大数）。布尔型 (`bool`) 是 `int` 的子类。
- **浮点型 (float)**：由整数部分与小数部分组成，可用科学计数法表示（如 `2.5e2` 表示 250）。
- **复数 (complex)**：由实部和虚部组成，可用 `a + bj` 或 `complex(a, b)` 表示，实部和虚部均为浮点型。

## 整数的不同进制表示

```python
number = 0xA0F   # 十六进制
print(number)    # 2575

number = 0o37    # 八进制（注意前缀为 0o，不是 0 加数字）
print(number)    # 31
```

| int | float | complex |
|-----|-------|---------|
| 10 | 0.0 | 3.14j |
| 100 | 15.20 | 45.j |
| -786 | -21.9 | 9.322e-36j |
| 0x69 | 70.2E-12 | 4.53e-7j |

（注意：Python 3 不允许类似 `080` 的八进制写法，必须使用 `0o` 前缀。）

## 数字类型转换

使用内置函数可以转换数字类型：

- `int(x)`：转换为整数。
- `float(x)`：转换为浮点数。
- `complex(x)`：转换为复数，实部为 x，虚部为 0。
- `complex(x, y)`：转换为复数，实部为 x，虚部为 y。

```python
a = 1.0
print(int(a))   # 1
```

## 数字运算

Python 解释器可作为一个简单的计算器，支持 `+`、`-`、`*`、`/` 等运算。

- 除法 `/` 总是返回浮点数。
- 取整除 `//` 返回向下取整的结果。
- 取余 `%` 返回余数。
- 幂 `**` 用于乘方。

```python
2 + 2          # 4
50 - 5 * 6     # 20
(50 - 5 * 6) / 4   # 5.0
8 / 5          # 1.6

17 / 3         # 5.666...
17 // 3        # 5
17 % 3         # 2
5 ** 2         # 25
2 ** 7         # 128
```

**注意：** `//` 的结果类型与操作数相关：

```python
7 // 2        # 3
7.0 // 2      # 3.0
7 // 2.0      # 3.0
```

**变量必须先赋值才能使用：**

```python
n   # 错误：NameError: name 'n' is not defined
```

**不同类型混合运算时，整数会自动转换为浮点数：**

```python
3 * 3.75 / 1.5   # 7.5
7.0 / 2          # 3.5
```

**交互式环境中，`_` 变量保存上一次表达式的结果：**

```python
tax = 12.5 / 100
price = 100.50
price * tax        # 12.5625
price + _          # 113.0625
round(_, 2)        # 113.06（_ 被视为只读变量）
```

## 数学函数

需要导入 `math` 模块才能使用以下部分函数。

| 函数 | 描述 |
|------|------|
| `abs(x)` | 返回绝对值，如 `abs(-10)` 返回 `10` |
| `math.ceil(x)` | 向上取整，如 `math.ceil(4.1)` 返回 `5` |
| `math.exp(x)` | e 的 x 次幂 |
| `math.fabs(x)` | 返回浮点数绝对值，如 `math.fabs(-10)` → `10.0` |
| `math.floor(x)` | 向下取整，如 `math.floor(4.9)` → `4` |
| `math.log(x[, base])` | 对数，默认底为 e；`math.log(100, 10)` → `2.0` |
| `math.log10(x)` | 以 10 为底的对数 |
| `max(x1, x2, ...)` | 返回最大值 |
| `min(x1, x2, ...)` | 返回最小值 |
| `math.modf(x)` | 返回浮点数的小数和整数部分，均为浮点型且与原数符号相同 |
| `pow(x, y)` | 等价于 `x ** y` |
| `round(x [, n])` | 四舍五入，n 指定保留小数位数 |
| `math.sqrt(x)` | 返回平方根 |

## 随机数函数

需导入 `random` 模块。

| 函数 | 描述 |
|------|------|
| `random.choice(seq)` | 从序列中随机选择一个元素 |
| `random.randrange([start,] stop [,step])` | 返回指定范围内的随机整数 |
| `random.random()` | 返回 `[0.0, 1.0)` 范围内的随机浮点数 |
| `random.seed([x])` | 设置随机数种子 |
| `random.shuffle(lst)` | 随机打乱列表元素顺序 |
| `random.uniform(x, y)` | 返回 `[x, y]` 范围内的随机浮点数 |

## 三角函数

需导入 `math` 模块。

| 函数 | 描述 |
|------|------|
| `math.acos(x)` | 反余弦 |
| `math.asin(x)` | 反正弦 |
| `math.atan(x)` | 反正切 |
| `math.atan2(y, x)` | 给定坐标的反正切 |
| `math.cos(x)` | 余弦 |
| `math.sin(x)` | 正弦 |
| `math.tan(x)` | 正切 |
| `math.hypot(x, y)` | 计算 `sqrt(x*x + y*y)` |
| `math.degrees(x)` | 弧度转角度 |
| `math.radians(x)` | 角度转弧度 |

## 数学常量

| 常量 | 描述 |
|------|------|
| `math.pi` | 圆周率 π |
| `math.e` | 自然常数 e |

# Python3 字符串

字符串是 Python 最常用的数据类型，使用单引号 `'` 或双引号 `"` 创建。

```python
var1 = 'Hello World!'
var2 = "Runoob"
```

## 访问字符串中的值

Python 没有单字符类型，单个字符也是字符串。可使用方括号 `[]` 截取子字符串，语法为 `变量[头下标:尾下标]`，索引从 0 开始，-1 表示从末尾开始。

```python
#!/usr/bin/python3

var1 = 'Hello World!'
var2 = "Runoob"

print("var1[0]: ", var1[0])       # H
print("var2[1:5]: ", var2[1:5])   # unoo
```

## 字符串更新

可以截取部分字符串并与其它字段拼接：

```python
var1 = 'Hello World!'
print("已更新字符串 : ", var1[:6] + 'Runoob!')  # Hello Runoob!
```

## 转义字符

在字符串中使用特殊字符时，Python 用反斜杠 `\` 转义。常见转义字符：

| 转义字符 | 描述 | 示例 |
|----------|------|------|
| `\(行尾)` | 续行符 | `print("line1 \ line2 \ line3")` → `line1 line2 line3` |
| `\\` | 反斜杠 | `print("\\")` → `\` |
| `\'` | 单引号 | `print('\'')` → `'` |
| `\"` | 双引号 | `print("\"")` → `"` |
| `\a` | 响铃 | `print("\a")` 触发系统响铃 |
| `\b` | 退格 (Backspace) | `print("Hello \b World!")` → `Hello World!` |
| `\000` | 空 | |
| `\n` | 换行 | |
| `\v` | 纵向制表符 | |
| `\t` | 横向制表符 | `print("Hello \t World!")` → `Hello     World!` |
| `\r` | 回车 | 将 `\r` 后的内容移到开头，逐一替换开头字符；例如 `print("Hello\rWorld!")` → `World!` |
| `\f` | 换页 | |
| `\yyy` | 八进制值（y 为 0~7） | `\012` 代表换行 |
| `\xyy` | 十六进制值（以 `\x` 开头） | `\x0a` 代表换行 |

**提示：** `\r` 常被用来实现简单的百分比进度条，配合 `end=''` 与 `flush=True` 不断刷新同一行。

```python
import time

for i in range(101):
    bar = '[' + '=' * (i // 2) + ' ' * (50 - i // 2) + ']'
    print(f"\r{bar} {i:3}%", end='', flush=True)
    time.sleep(0.05)
print()
```

## 字符串运算符

假设 `a = "Hello"`, `b = "Python"`：

| 运算符 | 描述 | 实例 |
|--------|------|------|
| `+` | 字符串拼接 | `a + b` → `HelloPython` |
| `*` | 重复字符串 | `a * 2` → `HelloHello` |
| `[]` | 按索引取字符 | `a[1]` → `e` |
| `[:]` | 切片（左闭右开） | `a[1:4]` → `ell` |
| `in` | 成员测试，包含返回 True | `'H' in a` → True |
| `not in` | 成员测试，不包含返回 True | `'M' not in a` → True |
| `r` / `R` | 原始字符串（防止转义） | `print(r'\n')` → `\n` |
| `%` | 格式化字符串 | 见下一节 |

```python
a = "Hello"
b = "Python"

print("a + b 输出结果：", a + b)          # HelloPython
print("a * 2 输出结果：", a * 2)          # HelloHello
print("a[1] 输出结果：", a[1])            # e
print("a[1:4] 输出结果：", a[1:4])        # ell

if "H" in a:
    print("H 在变量 a 中")               # 执行
else:
    print("H 不在变量 a 中")

if "M" not in a:
    print("M 不在变量 a 中")             # 执行

print(r'\n')
print(R'\n')
```

## 字符串格式化

Python 支持使用 `%` 进行格式化，与 C 的 `sprintf` 类似。

```python
print("我叫 %s 今年 %d 岁!" % ('小明', 10))
# 我叫 小明 今年 10 岁!
```

**常用格式化符号：**

| 符号 | 描述 |
|------|------|
| `%c` | 格式化字符及其 ASCII 码 |
| `%s` | 格式化字符串 |
| `%d` | 格式化整数 |
| `%u` | 格式化无符号整型 |
| `%o` | 格式化无符号八进制数 |
| `%x` / `%X` | 格式化无符号十六进制数（小写/大写） |
| `%f` | 格式化浮点数，可指定精度 |
| `%e` / `%E` | 科学计数法格式化浮点数 |
| `%g` / `%G` | `%f` 与 `%e`（或 `%E`）的简写 |
| `%p` | 用十六进制数格式化变量的地址 |

**格式化辅助指令：**

| 符号 | 功能 |
|------|------|
| `*` | 定义宽度或小数点精度 |
| `-` | 左对齐 |
| `+` | 正数前显示 `+` |
| `<sp>` | 正数前显示空格 |
| `#` | 八进制显示 `0`，十六进制显示 `0x` 或 `0X` |
| `0` | 用 `0` 填充空白 |
| `%%` | 输出单个 `%` |
| `(var)` | 映射变量（字典参数） |
| `m.n` | `m` 最小总宽度，`n` 小数点后位数 |

## str.format() 与 f-string

从 Python 3.6 开始，推荐使用 **f-string**（字面量格式化字符串），以 `f` 开头，使用 `{}` 包含变量或表达式。

```python
name = 'Runoob'
f'Hello {name}'          # Hello Runoob
f'{1+2}'                 # 3

w = {'name': 'Runoob', 'url': 'www.runoob.com'}
f'{w["name"]}: {w["url"]}'   # Runoob: www.runoob.com
```

Python 3.8 支持 `=` 拼接表达式与结果：

```python
x = 1
print(f'{x+1=}')   # x+1=2
```

## 三引号

三引号（`'''` 或 `"""`）允许字符串跨越多行，保留内部的缩进、换行和制表符，实现“所见即所得”。

```python
para_str = """这是一个多行字符串的实例
多行字符串可以使用制表符 TAB ( \t )。
也可以使用换行符 [ \n ]。
"""
print(para_str)
```

常用于嵌入 HTML、SQL 等多行文本，无需复杂的转义。

## Unicode 字符串

Python 3 中所有字符串都是 Unicode 字符串，无需像 Python 2 那样加 `u` 前缀。

## 字符串内建函数

常用字符串方法一览：

| 序号 | 方法 | 描述 |
|------|------|------|
| 1 | `capitalize()` | 首字符大写 |
| 2 | `center(width[, fillchar])` | 居中，指定宽度并用 `fillchar` 填充（默认空格） |
| 3 | `count(str, beg=0, end=len(string))` | 统计子串出现次数 |
| 4 | `bytes.decode(encoding='utf-8', errors='strict')` | 将 bytes 解码为字符串 |
| 5 | `encode(encoding='UTF-8', errors='strict')` | 编码为指定格式 |
| 6 | `endswith(suffix[, beg[, end]])` | 判断是否以指定后缀结尾 |
| 7 | `expandtabs(tabsize=8)` | 将 Tab 符号替换为空格 |
| 8 | `find(str[, beg[, end]])` | 查找子串，返回索引，找不到返回 -1 |
| 9 | `index(str[, beg[, end]])` | 类似 `find`，但找不到会抛出异常 |
| 10 | `isalnum()` | 是否全为字母或数字 |
| 11 | `isalpha()` | 是否全为字母/中文 |
| 12 | `isdigit()` | 是否全为数字 |
| 13 | `islower()` | 是否全为小写字母 |
| 14 | `isnumeric()` | 是否全为数字字符 |
| 15 | `isspace()` | 是否全为空白 |
| 16 | `istitle()` | 是否标题化 |
| 17 | `isupper()` | 是否全为大写字母 |
| 18 | `join(seq)` | 以指定字符串为分隔符合并序列 |
| 19 | `len(string)` | 返回字符串长度 |
| 20 | `ljust(width[, fillchar])` | 左对齐，用 `fillchar` 填充至指定宽度 |
| 21 | `lower()` | 转小写 |
| 22 | `lstrip()` | 去除左侧空格或指定字符 |
| 23 | `maketrans()` | 创建字符映射转换表 |
| 24 | `max(str)` | 返回最大字母 |
| 25 | `min(str)` | 返回最小字母 |
| 26 | `replace(old, new[, max])` | 替换子串，`max` 指定最大次数 |
| 27 | `rfind(str[, beg[, end]])` | 从右查找，返回索引 |
| 28 | `rindex(str[, beg[, end]])` | 从右查找，找不到则异常 |
| 29 | `rjust(width[, fillchar])` | 右对齐填充 |
| 30 | `rstrip()` | 去除右侧空格或指定字符 |
| 31 | `split(str="", num=string.count(str))` | 按分隔符切分，`num` 限制切割次数 |
| 32 | `splitlines([keepends])` | 按行分割，`keepends=True` 保留换行符 |
| 33 | `startswith(substr[, beg[, end]])` | 判断是否以指定前缀开头 |
| 34 | `strip([chars])` | 去除左右两侧指定字符（默认空格） |
| 35 | `swapcase()` | 大小写反转 |
| 36 | `title()` | 标题化（每个单词首字母大写） |
| 37 | `translate(table, deletechars="")` | 按映射表转换字符，可指定删除字符 |
| 38 | `upper()` | 转大写 |
| 39 | `zfill(width)` | 右对齐，左侧用 `0` 填充至指定宽度 |
| 40 | `isdecimal()` | 是否只包含十进制字符 |

---

# Python3 列表

列表是 Python 中最常用的序列类型之一。序列中的每个元素都有索引，从 0 开始。列表可执行索引、切片、拼接、重复、成员检查等操作。

## 创建列表

将逗号分隔的数据项放在方括号内即可，列表元素可以具有不同的类型。

```python
list1 = ['Google', 'Runoob', 1997, 2000]
list2 = [1, 2, 3, 4, 5]
list3 = ["a", "b", "c", "d"]
list4 = ['red', 'green', 'blue', 'yellow', 'white', 'black']
```

## 访问列表元素

索引从 0 开始，也可使用负数从尾部访问。

```python
lst = ['red', 'green', 'blue', 'yellow', 'white', 'black']
print(lst[0])    # red
print(lst[1])    # green
print(lst[-1])   # black
print(lst[-2])   # white
```

**切片：**

```python
nums = [10, 20, 30, 40, 50, 60, 70, 80, 90]
print(nums[0:4])   # [10, 20, 30, 40]
```

使用负数索引切片：

```python
lst = ['Google', 'Runoob', "Zhihu", "Taobao", "Wiki"]
print("list[1]: ", lst[1])           # Runoob
print("list[1:-2]: ", lst[1:-2])     # ['Runoob', 'Zhihu']
```

## 更新列表

列表元素可以被修改，或使用 `append()` 在末尾添加元素。

```python
lst = ['Google', 'Runoob', 1997, 2000]
print("第三个元素为 : ", lst[2])   # 1997
lst[2] = 2001
print("更新后的第三个元素为 : ", lst[2])   # 2001

lst1 = ['Google', 'Runoob', 'Taobao']
lst1.append('Baidu')
print("更新后的列表 : ", lst1)   # ['Google', 'Runoob', 'Taobao', 'Baidu']
```

## 删除列表元素

使用 `del` 语句删除指定索引的元素。

```python
lst = ['Google', 'Runoob', 1997, 2000]
print("原始列表 : ", lst)         # ['Google', 'Runoob', 1997, 2000]
del lst[2]
print("删除第三个元素 : ", lst)   # ['Google', 'Runoob', 2000]
```

## 列表操作符

| 表达式 | 结果 | 描述 |
|--------|------|------|
| `len([1, 2, 3])` | `3` | 长度 |
| `[1, 2, 3] + [4, 5, 6]` | `[1, 2, 3, 4, 5, 6]` | 组合 |
| `['Hi!'] * 4` | `['Hi!', 'Hi!', 'Hi!', 'Hi!']` | 重复 |
| `3 in [1, 2, 3]` | `True` | 成员检测 |
| `for x in [1, 2, 3]: print(x, end=" ")` | `1 2 3` | 迭代 |

## 列表截取与拼接

```python
L = ['Google', 'Runoob', 'Taobao']
L[2]      # 'Taobao'
L[-2]     # 'Runoob'
L[1:]     # ['Runoob', 'Taobao']
```

拼接示例：

```python
squares = [1, 4, 9, 16, 25]
squares += [36, 49, 64, 81, 100]
print(squares)   # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

## 嵌套列表

列表内可以包含其它列表，形成嵌套结构。

```python
a = ['a', 'b', 'c']
n = [1, 2, 3]
x = [a, n]
print(x)         # [['a', 'b', 'c'], [1, 2, 3]]
print(x[0])      # ['a', 'b', 'c']
print(x[0][1])   # b
```

## 列表比较

使用 `operator` 模块的 `eq` 方法可比较列表。

```python
import operator

a = [1, 2]
b = [2, 3]
c = [2, 3]
print("operator.eq(a,b): ", operator.eq(a, b))   # False
print("operator.eq(c,b): ", operator.eq(c, b))   # True
```

## 列表常用函数

| 函数 | 描述 |
|------|------|
| `len(list)` | 元素个数 |
| `max(list)` | 返回最大值 |
| `min(list)` | 返回最小值 |
| `list(seq)` | 将元组转换为列表 |

## 列表常用方法

| 方法 | 描述 |
|------|------|
| `list.append(obj)` | 末尾添加对象 |
| `list.count(obj)` | 统计元素出现次数 |
| `list.extend(seq)` | 追加另一个序列的全部元素 |
| `list.index(obj)` | 查找第一个匹配项的索引 |
| `list.insert(index, obj)` | 在指定位置插入对象 |
| `list.pop([index=-1])` | 移除并返回指定位置的元素（默认最后一个） |
| `list.remove(obj)` | 移除第一个匹配项 |
| `list.reverse()` | 原地反转列表 |
| `list.sort(key=None, reverse=False)` | 原地排序 |
| `list.clear()` | 清空列表 |
| `list.copy()` | 浅拷贝列表 |

# Python3 元组

元组与列表类似，但元组的元素**不能修改**。  
元组使用小括号 `()`，列表使用方括号 `[]`。

## 创建元组

只需在括号中添加元素，并用逗号隔开即可。甚至可以省略括号。

```python
tup1 = ('Google', 'Runoob', 1997, 2000)
tup2 = (1, 2, 3, 4, 5)
tup3 = "a", "b", "c", "d"   # 不加括号也可以
print(type(tup3))            # <class 'tuple'>
```

**创建空元组：**
```python
tup1 = ()
```

**创建只有一个元素的元组：** 必须在该元素后添加逗号 `,`，否则括号会被当作普通的运算括号，类型将变为其他类型。

```python
tup1 = (50)
print(type(tup1))   # <class 'int'>

tup1 = (50,)
print(type(tup1))   # <class 'tuple'>
```

## 访问元组

使用下标索引访问元素，索引从 0 开始，也可以进行切片。

```python
tup1 = ('Google', 'Runoob', 1997, 2000)
tup2 = (1, 2, 3, 4, 5, 6, 7)

print("tup1[0]: ", tup1[0])        # Google
print("tup2[1:5]: ", tup2[1:5])    # (2, 3, 4, 5)
```

## 修改元组

元组中的元素**不允许修改**，但可以对元组进行连接组合，生成新的元组。

```python
tup1 = (12, 34.56)
tup2 = ('abc', 'xyz')

# 以下修改是非法的：
# tup1[0] = 100

# 创建一个新元组
tup3 = tup1 + tup2
print(tup3)   # (12, 34.56, 'abc', 'xyz')
```

## 删除元组

不能删除元组中的个别元素，但可以使用 `del` 语句删除整个元组。

```python
tup = ('Google', 'Runoob', 1997, 2000)
print(tup)
del tup
print("删除后的元组 tup : ")
print(tup)    # 抛出 NameError: name 'tup' is not defined
```

## 元组运算符

元组支持 `+`、`+=` 和 `*` 运算，用于组合和复制，生成新的元组。

| 表达式 | 结果 | 描述 |
|--------|------|------|
| `len((1, 2, 3))` | `3` | 元素个数 |
| `a = (1, 2, 3); b = (4, 5, 6); c = a + b` | `(1, 2, 3, 4, 5, 6)` | 连接 |
| `a = (1, 2, 3); b = (4, 5, 6); a += b` | `(1, 2, 3, 4, 5, 6)` | 扩展并赋值 |
| `('Hi!',) * 4` | `('Hi!', 'Hi!', 'Hi!', 'Hi!')` | 复制 |
| `3 in (1, 2, 3)` | `True` | 成员检测 |
| `for x in (1, 2, 3): print(x, end=" ")` | `1 2 3` | 迭代 |

## 元组索引与截取

元组也是序列，支持索引与切片。

```python
tup = ('Google', 'Runoob', 'Taobao', 'Wiki', 'Weibo', 'Weixin')
```

| 表达式 | 结果 | 描述 |
|--------|------|------|
| `tup[1]` | `'Runoob'` | 第二个元素 |
| `tup[-2]` | `'Weibo'` | 倒数第二个元素 |
| `tup[1:]` | `('Runoob', 'Taobao', 'Wiki', 'Weibo', 'Weixin')` | 从第二个开始的所有元素 |
| `tup[1:4]` | `('Runoob', 'Taobao', 'Wiki')` | 第二个到第四个（索引 3） |

## 元组内置函数

| 函数 | 描述 | 示例 |
|------|------|------|
| `len(tuple)` | 计算元素个数 | `len(('a', 'b'))` → `2` |
| `max(tuple)` | 返回最大值 | `max(('5', '4', '8'))` → `'8'` |
| `min(tuple)` | 返回最小值 | `min(('5', '4', '8'))` → `'4'` |
| `tuple(iterable)` | 将可迭代对象转换为元组 | `tuple(['a', 'b'])` → `('a', 'b')` |

---

# Python3 字典

字典是一种可变容器模型，可存储任意类型对象。  
每个键值对用冒号 `:` 分隔，对之间用逗号 `,` 分隔，整体放在花括号 `{}` 中。

> 注意：`dict` 是 Python 的关键字和内置函数，不建议将其作为变量名。

## 创建字典

- 键必须唯一，值可以重复。
- 值可以是任意数据类型，但键必须是不可变类型（如字符串、数字、元组）。

```python
tinydict = {'name': 'runoob', 'likes': 123, 'url': 'www.runoob.com'}
tinydict1 = { 'abc': 456 }
tinydict2 = { 'abc': 123, 98.6: 37 }
```

**创建空字典：**
```python
# 方法一：使用大括号
emptyDict = {}
print(emptyDict)            # {}
print(len(emptyDict))       # 0
print(type(emptyDict))      # <class 'dict'>

# 方法二：使用 dict() 函数
emptyDict = dict()
print(emptyDict)            # {}
```

## 访问字典

将键放入方括号中获取对应的值，若键不存在则会抛出 `KeyError`。

```python
tinydict = {'Name': 'Runoob', 'Age': 7, 'Class': 'First'}
print("tinydict['Name']: ", tinydict['Name'])   # Runoob
print("tinydict['Age']: ", tinydict['Age'])     # 7

# 访问不存在的键会出错
# print(tinydict['Alice'])   # KeyError: 'Alice'
```

## 修改字典

可以通过赋值新增或更新键值对。

```python
tinydict = {'Name': 'Runoob', 'Age': 7, 'Class': 'First'}
tinydict['Age'] = 8                  # 更新
tinydict['School'] = "入门教程"       # 新增
print("tinydict['Age']: ", tinydict['Age'])
print("tinydict['School']: ", tinydict['School'])
```

## 删除字典元素

可以删除指定键、清空字典或删除整个字典。

```python
tinydict = {'Name': 'Runoob', 'Age': 7, 'Class': 'First'}
del tinydict['Name']   # 删除键 'Name'
tinydict.clear()       # 清空字典
del tinydict           # 删除整个字典

# 此后访问 tinydict 会引发 NameError
```

## 字典键的特性

1. **键不可重复**：若创建时同一键被赋值多次，后值会覆盖前值。
```python
tinydict = {'Name': 'Runoob', 'Age': 7, 'Name': '小入门'}
print(tinydict['Name'])   # 小入门
```

2. **键必须为不可变类型**：字符串、数字、元组可作为键，列表等可变类型则不行。
```python
# 错误示例，使用列表作为键
# tinydict = {['Name']: 'Runoob', 'Age': 7}   # TypeError: unhashable type: 'list'
```

## 字典内置函数

| 函数 | 描述 | 示例 |
|------|------|------|
| `len(dict)` | 返回键的总数 | `len({'a':1, 'b':2})` → `2` |
| `str(dict)` | 返回字典的可打印字符串表示 | `str({'a':1})` → `"{'a': 1}"` |
| `type(variable)` | 返回变量类型 | `type({})` → `<class 'dict'>` |

## 字典内置方法

| 方法 | 描述 |
|------|------|
| `dict.clear()` | 删除字典内所有元素 |
| `dict.copy()` | 返回字典的浅复制 |
| `dict.fromkeys(seq[, val])` | 创建一个新字典，以 seq 中元素为键，val 为初始值 |
| `dict.get(key, default=None)` | 返回指定键的值，键不存在时返回 default |
| `key in dict` | 判断键是否在字典中，返回 True / False |
| `dict.items()` | 返回包含 (键, 值) 的视图对象 |
| `dict.keys()` | 返回所有键的视图对象 |
| `dict.values()` | 返回所有值的视图对象 |
| `dict.setdefault(key, default=None)` | 若键存在则返回其值，否则设置键为 default 并返回 default |
| `dict.update(dict2)` | 将 dict2 的键值对更新到当前字典 |
| `dict.pop(key[, default])` | 删除指定键并返回其值，键不存在且未提供 default 时报错 |
| `dict.popitem()` | 返回并删除字典中的最后一对键和值（Python 3.7 起按插入顺序） |

---

# Python3 集合

集合（set）是一个**无序**且**元素不重复**的序列。支持交集、并集、差集等集合运算。

## 创建集合

可使用大括号 `{}` 或 `set()` 函数创建。**空集合必须使用 `set()`**，因为 `{}` 创建的是空字典。

```python
set1 = {1, 2, 3, 4}                 # 直接使用大括号
set2 = set([4, 5, 6, 7])            # 从列表使用 set() 创建
```

**示例：去重与成员测试**
```python
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print(basket)                       # 自动去重，输出可能为 {'orange', 'banana', 'pear', 'apple'}
print('orange' in basket)           # True
print('crabgrass' in basket)        # False
```

## 集合运算

```python
a = set('abracadabra')
b = set('alacazam')

print(a)              # {'a', 'r', 'b', 'c', 'd'} 等
print(a - b)          # 差集：在 a 中但不在 b 中
print(a | b)          # 并集：在 a 或 b 中
print(a & b)          # 交集：同时在 a 和 b 中
print(a ^ b)          # 对称差集：在 a 或 b 中，但不同时存在
```

## 集合推导式

```python
a = {x for x in 'abracadabra' if x not in 'abc'}
print(a)   # {'r', 'd'}
```

## 集合基本操作

### 添加元素

- `s.add(x)`：添加元素 x，若已存在则无操作。
- `s.update(x)`：参数 x 可以是列表、元组、字典等，可同时添加多个元素。

```python
thisset = set(("Google", "Runoob", "Taobao"))
thisset.add("Facebook")
print(thisset)   # {'Taobao', 'Facebook', 'Google', 'Runoob'}

thisset.update({1, 3})
print(thisset)   # {1, 3, 'Google', 'Taobao', 'Runoob'}

thisset.update([1, 4], [5, 6])
print(thisset)   # {1, 3, 4, 5, 6, 'Google', 'Taobao', 'Runoob'}
```

### 移除元素

- `s.remove(x)`：移除元素 x，**若元素不存在则抛出 KeyError**。
- `s.discard(x)`：移除元素 x，若不存在也不报错。
- `s.pop()`：随机删除集合中的一个元素，并返回该元素（因集合无序，每次结果可能不同）。

```python
thisset = set(("Google", "Runoob", "Taobao"))
thisset.remove("Taobao")
print(thisset)   # {'Google', 'Runoob'}

# thisset.remove("Facebook")  # KeyError

thisset.discard("Facebook")  # 不报错
print(thisset)   # {'Taobao', 'Google', 'Runoob'}

x = thisset.pop()
print(x)         # 随机返回一个元素
```

### 其他操作

| 操作 | 语法 | 说明 |
|------|------|------|
| 计算元素个数 | `len(s)` | 返回集合元素数量 |
| 清空集合 | `s.clear()` | 移除所有元素，变成 `set()` |
| 判断元素是否存在 | `x in s` | 存在返回 True，否则返回 False |

```python
thisset = set(("Google", "Runoob", "Taobao"))
print(len(thisset))           # 3
thisset.clear()
print(thisset)                # set()

thisset = set(("Google", "Runoob", "Taobao"))
print("Runoob" in thisset)    # True
print("Facebook" in thisset)  # False
```

## 集合内置方法完整列表

| 方法 | 描述 |
|------|------|
| `add()` | 添加元素 |
| `clear()` | 移除所有元素 |
| `copy()` | 拷贝集合 |
| `difference()` | 返回多个集合的差集 |
| `difference_update()` | 移除与另一集合相同的元素 |
| `discard()` | 删除指定元素（不存在不报错） |
| `intersection()` | 返回交集 |
| `intersection_update()` | 更新为交集 |
| `isdisjoint()` | 判断两集合是否无交集 |
| `issubset()` | 判断是否为子集 |
| `issuperset()` | 判断是否为超集 |
| `pop()` | 随机移除一个元素 |
| `remove()` | 移除指定元素（不存在报错） |
| `symmetric_difference()` | 返回对称差集 |
| `symmetric_difference_update()` | 更新为对称差集 |
| `union()` | 返回并集 |
| `update()` | 批量添加元素 |
| `len()` | 计算元素个数 |

# Python3 条件控制

条件语句根据条件表达式的结果（`True` 或 `False`）来决定执行哪些代码块。Python 主要通过 `if`、`elif`、`else` 实现条件分支，Python 3.10 起新增了 `match...case` 结构化模式匹配。

## 条件判断关键字

| 关键字 / 函数 | 说明 | 示例 |
|---------------|------|------|
| `if` | 条件为 `True` 时执行代码块 | `if x > 0:` |
| `elif` | 多条件分支（`else if`） | `elif x == 0:` |
| `else` | 所有条件不满足时执行 | `else:` |
| `pass` | 空语句，占位用，保证语法完整 | `if x > 0: pass` |
| `match` | 结构化模式匹配（Python 3.10+，类似 `switch`） | `match x: case 1: ...` |

## if 语句

基本语法：

```python
if condition_1:
    statement_block_1
elif condition_2:
    statement_block_2
else:
    statement_block_3
```

- 如果 `condition_1` 为 `True`，执行 `statement_block_1`；
- 否则判断 `condition_2`，为 `True` 则执行 `statement_block_2`；
- 否则执行 `statement_block_3`。

**注意：**
- 每个条件后要加冒号 `:`。
- 使用缩进来划分语句块，相同缩进量的语句属于同一个代码块。
- Python 中没有 `switch...case` 语句（Python 3.10 之前），但可以用 `match...case` 替代。

### 简单示例

```python
#!/usr/bin/python3

var1 = 100
if var1:
    print("1 - if 表达式条件为 true")
    print(var1)

var2 = 0
if var2:
    print("2 - if 表达式条件为 true")
    print(var2)

print("Good bye!")
```

输出：

```
1 - if 表达式条件为 true
100
Good bye!
```

（因为 `var2` 为 0，被视为 `False`，对应的 `if` 内部语句不会执行。）

### 示例：狗狗年龄换算

```python
#!/usr/bin/python3

age = int(input("请输入你家狗狗的年龄: "))
print("")
if age <= 0:
    print("你是在逗我吧!")
elif age == 1:
    print("相当于 14 岁的人。")
elif age == 2:
    print("相当于 22 岁的人。")
elif age > 2:
    human = 22 + (age - 2) * 5
    print("对应人类年龄: ", human)

input("点击 enter 键退出")
```

### 常用比较运算符

| 操作符 | 描述 |
|--------|------|
| `<` | 小于 |
| `<=` | 小于或等于 |
| `>` | 大于 |
| `>=` | 大于或等于 |
| `==` | 等于，比较两个值是否相等 |
| `!=` | 不等于 |

**示例：**

```python
print(5 == 6)   # False
x = 5
y = 8
print(x == y)   # False
```

**猜数字游戏：**

```python
#!/usr/bin/python3

number = 7
guess = -1
print("数字猜谜游戏!")
while guess != number:
    guess = int(input("请输入你猜的数字："))
    if guess == number:
        print("恭喜，你猜对了！")
    elif guess < number:
        print("猜的数字小了...")
    elif guess > number:
        print("猜的数字大了...")
```

## if 嵌套

`if...elif...else` 结构可以嵌套在另一个条件分支内。

```python
if 表达式1:
    语句
    if 表达式2:
        语句
    elif 表达式3:
        语句
    else:
        语句
elif 表达式4:
    语句
else:
    语句
```

**示例：判断能否被 2 和 3 整除**

```python
#!/usr/bin/python3

num = int(input("输入一个数字："))
if num % 2 == 0:
    if num % 3 == 0:
        print("你输入的数字可以整除 2 和 3")
    else:
        print("你输入的数字可以整除 2，但不能整除 3")
else:
    if num % 3 == 0:
        print("你输入的数字可以整除 3，但不能整除 2")
    else:
        print("你输入的数字不能整除 2 和 3")
```

## match...case（Python 3.10+）

`match...case` 提供类似 `switch` 的模式匹配，避免冗长的 `if-elif` 链。语法格式：

```python
match subject:
    case <pattern_1>:
        <action_1>
    case <pattern_2>:
        <action_2>
    case <pattern_3>:
        <action_3>
    case _:
        <action_wildcard>
```

`case _` 相当于 `default`，匹配任何情况。

### HTTP 状态码示例

```python
def http_error(status):
    match status:
        case 400:
            return "Bad request"
        case 404:
            return "Not found"
        case 418:
            return "I'm a teapot"
        case _:
            return "Something's wrong with the internet"

print(http_error(400))  # Bad request
print(http_error(404))  # Not found
print(http_error(418))  # I'm a teapot
print(http_error(500))  # Something's wrong with the internet
```

### 多条件合并

一个 `case` 可以使用 `|` 同时匹配多个值：

```python
def check_permission(status):
    match status:
        case 200:
            return "OK - 请求成功"
        case 301 | 302:
            return "Redirect - 重定向"
        case 401 | 403 | 404:
            return "Not allowed - 无权限或未找到"
        case 500 | 502 | 503:
            return "Server Error - 服务器错误"
        case _:
            return "Unknown status - 未知状态码"

for code in [200, 301, 403, 500, 418]:
    print(f"状态码 {code}: {check_permission(code)}")
```

---

# Python3 循环语句

Python 的循环语句包括 `for` 和 `while`，配合 `break`、`continue`、`else` 可以实现灵活的流程控制。

## 循环控制关键字与方法

| 关键字 / 函数 | 说明 | 示例 |
|---------------|------|------|
| `for` | 遍历序列或可迭代对象 | `for i in list:` |
| `while` | 条件为 `True` 时持续执行 | `while x > 0:` |
| `break` | 立即终止当前循环 | `break` |
| `continue` | 跳过本次循环剩余代码，进入下一次迭代 | `continue` |
| `else`（与循环连用） | 循环正常结束（未被 `break` 中断）时执行 | `for i in range(3): ... else: ...` |
| `pass` | 空操作，占位符 | `for i in range(5): pass` |
| `range()` | 生成整数序列，常与 `for` 配合 | `range(0, 5)` |
| `enumerate()` | 遍历时同时获取索引和值 | `for i, v in enumerate(list):` |

## while 循环

语法：

```python
while 判断条件:
    执行语句
```

同样需要使用冒号和缩进。Python 没有 `do...while` 循环。

### 计算 1 到 100 的和

```python
n = 100
sum = 0
counter = 1
while counter <= n:
    sum = sum + counter
    counter += 1
print("1 到 %d 之和为: %d" % (n, sum))
```

输出：`1 到 100 之和为: 5050`

### 无限循环

如果条件始终为 `True`，循环将无限执行。可以使用 `CTRL+C` 强制退出。

```python
var = 1
while var == 1:           # 表达式永远为 true
    num = int(input("输入一个数字 :"))
    print("你输入的数字是: ", num)
print("Good bye!")
```

无限循环常用于服务器的请求监听等场景。

### while...else 语句

当 `while` 的条件变为 `False` 时，执行 `else` 代码块。若循环被 `break` 终止，则 `else` 不执行。

```python
count = 0
while count < 5:
    print(count, " 小于 5")
    count = count + 1
else:
    print(count, " 大于或等于 5")
```

输出：

```
0  小于 5
1  小于 5
2  小于 5
3  小于 5
4  小于 5
5  大于或等于 5
```

### 单行 while

如果循环体只有一条语句，可以将其与 `while` 写在同一行：

```python
flag = 1
while (flag): print('欢迎访问入门教程!')
print("Good bye!")
```

（这也是无限循环，需用 `CTRL+C` 终止。）

## for 语句

`for` 循环可以遍历任何可迭代对象（列表、字符串、字典等）。

语法：

```python
for <variable> in <sequence>:
    <statements>
else:
    <statements>
```

### 遍历列表

```python
sites = ["Baidu", "Google", "Runoob", "Taobao"]
for site in sites:
    print(site)
```

输出：

```
Baidu
Google
Runoob
Taobao
```

### 遍历字符串

```python
word = 'runoob'
for letter in word:
    print(letter)
```

输出每个字符：r, u, n, o, o, b（每行一个）

### 使用 range() 遍历整数

```python
for number in range(1, 6):
    print(number)
```

输出：1, 2, 3, 4, 5（每行一个）

## for...else

当 `for` 循环正常遍历完所有元素后，会执行 `else` 子句；如果中途遇到 `break`，则跳过 `else`。

```python
for x in range(6):
    print(x)
else:
    print("Finally finished!")
```

输出：

```
0
1
2
3
4
5
Finally finished!
```

**break 跳过 else 的示例：**

```python
sites = ["Baidu", "Google", "Runoob", "Taobao"]
for site in sites:
    if site == "Runoob":
        print("入门教程!")
        break
    print("循环数据 " + site)
else:
    print("没有循环数据!")
print("完成循环!")
```

输出：

```
循环数据 Baidu
循环数据 Google
入门教程!
完成循环!
```

（`else` 部分未执行。）

## range() 函数

`range()` 生成整数序列，常用于 `for` 循环。

- `range(stop)`：生成 0 到 `stop-1` 的整数。
- `range(start, stop)`：生成 `start` 到 `stop-1` 的整数。
- `range(start, stop, step)`：按步长 `step` 生成序列（可为负数）。

**示例：**

```python
# 1) range(5) -> 0,1,2,3,4
for i in range(5):
    print(i)

# 2) range(5,9) -> 5,6,7,8
for i in range(5, 9):
    print(i)

# 3) range(0,10,3) -> 0,3,6,9
for i in range(0, 10, 3):
    print(i)

# 4) 负数步长
for i in range(-10, -100, -30):
    print(i)    # -10, -40, -70
```

**结合 `len()` 遍历索引：**

```python
a = ['Google', 'Baidu', 'Runoob', 'Taobao', 'QQ']
for i in range(len(a)):
    print(i, a[i])
```

**创建列表：**

```python
list(range(5))   # [0, 1, 2, 3, 4]
```

## break、continue 与循环中的 else

- **break**：完全跳出当前循环。对应的 `else` 块不会执行。
- **continue**：跳过本次循环剩余代码，直接进入下一次迭代。

### while 中的 break 示例

```python
n = 5
while n > 0:
    n -= 1
    if n == 2:
        break
    print(n)
print('循环结束。')
```

输出：

```
4
3
循环结束。
```

### while 中的 continue 示例

```python
n = 5
while n > 0:
    n -= 1
    if n == 2:
        continue
    print(n)
print('循环结束。')
```

输出：

```
4
3
1
0
循环结束。
```

（`2` 被跳过。）

### 更多实例

```python
# for 循环中使用 break
for letter in 'Runoob':
    if letter == 'b':
        break
    print('当前字母为 :', letter)

# while 循环中使用 break
var = 10
while var > 0:
    print('当前变量值为 :', var)
    var = var - 1
    if var == 5:
        break
print("Good bye!")
```

输出：

```
当前字母为 : R
当前字母为 : u
当前字母为 : n
当前字母为 : o
当前字母为 : o
当前变量值为 : 10
当前变量值为 : 9
当前变量值为 : 8
当前变量值为 : 7
当前变量值为 : 6
Good bye!
```

**continue 跳过字母 'o'：**

```python
for letter in 'Runoob':
    if letter == 'o':
        continue
    print('当前字母 :', letter)

var = 10
while var > 0:
    var = var - 1
    if var == 5:
        continue
    print('当前变量值 :', var)
print("Good bye!")
```

输出：字母 'o' 和变量值 5 均被跳过。

### 循环中的 else 子句

循环正常结束（非 `break` 终止）时执行 `else`。经典示例：寻找质数。

```python
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, '等于', x, '*', n//x)
            break
    else:
        # 循环中没有找到因数，说明是质数
        print(n, ' 是质数')
```

输出：

```
2  是质数
3  是质数
4 等于 2 * 2
5  是质数
6 等于 2 * 3
7  是质数
8 等于 2 * 4
9 等于 3 * 3
```

## pass 语句

`pass` 是一个空语句，不做任何事情，仅用于保持程序结构的完整性，常用作占位符。

```python
while True:
    pass   # 等待键盘中断 (Ctrl+C)

class MyEmptyClass:
    pass
```

**在循环中使用 pass 示例：**

```python
for letter in 'Runoob':
    if letter == 'o':
        pass
        print('执行 pass 块')
    print('当前字母 :', letter)
print("Good bye!")
```

输出：

```
当前字母 : R
当前字母 : u
当前字母 : n
执行 pass 块
当前字母 : o
执行 pass 块
当前字母 : o
当前字母 : b
Good bye!
```

（遇到 'o' 时执行 `pass` 块，但不会改变循环流程。）

# Python3 编程第一步

在前面的教程中我们已经学习了 Python3 的基本语法知识，接下来通过一些实例迈出第一步。

## 基本示例

### 打印字符串
```python
print("Hello, world!")
```
输出：
```
Hello, world!
```

### 输出变量值
```python
i = 256 * 256
print('i 的值为：', i)
```
输出：
```
i 的值为： 65536
```

### 定义变量并进行简单的数学运算
```python
x = 3
y = 2
z = x + y
print(z)
```
输出：
```
5
```

### 定义一个列表并打印其中的元素
```python
my_list = ['google', 'runoob', 'taobao']
print(my_list[0])  # 输出 "google"
print(my_list[1])  # 输出 "runoob"
print(my_list[2])  # 输出 "taobao"
```
输出：
```
google
runoob
taobao
```

### 使用 for 循环打印数字 0 到 4
```python
for i in range(5):
    print(i)
```
输出：
```
0
1
2
3
4
```

### 根据条件输出不同的结果
```python
x = 6
if x > 10:
    print("x 大于 10")
else:
    print("x 小于或等于 10")
```
输出：
```
x 小于或等于 10
```

## 斐波那契数列

斐波那契数列是一个经典的数学问题，其中每个数字是前两个数字之和。

### while 循环实现
```python
#!/usr/bin/python3

# Fibonacci series: 斐波那契数列
# 两个元素的总和确定了下一个数
a, b = 0, 1
while b < 10:
    print(b)
    a, b = b, a + b
```
输出：
```
1
1
2
3
5
8
```
**解析：** `a, b = b, a + b` 先计算右边的表达式，再同时赋值给左边，等价于：
```python
n = b
m = a + b
a = n
b = m
```

### for 循环实现
```python
n = 10
a, b = 0, 1
for i in range(n):
    print(b)
    a, b = b, a + b
```

## end 关键字

`end` 参数可以用于将结果输出到同一行，或者在输出的末尾添加不同的字符。

```python
#!/usr/bin/python3

# Fibonacci series: 斐波那契数列
a, b = 0, 1
while b < 1000:
    print(b, end=',')
    a, b = b, a + b
```
输出：
```
1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,
```

---

# Python 推导式

推导式（comprehension）提供了一种简洁的语法，用于从一个序列构建另一个新的序列，包括列表、字典、集合和生成器表达式。使用时应注意保持可读性。

## 列表推导式

格式：
```python
[表达式 for 变量 in 列表]
[表达式 for 变量 in 列表 if 条件]
```

- `表达式`：生成新元素的表达式。
- `for 变量 in 列表`：迭代原始序列。
- `if 条件`：可选，过滤不符合条件的值。

**示例：过滤并转换字符串**
```python
names = ['Bob', 'Tom', 'alice', 'Jerry', 'Wendy', 'Smith']
new_names = [name.upper() for name in names if len(name) > 3]
print(new_names)  # ['ALICE', 'JERRY', 'WENDY', 'SMITH']
```

**示例：计算 30 以内可以被 3 整除的整数**
```python
multiples = [i for i in range(30) if i % 3 == 0]
print(multiples)  # [0, 3, 6, 9, 12, 15, 18, 21, 24, 27]
```

## 字典推导式

格式：
```python
{ key_expr: value_expr for value in collection }
{ key_expr: value_expr for value in collection if condition }
```

**示例：使用字符串及其长度创建字典**
```python
listdemo = ['Google', 'Runoob', 'Taobao']
newdict = {key: len(key) for key in listdemo}
print(newdict)  # {'Google': 6, 'Runoob': 6, 'Taobao': 6}
```

**示例：以数字为键，平方为值创建字典**
```python
dic = {x: x**2 for x in (2, 4, 6)}
print(dic)      # {2: 4, 4: 16, 6: 36}
print(type(dic))  # <class 'dict'>
```

## 集合推导式

格式：
```python
{ expression for item in Sequence }
{ expression for item in Sequence if conditional }
```

**示例：计算数字的平方**
```python
setnew = {i**2 for i in (1, 2, 3)}
print(setnew)  # {1, 4, 9}
```

**示例：过滤非 abc 字母**
```python
a = {x for x in 'abracadabra' if x not in 'abc'}
print(a)       # {'d', 'r'}
print(type(a)) # <class 'set'>
```

## 元组推导式（生成器表达式）

元组推导式使用圆括号 `()`，返回的是一个**生成器对象**，而非元组。如需元组，可用 `tuple()` 转换。

格式：
```python
(expression for item in Sequence)
(expression for item in Sequence if conditional)
```

**示例：生成 1~9 的数字**
```python
a = (x for x in range(1, 10))
print(a)          # <generator object <genexpr> at 0x...>
print(tuple(a))   # (1, 2, 3, 4, 5, 6, 7, 8, 9)
```

---

# Python3 迭代器与生成器

## 迭代器

迭代器是访问集合元素的一种方式，它可以记住遍历的位置，只能向前不能后退。迭代器有两个基本方法：`iter()` 和 `next()`。

### 创建与使用迭代器

字符串、列表、元组等都可创建迭代器。

```python
list_data = [1, 2, 3, 4]
it = iter(list_data)        # 创建迭代器对象
print(next(it))             # 输出 1
print(next(it))             # 输出 2
```

**使用 for 循环遍历迭代器：**
```python
list_data = [1, 2, 3, 4]
it = iter(list_data)
for x in it:
    print(x, end=" ")
```
输出：
```
1 2 3 4
```

**使用 while + next() 遍历，捕获 StopIteration 异常：**
```python
import sys

list_data = [1, 2, 3, 4]
it = iter(list_data)
while True:
    try:
        print(next(it))
    except StopIteration:
        sys.exit()
```
输出：
```
1
2
3
4
```

### 创建自定义迭代器

将一个类用作迭代器需要实现 `__iter__()` 与 `__next__()` 方法。`__iter__()` 返回迭代器对象本身，`__next__()` 返回下一个值，迭代结束时抛出 `StopIteration` 异常。

**示例：返回从 1 开始递增的数字**
```python
class MyNumbers:
    def __iter__(self):
        self.a = 1
        return self

    def __next__(self):
        x = self.a
        self.a += 1
        return x

myclass = MyNumbers()
myiter = iter(myclass)
print(next(myiter))  # 1
print(next(myiter))  # 2
print(next(myiter))  # 3
print(next(myiter))  # 4
print(next(myiter))  # 5
```

### StopIteration

在 `__next__()` 方法中设置终止条件，触发 `StopIteration` 异常以安全结束迭代。

**示例：限制迭代 20 次**
```python
class MyNumbers:
    def __iter__(self):
        self.a = 1
        return self

    def __next__(self):
        if self.a <= 20:
            x = self.a
            self.a += 1
            return x
        else:
            raise StopIteration

myclass = MyNumbers()
myiter = iter(myclass)
for x in myiter:
    print(x)
```
输出从 1 到 20 的数字。

## 生成器

生成器是一种特殊的迭代器，使用 `yield` 关键字的函数即为生成器函数。它会逐步产生值，而不是一次性返回所有结果，从而节省内存。

**示例：倒计时生成器**
```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1

generator = countdown(5)
print(next(generator))  # 5
print(next(generator))  # 4
print(next(generator))  # 3

for value in generator:
    print(value)        # 2 1
```

**示例：使用 yield 实现斐波那契数列**
```python
#!/usr/bin/python3
import sys

def fibonacci(n):
    a, b, counter = 0, 1, 0
    while True:
        if counter > n:
            return
        yield a
        a, b = b, a + b
        counter += 1

f = fibonacci(10)   # f 是一个生成器对象
while True:
    try:
        print(next(f), end=" ")
    except StopIteration:
        sys.exit()
```
输出：
```
0 1 1 2 3 5 8 13 21 34 55
```

---

# Python with 关键字

`with` 关键字用于上下文管理协议（Context Management Protocol），可优雅地管理资源，确保资源在使用后被正确释放，即使代码发生异常也不例外。

## 为什么需要 with 语句？

传统的 `try...finally` 资源管理方式容易忘记释放资源，代码冗长且异常处理复杂。

```python
file = open('example.txt', 'r')
try:
    content = file.read()
    # 处理文件内容
finally:
    file.close()
```

`with` 语句自动完成清理工作，代码更简洁、安全。

## with 语句的基本语法

```python
with expression [as variable]:
    # 代码块
```

`expression` 返回一个支持上下文管理协议的对象，`as variable` 可将其赋值给变量。块执行完毕后自动调用清理方法。

**文件操作示例：**
```python
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)
# 文件已自动关闭
```

## 上下文管理协议

`with` 要求对象实现两个方法：

- `__enter__()`：进入上下文时调用，返回值赋给 `as` 后的变量。
- `__exit__()`：退出上下文时调用，处理清理。该方法接收异常类型、值和追踪信息，若返回 `True` 则压制异常。

## 实际应用场景

### 1. 文件操作（同时打开多个文件）
```python
with open('input.txt', 'r') as infile, open('output.txt', 'w') as outfile:
    content = infile.read()
    outfile.write(content.upper())
```

### 2. 数据库连接
```python
import sqlite3

with sqlite3.connect('database.db') as conn:
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users')
    results = cursor.fetchall()
# 连接自动关闭
```

### 3. 线程锁
```python
import threading

lock = threading.Lock()
with lock:
    # 临界区代码
    print("这段代码是线程安全的")
```

### 4. 临时修改系统状态
```python
import decimal

with decimal.localcontext() as ctx:
    ctx.prec = 42   # 临时设置高精度
    # 执行高精度计算
# 精度恢复原设置
```

## 创建自定义的上下文管理器

### 类实现方式
实现 `__enter__` 和 `__exit__` 方法。
```python
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        self.end = time.time()
        print(f"耗时: {self.end - self.start:.2f}秒")
        return False

with Timer() as t:
    sum(range(1000000))
```

### 使用 contextlib 模块
利用 `@contextmanager` 装饰器可简化生成上下文管理器。
```python
from contextlib import contextmanager

@contextmanager
def tag(name):
    print(f"<{name}>")
    yield
    print(f"</{name}>")

with tag("h1"):
    print("这是一个标题")
```
输出：
```
<h1>
这是一个标题
</h1>
```

## 常见问题与最佳实践

- **优先使用 `with` 管理资源**：文件、网络连接、锁等资源均推荐使用 `with`。
- **保持上下文简洁**：`with` 块内只包含与资源相关的操作。
- **合理处理异常**：自定义 `__exit__` 时，根据需求决定是否返回 `True` 来抑制异常。
- **利用多个上下文**：单个 `with` 可同时管理多个资源，用逗号分隔。

### 关键点总结

| 关键点 | 说明 |
|--------|------|
| 自动资源管理 | `with` 确保资源被正确释放 |
| 上下文协议 | 需要实现 `__enter__` 和 `__exit__` |
| 异常安全 | 即使代码块出现异常，资源也会被释放 |
| 常见应用 | 文件操作、数据库连接、线程锁等 |
| 自定义实现 | 可通过类或 `contextlib` 创建 |

# Python3 函数

函数是组织好的、可重复使用的代码段，用于实现单一或相关联的功能。  
函数能提高应用的模块性和代码的重复利用率。除了 Python 的内建函数（如 `print()`），我们还可以自定义函数。

## 定义一个函数

### 基本规则
- 函数代码块以 `def` 关键字开头，后接函数名称和圆括号 `()`。
- 参数（输入）放置在圆括号内，圆括号之间可以定义参数。
- 函数的第一行可以选择性地使用文档字符串（docstring）说明函数功能。
- 函数内容以冒号 `:` 起始，并且需要缩进。
- `return [表达式]` 结束函数，可选择性地返回一个值给调用方。不带表达式的 `return` 相当于返回 `None`。

### 语法
```python
def 函数名(参数列表):
    函数体
```
默认情况下，参数值和参数名称按函数声明中定义的顺序进行匹配。

### 示例

**输出 "Hello World!"**
```python
#!/usr/bin/python3

def hello():
    print("Hello World!")

hello()
```

**带参数的函数：比较两个数并返回较大值**
```python
#!/usr/bin/python3

def max(a, b):
    if a > b:
        return a
    else:
        return b

a = 4
b = 5
print(max(a, b))  # 输出 5
```

**计算面积和欢迎信息**
```python
#!/usr/bin/python3

def area(width, height):
    return width * height

def print_welcome(name):
    print("Welcome", name)

print_welcome("Runoob")
w = 4
h = 5
print("width =", w, " height =", h, " area =", area(w, h))
```
输出：
```
Welcome Runoob
width = 4  height = 5  area = 20
```

## 函数调用

定义一个函数后，可以通过在其他函数中调用它，或者直接从 Python 命令行调用。

```python
#!/usr/bin/python3

def printme(str):
    """打印任何传入的字符串"""
    print(str)
    return

# 调用函数
printme("我要调用用户自定义函数!")
printme("再次调用同一函数")
```
输出：
```
我要调用用户自定义函数!
再次调用同一函数
```

## 参数传递

在 Python 中，类型属于对象，变量没有类型。变量只是对象的引用。例如：
```python
a = [1, 2, 3]   # a 指向一个列表对象
a = "Runoob"    # 现在 a 指向一个字符串对象
```

### 可更改 (mutable) 与不可更改 (immutable) 对象

- **不可变对象**：strings、tuples、numbers。如 `a = 5` 后再 `a = 10`，实际上是生成新的 int 对象 10，将 a 指向新对象，原对象 5 被丢弃。
- **可变对象**：list、dict、set。如 `la = [1,2,3,4]` 后 `la[2] = 5`，修改的是列表内部的元素，`la` 本身还是原来的对象。

### 参数传递规则

- **不可变类型**：类似 C++ 的值传递。函数内部修改参数不会影响外部变量，因为修改实质上是创建了新的对象。
- **可变类型**：类似 C++ 的引用传递。函数内部修改参数（如添加、删除元素）会影响外部变量。

#### 不可变对象实例

通过 `id()` 观察内存地址：
```python
def change(a):
    print(id(a))   # 与外部实参同一对象
    a = 10         # 创建新对象
    print(id(a))   # 新地址

a = 1
print(id(a))
change(a)
```
输出地址变化，表明函数内修改后，形参指向了新对象。

#### 可变对象实例

```python
#!/usr/bin/python3

def changeme(mylist):
    "修改传入的列表"
    mylist.append([1, 2, 3, 4])
    print("函数内取值: ", mylist)
    return

mylist = [10, 20, 30]
changeme(mylist)
print("函数外取值: ", mylist)
```
输出：
```
函数内取值:  [10, 20, 30, [1, 2, 3, 4]]
函数外取值:  [10, 20, 30, [1, 2, 3, 4]]
```
原列表被修改。

## 参数类型

### 必需参数
必须按照正确的顺序传入，且数量与声明时一致，否则会引发 `TypeError`。
```python
def printme(str):
    print(str)
    return

# printme()  # 错误：缺少参数
```

### 关键字参数
通过参数名指定传入的值，允许调用时顺序与声明时不一致。
```python
def printinfo(name, age):
    print("名字: ", name)
    print("年龄: ", age)
    return

printinfo(age=50, name="runoob")  # 顺序无关
```

### 默认参数
定义函数时为参数提供默认值。调用时若未传递该参数，则使用默认值。
```python
def printinfo(name, age=35):
    print("名字: ", name)
    print("年龄: ", age)
    return

printinfo(age=50, name="runoob")
printinfo(name="runoob")  # age 默认为 35
```

### 不定长参数

- **`*args`**：接收多余的未命名参数，以**元组**形式传入。
- **`**kwargs`**：接收多余的关键字参数，以**字典**形式传入。

```python
# *args 示例
def printinfo(arg1, *vartuple):
    print("输出: ")
    print(arg1)
    print(vartuple)

printinfo(70, 60, 50)   # arg1=70, vartuple=(60,50)
printinfo(10)           # vartuple 为空元组
```

```python
# **kwargs 示例
def printinfo(arg1, **vardict):
    print("输出: ")
    print(arg1)
    print(vardict)

printinfo(1, a=2, b=3)  # arg1=1, vardict={'a':2,'b':3}
```

### 强制位置参数（Python 3.8+）

- `/` 之前的参数必须使用位置参数（不能使用关键字）。
- `*` 之后的参数必须使用关键字参数。

```python
def f(a, b, /, c, d, *, e, f):
    print(a, b, c, d, e, f)

# 正确
f(10, 20, 30, d=40, e=50, f=60)
# 错误
# f(10, b=20, c=30, d=40, e=50, f=60)  # b 不能使用关键字
# f(10, 20, 30, 40, 50, f=60)          # e 必须使用关键字
```

## 匿名函数 (lambda)

`lambda` 用于创建小型匿名函数，只能包含一个表达式，不能包含复杂语句。语法：

```python
lambda arguments: expression
```

- 匿名函数有自己的命名空间，不能访问参数列表外或全局变量。
- 常用于 `map()`、`filter()`、`reduce()` 等需要函数作为参数的地方。

**示例：**
```python
# 无参数
f = lambda: "Hello, world!"
print(f())  # Hello, world!

# 一个参数
x = lambda a: a + 10
print(x(5))  # 15

# 多个参数
sum = lambda arg1, arg2: arg1 + arg2
print(sum(10, 20))  # 30

# 结合内置函数
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4]

from functools import reduce
product = reduce(lambda x, y: x * y, numbers)
print(product)  # 120
```

**将匿名函数封装在函数内，按需生成不同功能的 lambda：**
```python
def myfunc(n):
    return lambda a: a * n

mydoubler = myfunc(2)
mytripler = myfunc(3)
print(mydoubler(11))  # 22
print(mytripler(11))  # 33
```

## return 语句

`return [表达式]` 退出函数并返回指定值。没有 `return` 或 `return None` 时，函数默认返回 `None`。

```python
def sum(arg1, arg2):
    total = arg1 + arg2
    print("函数内 : ", total)
    return total

total = sum(10, 20)
print("函数外 : ", total)
```
输出：
```
函数内 :  30
函数外 :  30
```

---

# Python 装饰器

装饰器（decorator）用于在不修改原函数代码的前提下，动态扩展函数或类的功能。装饰器本质上是一个函数，接收一个函数作为参数，返回一个新的函数（通常是原函数的增强版本）。

通过 `@decorator_name` 语法将装饰器应用于函数或方法之前。

## 基本语法

```python
def decorator_function(original_function):
    def wrapper(*args, **kwargs):
        # 调用前
        print("执行前")
        result = original_function(*args, **kwargs)
        # 调用后
        print("执行后")
        return result
    return wrapper

@decorator_function
def target_function():
    print("原函数执行")
```

等价于：
```python
target_function = decorator_function(target_function)
```

调用 `target_function()` 实际上执行的是 `wrapper()`。

## 实例：打印日志

```python
def my_decorator(func):
    def wrapper():
        print("函数执行前")
        func()
        print("函数执行后")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
```
输出：
```
函数执行前
Hello!
函数执行后
```

## 带参数的装饰器

对于原函数有参数的情况，在 `wrapper` 中使用 `*args, **kwargs` 传递任意参数：

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("执行前")
        func(*args, **kwargs)
        print("执行后")
    return wrapper

@my_decorator
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
```
输出：
```
执行前
Hello, Alice!
执行后
```

## 带参数的装饰器（装饰器工厂）

如果需要装饰器本身接受参数，可以再包一层函数：

```python
def repeat(num_times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def say_hello():
    print("Hello!")

say_hello()
```
输出三遍 `Hello!`。

## 类装饰器

装饰器也可以作用于类，接收一个类并返回修改后的类或包装类。

### 函数形式的类装饰器

```python
def log_class(cls):
    class Wrapper:
        def __init__(self, *args, **kwargs):
            self.wrapped = cls(*args, **kwargs)

        def __getattr__(self, name):
            return getattr(self.wrapped, name)

        def display(self):
            print("调用前")
            self.wrapped.display()
            print("调用后")

    return Wrapper

@log_class
class MyClass:
    def display(self):
        print("原方法")

obj = MyClass()
obj.display()
```
输出：
```
调用前
原方法
调用后
```

### 类形式的类装饰器（单例模式示例）

```python
class SingletonDecorator:
    def __init__(self, cls):
        self.cls = cls
        self.instance = None

    def __call__(self, *args, **kwargs):
        if self.instance is None:
            self.instance = self.cls(*args, **kwargs)
        return self.instance

@SingletonDecorator
class Database:
    def __init__(self):
        print("初始化")

db1 = Database()  # 输出 "初始化"
db2 = Database()  # 不会再次初始化
print(db1 is db2) # True
```

## 内置装饰器

- `@staticmethod`：定义静态方法（无需传递 `self` 或 `cls`）。
- `@classmethod`：定义类方法（第一个参数为类 `cls`）。
- `@property`：将方法转为属性，可配合 `@xxx.setter` 使用。

```python
class MyClass:
    @staticmethod
    def static_method():
        print("静态方法")

    @classmethod
    def class_method(cls):
        print(cls.__name__)

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        self._name = value
```

## 多个装饰器堆叠

多个装饰器从下到上依次执行（最接近原函数的装饰器先应用）。

```python
def decorator1(func):
    def wrapper():
        print("Decorator 1")
        func()
    return wrapper

def decorator2(func):
    def wrapper():
        print("Decorator 2")
        func()
    return wrapper

@decorator1
@decorator2
def say_hello():
    print("Hello!")

say_hello()
```
输出：
```
Decorator 1
Decorator 2
Hello!
```

## 核心总结

- 装饰器 = 函数包装函数，不修改原代码扩展功能。
- `@` 语法本质是函数替换。
- `wrapper` 才是真正执行的函数。
- 推荐使用 `*args, **kwargs` 提高通用性。
- 支持函数、类、以及带参数的装饰器。

---

# Python3 数据结构

## 列表

列表是**可变**的，这是它区别于字符串和元组的重要特点。常用方法如下：

| 方法 | 描述 |
|------|------|
| `list.append(x)` | 在末尾添加元素 |
| `list.extend(L)` | 用列表 L 扩展原列表 |
| `list.insert(i, x)` | 在索引 i 前插入元素 x |
| `list.remove(x)` | 删除第一个值为 x 的元素，不存在则报错 |
| `list.pop([i])` | 移除并返回索引 i 的元素（默认最后一个） |
| `list.clear()` | 清空列表 |
| `list.index(x)` | 返回第一个值为 x 的索引，不存在则报错 |
| `list.count(x)` | 统计 x 出现的次数 |
| `list.sort()` | 就地排序 |
| `list.reverse()` | 就地反转 |
| `list.copy()` | 返回列表的浅复制 |

**示例：**
```python
a = [66.25, 333, 333, 1, 1234.5]
print(a.count(333), a.count(66.25), a.count('x'))  # 2 1 0
a.insert(2, -1)
a.append(333)
print(a)                    # [66.25, 333, -1, 333, 1, 1234.5, 333]
print(a.index(333))         # 1
a.remove(333)
print(a)                    # [66.25, -1, 333, 1, 1234.5, 333]
a.reverse()
print(a)                    # [333, 1234.5, 1, 333, -1, 66.25]
a.sort()
print(a)                    # [-1, 1, 66.25, 333, 333, 1234.5]
```
**注意：** `insert`、`remove`、`sort` 等修改列表的方法没有返回值，直接修改原列表。

## 将列表当作栈使用

栈是**后进先出** (LIFO) 的数据结构。可以用列表的 `append()` 和 `pop()` 方法实现。

**使用列表直接模拟：**
```python
stack = []
stack.append(1)
stack.append(2)
stack.append(3)
print(stack)          # [1, 2, 3]
print(stack.pop())    # 3
print(stack)          # [1, 2]
print(stack[-1])      # 2 (peek)
```

**封装为 Stack 类：**
```python
class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        if not self.is_empty():
            return self.stack.pop()
        else:
            raise IndexError("pop from empty stack")

    def peek(self):
        if not self.is_empty():
            return self.stack[-1]
        else:
            raise IndexError("peek from empty stack")

    def is_empty(self):
        return len(self.stack) == 0

    def size(self):
        return len(self.stack)
```

## 将列表当作队列使用

队列是**先进先出** (FIFO) 的数据结构。虽然可以用列表实现，但列表在头部插入或删除的时间复杂度为 O(n)，推荐使用 `collections.deque` 来高效实现。

### 使用 deque 实现队列

```python
from collections import deque

queue = deque()
queue.append('a')
queue.append('b')
queue.append('c')
print(queue)              # deque(['a', 'b', 'c'])
first = queue.popleft()   # 'a'
print(queue)              # deque(['b', 'c'])
```

### 使用列表实现队列（演示）

```python
class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, item):
        self.queue.append(item)

    def dequeue(self):
        if not self.is_empty():
            return self.queue.pop(0)
        else:
            raise IndexError("dequeue from empty queue")

    def peek(self):
        if not self.is_empty():
            return self.queue[0]
        else:
            raise IndexError("peek from empty queue")

    def is_empty(self):
        return len(self.queue) == 0

    def size(self):
        return len(self.queue)
```

**结论：** 队列操作优先使用 `collections.deque`，以获得 O(1) 时间复杂度。

## 列表推导式

列表推导式提供简洁的方式从序列创建列表，可用于映射、过滤。

```python
vec = [2, 4, 6]
# 每个元素乘 3
print([3*x for x in vec])          # [6, 12, 18]

# 生成列表的列表
print([[x, x**2] for x in vec])    # [[2, 4], [4, 16], [6, 36]]

# 调用元素的方法
freshfruit = ['  banana', '  loganberry ', 'passion fruit  ']
print([weapon.strip() for weapon in freshfruit])  # ['banana', 'loganberry', 'passion fruit']

# 带条件的筛选
print([3*x for x in vec if x > 3])   # [12, 18]
print([3*x for x in vec if x < 2])   # []

# 多重循环
vec1 = [2, 4, 6]
vec2 = [4, 3, -9]
print([x*y for x in vec1 for y in vec2])   # 所有组合的乘积
print([vec1[i]*vec2[i] for i in range(len(vec1))])  # 对应位置相乘

# 复杂表达式
import math
print([str(round(math.pi, i)) for i in range(1, 6)])
# ['3.1', '3.14', '3.142', '3.1416', '3.14159']
```

## 嵌套列表解析

可以对矩阵进行转置等操作。例如将 3x4 矩阵转换为 4x3：

```python
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]
# 嵌套推导式
print([[row[i] for row in matrix] for i in range(4)])
# 结果：[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]

# 等价的双重循环写法
transposed = []
for i in range(4):
    transposed_row = []
    for row in matrix:
        transposed_row.append(row[i])
    transposed.append(transposed_row)
```

## del 语句

`del` 可根据索引删除列表元素，也可删除切片或整个列表。

```python
a = [-1, 1, 66.25, 333, 333, 1234.5]
del a[0]          # 删除索引 0 的元素 -> [1, 66.25, 333, 333, 1234.5]
del a[2:4]        # 删除索引 2,3 的元素 -> [1, 66.25, 1234.5]
del a[:]          # 清空列表
del a             # 删除变量
```

## 元组和序列

元组由逗号分隔的值组成，输入时可以省略括号，但输出时通常带括号。

```python
t = 12345, 54321, 'hello!'
print(t[0])        # 12345
print(t)           # (12345, 54321, 'hello!')

# 嵌套元组
u = t, (1, 2, 3, 4, 5)
print(u)           # ((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))
```

元组是不可变的（immutable），但可以包含可变对象。

## 集合

集合是无序、不重复元素的集，用于去重、关系测试等。

```python
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print(basket)                      # {'apple', 'banana', 'orange', 'pear'}
print('orange' in basket)          # True
print('crabgrass' in basket)       # False

# 集合运算
a = set('abracadabra')
b = set('alacazam')
print(a - b)   # 差集
print(a | b)   # 并集
print(a & b)   # 交集
print(a ^ b)   # 对称差集

# 集合推导式
a = {x for x in 'abracadabra' if x not in 'abc'}
print(a)       # {'r', 'd'}
```

## 字典

字典以**键值对**形式存储数据，键必须不可变（如字符串、数字、元组），且唯一。

```python
tel = {'jack': 4098, 'sape': 4139}
tel['guido'] = 4127
print(tel)                      # {'jack': 4098, 'sape': 4139, 'guido': 4127}
print(tel['jack'])              # 4098
del tel['sape']
tel['irv'] = 4127
print(tel)                      # {'jack': 4098, 'guido': 4127, 'irv': 4127}
print(list(tel.keys()))         # 所有键的列表
print(sorted(tel.keys()))       # 排序后的键
print('guido' in tel)           # True
print('jack' not in tel)        # False

# 构造函数和推导式
print(dict([('sape', 4139), ('guido', 4127), ('jack', 4098)]))
print({x: x**2 for x in (2, 4, 6)})  # {2: 4, 4: 16, 6: 36}
print(dict(sape=4139, guido=4127, jack=4098))
```

## 遍历技巧

- **遍历字典**：使用 `items()` 同时获取键和值。
  ```python
  knights = {'gallahad': 'the pure', 'robin': 'the brave'}
  for k, v in knights.items():
      print(k, v)
  ```

- **遍历序列并获取索引**：使用 `enumerate()`。
  ```python
  for i, v in enumerate(['tic', 'tac', 'toe']):
      print(i, v)
  ```

- **同时遍历多个序列**：使用 `zip()`。
  ```python
  questions = ['name', 'quest', 'favorite color']
  answers = ['lancelot', 'the holy grail', 'blue']
  for q, a in zip(questions, answers):
      print(f'What is your {q}?  It is {a}.')
  ```

- **反向遍历**：使用 `reversed()`。
  ```python
  for i in reversed(range(1, 10, 2)):
      print(i)
  ```

- **排序后遍历**：使用 `sorted()`，不修改原序列。
  ```python
  basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
  for f in sorted(set(basket)):
      print(f)
  ```
  
  # Python3 模块

在前面的章节中，我们通常直接在 Python 解释器中编写代码。一旦退出解释器，定义的所有变量和函数都会丢失。  
为了解决这个问题，Python 提供了**模块（Module）**：将定义保存在一个以 `.py` 为后缀的文件中，以便在脚本或交互式环境中重复使用。

模块可以包含函数、类、变量以及可执行的代码。通过模块，我们能够：

- **代码复用**：将常用功能封装，在多个程序中调用。
- **管理命名空间**：避免不同模块中的同名函数或变量相互冲突。
- **组织代码**：按功能划分模块，使程序结构更清晰。

## import 语句

在另一个 Python 源文件中，使用 `import` 语句即可引入模块。语法如下：

```python
import module1[, module2[,... moduleN]
```

当解释器遇到 `import` 语句时，会按照搜索路径查找并导入模块。导入后，可通过 `模块名.函数名` 的方式使用模块中的内容。

**示例：使用标准库 `sys` 模块**

```python
#!/usr/bin/python3
# 文件名: using_sys.py

import sys

print('命令行参数如下:')
for i in sys.argv:
    print(i)

print('\n\nPython 路径为：', sys.path, '\n')
```

运行结果：
```
$ python using_sys.py 参数1 参数2
命令行参数如下:
using_sys.py
参数1
参数2

Python 路径为： ['/root', '/usr/lib/python3.4', ...]
```

- `sys.argv` 是一个包含命令行参数的列表。
- `sys.path` 是解释器查找模块的路径列表。

### 自定义模块示例

**support.py**
```python
#!/usr/bin/python3
# Filename: support.py

def print_func(par):
    print("Hello : ", par)
    return
```

**test.py**
```python
#!/usr/bin/python3
# Filename: test.py

import support

support.print_func("Runoob")
```

输出：
```
Hello :  Runoob
```

> 无论执行多少次 `import`，一个模块只会被导入一次。

## 模块的搜索路径

当导入模块时，Python 会按以下顺序查找：

1. 当前目录
2. 环境变量 `PYTHONPATH` 指定的目录
3. Python 标准库目录
4. `.pth` 文件中指定的目录

搜索路径存储在 `sys.path` 中：

```python
import sys
print(sys.path)
```

如果当前目录下存在与要导入模块同名的文件，会优先导入该文件，可能屏蔽标准库模块。  
也可以在脚本中动态修改 `sys.path` 来添加自定义路径。

## 深入模块

除了函数定义，模块还可以包含可执行代码（通常用于初始化），这些代码仅在模块**第一次被导入时**执行。

每个模块拥有独立的符号表，模块内部可以自由使用全局变量，无需担心与用户全局变量冲突。

模块也可以导入其他模块。被导入模块的名称会放入当前模块的符号表中。

**示例：斐波那契模块 `fibo.py`**

```python
# 斐波那契(fibonacci)数列模块

def fib(n):    # 打印到 n 的斐波那契数列
    a, b = 0, 1
    while b < n:
        print(b, end=' ')
        a, b = b, a+b
    print()

def fib2(n):   # 返回包含到 n 的斐波那契数列的列表
    result = []
    a, b = 0, 1
    while b < n:
        result.append(b)
        a, b = b, a+b
    return result
```

导入并使用：
```python
>>> import fibo
>>> fibo.fib(1000)
1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
>>> fibo.fib2(100)
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
>>> fibo.__name__
'fibo'
```

如果经常使用某个函数，可以将其赋值给本地变量：
```python
>>> fib = fibo.fib
>>> fib(500)
1 1 2 3 5 8 13 21 34 55 89 144 233 377
```

## from … import 语句

从模块中导入指定的部分到当前命名空间，语法如下：

```python
from modname import name1[, name2[, ... nameN]]
```

**示例：**
```python
>>> from fibo import fib, fib2
>>> fib(500)
1 1 2 3 5 8 13 21 34 55 89 144 233 377
```

### 为模块或函数起别名

```python
import numpy as np                     # 模块别名
from math import sqrt as square_root   # 函数别名
```

## from … import * 语句

将一个模块的所有名称（除下划线 `_` 开头的）导入当前命名空间：

```python
from modname import *
```

**不推荐**这样做，容易导致命名冲突和可读性降低。

## `__name__` 属性

每个模块都有一个 `__name__` 属性。

- 当模块被**直接运行**时，`__name__` 的值为 `'__main__'`。
- 当模块被**导入**时，`__name__` 的值为模块名。

利用这一特性，可以实现：模块既可作为独立脚本运行，也可被导入而不执行某些测试代码。

**示例：**
```python
#!/usr/bin/python3
# Filename: using_name.py

if __name__ == '__main__':
    print('程序自身在运行')
else:
    print('我来自另一模块')
```

直接运行：`程序自身在运行`  
被导入：`我来自另一模块`

## `dir()` 函数

内置函数 `dir()` 可以列出模块内定义的所有名称（包括变量、函数、类等），以字符串列表形式返回。

```python
>>> import fibo, sys
>>> dir(fibo)
['__name__', 'fib', 'fib2']
>>> dir(sys)   # 返回大量属性
```

不带参数时，`dir()` 列出当前作用域定义的所有名称。

## 标准模块

Python 自带丰富的标准库，常用的有：

| 模块 | 功能描述 |
|------|----------|
| `math` | 数学运算（平方根、三角函数等） |
| `os` | 操作系统相关功能（文件/目录操作） |
| `sys` | 系统相关的参数和函数 |
| `random` | 生成随机数 |
| `datetime` | 处理日期和时间 |
| `json` | 处理 JSON 数据 |
| `re` | 正则表达式操作 |
| `collections` | 额外数据结构（`deque`、`defaultdict` 等） |
| `itertools` | 迭代器工具 |
| `functools` | 高阶函数工具 |

某些模块（如 `winreg`）仅适用于特定操作系统。`sys` 模块内置于每个 Python 解释器中，其变量 `sys.ps1` 和 `sys.ps2` 可定义主、副命令提示符。

## 包

包是一种使用“点模块名称”管理命名空间的方式。比如模块名 `A.B` 表示包 `A` 中的子模块 `B`。

包在文件系统中对应包含 `__init__.py` 文件的目录。`__init__.py` 可以是空文件，也可以包含包的初始化代码，或定义 `__all__` 变量。

**示例包结构：**
```
sound/                      顶层包
    __init__.py
    formats/                文件格式转换子包
        __init__.py
        wavread.py
        wavwrite.py
        ...
    effects/                声音效果子包
        __init__.py
        echo.py
        surround.py
        ...
    filters/                filters 子包
        __init__.py
        equalizer.py
        ...
```

**导入方式：**

- 导入特定子模块：
  ```python
  import sound.effects.echo
  # 调用时需使用全名：sound.effects.echo.echofilter(...)
  ```
- 使用 `from` 避免前缀：
  ```python
  from sound.effects import echo
  echo.echofilter(...)
  ```
- 直接导入函数：
  ```python
  from sound.effects.echo import echofilter
  echofilter(...)
  ```

**从包中导入 `*`**  
如果包中的 `__init__.py` 定义了 `__all__` 列表（如 `__all__ = ["echo", "surround", "reverse"]`），则 `from sound.effects import *` 只会导入列表中指定的子模块。  
若未定义 `__all__`，则此类导入不会导入任何子模块，仅执行初始化代码。  
**推荐使用 `from Package import specific_module` 的明确导入方式。**

**相对导入：**  
在包内部，可以使用 `.` 和 `..` 进行相对导入，例如：
```python
from . import echo
from .. import formats
from ..filters import equalizer
```
主模块（直接运行的脚本）应使用绝对路径导入。

包还有一个 `__path__` 属性（目录列表），可用于扩展包内的模块和子包（不常用）。

---

# Python `__name__` 与 `__main__`

经常可以在 Python 代码中看到类似的结构：
```python
if __name__ == "__main__":
    main()
```

- `__name__` 是内置变量，表示当前模块的名称。
- 当模块作为主程序直接运行时，`__name__` 的值为 `"__main__"`。
- 当模块被导入时，`__name__` 的值为模块的文件名（不带 `.py`）。

利用 `if __name__ == "__main__":` 可以控制：某些代码仅在模块直接运行时执行，导入时不执行。

**示例 `example.py`**
```python
def greet():
    print("来自 example 模块的问候！")

if __name__ == "__main__":
    print("该脚本正在直接运行。")
    greet()
else:
    print("该脚本作为模块被导入。")
```

直接运行输出：
```
该脚本正在直接运行。
来自 example 模块的问候！
```

在另一个脚本中导入：
```python
import example
example.greet()
```
输出：
```
该脚本作为模块被导入。
来自 example 模块的问候！
```

---

# Python3 输入和输出

## 输出格式美化

Python 输出值的方式主要有：

- 表达式语句（如直接写变量名）
- `print()` 函数
- 文件对象的 `write()` 方法（标准输出可通过 `sys.stdout` 访问）

若希望格式化输出，可使用 `str.format()` 函数，或使用 `repr()` / `str()` 将值转换为字符串。

- `str()`：返回用户可读的表达形式。
- `repr()`：返回解释器可读的表达形式（可转义特殊字符）。

```python
s = 'Hello, Runoob'
print(str(s))        # 'Hello, Runoob'
print(repr(s))       # "'Hello, Runoob'"

x = 10 * 3.25
y = 200 * 200
s = 'x 的值为： ' + repr(x) + ',  y 的值为：' + repr(y) + '...'
print(s)
```

**字符串对齐/填充方法：**

- `str.rjust(width)`：右对齐，左侧填充空格。
- `str.ljust(width)`：左对齐。
- `str.center(width)`：居中。
- `str.zfill(width)`：左侧填充 `0`（常用于数字）。

```python
print('12'.zfill(5))       # '00012'
print('-3.14'.zfill(7))    # '-003.14'
```

### `str.format()` 用法

基本用法：用 `{}` 占位，`format()` 中的参数按顺序替换。

```python
print('{}网址： "{}!"'.format('入门教程', 'www.runoob.com'))
# 入门教程网址： "www.runoob.com!"

# 位置参数
print('{0} 和 {1}'.format('Google', 'Runoob'))
print('{1} 和 {0}'.format('Google', 'Runoob'))

# 关键字参数
print('{name}网址： {site}'.format(name='入门教程', site='www.runoob.com'))

# 位置与关键字混用
print('站点列表 {0}, {1}, 和 {other}。'.format('Google', 'Runoob', other='Taobao'))
```

可选的格式化符：`!a` (ascii)、`!s` (str)、`!r` (repr)，以及 `:` 后接格式说明符（如 `.3f` 表示保留三位小数，`10d` 表示宽度 10 的整数）。

```python
import math
print('PI 近似为 {0:.3f}。'.format(math.pi))   # 3.142

# 字典形式
table = {'Google': 1, 'Runoob': 2, 'Taobao': 3}
print('Runoob: {Runoob:d}; Google: {Google:d}; Taobao: {Taobao:d}'.format(**table))
```

### 旧式字符串格式化

```python
print('常量 PI 的值近似为：%5.3f。' % math.pi)
```

由于 `str.format()` 是更现代的方式，建议优先使用。

## 读取键盘输入

使用内置函数 `input()` 从标准输入读取一行文本：

```python
str = input("请输入：")
print("你输入的内容是: ", str)
```

## 读和写文件

Python 通过 `open()` 函数进行文件操作，返回文件对象。语法：

```python
open(filename, mode)
```

- `filename`：文件路径（字符串）。
- `mode`：打开模式，默认 `'r'`（只读）。

**常用模式：**

| 模式 | 描述 |
|------|------|
| `r` | 只读，文件必须存在，指针在开头 |
| `rb` | 二进制只读 |
| `r+` | 读写，文件必须存在，指针在开头 |
| `rb+` | 二进制读写 |
| `w` | 只写，存在则清空，不存在则创建 |
| `wb` | 二进制只写 |
| `w+` | 读写，存在则清空，不存在则创建 |
| `wb+` | 二进制读写 |
| `a` | 追加，不存在则创建，指针在末尾 |
| `ab` | 二进制追加 |
| `a+` | 读写追加，指针在末尾 |
| `ab+` | 二进制读写追加 |

**示例：写入文件**
```python
f = open("/tmp/foo.txt", "w")
f.write("Python 是一个非常好的语言。\n是的，的确非常好!!\n")
f.close()
```

### 文件对象的方法

（假设 `f` 是一个已打开的文件对象）

- **`f.read(size)`**：读取指定数量的数据，返回字符串或字节。省略或负值时读取全部内容。
- **`f.readline()`**：读取一行，遇到换行符为止；返回空字符串表示已到文件末尾。
- **`f.readlines(sizehint)`**：读取所有行并返回列表，可选参数控制读取字节数。
- **迭代文件对象**：`for line in f:` 逐行遍历。
- **`f.write(string)`**：将字符串写入文件，返回写入的字符数。
- **`f.tell()`**：返回文件指针当前位置（字节偏移量）。
- **`f.seek(offset, whence)`**：移动文件指针。`whence` 为 `0` 表示从开头，`1` 表示当前位置，`2` 表示末尾。
- **`f.close()`**：关闭文件，释放系统资源。

**示例：**
```python
# 读取全部
with open('/tmp/foo.txt', 'r') as f:
    read_data = f.read()
    print(read_data)

# 写入非字符串时需先转换
value = ('www.runoob.com', 14)
f.write(str(value))
```

> **最佳实践：** 使用 `with` 语句处理文件，它在块结束后自动关闭文件，即使发生异常也能保证资源释放。
```python
with open('/tmp/foo.txt', 'r') as f:
    print(f.read())
# 无需显式调用 f.close()
```

## pickle 模块

`pickle` 模块实现了数据的序列化和反序列化，可将 Python 对象保存到文件或从文件还原。

- **序列化（保存）**：`pickle.dump(obj, file, protocol)`
- **反序列化（加载）**：`obj = pickle.load(file)`

```python
import pickle

# 保存对象
data1 = {'a': [1, 2.0, 3, 4+6j],
         'b': ('string', u'Unicode string'),
         'c': None}
selfref_list = [1, 2, 3]
selfref_list.append(selfref_list)

with open('data.pkl', 'wb') as output:
    pickle.dump(data1, output)
    pickle.dump(selfref_list, output, -1)

# 读取对象
import pprint
with open('data.pkl', 'rb') as pkl_file:
    data1 = pickle.load(pkl_file)
    pprint.pprint(data1)
    data2 = pickle.load(pkl_file)
    pprint.pprint(data2)
```

---

# Python3 File(文件) 方法

`open()` 函数完整语法：

```
open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
```

除 `mode` 外，还有 `t`（文本模式，默认）、`x`（写模式，文件存在时抛出异常）、`b`（二进制）、`+`（读写）等组合。

**常用文件对象方法：**

| 方法 | 描述 |
|------|------|
| `file.close()` | 关闭文件，关闭后不能再读写 |
| `file.flush()` | 刷新内部缓冲区，将数据立即写入文件 |
| `file.fileno()` | 返回整型的文件描述符 |
| `file.read([size])` | 读取指定字节数，默认全部 |
| `file.readline([size])` | 读取一行（包含换行符） |
| `file.readlines([sizehint])` | 读取所有行，返回列表 |
| `file.seek(offset[, whence])` | 移动文件读取指针 |
| `file.tell()` | 返回文件当前位置 |
| `file.truncate([size])` | 截断文件为指定大小 |
| `file.write(str)` | 写入字符串，返回写入的字符数 |
| `file.writelines(sequence)` | 写入字符串列表（需手动添加换行符） |

---

# Python3 OS 文件/目录方法

`os` 模块提供了与操作系统交互的功能，包括文件和目录操作、环境变量、进程管理等。它是跨平台的。

使用前导入：
```python
import os
```

**常用操作：**

| 功能 | 方法 |
|------|------|
| 获取当前工作目录 | `os.getcwd()` |
| 改变工作目录 | `os.chdir(path)` |
| 列出目录内容 | `os.listdir(path)` |
| 创建目录 | `os.mkdir(path)` |
| 删除空目录 | `os.rmdir(path)` |
| 删除文件 | `os.remove(path)` |
| 重命名文件/目录 | `os.rename(src, dst)` |
| 获取环境变量 | `os.getenv(key)` |
| 执行系统命令 | `os.system(command)` |

此外，`os.path` 子模块提供路径相关的属性方法。`os` 模块还包含许多底层文件描述符操作、权限修改、目录遍历等方法，适用于高级场景。

# Python3 错误和异常

在 Python 编程中，错误主要分为**语法错误**和**异常**。`assert` 断言用于判断表达式，当条件为 False 时触发异常。

## 语法错误

语法错误（或称解析错误）是初学者经常遇到的问题，例如忘记在 `while` 语句后加冒号：

```python
>>> while True print('Hello world')
  File "<stdin>", line 1, in ?
    while True print('Hello world')
                   ^
SyntaxError: invalid syntax
```

## 异常

即使语法正确，运行时也可能发生错误，称为**异常**。异常的类型会作为错误信息的一部分打印出来，例如：

```python
>>> 10 * (1/0)                     # ZeroDivisionError
>>> 4 + spam*3                     # NameError: name 'spam' is not defined
>>> '2' + 2                        # TypeError
```

异常以不同的类型出现，错误信息的前面部分会显示异常的上下文和调用栈。

## 异常处理

### try/except

使用 `try/except` 捕捉异常。例如让用户输入一个整数，若输入非数字则捕获 `ValueError`：

```python
while True:
    try:
        x = int(input("请输入一个数字: "))
        break
    except ValueError:
        print("您输入的不是数字，请再次尝试输入！")
```

**工作流程：**
- 首先执行 `try` 子句。
- 若无异常，忽略 `except` 子句，`try` 子句执行完毕。
- 若发生异常，`try` 子句剩余部分被忽略；若异常类型与 `except` 后的名称匹配，则执行对应的 `except` 子句。
- 若异常没有匹配的 `except`，则向上一层 `try` 传递。

一个 `try` 可有多个 `except` 子句处理不同异常，也可以将多个异常放在括号内作为元组：

```python
except (RuntimeError, TypeError, NameError):
    pass
```

最后一个 `except` 可省略异常名称，充当通配符，捕获所有未预料异常：

```python
import sys

try:
    f = open('myfile.txt')
    s = f.readline()
    i = int(s.strip())
except OSError as err:
    print("OS error: {0}".format(err))
except ValueError:
    print("Could not convert data to an integer.")
except:
    print("Unexpected error:", sys.exc_info()[0])
    raise
```

### try/except...else

`try/except` 还可以包含一个可选的 `else` 子句，放在所有 `except` 之后。当 `try` 子句没有发生任何异常时，执行 `else` 块。例如尝试打开文件：

```python
for arg in sys.argv[1:]:
    try:
        f = open(arg, 'r')
    except IOError:
        print('cannot open', arg)
    else:
        print(arg, 'has', len(f.readlines()), 'lines')
        f.close()
```

异常处理也会捕捉 `try` 子句中调用的函数内部抛出的异常：

```python
def this_fails():
    x = 1/0

try:
    this_fails()
except ZeroDivisionError as err:
    print('Handling run-time error:', err)
```

### try-finally 语句

`finally` 子句**无论异常是否发生都会执行**。常用于释放资源、执行清理操作。

```python
try:
    runoob()
except AssertionError as error:
    print(error)
else:
    try:
        with open('file.log') as file:
            read_data = file.read()
    except FileNotFoundError as fnf_error:
        print(fnf_error)
finally:
    print('这句话，无论异常是否发生都会执行。')
```

## 抛出异常

使用 `raise` 语句抛出一个指定异常：

```python
raise [Exception [, args [, traceback]]]
```

示例：如果 `x > 5` 则抛出 `Exception`：

```python
x = 10
if x > 5:
    raise Exception('x 不能大于 5。x 的值为: {}'.format(x))
```

在 `except` 块中，可以使用简单的 `raise` 重新抛出当前捕获的异常：

```python
try:
    raise NameError('HiThere')
except NameError:
    print('An exception flew by!')
    raise
```

## 用户自定义异常

通过继承 `Exception` 类可以创建自定义异常。通常异常类实现比较简单，提供一些错误属性。

```python
class MyError(Exception):
    def __init__(self, value):
        self.value = value
    def __str__(self):
        return repr(self.value)

try:
    raise MyError(2*2)
except MyError as e:
    print('My exception occurred, value:', e.value)
```

在模块中，常定义一个基础异常类，再派生不同子类：

```python
class Error(Exception):
    """Base class for exceptions in this module."""
    pass

class InputError(Error):
    def __init__(self, expression, message):
        self.expression = expression
        self.message = message

class TransitionError(Error):
    def __init__(self, previous, next, message):
        self.previous = previous
        self.next = next
        self.message = message
```

大多数异常名以 "Error" 结尾。

## 定义清理行为

`finally` 子句定义无论异常是否发生的清理行为。即使 `try` 块中发生了未被 `except` 捕获的异常，`finally` 也会在异常抛出之前执行。

```python
>>> try:
...     raise KeyboardInterrupt
... finally:
...     print('Goodbye, world!')
...
Goodbye, world!
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
KeyboardInterrupt
```

更复杂的例子（包含 `except`、`else` 和 `finally`）：

```python
def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print("division by zero!")
    else:
        print("result is", result)
    finally:
        print("executing finally clause")

divide(2, 1)    # result is 2.0 -> executing finally clause
divide(2, 0)    # division by zero! -> executing finally clause
divide("2", "1")# executing finally clause -> TypeError
```

## 预定义的清理行为

某些对象定义了标准的清理机制。例如，使用 `open()` 打开文件后如果不主动关闭，文件会保持打开状态。`with` 语句可确保文件在使用后被正确关闭。

```python
with open("myfile.txt") as f:
    for line in f:
        print(line, end="")
```

即使 `with` 块出现异常，文件 `f` 也总是会被关闭。此方式既简洁又安全，推荐用于文件操作等资源管理场景。

---

# Python3 面向对象

Python 从设计之初就是一门面向对象的语言，创建类和对象非常容易。

## 面向对象技术简介

- **类 (Class)**：描述具有相同属性和方法的对象的集合，对象是类的实例。
- **方法**：类中定义的函数。
- **类变量**：类变量在整个实例化对象中是公用的，定义在类中且函数体外部。
- **数据成员**：类变量或实例变量，用于处理相关数据。
- **方法重写**：如果从父类继承的方法不能满足需求，可在子类中改写（覆盖）。
- **局部变量**：方法中定义的变量，只作用于当前实例。
- **实例变量**：在类的声明中，属性是用变量表示的，通常用 `self` 修饰。
- **继承**：派生类继承基类的字段和方法，体现“is-a”关系。
- **实例化**：创建类的实例。
- **对象**：通过类定义的数据结构实例，包含两个数据成员（类变量和实例变量）和方法。

Python 的类机制在不增加新的语法和语义的前提下，提供了面向对象编程的所有基本功能，包括多继承，方法覆盖，以及调用基类的方法。

## 类定义

语法格式：

```python
class ClassName:
    <statement-1>
    ...
    <statement-N>
```

类实例化后可使用其属性。通过类名可以访问属性。

## 类对象

类对象支持两种操作：**属性引用**和**实例化**。

属性引用标准语法：`obj.name`。创建类对象后，类命名空间中所有名称都是有效属性名。

```python
#!/usr/bin/python3

class MyClass:
    """一个简单的类实例"""
    i = 12345
    def f(self):
        return 'hello world'

# 实例化类
x = MyClass()
print("MyClass 类的属性 i 为：", x.i)          # 12345
print("MyClass 类的方法 f 输出为：", x.f())   # hello world
```

### `__init__()` 构造方法

类有一个特殊的 `__init__()` 方法，在实例化时自动调用：

```python
class Complex:
    def __init__(self, realpart, imagpart):
        self.r = realpart
        self.i = imagpart

x = Complex(3.0, -4.5)
print(x.r, x.i)  # 3.0 -4.5
```

### `self` 参数

类的方法与普通函数的唯一区别是它们必须有一个额外的第一个参数，按惯例命名为 `self`，代表类的实例。

```python
class Test:
    def prt(self):
        print(self)
        print(self.__class__)

t = Test()
t.prt()
```

输出显示 `self` 是实例对象，`self.__class__` 是类本身。`self` 不是 Python 关键字，可以换成其他名称，但强烈建议遵循约定。

## 类的方法

在类内部用 `def` 定义方法，第一个参数必须是 `self`。`self` 用于访问和操作实例的属性。

```python
class people:
    name = ''
    age = 0
    __weight = 0  # 私有属性
    def __init__(self, n, a, w):
        self.name = n
        self.age = a
        self.__weight = w
    def speak(self):
        print("%s 说: 我 %d 岁。" % (self.name, self.age))

p = people('runoob', 10, 30)
p.speak()  # runoob 说: 我 10 岁。
```

## 继承

子类（派生类）可继承父类（基类）的属性和方法。定义语法：

```python
class DerivedClassName(BaseClassName):
    <statement-1>
    ...
    <statement-N>
```

示例：`student` 继承 `people` 并重写 `speak` 方法：

```python
class student(people):
    grade = ''
    def __init__(self, n, a, w, g):
        people.__init__(self, n, a, w)  # 调用父类构造
        self.grade = g
    def speak(self):
        print("%s 说: 我 %d 岁了，我在读 %d 年级" % (self.name, self.age, self.grade))

s = student('ken', 10, 60, 3)
s.speak()  # ken 说: 我 10 岁了，我在读 3 年级
```

若基类在另一个模块中，可以使用 `class DerivedClassName(modname.BaseClassName):`。

## 多继承

Python 支持多继承：

```python
class DerivedClassName(Base1, Base2, Base3):
    <statement-1>
    ...
    <statement-N>
```

搜索顺序：若父类中有同名方法，未指定时从左到右搜索。下面的例子中 `sample` 继承 `speaker` 和 `student`，`speak` 方法优先使用排在前面的 `speaker` 类中的方法。

```python
class speaker():
    topic = ''
    name = ''
    def __init__(self, n, t):
        self.name = n
        self.topic = t
    def speak(self):
        print("我叫 %s，我是一个演说家，我演讲的主题是 %s" % (self.name, self.topic))

class sample(speaker, student):
    a = ''
    def __init__(self, n, a, w, g, t):
        student.__init__(self, n, a, w, g)
        speaker.__init__(self, n, t)

test = sample("Tim", 25, 80, 4, "Python")
test.speak()  # 我叫 Tim，我是一个演说家，我演讲的主题是 Python
```

## 方法重写

在子类中重新定义父类的方法即为重写。子类实例调用该方法时执行子类版本，`super()` 函数可用于调用父类被覆盖的方法。

```python
class Parent:
    def myMethod(self):
        print('调用父类方法')

class Child(Parent):
    def myMethod(self):
        print('调用子类方法')

c = Child()
c.myMethod()               # 调用子类方法
super(Child, c).myMethod() # 调用父类方法
```

## 类属性与方法

### 私有属性

`__private_attrs`：两个下划线开头，声明为私有，不能在类外部直接访问，类内部通过 `self.__private_attrs` 使用。

```python
class JustCounter:
    __secretCount = 0  # 私有变量
    publicCount = 0    # 公开变量
    def count(self):
        self.__secretCount += 1
        self.publicCount += 1
        print(self.__secretCount)

counter = JustCounter()
counter.count()
counter.count()
print(counter.publicCount)    # 2
# print(counter.__secretCount) # 报错，无法访问私有变量
```

### 私有方法

`__private_method`：两个下划线开头，只能在类内部调用，外部无法访问。

```python
class Site:
    def __init__(self, name, url):
        self.name = name       # public
        self.__url = url       # private
    def who(self):
        print('name : ', self.name)
        print('url : ', self.__url)
    def __foo(self):           # 私有方法
        print('这是私有方法')
    def foo(self):             # 公共方法
        print('这是公共方法')
        self.__foo()

x = Site('入门教程', 'www.runoob.com')
x.who()
x.foo()
# x.__foo()   # 报错
```

### 类的专有方法

| 方法 | 描述 |
|------|------|
| `__init__` | 构造函数，在生成对象时调用 |
| `__del__` | 析构函数，释放对象时使用 |
| `__repr__` | 打印 / 转换 |
| `__setitem__` | 按照索引赋值 |
| `__getitem__` | 按照索引获取值 |
| `__len__` | 获得长度 |
| `__cmp__` | 比较运算 |
| `__call__` | 函数调用 |
| `__add__` | 加运算 |
| `__sub__` | 减运算 |
| `__mul__` | 乘运算 |
| `__truediv__` | 除运算 |
| `__mod__` | 求余运算 |
| `__pow__` | 乘方 |

## 运算符重载

通过重写类的专有方法可实现运算符重载。例如，自定义 `Vector` 类的加法：

```python
class Vector:
    def __init__(self, a, b):
        self.a = a
        self.b = b
    def __str__(self):
        return 'Vector (%d, %d)' % (self.a, self.b)
    def __add__(self, other):
        return Vector(self.a + other.a, self.b + other.b)

v1 = Vector(2, 10)
v2 = Vector(5, -2)
print(v1 + v2)  # Vector(7,8)
```

---

# Python3 命名空间和作用域

## 命名空间

命名空间（Namespace）是从名称到对象的映射，通常通过 Python 字典实现。它提供了避免名字冲突的方法，不同命名空间中的同名变量互不影响。

一般有三种命名空间：

- **内置名称**：Python 语言内置的名称（如 `abs`、`Exception`）。
- **全局名称**：模块中定义的名称，包括函数、类、导入的模块、模块级变量等。
- **局部名称**：函数中定义的名称，包括参数和局部变量。（类中定义的也属于局部）

### 命名空间查找顺序

当使用一个变量时，Python 按 **局部 → 全局 → 内置** 的顺序查找，如果找不到则抛出 `NameError`。

命名空间的生命周期取决于对象的作用域，执行完成即结束，外部命名空间无法访问内部命名空间的对象。

```python
# var1 是全局名称
var1 = 5
def some_func():
    # var2 是局部名称
    var2 = 6
    def some_inner_func():
        # var3 是内嵌的局部名称
        var3 = 7
```

## 作用域

作用域是 Python 程序中可以直接访问命名空间的正文区域。Python 中有四种作用域，按 **LEGB** 规则查找变量：

- **L（Local）**：局部作用域，如函数内部。
- **E（Enclosing）**：外层非全局作用域，如嵌套函数的外层函数。
- **G（Global）**：全局作用域，当前模块最外层。
- **B（Built-in）**：内置作用域，如内置函数和异常。

查找顺序为 **L → E → G → B**。

> **注意：** 只有模块（module）、类（class）以及函数（def、lambda）才会引入新的作用域，其他代码块如 `if`、`for`、`while` 等不会引入新作用域。

```python
if True:
    msg = 'I am from Runoob'
print(msg)  # 可以访问

def test():
    msg_inner = 'I am from Runoob'
# print(msg_inner)  # 报错，局部变量无法访问
```

## 全局变量和局部变量

- **全局变量**：函数外部定义，可在整个文件中访问，若函数内部定义同名变量，则内部优先使用局部变量。
- **局部变量**：函数内部定义，仅在函数内有效。

```python
total = 0  # 全局变量
def sum(arg1, arg2):
    total = arg1 + arg2  # 局部变量
    print("函数内局部变量 : ", total)
    return total

sum(10, 20)
print("函数外全局变量 : ", total)  # 0，不受影响
```

若在函数内部想访问全局变量（不修改），可直接读取；若需修改全局变量，需使用 `global` 关键字。

## global 和 nonlocal 关键字

- **`global`**：在函数内声明变量为全局变量，修改会影响外部。
- **`nonlocal`**：在嵌套函数中声明变量为外层（非全局）作用域内的变量，用于修改 Enclosing 作用域中的变量。

**修改全局变量示例：**

```python
num = 1
def fun1():
    global num
    print(num)   # 1
    num = 123
    print(num)   # 123
fun1()
print(num)       # 123
```

**修改外层非全局变量示例：**

```python
def outer():
    num = 10
    def inner():
        nonlocal num
        num = 100
        print(num)   # 100
    inner()
    print(num)       # 100
outer()
```

**特殊情况：** 若在函数内赋值之前引用了变量，且该变量与全局变量同名，Python 会将其视为局部变量，导致 `UnboundLocalError`。解决方法：使用 `global` 声明或通过参数传递。

```python
a = 10
def test():
    # a = a + 1  # 错误：UnboundLocalError
    global a
    a = a + 1
    print(a)    # 11
test()
```

# Python 类型注解（Type Hints）

想象一下，你给朋友寄一个包裹。如果你在包裹上写明“易碎品”和“向上箭头”，快递员就会知道要小心轻放、正确朝向。类型注解（Type Hints）在编程中就扮演着类似的角色——它是一种为代码添加“说明标签”的技术，明确地指出变量、函数参数和返回值应该是什么数据类型。

简单来说，类型注解就是在代码中注明数据类型的语法，它的核心目的是：

- **提高代码可读性**：让他人（以及未来的你）一眼就能看懂代码的意图
- **便于静态检查**：在运行代码前，通过工具发现潜在的类型错误
- **增强 IDE 支持**：让代码编辑器提供更准确的自动补全和提示

一个简单的例子：

```python
# 没有类型注解
def greet(name):
    return f"Hello, {name}"

# 有类型注解
def greet(name: str) -> str:
    return f"Hello, {name}"
```

第二段代码明确指出了 `name` 应该是字符串类型（`str`），函数会返回一个字符串（`-> str`）。

## 为什么需要类型注解？

Python 以其动态类型特性而闻名——你不需要提前声明变量的类型，解释器会在运行时自动推断。这虽然灵活，但也带来了问题：

- **代码难以理解**：看到一个函数时，不清楚应该传入什么类型的数据
- **隐藏的 bug**：可能不小心传入了错误类型，直到运行时才报错
- **开发效率低**：IDE 无法提供准确的代码提示和补全

类型注解通过提供可选的类型信息来解决这些问题，让你的代码更加健壮和可维护。

## 基础语法详解

### 变量注解

从 Python 3.6 开始，你可以直接为变量添加类型注解：

```python
# 没有类型注解的代码
name = "Alice"
age = 30
is_student = False
scores = [95, 88, 91]

# 有类型注解的代码
name: str = "Alice"       # 注解为字符串 (str)
age: int = 30             # 注解为整数 (int)
is_student: bool = False  # 注解为布尔值 (bool)
scores: list = [95, 88, 91]  # 注解为列表 (list)
```

> `name: str` 读作“变量 name 的类型是 str”。

### 函数注解

在函数参数后加 `: 类型`。

```python
# 没有类型注解的函数
def greet(first_name, last_name):
    full_name = first_name + " " + last_name
    return "Hello, " + full_name

# 有类型注解的函数
def greet(first_name: str, last_name: str) -> str:
    full_name = first_name + " " + last_name
    return "Hello, " + full_name
```

解读这个函数：
- `first_name: str`：参数 `first_name` 应该是字符串。
- `last_name: str`：参数 `last_name` 应该是字符串。
- `-> str`：这个函数执行后会返回一个字符串。

现在，任何人调用这个函数时，都能清晰地知道需要传递什么，以及会得到什么。

函数注解是类型注解最常见的应用场景：

```python
def add_numbers(a: int, b: int) -> int:
    """将两个整数相加并返回结果"""
    return a + b

# 调用函数
result = add_numbers(5, 3)  # 正确：两个整数
# result = add_numbers("5", "3")  # 可能有问题：虽然能运行，但类型检查器会警告
```

### 参数默认值

你可以同时使用类型注解和默认值：

```python
def say_hello(name: str, times: int = 1) -> str:
    """向某人问好指定次数"""
    return " ".join([f"Hello, {name}!"] * times)

print(say_hello("Bob"))      # 输出：Hello, Bob!
print(say_hello("Alice", 3)) # 输出：Hello, Alice! Hello, Alice! Hello, Alice!
```

## 复杂类型注解

基本的 `str`、`int`、`list` 很好用，但如果我们想表达“一个由整数组成的列表”该怎么办？这时就需要 Python 的 `typing` 模块提供更强大的工具。

### 列表、字典等容器类型

```python
from typing import List, Dict, Tuple, Set

# List[int] 表示这是一个只包含整数的列表
numbers: List[int] = [1, 2, 3, 4, 5]

# Dict[str, int] 表示这是一个键为字符串、值为整数的字典
student_scores: Dict[str, int] = {"Alice": 95, "Bob": 88}

# Tuple[int, str, bool] 表示这是一个包含整数、字符串、布尔值的元组
person_info: Tuple[int, str, bool] = (25, "Alice", True)

# Set[str] 表示这是一个只包含字符串的集合
unique_names: Set[str] = {"Alice", "Bob", "Charlie"}
```

### 可选类型（Optional）

当值可能是某种类型或者是 `None` 时使用：

```python
from typing import Optional

def find_student(name: str) -> Optional[str]:
    """根据名字查找学生，可能找到也可能返回 None"""
    students = {"Alice": "A001", "Bob": "B002"}
    return students.get(name)  # 可能返回字符串或 None
# Optional[str] 等价于 Union[str, None]
```

### 联合类型（Union）

当值可能是多种类型之一时使用：

```python
from typing import Union

def process_input(data: Union[str, int, List[int]]) -> None:
    """处理可能是字符串、整数或整数列表的输入"""
    if isinstance(data, str):
        print(f"字符串: {data}")
    elif isinstance(data, int):
        print(f"整数: {data}")
    elif isinstance(data, list):
        print(f"列表: {data}")

process_input("hello")    # 输出：字符串: hello
process_input(42)         # 输出：整数: 42
process_input([1, 2, 3])  # 输出：列表: [1, 2, 3]
```

## 类型检查实战

### 使用 Mypy 进行静态类型检查

Mypy 是最流行的 Python 类型检查器。首先安装它：

```bash
pip install mypy
```

假设我们有一个有潜在类型问题的文件 `example.py`：

```python
# example.py
def add_numbers(a: int, b: int) -> int:
    return a + b

result = add_numbers("5", "3")  # 这里有问题！传入了字符串
```

运行 mypy 检查：

```bash
mypy example.py
```

你会看到类似这样的输出：

```
example.py:4: error: Argument 1 to "add_numbers" has incompatible type "str"; expected "int"
example.py:4: error: Argument 2 to "add_numbers" has incompatible type "str"; expected "int"
Found 2 errors in 1 file (checked 1 source file)
```

### 在 IDE 中实时检查

现代 IDE（如 VS Code、PyCharm）都内置了类型检查支持：

- **错误高亮**：类型不匹配的代码会被标记出来
- **智能提示**：输入代码时会显示参数和返回值的类型信息
- **自动补全**：基于类型信息提供更准确的代码补全建议

## 最佳实践指南

1. **渐进式采用**  
   - 从新代码开始使用类型注解  
   - 逐步为重要的旧代码添加注解  
   - 不需要一次性为所有代码添加类型

2. **保持一致性**  
   - 在项目中保持统一的注解风格  
   - 团队协商决定注解的详细程度

3. **避免过度注解**  

```python
# 不推荐：过于明显的类型不需要注解
x: int = 5  # 5 明显是整数，可以省略注解

# 推荐：为复杂逻辑或公共接口添加注解
def calculate_statistics(data: List[float]) -> Dict[str, float]:
    """计算数据的各种统计指标"""
    # 复杂实现...
```

4. **处理第三方库**  
   对于没有类型注解的第三方库，可以：
   - 查看是否有对应的类型存根文件（通常叫 `types-packageName`）
   - 使用 `Any` 类型暂时绕过检查
   - 或者为常用函数添加自己的类型注解

## 常见问题解答

- **类型注解会影响性能吗？**  
  不会。类型注解在运行时会被忽略，只用于静态分析和开发工具。

- **必须使用类型注解吗？**  
  不强制。Python 仍然是动态类型语言，类型注解是可选的。但强烈推荐使用，特别是大型项目。

- **如果注解错了会怎么样？**  
  类型检查器会报错，但程序仍然可以运行。注解只是“提示”而不是“强制”。

## 总结与实践

类型注解是提升代码质量的强大工具。让我们通过一个综合练习来巩固所学：

```python
from typing import List, Dict, Optional, Union

def process_students(students: List[Dict[str, Union[str, int]]]) -> Optional[float]:
    """
    处理学生数据，计算平均分数

    参数:
        students: 学生列表，每个学生是包含 'name' 和 'score' 的字典

    返回:
        平均分数（浮点数），如果没有学生则返回 None
    """
    if not students:
        return None

    total = 0
    for student in students:
        total += student['score']

    return total / len(students)

# 测试数据
students_data = [
    {"name": "Alice", "score": 95},
    {"name": "Bob", "score": 88},
    {"name": "Charlie", "score": 92}
]

average = process_students(students_data)
print(f"平均分: {average}")
```

输出结果：
```
平均分: 91.66666666666667
```

---

# Python3 标准库概览

Python 标准库非常庞大，提供的组件涉及范围十分广泛，使用标准库可以轻松完成各种任务。  
以下是一些常用的模块：

- **os 模块**：提供了许多与操作系统交互的函数，例如创建、移动和删除文件与目录，以及访问环境变量等。
- **sys 模块**：提供了与 Python 解释器和系统相关的功能，例如解释器的版本和路径，以及与 stdin、stdout 和 stderr 相关的信息。
- **time 模块**：提供了处理时间的函数，例如获取当前时间、格式化日期和时间、计时等。
- **datetime 模块**：提供了更高级的日期和时间处理函数，例如处理时区、计算时间差、计算日期差等。
- **random 模块**：提供了生成随机数的函数，例如生成随机整数、浮点数、序列等。
- **math 模块**：提供了数学函数，例如三角函数、对数函数、指数函数、常数等。
- **re 模块**：提供了正则表达式处理函数，可以用于文本搜索、替换、分割等。
- **json 模块**：提供了 JSON 编码和解码函数，可以将 Python 对象转换为 JSON 格式，并从 JSON 格式中解析出 Python 对象。
- **urllib 模块**：提供了访问网页和处理 URL 的功能，包括下载文件、发送 POST 请求、处理 cookies 等。

## 操作系统接口

`os` 模块提供了不少与操作系统相关联的函数，例如文件和目录的操作。

```python
import os

# 获取当前工作目录
current_dir = os.getcwd()
print("当前工作目录:", current_dir)

# 列出目录下的文件
files = os.listdir(current_dir)
print("目录下的文件:", files)
```

建议使用 `import os` 风格而非 `from os import *`，这样可以保证随操作系统不同而有所变化的 `os.open()` 不会覆盖内置函数 `open()`。

在使用 os 这样的大型模块时，内置的 `dir()` 和 `help()` 函数非常有用：

```python
>>> import os
>>> dir(os)
<returns a list of all module functions>
>>> help(os)
<returns an extensive manual page created from the module's docstrings>
```

针对日常的文件和目录管理任务，`shutil` 模块提供了一个易于使用的高级接口：

```python
>>> import shutil
>>> shutil.copyfile('data.db', 'archive.db')
>>> shutil.move('/build/executables', 'installdir')
```

## 文件通配符

`glob` 模块提供了一个函数用于从目录通配符搜索中生成文件列表：

```python
>>> import glob
>>> glob.glob('*.py')
['primes.py', 'random.py', 'quote.py']
```

## 命令行参数

通用工具脚本经常调用命令行参数。这些命令行参数以链表形式存储于 `sys` 模块的 `argv` 变量。

例如在命令行中执行 `python demo.py one two three` 后可以得到以下输出结果：

```python
>>> import sys
>>> print(sys.argv)
['demo.py', 'one', 'two', 'three']
```

## 错误输出重定向和程序终止

`sys` 还有 `stdin`、`stdout` 和 `stderr` 属性，即使在 `stdout` 被重定向时，后者也可以用于显示警告和错误信息。

```python
>>> sys.stderr.write('Warning, log file not found starting a new one\n')
Warning, log file not found starting a new one
```

大多脚本的定向终止都使用 `sys.exit()`。

## 字符串正则匹配

`re` 模块为高级字符串处理提供了正则表达式工具。对于复杂的匹配和处理，正则表达式提供了简洁、优化的解决方案：

```python
>>> import re
>>> re.findall(r'\bf[a-z]*', 'which foot or hand fell fastest')
['foot', 'fell', 'fastest']
>>> re.sub(r'(\b[a-z]+) \1', r'\1', 'cat in the the hat')
'cat in the hat'
```

如果只需要简单的功能，应该首先考虑字符串方法，因为它们非常简单，易于阅读和调试：

```python
>>> 'tea for too'.replace('too', 'two')
'tea for two'
```

## 数学

`math` 模块为浮点运算提供了对底层 C 函数库的访问：

```python
>>> import math
>>> math.cos(math.pi / 4)
0.70710678118654757
>>> math.log(1024, 2)
10.0
```

`random` 提供了生成随机数的工具：

```python
>>> import random
>>> random.choice(['apple', 'pear', 'banana'])
'apple'
>>> random.sample(range(100), 10)   # sampling without replacement
[30, 83, 16, 4, 8, 81, 41, 50, 18, 33]
>>> random.random()    # random float
0.17970987693706186
>>> random.randrange(6)    # random integer chosen from range(6)
4
```

## 访问互联网

有几个模块用于访问互联网以及处理网络通信协议。其中最简单的两个是 `urllib.request`（处理从 URL 获取数据）以及 `smtplib`（发送邮件）：

```python
>>> from urllib.request import urlopen
>>> for line in urlopen('http://tycho.usno.navy.mil/cgi-bin/timer.pl'):
...     line = line.decode('utf-8')  # Decoding the binary data to text.
...     if 'EST' in line or 'EDT' in line:  # look for Eastern Time
...         print(line)

<BR>Nov. 25, 09:43:32 PM EST

>>> import smtplib
>>> server = smtplib.SMTP('localhost')
>>> server.sendmail('soothsayer@example.org', 'jcaesar@example.org',
... """To: jcaesar@example.org
... From: soothsayer@example.org
...
... Beware the Ides of March.
... """)
>>> server.quit()
```

> 注意第二个例子需要本地有一个在运行的邮件服务器。

## 日期和时间

`datetime` 模块为日期和时间处理同时提供了简单和复杂的方法。支持日期和时间算法的同时，实现的重点放在更有效的处理和格式化输出。

```python
import datetime

# 获取当前日期和时间
current_datetime = datetime.datetime.now()
print(current_datetime)

# 获取当前日期
current_date = datetime.date.today()
print(current_date)

# 格式化日期
formatted_datetime = current_datetime.strftime("%Y-%m-%d %H:%M:%S")
print(formatted_datetime)  # 输出：2023-07-17 15:30:45
```

该模块还支持时区处理：

```python
>>> from datetime import date
>>> now = date.today()    # 当前日期
>>> now
datetime.date(2023, 7, 17)
>>> now.strftime("%m-%d-%y. %d %b %Y is a %A on the %d day of %B.")
'07-17-23. 17 Jul 2023 is a Monday on the 17 day of July.'

>>> # 创建了一个表示生日的日期对象
>>> birthday = date(1964, 7, 31)
>>> age = now - birthday   # 计算两个日期之间的时间差
>>> age.days             # 变量 age 的 days 属性，表示时间差的天数
21535
```

## 数据压缩

以下模块直接支持通用的数据打包和压缩格式：`zlib`、`gzip`、`bz2`、`zipfile` 以及 `tarfile`。

```python
>>> import zlib
>>> s = b'witch which has which witches wrist watch'
>>> len(s)
41
>>> t = zlib.compress(s)
>>> len(t)
37
>>> zlib.decompress(t)
b'witch which has which witches wrist watch'
>>> zlib.crc32(s)
226805979
```

## 性能度量

有些用户对了解解决同一问题的不同方法之间的性能差异很感兴趣。Python 提供了一个度量工具，为这些问题提供了直接答案。  
例如，使用元组封装和拆封来交换元素看起来要比使用传统的方法更诱人，`timeit` 证明了现代的方法更快一些。

```python
>>> from timeit import Timer
>>> Timer('t=a; a=b; b=t', 'a=1; b=2').timeit()
0.57535828626024577
>>> Timer('a,b = b,a', 'a=1; b=2').timeit()
0.54962537085770791
```

相对于 `timeit` 的细粒度，`profile` 和 `pstats` 模块提供了针对更大代码块的时间度量工具。

## 测试模块

开发高质量软件的方法之一是为每一个函数开发测试代码，并且在开发过程中经常进行测试。  
`doctest` 模块扫描模块并根据程序中内嵌的文档字符串执行测试。测试构造如同简单的将它的输出结果剪切并粘贴到文档字符串中。它通过用户提供的例子强化文档，并允许 doctest 模块确认代码的结果是否与文档一致：

```python
def average(values):
    """Computes the arithmetic mean of a list of numbers.

    >>> print(average([20, 30, 70]))
    40.0
    """
    return sum(values) / len(values)

import doctest
doctest.testmod()   # 自动验证嵌入测试
```

`unittest` 模块不像 `doctest` 模块那么容易使用，不过它可以在一个独立的文件里提供一个更全面的测试集：

```python
import unittest

class TestStatisticalFunctions(unittest.TestCase):

    def test_average(self):
        self.assertEqual(average([20, 30, 70]), 40.0)
        self.assertEqual(round(average([1, 5, 7]), 1), 4.3)
        self.assertRaises(ZeroDivisionError, average, [])
        self.assertRaises(TypeError, average, 20, 30, 70)

unittest.main()  # Calling from the command line invokes all tests
```

以上我们看到的只是 Python3 标准库中的一部分模块，还有很多其他模块可以在官方文档中查阅完整的标准库文档：[https://docs.python.org/zh-cn/3/library/index.html](https://docs.python.org/zh-cn/3/library/index.html)