## 侦听器 watch 与 watchEffect

> 在 Vue 3 中，`watch` 和 `watchEffect` 是用于响应式侦听的 API，它们允许你对响应式数据的变化做出反应。

### `watchEffect`

> `watchEffect` 侦听器在被创建时立即执行，并在其依赖的响应式数据变化时重新执行。任何 someReactiveSource 或 anotherReactiveSource 的变化都会触发回调函数的重新执行。

#### 基本用法

```js
import { watchEffect } from "vue";

watchEffect(() => {
  const result = someReactiveSource.value * anotherReactiveSource.value;
  console.log(result);
});
```

#### 特点

1. 自动追踪依赖：watchEffect 会自动追踪其回调函数中用到的响应式数据。
2. 立即执行：watchEffect 创建时会立即执行一次回调函数。
3. 无参访问：回调函数内部无法访问侦听的数据变化。

### watch

> watch 侦听器用于更精细的侦听，允许你指定具体的数据源和选项。

```js
import { watch } from "vue";

watch(
  () => source,
  (newValue, oldValue) => {
    console.log(`值从 ${oldValue} 改变到 ${newValue}`);
  }
);
```

#### 特点

1. 明确侦听：你可以指定一个或多个具体的响应式数据源进行侦听。
2. 深入侦听：通过传递选项，可以深入侦听到对象的每个属性。
3. 访问变化数据：回调函数提供了新旧值，以及侦听的数据变化。

```vue
<script setup>
import { ref, watch } from "vue";

const state = ref(0);

watch(state, (newValue, oldValue) => {
  console.log(`新值：${newValue}, 旧值：${oldValue}`);
});

// 深入侦听一个对象
const stateObject = ref({ count: 0 });

watch(
  () => stateObject.value.count,
  (newValue, oldValue) => {
    console.log(`计数变化：从 ${oldValue} 到 ${newValue}`);
  },
  {
    deep: true,
  }
);
</script>

<template>
  <button @click="state.value++">增加</button>
  <button @click="stateObject.value.count++">计数增加</button>
</template>
```

### 选择 watch 还是 watchEffect？

1. 如果你只需要执行副作用而不需要获取新旧值，使用 watchEffect。
2. 如果你需要获取变化的数据或者执行更复杂的逻辑，使用 watch。
3. watchEffect 更适合用于组件的初始化或全局状态的侦听。
4. watch 更适合用于细粒度的侦听，例如表单数据的验证。

### 注意事项

1. 避免在 watchEffect 中进行重计算或高成本操作，因为它会无条件地重新执行。
2. 使用 watch 时，合理利用 immediate 选项来决定是否在侦听开始时立即触发回调。
3. 考虑使用 deep 选项来侦听复杂数据结构的深层变化。
