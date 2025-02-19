## interface 接口

> 接口（Interfaces）是一种强大的方式，用于定义对象的结构，它是一种对类型而不是对值的描述。接口可以被理解为对象的蓝图，它规定了对象必须具有的结构和类型，但不实现它们。接口主要用于类型检查和确保对象符合预期的形状

### 基本语法

> Person 接口，它要求任何实现这个接口的对象都必须有 name（字符串类型）和 age（数字类型）两个属性

```ts
interface Person {
  name: string; // 接口中所有的属性不能赋值
  age: number;
  say(): void; // 不能有方法体, 接口只定义对象的结构而没有实际的值, 类似抽象方法
}
interface Person{ // 接口可以重名
  sex: string;
}

let p1: Person = {
  name: 'ths',
  age: 18,
  say(): void
  //或者
  say(){
    console.log('11111')
  };
  // 再或者
  say:()=>{
    console.log('11111')
  }
}
```

### 实现接口

> User 类实现了 Person 接口，这意味着 User 类的实例必须包含 name 和 age 属性

```ts
/* 定义类时, 可以用类去实现一个接口, 用到关键字 implements
接口其实对类进行了限制，与抽象类很像，区别在于抽象类中可以有抽象方法也可以有其他的，
接口内只能有抽象方法
另外的区别在于使用抽象类时使用extends, 接口使用implements*/
class User implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

### 只读属性(readonly)

> 接口也可以定义只读属性，这些属性必须在初始化时赋值，以后不能修改

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}
```

### 函数类型

> 接口不仅可以用于对象类型，还可以用来定义函数类型

```ts
interface SearchFunction {
  (source: string, subString: string): boolean;
}
```

### 扩展接口

```ts
interface Person {
  name: string;
  age: number;
}

interface Logger {
  log(message: string): void;
}

interface PersonLogger extends Person, Logger {
  logName(): void;
}

class ConcretePersonLogger implements PersonLogger {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  log(message: string): void {
    console.log(message);
  }

  logName(): void {
    console.log(this.name);
  }
}
```

### 索引签名

```ts
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```
