import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/对象类型/泛型对象类型/元组类型.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E5%85%83%E7%BB%84%E7%B1%BB%E5%9E%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"元组类型\",\"slug\":\"元组类型\",\"link\":\"#元组类型\",\"children\":[{\"level\":3,\"title\":\"定义泛型元组类型\",\"slug\":\"定义泛型元组类型\",\"link\":\"#定义泛型元组类型\",\"children\":[]},{\"level\":3,\"title\":\"泛型对象类型中的元组类型\",\"slug\":\"泛型对象类型中的元组类型\",\"link\":\"#泛型对象类型中的元组类型\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Ts/对象类型/泛型对象类型/元组类型.md\",\"excerpt\":\"<h2>元组类型</h2>\\n<blockquote>\\n<p>元组（Tuple）类型是一种有用的类型，它允许你定义一个具有固定数量和类型的元素的数组，但各个元素的类型不必相同。元组类型对于处理具有不同类型元素的数组特别有用，例如，你可以使用元组来表示具有特定结构的数据库查询结果或函数返回值。</p>\\n</blockquote>\\n<h3>定义泛型元组类型</h3>\\n<blockquote>\\n<p>泛型元组类型可以让你创建具有不同类型元素的数组，同时保持类型的灵活性。GenericTuple&lt;T&gt; 是一个泛型元组类型，它定义了一个包含三个相同类型 T 的元素的数组。MixedTuple 是一个具有不同类型元素的元组类型。</p>\\n</blockquote>\"}")
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
