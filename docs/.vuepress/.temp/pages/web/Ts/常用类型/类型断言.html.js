import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/常用类型/类型断言.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"类型断言(慎用,避免破坏类型安全)\",\"slug\":\"类型断言-慎用-避免破坏类型安全\",\"link\":\"#类型断言-慎用-避免破坏类型安全\",\"children\":[{\"level\":3,\"title\":\"类型断言的基本语法\",\"slug\":\"类型断言的基本语法\",\"link\":\"#类型断言的基本语法\",\"children\":[]},{\"level\":3,\"title\":\"<>语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":3,\"title\":\"使用场景\",\"slug\":\"使用场景\",\"link\":\"#使用场景\",\"children\":[]},{\"level\":3,\"title\":\"与接口一起使用\",\"slug\":\"与接口一起使用\",\"link\":\"#与接口一起使用\",\"children\":[]},{\"level\":3,\"title\":\"断言一个变量为 any 类型\",\"slug\":\"断言一个变量为-any-类型\",\"link\":\"#断言一个变量为-any-类型\",\"children\":[]},{\"level\":3,\"title\":\"断言函数返回值类型\",\"slug\":\"断言函数返回值类型\",\"link\":\"#断言函数返回值类型\",\"children\":[]},{\"level\":3,\"title\":\"非空断言运算符(后缀！)\",\"slug\":\"非空断言运算符-后缀\",\"link\":\"#非空断言运算符-后缀\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/常用类型/类型断言.md\",\"excerpt\":\"<h2>类型断言(慎用,避免破坏类型安全)</h2>\\n<blockquote>\\n<p>类型断言（Type Assertions）是一种告诉编译器你比它更了解某个变量的类型的机制。类型断言可以用来手动指定编译器可能不确定的变量的类型</p>\\n</blockquote>\\n<h3>类型断言的基本语法</h3>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">const</span> myCanvas <span class=\\\"token operator\\\">=</span> document<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">getElementById</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"main_canvas\\\"</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">as</span> HTMLCanvasElement<span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
