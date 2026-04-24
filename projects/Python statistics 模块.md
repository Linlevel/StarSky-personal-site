# Python statistics 模块

## 1. 概述

`statistics` 是 Python 内置的模块，专门用于处理基本的统计计算，如均值、中位数、方差、标准差等。在数据分析和科学计算中非常实用。

使用前需先导入：

```python
import statistics
```

查看模块内容：

```python
>>> import statistics
>>> dir(statistics)
```

输出包含 `mean`, `median`, `mode`, `variance`, `stdev` 等常用函数。

---

## 2. 常用统计函数

### 2.1 均值（Mean）

`mean(data)` 返回数据集的算术平均值。

```python
import statistics

data = [1, 2, 3, 4, 5]
mean_value = statistics.mean(data)
print("均值:", mean_value)   # 均值: 3
```

### 2.2 中位数（Median）

`median(data)` 返回数据的中位数。若数据个数为偶数，则返回中间两个数的平均值。

```python
data = [1, 2, 3, 4, 5]
median_value = statistics.median(data)
print("中位数:", median_value)   # 中位数: 3

data_even = [1, 2, 3, 4]
median_even = statistics.median(data_even)
print("中位数（偶数个）:", median_even)   # 中位数（偶数个）: 2.5
```

### 2.3 众数（Mode）

`mode(data)` 返回数据集中出现频率最高的值。若无重复值，抛出 `StatisticsError`。

```python
data = [1, 2, 2, 3, 4]
mode_value = statistics.mode(data)
print("众数:", mode_value)   # 众数: 2
```

### 2.4 方差（Variance）

`variance(data)` 计算样本方差（分母为 n-1）。

```python
data = [1, 2, 3, 4, 5]
variance_value = statistics.variance(data)
print("方差:", variance_value)   # 方差: 2.5
```

### 2.5 标准差（Standard Deviation）

`stdev(data)` 计算样本标准差（方差的平方根）。

```python
stdev_value = statistics.stdev(data)
print("标准差:", stdev_value)   # 标准差: 1.5811388300841898
```

### 2.6 调和平均数（Harmonic Mean）

`harmonic_mean(data)` 适用于速率等场景。

```python
data = [1, 2, 4]
harmonic_mean_value = statistics.harmonic_mean(data)
print("调和平均数:", harmonic_mean_value)   # 1.7142857142857142
```

### 2.7 几何平均数（Geometric Mean）

`geometric_mean(data)` 用于计算增长率或比例的平均数。

```python
geometric_mean_value = statistics.geometric_mean(data)
print("几何平均数:", geometric_mean_value)   # 2.0
```

---

## 3. 其他实用函数

### 3.1 低位中位数与高位中位数

- `median_low(data)`：返回低位中位数（偶数个数据时取较小的中间值）。
- `median_high(data)`：返回高位中位数（偶数个数据时取较大的中间值）。

```python
data = [1, 2, 3, 4]
median_low_value = statistics.median_low(data)
median_high_value = statistics.median_high(data)
print("中位数低:", median_low_value)   # 2
print("中位数高:", median_high_value)  # 3
```

### 3.2 分位数（Quantiles）

`quantiles(data, n=4)` 将数据集分成 `n` 等份，返回分位数列表。默认 `n=4` 即为四分位数。

```python
data = [1, 2, 3, 4, 5]
quantiles_value = statistics.quantiles(data, n=4)
print("四分位数:", quantiles_value)   # [1.5, 3.0, 4.5]
```

---

## 4. 函数速查表

| 函数                           | 描述                                     |
| ------------------------------ | ---------------------------------------- |
| `mean(data)`                   | 算术平均值                               |
| `median(data)`                 | 中位数                                   |
| `median_low(data)`             | 低位中位数                               |
| `median_high(data)`            | 高位中位数                               |
| `median_grouped(data, interval=1)` | 分组中位数（适用于分组数据）          |
| `mode(data)`                   | 众数                                     |
| `multimode(data)`              | 返回所有众数的列表                       |
| `variance(data)`               | 样本方差（分母 n-1）                     |
| `stdev(data)`                  | 样本标准差                               |
| `pvariance(data)`              | 总体方差（分母 n）                       |
| `pstdev(data)`                 | 总体标准差                               |
| `harmonic_mean(data)`          | 调和平均数                               |
| `geometric_mean(data)`         | 几何平均数                               |
| `quantiles(data, n=4)`         | 分位数（默认四分位数）                   |

> 注意：对于总体方差/标准差，使用 `pvariance` / `pstdev`；对于样本，使用 `variance` / `stdev`。

---
