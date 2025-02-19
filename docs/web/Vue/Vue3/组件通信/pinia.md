## pinia

pinia 写法:选择器 API、组合式 API

例如：

```ts
/**store/index.ts**/

//创建大仓库
import { createPinia } from "pinia";
//createPinia方法可以用于创建大仓库
let store = createPinia();
//对外暴露,安装仓库
export default store;
```

```ts
/**store/modules/info.ts**/

//定义info小仓库
import { defineStore } from "pinia";
//第一个仓库:小仓库名字  第二个参数:小仓库配置对象
//defineStore方法执行会返回一个函数,函数作用就是让组件可以获取到仓库数据
let useInfoStore = defineStore("info", {
  //存储数据:state
  state: () => {
    return {
      count: 99,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  actions: {
    //注意:函数没有context上下文对象
    //没有commit、没有mutations去修改数据
    updateNum(a: number, b: number) {
      this.count += a;
    },
  },
  getters: {
    total() {
      let result: any = this.arr.reduce((prev: number, next: number) => {
        return prev + next;
      }, 0);
      return result;
    },
  },
});
//对外暴露方法
export default useInfoStore;
```

```ts
/**store/modules/todo.ts**/

//定义组合式API仓库
import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
//创建小仓库
let useTodoStore = defineStore("todo", () => {
  let todos = ref([
    { id: 1, title: "吃饭" },
    { id: 2, title: "睡觉" },
    { id: 3, title: "打豆豆" },
  ]);
  let arr = ref([1, 2, 3, 4, 5]);

  const total = computed(() => {
    return arr.value.reduce((prev, next) => {
      return prev + next;
    }, 0);
  });
  //务必要返回一个对象:属性与方法可以提供给组件使用
  return {
    todos,
    arr,
    total,
    updateTodo() {
      todos.value.push({ id: 4, title: "组合式API方法" });
    },
  };
});

export default useTodoStore;
```

```html
<!-- ParentComponent.vue -->
<template>
  <div class="box">
    <h1>pinia</h1>
    <div class="container">
      <Child></Child>
      <Child1></Child1>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Child from "./Child.vue";
  import Child1 from "./Child1.vue";
  //vuex:集中式管理状态容器,可以实现任意组件之间通信！！！
  //核心概念:state、mutations、actions、getters、modules

  //pinia:集中式管理状态容器,可以实现任意组件之间通信！！！
  //核心概念:state、actions、getters
  //pinia写法:选择器API、组合式API
</script>
```

```html
<!-- ChildComponent.vue -->
<template>
  <div class="child">
    <h1>{{ infoStore.count }}---{{infoStore.total}}</h1>
    <button @click="updateCount">点击我修改仓库数据</button>
  </div>
</template>

<script setup lang="ts">
  import useInfoStore from "../../store/modules/info";
  //获取小仓库对象
  let infoStore = useInfoStore();
  console.log(infoStore);
  //修改数据方法
  const updateCount = () => {
    //仓库调用自身的方法去修改仓库的数据
    infoStore.updateNum(66, 77);
  };
</script>
```

```html
<!-- Child1.vue -->
<template>
  <div class="child1">
    {{ infoStore.count }}
    <p @click="updateTodo">{{ todoStore.arr }}{{todoStore.total}}</p>
  </div>
</template>

<script setup lang="ts">
  import useInfoStore from "../../store/modules/info";
  //获取小仓库对象
  let infoStore = useInfoStore();

  //引入组合式API函数仓库
  import useTodoStore from "../../store/modules/todo";
  let todoStore = useTodoStore();

  //点击p段落去修改仓库的数据
  const updateTodo = () => {
    todoStore.updateTodo();
  };
</script>
```
