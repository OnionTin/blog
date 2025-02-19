## 响应式基础 ref 与 reactive

> 响应式系统是使用 Proxy 实现的，它提供了更细粒度的响应式控制。Vue 3 引入了 ref 和 reactive 两个 API 来创建响应式数据。

### ref

ref 用于将一个普通的 JavaScript 值转换为响应式值。它主要用于处理基础类型数据（如字符串、数字等）。当在模板中使用 ref 时，Vue 会自动解包.value，所以你可以直接使用 count 而不是 count.value。

```js
import { ref } from "vue";

const count = ref(0); // 创建一个响应式的数字
console.log(count.value); // 输出 0

count.value++; // 修改响应式数据
console.log(count.value); // 输出 1
```

### reactive

reactive 用于将一个 JavaScript 对象转换为响应式对象。它接受一个普通对象并返回该对象的响应式代理。reactive 返回的对象是原对象的响应式代理，它包含原对象的所有属性和方法，但不是原对象本身。

```js
import { reactive } from "vue";

const state = reactive({
  count: 0,
  name: "Vue",
});

console.log(state.count); // 输出 0
console.log(state.name); // 输出 'Vue'

state.count++; // 修改响应式对象的属性
console.log(state.count); // 输出 1
```

### 注意事项

1. 不要直接修改 ref 或 reactive 对象的.value 属性，因为这会破坏其响应性。
2. 使用 ref 和 reactive 时，Vue 3 的响应式系统会自动追踪依赖和变更，无需手动操作。
3. 在组件内部，通常使用 setup 函数来定义响应式数据。

### 使用场景

1. 使用 ref 来处理单个数据项，如状态标志、计数器等。
2. 使用 reactive 来处理复杂的数据结构，如对象或数组。
