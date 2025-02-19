## extends 继承

```ts
class Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log("动物在叫!");
  }
}
class Dog extends Animal {
  // 继承后字类将会有父类的所有属性和方法
  run() {
    console.log("小狗边跑边叫!");
  }
}
class Cat extends Animal {
  // 继承后字类将会有父类的所有属性和方法
  say() {
    // 方法的重写: 子类会覆盖符类中的say方法
    console.log("小猫喵喵喵!");
  }
}
new dog() = new Dog("小黑", 18);
dog.run();
```
