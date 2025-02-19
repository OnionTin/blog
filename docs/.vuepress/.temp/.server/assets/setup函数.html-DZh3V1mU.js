import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="setup-函数" tabindex="-1"><a class="header-anchor" href="#setup-函数"><span>setup 函数</span></a></h2><blockquote><p>Vue3.0 中一个新的配置项，值为一个函数。setup 是所有 Composition API(组合 API)“表演的舞台”。组件中所用到的:数据、方法等等，均要配置在 setup 中。</p></blockquote><h3 id="setup-函数的两种返回值" tabindex="-1"><a class="header-anchor" href="#setup-函数的两种返回值"><span>setup 函数的两种返回值:</span></a></h3><ol><li>若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用。(重点关注!)</li><li>若返回一个渲染函数，则可定义渲染内容。(了解)</li></ol><h3 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点"><span>注意点:</span></a></h3><ol><li><p><strong>尽量不要与 Vue2.x 配置混用</strong></p><ul><li>Vue2.x 配置(data、methods、computed...)中可以访问到 setup 中的属性、方法。</li><li>但在 setup 中不能访问到 Vue2.x 配置(data、methods、computed...)。</li><li>如果有重名，setup 优先。</li></ul></li><li><p>setup 不能是一个 async 函数，因为返回值不再是 return 的对象，而是 promise，模板看不到 return 对象中的属性。</p></li></ol><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>一个人的信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>姓名: {{ name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>年龄: {{ age }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 数据</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>

    <span class="token comment">// 返回一个对象(常用)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token punctuation">,</span>
      age<span class="token punctuation">,</span>
      sayHello<span class="token punctuation">,</span>
      test2<span class="token punctuation">,</span>
      a<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 返回一个渲染函数</span>
    <span class="token comment">// return () =&gt; h(&#39;h1&#39;, &#39;尚硅谷&#39;)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setup-的两个注意点" tabindex="-1"><a class="header-anchor" href="#setup-的两个注意点"><span>setup 的两个注意点</span></a></h3><h4 id="setup-执行的时机" tabindex="-1"><a class="header-anchor" href="#setup-执行的时机"><span>setup 执行的时机</span></a></h4><ul><li>在<code>beforeCreate</code>之前执行一次，<code>this</code>是<code>undefined</code>。</li></ul><h4 id="setup-的参数" tabindex="-1"><a class="header-anchor" href="#setup-的参数"><span>setup 的参数</span></a></h4><ul><li><strong>props</strong>: 值为对象，包含组件外部传递过来，且组件内部声明接收了的属性。</li><li><strong>context</strong>: 上下文对象 <ul><li><strong>attrs</strong>: 值为对象，包含组件外部传递过来，但没有在<code>props</code>配置中声明的属性，相当于<code>this.$attrs</code>。</li><li><strong>slots</strong>: 收到的插槽内容，相当于<code>this.$slots</code>。</li><li><strong>emit</strong>: 分发自定义事件的函数，相当于<code>this.$emit</code>。</li></ul></li></ul><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token attr-name">@hello</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showHelloMsg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>你好啊<span class="token punctuation">&quot;</span></span> <span class="token attr-name">school</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>尚硅谷<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>qwe</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>尚硅谷<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Demo</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Demo <span class="token keyword">from</span> <span class="token string">&quot;./components/Demo&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Demo <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">showHelloMsg</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Demo.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>一个人的信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>姓名: {{ person.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>年龄: {{ person.age }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>测试触发一下Demo组件的Hello事件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Demo&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;school&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(&#39;---setup---&#39;, props)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;---setup---&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(&#39;---setup---&#39;, context.attrs) // 详单与Vue2中的$attrs</span>
    <span class="token comment">// console.log(&#39;---setup---&#39;, context.emit) // 触发自定义事件的</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;---setup---&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>slots<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 触发自定义事件的</span>

    <span class="token comment">// 数据</span>
    <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 方法</span>
    <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      person<span class="token punctuation">,</span>
      test<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/Vue/Vue3/Vue基础/常用CompositionApi/setup函数.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const setup___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "setup函数.html.vue"]]);
const data = JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/setup%E5%87%BD%E6%95%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"setup 函数","slug":"setup-函数","link":"#setup-函数","children":[{"level":3,"title":"setup 函数的两种返回值:","slug":"setup-函数的两种返回值","link":"#setup-函数的两种返回值","children":[]},{"level":3,"title":"注意点:","slug":"注意点","link":"#注意点","children":[]},{"level":3,"title":"setup 的两个注意点","slug":"setup-的两个注意点","link":"#setup-的两个注意点","children":[]}]}],"git":{"updatedTime":1727429003000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Vue/Vue3/Vue基础/常用CompositionApi/setup函数.md","excerpt":"<h2>setup 函数</h2>\\n<blockquote>\\n<p>Vue3.0 中一个新的配置项，值为一个函数。setup 是所有 Composition API(组合 API)“表演的舞台”。组件中所用到的:数据、方法等等，均要配置在 setup 中。</p>\\n</blockquote>\\n<h3>setup 函数的两种返回值:</h3>\\n<ol>\\n<li>若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用。(重点关注!)</li>\\n<li>若返回一个渲染函数，则可定义渲染内容。(了解)</li>\\n</ol>\\n<h3>注意点:</h3>\\n<ol>\\n<li>\\n<p><strong>尽量不要与 Vue2.x 配置混用</strong></p>\\n<ul>\\n<li>Vue2.x 配置(data、methods、computed...)中可以访问到 setup 中的属性、方法。</li>\\n<li>但在 setup 中不能访问到 Vue2.x 配置(data、methods、computed...)。</li>\\n<li>如果有重名，setup 优先。</li>\\n</ul>\\n</li>\\n<li>\\n<p>setup 不能是一个 async 函数，因为返回值不再是 return 的对象，而是 promise，模板看不到 return 对象中的属性。</p>\\n</li>\\n</ol>"}');
export {
  setup___html as comp,
  data
};
