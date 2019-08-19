---
title: 快速上手
---

# 快速上手
## 添加 CSS 样式 
使用本框架前，请在 CSS 中开启 border-box
```
*,*::before,*::after{box-sizing: border-box;}
```
IE 8 及以上浏览器都支持此样式。
## 引入Button组件
```
import {Button,Icon} from 'lei-gulu-1'
import 'lei-gulu-1/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```
## 使用
```
  <g-button>按钮</g-button>
  <g-button icon="setting">按钮</g-button>
```