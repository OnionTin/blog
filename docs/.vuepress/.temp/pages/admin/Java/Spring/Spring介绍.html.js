import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Spring/Spring介绍.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Spring/Spring%E4%BB%8B%E7%BB%8D.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Spring 介绍\",\"slug\":\"spring-介绍\",\"link\":\"#spring-介绍\",\"children\":[{\"level\":3,\"title\":\"IOC\",\"slug\":\"ioc\",\"link\":\"#ioc\",\"children\":[]},{\"level\":3,\"title\":\"AOP\",\"slug\":\"aop\",\"link\":\"#aop\",\"children\":[]},{\"level\":3,\"title\":\"SSH 和 SSM\",\"slug\":\"ssh-和-ssm\",\"link\":\"#ssh-和-ssm\",\"children\":[]}]}],\"git\":{\"updatedTime\":1723195339000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Spring/Spring介绍.md\",\"excerpt\":\"<h2>Spring 介绍</h2>\\n<blockquote>\\n<p>Spring 用于简易开发，主要包括 IOC 和 AOP，其中 IOC 是 Spring 的核心，AOP 是 Spring 的扩展。\\nIOC 是控制反转，AOP 是面向切面编程。</p>\\n</blockquote>\\n<h3>IOC</h3>\\n<blockquote>\\n<p>IOC 是控制反转，控制，将对象的创建和销毁交给 Spring 管理；反转，原本对象的创建是由程序员创建并写死，但是现在要将对象的创建和销毁的控制权交给 Spring 管理。</p>\\n</blockquote>\\n<h3>AOP</h3>\\n<blockquote>\\n<p>AOP 是面向切面编程，将业务逻辑和业务逻辑的公共部分进行分离，例如日志、事务等。AOP 是 Spring 的扩展，主要用于解决业务逻辑和业务逻辑的公共部分进行分离的问题。</p>\\n</blockquote>\"}")
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
