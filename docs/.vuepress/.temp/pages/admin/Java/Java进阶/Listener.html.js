import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Listener.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Listener.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Listener\",\"slug\":\"listener\",\"link\":\"#listener\",\"children\":[{\"level\":3,\"title\":\"监听器步骤\",\"slug\":\"监听器步骤\",\"link\":\"#监听器步骤\",\"children\":[]},{\"level\":3,\"title\":\"ServletContextListener\",\"slug\":\"servletcontextlistener\",\"link\":\"#servletcontextlistener\",\"children\":[]},{\"level\":3,\"title\":\"ServletRequestListener\",\"slug\":\"servletrequestlistener\",\"link\":\"#servletrequestlistener\",\"children\":[]},{\"level\":3,\"title\":\"Listener 的配置方式\",\"slug\":\"listener-的配置方式\",\"link\":\"#listener-的配置方式\",\"children\":[]},{\"level\":3,\"title\":\"Listener 案例\",\"slug\":\"listener-案例\",\"link\":\"#listener-案例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719328568000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Listener.md\",\"excerpt\":\"<h2>Listener</h2>\\n<blockquote>\\n<p>Listener：监听器，是 javaweb 三大组件(Servlet、Filter、Listener)之一。</p>\\n</blockquote>\\n<h3>监听器步骤</h3>\\n<ol>\\n<li>创建一个类，实现监听器接口</li>\\n<li>重写抽象方法</li>\\n<li>在 web.xml 中配置监听器</li>\\n</ol>\\n<h3>ServletContextListener</h3>\\n<blockquote>\\n<p>ServletContextListener：监听 ServletContext 对象创建和销毁，当项目启动时，ServletContext 对象被创建，当服务停止时，ServletContext 对象被销毁</p>\\n</blockquote>\"}")
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
