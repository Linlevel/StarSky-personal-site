# Python pyecharts 模块

## 1. 简介

`pyecharts` 是一个基于 ECharts 的 Python 数据可视化库，允许用户使用 Python 生成各种交互式图表。  
ECharts 是一个使用 JavaScript 实现的开源可视化库，`pyecharts` 是其 Python 封装，使得在 Python 中使用 ECharts 更加方便。

**主要特点**：

- **简单易用**：直观友好的 API，快速上手。
- **图表类型丰富**：支持折线图、柱状图、散点图、饼图、地图等。
- **支持主流数据格式**：列表、字典、Pandas DataFrame 等。
- **交互性**：支持鼠标悬停、缩放等交互。
- **丰富的配置选项**：可自定义样式、布局等。
- **支持主题**：内置多种主题，可切换。

---

## 2. 安装

### 使用 pip 安装

```bash
pip install pyecharts
```

### 源码安装

```bash
git clone https://github.com/pyecharts/pyecharts.git
cd pyecharts
pip install -r requirements.txt
python setup.py install
```

### 查看版本

```python
import pyecharts
print(pyecharts.__version__)   # 例如 2.0.4
```

---

## 3. 支持的图表类型及导入

| 图表类型     | pyecharts 类   | 导入示例                                          |
|--------------|----------------|---------------------------------------------------|
| 折线图       | `Line`         | `from pyecharts.charts import Line`              |
| 柱状图       | `Bar`          | `from pyecharts.charts import Bar`               |
| 散点图       | `Scatter`      | `from pyecharts.charts import Scatter`           |
| 饼图         | `Pie`          | `from pyecharts.charts import Pie`               |
| 雷达图       | `Radar`        | `from pyecharts.charts import Radar`             |
| 热力图       | `HeatMap`      | `from pyecharts.charts import HeatMap`           |
| K 线图       | `Kline`        | `from pyecharts.charts import Kline`             |
| 箱线图       | `Boxplot`      | `from pyecharts.charts import Boxplot`           |
| 地图         | `Map`          | `from pyecharts.charts import Map`               |
| 词云图       | `WordCloud`    | `from pyecharts.charts import WordCloud`         |
| 仪表盘       | `Gauge`        | `from pyecharts.charts import Gauge`             |
| 漏斗图       | `Funnel`       | `from pyecharts.charts import Funnel`            |
| 树图         | `Tree`         | `from pyecharts.charts import Tree`              |
| 平行坐标系图 | `Parallel`     | `from pyecharts.charts import Parallel`          |
| 桑基图       | `Sankey`       | `from pyecharts.charts import Sankey`            |
| 地理坐标系图 | `Geo`          | `from pyecharts.charts import Geo`               |
| 时间线图     | `Timeline`     | `from pyecharts.charts import Timeline`          |
| 3D 散点图    | `Scatter3D`    | `from pyecharts.charts import Scatter3D`         |
| 3D 柱状图    | `Bar3D`        | `from pyecharts.charts import Bar3D`             |
| 3D 曲面图    | `Surface3D`    | `from pyecharts.charts import Surface3D`         |

---

## 4. 创建第一个图表（柱状图）

```python
from pyecharts.charts import Bar

# 准备数据
x_data = ['一月', '二月', '三月', '四月', '五月']
y_data = [10, 20, 15, 25, 30]

# 创建柱状图对象
bar_chart = Bar()
bar_chart.add_xaxis(x_data)
bar_chart.add_yaxis("销售额", y_data)

# 渲染为 HTML 文件（默认 render.html）
bar_chart.render()
```

- 不指定路径时，默认生成 `render.html`。
- 可指定路径：`bar_chart.render("my_bar_chart.html")`。

---

## 5. 设置图表配置选项

使用 `set_global_opts` 配置全局选项（标题、坐标轴名称等）。

```python
from pyecharts import options as opts
from pyecharts.charts import Bar

x_data = ['一月', '二月', '三月', '四月', '五月']
y_data = [10, 20, 15, 25, 30]

bar_chart = Bar()
bar_chart.add_xaxis(x_data)
bar_chart.add_yaxis("销售额", y_data)

bar_chart.set_global_opts(
    title_opts=opts.TitleOpts(title="月度销售额柱状图"),
    xaxis_opts=opts.AxisOpts(name="月份"),
    yaxis_opts=opts.AxisOpts(name="销售额（万元）"),
)

bar_chart.render("bar_chart.html")
```

---

## 6. 使用主题

`pyecharts` 内置多种主题，通过 `ThemeType` 指定。

```python
from pyecharts import options as opts
from pyecharts.charts import Bar
from pyecharts.globals import ThemeType

x_data = ['一月', '二月', '三月', '四月', '五月']
y_data = [10, 20, 15, 25, 30]

# 创建时指定初始主题
bar_chart = Bar(init_opts=opts.InitOpts(theme=ThemeType.LIGHT))
bar_chart.add_xaxis(x_data)
bar_chart.add_yaxis("销售额", y_data)

bar_chart.set_global_opts(
    title_opts=opts.TitleOpts(title="月度销售额柱状图"),
    xaxis_opts=opts.AxisOpts(name="月份"),
    yaxis_opts=opts.AxisOpts(name="销售额（万元）"),
)

# 也可以动态切换主题（保存在 set_global_opts 中）
bar_chart.set_global_opts(theme=ThemeType.DARK)

bar_chart.render("themed_bar_chart.html")
```

**常用主题**：

- 亮色系：`LIGHT`, `WESTEROS`, `CHALK`, `ESSOS`, `INFOGRAPHIC`, `MACARONS`
- 暗色系：`DARK`, `PURPLE-PASSION`, `SHINE`, `VINTAGE`, `ROMA`, `WALDEN`

---

## 7. 全局配置项示例

`set_global_opts` 支持多个常用配置项：

```python
bar_chart.set_global_opts(
    title_opts=opts.TitleOpts(title="主标题", subtitle="副标题"),
    xaxis_opts=opts.AxisOpts(name="月份"),
    yaxis_opts=opts.AxisOpts(name="销售额（万元）"),
    legend_opts=opts.LegendOpts(pos_left="center", pos_top="top"),
    toolbox_opts=opts.ToolboxOpts(),
    tooltip_opts=opts.TooltipOpts(trigger="axis", axis_pointer_type="cross"),
)
```

- `title_opts`：标题配置
- `xaxis_opts` / `yaxis_opts`：坐标轴配置
- `legend_opts`：图例位置及样式
- `toolbox_opts`：工具箱（保存图片、数据视图等）
- `tooltip_opts`：提示框配置

---

## 8. 完整示例（带全局配置）

```python
from pyecharts import options as opts
from pyecharts.charts import Bar

x_data = ['一月', '二月', '三月', '四月', '五月']
y_data = [10, 20, 15, 25, 30]

bar_chart = Bar()
bar_chart.add_xaxis(x_data)
bar_chart.add_yaxis("销售额", y_data)

bar_chart.set_global_opts(
    title_opts=opts.TitleOpts(title="月度销售额柱状图", subtitle="副标题"),
    xaxis_opts=opts.AxisOpts(name="月份"),
    yaxis_opts=opts.AxisOpts(name="销售额（万元）"),
    legend_opts=opts.LegendOpts(pos_left="center", pos_top="top"),
    toolbox_opts=opts.ToolboxOpts(),
    tooltip_opts=opts.TooltipOpts(trigger="axis", axis_pointer_type="cross"),
)

bar_chart.render("global_options_bar_chart.html")
```

生成的图表将保存在 `global_options_bar_chart.html`，可在浏览器中查看交互效果。

---
