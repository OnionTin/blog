import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/MySql/多表查询/笛卡尔积查询.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E7%AC%9B%E5%8D%A1%E5%B0%94%E7%A7%AF%E6%9F%A5%E8%AF%A2.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"笛卡尔积查询\",\"slug\":\"笛卡尔积查询\",\"link\":\"#笛卡尔积查询\",\"children\":[]}],\"git\":{\"updatedTime\":1719909739000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/MySql/多表查询/笛卡尔积查询.md\",\"excerpt\":\"<h2>笛卡尔积查询</h2>\\n<p>所有多表查询的，最基础查询；笛卡尔积查询本身没有意义，平时不会用。</p>\\n<div class=\\\"language-sql\\\" data-ext=\\\"sql\\\" data-title=\\\"sql\\\"><pre class=\\\"language-sql\\\"><code><span class=\\\"token comment\\\">-- 格式</span>\\n<span class=\\\"token keyword\\\">create</span> <span class=\\\"token keyword\\\">table</span> a<span class=\\\"token punctuation\\\">(</span>\\n    id <span class=\\\"token keyword\\\">int</span><span class=\\\"token punctuation\\\">,</span>\\n    name <span class=\\\"token keyword\\\">varchar</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">20</span><span class=\\\"token punctuation\\\">)</span>\\n<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">create</span> <span class=\\\"token keyword\\\">table</span> b<span class=\\\"token punctuation\\\">(</span>\\n    id <span class=\\\"token keyword\\\">int</span><span class=\\\"token punctuation\\\">,</span>\\n    name <span class=\\\"token keyword\\\">varchar</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">20</span><span class=\\\"token punctuation\\\">)</span>\\n<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> a<span class=\\\"token punctuation\\\">,</span> b<span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
