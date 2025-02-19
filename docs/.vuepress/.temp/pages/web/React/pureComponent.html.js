import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/pureComponent.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/pureComponent.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"pureComponent\",\"slug\":\"purecomponent\",\"link\":\"#purecomponent\",\"children\":[{\"level\":3,\"title\":\"Component 的 2 个问题\",\"slug\":\"component-的-2-个问题\",\"link\":\"#component-的-2-个问题\",\"children\":[]},{\"level\":3,\"title\":\"效率高的做法\",\"slug\":\"效率高的做法\",\"link\":\"#效率高的做法\",\"children\":[]},{\"level\":3,\"title\":\"原因\",\"slug\":\"原因\",\"link\":\"#原因\",\"children\":[]},{\"level\":3,\"title\":\"解决\",\"slug\":\"解决\",\"link\":\"#解决\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727972098000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1},{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/pureComponent.md\",\"excerpt\":\"<!-- @format -->\\n<h2>pureComponent</h2>\\n<h3>Component 的 2 个问题</h3>\\n<blockquote>\\n<ol>\\n<li>只要执行<code>setState()</code>，即使不改变状态数据，组件也会重新 render（效率低）</li>\\n<li>只当前组件重新 render，就会自动重新 render 子组件，纵使子组件没有用到父组件的任何数据（效率低）</li>\\n</ol>\\n</blockquote>\\n<h3>效率高的做法</h3>\\n<blockquote>\\n<p>只有当组件的 state 或 props 数据发生改变时才重新 render()</p>\\n</blockquote>\"}")
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
