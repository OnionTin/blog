import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/render和props.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/render%E5%92%8Cprops.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"render 和 props\",\"slug\":\"render-和-props\",\"link\":\"#render-和-props\",\"children\":[{\"level\":3,\"title\":\"如何向组件内部动态传入带内容的结构(标签)?\",\"slug\":\"如何向组件内部动态传入带内容的结构-标签\",\"link\":\"#如何向组件内部动态传入带内容的结构-标签\",\"children\":[]},{\"level\":3,\"title\":\"children props\",\"slug\":\"children-props\",\"link\":\"#children-props\",\"children\":[]},{\"level\":3,\"title\":\"render props\",\"slug\":\"render-props\",\"link\":\"#render-props\",\"children\":[]},{\"level\":3,\"title\":\"案例\",\"slug\":\"案例\",\"link\":\"#案例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727972098000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1},{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/render和props.md\",\"excerpt\":\"<!-- @format -->\\n<h2>render 和 props</h2>\\n<h3>如何向组件内部动态传入带内容的结构(标签)?</h3>\\n<p><strong>Vue 中:</strong></p>\\n<ul>\\n<li>使用 slot 技术，也就是通过组件标签体传入结构 <code>&lt;A&gt;&lt;B/&gt;&lt;/A&gt;</code></li>\\n</ul>\\n<p><strong>React 中:</strong></p>\\n<ul>\\n<li>使用 children props: 通过组件标签体传入结构</li>\\n<li>使用 render props: 通过组件标签属性传入结构，一般用 render 函数属性</li>\\n</ul>\"}")
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
