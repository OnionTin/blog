import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/其他CompositionApi/shallowReactive和shallowRef.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/shallowReactive%E5%92%8CshallowRef.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"shallowReactive 与 shallowRef\",\"slug\":\"shallowreactive-与-shallowref\",\"link\":\"#shallowreactive-与-shallowref\",\"children\":[{\"level\":3,\"title\":\"shallowReactive\",\"slug\":\"shallowreactive\",\"link\":\"#shallowreactive\",\"children\":[]},{\"level\":3,\"title\":\"shallowRef\",\"slug\":\"shallowref\",\"link\":\"#shallowref\",\"children\":[]},{\"level\":3,\"title\":\"什么时候使用？\",\"slug\":\"什么时候使用\",\"link\":\"#什么时候使用\",\"children\":[]},{\"level\":3,\"title\":\"shallowReactive\",\"slug\":\"shallowreactive-1\",\"link\":\"#shallowreactive-1\",\"children\":[]},{\"level\":3,\"title\":\"shallowRef\",\"slug\":\"shallowref-1\",\"link\":\"#shallowref-1\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/其他CompositionApi/shallowReactive和shallowRef.md\",\"excerpt\":\"<h2>shallowReactive 与 shallowRef</h2>\\n<h3>shallowReactive</h3>\\n<blockquote>\\n<p>只处理对象最外层属性的响应式（浅响应式）。</p>\\n</blockquote>\\n<h3>shallowRef</h3>\\n<blockquote>\\n<p>只处理基本数据类型的响应式，不进行对象的响应式处理。</p>\\n</blockquote>\\n<h3>什么时候使用？</h3>\\n<ul>\\n<li>\\n<p><strong>shallowReactive</strong>: 如果有一个对象数据，结构比较深，但变化时只是外层属性变化。</p>\\n</li>\\n<li>\\n<p><strong>shallowRef</strong>: 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象来替换。</p>\\n</li>\\n</ul>\"}")
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
