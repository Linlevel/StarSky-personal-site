
# Python math 模块

提供标准数学函数，返回浮点数（除非另有说明）。复数使用 `cmath`。

### 常用常量

- `math.pi` (3.1415...)
- `math.e` (2.7182...)
- `math.tau` (2π)
- `math.inf`, `math.nan`

### 常用函数

| 类别         | 函数示例                              |
|--------------|---------------------------------------|
| 幂与对数     | `sqrt(x)`, `pow(x,y)`, `log(x)`, `exp(x)` |
| 取整         | `ceil(x)`, `floor(x)`, `trunc(x)`     |
| 三角函数     | `sin(x)`, `cos(x)`, `tan(x)`, `asin(x)` |
| 双曲函数     | `sinh(x)`, `cosh(x)`, `tanh(x)`       |
| 角度转换     | `degrees(x)`, `radians(x)`            |
| 组合与阶乘   | `factorial(x)`, `comb(n,k)`, `perm(n,k)` |
| 距离与范数   | `hypot(x,y)`, `dist(p,q)`             |
| 特殊函数     | `erf(x)`, `gamma(x)`, `lgamma(x)`     |
| 最大公约数等 | `gcd(a,b)`, `lcm(*integers)`          |

### 示例

```python
import math
print(math.sqrt(16))       # 4.0
print(math.sin(math.pi/2)) # 1.0
print(math.comb(5,2))      # 10
```

> 部分函数需 Python 3.8+ 或更高版本。

---
