## computed 和 watch

> computed 和 watch 与 Vue2 中的用法基本一致，只是语法上有些不同

### computed

> 计算属性，用于声明式地描述一个值依赖于其他值，并且当依赖变化时，自动更新该值
>
> computed 的值会缓存，只有当依赖的值发生变化时，才会重新计算

```js
import { computed } from "vue";

export default {
  setup() {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);

    return {
      count,
      doubleCount,
    };
  },
};
```

### watch

> 监听一个或多个响应式数据的变化，并在变化时执行回调函数
>
> watch 可以监听 ref 和 reactive 的数据，也可以监听一个 getter 函数的返回值

```js
let sum = ref(0);
let msg = ref("你好啊");
let person = ref({
  name: "张三",
  age: 18,
  job: {
    j1: {
      salary: 20,
    },
  },
});
console.log(person);

// 监控单个属性的变化
watch(sum, (newValue, oldValue) => {
  console.log("sum的值变化了", newValue, oldValue);
});
// 深度监控person变化
watch(
  person,
  (newValue, oldValue) => {
    console.log("person的值变化了", newValue, oldValue);
  },
  { deep: true }
);

// 返回一个对象（常用）
return {
  sum,
  msg,
  person,
};
```
