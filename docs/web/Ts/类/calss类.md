## calss 类

```ts
class Person {
  name: string; // 只能创建对象在对象身上进行访问
  static age: number; // 静态属性: 不用new对象就可以被类访问的属性 Person.age
  readonly sex: string; // readonly: 只读属性
  say() {
    console.log("...");
  }
}
```
