## ReadonlyArray 类型

> ReadonlyArray 是一种内置的泛型类型，它表示一个只读的数组。这意味着数组的元素可以被读取，但不能被修改（即不能添加、删除或修改元素）。这与 JavaScript 中的 Object.freeze() 方法类似，但专门用于数组。

### 使用 ReadonlyArray

> ReadonlyArray 可以用于确保数组不会被修改。这对于防止数据被意外改变非常有用，特别是在函数式编程中。

```ts
let readOnlyArray: ReadonlyArray<number> = [1, 2, 3];

// 以下操作都是不允许的，会导致编译错误
// readOnlyArray[0] = 10;
// readOnlyArray.push(4);
// readOnlyArray.pop();
```

### 定义泛型对象类型时使用 ReadonlyArray

```ts
type User = {
  readonly id: number;
  readonly name: string;
};

type UserArray = {
  users: ReadonlyArray<User>;
};

const users: UserArray = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ],
};

// 以下操作都是不允许的，会导致编译错误
// users.users.push({ id: 3, name: 'Carol' });
// users.users[0] = { id: 1, name: 'Alice Updated' };
```

### 使用泛型与 ReadonlyArray

```ts
type ReadOnlyArray<T> = ReadonlyArray<T>;

const readOnlyNumbers: ReadOnlyArray<number> = [1, 2, 3];
const readOnlyUsers: ReadOnlyArray<User> = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// 以下操作都是不允许的，会导致编译错误
// readOnlyNumbers.push(4);
// readOnlyUsers[0] = { id: 1, name: 'Alice Updated' };
```
