## ref 与$parent

使用 ref 与$parent：在 Vue 3 中，ref可以获取真实的DOM节点,可以获取到子组件实例VC,$parent:可以在子组件内部获取到父组件的实例。

```vue
<!-- ParentComponent.vue -->
<template>
  <div class="box">
    <h1>我是父亲曹操:{{ money }}</h1>
    <button @click="handler">找我的儿子曹植借10元</button>
    <hr />
    <Son ref="son"></Son>
    <hr />
    <Dau></Dau>
  </div>
</template>
<script setup lang="ts">
//ref:可以获取真实的DOM节点,可以获取到子组件实例VC
//$parent:可以在子组件内部获取到父组件的实例
//引入子组件
import Son from "./Son.vue";
import Dau from "./Daughter.vue";
import { ref } from "vue";
//父组件钱数
let money = ref(100000000);
//获取子组件的实例
let son = ref();
//父组件内部按钮点击回调
const handler = () => {
  money.value += 10;
  //儿子钱数减去10
  son.value.money -= 10;
  son.value.fly();
};
//对外暴露
defineExpose({
  money,
});
</script>

<!-- Son.vue -->
<template>
  <div class="son">
    <h3>我是子组件:曹植{{ money }}</h3>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
//儿子钱数
let money = ref(666);
const fly = () => {
  console.log("我可以飞");
};
//组件内部数据对外关闭的，别人不能访问
//如果想让外部访问需要通过defineExpose方法对外暴露
defineExpose({
  money,
  fly,
});
</script>

<!-- Daughter.vue -->
<template>
  <div class="dau">
    <h1>我是闺女曹杰{{ money }}</h1>
    <button @click="handler($parent)">点击我爸爸给我10000元</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
//闺女钱数
let money = ref(999999);
//闺女按钮点击回调
const handler = ($parent) => {
  money.value += 10000;
  $parent.money -= 10000;
};
</script>
```
