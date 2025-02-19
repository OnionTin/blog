import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/React提升/Portals.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/React%E6%8F%90%E5%8D%87/Portals.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"React 中Portals\",\"slug\":\"react-中portals\",\"link\":\"#react-中portals\",\"children\":[{\"level\":3,\"title\":\"1. 定义和用途\",\"slug\":\"_1-定义和用途\",\"link\":\"#_1-定义和用途\",\"children\":[]},{\"level\":3,\"title\":\"2. 创建 Portal\",\"slug\":\"_2-创建-portal\",\"link\":\"#_2-创建-portal\",\"children\":[]},{\"level\":3,\"title\":\"3. 事件冒泡\",\"slug\":\"_3-事件冒泡\",\"link\":\"#_3-事件冒泡\",\"children\":[]},{\"level\":3,\"title\":\"4. 性能考虑\",\"slug\":\"_4-性能考虑\",\"link\":\"#_4-性能考虑\",\"children\":[]},{\"level\":3,\"title\":\"5. 无障碍性\",\"slug\":\"_5-无障碍性\",\"link\":\"#_5-无障碍性\",\"children\":[]},{\"level\":3,\"title\":\"6. 清理\",\"slug\":\"_6-清理\",\"link\":\"#_6-清理\",\"children\":[]},{\"level\":3,\"title\":\"7. 集成非 React 内容\",\"slug\":\"_7-集成非-react-内容\",\"link\":\"#_7-集成非-react-内容\",\"children\":[]},{\"level\":3,\"title\":\"8. 与 Context 一起使用\",\"slug\":\"_8-与-context-一起使用\",\"link\":\"#_8-与-context-一起使用\",\"children\":[]},{\"level\":3,\"title\":\"9. 限制\",\"slug\":\"_9-限制\",\"link\":\"#_9-限制\",\"children\":[]},{\"level\":3,\"title\":\"10. 实用案例\",\"slug\":\"_10-实用案例\",\"link\":\"#_10-实用案例\",\"children\":[]},{\"level\":3,\"title\":\"11. 与 React Hooks 结合使用\",\"slug\":\"_11-与-react-hooks-结合使用\",\"link\":\"#_11-与-react-hooks-结合使用\",\"children\":[]},{\"level\":3,\"title\":\"12. 测试 Portals\",\"slug\":\"_12-测试-portals\",\"link\":\"#_12-测试-portals\",\"children\":[]}]}],\"git\":{\"updatedTime\":1728487189000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/React提升/Portals.md\",\"excerpt\":\"<!-- @format -->\\n<h2>React 中<code>Portals</code></h2>\\n<p>React 的<code>Portals</code>是一种将子元素渲染到父组件之外的 DOM 节点的机制。可以在需要将 UI 元素渲染在父组件之外时使用。</p>\\n<h3>1. 定义和用途</h3>\\n<p><code>Portals</code>允许你将子元素渲染到存在于父组件之外的 DOM 节点上。这在创建模态框、提示框、下拉菜单等需要“突破”其父级容器的样式时非常有用。</p>\\n<h3>2. 创建 Portal</h3>\\n<p>使用<code>ReactDOM.createPortal</code>函数创建一个 Portal，它接受两个参数：要渲染的子元素和目标 DOM 节点。</p>\"}")
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
