import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MySql/JDBC.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MySql/JDBC.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"JDBC\",\"slug\":\"jdbc\",\"link\":\"#jdbc\",\"children\":[{\"level\":3,\"title\":\"JDBC 基本步骤\",\"slug\":\"jdbc-基本步骤\",\"link\":\"#jdbc-基本步骤\",\"children\":[]},{\"level\":3,\"title\":\"获取数据库连接对象\",\"slug\":\"获取数据库连接对象\",\"link\":\"#获取数据库连接对象\",\"children\":[]},{\"level\":3,\"title\":\"获取执行 sql 语句的对象\",\"slug\":\"获取执行-sql-语句的对象\",\"link\":\"#获取执行-sql-语句的对象\",\"children\":[]},{\"level\":3,\"title\":\"执行 SQL 语句\",\"slug\":\"执行-sql-语句\",\"link\":\"#执行-sql-语句\",\"children\":[]},{\"level\":3,\"title\":\"ResultSet 结果集方法\",\"slug\":\"resultset-结果集方法\",\"link\":\"#resultset-结果集方法\",\"children\":[]},{\"level\":3,\"title\":\"方法的使用\",\"slug\":\"方法的使用\",\"link\":\"#方法的使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MySql/JDBC.md\",\"excerpt\":\"<h2>JDBC</h2>\\n<div class=\\\"language-java\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token comment\\\">// JDBC 最基础的用法</span>\\n<span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">static</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">main</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">String</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span> args<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">throws</span> <span class=\\\"token class-name\\\">Exception</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 1. 注册驱动</span>\\n  <span class=\\\"token comment\\\">// 已经过时，请弃用</span>\\n\\n  <span class=\\\"token comment\\\">// 2. 获取数据库连接对象</span>\\n  <span class=\\\"token class-name\\\">Connection</span> conn <span class=\\\"token operator\\\">=</span> <span class=\\\"token class-name\\\">DriverManager</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">getConnection</span><span class=\\\"token punctuation\\\">(</span>\\n    <span class=\\\"token string\\\">\\\"jdbc:mysql://localhost:3306/sister?serverTimezone=UTC\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"root\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"Sap@1q2w3e4r\\\"</span>\\n  <span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token comment\\\">// 3. 获取执行sql语句的对象</span>\\n  <span class=\\\"token comment\\\">// 有问题，请更换</span>\\n  <span class=\\\"token class-name\\\">Statement</span> sta <span class=\\\"token operator\\\">=</span> conn<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">createStatement</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token comment\\\">// 4. 执行sql语句</span>\\n  <span class=\\\"token keyword\\\">int</span> i <span class=\\\"token operator\\\">=</span> sta<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">executeUpdate</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"insert into user values(3,'rose', 20)\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span>i<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 1</span>\\n\\n  <span class=\\\"token comment\\\">// 5. 释放资源</span>\\n  rs<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">close</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  sta<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">close</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  conn<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">close</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
