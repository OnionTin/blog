import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/MySql/事务/事务处理.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E4%BA%8B%E5%8A%A1/%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"事务\",\"slug\":\"事务\",\"link\":\"#事务\",\"children\":[{\"level\":3,\"title\":\"事务处理\",\"slug\":\"事务处理\",\"link\":\"#事务处理\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719909739000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/MySql/事务/事务处理.md\",\"excerpt\":\"<h2>事务</h2>\\n<p>事务？\\n大事：比如转账操作，至少需要 2 条及以上语句才能完成；小事：比如新增操作，只需要 1 条语句即可完成。</p>\\n<h3>事务处理</h3>\\n<p>处理什么问题？</p>\\n<p>从 A 的卡里扣 100，转到 B 的卡里；由于网络故障，从 A 的卡里扣了 100，但是 B 的卡里钱不能到账。</p>\\n<p>方案一：</p>\\n<div class=\\\"language-sql\\\" data-ext=\\\"sql\\\" data-title=\\\"sql\\\"><pre class=\\\"language-sql\\\"><code><span class=\\\"token keyword\\\">start</span> <span class=\\\"token keyword\\\">transaction</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">-- 手动开启事务</span>\\n<span class=\\\"token keyword\\\">commit</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">-- 提交事务(提交后数据才会修改)</span>\\n<span class=\\\"token keyword\\\">rollback</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">-- 回滚事务(如果不提交的话会自动回滚)</span>\\n\\n<span class=\\\"token comment\\\">-- 常见的组合：</span>\\n\\n<span class=\\\"token comment\\\">-- start transaction;</span>\\n<span class=\\\"token comment\\\">-- commit;</span>\\n\\n<span class=\\\"token comment\\\">-- start transaction;</span>\\n<span class=\\\"token comment\\\">-- rollback;</span>\\n\\n<span class=\\\"token comment\\\">-- 开始事务后，要么 commit 提交，要么 rollback 回滚</span>\\n</code></pre></div>\"}")
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
