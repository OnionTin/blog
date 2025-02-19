import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/其他CompositionApi/toRaw和markRaw.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/toRaw%E5%92%8CmarkRaw.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"toRaw 与 markRaw\",\"slug\":\"toraw-与-markraw\",\"link\":\"#toraw-与-markraw\",\"children\":[{\"level\":3,\"title\":\"toRaw\",\"slug\":\"toraw\",\"link\":\"#toraw\",\"children\":[]},{\"level\":3,\"title\":\"markRaw\",\"slug\":\"markraw\",\"link\":\"#markraw\",\"children\":[]},{\"level\":3,\"title\":\"toRaw 示例\",\"slug\":\"toraw-示例\",\"link\":\"#toraw-示例\",\"children\":[]},{\"level\":3,\"title\":\"markRaw 示例\",\"slug\":\"markraw-示例\",\"link\":\"#markraw-示例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/其他CompositionApi/toRaw和markRaw.md\",\"excerpt\":\"<h2>toRaw 与 markRaw</h2>\\n<h3>toRaw</h3>\\n<ul>\\n<li><strong>作用</strong>: 将一个由<code>reactive</code>生成的响应式对象转为普通对象。</li>\\n<li><strong>使用场景</strong>: 用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。</li>\\n</ul>\\n<h3>markRaw</h3>\\n<ul>\\n<li><strong>作用</strong>: 标记一个对象，使其永远不会再成为响应式对象。</li>\\n<li><strong>应用场景</strong>:\\n<ol>\\n<li>有些值不应被设置为响应式的，例如复杂的第三方类库等。</li>\\n<li>当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。</li>\\n</ol>\\n</li>\\n</ul>\"}")
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
