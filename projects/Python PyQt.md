# Python PyQt

## 1. 概述

**PyQt** 是一个强大的 Python 库，用于创建图形用户界面（GUI），可以用来代替 Python 内置的 Tkinter。它是 Qt 框架的 Python 绑定，广泛应用于桌面应用程序开发。Qt 是一个跨平台的 C++ 应用程序开发框架。

主要版本：
- PyQt4（基于 Qt4）
- PyQt5（基于 Qt5，最常用）
- PyQt6（基于 Qt6，最新）

---

## 2. 安装 PyQt

```bash
pip install PyQt5                  # 安装 PyQt5
pip install PyQt5-tools            # 可选，包含 Qt Designer 等工具
```

---

## 3. 第一个 PyQt 程序

### 3.1 创建空白窗口

```python
from PyQt5.QtWidgets import QApplication, QWidget

app = QApplication([])              # 创建应用实例
window = QWidget()                  # 创建主窗口
window.setWindowTitle("我的第一个 PyQt 程序")
window.setGeometry(100, 100, 400, 300)   # (x, y, width, height)
window.show()                       # 显示窗口
app.exec_()                         # 启动事件循环
```

**代码解析**：
- `QApplication`：管理 GUI 应用程序的控制流和主设置。
- `QWidget`：最基本的窗口类，所有 UI 组件都继承自它。
- `setWindowTitle()`：设置窗口标题。
- `setGeometry()`：设置窗口位置和大小。
- `show()`：显示窗口。
- `app.exec_()`：启动事件循环，等待用户交互。

### 3.2 带按钮的主窗口

```python
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("我的第一个PyQt应用")
        self.setGeometry(100, 100, 400, 300)

        self.button = QPushButton("点击我", self)
        self.button.setGeometry(150, 150, 100, 30)
        self.button.clicked.connect(self.button_clicked)

    def button_clicked(self):
        print("按钮被点击了!")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec_())
```

一个典型的 PyQt 应用程序包含：
- `QApplication` 实例
- 窗口和控件
- 事件循环
- 事件处理器（槽函数）

---

## 4. 常用 PyQt 组件

### 4.1 按钮（QPushButton）

```python
from PyQt5.QtWidgets import QPushButton

button = QPushButton("点击我", window)
button.move(150, 150)      # 设置按钮位置
```

### 4.2 标签（QLabel）

```python
from PyQt5.QtWidgets import QLabel

label = QLabel("Hello PyQt!", window)
label.move(100, 100)
```

### 4.3 文本框（QLineEdit）

```python
from PyQt5.QtWidgets import QLineEdit

textbox = QLineEdit(window)
textbox.move(100, 50)
```

