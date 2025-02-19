import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/其他CompositionApi/响应式数据判断.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/%E5%93%8D%E5%BA%94%E5%BC%8F%E6%95%B0%E6%8D%AE%E5%88%A4%E6%96%AD.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Vue3 的响应式系统辅助函数\",\"slug\":\"vue3-的响应式系统辅助函数\",\"link\":\"#vue3-的响应式系统辅助函数\",\"children\":[{\"level\":3,\"title\":\"isRef\",\"slug\":\"isref\",\"link\":\"#isref\",\"children\":[]},{\"level\":3,\"title\":\"isReactive\",\"slug\":\"isreactive\",\"link\":\"#isreactive\",\"children\":[]},{\"level\":3,\"title\":\"isReadonly\",\"slug\":\"isreadonly\",\"link\":\"#isreadonly\",\"children\":[]},{\"level\":3,\"title\":\"isProxy\",\"slug\":\"isproxy\",\"link\":\"#isproxy\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/其他CompositionApi/响应式数据判断.md\",\"excerpt\":\"<h2>Vue3 的响应式系统辅助函数</h2>\\n<h3>isRef</h3>\\n<ul>\\n<li><strong>作用</strong>: 检查一个值是否为一个<code>ref</code>对象。</li>\\n</ul>\\n<h3>isReactive</h3>\\n<ul>\\n<li><strong>作用</strong>: 检查一个对象是否是由<code>reactive</code>创建的响应式代理。</li>\\n</ul>\\n<h3>isReadonly</h3>\\n<ul>\\n<li><strong>作用</strong>: 检查一个对象是否是由<code>readonly</code>创建的只读代理。</li>\\n</ul>\"}")
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
