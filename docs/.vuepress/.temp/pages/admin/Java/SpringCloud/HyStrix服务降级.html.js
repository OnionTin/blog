import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/HyStrix服务降级.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/HyStrix%E6%9C%8D%E5%8A%A1%E9%99%8D%E7%BA%A7.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"HyStrix 服务降级\",\"slug\":\"hystrix-服务降级\",\"link\":\"#hystrix-服务降级\",\"children\":[{\"level\":3,\"title\":\"服务降级实现(采用的是 Feign 实现，所以只能是 Feign 这一套)\",\"slug\":\"服务降级实现-采用的是-feign-实现-所以只能是-feign-这一套\",\"link\":\"#服务降级实现-采用的是-feign-实现-所以只能是-feign-这一套\",\"children\":[]},{\"level\":3,\"title\":\"2. 创建 ServiceFallbackFactory 类\",\"slug\":\"_2-创建-servicefallbackfactory-类\",\"link\":\"#_2-创建-servicefallbackfactory-类\",\"children\":[]},{\"level\":3,\"title\":\"3. 修改 8088 客户端的配置文件\",\"slug\":\"_3-修改-8088-客户端的配置文件\",\"link\":\"#_3-修改-8088-客户端的配置文件\",\"children\":[]},{\"level\":3,\"title\":\"4. 修改 8808 客户端的启动类(正常不需要，因为扫描包已经放开)\",\"slug\":\"_4-修改-8808-客户端的启动类-正常不需要-因为扫描包已经放开\",\"link\":\"#_4-修改-8808-客户端的启动类-正常不需要-因为扫描包已经放开\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726824508000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/SpringCloud/HyStrix服务降级.md\",\"excerpt\":\"<h2>HyStrix 服务降级</h2>\\n<blockquote>\\n<p>比如在某一个时刻，A 服务(8001)很大的流量，导致服务出现问题，这个时候，我们就可以让 A 服务(8001)直接返回一个友好的提示，而不是让客户端等待或者抛出异常，这就是服务降级；或者我们可以将 A 服务(8001)的请求转发到 B 服务(8002)上，这就是服务熔断；再或者，我们可以让 A 服务(8001)直接返回一个默认值，这就是服务限流。\\n</p>\\n</blockquote>\\n<h3>服务降级实现(采用的是 Feign 实现，所以只能是 Feign 这一套)</h3>\\n<h4>1. 修改 Api 模块的接口</h4>\"}")
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
