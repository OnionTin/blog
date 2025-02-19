import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/React提升/组合vs继承.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/React%E6%8F%90%E5%8D%87/%E7%BB%84%E5%90%88vs%E7%BB%A7%E6%89%BF.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"组合 vs 继承\",\"slug\":\"组合-vs-继承\",\"link\":\"#组合-vs-继承\",\"children\":[{\"level\":3,\"title\":\"继承\",\"slug\":\"继承\",\"link\":\"#继承\",\"children\":[]},{\"level\":3,\"title\":\"组合\",\"slug\":\"组合\",\"link\":\"#组合\",\"children\":[]},{\"level\":3,\"title\":\"React 推荐组合的原因\",\"slug\":\"react-推荐组合的原因\",\"link\":\"#react-推荐组合的原因\",\"children\":[]},{\"level\":3,\"title\":\"结合使用\",\"slug\":\"结合使用\",\"link\":\"#结合使用\",\"children\":[]},{\"level\":3,\"title\":\"最佳实践\",\"slug\":\"最佳实践\",\"link\":\"#最佳实践\",\"children\":[]}]}],\"git\":{\"updatedTime\":1728487189000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/React提升/组合vs继承.md\",\"excerpt\":\"<!-- @format -->\\n<h2>组合 vs 继承</h2>\\n<p>在 React 中，组合和继承是两种不同的组件复用方式。React 团队推荐使用组合而不是继承来构建应用程序，因为组合提供了更好的灵活性和可维护性。总的来说，组合提供了一种更灵活、更可维护的方式来构建 React 应用程序，而继承则在某些特定场景下可能有其优势。</p>\\n<h3>继承</h3>\\n<p>在传统的 OOP（面向对象编程）中，继承是一种常见的代码复用方式。通过创建一个新类并继承父类的属性和方法，可以扩展功能。在 React 中，继承通常意味着一个组件通过<code>extends</code>关键字继承另一个组件。</p>\"}")
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
