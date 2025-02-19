import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/视图.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/%E8%A7%86%E5%9B%BE.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"视图\",\"slug\":\"视图\",\"link\":\"#视图\",\"children\":[]},{\"level\":2,\"title\":\"创建视图\",\"slug\":\"创建视图\",\"link\":\"#创建视图\",\"children\":[]},{\"level\":2,\"title\":\"修改视图内容\",\"slug\":\"修改视图内容\",\"link\":\"#修改视图内容\",\"children\":[]},{\"level\":2,\"title\":\"修改视图结构\",\"slug\":\"修改视图结构\",\"link\":\"#修改视图结构\",\"children\":[]},{\"level\":2,\"title\":\"删除视图\",\"slug\":\"删除视图\",\"link\":\"#删除视图\",\"children\":[]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/视图.md\",\"excerpt\":\"<h2>视图</h2>\\n<blockquote>\\n<p>视图是虚拟存在的表，如果一个查询重复使用，那么可以用视图简化。</p>\\n<p>视图就是一张表，所以他的增删改查操作和表一样，只是视图的数据来源是真实表。</p>\\n</blockquote>\\n<h2>创建视图</h2>\\n<div class=\\\"language-sql\\\" data-ext=\\\"sql\\\" data-title=\\\"sql\\\"><pre class=\\\"language-sql\\\"><code><span class=\\\"token comment\\\">-- 格式</span>\\n<span class=\\\"token keyword\\\">create</span> <span class=\\\"token keyword\\\">view</span> view_name <span class=\\\"token punctuation\\\">(</span>列名<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">.</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">as</span> 复杂的查询语句\\n\\n<span class=\\\"token comment\\\">-- user 和 computer 两张表，查询 tom 有几台电脑，将用户名和所拥有的电脑名给展示出来</span>\\n<span class=\\\"token keyword\\\">create</span> <span class=\\\"token keyword\\\">view</span> user_computer <span class=\\\"token punctuation\\\">(</span>user_name<span class=\\\"token punctuation\\\">,</span> computer_name<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">as</span> <span class=\\\"token keyword\\\">select</span>\\nu<span class=\\\"token punctuation\\\">.</span>name<span class=\\\"token punctuation\\\">,</span> c<span class=\\\"token punctuation\\\">.</span>name <span class=\\\"token keyword\\\">from</span> <span class=\\\"token keyword\\\">user</span> u<span class=\\\"token punctuation\\\">,</span> computer c <span class=\\\"token keyword\\\">where</span> u<span class=\\\"token punctuation\\\">.</span>id <span class=\\\"token operator\\\">=</span> c<span class=\\\"token punctuation\\\">.</span>uid <span class=\\\"token operator\\\">and</span> u<span class=\\\"token punctuation\\\">.</span>name <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'tom'</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
