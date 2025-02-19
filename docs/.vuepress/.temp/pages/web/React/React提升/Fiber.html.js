import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/React提升/Fiber.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/React%E6%8F%90%E5%8D%87/Fiber.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"React Fiber\",\"slug\":\"react-fiber\",\"link\":\"#react-fiber\",\"children\":[{\"level\":3,\"title\":\"1. 异步渲染能力\",\"slug\":\"_1-异步渲染能力\",\"link\":\"#_1-异步渲染能力\",\"children\":[]},{\"level\":3,\"title\":\"2. 重写的目的\",\"slug\":\"_2-重写的目的\",\"link\":\"#_2-重写的目的\",\"children\":[]},{\"level\":3,\"title\":\"3. 工作单元\",\"slug\":\"_3-工作单元\",\"link\":\"#_3-工作单元\",\"children\":[]},{\"level\":3,\"title\":\"4. 任务的优先级\",\"slug\":\"_4-任务的优先级\",\"link\":\"#_4-任务的优先级\",\"children\":[]},{\"level\":3,\"title\":\"5. 时间分片\",\"slug\":\"_5-时间分片\",\"link\":\"#_5-时间分片\",\"children\":[]},{\"level\":3,\"title\":\"6. 暂停和终止\",\"slug\":\"_6-暂停和终止\",\"link\":\"#_6-暂停和终止\",\"children\":[]},{\"level\":3,\"title\":\"7. 重用工作\",\"slug\":\"_7-重用工作\",\"link\":\"#_7-重用工作\",\"children\":[]},{\"level\":3,\"title\":\"8. 与 Concurrent 特性的结合\",\"slug\":\"_8-与-concurrent-特性的结合\",\"link\":\"#_8-与-concurrent-特性的结合\",\"children\":[]},{\"level\":3,\"title\":\"9. 浏览器兼容性\",\"slug\":\"_9-浏览器兼容性\",\"link\":\"#_9-浏览器兼容性\",\"children\":[]},{\"level\":3,\"title\":\"10. 与 Hooks 的兼容性\",\"slug\":\"_10-与-hooks-的兼容性\",\"link\":\"#_10-与-hooks-的兼容性\",\"children\":[]},{\"level\":3,\"title\":\"11. 性能调试\",\"slug\":\"_11-性能调试\",\"link\":\"#_11-性能调试\",\"children\":[]},{\"level\":3,\"title\":\"12. 代码分割和懒加载\",\"slug\":\"_12-代码分割和懒加载\",\"link\":\"#_12-代码分割和懒加载\",\"children\":[]}]}],\"git\":{\"updatedTime\":1728487189000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/React提升/Fiber.md\",\"excerpt\":\"<!-- @format -->\\n<h2>React Fiber</h2>\\n<p>React Fiber 是一个重写的 JavaScript 协调引擎，它是 React 核心库的一部分，用于改善 React 应用程序的性能和响应速度。</p>\\n<h3>1. 异步渲染能力</h3>\\n<p>Fiber 使得 React 能够将渲染工作分割成小的片段，允许 React 在渲染过程中暂停、终止或重用工作，从而实现更高效的更新和更好的用户体验。</p>\\n<h3>2. 重写的目的</h3>\\n<p>React Fiber 是为了解决大型应用的性能问题，特别是在移动设备上的性能问题。它允许 React 在渲染过程中优先处理高优先级的任务，从而提高应用的响应性。</p>\"}")
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
