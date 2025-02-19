import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringBoot/分布式/分布式.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringBoot/%E5%88%86%E5%B8%83%E5%BC%8F/%E5%88%86%E5%B8%83%E5%BC%8F.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"分布式\",\"slug\":\"分布式\",\"link\":\"#分布式\",\"children\":[{\"level\":3,\"title\":\"分布式系统\",\"slug\":\"分布式系统\",\"link\":\"#分布式系统\",\"children\":[]},{\"level\":3,\"title\":\"负载均衡\",\"slug\":\"负载均衡\",\"link\":\"#负载均衡\",\"children\":[]},{\"level\":3,\"title\":\"服务降级\",\"slug\":\"服务降级\",\"link\":\"#服务降级\",\"children\":[]},{\"level\":3,\"title\":\"服务熔断\",\"slug\":\"服务熔断\",\"link\":\"#服务熔断\",\"children\":[]},{\"level\":3,\"title\":\"服务限流\",\"slug\":\"服务限流\",\"link\":\"#服务限流\",\"children\":[]},{\"level\":3,\"title\":\"RPC\",\"slug\":\"rpc\",\"link\":\"#rpc\",\"children\":[]},{\"level\":3,\"title\":\"Dubbo\",\"slug\":\"dubbo\",\"link\":\"#dubbo\",\"children\":[]},{\"level\":3,\"title\":\"Dubbo-admin\",\"slug\":\"dubbo-admin\",\"link\":\"#dubbo-admin\",\"children\":[]},{\"level\":3,\"title\":\"Zookeeper\",\"slug\":\"zookeeper\",\"link\":\"#zookeeper\",\"children\":[]},{\"level\":3,\"title\":\"Dubbo + Zookeeper 案例\",\"slug\":\"dubbo-zookeeper-案例\",\"link\":\"#dubbo-zookeeper-案例\",\"children\":[]},{\"level\":3,\"title\":\"分布式架构的四大核心问题\",\"slug\":\"分布式架构的四大核心问题\",\"link\":\"#分布式架构的四大核心问题\",\"children\":[]},{\"level\":3,\"title\":\"解决分布式架构的四大核心问题\",\"slug\":\"解决分布式架构的四大核心问题\",\"link\":\"#解决分布式架构的四大核心问题\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726160668000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/SpringBoot/分布式/分布式.md\",\"excerpt\":\"<!-- @format -->\\n<h2>分布式</h2>\\n<h3>分布式系统</h3>\\n<blockquote>\\n<p>分布式系统是若干独立计算机的集合，这些计算机对于用户来说就像单个相关系统。(举例：拼多多下单，下单有很多个服务，但是用户感觉就是一个服务，这些服务就是分布式)</p>\\n</blockquote>\\n<h3>负载均衡</h3>\\n<blockquote>\\n<p>假设 A 服务占用 98%资源，B 服务只占用了 10%资源，负载均衡就是将负载高的服务分配给负载低的服务，从而保证系统的稳定运行</p>\\n</blockquote>\\n<h3>服务降级</h3>\\n<blockquote>\\n<p>当服务出现问题，或者服务压力过大时，为了保证核心服务的正常运行，需要将非核心服务或者低优先级的服务暂时关闭或者延迟处理，待系统负载降低后，再重新开启或者恢复</p>\\n</blockquote>\"}")
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
