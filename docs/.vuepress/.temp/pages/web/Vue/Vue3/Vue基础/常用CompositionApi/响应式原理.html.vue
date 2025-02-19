<template><div><h2 id="vue2-x-的响应式" tabindex="-1"><a class="header-anchor" href="#vue2-x-的响应式"><span>vue2.x 的响应式</span></a></h2>
<h3 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理"><span>实现原理:</span></a></h3>
<ul>
<li>
<p>对象类型: 通过 <code v-pre>Object.defineProperty()</code> 对属性的读取、修改进行拦截（数据劫持）。</p>
</li>
<li>
<p>数组类型: 通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">"count"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3-0-的响应式" tabindex="-1"><a class="header-anchor" href="#vue3-0-的响应式"><span>Vue3.0 的响应式</span></a></h2>
<h3 id="实现原理-1" tabindex="-1"><a class="header-anchor" href="#实现原理-1"><span>实现原理:</span></a></h3>
<ul>
<li>
<p>通过 <strong>Proxy(代理)</strong>: 拦截对象中任意属性的变化，包括属性值的读写、属性的添加、属性的删除等。</p>
</li>
<li>
<p>通过 <strong>Reflect(反射)</strong>: 对被代理对象的属性进行操作。</p>
</li>
</ul>
<h2 id="defineproperty" tabindex="-1"><a class="header-anchor" href="#defineproperty"><span>defineProperty</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 有人读取name时调用</span>
    <span class="token keyword">return</span> person<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 有人修改name时调用</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"有人修改了name属性,我发现了,我要去更新界面!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    person<span class="token punctuation">.</span>name <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 有人读取age时调用</span>
    <span class="token keyword">return</span> person<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 有人修改age时调用</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"有人修改了age属性，我发现了，我要去更新界面!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    person<span class="token punctuation">.</span>age <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue2-真实实现" tabindex="-1"><a class="header-anchor" href="#vue2-真实实现"><span>Vue2 真实实现</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"App"</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">person</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"学习"</span><span class="token punctuation">,</span> <span class="token string">"吃饭"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(this.person.sex)</span>
      <span class="token comment">// this.person.sex = '女'</span>
      <span class="token comment">// console.log(this.person.sex)</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>person<span class="token punctuation">,</span> <span class="token string">"sex"</span><span class="token punctuation">,</span> <span class="token string">"女"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// Vue.set(this.person, 'sex', '女')</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deleteName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(this.person.name)</span>
      <span class="token comment">// delete this.person.name</span>
      <span class="token comment">// console.log(this.person.name)</span>

      <span class="token comment">// this.$delete(this.person, 'name')</span>
      Vue<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>person<span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"女"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">updateHobby</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// this.person.hobby[0] = '逛街'</span>
      <span class="token comment">// this.$set(this.person.hobby, 0, '逛街')</span>
      <span class="token comment">// this.person.hobby.splice(0, 1, '逛街')</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy"><span>Proxy</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 有人读取p的某个属性时调用</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">有人读取了p身上的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">属性</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 有人修改p的某个属性、或给p追加某个属性时调用</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">有人修改了p身上的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">属性，我要去更新界面了!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    target<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 有人删除p的某个属性时调用</span>
  <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> propName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">有人删除了p身上的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">属性，我要去更新界面了!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">delete</span> target<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reflect-defineproperty" tabindex="-1"><a class="header-anchor" href="#reflect-defineproperty"><span>Reflect.defineProperty</span></a></h2>
<blockquote>
<p>目前正在将 Object 对象的属性移植到 reflect, 它能返回 Boolean 值, 易于捕获错误</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x1 <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x2 <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>x2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"某某某操作成功了!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"某某某操作失败了!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3-实现" tabindex="-1"><a class="header-anchor" href="#vue3-实现"><span>Vue3 实现</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 有人读取p的某个属性时调用</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">有人读取了p身上的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">属性</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 有人修改p的某个属性、或给p追加某个属性时调用</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">有人修改了p身上的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">属性，我要去更新界面了!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 有人删除p的某个属性时调用</span>
  <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> propName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">有人删除了p身上的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">属性，我要去更新界面了!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


