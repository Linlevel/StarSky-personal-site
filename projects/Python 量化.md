# Python 量化

## 1. 什么是 Python 量化？

**Python 量化**是指利用 Python 编程语言以及相关库和工具，进行金融市场数据分析、策略开发和交易执行的过程。  
Python 凭借其简洁、易学、强大的生态系统和丰富的金融库，成为量化交易的首选编程语言之一。

量化交易在金融领域广泛应用，允许交易者通过系统化的方法制定和执行交易策略，提高交易效率和决策的科学性。  
量化主要是通过数学和统计学的方法，利用计算机技术对金融市场进行量化分析，从而制定交易策略。

> 更多内容可参考：[Python 量化交易](https://www.runoob.com/python3/python-quantitative-trading.html)。

---

## 2. 简单实例：移动平均策略

本例使用**移动平均交叉策略**，基于雅虎金融数据，演示基本的量化分析流程。  
策略思想：通过比较短期移动平均线（如 50 日均线）与长期移动平均线（如 200 日均线）生成买入/卖出信号。

### 2.1 安装所需包

```bash
pip install pandas yfinance matplotlib
```

- **pandas**：数据处理和分析库  
- **yfinance**：从 Yahoo Finance 获取金融数据  
- **matplotlib**：数据可视化绘图库  

### 2.2 获取历史股票数据

```python
import yfinance as yf

symbol = "600519.SS"          # 贵州茅台股票代码
start_date = "2022-01-01"
end_date = "2023-01-01"

data = yf.download(symbol, start=start_date, end=end_date)
print(data.head())
```

**输出示例：**

```
                  Open         High          Low        Close    Adj Close   Volume
Date                                                                               
2022-01-04  2055.00000  2068.949951  2014.000000  2051.229980  1973.508057  3384262
2022-01-05  2045.00000  2065.000000  2018.000000  2024.000000  1947.309937  2839551
...
```

### 2.3 简单的数据分析和可视化

```python
import yfinance as yf
import pandas as pd
import matplotlib.pyplot as plt

symbol = "600519.SS"
start_date = "2022-01-01"
end_date = "2023-01-01"

data = yf.download(symbol, start=start_date, end=end_date)

# 描述性统计
print(data.describe())

# 绘制收盘价走势图
data['Close'].plot(figsize=(10, 6), label=symbol)
plt.title(f"{symbol} Stock Price")
plt.xlabel("Date")
plt.ylabel("Price")
plt.legend()
plt.show()
```

执行后会显示统计信息，并弹出一个股价走势图。

---

## 3. 移动平均交叉策略回测

**回测**是指在历史市场数据上模拟和评估交易策略的过程。  
本例策略规则：
- 当 **50 日均线**上穿 **200 日均线**时，产生买入信号（持仓 +1）
- 当 50 日均线下穿 200 日均线时，产生卖出信号（持仓 -1）

策略表现输出：总收益、年化收益、最大回撤等指标，并绘制累计收益曲线。

```python
import yfinance as yf
import pandas as pd
import matplotlib.pyplot as plt

symbol = "600519.SS"
start_date = "2021-01-01"
end_date = "2023-01-01"

data = yf.download(symbol, start=start_date, end=end_date)

# 计算移动平均线
data['SMA_50'] = data['Close'].rolling(window=50).mean()
data['SMA_200'] = data['Close'].rolling(window=200).mean()

# 初始化信号列
data['Signal'] = 0

# 生成交叉信号：1 表示买入/持有多头，-1 表示卖出/空仓
data.loc[data['SMA_50'] > data['SMA_200'], 'Signal'] = 1
data.loc[data['SMA_50'] < data['SMA_200'], 'Signal'] = -1

# 计算每日收益率
data['Daily_Return'] = data['Close'].pct_change()

# 策略收益率（shift(1) 避免未来数据偏差）
data['Strategy_Return'] = data['Signal'].shift(1) * data['Daily_Return']

# 累计收益
data['Cumulative_Return'] = (1 + data['Strategy_Return']).cumprod()

# 计算策略表现指标
strategy_performance = {
    'Total Return': data['Cumulative_Return'].iloc[-1] - 1,
    'Annualized Return': (data['Cumulative_Return'].iloc[-1] ** (252 / len(data))) - 1,
    'Max Drawdown': (data['Cumulative_Return'] / data['Cumulative_Return'].cummax() - 1).min(),
}

print("策略表现:")
for key, value in strategy_performance.items():
    print(f"{key}: {value:.4f}")

# 绘制累计收益曲线（对比策略与股票本身）
plt.figure(figsize=(10, 6))
plt.plot(data['Cumulative_Return'], label='Strategy Cumulative Return', color='b')
plt.plot(data['Close'] / data['Close'].iloc[0], label='Stock Cumulative Return', color='g')
plt.title("Cumulative Return of Strategy vs. Stock")
plt.xlabel("Date")
plt.ylabel("Cumulative Return")
plt.legend()
plt.show()
```

**输出示例**（策略表现）：

```
策略表现:
Total Return: 0.1523
Annualized Return: 0.0746
Max Drawdown: -0.2134
```

同时会显示一条累计收益对比曲线图。

---

