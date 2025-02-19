import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/XML/XML约束.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/XML/XML%E7%BA%A6%E6%9D%9F.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"XML 约束\",\"slug\":\"xml-约束\",\"link\":\"#xml-约束\",\"children\":[]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/XML/XML约束.md\",\"excerpt\":\"<h2>XML 约束</h2>\\n<blockquote>\\n<p>schema 约束：xsd 格式的约束文档 (推荐使用)</p>\\n<p>dtd 约束：dtd 格式的约束文档</p>\\n</blockquote>\\n<h4>根据 dtd 文档编写 xml</h4>\\n<blockquote>\\n<p>ELEMENT：元素；#PCDATA：标签属性</p>\\n<p>ATTLIST：属性；CDATA：元素属性；#FIXED：固定值；#REQUIRED：必须有值；#IMPLIED：可选值</p>\\n</blockquote>\\n<p>案例 1：</p>\\n<div class=\\\"language-dtd\\\" data-ext=\\\"dtd\\\" data-title=\\\"dtd\\\"><pre class=\\\"language-dtd\\\"><code>  &lt;!-- book.dtd --&gt;\\n  &lt;!ELEMENT 书架 (书+)&gt;\\n    &lt;!ELEMENT 书 (书名, 作者, 价格)&gt;\\n      &lt;!ELEMENT 书名 (#PCDATA)&gt;\\n      &lt;!ELEMENT 作者 (#PCDATA)&gt;\\n      &lt;!ELEMENT 价格 (#PCDATA)&gt;\\n  &lt;!ATTLIST 书\\n    出版社 CDATA \\\"新华书店\\\"\\n    属性1 CDATA #FIXED \\\"不能修改\\\"\\n    编号 ID #REQUIRED\\n  &gt;\\n  &lt;!ATTLIST 作者\\n    性别(男|女) #IMPLIED\\n    年龄(18|19|20) #IMPLIED\\n  &gt;\\n</code></pre></div>\"}")
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
