# Python3 operator 模块
## 1. 背景说明

在 Python 2.x 版本中，可以使用 `cmp()` 函数比较两个列表、数字或字符串的大小关系。  
**Python 3.x 已移除 `cmp()` 函数**，若需实现比较功能，可引入 `operator` 模块，它适用于任何对象。

---

## 2. operator 模块的比较函数

`operator` 模块提供了一系列与 Python 内置比较运算符对应的函数。  
推荐使用无下划线的函数名（如 `lt`），但为了向后兼容也保留了带双下划线的版本（如 `__lt__`）。

| 运算符   | 函数式写法（推荐）       | 等效写法          |
|----------|--------------------------|-------------------|
| `<`      | `operator.lt(a, b)`      | `a < b`           |
| `<=`     | `operator.le(a, b)`      | `a <= b`          |
| `==`     | `operator.eq(a, b)`      | `a == b`          |
| `!=`     | `operator.ne(a, b)`      | `a != b`          |
| `>=`     | `operator.ge(a, b)`      | `a >= b`          |
| `>`      | `operator.gt(a, b)`      | `a > b`           |

> 对应的双下划线版本：`__lt__`, `__le__`, `__eq__`, `__ne__`, `__ge__`, `__gt__`。

### 示例：比较数字和字符串

```python
import operator

# 数字
x, y = 10, 20
print("x:", x, ", y:", y)
print("operator.lt(x,y):", operator.lt(x, y))   # True
print("operator.gt(y,x):", operator.gt(y, x))   # True
print("operator.eq(x,x):", operator.eq(x, x))   # True
print("operator.ne(y,y):", operator.ne(y, y))   # False
print("operator.le(x,y):", operator.le(x, y))   # True
print("operator.ge(y,x):", operator.ge(y, x))   # True

# 字符串
x, y = "Google", "Runoob"
print("x:", x, ", y:", y)
print("operator.lt(x,y):", operator.lt(x, y))   # True
print("operator.gt(y,x):", operator.gt(y, x))   # True
print("operator.eq(x,x):", operator.eq(x, x))   # True
print("operator.ne(y,y):", operator.ne(y, y))   # False
print("operator.le(x,y):", operator.le(x, y))   # True
print("operator.ge(y,x):", operator.ge(y, x))   # True

# 返回值类型
print("type(operator.lt(x,y)):", type(operator.lt(x, y)))  # <class 'bool'>
```

**输出结果：**

```
x: 10 , y: 20
operator.lt(x,y): True
operator.gt(y,x): True
operator.eq(x,x): True
operator.ne(y,y): False
operator.le(x,y): True
operator.ge(y,x): True

x: Google , y: Runoob
operator.lt(x,y): True
operator.gt(y,x): True
operator.eq(x,x): True
operator.ne(y,y): False
operator.le(x,y): True
operator.ge(y,x): True

type(operator.lt(x,y)): <class 'bool'>
```

### 示例：比较两个列表

```python
import operator

a = [1, 2]
b = [2, 3]
c = [2, 3]

print("operator.eq(a,b):", operator.eq(a, b))   # False
print("operator.eq(c,b):", operator.eq(c, b))   # True
```

**输出：**

```
operator.eq(a,b): False
operator.eq(c,b): True
```

---

## 3. 运算符函数（数学、逻辑、序列运算）

`operator` 模块还提供了一套与内置运算符对应的高效率函数。  
例如 `operator.add(x, y)` 等价于 `x + y`。

### 示例：加法、减法、乘法

```python
import operator

a, b = 4, 3

print("add() 结果:", operator.add(a, b))   # 7
print("sub() 结果:", operator.sub(a, b))   # 1
print("mul() 结果:", operator.mul(a, b))   # 12
```

**输出：**

```
add() 结果 :7
sub() 结果 :1
mul() 结果 :12
```

### 常用运算函数速查表

| 运算                 | 语法            | 函数                        |
| -------------------- | --------------- | --------------------------- |
| 加法                 | `a + b`         | `add(a, b)`                 |
| 字符串拼接           | `seq1 + seq2`   | `concat(seq1, seq2)`        |
| 包含检查             | `obj in seq`    | `contains(seq, obj)`        |
| 真除法               | `a / b`         | `truediv(a, b)`             |
| 整除                 | `a // b`        | `floordiv(a, b)`            |
| 按位与               | `a & b`         | `and_(a, b)`                |
| 按位异或             | `a ^ b`         | `xor(a, b)`                 |
| 按位取反             | `~a`            | `invert(a)`                 |
| 按位或               | `a \| b`        | `or_(a, b)`                 |
| 幂运算               | `a ** b`        | `pow(a, b)`                 |
| 身份比较（是）       | `a is b`        | `is_(a, b)`                 |
| 身份比较（不是）     | `a is not b`    | `is_not(a, b)`              |
| 索引赋值             | `obj[k] = v`    | `setitem(obj, k, v)`        |
| 索引删除             | `del obj[k]`    | `delitem(obj, k)`           |
| 索引取值             | `obj[k]`        | `getitem(obj, k)`           |
| 左移                 | `a << b`        | `lshift(a, b)`              |
| 取模                 | `a % b`         | `mod(a, b)`                 |
| 乘法                 | `a * b`         | `mul(a, b)`                 |
| 矩阵乘法             | `a @ b`         | `matmul(a, b)`              |
| 算术取反（负数）     | `-a`            | `neg(a)`                    |
| 逻辑取反（非）       | `not a`         | `not_(a)`                   |
| 正数（与`+a`相同）   | `+a`            | `pos(a)`                    |
| 右移                 | `a >> b`        | `rshift(a, b)`              |
| 切片赋值             | `seq[i:j] = v`  | `setitem(seq, slice(i, j), v)` |
| 切片删除             | `del seq[i:j]`  | `delitem(seq, slice(i, j))` |
| 切片取值             | `seq[i:j]`      | `getitem(seq, slice(i, j))` |
| 字符串格式化         | `s % obj`       | `mod(s, obj)`               |
| 减法                 | `a - b`         | `sub(a, b)`                 |
| 真值测试（布尔转换） | `bool(obj)`     | `truth(obj)`                |

---
