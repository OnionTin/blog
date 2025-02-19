## setup 函数

> Vue3.0 中一个新的配置项，值为一个函数。setup 是所有 Composition API(组合 API)“表演的舞台”。组件中所用到的:数据、方法等等，均要配置在 setup 中。

### setup 函数的两种返回值:

1. 若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用。(重点关注!)
2. 若返回一个渲染函数，则可定义渲染内容。(了解)

### 注意点:

1. **尽量不要与 Vue2.x 配置混用**

   - Vue2.x 配置(data、methods、computed...)中可以访问到 setup 中的属性、方法。
   - 但在 setup 中不能访问到 Vue2.x 配置(data、methods、computed...)。
   - 如果有重名，setup 优先。

2. setup 不能是一个 async 函数，因为返回值不再是 return 的对象，而是 promise，模板看不到 return 对象中的属性。

```vue
<template>
  <h1>一个人的信息</h1>
  <h2>姓名: {{ name }}</h2>
  <h2>年龄: {{ age }}</h2>
</template>

<script>
export default {
  name: "App",
  setup() {
    // 数据
    let name = "张三";
    let age = 18;

    // 返回一个对象(常用)
    return {
      name,
      age,
      sayHello,
      test2,
      a,
    };
    // 返回一个渲染函数
    // return () => h('h1', '尚硅谷')
  },
};
</script>
```

### setup 的两个注意点

#### setup 执行的时机

- 在`beforeCreate`之前执行一次，`this`是`undefined`。

#### setup 的参数

- **props**: 值为对象，包含组件外部传递过来，且组件内部声明接收了的属性。
- **context**: 上下文对象
  - **attrs**: 值为对象，包含组件外部传递过来，但没有在`props`配置中声明的属性，相当于`this.$attrs`。
  - **slots**: 收到的插槽内容，相当于`this.$slots`。
  - **emit**: 分发自定义事件的函数，相当于`this.$emit`。

```vue
<!-- App.vue -->
<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="尚硅谷">
    <template v-slot:qwe>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo";

export default {
  components: { Demo },
  name: "App",
  setup() {
    function showHelloMsg(value) {
      console.log(value);
    }
  },
};
</script>

<!-- Demo.vue -->
<template>
  <h1>一个人的信息</h1>
  <h2>姓名: {{ person.name }}</h2>
  <h2>年龄: {{ person.age }}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Demo",
  props: ["msg", "school"],
  emits: ["hello"],
  setup(props, context) {
    // console.log('---setup---', props)
    console.log("---setup---", context);
    // console.log('---setup---', context.attrs) // 详单与Vue2中的$attrs
    // console.log('---setup---', context.emit) // 触发自定义事件的
    console.log("---setup---", context.slots); // 触发自定义事件的

    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
    });

    // 方法
    function test() {
      context.emit("hello", 666);
    }

    return {
      person,
      test,
    };
  },
};
</script>
```
