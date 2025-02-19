<template><div><!-- @format -->
<h2 id="自定义负载均衡算法" tabindex="-1"><a class="header-anchor" href="#自定义负载均衡算法"><span>自定义负载均衡算法</span></a></h2>
<h3 id="irule-中的负载均衡策略" tabindex="-1"><a class="header-anchor" href="#irule-中的负载均衡策略"><span>IRule 中的负载均衡策略</span></a></h3>
<table>
<thead>
<tr>
<th>类名</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>RandomRule</td>
<td>随机</td>
</tr>
<tr>
<td>RoundRobinRule</td>
<td>轮询(默认)</td>
</tr>
<tr>
<td>RetryRule</td>
<td>重试</td>
</tr>
<tr>
<td>AvailabilityFilteringRule</td>
<td>过滤崩溃或者叫跳闸的服务，剩下的轮询</td>
</tr>
<tr>
<td>WeightedResponseTimeRule</td>
<td>响应时间权重</td>
</tr>
<tr>
<td>BestAvailableRule</td>
<td>最小并发</td>
</tr>
<tr>
<td>ZoneAvoidanceRule</td>
<td>区域权重</td>
</tr>
<tr>
<td>RandomWeightedRule</td>
<td>随机权重</td>
</tr>
<tr>
<td>RetryRule</td>
<td>重试规则</td>
</tr>
</tbody>
</table>
<h3 id="自定义策略" tabindex="-1"><a class="header-anchor" href="#自定义策略"><span>自定义策略</span></a></h3>
<h4 id="_1-在启动类中添加-ribbonclient-注解-并指定自定义策略" tabindex="-1"><a class="header-anchor" href="#_1-在启动类中添加-ribbonclient-注解-并指定自定义策略"><span>1. 在启动类中添加@RibbonClient 注解，并指定自定义策略</span></a></h4>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>consumer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>myrule<span class="token punctuation">.</span></span><span class="token class-name">MyRestTemplateClientRule</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>ribbon<span class="token punctuation">.</span></span><span class="token class-name">RibbonClient</span></span><span class="token punctuation">;</span>

<span class="token comment">// 确保扫描到所有相关包</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token comment">// 服务注册与发现</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token comment">// 配置自定义负载均衡策略，这样就会覆盖掉原来的策略</span>
<span class="token annotation punctuation">@RibbonClient</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">"PROJECT-PROVIDER"</span><span class="token punctuation">,</span>configuration<span class="token operator">=</span><span class="token class-name">MyRestTemplateClientRule</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Consumer_80</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Consumer_80</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-在配置类中添加自定义策略" tabindex="-1"><a class="header-anchor" href="#_2-在配置类中添加自定义策略"><span>2. 在配置类中添加自定义策略</span></a></h4>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>myrule</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>loadbalancer<span class="token punctuation">.</span></span><span class="token class-name">IRule</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>


<span class="token comment">// 自定义服务器负载均衡策略</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRestTemplateClientRule</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">IRule</span> <span class="token function">myRandomRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 返回的是自定义的，可以返回其他的方法就按照其他的策略</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyRandomRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-实现-irule-接口-基于源码修改" tabindex="-1"><a class="header-anchor" href="#_3-实现-irule-接口-基于源码修改"><span>3. 实现 IRule 接口(基于源码修改)</span></a></h4>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>myrule</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>client<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">IClientConfig</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>loadbalancer<span class="token punctuation">.</span></span><span class="token class-name">AbstractLoadBalancerRule</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>loadbalancer<span class="token punctuation">.</span></span><span class="token class-name">ILoadBalancer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>loadbalancer<span class="token punctuation">.</span></span><span class="token class-name">Server</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ThreadLocalRandom</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRandomRule</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractLoadBalancerRule</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">Server</span> <span class="token function">choose</span><span class="token punctuation">(</span><span class="token class-name">ILoadBalancer</span> lb<span class="token punctuation">,</span> <span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lb <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Server</span> server <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>server <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">interrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 线程终端</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Server</span><span class="token punctuation">></span></span> upList <span class="token operator">=</span> lb<span class="token punctuation">.</span><span class="token function">getReachableServers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获得可用服务器列表</span>
      <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Server</span><span class="token punctuation">></span></span> allList <span class="token operator">=</span> lb<span class="token punctuation">.</span><span class="token function">getAllServers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获得所有服务器列表</span>

      <span class="token keyword">int</span> serverCount <span class="token operator">=</span> allList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>serverCount <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token function">chooseRandomInt</span><span class="token punctuation">(</span>serverCount<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 生成随机数</span>
      server <span class="token operator">=</span> upList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从活着的服务中获取服务器</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>server <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>server<span class="token punctuation">.</span><span class="token function">isAlive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// Shouldn't actually happen.. but must be transient or a bug.</span>
      server <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> server<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  <span class="token keyword">protected</span> <span class="token keyword">int</span> <span class="token function">chooseRandomInt</span><span class="token punctuation">(</span><span class="token keyword">int</span> serverCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">ThreadLocalRandom</span><span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span>serverCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">Server</span> <span class="token function">choose</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">choose</span><span class="token punctuation">(</span><span class="token function">getLoadBalancer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initWithNiwsConfig</span><span class="token punctuation">(</span><span class="token class-name">IClientConfig</span> clientConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO Auto-generated method stub</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


