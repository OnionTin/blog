<!-- @format -->

## useState

> 常用的几个钩子：useState、useEffect、useContext、useRef
>
> State Hook 让你在不编写 class 的情况下使用 state，即函数组件也有 state 状态，并进行读写操作

### 语法

```js
const [xxxstate, setXxxState] = React.useState(initialState);
```

### useState()

> 1. 参数：第一次定义时的初始值
> 2. 返回值：数组，包含两个元素([当前状态的值,更新状态的函数])

### setXxxState()两种写法

> 1. setXxxState(newValue)：参数是新的状态值，react 会更新状态值，并重新渲染组件
> 2. setXxxState(value => newValue)：参数是一个函数，该函数返回新的状态值，react 会更新状态值，并重新渲染组件

```js
const [count, setCount] = React.useState(0);
const [name, setName] = React.useState('tom');

// 加的回调
function add() {
  // setCount(count + 1); // 第一种写法
  setCount((count) => count + 1);
}

function changeName() {
  setName('jack');
}

return (
  <div>
    <h2>当前求和为:{count}</h2>
    <h2>我的名字是:{name}</h2>
    <button onClick={add}>点我+1</button>
    <button onClick={changeName}>点我改名</button>
  </div>
);
```
