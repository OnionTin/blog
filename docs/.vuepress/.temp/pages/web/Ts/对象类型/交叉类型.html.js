import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/对象类型/交叉类型.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"交叉类型(&)\",\"slug\":\"交叉类型\",\"link\":\"#交叉类型\",\"children\":[{\"level\":3,\"title\":\"使用场景\",\"slug\":\"使用场景\",\"link\":\"#使用场景\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与联合类型\",\"slug\":\"交叉类型与联合类型\",\"link\":\"#交叉类型与联合类型\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与接口\",\"slug\":\"交叉类型与接口\",\"link\":\"#交叉类型与接口\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与函数\",\"slug\":\"交叉类型与函数\",\"link\":\"#交叉类型与函数\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与类\",\"slug\":\"交叉类型与类\",\"link\":\"#交叉类型与类\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与枚举\",\"slug\":\"交叉类型与枚举\",\"link\":\"#交叉类型与枚举\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与类型别名\",\"slug\":\"交叉类型与类型别名\",\"link\":\"#交叉类型与类型别名\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与泛型\",\"slug\":\"交叉类型与泛型\",\"link\":\"#交叉类型与泛型\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与类型断言\",\"slug\":\"交叉类型与类型断言\",\"link\":\"#交叉类型与类型断言\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与类型守卫\",\"slug\":\"交叉类型与类型守卫\",\"link\":\"#交叉类型与类型守卫\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与类型推断\",\"slug\":\"交叉类型与类型推断\",\"link\":\"#交叉类型与类型推断\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与类型检查\",\"slug\":\"交叉类型与类型检查\",\"link\":\"#交叉类型与类型检查\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与类型转换\",\"slug\":\"交叉类型与类型转换\",\"link\":\"#交叉类型与类型转换\",\"children\":[]},{\"level\":3,\"title\":\"交叉类型与类型合并\",\"slug\":\"交叉类型与类型合并\",\"link\":\"#交叉类型与类型合并\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/对象类型/交叉类型.md\",\"excerpt\":\"<h2>交叉类型(&amp;)</h2>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\"><span class=\\\"token constant\\\">A</span></span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span> name<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span> <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\"><span class=\\\"token constant\\\">B</span></span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span> age<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">number</span> <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\"><span class=\\\"token constant\\\">C</span></span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token constant\\\">A</span> <span class=\\\"token operator\\\">&amp;</span> <span class=\\\"token constant\\\">B</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">// C = { name: string; age: number; }</span>\\n</code></pre></div>\"}")
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
