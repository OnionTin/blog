import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/常用类型/类型守卫.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E7%B1%BB%E5%9E%8B%E5%AE%88%E5%8D%AB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"类型守卫\",\"slug\":\"类型守卫\",\"link\":\"#类型守卫\",\"children\":[{\"level\":3,\"title\":\"基本类型守卫\",\"slug\":\"基本类型守卫\",\"link\":\"#基本类型守卫\",\"children\":[]},{\"level\":3,\"title\":\"使用类型守卫\",\"slug\":\"使用类型守卫\",\"link\":\"#使用类型守卫\",\"children\":[]},{\"level\":3,\"title\":\"用户自定义类型守卫\",\"slug\":\"用户自定义类型守卫\",\"link\":\"#用户自定义类型守卫\",\"children\":[]},{\"level\":3,\"title\":\"类类型守卫\",\"slug\":\"类类型守卫\",\"link\":\"#类类型守卫\",\"children\":[]},{\"level\":3,\"title\":\"在类中使用类型守卫\",\"slug\":\"在类中使用类型守卫\",\"link\":\"#在类中使用类型守卫\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/常用类型/类型守卫.md\",\"excerpt\":\"<h2>类型守卫</h2>\\n<blockquote>\\n<p>类型守卫（Type Guards）是一种方式，用于在运行时检查和缩小变量的类型。当你在处理联合类型或交叉类型时，类型守卫特别有用，因为它们允许你在执行操作之前确定变量的确切类型。</p>\\n</blockquote>\\n<h3>基本类型守卫</h3>\\n<blockquote>\\n<p>基本类型守卫是通过使用类型谓词来实现的。类型谓词是一个表达式，它在编译时不会做任何改变，但在运行时会帮助 TypeScript 缩小变量的类型。isNumber 和 isString 函数都是类型谓词。它们返回一个布尔值，告诉 TypeScript 引擎 x 参数的类型</p>\\n</blockquote>\"}")
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
