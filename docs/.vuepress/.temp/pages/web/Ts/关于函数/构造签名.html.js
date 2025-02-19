import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/关于函数/构造签名.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E6%9E%84%E9%80%A0%E7%AD%BE%E5%90%8D.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"构造签名\",\"slug\":\"构造签名\",\"link\":\"#构造签名\",\"children\":[{\"level\":3,\"title\":\"基本语法\",\"slug\":\"基本语法\",\"link\":\"#基本语法\",\"children\":[]},{\"level\":3,\"title\":\"实现构造签名\",\"slug\":\"实现构造签名\",\"link\":\"#实现构造签名\",\"children\":[]},{\"level\":3,\"title\":\"带有多个参数的构造签名\",\"slug\":\"带有多个参数的构造签名\",\"link\":\"#带有多个参数的构造签名\",\"children\":[]},{\"level\":3,\"title\":\"带有可选参数的构造签名\",\"slug\":\"带有可选参数的构造签名\",\"link\":\"#带有可选参数的构造签名\",\"children\":[]},{\"level\":3,\"title\":\"带有剩余参数的构造签名\",\"slug\":\"带有剩余参数的构造签名\",\"link\":\"#带有剩余参数的构造签名\",\"children\":[]},{\"level\":3,\"title\":\"泛型构造签名\",\"slug\":\"泛型构造签名\",\"link\":\"#泛型构造签名\",\"children\":[]},{\"level\":3,\"title\":\"多个构造签名\",\"slug\":\"多个构造签名\",\"link\":\"#多个构造签名\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/关于函数/构造签名.md\",\"excerpt\":\"<h2>构造签名</h2>\\n<blockquote>\\n<p>构造签名（Construct Signatures）是接口的一部分，用于描述一个构造函数的参数列表和返回类型。这允许接口能够描述一个类或者一个函数构造器的形态。</p>\\n</blockquote>\\n<h3>基本语法</h3>\\n<blockquote>\\n<p>构造签名通常与 new 关键字一起使用，表示创建一个新对象的构造函数。这个接口 Constructable 描述了一个构造函数，它接受一个 string 参数，并返回一个 Object 类型的新实例。</p>\\n</blockquote>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">interface</span> <span class=\\\"token class-name\\\">Constructable</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">new</span> <span class=\\\"token punctuation\\\">(</span>arg<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">:</span> Object<span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
