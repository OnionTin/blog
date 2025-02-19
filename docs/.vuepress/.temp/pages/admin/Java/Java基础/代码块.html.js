import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/代码块.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E4%BB%A3%E7%A0%81%E5%9D%97.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"代码块\",\"slug\":\"代码块\",\"link\":\"#代码块\",\"children\":[{\"level\":3,\"title\":\"局部代码块\",\"slug\":\"局部代码块\",\"link\":\"#局部代码块\",\"children\":[]},{\"level\":3,\"title\":\"构造代码块\",\"slug\":\"构造代码块\",\"link\":\"#构造代码块\",\"children\":[]},{\"level\":3,\"title\":\"静态代码块\",\"slug\":\"静态代码块\",\"link\":\"#静态代码块\",\"children\":[]},{\"level\":3,\"title\":\"类的初始化顺序\",\"slug\":\"类的初始化顺序\",\"link\":\"#类的初始化顺序\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java基础/代码块.md\",\"excerpt\":\"<h2>代码块</h2>\\n<p><code>局部代码块: 方法执行后消失，释放内存；</code></p>\\n<p><code>构造代码块: 抽离共有部分，每次创建对象都执行；</code></p>\\n<p><code>静态代码块: 只加载一次，抽离共有部分</code></p>\\n<h3>局部代码块</h3>\\n<blockquote>\\n<p>定义在方法中的代码块就是局部代码块</p>\\n<p>作用: 能够让局部变量，更早的在内存中消失，节省内存空间</p>\\n</blockquote>\\n<div class=\\\"language-java\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token comment\\\">// 基础用法</span>\\n<span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">Demo</span><span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">test</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token comment\\\">// 这就是局部代码块</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n</code></pre></div>\"}")
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
