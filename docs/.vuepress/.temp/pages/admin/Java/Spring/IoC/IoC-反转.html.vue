<template><div><h2 id="ioc-反转" tabindex="-1"><a class="header-anchor" href="#ioc-反转"><span>IoC-反转</span></a></h2>
<h3 id="反转" tabindex="-1"><a class="header-anchor" href="#反转"><span>反转</span></a></h3>
<blockquote>
<p>通过下面的案例，理解 IoC 的反转，即当我们的程序需求在不断变更的时候，我们不能反复修改 <code v-pre>private UserDao userDao = new UserDaoImpl(); </code>这段代码的赋值情况，而是应该在调用时通过外部传入(注入)，而不去改变<code v-pre>UserServiceImpl</code>原来的代码。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// UserDao</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// UserDaoImpl</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">Impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">UserDao</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDaoImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"默认获取用户数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// UserDaoMySqlImpl</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">Impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">UserDao</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDaoMySqlImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"获取MySql用户数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// UserDaoOracleImpl</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">Impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">UserDao</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDaoOracleImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"获取Oracle用户数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// UserService</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// UserServiceImpl</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">Impl</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">UserDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">UserService</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
  <span class="token comment">// private UserDao userDao = new UserDaoImpl(); 这就写死了</span>
  <span class="token keyword">private</span> <span class="token class-name">UserDao</span> userDao<span class="token punctuation">;</span>
  <span class="token comment">// set 注入：值不是写死的，而是注入的，也就是传进来的</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUserDao</span><span class="token punctuation">(</span><span class="token class-name">UserDao</span> userDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userDao <span class="token operator">=</span> userDao<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    userDao<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// MyTest</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">Impl</span><span class="token punctuation">.</span><span class="token class-name">UserDaoImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">Impl</span><span class="token punctuation">.</span><span class="token class-name">UserDaoMySqlImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">Impl</span><span class="token punctuation">.</span><span class="token class-name">UserDaoOracleImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">Impl</span><span class="token punctuation">.</span><span class="token class-name">UserServiceImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">UserService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserService</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 只需要修改注入的对象(setUserDao的参数)即可达到需求的变更</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">UserServiceImpl</span><span class="token punctuation">)</span> userService<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setUserDao</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 输出：默认获取用户数据</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">mYSqlTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserService</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 只需要修改注入的对象(setUserDao的参数)即可达到需求的变更</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">UserServiceImpl</span><span class="token punctuation">)</span> userService<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setUserDao</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserDaoMySqlImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 输出：获取MySql用户数据</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">oracleTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserService</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 只需要修改注入的对象(setUserDao的参数)即可达到需求的变更</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">UserServiceImpl</span><span class="token punctuation">)</span> userService<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setUserDao</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserDaoOracleImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 输出：获取Oracle用户数据</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


