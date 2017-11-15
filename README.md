### VuePlugins
> lqqppl

将常用的vue插件进行简单封装。

用法 直接引入到 main.js 中使用


```js
import validate from './plugins/validate.js'
Vue.use(validate);

```


#### validate 输入验证

```html
<input type="text" v-validate:phone="userphone" v-model = "userphone" class="form-control">
```
v-validate 后可选参数  ["phone","email","name","number",'password'] 可自己添加名称及对应 正则
