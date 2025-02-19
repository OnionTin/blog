import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/类/extends继承.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E7%B1%BB/extends%E7%BB%A7%E6%89%BF.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"extends 继承\",\"slug\":\"extends-继承\",\"link\":\"#extends-继承\",\"children\":[]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/类/extends继承.md\",\"excerpt\":\"<h2>extends 继承</h2>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">Animal</span> <span class=\\\"token punctuation\\\">{</span>\\n  name<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">;</span>\\n  age<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token function\\\">constructor</span><span class=\\\"token punctuation\\\">(</span>name<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">,</span> age<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>name <span class=\\\"token operator\\\">=</span> name<span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>age <span class=\\\"token operator\\\">=</span> age<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token function\\\">say</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"动物在叫!\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">Dog</span> <span class=\\\"token keyword\\\">extends</span> <span class=\\\"token class-name\\\">Animal</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 继承后字类将会有父类的所有属性和方法</span>\\n  <span class=\\\"token function\\\">run</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"小狗边跑边叫!\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">Cat</span> <span class=\\\"token keyword\\\">extends</span> <span class=\\\"token class-name\\\">Animal</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 继承后字类将会有父类的所有属性和方法</span>\\n  <span class=\\\"token function\\\">say</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token comment\\\">// 方法的重写: 子类会覆盖符类中的say方法</span>\\n    <span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"小猫喵喵喵!\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">dog</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Dog</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"小黑\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token number\\\">18</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\ndog<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">run</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
