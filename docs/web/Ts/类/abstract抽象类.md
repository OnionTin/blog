## abstract 抽象类

```ts
abstract class Animal {
  // 抽象类: 专门用来给别人继承的, 没有其他作作用, 不能创建对象
  name: string;
  constructor(name: string, age: number) {
    this.name = name;
  }
  abstract say(): void; // 抽象方法, 必须被字类重写
}
class Dog extends Animal {
  // 抽象方法重写
  say() {
    super.say();
  }
}
const dog = new Dog("小黑");
dog.say();
```
