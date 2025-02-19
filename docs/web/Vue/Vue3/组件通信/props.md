## props

Vue 3 中组件之间的通信方式有以下几种：

使用 `props`：与 Vue 2 中的用法类似，父组件通过在子组件上绑定属性，将数据传递给子组件。子组件通过 props 选项接收这些数据。

例如：

```vue
<!-- ParentComponent.vue -->
<template>
  <div class="box">
    <h1>props:我是父组件曹操</h1>
    <hr />
    <Child info="我是曹操" :money="money"></Child>
  </div>
</template>

<script setup lang="ts">
//props:可以实现父子组件通信,props数据还是只读的！！！
import Child from "./Child.vue";
import { ref } from "vue";
let money = ref(10000);
</script>

<!-- ChildComponent.vue -->
<template>
  <div class="son">
    <h1>我是子组件:曹植</h1>
    <p>{{ props.info }}</p>
    <p>{{ props.money }}</p>
    <!--props可以省略前面的名字--->
    <p>{{ info }}</p>
    <p>{{ money }}</p>
    <button @click="updateProps">修改props数据</button>
  </div>
</template>

<script setup lang="ts">
//需要使用到defineProps方法去接受父组件传递过来的数据
//defineProps是Vue3提供方法,不需要引入直接使用
let props = defineProps(["info", "money"]); //数组|对象写法都可以
//按钮点击的回调
const updateProps = () => {
  // props.money+=10;  props:只读的
  console.log(props.info);
};
</script>
```
