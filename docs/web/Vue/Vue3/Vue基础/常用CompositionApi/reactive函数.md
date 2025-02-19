## reactive 函数

> 定义一个对象类型的响应式数据(基本类型不要用它,要用 ref 函数)；reactive 定义的响应式数据是“深层次的”。内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。

```vue
<!-- 接收一个对象（或数组），返回一个代理对象（Proxy 的实例对象，简称 proxy 对象） -->
const 代理对象 = reactive(源对象)
```

```vue
<template>
  <h1>一个人的信息</h1>
  <h2>姓名: {{ person.name }}</h2>
  <h2>年龄: {{ person.age }}</h2>
  <h3>工作种类: {{ person.job.type }}</h3>
  <h3>工作薪水: {{ person.job.salary }}</h3>
  <h3>爱好: {{ person.hobby }}</h3>
  <h3>测试的数据c: {{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>
<script>
import { reactive } from "vue";

export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30K",
        a: {
          b: {
            c: 666,
          },
        },
        hobby: ["抽烟", "喝酒", "烫头"],
      },
    });

    // 方法
    function changeInfo() {
      person.name = "李四";
      person.age = 48;
      person.job.type = "UI设计师";
      person.job.salary = "60K";
      person.job.a.b.c = 999;
      person.hobby[0] = "学习";
    }

    return {
      person,
      changeInfo,
    };
  },
};
</script>
<script>
// 返回一个对象（常用）
function changeInfo() {
  // ...
}
return { person, changeInfo };
</script>
```
