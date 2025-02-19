import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/多表查询/子查询.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%AD%90%E6%9F%A5%E8%AF%A2.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"子查询\",\"slug\":\"子查询\",\"link\":\"#子查询\",\"children\":[]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/多表查询/子查询.md\",\"excerpt\":\"<h2>子查询</h2>\\n<p>嵌套查询：查询语句里边还有查询语句；里边的查询语句称为子查询。</p>\\n<ol>\\n<li>子查询结果为一条记录</li>\\n</ol>\\n<div class=\\\"language-sql\\\" data-ext=\\\"sql\\\" data-title=\\\"sql\\\"><pre class=\\\"language-sql\\\"><code><span class=\\\"token comment\\\">-- 案例：查询 a 表中 id 值等于 b 表中名字为 Tony 的记录的 id</span>\\n\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> a <span class=\\\"token keyword\\\">where</span> id XXX<span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> b <span class=\\\"token keyword\\\">where</span> name <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'Tony'</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">-- 子查询</span>\\n<span class=\\\"token keyword\\\">select</span> id <span class=\\\"token keyword\\\">from</span> a <span class=\\\"token keyword\\\">where</span> id <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">select</span> id <span class=\\\"token keyword\\\">from</span> b <span class=\\\"token keyword\\\">where</span> name <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'Tony'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">-- 结果：</span>\\n<span class=\\\"token comment\\\">-- +----+------+</span>\\n<span class=\\\"token comment\\\">-- | id | name |</span>\\n<span class=\\\"token comment\\\">-- +----+------+</span>\\n<span class=\\\"token comment\\\">-- |  1 | Tony    |</span>\\n<span class=\\\"token comment\\\">-- +----+------+</span>\\n</code></pre></div>\"}")
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
