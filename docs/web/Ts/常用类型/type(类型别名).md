## type(类型别名)

> 类型别名允许你为复杂的类型定义创建简洁的名称，从而简化代码

```ts
type UserID = number; // 类型别名
function getUserByID(id: UserID): User {
  // 实现根据 ID 获取用户
  console.log("Fetching user with ID:", id);
  return {} as User; // 模拟返回用户
}
```

```ts
type User = {
  id: number;
  name: string;
  roles: string[];
  isActive: boolean;
  metadata?: {
    createdAt: Date;
    updatedAt?: Date;
  };
};

let user: User = {
  id: 1,
  name: "Alice",
  roles: ["admin"],
  isActive: true,
  metadata: {
    createdAt: new Date(),
  },
};
```
