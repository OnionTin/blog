## slot

使用插槽：在 Vue 3 中，作用域插槽就是可以传递数据的插槽,子组件可以讲数据回传给父组件,父组件可以决定这些回传的。

```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <h1>slot</h1>
    <Test1 :todos="todos">
      <template v-slot="{ $row, $index }">
        <p :style="{ color: $row.done ? 'green' : 'red' }">
          {{ $row.title }}--{{ $index }}
        </p>
      </template>
    </Test1>
    <Test>
      <div>
        <pre>大江东去浪淘尽,千古分流人物</pre>
      </div>
      <!-- 具名插槽填充a -->
      <template #a>
        <div>我是填充具名插槽a位置结构</div>
      </template>
      <!-- 具名插槽填充b v-slot指令可以简化为# -->
      <template #b>
        <div>我是填充具名插槽b位置结构</div>
      </template>
    </Test>
  </div>
</template>

<script setup lang="ts">
import Test from "./Test.vue";
import Test1 from "./Test1.vue";
//插槽:默认插槽、具名插槽、作用域插槽
//作用域插槽:就是可以传递数据的插槽,子组件可以讲数据回传给父组件,父组件可以决定这些回传的
//数据是以何种结构或者外观在子组件内部去展示！！！
import { ref } from "vue";
//todos数据
let todos = ref([
  { id: 1, title: "吃饭", done: true },
  { id: 2, title: "睡觉", done: false },
  { id: 3, title: "打豆豆", done: true },
  { id: 4, title: "打游戏", done: false },
]);
</script>

<!-- Test.vue -->
<template>
  <div class="box">
    <h1>我是子组件默认插槽</h1>
    <!-- 默认插槽 -->
    <slot></slot>
    <h1>我是子组件默认插槽</h1>
    <h1>具名插槽填充数据</h1>
    <slot name="a"></slot>
    <h1>具名插槽填充数据</h1>
    <h1>具名插槽填充数据</h1>
    <slot name="b"></slot>
    <h1>具名插槽填充数据</h1>
  </div>
</template>
<script setup lang="ts"></script>

<!-- Test1.vue -->
<template>
  <div class="box">
    <h1>作用域插槽</h1>
    <ul>
      <li v-for="(item, index) in todos" :key="item.id">
        <!--作用域插槽:可以讲数据回传给父组件-->
        <slot :$row="item" :$index="index"></slot>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
//通过props接受父组件传递数据
defineProps(["todos"]);
</script>
```
