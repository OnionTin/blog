import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/技术点/生命周期.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"生命周期\",\"slug\":\"生命周期\",\"link\":\"#生命周期\",\"children\":[{\"level\":3,\"title\":\"Setup 阶段\",\"slug\":\"setup-阶段\",\"link\":\"#setup-阶段\",\"children\":[]},{\"level\":3,\"title\":\"创建阶段\",\"slug\":\"创建阶段\",\"link\":\"#创建阶段\",\"children\":[]},{\"level\":3,\"title\":\"装载阶段\",\"slug\":\"装载阶段\",\"link\":\"#装载阶段\",\"children\":[]},{\"level\":3,\"title\":\"更新阶段\",\"slug\":\"更新阶段\",\"link\":\"#更新阶段\",\"children\":[]},{\"level\":3,\"title\":\"渲染阶段\",\"slug\":\"渲染阶段\",\"link\":\"#渲染阶段\",\"children\":[]},{\"level\":3,\"title\":\"销毁阶段\",\"slug\":\"销毁阶段\",\"link\":\"#销毁阶段\",\"children\":[]},{\"level\":3,\"title\":\"异步操作\",\"slug\":\"异步操作\",\"link\":\"#异步操作\",\"children\":[]},{\"level\":3,\"title\":\"错误处理\",\"slug\":\"错误处理\",\"link\":\"#错误处理\",\"children\":[]},{\"level\":3,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/技术点/生命周期.md\",\"excerpt\":\"<h2>生命周期</h2>\\n<blockquote>\\n<p>在 Vue 3 中，组件的生命周期钩子用于在不同阶段执行代码，例如创建、更新、渲染和销毁组件。以下是 Vue 3 中组件生命周期的主要钩子：</p>\\n</blockquote>\\n<h3>Setup 阶段</h3>\\n<ul>\\n<li><code>setup()</code>：在组件实例创建之前执行，用于声明响应式数据和计算属性。</li>\\n</ul>\\n<h3>创建阶段</h3>\\n<ul>\\n<li><code>beforeCreate()</code>：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。</li>\\n<li><code>created()</code>：在实例创建完成后被调用，此时实例已完成数据观测、属性和方法的运算，但挂载阶段还未开始，<code>$el</code> 属性还未显示出来。</li>\\n</ul>\"}")
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
