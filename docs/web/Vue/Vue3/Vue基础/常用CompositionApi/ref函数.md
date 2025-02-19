# ref 函数

> 定义一个响应式的数据。包含响应式数据的引用对象（reference 对象，简称 ref 对象）。

- **备注**:
  - 接收的数据可以是基本类型，也可以是对象类型。
  - 基本类型的数据: 响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
  - 对象类型的数据: 内部“求助”了 Vue 3.0 中的一个新函数`reactive`函数。

```vue
<template>
  <!-- 不需要`.value`，直接使用 -->
  <div>{{ xxx }}</div>
</template>
<script setup>
const xxx = ref(initValue);
xxx.value = newValue;
</script>
```
