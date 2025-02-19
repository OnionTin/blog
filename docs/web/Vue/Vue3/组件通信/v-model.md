## v-model

使用 `v-model`：在 Vue 3 中，可以使用 `v-model` 指令将数据双向绑定到父组件和子组件。

```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <h1>v-model:钱数{{ money }}{{ pageNo }}{{ pageSize }}</h1>
    <input type="text" v-model="info" />
    <hr />
    <!-- props:父亲给儿子数据 -->
    <!-- <Child :modelValue="money" @update:modelValue="handler"></Child> -->
    <!-- 
       v-model组件身上使用
       第一:相当有给子组件传递props[modelValue] = 10000
       第二:相当于给子组件绑定自定义事件update:modelValue
     -->
    <Child v-model="money"></Child>
    <hr />
    <Child1 v-model:pageNo="pageNo" v-model:pageSize="pageSize"></Child1>
  </div>
</template>

<script setup lang="ts">
//v-model指令:收集表单数据,数据双向绑定
//v-model也可以实现组件之间的通信,实现父子组件数据同步的业务
//父亲给子组件数据 props
//子组件给父组件数据 自定义事件
//引入子组件
import Child from "./Child.vue";
import Child1 from "./Child1.vue";
import { ref } from "vue";
let info = ref("");
//父组件的数据钱数
let money = ref(10000);
//自定义事件的回调
const handler = (num) => {
  //将来接受子组件传递过来的数据
  money.value = num;
};

//父亲的数据
let pageNo = ref(1);
let pageSize = ref(3);
</script>

<!-- Child.vue -->
<template>
  <div class="child">
    <h3>钱数:{{ modelValue }}</h3>
    <button @click="handler">父子组件数据同步</button>
  </div>
</template>
<script setup lang="ts">
//接受props
let props = defineProps(["modelValue"]);
let $emit = defineEmits(["update:modelValue"]);
//子组件内部按钮的点击回调
const handler = () => {
  //触发自定义事件
  $emit("update:modelValue", props.modelValue + 1000);
};
</script>

<!-- Child1.vue -->
<template>
  <div class="child2">
    <h1>同时绑定多个v-model</h1>
    <button @click="handler">pageNo{{ pageNo }}</button>
    <button @click="$emit('update:pageSize', pageSize + 4)">
      pageSize{{ pageSize }}
    </button>
  </div>
</template>
<script setup lang="ts">
let props = defineProps(["pageNo", "pageSize"]);
let $emit = defineEmits(["update:pageNo", "update:pageSize"]);
//第一个按钮的事件回调
const handler = () => {
  $emit("update:pageNo", props.pageNo + 3);
};
</script>
```
