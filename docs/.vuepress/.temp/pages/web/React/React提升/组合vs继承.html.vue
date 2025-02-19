<template><div><!-- @format -->
<h2 id="组合-vs-继承" tabindex="-1"><a class="header-anchor" href="#组合-vs-继承"><span>组合 vs 继承</span></a></h2>
<p>在 React 中，组合和继承是两种不同的组件复用方式。React 团队推荐使用组合而不是继承来构建应用程序，因为组合提供了更好的灵活性和可维护性。总的来说，组合提供了一种更灵活、更可维护的方式来构建 React 应用程序，而继承则在某些特定场景下可能有其优势。</p>
<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h3>
<p>在传统的 OOP（面向对象编程）中，继承是一种常见的代码复用方式。通过创建一个新类并继承父类的属性和方法，可以扩展功能。在 React 中，继承通常意味着一个组件通过<code v-pre>extends</code>关键字继承另一个组件。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">ChildComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>继承的缺点</strong>：</p>
<ol>
<li><strong>紧密耦合</strong>：子组件和父组件紧密耦合，父组件的更改可能影响子组件。</li>
<li><strong>复用受限</strong>：只能继承一个父组件，限制了复用性。</li>
<li><strong>生命周期方法</strong>：在类组件中，生命周期方法和属性是固定的，这限制了组件的灵活性。</li>
<li><strong>理解复杂度</strong>：继承关系可能导致组件之间的依赖关系变得复杂，难以理解。</li>
</ol>
<h3 id="组合" tabindex="-1"><a class="header-anchor" href="#组合"><span>组合</span></a></h3>
<p>组合是将多个小组件组合成一个大组件的方式。在 React 中，组件可以像函数一样相互调用并返回 JSX。</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">ParentComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChildComponentA</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChildComponentB</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ChildComponentA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Child A</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ChildComponentB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Child B</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组合的优点</strong>：</p>
<ol>
<li><strong>灵活性</strong>：可以灵活地组合不同的组件，创建复杂的 UI。</li>
<li><strong>可维护性</strong>：每个组件都是独立的，易于维护和测试。</li>
<li><strong>复用性</strong>：组件可以在不同的父组件中复用，提高了代码的复用性。</li>
<li><strong>简洁性</strong>：组合可以减少模板代码，使组件更加简洁。</li>
</ol>
<h3 id="react-推荐组合的原因" tabindex="-1"><a class="header-anchor" href="#react-推荐组合的原因"><span>React 推荐组合的原因</span></a></h3>
<ol>
<li><strong>更少的假设</strong>：组合不假设组件之间的关系，提供了更大的灵活性。</li>
<li><strong>更好的复用性</strong>：组件可以在不同的上下文中复用，而不受限制。</li>
<li><strong>更清晰的结构</strong>：组合可以创建更清晰的组件结构，易于理解和维护。</li>
<li><strong>避免生命周期问题</strong>：组合避免了复杂的生命周期方法和属性继承问题。</li>
</ol>
<h3 id="结合使用" tabindex="-1"><a class="header-anchor" href="#结合使用"><span>结合使用</span></a></h3>
<p>虽然 React 推荐组合，但这并不意味着继承完全不能用。在某些情况下，继承仍然有其用途，例如当你需要复用多个组件的属性和方法时。你可以将组合和继承结合使用，以满足不同的需求。</p>
<h3 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h3>
<ul>
<li><strong>优先使用组合</strong>：在大多数情况下，组合是构建 React 应用程序的首选方式。</li>
<li><strong>合理使用继承</strong>：在确实需要复用多个组件的属性和方法时，可以考虑使用继承。</li>
<li><strong>保持组件独立</strong>：无论使用组合还是继承，都应该保持组件的独立性和可复用性。</li>
<li><strong>避免深层次的继承链</strong>：深层次的继承链会使代码难以理解和维护。</li>
</ul>
</div></template>


