import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/面向对象三大特征.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%89%E5%A4%A7%E7%89%B9%E5%BE%81.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"面向对象三大特征\",\"slug\":\"面向对象三大特征\",\"link\":\"#面向对象三大特征\",\"children\":[]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java基础/面向对象三大特征.md\",\"excerpt\":\"<h2>面向对象三大特征</h2>\\n<ol>\\n<li>\\n<p>封装</p>\\n<blockquote>\\n<p>提高了代码的安全性，把属性私有化，提供公共的访问方式</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>继承</p>\\n<blockquote>\\n<p>提高代码的复用性，一般是将公共的属性和方法放在父类中，子类中保留其特有的内容</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>多态</p>\\n<blockquote>\\n<p>提高代码的扩展性，父类引用或者父接口指向子类对象，不同类型的子对象对父类中相同的方法，产生了不同的执行结果，多态属于编译时行为</p>\\n</blockquote>\\n</li>\\n</ol>\"}")
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
