## react-hooks

> React 一直提倡使用函数组件，但是有一些功能只有类组件具备，比如函数组件没有实例，没有生命周期函数，而 React 16.8 提出的 Hooks 概念可以在不编写 Class 的情况下，使用 React 特性。凡是 use 开头的 React API 都是 Hooks。

### Hooks 使用的注意事项:

1. 只能<font color=red>在函数内部的最外层调用 Hook，且只能在 react 的函数组件中调用</font>，不要在其他 javascript 函数中调用。
2. 不要在循环，条件判断或者子函数中调用。
3. 只有 Hook 的调用顺序保持一致，React 才能正确地将内部 state 和对应的 Hook 进行关联。
4. React Hooks 内部是链表结构的，如果不按照顺序书写或者某个 useState 没有执行，就会导致指针移动出错，数据存取出错。

### 内置 Hooks 分类

1. 路由 Hooks

   > 被 route 包裹的组件，可以直接使用 props 进行路由相关操作，但是没有被 route 包裹的组件只能用 withRouter 高阶组件修饰或者使用 hooks 进行操作。

   | Hooks       | 说明              |
   | ----------- | ----------------- |
   | useHistory  | 跳转路由          |
   | useLocation | 得到 url 对象     |
   | useParams   | 得到 url 上的参数 |

2. 状态 Hooks
   | Hooks | 说明 |
   | -------------------- | -------------------------- |
   | useState | useState 通过在函数组件里调用它来给组件添加一些内部 state(函数组件是没有 state 的,class 组件有)。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。
   | useReducer | 状态管理 |
   | useSelector | 子组件用来访问父组件 state 中的数据 |
   | useDispatch | 子组件用来触发父组件 action 的函数 |
3. 上下文 Hooks
   | Hooks | 说明 |
   | -------------------- | -------------------------- |
   | useContext | 获取上下文 |
   | useReducerContext | 获取上下文 |
   | useStoreContext | 获取上下文 |
4. 事件 Hooks
   | Hooks | 说明 |
   | -------------------- | -------------------------- |
   | useMemo | 缓存计算结果 |
   | useCallback | 缓存回调函数。与 useMemo 类似;useMemo 与 useCallback 相同，接收一个函数作为参数，也同样接收第二个参数作为依赖列表；useCallback 是对传过来的回调函数优化，返回的是一个函数。 |
   | useRef | 用来获取 ref 绑定的 dom 对象,获取的对象只有个 current 属性，只在函数式组件用，与 createRef 的写法一致； |
   | useImperativeHandle | 自定义暴露给父组件的实例值 |
   | useLayoutEffect | 布局钩子，useLayoutEffect 有 DOM 操作的副作用,在 DOM 更新之后执行和 useEffet 类似，但是执行时机不同，useLayoutEffect 在 DOM 更新之后执行，useEffect 在 render 渲染结束后执行，也就是说 useLayoutEffect 比 useEffect 先执行，这是因为 DOM 更新之后，渲染才结束或者渲染还会结束。useLayoutEffect 执行比较 useEffect 快，useEffect 每次都是完整流程，而 useLayoutEffect 在 vdom 后先不渲染，先更新，最后只渲染一次。 |
5. 副作用 Hooks
   | Hooks | 说明 |
   | -------------------- | -------------------------- |
   | useEffect | 可以看作是 componentDidMount,componentDidUpdate,componentWillUnmount 三个的组合,这个函数就是用来处理"副作用"的, 举个通俗一点的例子, 假如感冒了本来吃点药就没事了, 但是吃了药发现身体过敏了,而这个"过敏"就是副作用。放到 React 中，本来只是想渲染 DOM 展示到页面上，但除了 DOM 之外还有数据，而这些数据必须从外部的数据源中获取，这个"获取外部数据源"的过程就是副作用。 |
   | useDeferredValue | 延迟值钩子 |
   | useTransition | 过渡钩子 |
6. 其他 Hooks
   | Hooks | 说明 |
   | -------------------- | -------------------------- |
   | useDebugValue | 调试钩子 |
   | useId | 唯一 ID 钩子 |
   | useSyncExternalStore | 同步外部存储钩子 |
   | useInsertionEffect | 插入钩子 |

### useEffect

