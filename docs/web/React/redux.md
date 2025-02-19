## redux

| 名称                         | 作用                                                                |
| ---------------------------- | ------------------------------------------------------------------- |
| createStore                  | 用来将 state 存入 store;                                            |
| store.getState               | 获取状态;                                                           |
| store.dispath(type, data):   | 触发的条件和值;                                                     |
| store.subscribe              | 检测 store 中数据的变化后 render 页面;                              |
| reducer(preSatate, action)： | 处理状态的纯函数；传入之前的状态和一个对象, 返回一个新的状态；      |
| mapStateToProps              | 将 state 映射到 props;                                              |
| mapDispatchToProps           | 将 dispatch 映射到 props;                                           |
| Provider                     | 向子组件暴漏数据(生产者);                                           |
| Consumer                     | 接收父组件传值(消费者);                                             |
| connect                      | 连接 react 和 redux;                                                |
| createContext                | 解决无需层级关系传递,Provider 传递,Consumer 接收;                   |
| useContext                   | 使用 useContext 接受上下文，因为传入的是对象，则接受的也应该是对象; |
| combineReducers              | 合并 reducer;                                                       |
| applyMiddleware              | 中间件;                                                             |
| compose                      | 组合函数;                                                           |
| bindActionCreators           | 将 dispatch 和 actionCreator 绑定;                                  |
| redux-thunk                  | 异步 action;                                                        |
| redux-saga                   | 异步 action;                                                        |
| redux-promise                | 异步 action;                                                        |

> 明确两个概念：
>
> 1. UI 组件：不能使用任何 Redux 的 API，只负责页面的呈现和交互。
> 2. 容器组件：负责与 Redux 通信，将结果传递给 UI 组件。
>
> 如何创建一个容器组件：
>
> 通过使用 react-redux 的 connect 函数。
> connect 函数接受两个参数：mapStateToProps 和 mapDispatchToProps。
> mapStateToProps：映射状态，用于将 Redux 的状态映射到 UI 组件的 props。
> mapDispatchToProps：映射操作状态的方法，返回值是一个对象。
>
> 注意：
>
> 容器组件中的 store 是通过 props 传递进去的，而不是在容器组件中直接引入。

> connect(参数, 方法)(UI 组件): 容器组件，用来链接 ui 组件和 redux 的，ui 组件只能用来展示，所以必须在外层包裹一个容器组件做数据的处理工作；(注意: 因为 react-redux 帮做处理了,所以 store 和其中的 state 和 dispatch 就可以直接拿到了)

> reducer 必须是纯函数，纯函数: redux 中数组的处理不能用 push 和 unshift 的原因，不是纯函数，改变了原来的数组的引用类型数组的指向，改变了原数组，不能用，所以只能用[...oldArr, data]；用[...oldArr],原本的 oldArr 没有改变。

### 整体案例一

```js
import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

// userStore
const userReducer = (state = { name: "张三" }, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.name };
    default:
      return state;
  }
};

// bookStore
const bookReducer = (state = { name: "JavaScript 高级程序设计" }, action) => {
  switch (action.type) {
    case "CHANGE_BOOK":
      return { ...state, name: action.name };
    default:
      return state;
  }
};

// 合并 reducer
const reducer = combineReducers({
  user: userReducer,
  book: bookReducer,
});

// 中间件
const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger));

// UI 组件
class User extends React.Component {
  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}

// 容器组件
const UserContainer = connect(
  (state) => ({ name: state.user.name }), // mapStateToProps
  (dispatch) => ({
    changeName: (name) => dispatch({ type: "CHANGE_NAME", name }),
  }) // mapDispatchToProps
)(User);

// UI 组件
class Book extends React.Component {
  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}

// 容器组件
const BookContainer = connect(
  (state) => ({ name: state.book.name }),
  (dispatch) => ({
    changeBook: (name) => dispatch({ type: "CHANGE_BOOK", name }),
  })
)(Book);

// UI 组件
class App extends React.Component {
  render() {
    return (
      <div>
        <UserContainer />
        <BookContainer />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

### 整体案例二

```jsx
// UI组件
state = { carName: '奔驰c63' };
// 加法
increment = () => {
  const { value } = this.selectNumber;
  this.props.jia(value * 1);
};
// 减法
decrement = () => {
  const { value } = this.selectNumber;
  this.props.jian(value * 1);
};
// 奇数再加
incrementIfOdd = () => {
  const { value } = this.selectNumber;
};
// 异步加
incrementAsync = () => {
  const { value } = this.selectNumber;
};
render() {
  console.log('UI组件接收到的props是', this.props);
  return (
    <div>
      <h1>当前求和为: {this.props.count}</h1>
      <select ref={c => this.selectNumber = c}>
        <option value="1">1</option>
      </select>
    </div>
  );
}
```

```jsx
// 将UI组件与Redux连接
// 引入Count的UI组件
import CountUI from "../../components/Count";
// 引入redux的createStore函数，用于创建redux中最为核心的store对象
import { createIncrementAction } from "../../redux/count_action";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";

// 函数返回的对象中的key就作为传递给UI组件props的key
// value就作为传递给UI组件props的value状态
function mapStateToProps(state) {
  return { count: state };
}
// 函数返回的对象中的key就作为传递给UI组件props的key
// value就作为传递给UI组件props的value操作
function mapDispatchToProps(dispatch) {
  return {
    jia: (number) => dispatch(createIncrementAction(number)),
  };
}
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
```

```jsx
// 如何使用connect函数的简写形式来连接UI组件和Redux
export default connect(
  (state) => ({ count: state }),
  // mapDispatchToProps的一般写法
  dispatch => ({
    jia: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  })
  // mapDispatchToProps的简写
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(CountUI);
```

### 纯函数

> 纯函数是一类特别的函数，它们必须遵守以下约束：

1. **相同的输入总是得到相同的输出**：只要是同样的输入（实参），必定得到同样的输出（返回）。
2. **必须遵守的约束**：
   1. 不得改写参数数据。
   2. 不会产生任何副作用，例如网络请求，输入和输出设备。
   3. 不能调用 `Date.now()` 或 `Math.random()` 等不纯的方法。

<font color=red>Redux 的 `reducer` 函数必须是一个纯函数。</font>

### 高阶函数

> 高阶函数是一类特别的函数，它们可以：

1. **参数是函数**：接收一个或多个函数作为参数。
2. **返回是函数**：返回一个函数。
3. **定时器设置函数**：如 `setTimeout` 或 `setInterval`，它们的回调参数是一个函数。
4. **数组的方法**：
   - `forEach()`
   - `map()`
   - `filter()`
   - `reduce()`
   - `find()`
   - `bind()`
