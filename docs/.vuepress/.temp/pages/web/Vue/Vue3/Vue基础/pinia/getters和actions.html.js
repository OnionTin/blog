import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/pinia/getters和actions.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/getters%E5%92%8Cactions.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"getters 和 actions\",\"slug\":\"getters-和-actions\",\"link\":\"#getters-和-actions\",\"children\":[{\"level\":3,\"title\":\"getters\",\"slug\":\"getters\",\"link\":\"#getters\",\"children\":[]},{\"level\":3,\"title\":\"actions\",\"slug\":\"actions\",\"link\":\"#actions\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/pinia/getters和actions.md\",\"excerpt\":\"<h2>getters 和 actions</h2>\\n<h3>getters</h3>\\n<blockquote>\\n<p>类似于计算属性，getters 的返回值会根据它的依赖被缓存起来，并且只有当它的依赖值发生了改变才会被重新计算</p>\\n</blockquote>\\n<ul>\\n<li>getters 中的函数接收一个 <code>state</code> 作为其第一个参数</li>\\n<li>getters 可以被嵌套调用，它们可以返回其他 getters</li>\\n<li>getters 可以通过 <code>this</code> 访问其他 getters</li>\\n<li>getters 可以通过 <code>this.$pinia</code> 访问整个 store 实例</li>\\n<li>getters 可以通过 <code>this.$pinia.state</code> 访问整个 state</li>\\n<li>getters 可以通过 <code>this.$pinia.getters</code> 访问整个 getters</li>\\n<li>getters 可以通过 <code>this.$pinia.actions</code> 访问整个 actions</li>\\n<li>getters 可以通过 <code>this.$pinia.commit</code> 访问整个 commit</li>\\n<li>getters 可以通过 <code>this.$pinia.dispatch</code> 访问整个 dispatch</li>\\n</ul>\"}")
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
