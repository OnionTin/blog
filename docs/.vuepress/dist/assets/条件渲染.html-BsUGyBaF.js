import{_ as n,o as s,c as a,e as t}from"./app-CilA4iky.js";const p={},e=t(`<h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染"><span>条件渲染</span></a></h2><p>条件渲染是 React 中根据条件来控制元素是否显示或显示什么内容的机制。</p><h3 id="_1-基本条件渲染" tabindex="-1"><a class="header-anchor" href="#_1-基本条件渲染"><span>1. 基本条件渲染</span></a></h3><p>使用 JavaScript 的<code>if</code>语句或三元运算符<code>? :</code>来实现条件渲染。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> isLoggedIn <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>isLoggedIn <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dashboard</span></span> <span class="token punctuation">/&gt;</span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Login</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-inline-if" tabindex="-1"><a class="header-anchor" href="#_2-inline-if"><span>2. Inline If</span></a></h3><p>在 JSX 中，你可以在返回语句中直接使用花括号<code>{}</code>包裹的表达式来实现条件渲染。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> isLoggedIn <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>isLoggedIn <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dashboard</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-三元运算符" tabindex="-1"><a class="header-anchor" href="#_3-三元运算符"><span>3. 三元运算符</span></a></h3><p>三元运算符可以用来在两个元素之间进行选择性渲染。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> isLoggedIn <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>isLoggedIn <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dashboard</span></span> <span class="token punctuation">/&gt;</span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Login</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-逻辑与" tabindex="-1"><a class="header-anchor" href="#_4-逻辑与"><span>4. 逻辑与(&amp;&amp;)</span></a></h3><p>逻辑与操作符可以用来在数组中进行条件渲染，如果条件为真，则元素将被渲染。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>isVisible <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-条件列表渲染" tabindex="-1"><a class="header-anchor" href="#_5-条件列表渲染"><span>5. 条件列表渲染</span></a></h3><p>在渲染列表时，可以根据条件来决定是否渲染列表中的某些元素。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">ItemList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>items
        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>isVisible<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-使用状态进行条件渲染" tabindex="-1"><a class="header-anchor" href="#_6-使用状态进行条件渲染"><span>6. 使用状态进行条件渲染</span></a></h3><p>使用状态来控制组件的显示或隐藏。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isVisible<span class="token punctuation">,</span> setIsVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">toggleVisibility</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setIsVisible</span><span class="token punctuation">(</span><span class="token operator">!</span>isVisible<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>isVisible <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Now you see me!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>toggleVisibility<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>isVisible <span class="token operator">?</span> <span class="token string">&#39;Hide&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Show&#39;</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-使用-props-进行条件渲染" tabindex="-1"><a class="header-anchor" href="#_7-使用-props-进行条件渲染"><span>7. 使用 props 进行条件渲染</span></a></h3><p>根据传入的 props 来决定是否渲染某个元素。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Greeting</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> salutation <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>salutation <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>salutation<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, user!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-阻止组件渲染" tabindex="-1"><a class="header-anchor" href="#_8-阻止组件渲染"><span>8. 阻止组件渲染</span></a></h3><p>使用<code>null</code>来阻止组件渲染任何内容。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> content <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> content <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-fragment" tabindex="-1"><a class="header-anchor" href="#_9-fragment"><span>9. Fragment</span></a></h3><p>使用<code>React.Fragment</code>来包装条件渲染的元素组，避免添加额外的 DOM 元素。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Fragment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> user <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>isLoggedIn <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dashboard</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Login</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-条件渲染的组合" tabindex="-1"><a class="header-anchor" href="#_10-条件渲染的组合"><span>10. 条件渲染的组合</span></a></h3><p>可以将多种条件渲染技术组合使用，以实现复杂的渲染逻辑。</p><h3 id="_11-使用useeffect进行条件渲染" tabindex="-1"><a class="header-anchor" href="#_11-使用useeffect进行条件渲染"><span>11. 使用<code>useEffect</code>进行条件渲染</span></a></h3><p>在<code>useEffect</code>中使用条件语句来根据状态或 props 的变化执行副作用。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> user <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Do something</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>user<span class="token punctuation">.</span>isLoggedIn<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-性能考虑" tabindex="-1"><a class="header-anchor" href="#_12-性能考虑"><span>12. 性能考虑</span></a></h3><p>条件渲染时要注意性能，避免在渲染过程中进行高开销的计算。</p>`,36),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","条件渲染.html.vue"]]),d=JSON.parse('{"path":"/web/React/React%E6%8F%90%E5%8D%87/%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"条件渲染","slug":"条件渲染","link":"#条件渲染","children":[{"level":3,"title":"1. 基本条件渲染","slug":"_1-基本条件渲染","link":"#_1-基本条件渲染","children":[]},{"level":3,"title":"2. Inline If","slug":"_2-inline-if","link":"#_2-inline-if","children":[]},{"level":3,"title":"3. 三元运算符","slug":"_3-三元运算符","link":"#_3-三元运算符","children":[]},{"level":3,"title":"4. 逻辑与(&&)","slug":"_4-逻辑与","link":"#_4-逻辑与","children":[]},{"level":3,"title":"5. 条件列表渲染","slug":"_5-条件列表渲染","link":"#_5-条件列表渲染","children":[]},{"level":3,"title":"6. 使用状态进行条件渲染","slug":"_6-使用状态进行条件渲染","link":"#_6-使用状态进行条件渲染","children":[]},{"level":3,"title":"7. 使用 props 进行条件渲染","slug":"_7-使用-props-进行条件渲染","link":"#_7-使用-props-进行条件渲染","children":[]},{"level":3,"title":"8. 阻止组件渲染","slug":"_8-阻止组件渲染","link":"#_8-阻止组件渲染","children":[]},{"level":3,"title":"9. Fragment","slug":"_9-fragment","link":"#_9-fragment","children":[]},{"level":3,"title":"10. 条件渲染的组合","slug":"_10-条件渲染的组合","link":"#_10-条件渲染的组合","children":[]},{"level":3,"title":"11. 使用useEffect进行条件渲染","slug":"_11-使用useeffect进行条件渲染","link":"#_11-使用useeffect进行条件渲染","children":[]},{"level":3,"title":"12. 性能考虑","slug":"_12-性能考虑","link":"#_12-性能考虑","children":[]}]}],"git":{"updatedTime":1728487189000,"contributors":[{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/React/React提升/条件渲染.md","excerpt":"<!-- @format -->\\n<h2>条件渲染</h2>\\n<p>条件渲染是 React 中根据条件来控制元素是否显示或显示什么内容的机制。</p>\\n<h3>1. 基本条件渲染</h3>\\n<p>使用 JavaScript 的<code>if</code>语句或三元运算符<code>? :</code>来实现条件渲染。</p>\\n<div class=\\"language-jsx\\" data-ext=\\"jsx\\" data-title=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">MyComponent</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token punctuation\\">{</span> isLoggedIn <span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">{</span>isLoggedIn <span class=\\"token operator\\">?</span> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Dashboard</span></span> <span class=\\"token punctuation\\">/&gt;</span></span> <span class=\\"token operator\\">:</span> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Login</span></span> <span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token punctuation\\">}</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{k as comp,d as data};
