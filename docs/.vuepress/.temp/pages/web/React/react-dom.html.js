import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/react-dom.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/react-dom.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"react-dom\",\"slug\":\"react-dom\",\"link\":\"#react-dom\",\"children\":[]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/React/react-dom.md\",\"excerpt\":\"<h2>react-dom</h2>\\n<blockquote>\\n<p>React 和 ReactDOM 是 React 技术栈中的核心库。React 提供了创建组件的 API 和维护状态的机制，而 ReactDOM 提供了将这些组件渲染到 DOM 的能力。它们共同为开发现代 web 应用提供了强大的基础。</p>\\n</blockquote>\\n<blockquote>\\n<p>ReactDOM 是一个用于将 React 组件渲染到 DOM 的库。它提供了一些方法，如 render、hydrate 和 unmountComponentAtNode 等，来与 DOM 进行交互。当组件的状态或者 props 发生变化时，ReactDOM 可以高效地更新 DOM。提供了与 DOM 交互的方法，如获取节点信息、添加事件监听器等。</p>\\n</blockquote>\"}")
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
