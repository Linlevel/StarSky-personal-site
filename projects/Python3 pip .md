# Python3 pip 

## 1. pip 简介

**pip** 是 Python 包管理工具，提供对 Python 包的查找、下载、安装、卸载等功能。  
软件包可以在 [PyPI](https://pypi.org/) 上找到。

> 注意：Python 2.7.9+ 或 Python 3.4+ 以上版本默认已自带 pip。

若未安装，请参考：[Python pip 安装与使用](https://www.runoob.com/w3cnote/python-pip-install-usage.html)。

---

## 2. 常用 pip 命令

### 检查 pip 是否已安装

```bash
pip --version
```

### 安装软件包

```bash
pip install some-package-name
```

示例：安装 `numpy`

```bash
pip install numpy
```

### 卸载软件包

```bash
pip uninstall some-package-name
```

示例：卸载 `numpy`

```bash
pip uninstall numpy
```

### 查看已安装的软件包列表

```bash
pip list
```

---

## 3. 导出与重建环境配置

### 导出当前环境的包列表到文件

```bash
pip freeze > requirements.txt
```

该命令会在当前目录生成 `requirements.txt` 文件，内容包含所有已安装包及其版本信息。

### 根据 `requirements.txt` 重建环境

```bash
pip install -r requirements.txt
```

可根据文件中列出的包及版本信息，批量安装所需的包，从而重建相同的 Python 环境。

---

## 4. 扩展内容：Anaconda 介绍

**Anaconda** 是一个集成的数据科学与机器学习环境，包含了 Python 解释器以及大量常用的数据科学库和工具。

- Anaconda 使用 `conda` 命令管理包、依赖项和环境。
- 与传统的 `pip` 相比，`conda` 可以更方便地在不同环境之间切换，环境管理更简单。

> 详细内容请参考：[Anaconda 教程](https://www.runoob.com/anaconda/anaconda-tutorial.html)。

---
