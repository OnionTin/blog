import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/组件通信/useAttrs.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1/useAttrs.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"useAttrs\",\"slug\":\"useattrs\",\"link\":\"#useattrs\",\"children\":[]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/组件通信/useAttrs.md\",\"excerpt\":\"<h2>useAttrs</h2>\\n<p>使用 <code>useAttrs</code>：Vue3 提供一个方法 useAttrs 方法,它可以获取组件身上的属性与事件。</p>\\n<div class=\\\"language-vue\\\" data-ext=\\\"vue\\\" data-title=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>template</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>h1</span><span class=\\\"token punctuation\\\">&gt;</span></span>useAttrs<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>h1</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>el-button</span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>primary<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">size</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>small<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">:icon</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>Edit<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>el-button</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token comment\\\">&lt;!-- 自定义组件 --&gt;</span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>HintButton</span>\\n      <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>primary<span class=\\\"token punctuation\\\">\\\"</span></span>\\n      <span class=\\\"token attr-name\\\">size</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>small<span class=\\\"token punctuation\\\">\\\"</span></span>\\n      <span class=\\\"token attr-name\\\">:icon</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>Edit<span class=\\\"token punctuation\\\">\\\"</span></span>\\n      <span class=\\\"token attr-name\\\">title</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>编辑按钮<span class=\\\"token punctuation\\\">\\\"</span></span>\\n      <span class=\\\"token attr-name\\\">@click</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>handler<span class=\\\"token punctuation\\\">\\\"</span></span>\\n      <span class=\\\"token attr-name\\\">@xxx</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>handler<span class=\\\"token punctuation\\\">\\\"</span></span>\\n    <span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>HintButton</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>template</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span> <span class=\\\"token attr-name\\\">setup</span> <span class=\\\"token attr-name\\\">lang</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>ts<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"><span class=\\\"token language-javascript\\\">\\n<span class=\\\"token comment\\\">//vue3框架提供一个方法useAttrs方法,它可以获取组件身上的属性与事件！！！</span>\\n<span class=\\\"token comment\\\">//图标组件</span>\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span>\\n  Check<span class=\\\"token punctuation\\\">,</span>\\n  Delete<span class=\\\"token punctuation\\\">,</span>\\n  Edit<span class=\\\"token punctuation\\\">,</span>\\n  Message<span class=\\\"token punctuation\\\">,</span>\\n  Search<span class=\\\"token punctuation\\\">,</span>\\n  Star<span class=\\\"token punctuation\\\">,</span>\\n<span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"@element-plus/icons-vue\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">import</span> HintButton <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"./HintButton.vue\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">//按钮点击的回调</span>\\n<span class=\\\"token keyword\\\">const</span> <span class=\\\"token function-variable function\\\">handler</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token function\\\">alert</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">12306</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n\\n<span class=\\\"token comment\\\">&lt;!-- HintButton.vue --&gt;</span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>template</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span> <span class=\\\"token attr-name\\\">:title</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>title<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>el-button</span> <span class=\\\"token attr-name\\\">:</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>$attrs<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>el-button</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>template</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>script</span> <span class=\\\"token attr-name\\\">setup</span> <span class=\\\"token attr-name\\\">lang</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>ts<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token script\\\"><span class=\\\"token language-javascript\\\">\\n<span class=\\\"token comment\\\">//引入useAttrs方法:获取组件标签身上属性与事件</span>\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> useAttrs <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"vue\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">//此方法执行会返回一个对象</span>\\n<span class=\\\"token keyword\\\">let</span> $attrs <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">useAttrs</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">//万一用props接受title</span>\\n<span class=\\\"token keyword\\\">let</span> props <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">defineProps</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"title\\\"</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">//props与useAttrs方法都可以获取父组件传递过来的属性与属性值</span>\\n<span class=\\\"token comment\\\">//但是props接受了useAttrs方法就获取不到了</span>\\nconsole<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>$attrs<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</span></span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>script</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n</code></pre></div>\"}")
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
