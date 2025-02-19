## react 中间件

`applyMiddleware`: 将所有中间件组成一个数组，依次执行;

`redux-thunk`: redux-thunk 主要对异步运用中间件做一些处理，因为 reducer 应该是一个纯函数，不能有副作用，只能根据 action 对 state 进行更新，因此不能在此发出网络请求。那么借助 redux-thunk 来在发出 action 至 reducer 处理之间借助 middleware 来进行处理。

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
```

`redux-promise`: redux-promise 中间件可以将返回一个 Promise 的 action 的结果直接交给下一个中间件或者 reducer 处理，而不是 dispatch 一个 action 对象。

```js
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));
```

`redux-logger`: redux-logger 中间件可以在控制台打印 action 和 state 的信息，方便调试。

```js
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));
```

`redux-devtools-extension`: redux-devtools-extension 是一个调试工具，可以方便的查看 redux 的状态和 action 的变化。

```js
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// composeWithDevTools是一个高阶函数，
// 用于将redux-devtools-extension和applyMiddleware组合在一起

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
```

`redux-saga`: redux-saga 是一个用于处理异步操作的中间件，它可以处理复杂的异步逻辑，并且可以方便的测试和维护。

```js
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
```

`redux-actions`: redux-actions 是一个用于简化 redux action 和 reducer 的库，它可以自动生成 action 和 reducer，减少代码量。

```js
import { createStore, applyMiddleware } from "redux";
import { createActions, createReducer } from "redux-actions";

const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount }),
});

const reducer = createReducer(0, {
  [increment]: (state, action) => state + action.amount,
  [decrement]: (state, action) => state - action.amount,
});
const store = createStore(reducer, applyMiddleware(thunk));
```

`redux-form`: redux-form 是一个用于处理表单的库，它可以和 redux 结合使用，方便的维护表单的状态。

```js
import { createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";

const store = createStore(
  combineReducers({
    form: formReducer,
    // other reducers
  }),
  applyMiddleware(thunk)
);
```

`redux-observable`: redux-observable 是一个用于处理异步操作的库，它可以和 redux 结合使用，方便的维护异步逻辑。

```js
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./epics";

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
```

`redux-persist`: redux-persist 是一个用于持久化 redux 状态的库，它可以和 redux 结合使用，方便的保存和恢复状态。

```js
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// defaults to localStorage for web
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
```
