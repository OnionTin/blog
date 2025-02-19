## unknown(未知类型, 类型安全的 any)

```ts
// any类型可以赋值给任意变量
let a: any;
let b = "string";
b = a;
b = true;
// 所以不建议使用any, 而是用unknown;
```

```ts
// unknown类型不可以赋值给任意变量
// 解决办法:
let c: unknown;
let d: string;
c = "hello";
d = c as string; // 类型断言
// 或者
d = <string>c; // 类型断言
```
