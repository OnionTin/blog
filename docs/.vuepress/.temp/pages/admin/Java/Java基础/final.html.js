import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/final.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/final.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"final\",\"slug\":\"final\",\"link\":\"#final\",\"children\":[{\"level\":3,\"title\":\"final 关键字的特点\",\"slug\":\"final-关键字的特点\",\"link\":\"#final-关键字的特点\",\"children\":[]},{\"level\":3,\"title\":\"final 的注意事项\",\"slug\":\"final-的注意事项\",\"link\":\"#final-的注意事项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java基础/final.md\",\"excerpt\":\"<h2>final</h2>\\n<p><code>常量、初始值、不被继承、不被重写</code></p>\\n<h3>final 关键字的特点</h3>\\n<ol>\\n<li>\\n<p>final 关键字修饰的变量就是常量</p>\\n<p>常量的分类</p>\\n<ol>\\n<li>\\n<p>字面量常量</p>\\n<ul>\\n<li>整数常量</li>\\n<li>小数常量</li>\\n<li>字符常量</li>\\n<li>字符串常量</li>\\n<li>布尔常量</li>\\n<li>空常量</li>\\n</ul>\\n</li>\\n<li>\\n<p>自定义常量</p>\\n</li>\\n</ol>\\n<ul>\\n<li>被 final 修饰的变量</li>\\n</ul>\\n</li>\\n<li>\\n<p>被 final 修饰的类不能被继承</p>\\n</li>\\n<li>\\n<p>被 final 修饰的成员方法不能被重写</p>\\n</li>\\n</ol>\"}")
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
