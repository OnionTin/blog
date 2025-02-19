import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/MySql/多表查询/内连接查询.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%86%85%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"内连接查询\",\"slug\":\"内连接查询\",\"link\":\"#内连接查询\",\"children\":[]}],\"git\":{\"updatedTime\":1719909739000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/MySql/多表查询/内连接查询.md\",\"excerpt\":\"<h2>内连接查询</h2>\\n<p>取交集</p>\\n<div class=\\\"language-sql\\\" data-ext=\\\"sql\\\" data-title=\\\"sql\\\"><pre class=\\\"language-sql\\\"><code><span class=\\\"token comment\\\">-- 隐式内连接查询格式</span>\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> a<span class=\\\"token punctuation\\\">,</span> b <span class=\\\"token keyword\\\">where</span> a<span class=\\\"token punctuation\\\">.</span>id <span class=\\\"token operator\\\">=</span> b<span class=\\\"token punctuation\\\">.</span>id<span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">-- 显式内连接查询格式</span>\\n<span class=\\\"token keyword\\\">select</span> <span class=\\\"token operator\\\">*</span> <span class=\\\"token keyword\\\">from</span> a <span class=\\\"token keyword\\\">inner</span> <span class=\\\"token keyword\\\">join</span> b <span class=\\\"token keyword\\\">on</span> a<span class=\\\"token punctuation\\\">.</span>id <span class=\\\"token operator\\\">=</span> b<span class=\\\"token punctuation\\\">.</span>id<span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">-- 隐式内连接和显示内连接，查询结果一样的，只是写法不同</span>\\n</code></pre></div>\"}")
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
