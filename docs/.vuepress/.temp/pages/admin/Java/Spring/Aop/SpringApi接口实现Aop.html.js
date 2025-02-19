import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Spring/Aop/SpringApi接口实现Aop.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Spring/Aop/SpringApi%E6%8E%A5%E5%8F%A3%E5%AE%9E%E7%8E%B0Aop.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Spring Api 接口实现 Aop\",\"slug\":\"spring-api-接口实现-aop\",\"link\":\"#spring-api-接口实现-aop\",\"children\":[]}],\"git\":{\"updatedTime\":1723540272000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Spring/Aop/SpringApi接口实现Aop.md\",\"excerpt\":\"<h2>Spring Api 接口实现 Aop</h2>\\n<blockquote>\\n<p>配置切入点，以及配置切入点的环绕方法</p>\\n</blockquote>\\n<div class=\\\"language-xml\\\" data-ext=\\\"xml\\\" data-title=\\\"xml\\\"><pre class=\\\"language-xml\\\"><code><span class=\\\"token prolog\\\">&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;</span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>beans</span> <span class=\\\"token attr-name\\\">xmlns</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.springframework.org/schema/beans<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xmlns:</span>xsi</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.w3.org/2001/XMLSchema-instance<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xmlns:</span>aop</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.springframework.org/schema/aop<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xsi:</span>schemaLocation</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.springframework.org/schema/beans\\n  http://www.springframework.org/schema/beans/spring-beans.xsd\\n  http://www.springframework.org/schema/aop\\n  https://www.springframework.org/schema/aop/spring-aop.xsd<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token comment\\\">&lt;!--注册bean--&gt;</span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>bean</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>userService<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>com.haha.service.UserServiceImpl<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>bean</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>bean</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>beforeLog<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>com.haha.log.BeforeLog<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>bean</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>bean</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>afterLog<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>com.haha.log.AfterLog<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>bean</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n  <span class=\\\"token comment\\\">&lt;!--配置Aop：切忌，上边需要导入Aop的约束--&gt;</span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token namespace\\\">aop:</span>config</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token comment\\\">&lt;!--配置多个切入点： expression表达式，表示的是切入点的所有方法以及所有参数--&gt;</span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token namespace\\\">aop:</span>pointcut</span>\\n      <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>pointcut<span class=\\\"token punctuation\\\">\\\"</span></span>\\n      <span class=\\\"token attr-name\\\">expression</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>execution(* com.haha.service.UserServiceImpl.*(..))<span class=\\\"token punctuation\\\">\\\"</span></span>\\n    <span class=\\\"token punctuation\\\">/&gt;</span></span>\\n    <span class=\\\"token comment\\\">&lt;!--配置多个执行环绕--&gt;</span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token namespace\\\">aop:</span>advisor</span> <span class=\\\"token attr-name\\\">advice-ref</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>beforeLog<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">pointcut-ref</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>pointcut<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span><span class=\\\"token namespace\\\">aop:</span>advisor</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token namespace\\\">aop:</span>advisor</span> <span class=\\\"token attr-name\\\">advice-ref</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>afterLog<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">pointcut-ref</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>pointcut<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span><span class=\\\"token namespace\\\">aop:</span>advisor</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span><span class=\\\"token namespace\\\">aop:</span>config</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>beans</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div>\"}")
export { comp, data }
