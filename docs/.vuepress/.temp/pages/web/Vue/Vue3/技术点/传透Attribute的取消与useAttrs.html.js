import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/技术点/传透Attribute的取消与useAttrs.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E4%BC%A0%E9%80%8FAttribute%E7%9A%84%E5%8F%96%E6%B6%88%E4%B8%8EuseAttrs.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"传透 Attribute 的取消与 useAttrs\",\"slug\":\"传透-attribute-的取消与-useattrs\",\"link\":\"#传透-attribute-的取消与-useattrs\",\"children\":[{\"level\":3,\"title\":\"透传 Attributes\",\"slug\":\"透传-attributes\",\"link\":\"#透传-attributes\",\"children\":[]},{\"level\":3,\"title\":\"useAttrs\",\"slug\":\"useattrs\",\"link\":\"#useattrs\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/技术点/传透Attribute的取消与useAttrs.md\",\"excerpt\":\"<h2>传透 Attribute 的取消与 useAttrs</h2>\\n<blockquote>\\n<p>在 Vue 3 中，组件可以接收来自父组件的附加属性（称为“透传 Attributes”），这些属性没有在子组件的 <code>props</code> 中声明。Vue 3 提供了几种处理这些透传属性的方法。</p>\\n</blockquote>\\n<h3>透传 Attributes</h3>\\n<blockquote>\\n<p>透传 Attributes 是指那些传递给组件但没有被声明为 <code>props</code> 或 <code>emits</code> 的 attribute 或 <code>v-on</code> 事件监听器。最常见的例子包括 <code>class</code>、<code>style</code> 和 <code>id</code>。</p>\\n</blockquote>\"}")
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
