import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/多态.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E5%A4%9A%E6%80%81.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"多态\",\"slug\":\"多态\",\"link\":\"#多态\",\"children\":[{\"level\":3,\"title\":\"多态的用法\",\"slug\":\"多态的用法\",\"link\":\"#多态的用法\",\"children\":[]},{\"level\":3,\"title\":\"多态间子父类之间成员变量的关系(编译看左边，运行看左边)\",\"slug\":\"多态间子父类之间成员变量的关系-编译看左边-运行看左边\",\"link\":\"#多态间子父类之间成员变量的关系-编译看左边-运行看左边\",\"children\":[]},{\"level\":3,\"title\":\"多态间子父类之间成员方法的关系(编译看左边，运行看右边)\",\"slug\":\"多态间子父类之间成员方法的关系-编译看左边-运行看右边\",\"link\":\"#多态间子父类之间成员方法的关系-编译看左边-运行看右边\",\"children\":[]},{\"level\":3,\"title\":\"多态间子父类之间静态成员的关系(多态，静态，成员变量和成员方法，编译看左边，运行看左边)\",\"slug\":\"多态间子父类之间静态成员的关系-多态-静态-成员变量和成员方法-编译看左边-运行看左边\",\"link\":\"#多态间子父类之间静态成员的关系-多态-静态-成员变量和成员方法-编译看左边-运行看左边\",\"children\":[]},{\"level\":3,\"title\":\"多态的实际应用\",\"slug\":\"多态的实际应用\",\"link\":\"#多态的实际应用\",\"children\":[]},{\"level\":3,\"title\":\"向上转型(就是多态)\",\"slug\":\"向上转型-就是多态\",\"link\":\"#向上转型-就是多态\",\"children\":[]},{\"level\":3,\"title\":\"向下转型(解决多态的弊端)\",\"slug\":\"向下转型-解决多态的弊端\",\"link\":\"#向下转型-解决多态的弊端\",\"children\":[]}]}],\"git\":{\"updatedTime\":1715073877000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/Java基础/多态.md\",\"excerpt\":\"<h2>多态</h2>\\n<p><code>运行和编译看哪边指的是等号的左边和右边，即看实例对象的类型；</code></p>\\n<p><code>正常情况下，父类不能使用子类中特有的内容</code></p>\\n<p><code>向上转型(多态)、向下转型Zi zi = (Zi)Fu。</code></p>\\n<blockquote>\\n<p>前提条件:</p>\\n<ol>\\n<li>\\n<p>要有继承关系</p>\\n</li>\\n<li>\\n<p>要有方法的重写</p>\\n</li>\\n<li>\\n<p>要有父类引用指向子类对象</p>\\n</li>\\n</ol>\\n</blockquote>\\n<h3>多态的用法</h3>\"}")
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
