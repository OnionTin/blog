import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/对象类型/泛型对象类型/readonly元组类型.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/readonly%E5%85%83%E7%BB%84%E7%B1%BB%E5%9E%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Readonly 元组类型\",\"slug\":\"readonly-元组类型\",\"link\":\"#readonly-元组类型\",\"children\":[{\"level\":3,\"title\":\"定义 Readonly 元组类型\",\"slug\":\"定义-readonly-元组类型\",\"link\":\"#定义-readonly-元组类型\",\"children\":[]},{\"level\":3,\"title\":\"泛型 Readonly 元组类型\",\"slug\":\"泛型-readonly-元组类型\",\"link\":\"#泛型-readonly-元组类型\",\"children\":[]},{\"level\":3,\"title\":\"在对象类型中使用 Readonly 元组类型\",\"slug\":\"在对象类型中使用-readonly-元组类型\",\"link\":\"#在对象类型中使用-readonly-元组类型\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Ts/对象类型/泛型对象类型/readonly元组类型.md\",\"excerpt\":\"<h2>Readonly 元组类型</h2>\\n<h3>定义 Readonly 元组类型</h3>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token comment\\\">// 定义一个只读元组类型</span>\\n<span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\">ReadonlyTuple</span> <span class=\\\"token operator\\\">=</span> Readonly<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token builtin\\\">boolean</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token operator\\\">&gt;</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">const</span> readonlyTuple<span class=\\\"token operator\\\">:</span> ReadonlyTuple <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">42</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"hello\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token boolean\\\">true</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">// 以下操作都是不允许的，会导致编译错误</span>\\n<span class=\\\"token comment\\\">// readonlyTuple[0] = 1;</span>\\n<span class=\\\"token comment\\\">// readonlyTuple.push(5);</span>\\n</code></pre></div>\"}")
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
