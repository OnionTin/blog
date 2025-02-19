import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/事务/隔离级别.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/%E4%BA%8B%E5%8A%A1/%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"隔离级别\",\"slug\":\"隔离级别\",\"link\":\"#隔离级别\",\"children\":[{\"level\":3,\"title\":\"事务的四大特性\",\"slug\":\"事务的四大特性\",\"link\":\"#事务的四大特性\",\"children\":[]},{\"level\":3,\"title\":\"事务的隔离级别\",\"slug\":\"事务的隔离级别\",\"link\":\"#事务的隔离级别\",\"children\":[]},{\"level\":3,\"title\":\"设置隔离级别\",\"slug\":\"设置隔离级别\",\"link\":\"#设置隔离级别\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/事务/隔离级别.md\",\"excerpt\":\"<h2>隔离级别</h2>\\n<h3>事务的四大特性</h3>\\n<p>原子性(最小的单位，不能再往下分)、持久性、一致性(操作前后是一致的)、隔离性(事务间没有关系，互不影响)</p>\\n<p>当多个事务，操作同一张表时，会打破隔离性，以此产生新的问题(脏读、不可重复读、幻读，幻读也是虚读)</p>\\n<ol>\\n<li>\\n<p>脏读：事务 A 读到了事务 B 未提交的数据</p>\\n</li>\\n<li>\\n<p>不可重复读：事务 A 读到了事务 B 提交后 修改(update)的 数据</p>\\n</li>\\n<li>\\n<p>幻读：事务 A 读到了事务 B 提交后 新增(insert)的或减少的 数据</p>\\n</li>\\n<li>\\n<p>丢失更新：事务 A 更新了事务 B 未提交的数据</p>\\n</li>\\n</ol>\"}")
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
