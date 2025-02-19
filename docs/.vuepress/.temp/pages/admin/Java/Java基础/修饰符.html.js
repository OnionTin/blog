import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/修饰符.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E4%BF%AE%E9%A5%B0%E7%AC%A6.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"修饰符\",\"slug\":\"修饰符\",\"link\":\"#修饰符\",\"children\":[{\"level\":3,\"title\":\"导包\",\"slug\":\"导包\",\"link\":\"#导包\",\"children\":[]},{\"level\":3,\"title\":\"访问权限修饰符\",\"slug\":\"访问权限修饰符\",\"link\":\"#访问权限修饰符\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java基础/修饰符.md\",\"excerpt\":\"<h2>修饰符</h2>\\n<p><code>开发中一般用public 修饰类，用private 修饰属性</code></p>\\n<p><code>public &gt; protected &gt; 默认的(什么都不写) &gt; private</code></p>\\n<p><code>public：都行</code></p>\\n<p><code>protected：既不同包又不继承那不行</code></p>\\n<p><code>默认的：不同包就不行</code></p>\\n<p><code>private：只有同类才能访问</code></p>\\n<blockquote>\\n<p>以后开发中，一个类的各个组成部分都用什么修饰符来修饰</p>\\n<p>类: public</p>\\n<p>属性: private</p>\\n<p>构造方法: public，偶尔用 private</p>\\n<p>成员方法: public</p>\\n</blockquote>\"}")
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
