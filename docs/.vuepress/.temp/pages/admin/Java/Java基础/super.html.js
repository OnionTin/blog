import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/super.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/super.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"super\",\"slug\":\"super\",\"link\":\"#super\",\"children\":[{\"level\":3,\"title\":\"super 关键字和 this 关键字的区别\",\"slug\":\"super-关键字和-this-关键字的区别\",\"link\":\"#super-关键字和-this-关键字的区别\",\"children\":[]},{\"level\":3,\"title\":\"具体说明 super 和 this\",\"slug\":\"具体说明-super-和-this\",\"link\":\"#具体说明-super-和-this\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java基础/super.md\",\"excerpt\":\"<h2>super</h2>\\n<p><code>super指向父类、this指向本类</code></p>\\n<p><code>构造方法中第一行要么this(参数)要么super(参数)，但不共存</code></p>\\n<p><code>至少有一个构造方法中调用super()</code></p>\\n<blockquote>\\n<p>super 是父类内存空间的标记，在用法上，我们可以当作父类对象的引用来使用，但是我们不能说</p>\\n<p>super 就是父类对象的引用</p>\\n</blockquote>\\n<h3>super 关键字和 this 关键字的区别</h3>\\n<ol>\\n<li><code>调用构造方法</code></li>\\n</ol>\"}")
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
