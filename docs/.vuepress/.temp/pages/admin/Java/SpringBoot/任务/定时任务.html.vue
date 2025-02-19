<template><div><!-- @format -->
<h2 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务"><span>定时任务</span></a></h2>
<h3 id="_1-使用注解" tabindex="-1"><a class="header-anchor" href="#_1-使用注解"><span>1. 使用注解</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 在启动类上添加@EnableScheduling注解</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableScheduling</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringbootApplication</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringbootApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 在需要定时执行的方法上添加@Scheduled注解</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>scheduling<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Scheduled</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScheduledService</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在一个特定的时间执行某任务</span>
  <span class="token comment">// cron表达式： 秒 分 时 日 月 周</span>
  <span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>cron <span class="token operator">=</span> <span class="token string">"0 42 22 * * ?"</span><span class="token punctuation">)</span> <span class="token comment">// cron表达式自行百度</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">timing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"在cron设定的时间执行这个任务"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


