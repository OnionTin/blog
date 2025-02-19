import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/方法的重载.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E6%96%B9%E6%B3%95%E7%9A%84%E9%87%8D%E8%BD%BD.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"重载(@Overload)\",\"slug\":\"重载-overload\",\"link\":\"#重载-overload\",\"children\":[{\"level\":3,\"title\":\"1. 重载的概念\",\"slug\":\"_1-重载的概念\",\"link\":\"#_1-重载的概念\",\"children\":[]},{\"level\":3,\"title\":\"3. 重载和重写的区别\",\"slug\":\"_3-重载和重写的区别\",\"link\":\"#_3-重载和重写的区别\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710494011000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/Java基础/方法的重载.md\",\"excerpt\":\"<h2>重载(@Overload)</h2>\\n<h3>1. 重载的概念</h3>\\n<ul>\\n<li>重载：在同一个类中，出现多个方法的名字相同，但是它们的形参（参数个数、参数类型、参数顺序）不同的多个方法。</li>\\n<li>方法的重载与返回值类型无关。</li>\\n</ul>\\n<h3>3. 重载和重写的区别</h3>\\n<ul>\\n<li>\\n<a active=\\\"\\\" href=\\\"/blog/admin/Java/Java基础/方法的重载.md\\\" target=\\\"_blank\\\">重载</a>：发生在同一个类中，方法名必须相同，参数类型不同、个数不同、顺序不同，通过同名不同参数的方法重载。</li>\\n<li>\\n<a href=\\\"/blog/admin/Java/Java基础/重写.md\\\" target=\\\"_blank\\\">重写</a>：子类根据需要对从父类继承来的方法进行改造，使得父类方法在子类中得到新的实现版本。</li>\\n<li>重写和重载都是实现多态的方式，区别在于<code>重载</code>发生于<code>同一个类</code>中，重载发生在<code>编译期</code>，<code>重写</code>发生于<code>继承体系</code>中，发生在<code>运行期</code>。</li>\\n</ul>\"}")
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
