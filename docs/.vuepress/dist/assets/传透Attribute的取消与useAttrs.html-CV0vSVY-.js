import{_ as s,o as n,c as a,e as t}from"./app-CilA4iky.js";const e={},p=t(`<h2 id="传透-attribute-的取消与-useattrs" tabindex="-1"><a class="header-anchor" href="#传透-attribute-的取消与-useattrs"><span>传透 Attribute 的取消与 useAttrs</span></a></h2><blockquote><p>在 Vue 3 中，组件可以接收来自父组件的附加属性（称为“透传 Attributes”），这些属性没有在子组件的 <code>props</code> 中声明。Vue 3 提供了几种处理这些透传属性的方法。</p></blockquote><h3 id="透传-attributes" tabindex="-1"><a class="header-anchor" href="#透传-attributes"><span>透传 Attributes</span></a></h3><blockquote><p>透传 Attributes 是指那些传递给组件但没有被声明为 <code>props</code> 或 <code>emits</code> 的 attribute 或 <code>v-on</code> 事件监听器。最常见的例子包括 <code>class</code>、<code>style</code> 和 <code>id</code>。</p></blockquote><h4 id="单个根节点" tabindex="-1"><a class="header-anchor" href="#单个根节点"><span>单个根节点</span></a></h4><blockquote><p>当组件以单个元素为根节点时，透传的 attribute 会自动应用到该根元素上。</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 子组件模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 父组件模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 渲染结果： --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="禁用属性透传" tabindex="-1"><a class="header-anchor" href="#禁用属性透传"><span>禁用属性透传</span></a></h4><blockquote><p>在某些情况下，你可能希望禁用属性透传。这可以通过在子组件的 <code>inheritAttrs</code> 选项中设置 <code>false</code> 来实现。</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 子组件模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 父组件模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 渲染结果： --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多根节点" tabindex="-1"><a class="header-anchor" href="#多根节点"><span>多根节点</span></a></h4><blockquote><p>对于有多个根节点的组件，Vue 不会自动透传 attribute。如果未显式绑定 $attrs，Vue 会发出警告。</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useattrs" tabindex="-1"><a class="header-anchor" href="#useattrs"><span>useAttrs</span></a></h3><blockquote><p>Vue 3 引入了 useAttrs API，允许你在 &lt;script setup&gt; 中访问透传的 attribute。</p></blockquote><h4 id="使用-useattrs" tabindex="-1"><a class="header-anchor" href="#使用-useattrs"><span>使用 useAttrs</span></a></h4><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAttrs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在非 &lt;script setup&gt; 环境中，attrs 会作为 setup() 函数的上下文参数提供。这样，所有透传的 attribute 都会被应用到 &lt;div&gt; 上。</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAttrs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>attrs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>自定义内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ol><li>attrs 对象不是响应式的，不能用于设置数据监听。</li><li>如果需要响应性，应使用 props。</li><li>可以使用 onUpdated 生命周期钩子来在每次更新时执行副作用。</li></ol>`,21),c=[p];function l(o,u){return n(),a("div",null,c)}const r=s(e,[["render",l],["__file","传透Attribute的取消与useAttrs.html.vue"]]),k=JSON.parse('{"path":"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E4%BC%A0%E9%80%8FAttribute%E7%9A%84%E5%8F%96%E6%B6%88%E4%B8%8EuseAttrs.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"传透 Attribute 的取消与 useAttrs","slug":"传透-attribute-的取消与-useattrs","link":"#传透-attribute-的取消与-useattrs","children":[{"level":3,"title":"透传 Attributes","slug":"透传-attributes","link":"#透传-attributes","children":[]},{"level":3,"title":"useAttrs","slug":"useattrs","link":"#useattrs","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Vue/Vue3/技术点/传透Attribute的取消与useAttrs.md","excerpt":"<h2>传透 Attribute 的取消与 useAttrs</h2>\\n<blockquote>\\n<p>在 Vue 3 中，组件可以接收来自父组件的附加属性（称为“透传 Attributes”），这些属性没有在子组件的 <code>props</code> 中声明。Vue 3 提供了几种处理这些透传属性的方法。</p>\\n</blockquote>\\n<h3>透传 Attributes</h3>\\n<blockquote>\\n<p>透传 Attributes 是指那些传递给组件但没有被声明为 <code>props</code> 或 <code>emits</code> 的 attribute 或 <code>v-on</code> 事件监听器。最常见的例子包括 <code>class</code>、<code>style</code> 和 <code>id</code>。</p>\\n</blockquote>"}');export{r as comp,k as data};
