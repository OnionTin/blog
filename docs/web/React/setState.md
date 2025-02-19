<!-- @format -->

## setState

> setState 触发更新是异步的，函数式的话在函数体内能够获取到最新的值

### setState 更新状态的 2 种写法

#### 1. setState(stateChange,[callback]) ------对象式的 setState

1. stateChange 为状态改变对象(该对象可以体现出状态的更改)
2. callback 是可选的回调函数，它在状态更新完毕、界面也更新后(render 调用后)才被调用

#### 2. setState(updater,[callback])------函数式的 setState

1. updater 为返回 stateChange 对象的函数。
2. updater 可以接收到 state 和 props。
3. callback 是可选的回调函数,它在状态更新、界面也更新后(render 调用后)才被调用。

#### 总结:

1. 对象式的 setState 是函数式的 setState 的简写方式(语法糖)
2. 使用原则:

   (1). 如果新状态不依赖于原状态 ==> 使用对象方式

   (2). 如果新状态依赖于原状态 ==> 使用函数方式

   (3). 如果需要在 setState()执行后获取最新的状态数据，要在第二个 callback 函数中读取

```jsx
state = { count: 0 };

add = () => {
  // 对象式的setState
  // 1. 获取原来的count值
  const { count } = this.state;
  // 2. 更新状态
  this.setState({ count: count + 1 }, () => {
    console.log(this.state.count);
  });
  console.log('12行的输出', this.state.count); // 0

  // 函数式的setState
  this.setState((state, props) => {
    return { count: state.count + 1 };
  });
};
```
