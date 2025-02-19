import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/新组件/Fragment.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E6%96%B0%E7%BB%84%E4%BB%B6/Fragment.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Fragment 根标签\",\"slug\":\"fragment-根标签\",\"link\":\"#fragment-根标签\",\"children\":[{\"level\":3,\"title\":\"Vue2 中\",\"slug\":\"vue2-中\",\"link\":\"#vue2-中\",\"children\":[]},{\"level\":3,\"title\":\"Vue3 中\",\"slug\":\"vue3-中\",\"link\":\"#vue3-中\",\"children\":[]},{\"level\":3,\"title\":\"好处\",\"slug\":\"好处\",\"link\":\"#好处\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/新组件/Fragment.md\",\"excerpt\":\"<h2>Fragment 根标签</h2>\\n<h3>Vue2 中</h3>\\n<ul>\\n<li>组件必须有一个根标签。</li>\\n</ul>\\n<h3>Vue3 中</h3>\\n<ul>\\n<li>组件可以没有根标签，内部会将多个标签包含在一个<code>Fragment</code>虚拟元素中。</li>\\n</ul>\\n<h3>好处</h3>\\n<ul>\\n<li>减少标签层级。</li>\\n<li>减小内存占用。</li>\\n</ul>\\n\"}")
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
