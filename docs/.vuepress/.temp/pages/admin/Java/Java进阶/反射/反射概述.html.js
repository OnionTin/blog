import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/反射/反射概述.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E5%8F%8D%E5%B0%84%E6%A6%82%E8%BF%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"反射概述\",\"slug\":\"反射概述\",\"link\":\"#反射概述\",\"children\":[{\"level\":3,\"title\":\"Class 对象加载过程（字节码文件加载过程）\",\"slug\":\"class-对象加载过程-字节码文件加载过程\",\"link\":\"#class-对象加载过程-字节码文件加载过程\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/反射/反射概述.md\",\"excerpt\":\"<h2>反射概述</h2>\\n<p>正射？</p>\\n<ol>\\n<li>先创建对象</li>\\n<li>调用对象的属性或方法</li>\\n</ol>\\n<p>反射？</p>\\n<ol>\\n<li>先创建属性或者方法对象</li>\\n<li>将属性或者方法对象赋值给某个对象</li>\\n</ol>\\n<p></p>\\n<h3>Class 对象加载过程（字节码文件加载过程）</h3>\\n<p></p>\\n\"}")
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
