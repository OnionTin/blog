import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/多线程/死锁.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%A4%9A%E7%BA%BF%E7%A8%8B/%E6%AD%BB%E9%94%81.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"死锁\",\"slug\":\"死锁\",\"link\":\"#死锁\",\"children\":[]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/多线程/死锁.md\",\"excerpt\":\"<h2>死锁</h2>\\n<blockquote>\\n<p>同步代码块，互相嵌套，会造成死锁现象；实际开发要避免死锁。</p>\\n</blockquote>\\n<div class=\\\"language-java\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code>举例：有一双筷子，谁拿到了，谁就可以吃饭了，但是 <span class=\\\"token class-name\\\">A</span> 拿了一只，<span class=\\\"token class-name\\\">B</span> 拿了另一只，那就死锁了。\\n<span class=\\\"token keyword\\\">package</span> <span class=\\\"token namespace\\\">com<span class=\\\"token punctuation\\\">.</span>api<span class=\\\"token punctuation\\\">.</span></span><span class=\\\"token class-name\\\">DuoXianCheng</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">SiSuo</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">static</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">main</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">String</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span> args<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token class-name\\\">String</span> s1 <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"左筷子\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token class-name\\\">String</span> s2 <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"右筷子\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n\\n        <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Thread</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"小明\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">run</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n                <span class=\\\"token keyword\\\">while</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token boolean\\\">true</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n                    <span class=\\\"token comment\\\">// 同步代码块互相嵌套：会造成死锁</span>\\n                    <span class=\\\"token keyword\\\">synchronized</span> <span class=\\\"token punctuation\\\">(</span>s1<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n                        <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">getName</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">+</span> <span class=\\\"token string\\\">\\\"拿到了\\\"</span> <span class=\\\"token operator\\\">+</span> s1 <span class=\\\"token operator\\\">+</span> <span class=\\\"token string\\\">\\\"等待\\\"</span> <span class=\\\"token operator\\\">+</span> s2<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n                        <span class=\\\"token keyword\\\">synchronized</span> <span class=\\\"token punctuation\\\">(</span>s2<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n                            <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">getName</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">+</span> <span class=\\\"token string\\\">\\\"拿到了\\\"</span> <span class=\\\"token operator\\\">+</span> s2 <span class=\\\"token operator\\\">+</span> <span class=\\\"token string\\\">\\\"开始吃\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n                        <span class=\\\"token punctuation\\\">}</span>\\n                    <span class=\\\"token punctuation\\\">}</span>\\n                <span class=\\\"token punctuation\\\">}</span>\\n            <span class=\\\"token punctuation\\\">}</span>\\n        <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">start</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n        <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Thread</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"大正\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">run</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n                <span class=\\\"token keyword\\\">while</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token boolean\\\">true</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n                    <span class=\\\"token comment\\\">// 同步代码块互相嵌套：会造成死锁</span>\\n                    <span class=\\\"token keyword\\\">synchronized</span> <span class=\\\"token punctuation\\\">(</span>s2<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n                        <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">getName</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">+</span> <span class=\\\"token string\\\">\\\"拿到了\\\"</span> <span class=\\\"token operator\\\">+</span> s2 <span class=\\\"token operator\\\">+</span> <span class=\\\"token string\\\">\\\"等待\\\"</span> <span class=\\\"token operator\\\">+</span> s1<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n                        <span class=\\\"token keyword\\\">synchronized</span> <span class=\\\"token punctuation\\\">(</span>s1<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n                            <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">getName</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">+</span> <span class=\\\"token string\\\">\\\"拿到了\\\"</span> <span class=\\\"token operator\\\">+</span> s1 <span class=\\\"token operator\\\">+</span> <span class=\\\"token string\\\">\\\"开始吃\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n                        <span class=\\\"token punctuation\\\">}</span>\\n                    <span class=\\\"token punctuation\\\">}</span>\\n                <span class=\\\"token punctuation\\\">}</span>\\n            <span class=\\\"token punctuation\\\">}</span>\\n        <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">start</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
