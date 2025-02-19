## toRef

> 将响应式对象中的某个属性单独提供给外部使用,不会影响到原始对象中的属性。

```js
const name = toRef(person, "name");
```

```js
import { reactive, toRef } from "vue";

const person = reactive({
  name: "张三",
  age: 18,
});

const name = toRef(person, "name");

console.log(name.value); // 张三

name.value = "李四";

console.log(person.name); // 李四
```
