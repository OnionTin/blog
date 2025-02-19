import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/redux.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/redux.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"redux\",\"slug\":\"redux\",\"link\":\"#redux\",\"children\":[{\"level\":3,\"title\":\"整体案例一\",\"slug\":\"整体案例一\",\"link\":\"#整体案例一\",\"children\":[]},{\"level\":3,\"title\":\"整体案例二\",\"slug\":\"整体案例二\",\"link\":\"#整体案例二\",\"children\":[]},{\"level\":3,\"title\":\"纯函数\",\"slug\":\"纯函数\",\"link\":\"#纯函数\",\"children\":[]},{\"level\":3,\"title\":\"高阶函数\",\"slug\":\"高阶函数\",\"link\":\"#高阶函数\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727679545000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":3}]},\"filePathRelative\":\"web/React/redux.md\",\"excerpt\":\"<h2>redux</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>createStore</td>\\n<td>用来将 state 存入 store;</td>\\n</tr>\\n<tr>\\n<td>store.getState</td>\\n<td>获取状态;</td>\\n</tr>\\n<tr>\\n<td>store.dispath(type, data):</td>\\n<td>触发的条件和值;</td>\\n</tr>\\n<tr>\\n<td>store.subscribe</td>\\n<td>检测 store 中数据的变化后 render 页面;</td>\\n</tr>\\n<tr>\\n<td>reducer(preSatate, action)：</td>\\n<td>处理状态的纯函数；传入之前的状态和一个对象, 返回一个新的状态；</td>\\n</tr>\\n<tr>\\n<td>mapStateToProps</td>\\n<td>将 state 映射到 props;</td>\\n</tr>\\n<tr>\\n<td>mapDispatchToProps</td>\\n<td>将 dispatch 映射到 props;</td>\\n</tr>\\n<tr>\\n<td>Provider</td>\\n<td>向子组件暴漏数据(生产者);</td>\\n</tr>\\n<tr>\\n<td>Consumer</td>\\n<td>接收父组件传值(消费者);</td>\\n</tr>\\n<tr>\\n<td>connect</td>\\n<td>连接 react 和 redux;</td>\\n</tr>\\n<tr>\\n<td>createContext</td>\\n<td>解决无需层级关系传递,Provider 传递,Consumer 接收;</td>\\n</tr>\\n<tr>\\n<td>useContext</td>\\n<td>使用 useContext 接受上下文，因为传入的是对象，则接受的也应该是对象;</td>\\n</tr>\\n<tr>\\n<td>combineReducers</td>\\n<td>合并 reducer;</td>\\n</tr>\\n<tr>\\n<td>applyMiddleware</td>\\n<td>中间件;</td>\\n</tr>\\n<tr>\\n<td>compose</td>\\n<td>组合函数;</td>\\n</tr>\\n<tr>\\n<td>bindActionCreators</td>\\n<td>将 dispatch 和 actionCreator 绑定;</td>\\n</tr>\\n<tr>\\n<td>redux-thunk</td>\\n<td>异步 action;</td>\\n</tr>\\n<tr>\\n<td>redux-saga</td>\\n<td>异步 action;</td>\\n</tr>\\n<tr>\\n<td>redux-promise</td>\\n<td>异步 action;</td>\\n</tr>\\n</tbody>\\n</table>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
