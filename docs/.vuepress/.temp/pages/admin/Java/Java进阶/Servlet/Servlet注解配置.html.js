import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Servlet/Servlet注解配置.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E6%B3%A8%E8%A7%A3%E9%85%8D%E7%BD%AE.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Servlet 注解配置\",\"slug\":\"servlet-注解配置\",\"link\":\"#servlet-注解配置\",\"children\":[{\"level\":3,\"title\":\"xml 中配置 Servlet\",\"slug\":\"xml-中配置-servlet\",\"link\":\"#xml-中配置-servlet\",\"children\":[]},{\"level\":3,\"title\":\"注解中配置 Servlet\",\"slug\":\"注解中配置-servlet\",\"link\":\"#注解中配置-servlet\",\"children\":[]},{\"level\":3,\"title\":\"url-pattern 配置\",\"slug\":\"url-pattern-配置\",\"link\":\"#url-pattern-配置\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Servlet/Servlet注解配置.md\",\"excerpt\":\"<h2>Servlet 注解配置</h2>\\n<blockquote>\\n<p>我们可以在 web.xml 文件中，设置多个 servlet、servlet-mapping 这种 Servlet 对象配置，但是一旦如果多了，就很显得很乱，所以除了通过在 web.xml 文件中配置 Servlet 之外，还可以通过注解来配置 Servlet。</p>\\n</blockquote>\\n<h3>xml 中配置 Servlet</h3>\\n<div class=\\\"language-xml\\\" data-ext=\\\"xml\\\" data-title=\\\"xml\\\"><pre class=\\\"language-xml\\\"><code><span class=\\\"token comment\\\">&lt;!--web.xml文件中设置Servlet--&gt;</span>\\n<span class=\\\"token prolog\\\">&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;</span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>web-app</span> <span class=\\\"token attr-name\\\">xmlns</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://xmlns.jcp.org/xml/ns/javaee<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xmlns:</span>xsi</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.w3.org/2001/XMLSchema-instance<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xsi:</span>schemaLocation</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>\\n    http://xmlns.jcp.org/xml/ns/javaee\\n    http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\">version</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>4.0<span class=\\\"token punctuation\\\">\\\"</span></span>\\n<span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>welcome-file-list</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>welcome-file</span><span class=\\\"token punctuation\\\">&gt;</span></span>index.html<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>welcome-file</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>welcome-file</span><span class=\\\"token punctuation\\\">&gt;</span></span>index.htm<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>welcome-file</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>welcome-file</span><span class=\\\"token punctuation\\\">&gt;</span></span>index.jsp<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>welcome-file</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>welcome-file</span><span class=\\\"token punctuation\\\">&gt;</span></span>default.html<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>welcome-file</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>welcome-file</span><span class=\\\"token punctuation\\\">&gt;</span></span>default.htm<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>welcome-file</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>welcome-file</span><span class=\\\"token punctuation\\\">&gt;</span></span>default.jsp<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>welcome-file</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>welcome-file-list</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token comment\\\">&lt;!-- 第一个Servlet --&gt;</span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>servlet</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>servlet-name</span><span class=\\\"token punctuation\\\">&gt;</span></span>aaa<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>servlet-name</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>servlet-class</span><span class=\\\"token punctuation\\\">&gt;</span></span>com.Servlet.ServletDemo01<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>servlet-class</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>servlet</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>servlet-mapping</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>servlet-name</span><span class=\\\"token punctuation\\\">&gt;</span></span>aaa<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>servlet-name</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>url-pattern</span><span class=\\\"token punctuation\\\">&gt;</span></span>/bbb<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>url-pattern</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>servlet-mapping</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token comment\\\">&lt;!-- 第二个Servlet --&gt;</span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>servlet</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>servlet-name</span><span class=\\\"token punctuation\\\">&gt;</span></span>demo01<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>servlet-name</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>servlet-class</span><span class=\\\"token punctuation\\\">&gt;</span></span>com.Servlet.ServletDemo01<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>servlet-class</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>servlet</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>servlet-mapping</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>servlet-name</span><span class=\\\"token punctuation\\\">&gt;</span></span>demo01<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>servlet-name</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>url-pattern</span><span class=\\\"token punctuation\\\">&gt;</span></span>/demo01<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>url-pattern</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>servlet-mapping</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token comment\\\">&lt;!-- ... 第n个Servlet对象 --&gt;</span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>web-app</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div>\"}")
export { comp, data }
