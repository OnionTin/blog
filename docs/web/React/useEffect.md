<!-- @format -->

## useEffect

> Effect Hook 可以让你在函数组件中执行副作用操作（用于模拟类组件中的生命周期钩子）

### React 中的副作用操作:

- 发 ajax 请求数据获取
- 设置订阅/启动定时器
- 手动更改真实 DOM

### 语法

```jsx
useEffect(() => {
  // 在此可以执行任何带副作用操作
  return () => {
    // 在组件卸载前执行
    // 在此做一些收尾工作，比如清除定时器/取消订阅等
  };
}, [stateValue]); // 如果指定的是[],回调函数只会在第一次render()后执行
```

### 可以把 useEffect Hook 看做如下三个函数的组合

componentDidMount()

componentDidUpdate()

componentWillUnmount()
