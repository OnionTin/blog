import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/类型缩小/类型缩小.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E7%B1%BB%E5%9E%8B%E7%BC%A9%E5%B0%8F/%E7%B1%BB%E5%9E%8B%E7%BC%A9%E5%B0%8F.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"类型缩小(缩小类型范围)\",\"slug\":\"类型缩小-缩小类型范围\",\"link\":\"#类型缩小-缩小类型范围\",\"children\":[{\"level\":3,\"title\":\"使用类型谓词\",\"slug\":\"使用类型谓词\",\"link\":\"#使用类型谓词\",\"children\":[]},{\"level\":3,\"title\":\"使用字面量类型\",\"slug\":\"使用字面量类型\",\"link\":\"#使用字面量类型\",\"children\":[]},{\"level\":3,\"title\":\"使用类型守卫\",\"slug\":\"使用类型守卫\",\"link\":\"#使用类型守卫\",\"children\":[]},{\"level\":3,\"title\":\"使用逻辑运算符\",\"slug\":\"使用逻辑运算符\",\"link\":\"#使用逻辑运算符\",\"children\":[]},{\"level\":3,\"title\":\"使用自定义类型守卫\",\"slug\":\"使用自定义类型守卫\",\"link\":\"#使用自定义类型守卫\",\"children\":[]},{\"level\":3,\"title\":\"in 运算符\",\"slug\":\"in-运算符\",\"link\":\"#in-运算符\",\"children\":[]},{\"level\":3,\"title\":\"instanceof 运算符\",\"slug\":\"instanceof-运算符\",\"link\":\"#instanceof-运算符\",\"children\":[]},{\"level\":3,\"title\":\"其他方式\",\"slug\":\"其他方式\",\"link\":\"#其他方式\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Ts/类型缩小/类型缩小.md\",\"excerpt\":\"<h2>类型缩小(缩小类型范围)</h2>\\n<blockquote>\\n<p>类型缩小（Type Narrowing）是指在运行时基于某些条件来减少一个变量可能的类型范围的过程。这通常在处理联合类型或交叉类型时非常有用，允许你根据不同的情况对变量进行更具体的操作。类型缩小是 TypeScript 编程中的一个重要概念，它允许你编写更精确和更安全的代码。通过使用类型缩小可以在不同的代码路径中对变量进行更具体的操作。</p>\\n</blockquote>\\n<h3>使用类型谓词</h3>\\n<blockquote>\\n<p>类型谓词是一种函数，它对参数的类型进行断言，并返回一个布尔值，表明该参数是否为特定的类型。这可以用来缩小类型。</p>\\n</blockquote>\"}")
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
