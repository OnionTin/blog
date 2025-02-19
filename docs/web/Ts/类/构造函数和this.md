## 构造函数和 this

```ts
class Dog {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  bark() {
    console.log("汪汪汪!");
  }
}
const dog = new Dog("小黑", 18);
```
