import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/单表查询/排序.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E6%8E%92%E5%BA%8F.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"排序\",\"slug\":\"排序\",\"link\":\"#排序\",\"children\":[]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/单表查询/排序.md\",\"excerpt\":\"<h2>排序</h2>\\n<blockquote>\\n<p>select * from 表名 order by 字段名 排序方式;</p>\\n<p>排序方式：asc（升序）、desc（降序），默认升序。</p>\\n</blockquote>\\n<div class=\\\"language-sql\\\" data-ext=\\\"sql\\\" data-title=\\\"sql\\\"><pre class=\\\"language-sql\\\"><code><span class=\\\"token comment\\\">-- 查询学生表，按照年龄排序</span>\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> student <span class=\\\"token keyword\\\">order</span> <span class=\\\"token keyword\\\">by</span> age<span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">-- 查询学生表，按照年龄排序，如果年龄相同，则按照学号排序</span>\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> student <span class=\\\"token keyword\\\">order</span> <span class=\\\"token keyword\\\">by</span> age<span class=\\\"token punctuation\\\">,</span> id<span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">-- 查询学生表，按照年龄排序，如果年龄相同，则按照学号排序，并且只显示前三条记录</span>\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> student <span class=\\\"token keyword\\\">order</span> <span class=\\\"token keyword\\\">by</span> age<span class=\\\"token punctuation\\\">,</span> id <span class=\\\"token keyword\\\">limit</span> <span class=\\\"token number\\\">3</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">-- 查询学生表，按照年龄排序，如果年龄相同，则按照学号排序，</span>\\n<span class=\\\"token comment\\\">-- 并且只显示前三条记录，并且只显示年龄大于18的记录</span>\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> student <span class=\\\"token keyword\\\">where</span> age <span class=\\\"token operator\\\">&gt;</span> <span class=\\\"token number\\\">18</span> <span class=\\\"token keyword\\\">order</span> <span class=\\\"token keyword\\\">by</span> age<span class=\\\"token punctuation\\\">,</span> id <span class=\\\"token keyword\\\">limit</span> <span class=\\\"token number\\\">3</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">-- 查询学生信息，按照年龄降序，其中年龄为18、19、20，如果年龄相同，则按照学号排序</span>\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> student <span class=\\\"token keyword\\\">where</span> age <span class=\\\"token operator\\\">in</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">18</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">19</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">20</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">order</span> <span class=\\\"token keyword\\\">by</span> age<span class=\\\"token punctuation\\\">,</span> id <span class=\\\"token keyword\\\">desc</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">-- 查询学生信息，按照姓名由字典顺序进行排序</span>\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> student <span class=\\\"token keyword\\\">order</span> <span class=\\\"token keyword\\\">by</span> name<span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">-- 查询100个学生信息，按照年龄由大到小进行排序，年龄相同的话，</span>\\n<span class=\\\"token comment\\\">-- 按照姓名由字典顺序进行排序，</span>\\n<span class=\\\"token comment\\\">-- 如果姓名也相同的话，按照学号降序排序</span>\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> student <span class=\\\"token keyword\\\">order</span> <span class=\\\"token keyword\\\">by</span> age <span class=\\\"token keyword\\\">desc</span><span class=\\\"token punctuation\\\">,</span> name<span class=\\\"token punctuation\\\">,</span> id <span class=\\\"token keyword\\\">desc</span> <span class=\\\"token keyword\\\">limit</span> <span class=\\\"token number\\\">100</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
