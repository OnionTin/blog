import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/远程配置测试.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/%E8%BF%9C%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%B5%8B%E8%AF%95.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"远程配置测试\",\"slug\":\"远程配置测试\",\"link\":\"#远程配置测试\",\"children\":[{\"level\":3,\"title\":\"将 7001 服务和 8001 客户端修改成远程仓库配置\",\"slug\":\"将-7001-服务和-8001-客户端修改成远程仓库配置\",\"link\":\"#将-7001-服务和-8001-客户端修改成远程仓库配置\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727061891000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/SpringCloud/远程配置测试.md\",\"excerpt\":\"<h2>远程配置测试</h2>\\n<blockquote>\\n<p>其实 SpringCloudConfig 就是通过服务端去连接远程仓库，并提供可以访问的服务，客户端从服务端获取想要的配置信息并使用。这样就把项目相关的配置，全都放到了远程仓库中，实现了配置的集中管理(分布式项目集群环境下，配置文件的管理尤为重要，所以集中管理配置文件是很有必要的)。当我们修改了远程仓库中的配置后，客户端重新启动就会更换到新的配置。</p>\\n</blockquote>\\n<h3>将 7001 服务和 8001 客户端修改成远程仓库配置</h3>\\n<h4>1.在父项目中创建两个子模块(project-config-eureka-7001 和 project-config-provider-8001)</h4>\"}")
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
