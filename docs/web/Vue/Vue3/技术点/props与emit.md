## props 与 emit

> 在 Vue 3 中，组件之间的通信是非常重要的，尤其是父子组件之间的数据传递。`props` 和 `emit` 是实现这种通信的两个核心机制。

### ## Props

> `props` 是父组件向子组件传递数据的一种方式。在 Vue 3 中，你可以使用 `defineProps` 来定义组件接收的 `props`。

#### 定义 Props

> 在 Vue 3 中，你可以通过 `defineProps` 辅助函数来定义组件接收的 Props。

```js
import { defineProps } from "vue";

const props = defineProps({
  message: String,
  count: Number,
  user: {
    type: Object,
    required: true,
  },
});
```

#### 传递 Props

> 在父组件中，你可以通过在子组件标签上使用 `v-bind` 或简写为 `:` 来传递 Props。

```vue
<template>
  <ChildComponent :message="greeting" :count="times" :user="userObj" />
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      greeting: "Hello",
      times: 3,
      userObj: { name: "Alice" },
    };
  },
};
</script>
```

### Emit

> emit 是子组件向父组件发送消息的一种方式。

#### 使用 defineEmits

> 在 Vue 3 的 setup() 函数中，你可以使用 defineEmits 函数来定义要发出的自定义事件。

```js
import { defineComponent, defineEmits } from "vue";

export default defineComponent({
  setup() {
    const emit = defineEmits(["customEvent"]);

    const handleClick = () => {
      emit("customEvent", "Hello from child!");
    };

    return {
      handleClick,
    };
  },
  template: `
    <button @click="handleClick">Click me</button>
  `,
});
```

#### 在父组件中监听事件

> 你可以使用 v-on 指令（或简写为 @）来监听子组件发出的自定义事件。

```vue
<template>
  <div>
    <ChildComponent @customEvent="handleCustomEvent" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  methods: {
    handleCustomEvent(message) {
      console.log(message); // 输出: Hello from child!
    },
  },
};
</script>
```

### 注意事项

1. 不要直接修改 Props：虽然 Vue 允许在子组件内部访问到 Props 的原始引用，但是按照 Vue 的最佳实践，你应该避免直接修改 Props。
2. 动态 Props：如果需要根据条件传递不同的 Props，可以使用计算属性来动态地决定传递的值。
3. Prop 的类型和验证：尽量使用类型注解来提高代码的可读性和可维护性，并且通过验证器来确保 Props 的合法性。
