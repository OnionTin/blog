import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/Spring-cloud介绍.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/Spring-cloud%E4%BB%8B%E7%BB%8D.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Spring-cloud 介绍\",\"slug\":\"spring-cloud-介绍\",\"link\":\"#spring-cloud-介绍\",\"children\":[{\"level\":3,\"title\":\"什么是 Spring Cloud\",\"slug\":\"什么是-spring-cloud\",\"link\":\"#什么是-spring-cloud\",\"children\":[]},{\"level\":3,\"title\":\"Spring Cloud 的主要功能\",\"slug\":\"spring-cloud-的主要功能\",\"link\":\"#spring-cloud-的主要功能\",\"children\":[]}]}],\"git\":{\"updatedTime\":1725354999000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringCloud/Spring-cloud介绍.md\",\"excerpt\":\"<h2>Spring-cloud 介绍</h2>\\n<h3>什么是 Spring Cloud</h3>\\n<p>Spring Cloud 是一系列框架的有序集合。它利用 Spring Boot 的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用 Spring Boot 的开发风格做到一键启动和部署。Spring Cloud 并没有重复制造轮子，它只是将目前各家公司开发的比较成熟、经得起实际考验的服务框架组合起来，通过 Spring Boot 风格进行再封装屏蔽掉了复杂的配置和实现原理，最终给开发者留出了一套简单易懂、易部署和易维护的分布式系统开发工具包。</p>\"}")
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
