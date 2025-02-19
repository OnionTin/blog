import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/MyBatis/多表查询/MyBatis中一对多查询.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/MyBatis/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/MyBatis%E4%B8%AD%E4%B8%80%E5%AF%B9%E5%A4%9A%E6%9F%A5%E8%AF%A2.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"MyBatis 中一对一查询(collection)\",\"slug\":\"mybatis-中一对一查询-collection\",\"link\":\"#mybatis-中一对一查询-collection\",\"children\":[{\"level\":3,\"title\":\"查询所有的用户及其名下的所有电脑\",\"slug\":\"查询所有的用户及其名下的所有电脑\",\"link\":\"#查询所有的用户及其名下的所有电脑\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726219315000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/MyBatis/多表查询/MyBatis中一对多查询.md\",\"excerpt\":\"<h2>MyBatis 中一对一查询()</h2>\\n<blockquote>\\n<p>一对多查询：即一个用户有很多个电脑，如果查询 user 的时候，也要查出其 computer，从结果上看是查询一个及其多个，这种在 MyBatis 中叫一对多或者多对一。</p>\\n</blockquote>\\n<h3>查询所有的用户及其名下的所有电脑</h3>\\n<div class=\\\"language-xml\\\" data-ext=\\\"xml\\\" data-title=\\\"xml\\\"><pre class=\\\"language-xml\\\"><code><span class=\\\"token comment\\\">&lt;!--User.xml--&gt;</span>\\n<span class=\\\"token prolog\\\">&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\" ?&gt;</span>\\n<span class=\\\"token doctype\\\"><span class=\\\"token punctuation\\\">&lt;!</span><span class=\\\"token doctype-tag\\\">DOCTYPE</span> <span class=\\\"token name\\\">mapper</span>\\n    <span class=\\\"token name\\\">PUBLIC</span> <span class=\\\"token string\\\">\\\"-//mybatis.org//DTD Mapper 3.0//EN\\\"</span>\\n    <span class=\\\"token string\\\">\\\"http://mybatis.org/dtd/mybatis-3-mapper.dtd\\\"</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token comment\\\">&lt;!--方式一--&gt;</span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>resultMap</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>userAndComputerMap<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>user<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>id</span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>id<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>id<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>result</span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>name<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>name<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>result</span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>age<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>age<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n    <span class=\\\"token comment\\\">&lt;!--\\n    collection：一对多关系，association：一对一\\n    property：要查询数值的字段是computers\\n    column：要根据id去查\\n    ofType：集合中存放的类型，与association中的javaType有一点区别\\n    ofType：ofType是集合中存放的类型，javaType是集合的类型\\n    --&gt;</span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>collection</span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>computers<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>id<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">ofType</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>computer<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>id</span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>c_id<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>id<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>result</span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>c_name<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>name<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>result</span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>uid<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>uid<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>collection</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>resultMap</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>select</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>findUserAndComputer<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">resultMap</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>userAndComputerMap<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    select\\n      u.*, c.id c_id, c.name c_name, c.uid\\n      from user u, computer c\\n      where u.id = c.uid\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>select</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token comment\\\">&lt;!--方式二--&gt;</span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>resultMap</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>userAndComputerMap<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>user<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>id</span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>id<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>id<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>result</span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>name<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>name<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>result</span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>age<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>age<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>collection</span>\\n      <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>computers<span class=\\\"token punctuation\\\">\\\"</span></span>\\n      <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>id<span class=\\\"token punctuation\\\">\\\"</span></span>\\n      <span class=\\\"token attr-name\\\">ofType</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>computer<span class=\\\"token punctuation\\\">\\\"</span></span>\\n      <span class=\\\"token attr-name\\\">select</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>com.api.MyBatis.dao.ComputerMapper.findByUid<span class=\\\"token punctuation\\\">\\\"</span></span>\\n    <span class=\\\"token punctuation\\\">&gt;</span></span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>id</span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>c_id<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>id<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>result</span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>c_name<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>name<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>result</span> <span class=\\\"token attr-name\\\">column</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>uid<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">property</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>uid<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>collection</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>resultMap</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>select</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>findUserAndComputer<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">resultMap</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>userAndComputerMap<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    select * from user\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>select</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>mapper</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div>\"}")
export { comp, data }
