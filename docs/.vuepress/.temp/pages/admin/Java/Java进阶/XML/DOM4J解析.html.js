import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/XML/DOM4J解析.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/XML/DOM4J%E8%A7%A3%E6%9E%90.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"DOM4J 解析\",\"slug\":\"dom4j-解析\",\"link\":\"#dom4j-解析\",\"children\":[{\"level\":3,\"title\":\"DOM4J 解析的步骤：\",\"slug\":\"dom4j-解析的步骤\",\"link\":\"#dom4j-解析的步骤\",\"children\":[]},{\"level\":3,\"title\":\"相关的常用 api\",\"slug\":\"相关的常用-api\",\"link\":\"#相关的常用-api\",\"children\":[]},{\"level\":3,\"title\":\"DOM4J 解析-标签选择器方式\",\"slug\":\"dom4j-解析-标签选择器方式\",\"link\":\"#dom4j-解析-标签选择器方式\",\"children\":[]},{\"level\":3,\"title\":\"DOM4J 解析-xpath 方式(更便捷)\",\"slug\":\"dom4j-解析-xpath-方式-更便捷\",\"link\":\"#dom4j-解析-xpath-方式-更便捷\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/XML/DOM4J解析.md\",\"excerpt\":\"<h2>DOM4J 解析</h2>\\n<p>需要先导入相关的 jar 包</p>\\n<h3>DOM4J 解析的步骤：</h3>\\n<ol>\\n<li>创建一个 SAXReader 对象</li>\\n<li>调用 read 方法读取 XML 文件，并返回 Document 对象</li>\\n<li>获取根元素</li>\\n<li>获取子元素</li>\\n<li>获取属性</li>\\n<li>获取文本内容</li>\\n<li>遍历</li>\\n</ol>\\n<div class=\\\"language-xml\\\" data-ext=\\\"xml\\\" data-title=\\\"xml\\\"><pre class=\\\"language-xml\\\"><code><span class=\\\"token prolog\\\">&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;</span>\\n<span class=\\\"token comment\\\">&lt;!--学生信息配置文件--&gt;</span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>students</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>student</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>9527<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>name</span><span class=\\\"token punctuation\\\">&gt;</span></span>张三<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>name</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>age</span><span class=\\\"token punctuation\\\">&gt;</span></span>20<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>age</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>sex</span><span class=\\\"token punctuation\\\">&gt;</span></span>男<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>sex</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>student</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>student</span> <span class=\\\"token attr-name\\\">id</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>9528<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>name</span><span class=\\\"token punctuation\\\">&gt;</span></span>李四<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>name</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>age</span><span class=\\\"token punctuation\\\">&gt;</span></span>20<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>age</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n        <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>sex</span><span class=\\\"token punctuation\\\">&gt;</span></span>女<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>sex</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>student</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>students</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div>\"}")
export { comp, data }
