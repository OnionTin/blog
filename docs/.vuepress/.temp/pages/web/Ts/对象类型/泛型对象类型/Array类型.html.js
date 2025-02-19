import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/对象类型/泛型对象类型/Array类型.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/Array%E7%B1%BB%E5%9E%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Array 类型\",\"slug\":\"array-类型\",\"link\":\"#array-类型\",\"children\":[{\"level\":3,\"title\":\"使用泛型接口定义数组类型\",\"slug\":\"使用泛型接口定义数组类型\",\"link\":\"#使用泛型接口定义数组类型\",\"children\":[]},{\"level\":3,\"title\":\"使用泛型类型别名定义数组类型\",\"slug\":\"使用泛型类型别名定义数组类型\",\"link\":\"#使用泛型类型别名定义数组类型\",\"children\":[]},{\"level\":3,\"title\":\"使用泛型类定义数组类型\",\"slug\":\"使用泛型类定义数组类型\",\"link\":\"#使用泛型类定义数组类型\",\"children\":[]},{\"level\":3,\"title\":\"使用泛型约束定义数组类型\",\"slug\":\"使用泛型约束定义数组类型\",\"link\":\"#使用泛型约束定义数组类型\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Ts/对象类型/泛型对象类型/Array类型.md\",\"excerpt\":\"<h2>Array 类型</h2>\\n<blockquote>\\n<p>可以使用泛型来定义数组类型，这样可以确保数组中的元素都是相同的类型。这可以通过两种方式实现：使用泛型接口或泛型类型别名。</p>\\n</blockquote>\\n<h3>使用泛型接口定义数组类型</h3>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">interface</span> <span class=\\\"token class-name\\\">ArrayOfNumbers</span> <span class=\\\"token punctuation\\\">{</span>\\n  data<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">interface</span> <span class=\\\"token class-name\\\">ArrayOfUsers</span> <span class=\\\"token punctuation\\\">{</span>\\n  data<span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">{</span>\\n    id<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">;</span>\\n    name<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
