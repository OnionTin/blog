import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/关于函数/泛型函数/约束条件.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E6%B3%9B%E5%9E%8B%E5%87%BD%E6%95%B0/%E7%BA%A6%E6%9D%9F%E6%9D%A1%E4%BB%B6.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"约束条件\",\"slug\":\"约束条件\",\"link\":\"#约束条件\",\"children\":[{\"level\":3,\"title\":\"泛型约束的基本使用\",\"slug\":\"泛型约束的基本使用\",\"link\":\"#泛型约束的基本使用\",\"children\":[]},{\"level\":3,\"title\":\"使用类型参数作为约束\",\"slug\":\"使用类型参数作为约束\",\"link\":\"#使用类型参数作为约束\",\"children\":[]},{\"level\":3,\"title\":\"类型约束的高级用法\",\"slug\":\"类型约束的高级用法\",\"link\":\"#类型约束的高级用法\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/关于函数/泛型函数/约束条件.md\",\"excerpt\":\"<h2>约束条件</h2>\\n<blockquote>\\n<p>泛型约束条件（Generic Constraints）允许你限制泛型参数可以是哪些类型。这通常通过使用 extends 关键字来实现，它指定了泛型参数必须符合特定的类型或接口。</p>\\n</blockquote>\\n<h3>泛型约束的基本使用</h3>\\n<blockquote>\\n<p>泛型约束通常用于函数或类中，以确保泛型参数满足特定的条件。例如，你可能有一个函数，它需要操作具有 .length 属性的对象。T extends Lengthwise 指定了泛型参数 T 必须实现 Lengthwise 接口，即必须具有 length 属性。</p>\\n</blockquote>\"}")
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
