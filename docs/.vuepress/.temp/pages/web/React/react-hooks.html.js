import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/react-hooks.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/react-hooks.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"react-hooks\",\"slug\":\"react-hooks\",\"link\":\"#react-hooks\",\"children\":[{\"level\":3,\"title\":\"Hooks 使用的注意事项:\",\"slug\":\"hooks-使用的注意事项\",\"link\":\"#hooks-使用的注意事项\",\"children\":[]},{\"level\":3,\"title\":\"内置 Hooks 分类\",\"slug\":\"内置-hooks-分类\",\"link\":\"#内置-hooks-分类\",\"children\":[]},{\"level\":3,\"title\":\"useEffect\",\"slug\":\"useeffect\",\"link\":\"#useeffect\",\"children\":[]},{\"level\":3,\"title\":\"useMemo\",\"slug\":\"usememo\",\"link\":\"#usememo\",\"children\":[]},{\"level\":3,\"title\":\"useState\",\"slug\":\"usestate\",\"link\":\"#usestate\",\"children\":[]},{\"level\":3,\"title\":\"useRef 和 useImperativeHandle 以及 React.forwardRef:\",\"slug\":\"useref-和-useimperativehandle-以及-react-forwardref\",\"link\":\"#useref-和-useimperativehandle-以及-react-forwardref\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727679545000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/React/react-hooks.md\",\"excerpt\":\"<h2>react-hooks</h2>\\n<blockquote>\\n<p>React 一直提倡使用函数组件，但是有一些功能只有类组件具备，比如函数组件没有实例，没有生命周期函数，而 React 16.8 提出的 Hooks 概念可以在不编写 Class 的情况下，使用 React 特性。凡是 use 开头的 React API 都是 Hooks。</p>\\n</blockquote>\\n<h3>Hooks 使用的注意事项:</h3>\\n<ol>\\n<li>只能，不要在其他 javascript 函数中调用。</li>\\n<li>不要在循环，条件判断或者子函数中调用。</li>\\n<li>只有 Hook 的调用顺序保持一致，React 才能正确地将内部 state 和对应的 Hook 进行关联。</li>\\n<li>React Hooks 内部是链表结构的，如果不按照顺序书写或者某个 useState 没有执行，就会导致指针移动出错，数据存取出错。</li>\\n</ol>\"}")
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
