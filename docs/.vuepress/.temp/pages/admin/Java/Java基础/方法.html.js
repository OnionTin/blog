import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/方法.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E6%96%B9%E6%B3%95.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"方法\",\"slug\":\"方法\",\"link\":\"#方法\",\"children\":[{\"level\":3,\"title\":\"作用\",\"slug\":\"作用\",\"link\":\"#作用\",\"children\":[]},{\"level\":3,\"title\":\"格式\",\"slug\":\"格式\",\"link\":\"#格式\",\"children\":[]},{\"level\":3,\"title\":\"修饰符\",\"slug\":\"修饰符\",\"link\":\"#修饰符\",\"children\":[]},{\"level\":3,\"title\":\"返回值类型\",\"slug\":\"返回值类型\",\"link\":\"#返回值类型\",\"children\":[]},{\"level\":3,\"title\":\"方法名\",\"slug\":\"方法名\",\"link\":\"#方法名\",\"children\":[]},{\"level\":3,\"title\":\"如何写一个方法\",\"slug\":\"如何写一个方法\",\"link\":\"#如何写一个方法\",\"children\":[]},{\"level\":3,\"title\":\"使用方法时需要注意的问题\",\"slug\":\"使用方法时需要注意的问题\",\"link\":\"#使用方法时需要注意的问题\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java基础/方法.md\",\"excerpt\":\"<h2>方法</h2>\\n<h3>作用</h3>\\n<ol>\\n<li>提高了代码的复用性</li>\\n<li>提高了代码的可读性和可维护性</li>\\n</ol>\\n<h3>格式</h3>\\n<p>修饰符 返回值类型 方法名(数据类型 变量名, 数据类型 变量名, ...){\\n执行的代码\\nreturn 返回值;\\n}</p>\\n<h3>修饰符</h3>\\n<ol>\\n<li>public 公共的，任何类都可以访问</li>\\n<li>private 私有的，只能在本类中访问</li>\\n<li>protected 受保护的，在本类，子类中可以访问</li>\\n<li>static 静态的，可以被类名调用，也可以被对象调用</li>\\n<li>abstract 抽象的，不能被实例化，只能被继承</li>\\n<li>final 最终的，不能被继承</li>\\n</ol>\"}")
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
