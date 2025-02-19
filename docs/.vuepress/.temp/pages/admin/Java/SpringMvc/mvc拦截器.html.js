import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringMvc/mvc拦截器.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringMvc/mvc%E6%8B%A6%E6%88%AA%E5%99%A8.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"mvc 拦截器\",\"slug\":\"mvc-拦截器\",\"link\":\"#mvc-拦截器\",\"children\":[]}],\"git\":{\"updatedTime\":1724664291000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringMvc/mvc拦截器.md\",\"excerpt\":\"<h2>mvc 拦截器</h2>\\n<blockquote>\\n<p>拦截器，和 Filter(过滤器)类似，好处是他比过滤器更强大，可以获取请求和响应的信息，并且可以修改请求和响应的信息</p>\\n<p>拦截器是 SpringMVC 的，过滤器是 Servlet 的</p>\\n<p>拦截器是 AOP 思想的具体应用</p>\\n</blockquote>\\n<div class=\\\"language-xml\\\" data-ext=\\\"xml\\\" data-title=\\\"xml\\\"><pre class=\\\"language-xml\\\"><code><span class=\\\"token comment\\\">&lt;!-- web.xml --&gt;</span>\\n<span class=\\\"token prolog\\\">&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;</span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>beans</span> <span class=\\\"token attr-name\\\">xmlns</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.springframework.org/schema/beans<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xmlns:</span>xsi</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.w3.org/2001/XMLSchema-instance<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xmlns:</span>mvc</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.springframework.org/schema/mvc<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xmlns:</span>context</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.springframework.org/schema/context<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xsi:</span>schemaLocation</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.springframework.org/schema/beans\\n  http://www.springframework.org/schema/beans/spring-beans.xsd\\n  http://www.springframework.org/schema/mvc\\n  https://www.springframework.org/schema/mvc/spring-mvc.xsd\\n  http://www.springframework.org/schema/context\\n  https://www.springframework.org/schema/context/spring-context.xsd<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token namespace\\\">context:</span>component-scan</span> <span class=\\\"token attr-name\\\">base-package</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>com.haha.controller<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n\\n  <span class=\\\"token comment\\\">&lt;!-- Json乱码问题配置 --&gt;</span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token namespace\\\">mvc:</span>annotation-driven</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token namespace\\\">mvc:</span>message-converters</span> <span class=\\\"token attr-name\\\">register-defaults</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>true<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n      <span class=\\\"token comment\\\">&lt;!--消息转化机制--&gt;</span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>bean</span> <span class=\\\"token attr-name\\\">class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>org.springframework.http.converter.StringHttpMessageConverter<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>constructor-arg</span> <span class=\\\"token attr-name\\\">value</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>UTF-8<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>bean</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>bean</span> <span class=\\\"token attr-name\\\">class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>org.springframework.http.converter.json.MappingJackson2HttpMessageConverter<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>property</span> <span class=\\\"token attr-name\\\">name</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>objectMapper<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n          <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>bean</span> <span class=\\\"token attr-name\\\">class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n            <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>property</span> <span class=\\\"token attr-name\\\">name</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>failOnEmptyBeans<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">value</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>false<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n          <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>bean</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>property</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>bean</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span><span class=\\\"token namespace\\\">mvc:</span>message-converters</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span><span class=\\\"token namespace\\\">mvc:</span>annotation-driven</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token namespace\\\">mvc:</span>default-servlet-handler</span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>bean</span>\\n    <span class=\\\"token attr-name\\\">class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>org.springframework.web.servlet.view.InternalResourceViewResolver<span class=\\\"token punctuation\\\">\\\"</span></span>\\n    <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>InternalResourceViewResolver<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>property</span> <span class=\\\"token attr-name\\\">name</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>prefix<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">value</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>/WEB-INF/jsp/<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>property</span> <span class=\\\"token attr-name\\\">name</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>suffix<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">value</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>.jsp<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>bean</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n  <span class=\\\"token comment\\\">&lt;!--拦截器配置--&gt;</span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token namespace\\\">mvc:</span>interceptors</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token namespace\\\">mvc:</span>interceptor</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n      <span class=\\\"token comment\\\">&lt;!--/**：所有请求都拦截--&gt;</span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span><span class=\\\"token namespace\\\">mvc:</span>mapping</span> <span class=\\\"token attr-name\\\">path</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>/**<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n      <span class=\\\"token comment\\\">&lt;!--执行文件--&gt;</span>\\n      <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>bean</span> <span class=\\\"token attr-name\\\">class</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>com.haha.config.MyInterceptor<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span><span class=\\\"token namespace\\\">mvc:</span>interceptor</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span><span class=\\\"token namespace\\\">mvc:</span>interceptors</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>beans</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div>\"}")
export { comp, data }
