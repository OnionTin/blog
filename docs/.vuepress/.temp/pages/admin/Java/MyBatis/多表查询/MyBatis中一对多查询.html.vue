<template><div><h2 id="mybatis-中一对一查询-collection" tabindex="-1"><a class="header-anchor" href="#mybatis-中一对一查询-collection"><span>MyBatis 中一对一查询(<font color=red>collection</font>)</span></a></h2>
<blockquote>
<p>一对多查询：即一个用户有很多个电脑，如果查询 user 的时候，也要查出其 computer，从结果上看是查询一个及其多个，这种在 MyBatis 中叫一对多或者多对一。</p>
</blockquote>
<h3 id="查询所有的用户及其名下的所有电脑" tabindex="-1"><a class="header-anchor" href="#查询所有的用户及其名下的所有电脑"><span>查询所有的用户及其名下的所有电脑</span></a></h3>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--User.xml--></span>
<span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
    <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span>
    <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--方式一--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userAndComputerMap<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!--
    collection：一对多关系，association：一对一
    property：要查询数值的字段是computers
    column：要根据id去查
    ofType：集合中存放的类型，与association中的javaType有一点区别
    ofType：ofType是集合中存放的类型，javaType是集合的类型
    --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collection</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>computers<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">ofType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>computer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c_id<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c_name<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uid<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uid<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>collection</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findUserAndComputer<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userAndComputerMap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select
      u.*, c.id c_id, c.name c_name, c.uid
      from user u, computer c
      where u.id = c.uid
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--方式二--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userAndComputerMap<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collection</span>
      <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>computers<span class="token punctuation">"</span></span>
      <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>
      <span class="token attr-name">ofType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>computer<span class="token punctuation">"</span></span>
      <span class="token attr-name">select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.api.MyBatis.dao.ComputerMapper.findByUid<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c_id<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c_name<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uid<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uid<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>collection</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findUserAndComputer<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userAndComputerMap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from user
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--computer.xml--></span>
<span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
    <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span>
    <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.api.MyBatis.dao.ComputerMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findByUid<span class="token punctuation">"</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>int<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>computer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from computer where uid = #{uid}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// User.java实体类</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">MyBatis</span><span class="token punctuation">.</span>domain<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Computer</span><span class="token punctuation">></span></span> computers<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> id<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Computer</span><span class="token punctuation">></span></span> <span class="token function">getComputers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> computers<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setComputers</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Computer</span><span class="token punctuation">></span></span> computers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>computers <span class="token operator">=</span> computers<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"User{"</span> <span class="token operator">+</span>
        <span class="token string">"id="</span> <span class="token operator">+</span> id <span class="token operator">+</span>
        <span class="token string">", name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
        <span class="token string">", age="</span> <span class="token operator">+</span> age <span class="token operator">+</span>
        <span class="token string">", computers="</span> <span class="token operator">+</span> computers <span class="token operator">+</span>
        <span class="token char">'}'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// Computer.java实体类</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">MyBatis</span><span class="token punctuation">.</span>domain<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> uid<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> id<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getUid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> uid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUid</span><span class="token punctuation">(</span><span class="token keyword">int</span> uid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>uid <span class="token operator">=</span> uid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"Computer{"</span> <span class="token operator">+</span>
        <span class="token string">"id="</span> <span class="token operator">+</span> id <span class="token operator">+</span>
        <span class="token string">", name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
        <span class="token string">", uid="</span> <span class="token operator">+</span> uid <span class="token operator">+</span>
        <span class="token char">'}'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// User接口</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">MyBatis</span><span class="token punctuation">.</span>dao<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">MyBatis</span><span class="token punctuation">.</span>domain<span class="token punctuation">.</span>User<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
  <span class="token comment">// 查询所有的用户及其名下的所有电脑</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">findUserAndComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// Computer接口</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">MyBatis</span><span class="token punctuation">.</span>dao<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">MyBatis</span><span class="token punctuation">.</span>domain<span class="token punctuation">.</span>Computer<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ComputerMapper</span> <span class="token punctuation">{</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Computer</span><span class="token punctuation">></span></span> <span class="token function">findByUid</span><span class="token punctuation">(</span><span class="token keyword">int</span> uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 测试类</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">MyBatis</span><span class="token punctuation">.</span>test<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">MyBatis</span><span class="token punctuation">.</span>dao<span class="token punctuation">.</span>UserMapper<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">MyBatis</span><span class="token punctuation">.</span>domain<span class="token punctuation">.</span>User<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Resources</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSession</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSessionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSessionFactoryBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">AfterEach</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">BeforeEach</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserTest</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">SqlSession</span> session<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userDao<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@BeforeEach</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 获取流对象，读取核心配置文件</span>
    <span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"SqlMapConfig.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2. 创建 SqlSession 工厂的构建者对象</span>
    <span class="token class-name">SqlSessionFactoryBuilder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3. 获取 SqlSession 工厂对象</span>
    <span class="token class-name">SqlSessionFactory</span> factory <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 4. 获取 SqlSession 对象</span>
    session <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 5. 获取 UserDao 代理类对象</span>
    userDao <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@AfterEach</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 7. 提交事务(增删改需要提交；查询时不要提交)</span>
    session<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 8. 释放资源</span>
    session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 查询所有的用户及其名下的电脑</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findUserAndComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> usersAll <span class="token operator">=</span> userDao<span class="token punctuation">.</span><span class="token function">findUserAndComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> usersAll<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 结果：</span>
      <span class="token comment">// User{</span>
      <span class="token comment">//  id=1,</span>
      <span class="token comment">//  name='tom',</span>
      <span class="token comment">//  age=18,</span>
      <span class="token comment">//  computers=[</span>
      <span class="token comment">//     Computer{id=1, name='联想', uid=1,},</span>
      <span class="token comment">//     Computer{id=2, name='华为', uid=1},</span>
      <span class="token comment">//     Computer{id=4, name='戴尔', uid=1}</span>
      <span class="token comment">//   ]</span>
      <span class="token comment">// }</span>
      <span class="token comment">// User{</span>
      <span class="token comment">//  id=2,</span>
      <span class="token comment">//  name='tony',</span>
      <span class="token comment">//  age=19,</span>
      <span class="token comment">//  computers=[</span>
      <span class="token comment">//     Computer{id=3, name='华硕', uid=2}</span>
      <span class="token comment">//   ]</span>
      <span class="token comment">// }</span>
      <span class="token comment">// User{id=3, name='rose', age=18, computers=[]}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


