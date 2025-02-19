import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/Zuul路由网关.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/Zuul%E8%B7%AF%E7%94%B1%E7%BD%91%E5%85%B3.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Zuul\",\"slug\":\"zuul\",\"link\":\"#zuul\",\"children\":[{\"level\":3,\"title\":\"修改本地域名映射\",\"slug\":\"修改本地域名映射\",\"link\":\"#修改本地域名映射\",\"children\":[]},{\"level\":3,\"title\":\"项目搭建\",\"slug\":\"项目搭建\",\"link\":\"#项目搭建\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726824508000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/SpringCloud/Zuul路由网关.md\",\"excerpt\":\"<h2>Zuul</h2>\\n<blockquote>\\n<p>Zuul 包含了对请求的路由和过滤两个最主要的功能：</p>\\n<p>其中路由功能负责将外部请求转发到具体的微服务实例上，是实现外部访问统一入口的基础，而过滤器功能则负责对请求的处理过程进行干预，是实现请求校验，服务聚合等功能的基础。Zuul 和 Eureka 进行整合，将 Zuul 自身注册为 Eureka 服务治理下的应用，同时从 Eureka 中获得其他微服务的消息，也即以后的访问微服务都是通过 Zuul 跳转后获得。</p>\\n</blockquote>\\n<blockquote>\\n<p>注意：Zuul 服务最终还是会注册进 Eureka</p>\\n<p>提供：代理+路由+过滤三大功能！</p>\\n</blockquote>\"}")
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
