## 自定义 Hook

> 本质上是一个函数，把`setup`函数中使用的 Composition API 进行了封装。 类似于 Vue 2.x 中的 mixin。

### 自定义 Hook 的优势

- **复用代码**：可以在多个组件之间复用状态逻辑。
- **让`setup`中的逻辑更清楚易懂**：通过将相关逻辑组织在自定义 Hook 中，使得`setup`函数更加简洁和可读。

```vue
<!-- Demo.vue 组件 -->
<template>
  <h2>当前求和为: {{ sum }}</h2>
  <hr />
  <h2>当前点击时鼠标的坐标为: x: {{ point.x }}, y: {{ point.y }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint";

export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let point = usePoint();
    return { sum, point };
  },
};
</script>
```

```js
// usePoint.js 钩子函数
import { reactive, onMounted, onBeforeUnmount } from "vue";

export default function () {
  // 实现鼠标“打点”相关的数据
  let point = reactive({
    x: 0,
    y: 0,
  });

  // 实现鼠标“打点”相关的方法
  function savePoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
    console.log(event.pageX, event.pageY);
  }

  // 实现鼠标“打点”相关的生命周期钩子
  onMounted(() => {
    window.addEventListener("click", savePoint);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });

  // return point;
  return point;
}
```
