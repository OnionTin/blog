import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/服务集群.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/%E6%9C%8D%E5%8A%A1%E9%9B%86%E7%BE%A4.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"服务集群\",\"slug\":\"服务集群\",\"link\":\"#服务集群\",\"children\":[{\"level\":3,\"title\":\"修改本地域名映射\",\"slug\":\"修改本地域名映射\",\"link\":\"#修改本地域名映射\",\"children\":[]},{\"level\":3,\"title\":\"集群服务搭建\",\"slug\":\"集群服务搭建\",\"link\":\"#集群服务搭建\",\"children\":[]},{\"level\":3,\"title\":\"1. 在父项目(ths-spring-cloud)中再创建两个模块，并导入依赖\",\"slug\":\"_1-在父项目-ths-spring-cloud-中再创建两个模块-并导入依赖\",\"link\":\"#_1-在父项目-ths-spring-cloud-中再创建两个模块-并导入依赖\",\"children\":[]},{\"level\":3,\"title\":\"2. 将 project-eureka-7001 模块中的配置文件复制到 7002 和 7003 模块中，并修改配置文件\",\"slug\":\"_2-将-project-eureka-7001-模块中的配置文件复制到-7002-和-7003-模块中-并修改配置文件\",\"link\":\"#_2-将-project-eureka-7001-模块中的配置文件复制到-7002-和-7003-模块中-并修改配置文件\",\"children\":[]},{\"level\":3,\"title\":\"修改 7003\",\"slug\":\"修改-7003\",\"link\":\"#修改-7003\",\"children\":[]},{\"level\":3,\"title\":\"3. 将服务注册到集群\",\"slug\":\"_3-将服务注册到集群\",\"link\":\"#_3-将服务注册到集群\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726648298000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringCloud/服务集群.md\",\"excerpt\":\"<h2>服务集群</h2>\\n<blockquote>\\n<p>什么是服务集群？比如有三个微服务，他们之间互相绑定，形成了一个集群，他们之间，也可以。好处是当其中一个服务挂掉了，其他的服务还可以继续运行。用户可以通过其他服务获取信息，不影响用户体验。</p>\\n</blockquote>\\n<h3>修改本地域名映射</h3>\\n<blockquote>\\n<p>C 盘/windows/system32/drivers/etc/hosts 文件，添加如下映射；此时在本地访问 eureka7001.com，eureka7002.com，eureka7003.com 都会映射到 127.0.0.1，即本机。</p>\\n</blockquote>\"}")
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
