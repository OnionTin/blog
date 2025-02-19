import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/类型操作/映射类型.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C/%E6%98%A0%E5%B0%84%E7%B1%BB%E5%9E%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"映射类型\",\"slug\":\"映射类型\",\"link\":\"#映射类型\",\"children\":[]},{\"level\":3,\"title\":\"基本语法\",\"slug\":\"基本语法\",\"link\":\"#基本语法\",\"children\":[]},{\"level\":3,\"title\":\"可选属性映射\",\"slug\":\"可选属性映射\",\"link\":\"#可选属性映射\",\"children\":[]},{\"level\":3,\"title\":\"只读属性映射\",\"slug\":\"只读属性映射\",\"link\":\"#只读属性映射\",\"children\":[]},{\"level\":3,\"title\":\"转换属性类型\",\"slug\":\"转换属性类型\",\"link\":\"#转换属性类型\",\"children\":[]},{\"level\":3,\"title\":\"条件属性映射\",\"slug\":\"条件属性映射\",\"link\":\"#条件属性映射\",\"children\":[]},{\"level\":3,\"title\":\"使用 as 进行类型断言\",\"slug\":\"使用-as-进行类型断言\",\"link\":\"#使用-as-进行类型断言\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Ts/类型操作/映射类型.md\",\"excerpt\":\"<h3>映射类型</h3>\\n<blockquote>\\n<p>映射类型（Mapped Types）是一种强大的类型构造功能，它允许你根据一个现有类型创建一个新的类型，并且可以为它的属性执行一个映射函数。这在处理具有相同类型属性的对象或数组时特别有用。</p>\\n</blockquote>\\n<h3>基本语法</h3>\\n<blockquote>\\n<p>T 是一个类型，P 是 T 的属性键的联合。对于 T 的每个属性 P，映射类型会创建一个同名的属性，其类型为 T[P]。</p>\\n</blockquote>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\">MappedType<span class=\\\"token operator\\\">&lt;</span><span class=\\\"token constant\\\">T</span><span class=\\\"token operator\\\">&gt;</span></span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token punctuation\\\">[</span><span class=\\\"token constant\\\">P</span> <span class=\\\"token keyword\\\">in</span> <span class=\\\"token keyword\\\">keyof</span> <span class=\\\"token constant\\\">T</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token operator\\\">?</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token constant\\\">T</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token constant\\\">P</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
