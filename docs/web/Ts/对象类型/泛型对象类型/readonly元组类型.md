## Readonly 元组类型

### 定义 Readonly 元组类型

```ts
// 定义一个只读元组类型
type ReadonlyTuple = Readonly<[number, string, boolean]>;

const readonlyTuple: ReadonlyTuple = [42, "hello", true];

// 以下操作都是不允许的，会导致编译错误
// readonlyTuple[0] = 1;
// readonlyTuple.push(5);
```

### 泛型 Readonly 元组类型

```ts
// 定义一个泛型只读元组类型
type GenericReadonlyTuple<T extends readonly unknown[]> = Readonly<T>;

// 使用泛型只读元组类型
const genericReadonlyTuple: GenericReadonlyTuple<[number, string]> = [
  42,
  "hello",
];

// 以下操作都是不允许的，会导致编译错误
// genericReadonlyTuple[0] = 1;
// genericReadonlyTuple.push("world");
```

### 在对象类型中使用 Readonly 元组类型

```ts
// 定义一个包含只读元组属性的对象类型
type ObjectWithReadonlyTuple = {
  readonly data: [number, string];
};

const obj: ObjectWithReadonlyTuple = {
  data: [1, "example"],
};

// 以下操作都是不允许的，会导致编译错误
// obj.data = [2, "another example"];
// obj.data[0] = 2;
```
