## toRefs

> toRefs 与 toRef 功能一致，但可以批量创建多个 ref 对象.将响应式对象转换为普通对象，其中每个属性都是指向原始对象相应属性的 ref。

```js
const { name, age } = toRefs(person);
```

```js
import { reactive, toRefs } from "vue";

const person = reactive({
  name: "张三",
  age: 18,
});

const { name, age } = toRefs(person);

console.log(name.value); // '张三'
console.log(age.value); // 18
```

### 注意事项

- toRefs 函数返回的是一个普通对象，其中每个属性都是指向原始对象相应属性的 ref。
- toRefs 函数不会改变原始对象的响应式特性，只是将其转换为普通对象。
- toRefs 函数通常用于将响应式对象解构为普通对象，以便在模板中使用。
- toRefs 函数可以接受一个可选的第二个参数，用于指定转换后的 ref 的名称。

```js
const { name, age } = toRefs(person, { name: "fullName", age: "age" });
```

- 在上述示例中，name 和 age 的 ref 名称分别为 fullName 和 age。
