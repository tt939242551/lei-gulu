# gulu:我的UI组件仓库
[![Build Status](https://travis-ci.org/tt939242551/vue-gulu.svg?branch=master)](https://travis-ci.org/tt939242551/vue-gulu)
 作者: 徐磊

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用
添加 CSS 样式 使用本框架前，请在 CSS 中开启 border-box
*,*::before,*::after{box-sizing: border-box;}
IE 8 及以上浏览器都支持此样式。



## 安装 
```
yarn add lei-gulu-1
```
```
npm install --save lei-gulu-1
```
### 引入 gulu
```
import {Button, ButtonGroup, Icon} from 'lei-gulu-test-1'
import 'lei-gulu-test-1/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```
####提问
####变更记录
####联系方式
####贡献代码