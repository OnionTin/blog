## useAttrs

使用 `useAttrs`：Vue3 提供一个方法 useAttrs 方法,它可以获取组件身上的属性与事件。

```vue
<template>
  <div>
    <h1>useAttrs</h1>
    <el-button type="primary" size="small" :icon="Edit"></el-button>
    <!-- 自定义组件 -->
    <HintButton
      type="primary"
      size="small"
      :icon="Edit"
      title="编辑按钮"
      @click="handler"
      @xxx="handler"
    ></HintButton>
  </div>
</template>
<script setup lang="ts">
//vue3框架提供一个方法useAttrs方法,它可以获取组件身上的属性与事件！！！
//图标组件
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
import HintButton from "./HintButton.vue";
//按钮点击的回调
const handler = () => {
  alert(12306);
};
</script>

<!-- HintButton.vue -->
<template>
  <div :title="title">
    <el-button :="$attrs"></el-button>
  </div>
</template>
<script setup lang="ts">
//引入useAttrs方法:获取组件标签身上属性与事件
import { useAttrs } from "vue";
//此方法执行会返回一个对象
let $attrs = useAttrs();
//万一用props接受title
let props = defineProps(["title"]);
//props与useAttrs方法都可以获取父组件传递过来的属性与属性值
//但是props接受了useAttrs方法就获取不到了
console.log($attrs);
</script>
```
