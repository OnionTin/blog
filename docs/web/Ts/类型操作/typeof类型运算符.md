## typeof 类型运算符

> typeof 类型运算符用于获取一个变量或对象属性的类型。这种类型运算符对于创建与现有数据结构相同类型的新类型非常有用。

### 基本用法

> TypeOfX 是一个类型，它与变量 x 的类型相同，即 number。TypeOfPerson 是一个类型，它与 person 对象的类型相同。

```ts
let x = 10;
type TypeOfX = typeof x;
// TypeOfX 类型为 number

const person = {
  name: "Alice",
  age: 30,
};

type TypeOfPerson = typeof person;
// TypeOfPerson 类型为 { name: string; age: number; }
```

### 在函数中使用

```ts
function createPoint(x: number, y: number) {
  return { x, y };
}

type TypeOfCreatePoint = typeof createPoint;
// TypeOfCreatePoint 类型为 (x: number, y: number) => { x: number; y: number; }
```

### 获取对象属性的类型

```ts
const config = {
  host: "localhost",
  port: 8080,
};

type TypeOfPort = typeof config.port;
// TypeOfPort 类型为 number
```

### 获取类实例的类型

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const dog = new Animal("Buddy");

type TypeOfDog = typeof dog;
// TypeOfDog 类型为 Animal
```

### 获取类静态属性的类型

```ts
class Calculator {
  static version: string = "1.0";

  add(x: number, y: number): number {
    return x + y;
  }
}

type TypeOfVersion = typeof Calculator.version;
// TypeOfVersion 类型为 string
```

### 注意事项

1. typeof 类型运算符只能用于变量、对象属性、函数返回值、类实例和类静态属性。
2. typeof 不能用于接口或类型别名本身，因为它们是抽象的，没有具体的运行时表示。
3. 当使用 typeof 运算符时，如果操作数是一个联合类型，那么结果也将是一个联合类型。