> 可以看作是 componentDidMount,componentDidUpdate,componentWillUnmount 三个的组合,这个函数就是用来处理"副作用"的, 举个通俗一点的例子, 假如感冒了本来吃点药就没事了, 但是吃了药发现身体过敏了,而这个"过敏"就是副作用。放到 React 中，本来只是想渲染 DOM 展示到页面上，但除了 DOM 之外还有数据，而这些数据必须从外部的数据源中获取，这个"获取外部数据源"的过程就是副作用。

#### 1. 不传递

> useEffect 不传递第二个参数会导致每次渲染都会运行 useEffect。然后，当它运行时， 它获取数据并更新状态。然后，一旦状态更新，组件将重新呈现， 这将再次触发 useEffect，这就是问题所在。

```js
useEffect(() => {
  console.log(props.number);
  setNumber(props.number);
}); //所有更新都执行
```

#### 2. 传递空数组

> 如果传递一个空数组作为第二个参数，useEffect 只会在组件挂载和卸载时运行一次。但是，当 props.number 改变时，它不会重新运行，因为 useEffect 的第二个参数没有包含 props.number。

```js
useEffect(() => {
  console.log(props.number);
  setNumber(props.number);
}, []); //只在挂载和卸载时执行
```

#### 3. 传递一个值

```js
useEffect(() => {
  undefined;
  console.log(count);
}, [count]); //count更新时执行
```

#### 4. 传递多个

```js
const Asynchronous: React.FC = ({ number }) => {
  const [number2, setNumber2] = useState(number);
  useEffect(() => {
    console.log(number);
    setNumber2(number);
  }, [number, setNumber2]); //监听 props 对象 number 的更改
  //setNumber2 是 useState 返回的 setter,所以不会在每次渲染时重新创建它,
  //因此 effect 只会运行一次
};
```

#### 传递 props 的对象 传递的 useState 返回的 setter

#### return 方法

```js
const timer = setInterval(() => {
  undefined;
  setCount(count + 1);
}, 1000);
// useEffect方法的第一个参数是一个函数，函数可以return一个方法，
//这个方法就是在组件销毁的时候会被调用
useEffect(() => {
  return () => {
    clearInterval(timer);
  };
}, []);
```

### useMemo

> useMemo 是用来缓存计算结果的，用来做缓存用。useMemo 使用场景，比如有两个变量（依赖项），只需要在其中一个变量变化时发生变化，否则拿缓存的值；或者其中另一个变量的变化不需要引起重新计算时使用。该属性类似于 vue 中的计算属性，有返回值。

```js
const memoizedValue = useMemo(callback, array);
// callback是一个函数用于处理逻辑
// array 控制useMemo重新执行的数组，array改变时才会重新执行useMemo
// 不传数组，每次更新都会重新计算
// 空数组，只会计算一次
// 依赖对应的值当对应的值发生变化时才会重新计算(可以依赖另外一个useMemo 返回的值)
// useMemo的返回值是一个记忆值，是callback的返回值
```

### useState

> useState 通过在函数组件里调用它来给组件添加一些内部 state(函数组件是没有 state 的,class 组件有)。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。

```js
const [state, setState] = useState(initialState);
//state: 定义的状态
//setState: 更新状态的方法
//initialState: 初始状态
```

### useRef 和 useImperativeHandle 以及 React.forwardRef:

```jsx
// 基于forwardRef实现ref转发，目的：获取子组件内部的某个元素…

// 函数子组件内部，可以有自己的状态和方法了；
// 如何实现：基于forwardRef实现ref转发的同时，获取函数子组件内部的状态或者方法呢？useImperativeHandle

const Child = React.forwardRef(function Child(props, ref) {
  let [text, setText] = useState("你好世界");
  const submit = () => {};

  useImperativeHandle(ref, () => {
    // 在这里返回的内容，都可以被父组件的REF对象获取到
    return { text, submit };
  });

  return (
    <div className="child-box">
      <span>哈哈哈</span>
    </div>
  );
});

// 父组件
const Demo = function Demo() {
  let x = useRef(null);
  useEffect(() => {
    console.log(x.current); // 这里可以访问到Child组件内部的text和submit
  }, []);

  return (
    <div className="demo">
      <Child ref={x} />
    </div>
  );
};
```
