# Vue3 中异步组件的使用

### 作用

等待异步组件时渲染一些额外内容，让应用有更好的用户体验。

### 使用步骤

1. **异步引入组件**
   ```javascript
   import { defineAsyncComponent } from "vue";
   const Child = defineAsyncComponent(() => import("./components/Child.vue"));
   ```
2. **使用 Suspense 包裹组件，并配置好 default 与 fallback**

```vue
<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中.....</h3>
      </template>
    </Suspense>
  </div>
</template>
```
