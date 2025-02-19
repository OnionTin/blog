import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/继承.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E7%BB%A7%E6%89%BF.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"继承(extends)\",\"slug\":\"继承-extends\",\"link\":\"#继承-extends\",\"children\":[{\"level\":3,\"title\":\"继承的好处\",\"slug\":\"继承的好处\",\"link\":\"#继承的好处\",\"children\":[]},{\"level\":3,\"title\":\"继承的弊端\",\"slug\":\"继承的弊端\",\"link\":\"#继承的弊端\",\"children\":[]},{\"level\":3,\"title\":\"继承的特点\",\"slug\":\"继承的特点\",\"link\":\"#继承的特点\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java基础/继承.md\",\"excerpt\":\"<h2>继承(extends)</h2>\\n<p><code>private、protected、构造方法不被继承、this、super等问题</code></p>\\n<blockquote>\\n<p>类 B 继承 类 A</p>\\n<p>类 A：父类，超类，基类</p>\\n<p>类 B：子类，派生类</p>\\n</blockquote>\\n<h3>继承的好处</h3>\\n<ul>\\n<li>提高代码的复用性</li>\\n<li>让类与类之间产生继承关系，这是构成多态的前提条件</li>\\n</ul>\\n<h3>继承的弊端</h3>\\n<ul>\\n<li>提高了代码的耦合性（耦合性：程序间的依赖关系）\\n<ul>\\n<li>开发原则: 高内聚，低耦合\\n<ul>\\n<li>高内聚：是指一个人的能力越强越好</li>\\n<li>低耦合：是指一个人的关系越少越好</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\"}")
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