> 更多组件参考：[PyQt 组件教程](https://www.runoob.com/python3/python-pyqt-widgets.html)

---

## 5. 布局管理（以 QVBoxLayout 为例）

使用布局管理器可以自动调整组件位置，避免硬编码坐标。

```python
from PyQt5.QtWidgets import QVBoxLayout, QLabel, QLineEdit, QPushButton

layout = QVBoxLayout()
layout.addWidget(QLabel("用户名"))
layout.addWidget(QLineEdit())
layout.addWidget(QPushButton("登录"))
window.setLayout(layout)
```

> 更多布局参考：[PyQt 布局管理](https://www.runoob.com/python3/python-pyqt-layout.html)

---

## 6. 信号与槽机制

PyQt 使用**信号（Signal）**和**槽（Slot）**机制处理事件。信号在特定事件发生时发出，槽是响应信号的函数或方法。

### 6.1 基本连接

```python
from PyQt5.QtWidgets import QPushButton

def on_button_click():
    print("按钮被点击了！")

button = QPushButton("点击我", window)
button.clicked.connect(on_button_click)   # 连接信号和槽
```

### 6.2 自定义信号

```python
from PyQt5.QtCore import pyqtSignal, QObject

class MyEmitter(QObject):
    my_signal = pyqtSignal(str)           # 定义信号，携带字符串参数

emitter = MyEmitter()
emitter.my_signal.connect(lambda x: print(f"收到信号: {x}"))
emitter.my_signal.emit("Hello")           # 触发信号
```

> 更多信号与槽参考：[PyQt 信号与槽](https://www.runoob.com/python3/python-pyqt-signals-and-slots.html)

---

## 7. 使用 Qt Designer

Qt Designer 是一个可视化设计工具，可以拖放组件来设计界面。

1. 启动 Designer：通常位于 Python 安装目录下的 `Lib\site-packages\qt5_applications\Qt\bin`。
2. 设计界面，保存为 `.ui` 文件。
3. 将 `.ui` 文件转换为 Python 代码：

   ```bash
   pyuic5 input.ui -o output.py
   ```

4. 在代码中加载生成的界面：

```python
from PyQt5 import uic
import sys

Form, Window = uic.loadUiType("output.ui")

app = QApplication(sys.argv)
window = Window()
form = Form()
form.setupUi(window)
window.show()
sys.exit(app.exec_())
```

---

## 8. 实战：简易记事本

```python
import sys
from PyQt5.QtWidgets import (QApplication, QMainWindow, QTextEdit,
                             QAction, QFileDialog, QMessageBox)

class Notepad(QMainWindow):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.text_edit = QTextEdit(self)
        self.setCentralWidget(self.text_edit)

        self.create_actions()
        self.create_menus()

        self.setWindowTitle('简易记事本')
        self.setGeometry(100, 100, 800, 600)

    def create_actions(self):
        # 文件菜单动作
        self.new_action = QAction('新建', self)
        self.new_action.setShortcut('Ctrl+N')
        self.new_action.triggered.connect(self.new_file)

        self.open_action = QAction('打开', self)
        self.open_action.setShortcut('Ctrl+O')
        self.open_action.triggered.connect(self.open_file)

        self.save_action = QAction('保存', self)
        self.save_action.setShortcut('Ctrl+S')
        self.save_action.triggered.connect(self.save_file)

        self.exit_action = QAction('退出', self)
        self.exit_action.setShortcut('Ctrl+Q')
        self.exit_action.triggered.connect(self.close)

        # 编辑菜单动作
        self.copy_action = QAction('复制', self)
        self.copy_action.setShortcut('Ctrl+C')
        self.copy_action.triggered.connect(self.text_edit.copy)

        self.paste_action = QAction('粘贴', self)
        self.paste_action.setShortcut('Ctrl+V')
        self.paste_action.triggered.connect(self.text_edit.paste)

        self.cut_action = QAction('剪切', self)
        self.cut_action.setShortcut('Ctrl+X')
        self.cut_action.triggered.connect(self.text_edit.cut)

    def create_menus(self):
        menubar = self.menuBar()
        # 文件菜单
        file_menu = menubar.addMenu('文件')
        file_menu.addAction(self.new_action)
        file_menu.addAction(self.open_action)
        file_menu.addAction(self.save_action)
        file_menu.addSeparator()
        file_menu.addAction(self.exit_action)
        # 编辑菜单
        edit_menu = menubar.addMenu('编辑')
        edit_menu.addAction(self.copy_action)
        edit_menu.addAction(self.paste_action)
        edit_menu.addAction(self.cut_action)

    def new_file(self):
        self.text_edit.clear()

    def open_file(self):
        filename, _ = QFileDialog.getOpenFileName(self, '打开文件')
        if filename:
            try:
                with open(filename, 'r') as f:
                    self.text_edit.setText(f.read())
            except Exception as e:
                QMessageBox.warning(self, '错误', f'无法打开文件: {e}')

    def save_file(self):
        filename, _ = QFileDialog.getSaveFileName(self, '保存文件')
        if filename:
            try:
                with open(filename, 'w') as f:
                    f.write(self.text_edit.toPlainText())
            except Exception as e:
                QMessageBox.warning(self, '错误', f'无法保存文件: {e}')

if __name__ == '__main__':
    app = QApplication(sys.argv)
    notepad = Notepad()
    notepad.show()
    sys.exit(app.exec_())
```

---

## 9. 核心组件速查表

大多数组件位于 `PyQt5.QtWidgets`。高级功能（如多媒体、网络）可能需要其他模块（`QtCore`, `QtGui`, `QtNetwork` 等）。

| 组件类别       | 组件名称               | 说明                                     |
| -------------- | ---------------------- | ---------------------------------------- |
| **基础窗口**   | `QWidget`              | 所有 UI 对象的基类                       |
|                | `QMainWindow`          | 主窗口框架（含菜单栏、工具栏、状态栏）   |
|                | `QDialog`              | 对话框基类                               |
| **布局管理**   | `QVBoxLayout`          | 垂直布局                                 |
|                | `QHBoxLayout`          | 水平布局                                 |
|                | `QGridLayout`          | 网格布局                                 |
|                | `QFormLayout`          | 表单布局（标签+输入框对）                |
| **按钮类**     | `QPushButton`          | 普通按钮                                 |
|                | `QRadioButton`         | 单选按钮                                 |
|                | `QCheckBox`            | 复选框                                   |
|                | `QToolButton`          | 工具栏按钮（可带图标）                   |
| **输入控件**   | `QLineEdit`            | 单行文本输入框                           |
|                | `QTextEdit`            | 多行富文本编辑器（支持 HTML）            |
|                | `QPlainTextEdit`       | 多行纯文本编辑器                         |
|                | `QSpinBox`             | 整数数字调节框                           |
|                | `QDoubleSpinBox`       | 浮点数数字调节框                         |
|                | `QComboBox`            | 下拉选择框                               |
|                | `QDateEdit` / `QTimeEdit` / `QDateTimeEdit` | 日期/时间选择框                |
|                | `QSlider`              | 滑动条                                   |
|                | `QDial`                | 圆形旋钮控件                             |
| **显示控件**   | `QLabel`               | 文本/图片标签                            |
|                | `QLCDNumber`           | LCD 数字显示屏                           |
|                | `QProgressBar`         | 进度条                                   |
|                | `QStatusBar`           | 状态栏（常用于 QMainWindow）             |
| **容器类**     | `QGroupBox`            | 分组框（带标题的容器）                   |
|                | `QTabWidget`           | 标签页容器                               |
|                | `QStackedWidget`       | 堆叠容器（每次显示一个子控件）           |
|                | `QScrollArea`          | 滚动区域容器                             |
|                | `QMdiArea`             | MDI（多文档界面）区域                    |
| **列表/表格/树** | `QListWidget`         | 列表控件（含项管理）                     |
|                | `QTreeWidget`          | 树形控件                                 |
|                | `QTableWidget`         | 表格控件                                 |
|                | `QListView` / `QTableView` / `QTreeView` | 需搭配数据模型，灵活性更高 |
| **菜单/工具栏** | `QMenuBar`            | 菜单栏                                   |
|                | `QMenu`                | 菜单                                     |
|                | `QToolBar`             | 工具栏                                   |
|                | `QAction`              | 动作（用于菜单项、工具栏按钮等）         |
| **对话框**     | `QFileDialog`          | 文件选择对话框                           |
|                | `QColorDialog`         | 颜色选择对话框                           |
|                | `QFontDialog`          | 字体选择对话框                           |
|                | `QInputDialog`         | 输入对话框（文本、数字等）               |
|                | `QMessageBox`          | 消息提示框（警告、错误、询问等）         |
| **图形视图**   | `QGraphicsView` / `QGraphicsScene` | 用于 2D 图形绘制            |
| **其他功能**   | `QCalendarWidget`      | 日历控件                                 |
|                | `QSplashScreen`        | 启动画面                                 |
|                | `QSystemTrayIcon`      | 系统托盘图标                             |
|                | `QWebEngineView`       | 网页浏览器组件（需安装 `PyQtWebEngine`） |

> 安装扩展：`pip install PyQtWebEngine`（网页支持），`pip install PyQtChart`（图表支持）。

---
