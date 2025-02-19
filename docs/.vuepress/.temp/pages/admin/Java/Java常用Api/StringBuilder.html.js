import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/StringBuilder.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/StringBuilder.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"StringBuilder\",\"slug\":\"stringbuilder\",\"link\":\"#stringbuilder\",\"children\":[{\"level\":3,\"title\":\"StringBuilder 容器的特点\",\"slug\":\"stringbuilder-容器的特点\",\"link\":\"#stringbuilder-容器的特点\",\"children\":[]},{\"level\":3,\"title\":\"常见的构造方法\",\"slug\":\"常见的构造方法\",\"link\":\"#常见的构造方法\",\"children\":[]},{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"StringBuilder 和 String 转换\",\"slug\":\"stringbuilder-和-string-转换\",\"link\":\"#stringbuilder-和-string-转换\",\"children\":[]},{\"level\":3,\"title\":\"案例\",\"slug\":\"案例\",\"link\":\"#案例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/StringBuilder.md\",\"excerpt\":\"<h2>StringBuilder</h2>\\n<blockquote>\\n<p>其实就是用来拼接字符串的，比 StringBuffer 多了一个 toString 方法，可以返回一个 String 对象；</p>\\n<p>StringBuilder 和 StringBuffer 非常像，除了构造和 toString 方法不同之外，其他方法都一样。</p>\\n</blockquote>\\n<p>什么是 StringBuilder？</p>\\n<ul>\\n<li>一个<code>可变</code>的字符序列，String 是<code>不可变</code>的</li>\\n<li>字符串的缓冲区</li>\\n<li>是一个容器</li>\\n</ul>\"}")
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
