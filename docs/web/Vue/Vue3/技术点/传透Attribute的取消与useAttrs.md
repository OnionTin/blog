## 传透 Attribute 的取消与 useAttrs

> 在 Vue 3 中，组件可以接收来自父组件的附加属性（称为“透传 Attributes”），这些属性没有在子组件的 `props` 中声明。Vue 3 提供了几种处理这些透传属性的方法。

### 透传 Attributes

> 透传 Attributes 是指那些传递给组件但没有被声明为 `props` 或 `emits` 的 attribute 或 `v-on` 事件监听器。最常见的例子包括 `class`、`style` 和 `id`。

#### 单个根节点

> 当组件以单个元素为根节点时，透传的 attribute 会自动应用到该根元素上。

```vue
<!-- 子组件模板 -->
<template>
  <button>Click Me</button>
</template>

<!-- 父组件模板 -->
<template>
  <my-button class="large" />
</template>
<!-- 渲染结果： -->
<button class="large">Click Me</button>
```

#### 禁用属性透传

> 在某些情况下，你可能希望禁用属性透传。这可以通过在子组件的 `inheritAttrs` 选项中设置 `false` 来实现。

```vue
<!-- 子组件模板 -->
<template>
  <button>Click Me</button>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<!-- 父组件模板 -->
<template>
  <my-button class="large" />
</template>
<!-- 渲染结果： -->
<button>Click Me</button>
```

#### 多根节点

> 对于有多个根节点的组件，Vue 不会自动透传 attribute。如果未显式绑定 $attrs，Vue 会发出警告。

```vue
<template>
  <header>...</header>
  <main v-bind="$attrs">...</main>
  <footer>...</footer>
</template>
```

### useAttrs

> Vue 3 引入了 useAttrs API，允许你在 &lt;script setup&gt; 中访问透传的 attribute。

#### 使用 useAttrs

```vue
<script setup>
import { useAttrs } from "vue";
const attrs = useAttrs();
</script>
```

> 在非 &lt;script setup&gt; 环境中，attrs 会作为 setup() 函数的上下文参数提供。这样，所有透传的 attribute 都会被应用到 &lt;div&gt; 上。

```vue
<script setup>
import { useAttrs } from "vue";
const attrs = useAttrs();
</script>

<template>
  <div v-bind="attrs">自定义内容</div>
</template>
```

### 注意事项

1. attrs 对象不是响应式的，不能用于设置数据监听。
2. 如果需要响应性，应使用 props。
3. 可以使用 onUpdated 生命周期钩子来在每次更新时执行副作用。
