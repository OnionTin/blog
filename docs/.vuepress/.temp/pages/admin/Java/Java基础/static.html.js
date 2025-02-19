import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/static.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/static.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"static\",\"slug\":\"static\",\"link\":\"#static\",\"children\":[{\"level\":3,\"title\":\"特点\",\"slug\":\"特点\",\"link\":\"#特点\",\"children\":[]},{\"level\":3,\"title\":\"案例\",\"slug\":\"案例\",\"link\":\"#案例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java基础/static.md\",\"excerpt\":\"<h2>static</h2>\\n<p><code>共享成员、只能访问静态变量和方法、与实例对象无关、优先对象加载等问题</code></p>\\n<blockquote>\\n<p>static 是一个修饰符，代表静态的意思，用来修饰成员变量和成员方法的，不能修饰构造方法。</p>\\n</blockquote>\\n<h3>特点</h3>\\n<ol>\\n<li>\\n<p>被 static 修饰的成员变量和成员方法在内存中只有一个副本，被所有对象<code>共享</code>。</p>\\n</li>\\n<li>\\n<p>被 static 修饰的成员变量和成员方法<code>独立于该类的任何对象。也就是说，这些成员变量和成员方法与类的任何对象实例无关</code>，它们属于类本身，因此通过类名就可以访问它们。</p>\\n<p>类名.成员变量</p>\\n<p>类名.成员方法()</p>\\n</li>\\n<li>\\n<p>被 static 修饰的成员变量和成员方法随着字节码文件对象的加载而加载，所以是<code>优先于对象存在于内存中</code>。</p>\\n</li>\\n</ol>\"}")
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
