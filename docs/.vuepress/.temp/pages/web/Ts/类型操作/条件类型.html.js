import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/类型操作/条件类型.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C/%E6%9D%A1%E4%BB%B6%E7%B1%BB%E5%9E%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"条件类型\",\"slug\":\"条件类型\",\"link\":\"#条件类型\",\"children\":[{\"level\":3,\"title\":\"基本用法\",\"slug\":\"基本用法\",\"link\":\"#基本用法\",\"children\":[]},{\"level\":3,\"title\":\"嵌套条件类型\",\"slug\":\"嵌套条件类型\",\"link\":\"#嵌套条件类型\",\"children\":[]},{\"level\":3,\"title\":\"使用条件类型进行类型守卫\",\"slug\":\"使用条件类型进行类型守卫\",\"link\":\"#使用条件类型进行类型守卫\",\"children\":[]},{\"level\":3,\"title\":\"条件类型的分配行为\",\"slug\":\"条件类型的分配行为\",\"link\":\"#条件类型的分配行为\",\"children\":[]},{\"level\":3,\"title\":\"使用条件类型简化类型定义\",\"slug\":\"使用条件类型简化类型定义\",\"link\":\"#使用条件类型简化类型定义\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Ts/类型操作/条件类型.md\",\"excerpt\":\"<h2>条件类型</h2>\\n<blockquote>\\n<p>条件类型（Conditional Types）是一种高级类型功能，它允许你基于表达式的值来选择不同的类型。条件类型在编译时评估，并根据条件表达式的结果选择一个类型。</p>\\n</blockquote>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token comment\\\">// 条件类型的一般形式如下：</span>\\n<span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\">MyType</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token constant\\\">T</span> <span class=\\\"token keyword\\\">extends</span> <span class=\\\"token class-name\\\"><span class=\\\"token constant\\\">U</span></span> <span class=\\\"token operator\\\">?</span> <span class=\\\"token constant\\\">X</span> <span class=\\\"token operator\\\">:</span> <span class=\\\"token constant\\\">Y</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">// 这里，T extends U ? X : Y 是一个条件类型表达式，它表示：</span>\\n<span class=\\\"token comment\\\">// 如果类型 T 扩展（或符合）类型 U，则结果是类型 X。</span>\\n<span class=\\\"token comment\\\">// 否则，结果是类型 Y</span>\\n</code></pre></div>\"}")
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
