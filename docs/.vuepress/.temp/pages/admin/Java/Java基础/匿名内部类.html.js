import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/匿名内部类.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E5%8C%BF%E5%90%8D%E5%86%85%E9%83%A8%E7%B1%BB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"匿名内部类(匿名子类对象)\",\"slug\":\"匿名内部类-匿名子类对象\",\"link\":\"#匿名内部类-匿名子类对象\",\"children\":[]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java基础/匿名内部类.md\",\"excerpt\":\"<h2>匿名内部类(匿名子类对象)</h2>\\n<blockquote>\\n<p>匿名内部类就是没有名字的局部内部类，也叫匿名子类对象</p>\\n<p>实际就是子类对象</p>\\n<p>格式：</p>\\n<p>new 类名/接口名(){</p>\\n<p>重写的方法</p>\\n<p>自定义的方法</p>\\n<p>}</p>\\n</blockquote>\\n<div class=\\\"language-java\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code>  <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Person</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token comment\\\">// 这就是匿名内部类的格式</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
