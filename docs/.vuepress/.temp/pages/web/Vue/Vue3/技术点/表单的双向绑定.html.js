import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/技术点/表单的双向绑定.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E8%A1%A8%E5%8D%95%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"表单的双向绑定\",\"slug\":\"表单的双向绑定\",\"link\":\"#表单的双向绑定\",\"children\":[{\"level\":3,\"title\":\"基本用法\",\"slug\":\"基本用法\",\"link\":\"#基本用法\",\"children\":[]},{\"level\":3,\"title\":\"复选框和单选按钮\",\"slug\":\"复选框和单选按钮\",\"link\":\"#复选框和单选按钮\",\"children\":[]},{\"level\":3,\"title\":\"下拉选择器\",\"slug\":\"下拉选择器\",\"link\":\"#下拉选择器\",\"children\":[]},{\"level\":3,\"title\":\"自定义组件\",\"slug\":\"自定义组件\",\"link\":\"#自定义组件\",\"children\":[]},{\"level\":3,\"title\":\"修饰符\",\"slug\":\"修饰符\",\"link\":\"#修饰符\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/技术点/表单的双向绑定.md\",\"excerpt\":\"<h2>表单的双向绑定</h2>\\n<blockquote>\\n<p>在 Vue 3 中，v-model 是实现表单输入和应用状态之间双向绑定的指令。它不仅简化了数据的同步操作，还使得用户输入和数据模型之间的交互变得更加直观和高效。</p>\\n</blockquote>\\n<h3>基本用法</h3>\\n<blockquote>\\n<p>在文本输入框中使用 v-model 来创建双向数据绑定：这里，message 是组件的数据属性，用户的输入会实时更新这个属性的值，反之亦然。</p>\\n</blockquote>\\n<div class=\\\"language-html\\\" data-ext=\\\"html\\\" data-title=\\\"html\\\"><pre class=\\\"language-html\\\"><code><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>input</span> <span class=\\\"token attr-name\\\">v-model</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>message<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">placeholder</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>edit me<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token punctuation\\\">/&gt;</span></span>\\n</code></pre></div>\"}")
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
