import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/SpringCloud基础项目/Dubbo和Cloud代码对比.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/SpringCloud%E5%9F%BA%E7%A1%80%E9%A1%B9%E7%9B%AE/Dubbo%E5%92%8CCloud%E4%BB%A3%E7%A0%81%E5%AF%B9%E6%AF%94.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Dubbo 和 Cloud 代码对比\",\"slug\":\"dubbo-和-cloud-代码对比\",\"link\":\"#dubbo-和-cloud-代码对比\",\"children\":[{\"level\":3,\"title\":\"Dubbo 实现流程\",\"slug\":\"dubbo-实现流程\",\"link\":\"#dubbo-实现流程\",\"children\":[]},{\"level\":3,\"title\":\"SpringCloud 实现流程\",\"slug\":\"springcloud-实现流程\",\"link\":\"#springcloud-实现流程\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726736496000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/SpringCloud/SpringCloud基础项目/Dubbo和Cloud代码对比.md\",\"excerpt\":\"<h2>Dubbo 和 Cloud 代码对比</h2>\\n<h3>Dubbo 实现流程</h3>\\n<ol>\\n<li>安装并启动 zookpeer，作为注册中心</li>\\n<li>在生产者项目中发布一个接口(@Service)到注册中心</li>\\n<li>在消费者中也要创建一个同生产者中相同接口</li>\\n<li>在消费者项目中引用(@Reference)注册中心的接口并调用</li>\\n</ol>\\n<p>\\n</p>\\n<h3>SpringCloud 实现流程</h3>\\n<blockquote>\\n<p>简单来说，就是 api 模块提供实体类，生产者模块提供接口实现，消费者模块通过 RestTemplate 调用接口</p>\\n</blockquote>\"}")
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
