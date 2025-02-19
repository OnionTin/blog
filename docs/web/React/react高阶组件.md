## react 高阶组件

1. `React.memo`: 适用于函数组件，但不适用于 class 组件
   > `React.memo()使用场景就是纯函数组件频繁渲染props`; `React.memo 仅检查 props 变更`,且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍`会重新渲染`;其实就是在实现 shouldComponentUpdate 生命周期。
2. `React.PureComponent`: 在 class 组件中使用。
   > React.PureComponent 与 React.Component 唯一的区别在于 Rect.Component 没有实现 shouldComponentUpdate(), 而 React.PureComponent 中`以浅层对比 props 和state 的方式`来实现了该函数。
3. `withRouter`： `withRouter`的作用就是, 如果我们某个东西不是一个`Router`, 但是我们要依靠它去跳转一个页面。
   > 比如点击页面的`logo`, `返回首页`。, 这时候就可以使用`withRouter`来做.`withRouter`, 作用是将一个组件包裹进`Route`里面, 然后`react-router`的三个对象`history, location, match`就会被放进这个组件的`props`属性中。被 route 包裹的组件，可以直接使用 props 进行路由相关操作，但是没有被 route 包裹的组件只能用 withRouter 高阶组件修饰或者使用 hooks 进行操作
