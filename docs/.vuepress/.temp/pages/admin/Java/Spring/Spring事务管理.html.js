import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Spring/Spring事务管理.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Spring/Spring%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"事务\",\"slug\":\"事务\",\"link\":\"#事务\",\"children\":[{\"level\":3,\"title\":\"事物的 ACID 原则\",\"slug\":\"事物的-acid-原则\",\"link\":\"#事物的-acid-原则\",\"children\":[]},{\"level\":3,\"title\":\"Spring 中的事务\",\"slug\":\"spring-中的事务\",\"link\":\"#spring-中的事务\",\"children\":[]}]}],\"git\":{\"updatedTime\":1723709321000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Spring/Spring事务管理.md\",\"excerpt\":\"<h2>事务</h2>\\n<blockquote>\\n<p>把一组业务放在一起，。</p>\\n<p>事务在项目开发中十分重要，涉及数据一致性，不能马虎。</p>\\n</blockquote>\\n<h3>事物的 ACID 原则</h3>\\n<ol>\\n<li>原子性（Atomicity）: 事务中的所有操作要么全部成功，要么全部失败。</li>\\n<li>一致性（Consistency）: 事务执行之前和执行之后都必须处于一致性状态。</li>\\n<li>隔离性（Isolation）: 多个业务可能同时操作一个资源，事务之间不能互相影响。</li>\\n<li>持久性（Durability）: 事务一旦提交，结果就会永久的保存在数据库中，不可逆。</li>\\n</ol>\"}")
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
