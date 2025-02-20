import{_ as n,o as a,c as s,e as t}from"./app-C_RrakEG.js";const e={},o=t(`<h2 id="context-api" tabindex="-1"><a class="header-anchor" href="#context-api"><span>Context API</span></a></h2><p>React 的 Context API 允许你在组件树中共享值，而不必在每个层级手动传递 props。处理跨组件通信的强大工具，它可以用来共享状态、功能或任何可变的值，而不必显式地通过组件链逐级传递。</p><h3 id="_1-创建-context" tabindex="-1"><a class="header-anchor" href="#_1-创建-context"><span>1. 创建 Context</span></a></h3><p>使用<code>React.createContext</code>创建一个新的 Context 对象。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>defaultValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-提供-context-值" tabindex="-1"><a class="header-anchor" href="#_2-提供-context-值"><span>2. 提供 Context 值</span></a></h3><p>使用<code>Context.Provider</code>组件包裹你想要提供值的组件树。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token comment">/* 一些值 */</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">YourComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyContext.Provider</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-消费-context" tabindex="-1"><a class="header-anchor" href="#_3-消费-context"><span>3. 消费 Context</span></a></h3><p>组件可以使用<code>Context.Consumer</code>或<code>useContext</code> Hook 来消费 Context。</p><h4 id="使用context-consumer" tabindex="-1"><a class="header-anchor" href="#使用context-consumer"><span>使用<code>Context.Consumer</code></span></a></h4><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyContext.Consumer</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token punctuation">{</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token comment">/* 根据context值渲染组件 */</span><span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyContext.Consumer</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用usecontext-hook" tabindex="-1"><a class="header-anchor" href="#使用usecontext-hook"><span>使用<code>useContext</code> Hook</span></a></h4><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">YourComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>MyContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-context-默认值" tabindex="-1"><a class="header-anchor" href="#_4-context-默认值"><span>4. Context 默认值</span></a></h3><p>为 Context 设置默认值，以便在没有<code>Provider</code>的情况下使用。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> defaultValue <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;light&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>defaultValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-更新-context-值" tabindex="-1"><a class="header-anchor" href="#_5-更新-context-值"><span>5. 更新 Context 值</span></a></h3><p>更新<code>Provider</code>的<code>value</code>属性将导致所有消费该 Context 的组件重新渲染。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;dark&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyContext.Provider</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-使用-context-进行状态管理" tabindex="-1"><a class="header-anchor" href="#_6-使用-context-进行状态管理"><span>6. 使用 Context 进行状态管理</span></a></h3><p>Context 可以用于全局状态管理，如用户身份验证、主题或偏好设置。</p><h3 id="_7-嵌套-context" tabindex="-1"><a class="header-anchor" href="#_7-嵌套-context"><span>7. 嵌套 Context</span></a></h3><p>可以嵌套多个 Context，以在组件树的不同部分提供不同的值。</p><h3 id="_8-context-与组件性能" tabindex="-1"><a class="header-anchor" href="#_8-context-与组件性能"><span>8. Context 与组件性能</span></a></h3><p>过度使用 Context 或不正确的更新可能导致性能问题，因为每个消费 Context 的组件都会在 Context 值更新时重新渲染。</p><h3 id="_9-memoization" tabindex="-1"><a class="header-anchor" href="#_9-memoization"><span>9. Memoization</span></a></h3><p>使用<code>React.memo</code>、<code>useMemo</code>或<code>useCallback</code>来避免不必要的渲染。</p><h3 id="_10-context-与-redux" tabindex="-1"><a class="header-anchor" href="#_10-context-与-redux"><span>10. Context 与 Redux</span></a></h3><p>Context 可以作为状态管理解决方案，但通常与 Redux 等库结合使用，以处理更复杂的状态逻辑。</p><h3 id="_11-注意事项" tabindex="-1"><a class="header-anchor" href="#_11-注意事项"><span>11. 注意事项</span></a></h3><ul><li>Context 是为频繁跨组件树传递数据而设计的，而不是作为通用的状态管理解决方案。</li><li>如果 Context 值变化不频繁，但组件仍然重新渲染，考虑使用<code>useMemo</code>创建一个稳定的值。</li><li>在类组件中，可以使用<code>static contextType</code>来消费 Context。</li></ul><h3 id="_12-自定义-hook-与-context" tabindex="-1"><a class="header-anchor" href="#_12-自定义-hook-与-context"><span>12. 自定义 Hook 与 Context</span></a></h3><p>创建自定义 Hook 来包装 Context 的使用方法，以便在多个组件中重用。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">useMyContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">useContext</span><span class="token punctuation">(</span>MyContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-context-的替代方案" tabindex="-1"><a class="header-anchor" href="#_13-context-的替代方案"><span>13. Context 的替代方案</span></a></h3><p>对于简单的跨组件通信，可以考虑使用提升 state 或 props drilling 作为 Context 的替代方案。</p><h3 id="_14-context-的类型检查" tabindex="-1"><a class="header-anchor" href="#_14-context-的类型检查"><span>14. Context 的类型检查</span></a></h3><p>使用<code>PropTypes</code>来验证 Context 的值。</p><h3 id="_15-context-与-suspense" tabindex="-1"><a class="header-anchor" href="#_15-context-与-suspense"><span>15. Context 与 Suspense</span></a></h3><p>Context 可以与<code>React.Suspense</code>一起使用，为数据加载提供更好的错误边界和加载状态。</p>`,41),c=[o];function p(l,i){return a(),s("div",null,c)}const u=n(e,[["render",p],["__file","ContextAPI.html.vue"]]),r=JSON.parse('{"path":"/web/React/React%E6%8F%90%E5%8D%87/ContextAPI.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Context API","slug":"context-api","link":"#context-api","children":[{"level":3,"title":"1. 创建 Context","slug":"_1-创建-context","link":"#_1-创建-context","children":[]},{"level":3,"title":"2. 提供 Context 值","slug":"_2-提供-context-值","link":"#_2-提供-context-值","children":[]},{"level":3,"title":"3. 消费 Context","slug":"_3-消费-context","link":"#_3-消费-context","children":[]},{"level":3,"title":"4. Context 默认值","slug":"_4-context-默认值","link":"#_4-context-默认值","children":[]},{"level":3,"title":"5. 更新 Context 值","slug":"_5-更新-context-值","link":"#_5-更新-context-值","children":[]},{"level":3,"title":"6. 使用 Context 进行状态管理","slug":"_6-使用-context-进行状态管理","link":"#_6-使用-context-进行状态管理","children":[]},{"level":3,"title":"7. 嵌套 Context","slug":"_7-嵌套-context","link":"#_7-嵌套-context","children":[]},{"level":3,"title":"8. Context 与组件性能","slug":"_8-context-与组件性能","link":"#_8-context-与组件性能","children":[]},{"level":3,"title":"9. Memoization","slug":"_9-memoization","link":"#_9-memoization","children":[]},{"level":3,"title":"10. Context 与 Redux","slug":"_10-context-与-redux","link":"#_10-context-与-redux","children":[]},{"level":3,"title":"11. 注意事项","slug":"_11-注意事项","link":"#_11-注意事项","children":[]},{"level":3,"title":"12. 自定义 Hook 与 Context","slug":"_12-自定义-hook-与-context","link":"#_12-自定义-hook-与-context","children":[]},{"level":3,"title":"13. Context 的替代方案","slug":"_13-context-的替代方案","link":"#_13-context-的替代方案","children":[]},{"level":3,"title":"14. Context 的类型检查","slug":"_14-context-的类型检查","link":"#_14-context-的类型检查","children":[]},{"level":3,"title":"15. Context 与 Suspense","slug":"_15-context-与-suspense","link":"#_15-context-与-suspense","children":[]}]}],"git":{"updatedTime":1728487189000,"contributors":[{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/React/React提升/ContextAPI.md","excerpt":"<!-- @format -->\\n<h2>Context API</h2>\\n<p>React 的 Context API 允许你在组件树中共享值，而不必在每个层级手动传递 props。处理跨组件通信的强大工具，它可以用来共享状态、功能或任何可变的值，而不必显式地通过组件链逐级传递。</p>\\n<h3>1. 创建 Context</h3>\\n<p>使用<code>React.createContext</code>创建一个新的 Context 对象。</p>\\n<div class=\\"language-jsx\\" data-ext=\\"jsx\\" data-title=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token keyword\\">const</span> MyContext <span class=\\"token operator\\">=</span> React<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createContext</span><span class=\\"token punctuation\\">(</span>defaultValue<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{u as comp,r as data};
