## enmu(枚举: 把所有的可能的情况都列出来)

> 枚举（Enums）是一种特殊的类型，它为一组数值赋予了更加友好的名字。枚举可以被用来定义命名的常数集合，这使得代码更加易读和易于维护。

### 普通枚举

```ts
enmu Sex{
  Male,   // 不写值的话, 自动转成0
  Female = 1  // 赋值为1
}
let i: { name:  string, sex: Sex };
i = {
  name: 'ths',
  sex: Sex.Male // 自动转成0了
}
```

### 带字符串值的枚举

```ts
enum Color {
  Red = "FF0000",
  Green = "00FF00",
  Blue = "0000FF",
}

console.log(Color.Red); // "FF0000"
console.log(Color[Color.Red]); // 0
```

### 带数字值的枚举

```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}

console.log(Color.Red); // 1
console.log(Color.Green); // 2
console.log(Color.Blue); // 3
```

### 常数成员和计算成员

```ts
enum Color {
  Red,
  Green,
  Blue = Color.Red * 2,
  DarkRed = Color.Red + 10,
}

console.log(Color.Blue); // 2
console.log(Color.DarkRed); // 12
```

### 反向映射

```ts
enum Color {
  Red = "FF0000",
  Green = "00FF00",
  Blue = "0000FF",
}
console.log(Color["FF0000"]); // Color.Red
```

### 枚举作为类型

```ts
let c: Color = Color.Green;
```

### 字符串枚举

```ts
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

function printStatus(status: Status) {
  console.log(status);
}

printStatus(Status.Approved); // "APPROVED"
```

### 数字枚举

```ts
enum NumberEnum {
  One,
  Two,
  Three,
}

console.log(NumberEnum.One); // 0
console.log(NumberEnum.Two); // 1
console.log(NumberEnum.Three); // 2
```

### 外部枚举

```ts
// app.ts
import { Color } from "./colors";
// colors.ts
export enum Color {
  Red = "FF0000",
  Green = "00FF00",
  Blue = "0000FF",
}
console.log(Color.Red); // "FF0000"
```
