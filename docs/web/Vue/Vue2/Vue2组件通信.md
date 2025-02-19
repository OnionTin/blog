## Vue2 组件通信

在 Vue 2 中，组件之间的通信方式主要有以下几种：

1. `使用自定义事件`：通过在父组件中定义一个事件，子组件可以触发该事件并传递数据到父组件。父组件通过监听该事件，接收子组件传递的数据。

例如：

```html
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent @message="handleMessage" />
  </div>
</template>

<script>
  import ChildComponent from "./ChildComponent.vue";

  export default {
    components: {
      ChildComponent,
    },
    methods: {
      handleMessage(data) {
        console.log("Message received:", data);
      },
    },
  };
</script>
```

```html
<!-- ChildComponent.vue -->
<template>
  <button @click="sendMessage">Send Message</button>
</template>

<script>
  export default {
    methods: {
      sendMessage() {
        this.$emit("message", "Hello from child component!");
      },
    },
  };
</script>
```

2. `使用 props`：父组件通过在子组件上绑定属性，将数据传递给子组件。子组件通过 props 选项接收这些数据。

例如：

```html
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent :message="parentMessage" />
  </div>
</template>

<script>
  import ChildComponent from "./ChildComponent.vue";

  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        parentMessage: "Hello from parent component!",
      };
    },
  };
</script>
```

```html
<!-- ChildComponent.vue -->
<template>
  <div>{{ message }}</div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        required: true,
      },
    },
  };
</script>
```

3. `使用 v-bind 指令`：在子组件上使用 v-bind 指令，将数据绑定到父组件的某个属性上。

例如：

```html
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent :data="parentData" />
  </div>
</template>

<script>
  import ChildComponent from "./ChildComponent.vue";

  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        parentData: "Hello from parent component!",
      };
    },
  };
</script>
```

```html
<!-- ChildComponent.vue -->
<template>
  <div>{{ data }}</div>
</template>

<script>
  export default {
    props: {
      data: {
        type: String,
        required: true,
      },
    },
  };
</script>
```

4. `$parent、$children、$root、$refs`

5. `使用 vuex 进行组件间数据的通信`

6. `引入第三方插件 pubsub 进行发布订阅`

以上就是 Vue 2 中组件通信的几种方式。在实际项目中，可以根据需求选择合适的方式来实现组件之间的通信。
