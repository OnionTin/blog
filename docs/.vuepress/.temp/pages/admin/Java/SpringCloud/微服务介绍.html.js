import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/微服务介绍.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%BB%8B%E7%BB%8D.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"微服务架构介绍\",\"slug\":\"微服务架构介绍\",\"link\":\"#微服务架构介绍\",\"children\":[{\"level\":3,\"title\":\"微服务架构\",\"slug\":\"微服务架构\",\"link\":\"#微服务架构\",\"children\":[]},{\"level\":3,\"title\":\"微服务架构四大核心问题\",\"slug\":\"微服务架构四大核心问题\",\"link\":\"#微服务架构四大核心问题\",\"children\":[]},{\"level\":3,\"title\":\"三大解决方案\",\"slug\":\"三大解决方案\",\"link\":\"#三大解决方案\",\"children\":[]},{\"level\":3,\"title\":\"微服务架构技术栈\",\"slug\":\"微服务架构技术栈\",\"link\":\"#微服务架构技术栈\",\"children\":[]},{\"level\":3,\"title\":\"Spring Boot 和 Spring Cloud 版本关系\",\"slug\":\"spring-boot-和-spring-cloud-版本关系\",\"link\":\"#spring-boot-和-spring-cloud-版本关系\",\"children\":[]},{\"level\":3,\"title\":\"实际开发版本选择\",\"slug\":\"实际开发版本选择\",\"link\":\"#实际开发版本选择\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727061891000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":3}]},\"filePathRelative\":\"admin/Java/SpringCloud/微服务介绍.md\",\"excerpt\":\"<h2>微服务架构介绍</h2>\\n<h3>微服务架构</h3>\\n<p>\\n\\n</p>\\n<h3>微服务架构四大核心问题</h3>\\n<ol>\\n<li>服务如何拆分？(Api Gateway)</li>\\n<li>服务之间如何通信？(Http || RPC)</li>\\n<li>服务如何治理？(注册中心)</li>\\n<li>数据一致性如何保证？(熔断机制)</li>\\n</ol>\\n<h3>三大解决方案</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方案</th>\\n<th>路由网关</th>\\n<th>通信</th>\\n<th>服务中心</th>\\n<th>熔断机制</th>\\n<th>优缺点</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>SpringCloud + NetFlix</td>\\n<td>Zuul</td>\\n<td>HTTP</td>\\n<td>Eureka</td>\\n<td>Hystrix</td>\\n<td>一站式解决，2018 年 12 月停更了</td>\\n</tr>\\n<tr>\\n<td>Dubbo + Zookeeper</td>\\n<td>本身没有，找第三方或自己实现</td>\\n<td>RPC</td>\\n<td>Zookeeper</td>\\n<td>常用第三方 Hystrix</td>\\n<td>PRC 很厉害，专门做这个的</td>\\n</tr>\\n<tr>\\n<td>SpringCloudAlibaba</td>\\n<td>Gateway</td>\\n<td>HTTP</td>\\n<td>Nacos</td>\\n<td>Sentinel</td>\\n<td>比方案 1 更简便</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
