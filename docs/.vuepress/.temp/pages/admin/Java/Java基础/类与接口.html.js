import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java基础/类与接口.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E7%B1%BB%E4%B8%8E%E6%8E%A5%E5%8F%A3.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"类与类、类与接口、接口与接口\",\"slug\":\"类与类、类与接口、接口与接口\",\"link\":\"#类与类、类与接口、接口与接口\",\"children\":[]},{\"level\":2,\"title\":\"什么时候使用接口\",\"slug\":\"什么时候使用接口\",\"link\":\"#什么时候使用接口\",\"children\":[]}],\"git\":{\"updatedTime\":1715073877000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/Java基础/类与接口.md\",\"excerpt\":\"<h3>类与类、类与接口、接口与接口</h3>\\n<h5>类与类之间：继承关系，单继承，不可多继承；可以多层继承，不可循环继承</h5>\\n<div class=\\\"language-java\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">Fu</span><span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">show</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"Fu show\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">Zi</span> <span class=\\\"token keyword\\\">extends</span> <span class=\\\"token class-name\\\">Fu</span><span class=\\\"token punctuation\\\">{</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
