## shallowReactive 与 shallowRef

### shallowReactive

> 只处理对象最外层属性的响应式（浅响应式）。

### shallowRef

> 只处理基本数据类型的响应式，不进行对象的响应式处理。

### 什么时候使用？

- **shallowReactive**: 如果有一个对象数据，结构比较深，但变化时只是外层属性变化。

- **shallowRef**: 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象来替换。

```javascript
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    // let person = shallowReactive({ //只考虑第一层数据的响应式
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    let x = shallowRef({
      y: 0,
    });
    console.log("******", x);

    // 返回一个对象（常用）
    return {
      person, // 这里应该是 person 而不是 X
      x,
    };
  },
};
```

### shallowReactive

```js
import { shallowReactive } from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 方法
    function changeInfo() {
      person.name = "李四";
      person.age = 48;
      person.job.j1.salary = 30; // 不进行响应式处理
    }

    // 返回一个对象（常用）
    return {
      person,
      changeInfo,
    };
}
```

### shallowRef

```js
import { shallowRef } from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let x = shallowRef({
      y: 0,
    });

    // 方法
    function changeInfo() {
      x.value = { y: 10 }; // 重新赋值，会触发响应式
    }
    // 返回一个对象（常用）
    return {
      x,
      changeInfo,
    };
  },
};
```
