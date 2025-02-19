## Array 类型

> 可以使用泛型来定义数组类型，这样可以确保数组中的元素都是相同的类型。这可以通过两种方式实现：使用泛型接口或泛型类型别名。

### 使用泛型接口定义数组类型

```ts
interface ArrayOfNumbers {
  data: number[];
}

interface ArrayOfUsers {
  data: {
    id: number;
    name: string;
  }[];
}
```

### 使用泛型类型别名定义数组类型

```ts
type ArrayOfNumbers = number[];

type ArrayOfUsers = {
  id: number;
  name: string;
}[];

const numbers: ArrayOfNumbers = [1, 2, 3];
const users: ArrayOfUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
```

### 使用泛型类定义数组类型

```ts
class GenericArray<T> {
  items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  addItem(item: T) {
    this.items.push(item);
  }
}

const strings = new GenericArray<string>(["hello", "world"]);
strings.addItem("typescript");

const people = new GenericArray<{ id: number; name: string }>([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
]);
people.addItem({ id: 3, name: "Carol" });
```

### 使用泛型约束定义数组类型

```ts
interface HasName {
  name: string;
}

function printNames<T extends HasName>(users: T[]) {
  users.forEach((user) => console.log(user.name));
}

printNames([{ name: "Alice" }, { name: "Bob" }]);
```
