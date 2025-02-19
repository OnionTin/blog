## Suspense

> `Suspense` 是 React 的一个特性，它允许你在组件加载过程中显示一个备用内容（fallback）。这通常用于异步组件的加载，比如通过 `React.lazy` 动态导入的组件。

### 特点

- **显示加载状态**：在组件加载过程中展示备用内容，提高用户体验。
- **嵌套使用**：可以在多个层级中使用，以控制更细粒度的加载状态。

### 使用方法

1. **包裹懒加载组件**：

```jsx
import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

2. **错误处理**：
   > Suspense 也可以用来处理异步加载过程中的错误。

```jsx
<Suspense fallback={<div>Failed to load</div>}>
  <AsyncComponent />
</Suspense>
```

3. **与 useTransition 结合**：
   > 在 React Router 中，Suspense 可以与 useTransition 结合使用，以实现更平滑的路由切换体验。

```jsx
import { Suspense, lazy, useTransition } from "react";

const [isPending, startTransition] = useTransition();

startTransition(() => {
  lazy(() => import("./SomeComponent"));
});

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SomeComponent />
    </Suspense>
  );
}
```

### 注意事项

1. 多个根节点问题：确保 Suspense 的 fallback 属性只有一个根节点。
2. 数据加载：Suspense 无法检测在 Effect 或事件处理程序中获取数据的情况。
3. 代码分割：确保正确使用 React.lazy 和动态导入，以实现代码分割。

### Vue 3 的 Suspense

> Vue 3 也引入了 Suspense 作为实验性功能，用于处理异步组件的加载状态。

1. **包裹异步组件**：

```vue
<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const AsyncComponent = defineAsyncComponent(() =>
  import("./AsyncComponent.vue")
);
</script>
```

2. **错误处理**：

```vue
<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>Failed to load component.</div>
    </template>
  </Suspense>
</template>
```
