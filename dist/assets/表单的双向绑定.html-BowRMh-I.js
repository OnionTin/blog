import{_ as n,o as a,c as s,e as t}from"./app-C_RrakEG.js";const e={},p=t(`<h2 id="表单的双向绑定" tabindex="-1"><a class="header-anchor" href="#表单的双向绑定"><span>表单的双向绑定</span></a></h2><blockquote><p>在 Vue 3 中，v-model 是实现表单输入和应用状态之间双向绑定的指令。它不仅简化了数据的同步操作，还使得用户输入和数据模型之间的交互变得更加直观和高效。</p></blockquote><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h3><blockquote><p>在文本输入框中使用 v-model 来创建双向数据绑定：这里，message 是组件的数据属性，用户的输入会实时更新这个属性的值，反之亦然。</p></blockquote><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>edit me<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="复选框和单选按钮" tabindex="-1"><a class="header-anchor" href="#复选框和单选按钮"><span>复选框和单选按钮</span></a></h3><blockquote><p>复选框和单选按钮同样可以使用 v-model 进行双向绑定：在这个例子中，checked 是一个布尔值，用于跟踪复选框是否被选中；picked 会根据选中的单选按钮的值进行更新。</p></blockquote><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checked<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picked<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下拉选择器" tabindex="-1"><a class="header-anchor" href="#下拉选择器"><span>下拉选择器</span></a></h3><blockquote><p>对于 &lt;select&gt; 元素，v-model 绑定到选中的值：selected 会保存当前选中的 &lt;option&gt; 的值。</p></blockquote><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selected<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Option 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Option 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义组件" tabindex="-1"><a class="header-anchor" href="#自定义组件"><span>自定义组件</span></a></h3><blockquote><p>在自定义组件中，v-model 可以通过 defineModel 实现双向绑定，这是 Vue 3.4 引入的新特性，简化了双向绑定的实现：</p></blockquote><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 子组件 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token function">defineModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    model<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Parent bound v-model is: {{ model }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Increment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 父组件 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomComponent</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputValue<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符"><span>修饰符</span></a></h3><blockquote><p>v-model 还提供了几个修饰符，如 .lazy、.number 和 .trim，来处理不同的输入场景：</p></blockquote><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 延迟更新 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model.lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- 自动转换为数字 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model.number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- 自动去除首尾空格 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model.trim</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[p];function o(c,u){return a(),s("div",null,l)}const k=n(e,[["render",o],["__file","表单的双向绑定.html.vue"]]),d=JSON.parse('{"path":"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E8%A1%A8%E5%8D%95%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"表单的双向绑定","slug":"表单的双向绑定","link":"#表单的双向绑定","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"复选框和单选按钮","slug":"复选框和单选按钮","link":"#复选框和单选按钮","children":[]},{"level":3,"title":"下拉选择器","slug":"下拉选择器","link":"#下拉选择器","children":[]},{"level":3,"title":"自定义组件","slug":"自定义组件","link":"#自定义组件","children":[]},{"level":3,"title":"修饰符","slug":"修饰符","link":"#修饰符","children":[]}]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Vue/Vue3/技术点/表单的双向绑定.md","excerpt":"<h2>表单的双向绑定</h2>\\n<blockquote>\\n<p>在 Vue 3 中，v-model 是实现表单输入和应用状态之间双向绑定的指令。它不仅简化了数据的同步操作，还使得用户输入和数据模型之间的交互变得更加直观和高效。</p>\\n</blockquote>\\n<h3>基本用法</h3>\\n<blockquote>\\n<p>在文本输入框中使用 v-model 来创建双向数据绑定：这里，message 是组件的数据属性，用户的输入会实时更新这个属性的值，反之亦然。</p>\\n</blockquote>\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>message<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">placeholder</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>edit me<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n</code></pre></div>"}');export{k as comp,d as data};
