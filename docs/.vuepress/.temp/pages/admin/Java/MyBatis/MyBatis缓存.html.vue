<template><div><h2 id="mybatis-缓存" tabindex="-1"><a class="header-anchor" href="#mybatis-缓存"><span>MyBatis 缓存</span></a></h2>
<blockquote>
<p>MyBatis 缓存 和 MyBatis 懒加载，都是优化的，缓存可以减少读取数据库的次数，懒加载可以减少内存开销。</p>
</blockquote>
<h3 id="一级缓存" tabindex="-1"><a class="header-anchor" href="#一级缓存"><span>一级缓存</span></a></h3>
<blockquote>
<p>默认开启，一级缓存是 SqlSession 级别的缓存，作用域是同一个 SqlSession。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> <span class="token class-name">Students1</span> <span class="token operator">=</span> <span class="token class-name">StudentDao</span><span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> <span class="token class-name">Students2</span> <span class="token operator">=</span> <span class="token class-name">StudentDao</span><span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sqlSession<span class="token punctuation">.</span><span class="token function">clearCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 清除一级缓存</span>
    <span class="token comment">/*
     * Students1 == Students2，只执行了一次select，因为是同一个sqlSession
     * 查询 Students3，又执行了一次select，因为一级缓存是sqlSession级别
    */</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Students1</span> <span class="token operator">==</span> <span class="token class-name">Students2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Students2</span> <span class="token operator">==</span> <span class="token class-name">Students3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Students1</span> <span class="token operator">==</span> <span class="token class-name">Students3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二级缓存" tabindex="-1"><a class="header-anchor" href="#二级缓存"><span>二级缓存</span></a></h3>
<blockquote>
<p>默认不开启，二级缓存是 mapper 级别的缓存，作用域是同一个 namespace。</p>
</blockquote>
<p>如何开启二级缓存的多地方配置？</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--SqlMapConfig.xml--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--开启延迟加载--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazyLoadingEnabled<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aggressiveLazyLoading<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token comment">&lt;!--开启缓存--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cacheEnabled<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--XXXMapper.xml--></span>
<span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
    <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span>
    <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.api.MyBatis.dao.TeacherMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--开启二级缓存--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cache</span><span class="token punctuation">/></span></span>
  <span class="token comment">&lt;!--使用二级缓存--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findBySid<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teacher<span class="token punctuation">"</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>int<span class="token punctuation">"</span></span> <span class="token attr-name">useCache</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select *
    from teacher t,
         s_t st
    where t.id = st.tid
      and st.sid = #{sid}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// XXX实体类要实现序列化</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>xxx
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一级缓存和二级缓存流程" tabindex="-1"><a class="header-anchor" href="#一级缓存和二级缓存流程"><span>一级缓存和二级缓存流程</span></a></h3>
<ol>
<li>先去二级缓存中查找</li>
<li>二级缓存中没有，去一级缓存中查找</li>
<li>一级缓存中没有，再去数据库中查找</li>
<li>数据库中查找到数据，并将数据先存入一级缓存</li>
<li>调用 sqlSession.close() 方法，就会将数据存到二级缓存，并清空一级缓存
<img src="@source/admin/Java/MyBatis/images/MyBatis缓存.jpg" alt="MyBatis缓存"></li>
</ol>
</div></template>


