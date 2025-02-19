## 条件渲染(v-if 与 v-for 的优先级)

> v-if 和 v-for 都是常用的指令，用于条件渲染和列表渲染。它们在使用时有明确的优先级规则:
>
> v-for 有比 v-if 更高的优先级。
>
> 当 v-if 和 v-for 同时出现在同一个元素上时，v-for 会被首先处理。

### 为什么 v-for 优先级更高？

> Vue 官方文档中提到，这是为了优化性能。因为 v-for 创建的每个节点都会执行 v-if，如果 v-if 在 v-for 之前解析，那么它将多次运行，这会降低效率。所以 Vue 设计为先进行 v-for 循环，然后对每个循环项应用 v-if 条件。
> v-for: 首先遍历 items 数组，为每个元素创建一个&lt;li&gt;元素。
> v-if: 然后对每个生成的&lt;li&gt;元素应用 v-if 条件，只有当 item.isVisible 为 true 时，该元素才会被渲染。

```html
<template>
  <ul>
    <li v-for="item in items" v-if="item.isVisible">{{ item.text }}</li>
  </ul>
</template>
```

### 性能考虑

> 如果需要根据某些条件过滤掉一些不需要的项，并且这些项在渲染后不会影响 DOM 结构，那么可以在 v-for 之前使用计算属性或方法来过滤数据，这样可以减少 DOM 操作，提高性能。filteredItems 是一个计算属性，它只包含 isVisible 为 true 的项。然后 v-for 遍历 filteredItems 进行渲染，这样避免了对每个项都执行 v-if 条件判断。

```html
<template>
  <ul>
    <li v-for="item in filteredItems" :key="item.id">{{ item.text }}</li>
  </ul>
</template>

<script>
  import { computed } from "vue";

  export default {
    data() {
      return {
        items: [
          { id: 1, text: "Item 1", isVisible: true },
          { id: 2, text: "Item 2", isVisible: false },
        ],
      };
    },
    computed: {
      filteredItems() {
        return this.items.filter((item) => item.isVisible);
      },
    },
  };
</script>
```
