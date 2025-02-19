import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/redux和hooks搭配使用流程.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/redux%E5%92%8Chooks%E6%90%AD%E9%85%8D%E4%BD%BF%E7%94%A8%E6%B5%81%E7%A8%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"redux 和 hooks 搭配使用流程\",\"slug\":\"redux-和-hooks-搭配使用流程\",\"link\":\"#redux-和-hooks-搭配使用流程\",\"children\":[]}],\"git\":{\"updatedTime\":1727679545000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/React/redux和hooks搭配使用流程.md\",\"excerpt\":\"<h2>redux 和 hooks 搭配使用流程</h2>\\n<blockquote>\\n<p>【useState】-&gt; 【useReducer】-&gt; 【useSelector、useDispatch】</p>\\n</blockquote>\\n<p>通过 useSelector、useDispatch 等方法,我们可以用 Hooks 方法完成 Redux 的功能,Hooks 和 Redux 之间没有替代关系,应该更好地共存和融合。\\nReact.memo 为高阶组件。它与 React.PureComponent 非常相似，但它适用于函数组件，但不适用于 class 组件。</p>\\n\"}")
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
