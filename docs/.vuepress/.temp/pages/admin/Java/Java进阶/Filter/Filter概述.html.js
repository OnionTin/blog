import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Filter/Filter概述.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Filter/Filter%E6%A6%82%E8%BF%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Filter 概述\",\"slug\":\"filter-概述\",\"link\":\"#filter-概述\",\"children\":[{\"level\":3,\"title\":\"过滤器的步骤\",\"slug\":\"过滤器的步骤\",\"link\":\"#过滤器的步骤\",\"children\":[]},{\"level\":3,\"title\":\"过滤器的使用场景\",\"slug\":\"过滤器的使用场景\",\"link\":\"#过滤器的使用场景\",\"children\":[]},{\"level\":3,\"title\":\"Filter 生命周期\",\"slug\":\"filter-生命周期\",\"link\":\"#filter-生命周期\",\"children\":[]},{\"level\":3,\"title\":\"Filter + Servlet 执行顺序\",\"slug\":\"filter-servlet-执行顺序\",\"link\":\"#filter-servlet-执行顺序\",\"children\":[]},{\"level\":3,\"title\":\"url-pattern 配置\",\"slug\":\"url-pattern-配置\",\"link\":\"#url-pattern-配置\",\"children\":[]},{\"level\":3,\"title\":\"Filter 的配置方式\",\"slug\":\"filter-的配置方式\",\"link\":\"#filter-的配置方式\",\"children\":[]},{\"level\":3,\"title\":\"过滤器链及执行顺序\",\"slug\":\"过滤器链及执行顺序\",\"link\":\"#过滤器链及执行顺序\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719328568000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Filter/Filter概述.md\",\"excerpt\":\"<h2>Filter 概述</h2>\\n<blockquote>\\n<p>Filter：拦截，过滤器，javaweb 三大组件(servlet、filter、listener)之一，属于服务器端；</p>\\n<p>过滤器的目的就是为了提高代码的复用性，简化代码；</p>\\n<p>Filter 与 Servlet 非常相似，区别在于 Servlet 用于处理客户端请求，生成响应，而 Filter 用于对 Servlet 产生的响应进行拦截和过滤，从而实现一些特殊的功能。</p>\\n<p>Filter 实现类是 javax.servlet.Filter</p>\\n</blockquote>\\n<h3>过滤器的步骤</h3>\"}")
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
