import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/XML/XML概述.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/XML/XML%E6%A6%82%E8%BF%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"XML 概述\",\"slug\":\"xml-概述\",\"link\":\"#xml-概述\",\"children\":[{\"level\":3,\"title\":\"XML 语法\",\"slug\":\"xml-语法\",\"link\":\"#xml-语法\",\"children\":[]},{\"level\":3,\"title\":\"XML 命名规则\",\"slug\":\"xml-命名规则\",\"link\":\"#xml-命名规则\",\"children\":[]},{\"level\":3,\"title\":\"XML 和 properties\",\"slug\":\"xml-和-properties\",\"link\":\"#xml-和-properties\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/XML/XML概述.md\",\"excerpt\":\"<h2>XML 概述</h2>\\n<p>什么是 XML，和 HTML 有什么区别？</p>\\n<p>XML 指可扩展标记语言。</p>\\n<p>XML 和 HTML 的区别：</p>\\n<ul>\\n<li>XML 不是 HTML 的替代。</li>\\n<li>XML 传输和存储数据，常用作配置文件；HTML 用来展示页面及显示数据。</li>\\n<li>XML 标签可以扩展，可以自定义；HTML 标签是预定义的。</li>\\n<li>XML 文件后缀是 .xml；HTML 文件后缀是 .html；都可以用浏览器打开检查。</li>\\n</ul>\\n<h3>XML 语法</h3>\\n<ul>\\n<li>XML 有且只有一个根元素；标签之间必须正确嵌套；标签必须正确闭合，语法严谨，错一点都不行</li>\\n<li>多个属性值可以写在一起，用空格分隔；属性值必须用引号(单引号或者双引号都行)括起来。</li>\\n<li>XML 标签对大小写敏感。</li>\\n<li>XML 注释使用 <!-- -->。</li>\\n<li>转义字符 &lt; 用&lt;，&gt; 用&gt;，&amp; 用&amp;，空格用&nbsp;。</li>\\n<li>多行转移需要使用 CDATA 标签，CDATA 标签可以防止 XML 解析器将某些字符进行解析。</li>\\n<li>XML 第一行必须是文档声明，其中 version 属性必须有值，encoding 编码格式可以确少。</li>\\n</ul>\"}")
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
