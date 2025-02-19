<template><div><h2 id="反射案例-2" tabindex="-1"><a class="header-anchor" href="#反射案例-2"><span>反射案例 2</span></a></h2>
<blockquote>
<p>模拟框架，来实现可以执行我们指定的任意一个类中的任意一个方法(简单点，目前只要空参即可)</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 思路</span>
<span class="token comment">// 1. 获取字节码文件对象</span>
<span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"???"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ???：className</span>
<span class="token comment">// 2. 创建实例（两种方式）</span>
<span class="token comment">// 创建实例1</span>
<span class="token class-name">Object</span> obj1 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取构造器对象</span>
<span class="token class-name">Constructor</span> cons <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建实例2</span>
<span class="token class-name">Object</span> obj2 <span class="token operator">=</span> cons<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3. 获取方法对象</span>
<span class="token class-name">Method</span> m <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">"???"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ???：methodName</span>
<span class="token comment">// 4. 调用方法对象</span>
m<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如何解决 className 和 methodName？而且这两个都是活的，不能是写死的？</p>
<p>方法一：利用配置文件</p>
<p>方法二：使用注解</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 方法一</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Reflex</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Constructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo08</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 加载配置文件</span>
        <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>
          <span class="token class-name">Demo08</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"reflex.properties"</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> className <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"className"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> methodName <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"methodName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取字节码文件对象</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建实例（两种方式）</span>
        <span class="token comment">// 创建实例1</span>
        <span class="token class-name">Object</span> obj1 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取构造器对象</span>
        <span class="token class-name">Constructor</span> cons <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建实例2</span>
        <span class="token class-name">Object</span> obj2 <span class="token operator">=</span> cons<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取方法对象</span>
        <span class="token class-name">Method</span> m <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span>methodName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用方法对象</span>
        m<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：执行了两次无参构造</span>
        <span class="token comment">// 无参构造执行</span>
        <span class="token comment">// 无参构造执行</span>
        <span class="token comment">// Bird is flying</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bird</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"无参构造执行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Bird is flying"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre v-pre class="language-properties"><code><span class="token comment"># reflex.properties</span>
<span class="token key attr-name">className</span><span class="token punctuation">=</span><span class="token value attr-value">com.api.Reflex.Bird</span>
<span class="token key attr-name">methodName</span><span class="token punctuation">=</span><span class="token value attr-value">fly</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


