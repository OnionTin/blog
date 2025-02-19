## provide 与 inject

provide(提供)与 inject(注入)：Vue3 提供 provide(提供)与 inject(注入),可以实现隔辈组件传递数据。

```vue
<!-- ParentComponent.vue -->
<template>
  <div class="box">
    <h1>Provide与Inject{{ car }}</h1>
    <hr />
    <Child></Child>
  </div>
</template>
<script setup lang="ts">
import Child from "./Child.vue";
//vue3提供provide(提供)与inject(注入),可以实现隔辈组件传递数据
import { ref, provide } from "vue";
let car = ref("法拉利");
//祖先组件给后代组件提供数据
//两个参数:第一个参数就是提供的数据key
//第二个参数:祖先组件提供数据
provide("TOKEN", car);
</script>

<!-- Child.vue -->
<template>
  <div class="child">
    <h1>我是子组件1</h1>
    <Child></Child>
  </div>
</template>
<script setup lang="ts">
import Child from "./GrandChild.vue";
</script>

<!-- GrandChild.vue -->
<template>
  <div class="child1">
    <h1>孙子组件</h1>
    <p>{{ car }}</p>
    <button @click="updateCar">更新数据</button>
  </div>
</template>
<script setup lang="ts">
import { inject } from "vue";
//注入祖先组件提供数据
//需要参数:即为祖先提供数据的key
let car = inject("TOKEN");
const updateCar = () => {
  car.value = "自行车";
};
</script>
```
