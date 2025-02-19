## super 关键字

```ts
class Animal {
  name: string;
  constructor(name: string, age: number) {
    this.name = name;
  }
  say() {
    console.log("动物在叫!");
  }
}
class Dog extends Animal {
  // 继承后字类将会有父类的所有属性和方法
  age: number;
  constructor(name: string, age: number) {
    // name是来自父类的
    // age是来自子类的
    // super: 调用父类的构造函数
    super(name);
    this.age = age;
  }
  say() {
    // super: 其实就是父类 super.say()就是调用父类的say方法
    super.say();
  }
}
const dog = new Dog("小黑", 18);
```
