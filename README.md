# vue_learn
此项目意在快速记录vue3的基础功能，弱化底层强调实战。
## 1 开始
`const app = Vue.createApp();` 创建vue app；
`app.mount(_SELECTOR_);` 通过选择器挂载app;

## 2 VUE操控DOM
> 以下项目：[basics-01-starting-code](basics-01-starting-code)
### 差值语法  
用于innerText。
### v-bind  绑定属性
用于Attribute。
> 以下项目：[basics-03-events-starting-code](basics-03-events-starting-code)
### v-on 事件监听
> `v-on`：https://cn.vuejs.org/api/built-in-directives.html#v-on  
> 事件处理：https://cn.vuejs.org/guide/essentials/event-handling.html
- `v-on:click`
  - `v-on:click.right` 鼠标右键点击，可替换为`left`、`middle`
- `v-on:input`
- `v-on:submit.prevent` 阻止默认事件，submit可以替换为其他事件
- `v-on:keyup.enter` 键盘事件，`keyup`和`enter`可替换


