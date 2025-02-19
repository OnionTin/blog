## never

> 永远不会有返回值, 空是有值的, 值为空, 所以不能用 never

```ts
function a(): never {
  throw new error("这种是没有返回值...");
}
```
