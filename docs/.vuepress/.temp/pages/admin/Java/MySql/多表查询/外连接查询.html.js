import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/多表查询/外连接查询.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%A4%96%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"外连接查询\",\"slug\":\"外连接查询\",\"link\":\"#外连接查询\",\"children\":[]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/多表查询/外连接查询.md\",\"excerpt\":\"<h2>外连接查询</h2>\\n<p>取交集 + 左表(或者右表)的剩余记录的补充</p>\\n<div class=\\\"language-sql\\\" data-ext=\\\"sql\\\" data-title=\\\"sql\\\"><pre class=\\\"language-sql\\\"><code><span class=\\\"token comment\\\">-- 左外连接查询格式</span>\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> a <span class=\\\"token keyword\\\">left</span> <span class=\\\"token keyword\\\">join</span> b <span class=\\\"token keyword\\\">on</span> a<span class=\\\"token punctuation\\\">.</span>id <span class=\\\"token operator\\\">=</span> b<span class=\\\"token punctuation\\\">.</span>id<span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
