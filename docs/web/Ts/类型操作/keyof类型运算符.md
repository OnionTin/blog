## keyof 类型运算符

> keyof 类型运算符用于获取一个类型的所有键的联合，这些键可以是类型中的属性名、索引签名的键，或者是类型的字符串字面量类型。使用 keyof 类型运算符可以提高代码的复用性和灵活性。

### 基本用法

> PointKeys 是一个类型，它包含了 Point 类型的所有键，即 "x" | "y" | "z"。

```ts
type Point = {
  x: number;
  y: number;
  z: number;
};

type PointKeys = keyof Point;
// "x" | "y" | "z"
```

### 结合索引签名

> DictionaryKeys&lt;T&gt; 尝试获取 Dictionary&lt;T&gt; 类型的键，但由于 Dictionary 具有一个索引签名，所以 keyof 运算符返回的是索引签名的键的类型，通常是 string | number | symbol。

```ts
interface Dictionary<T> {
  [key: string]: T;
}

type DictionaryKeys<T> = keyof Dictionary<T>;
// "keyof" does not work with index signatures,
// so the type will be "string" | "number" | "symbol" (depending on the key type)
```

### 字符串字面量类型

```ts
type Direction = "up" | "down" | "left" | "right";

type DirectionKeys = keyof typeof Direction;
// "up" | "down" | "left" | "right"
```

### 在泛型中的应用

> getProperty 是一个泛型函数，它接受一个对象 obj 和一个键 key，然后返回对象在该键上的值。K extends keyof T 确保 key 是 obj 的一个有效键。

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const point: Point = { x: 1, y: 2, z: 3 };

const x = getProperty(point, "x"); // x: number
const y = getProperty(point, "y"); // y: number
```

### 注意事项

1. keyof 类型运算符不能直接用于接口或类型别名中的索引签名，因为索引签名的键的类型是动态的。
2. 当使用 keyof 运算符时，如果类型的键是数字索引签名，那么返回的键类型将是 number 或 string，具体取决于索引签名的配置。
3. keyof 运算符可以与类型查询操作符 T[K] 结合使用，以获取特定键的类型。
