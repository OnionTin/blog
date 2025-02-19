<template><div><!-- @format -->
<h2 id="springmvc-扩展" tabindex="-1"><a class="header-anchor" href="#springmvc-扩展"><span>SpringMvc 扩展</span></a></h2>
<blockquote>
<ol>
<li>首先编写一个@Configuration 注解的类，用于扫描自定义的注解</li>
<li>这个类要实现 WebMvcConfigurer 接口，并且不能标注@EnableWebMvc 注解，否则会覆盖掉默认的配置</li>
<li>编写自定义的类或者说组件，并通过@Bean 把他交给 SpringBoot 管理，SpringBoot 就会帮我们自动装配</li>
<li>这样我们就完成了针对 SpringMvc 的自定义的扩展</li>
</ol>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">View</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ViewResolver</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ResourceHandlerRegistry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ViewControllerRegistry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebMvcConfigurer</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Locale</span></span><span class="token punctuation">;</span>
<span class="token comment">// 自定义Mvc扩展</span>
<span class="token annotation punctuation">@Configuration</span> <span class="token comment">// 配置类，目的是让SpringBoot进行扫描 MyMvcConfig 这个类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyMvcConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
  <span class="token comment">// 自定义视图解析器：MyViewResolver</span>
  <span class="token annotation punctuation">@Bean</span> <span class="token comment">// @Bean组测组件，将 MyViewResolver交给SpringBoot托管，</span>
  <span class="token keyword">public</span> <span class="token class-name">ViewResolver</span> <span class="token class-name">MyViewResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// MyViewResolver：要实现视图解析，就要实现 ViewResolver 接口</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MyViewResolver</span> <span class="token keyword">implements</span> <span class="token class-name">ViewResolver</span><span class="token punctuation">{</span>
    <span class="token comment">// 同时要重写 resolveViewName 方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">View</span> <span class="token function">resolveViewName</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">Locale</span> locale<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 自定义视图跳转</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addViewControllers</span><span class="token punctuation">(</span><span class="token class-name">ViewControllerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 添加视图跳转</span>
    registry<span class="token punctuation">.</span><span class="token function">addViewController</span><span class="token punctuation">(</span><span class="token string">"/ths"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">"ths"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 添加静态资源映射</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 添加静态资源映射</span>
registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"/static/**"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"classpath:/static/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


