import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Spring/动态代理.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Spring/%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"动态代理\",\"slug\":\"动态代理\",\"link\":\"#动态代理\",\"children\":[{\"level\":3,\"title\":\"动态代理的分类\",\"slug\":\"动态代理的分类\",\"link\":\"#动态代理的分类\",\"children\":[]},{\"level\":3,\"title\":\"通过案例理解动态代理\",\"slug\":\"通过案例理解动态代理\",\"link\":\"#通过案例理解动态代理\",\"children\":[]}]}],\"git\":{\"updatedTime\":1723453298000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Spring/动态代理.md\",\"excerpt\":\"<h2>动态代理</h2>\\n<blockquote>\\n<p>在实际开发中，尽量不要去修改原本的对象，而是使用对象代理的方式去扩展对象的功能。由于静态代理会导致代码的膨胀，因此需要动态代理(底层都是反射)。</p>\\n</blockquote>\\n<h3>动态代理的分类</h3>\\n<ol>\\n<li>基于接口的动态代理：JDK 动态代理</li>\\n<li>基于类的 动态代理：CGLIB 动态代理</li>\\n<li>java 字节码：javasist</li>\\n</ol>\\n<h3>通过案例理解动态代理</h3>\\n<blockquote>\\n<p>通过下面的案例，我们只需要定制一套动态代理处理器封装类，之后不管是实现什么功能，只需要传入不同的被代理对象即可；这就是动态代理的好处。</p>\\n</blockquote>\"}")
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
