import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Spring/import导入bean.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Spring/import%E5%AF%BC%E5%85%A5bean.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"import 导入 bean\",\"slug\":\"import-导入-bean\",\"link\":\"#import-导入-bean\",\"children\":[]}],\"git\":{\"updatedTime\":1723195339000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Spring/import导入bean.md\",\"excerpt\":\"<h2>import 导入 bean</h2>\\n<blockquote>\\n<p>当多人协作的时候，可能会有多个 bean 文件，我们可以将多个 bean 文件通过 import 导入到主配置文件中，我们只需要使用主配置文件就可以</p>\\n</blockquote>\\n<div class=\\\"language-xml\\\" data-ext=\\\"xml\\\" data-title=\\\"xml\\\"><pre class=\\\"language-xml\\\"><code><span class=\\\"token comment\\\">&lt;!-- applicationContext.xml --&gt;</span>\\n<span class=\\\"token prolog\\\">&lt;?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?&gt;</span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>beans</span> <span class=\\\"token attr-name\\\">xmlns</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.springframework.org/schema/beans<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xmlns:</span>xsi</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.w3.org/2001/XMLSchema-instance<span class=\\\"token punctuation\\\">\\\"</span></span>\\n  <span class=\\\"token attr-name\\\"><span class=\\\"token namespace\\\">xsi:</span>schemaLocation</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>http://www.springframework.org/schema/beans\\n  http://www.springframework.org/schema/beans/spring-beans.xsd<span class=\\\"token punctuation\\\">\\\"</span></span>\\n<span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>import</span> <span class=\\\"token attr-name\\\">resource</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>bean1.xml<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>import</span> <span class=\\\"token attr-name\\\">resource</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>bean2.xml<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>import</span> <span class=\\\"token attr-name\\\">resource</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>bean3.xml<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>beans</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div>\"}")
export { comp, data }
