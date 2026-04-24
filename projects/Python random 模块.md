# Python random 模块

## 1. 概述

`random` 模块用于生成随机数，实现了多种分布的伪随机数生成器。使用前需先导入：

```python
import random
```

查看模块内容：

```python
>>> import random
>>> dir(random)
```

---

## 2. 基础随机数生成：`random()`

`random.random()` 返回一个在半开区间 `[0.0, 1.0)` 内的随机浮点数（包含 0，不包含 1）。

```python
import random
print(random.random())   # 例如：0.4784904215869241
```

---

## 3. 设置随机种子：`seed()`

`seed()` 方法用于初始化随机数生成器的种子。相同种子产生的随机序列相同。

```python
import random

random.seed()                     # 默认使用系统时间
print(random.random())

random.seed(10)                   # 整数种子
print(random.random())

random.seed("hello", 2)           # 字符串种子（版本2）
print(random.random())
```

**输出示例：**

```
使用默认种子生成随机数： 0.7908102856355441
使用整数 10 种子生成随机数： 0.5714025946899135
使用字符串种子生成随机数： 0.3537754404730722
```

---

## 4. 常用方法一览

| 方法                                                          | 描述                                                                                   |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `seed(a=None, version=2)`                                    | 初始化随机数生成器                                                                     |
| `getstate()`                                                 | 返回捕获生成器当前内部状态的对象                                                       |
| `setstate(state)`                                            | 恢复生成器的内部状态                                                                   |
| `getrandbits(k)`                                             | 返回具有 `k` 个随机比特位的非负整数                                                     |
| `randrange(start, stop[, step])`                             | 从 `range(start, stop, step)` 中随机选择一个元素                                        |
| `randint(a, b)`                                              | 返回随机整数 `N`，满足 `a <= N <= b`                                                    |
| `choice(seq)`                                                | 从非空序列 `seq` 中返回一个随机元素                                                     |
| `choices(population, weights=None, *, cum_weights=None, k=1)`| 从 `population` 中有放回地抽取 `k` 个元素，返回列表                                    |
| `shuffle(x[, random])`                                       | 将序列 `x` 随机打乱位置                                                                 |
| `sample(population, k, *, counts=None)`                      | 从总体中无放回地抽取 `k` 个唯一元素，返回列表                                          |
| `random()`                                                   | 返回 `[0.0, 1.0)` 范围内的随机浮点数                                                    |
| `uniform(a, b)`                                              | 返回一个随机浮点数 `N`，当 `a <= b` 时 `a <= N <= b`，否则 `b <= N <= a`                |
| `triangular(low, high, mode)`                                | 三角分布，返回 `low <= N <= high` 的随机浮点数，可指定 `mode` 峰值位置                  |
| `betavariate(alpha, beta)`                                   | Beta 分布，条件 `alpha > 0` 且 `beta > 0`，返回值范围 `[0, 1]`                          |
| `expovariate(lambd)`                                         | 指数分布，`lambd` 为 1.0 除以期望值，非零                                               |
| `gammavariate(alpha, beta)`                                  | Gamma 分布，条件 `alpha > 0` 且 `beta > 0`                                              |
| `gauss(mu, sigma)`                                           | 高斯分布（正态分布），`mu` 均值，`sigma` 标准差                                         |
| `lognormvariate(mu, sigma)`                                  | 对数正态分布，取自然对数后服从均值 `mu` 标准差 `sigma` 的正态分布                       |
| `normalvariate(mu, sigma)`                                   | 正态分布                                                                               |
| `vonmisesvariate(mu, kappa)`                                 | 冯·米塞斯分布，`mu` 平均角度（弧度，0~2π），`kappa >= 0` 浓度参数                       |
| `paretovariate(alpha)`                                       | 帕累托分布，`alpha` 形状参数                                                            |
| `weibullvariate(alpha, beta)`                                | 威布尔分布，`alpha` 比例参数，`beta` 形状参数                                          |

---

## 5. 使用示例

### 生成整数：`randint` 与 `randrange`

```python
print(random.randint(1, 10))    # 1 到 10 之间的随机整数（包含两端）
print(random.randrange(0, 100, 5))  # 0~100 之间 5 的倍数
```

### 随机选择：`choice` 与 `choices`

```python
fruits = ['apple', 'banana', 'cherry']
print(random.choice(fruits))                     # 单个随机元素
print(random.choices(fruits, weights=[5, 3, 2], k=4))  # 有放回抽取4个
```

### 随机打乱顺序：`shuffle`

```python
items = [1, 2, 3, 4, 5]
random.shuffle(items)
print(items)   # 顺序已随机打乱
```

### 无放回抽样：`sample`

```python
numbers = list(range(50))
sample = random.sample(numbers, 5)   # 从 0~49 中抽取 5 个不重复的数
print(sample)
```

### 生成随机浮点数：`uniform` 与 `triangular`

```python
print(random.uniform(2.5, 10.0))        # 2.5 <= N <= 10.0
print(random.triangular(0, 10, 5))      # 三角分布，峰值在 5
```

---
