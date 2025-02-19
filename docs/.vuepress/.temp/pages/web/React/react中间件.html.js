import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/react中间件.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/react%E4%B8%AD%E9%97%B4%E4%BB%B6.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"react 中间件\",\"slug\":\"react-中间件\",\"link\":\"#react-中间件\",\"children\":[]}],\"git\":{\"updatedTime\":1727679545000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/React/react中间件.md\",\"excerpt\":\"<h2>react 中间件</h2>\\n<p><code>applyMiddleware</code>: 将所有中间件组成一个数组，依次执行;</p>\\n<p><code>redux-thunk</code>: redux-thunk 主要对异步运用中间件做一些处理，因为 reducer 应该是一个纯函数，不能有副作用，只能根据 action 对 state 进行更新，因此不能在此发出网络请求。那么借助 redux-thunk 来在发出 action 至 reducer 处理之间借助 middleware 来进行处理。</p>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> createStore<span class=\\\"token punctuation\\\">,</span> applyMiddleware <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"redux\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">import</span> thunk <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"redux-thunk\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">import</span> rootReducer <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"./reducers\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">const</span> store <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">createStore</span><span class=\\\"token punctuation\\\">(</span>rootReducer<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token function\\\">applyMiddleware</span><span class=\\\"token punctuation\\\">(</span>thunk<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
