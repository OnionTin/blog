import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/MySql/单表查询/条件查询基础.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2%E5%9F%BA%E7%A1%80.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"条件查询\",\"slug\":\"条件查询\",\"link\":\"#条件查询\",\"children\":[{\"level\":3,\"title\":\"常用的条件\",\"slug\":\"常用的条件\",\"link\":\"#常用的条件\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719909739000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/MySql/单表查询/条件查询基础.md\",\"excerpt\":\"<h2>条件查询</h2>\\n<div class=\\\"language-sql\\\" data-ext=\\\"sql\\\" data-title=\\\"sql\\\"><pre class=\\\"language-sql\\\"><code><span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> 表名 <span class=\\\"token keyword\\\">where</span> 条件<span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">select</span> 字段<span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">,</span> 字段<span class=\\\"token number\\\">2</span><span class=\\\"token punctuation\\\">,</span> 字段<span class=\\\"token number\\\">3</span><span class=\\\"token punctuation\\\">,</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token punctuation\\\">.</span> <span class=\\\"token keyword\\\">from</span> 表名 <span class=\\\"token keyword\\\">where</span> 条件<span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">select</span> name<span class=\\\"token punctuation\\\">,</span> age <span class=\\\"token keyword\\\">from</span> student <span class=\\\"token keyword\\\">where</span> age <span class=\\\"token operator\\\">&gt;</span> <span class=\\\"token number\\\">18</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> student <span class=\\\"token keyword\\\">where</span> age <span class=\\\"token operator\\\">&gt;</span> <span class=\\\"token number\\\">18</span> <span class=\\\"token operator\\\">and</span> sex <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'男'</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
