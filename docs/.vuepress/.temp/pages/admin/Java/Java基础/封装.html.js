import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/封装.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E5%B0%81%E8%A3%85.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"封装\",\"slug\":\"封装\",\"link\":\"#封装\",\"children\":[{\"level\":3,\"title\":\"private 关键字\",\"slug\":\"private-关键字\",\"link\":\"#private-关键字\",\"children\":[]},{\"level\":3,\"title\":\"举例\",\"slug\":\"举例\",\"link\":\"#举例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java基础/封装.md\",\"excerpt\":\"<h2>封装</h2>\\n<blockquote>\\n<p>封装是指隐藏对象的属性和实现细节，仅对外提供公共的访问方式。</p>\\n<p>隐藏对象的属性，只需要在属性定义的前面加上一个关键字 super 即可。</p>\\n<p>对外提供公共的访问方式，就是在类中写上几个 setXXX(...)和 getXXX()即可。</p>\\n</blockquote>\\n<h3>private 关键字</h3>\\n<ul>\\n<li>什么是 private 关键字\\nprivate 是一个修饰符，代表私有的意思，可以修饰成员变量和成员方法以及构造函数</li>\\n<li>private 关键字的特点\\n被 private 关键字修饰的成员变量和成员方法不能在本类中使用，不能在其他类中使用</li>\\n<li>private 关键字怎么用</li>\\n</ul>\"}")
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
