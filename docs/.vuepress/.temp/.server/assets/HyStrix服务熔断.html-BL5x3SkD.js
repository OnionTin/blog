import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/服务熔断-D5p_0K5z.jpg";
const _imports_1 = "/blog/assets/服务Down机-UWo4FU8W.jpg";
const _imports_2 = "/blog/assets/显示ip-BbO5yRVu.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="hystrix-服务熔断" tabindex="-1"><a class="header-anchor" href="#hystrix-服务熔断"><span>HyStrix 服务熔断</span></a></h2><blockquote><p>在父项目中新建模块 project-hystrix-provider-8004，将 project-provider-8001 赋值一份进行修改</p></blockquote><h3 id="_1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_1-引入依赖"><span>1. 引入依赖</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--hystrix--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-hystrix<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.4.6.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-配置文件"><span>2. 配置文件</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8004</span>
<span class="token comment"># mybatis配置</span>
<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token comment"># 配置别名：实体类包名路径(api模块)</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.ths.api.pojo
  <span class="token comment"># 配置mapper接口的位置(当前模块)</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis/mapper/<span class="token important">*.xml</span>
  <span class="token comment"># 配置全局配置文件(当前模块)</span>
  <span class="token key atrule">config-location</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis/mybatis<span class="token punctuation">-</span>config.xml
<span class="token comment"># spring配置</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token comment"># 因为配置负载均衡，所以多个服务的名字要一致</span>
    <span class="token comment"># name: project-provider-8001</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/db01<span class="token punctuation">?</span>
      useUnicode=true<span class="token important">&amp;characterEncoding=utf-8&amp;serverTimezone=UTC</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token comment"># 配置连接池</span>
    <span class="token comment"># dbcp2:</span>
<span class="token comment"># Eureka配置</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">serviceUrl</span><span class="token punctuation">:</span>
      <span class="token comment"># 将本服务注册到哪个注册中心(单机)</span>
      <span class="token comment"># defaultZone: http://localhost:7001/eureka/</span>
      <span class="token comment"># 集群</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7001.com<span class="token punctuation">:</span>7001/eureka/<span class="token punctuation">,</span>
      http<span class="token punctuation">:</span>//eureka7002.com<span class="token punctuation">:</span>7002/eureka/<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//eureka7003.com<span class="token punctuation">:</span>7003/eureka/
  <span class="token comment"># 修改服务在注册中心的名字</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>hystrix<span class="token punctuation">-</span>8004<span class="token punctuation">-</span>id
    <span class="token comment"># 显示服务的ip地址</span>
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># 配置监控信息(访问地址: http://localhost:8001/actuator/info)</span>
<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">app.name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>hystrix<span class="token punctuation">-</span><span class="token number">8004</span>
  <span class="token key atrule">app.description</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>hystrix<span class="token punctuation">-</span><span class="token number">8004</span>
  <span class="token key atrule">company.name</span><span class="token punctuation">:</span> ths
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-启动类-启动熔断" tabindex="-1"><a class="header-anchor" href="#_3-启动类-启动熔断"><span>3. 启动类(启动熔断)</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">hystrix</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>circuitbreaker<span class="token punctuation">.</span></span><span class="token class-name">EnableCircuitBreaker</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>discovery<span class="token punctuation">.</span></span><span class="token class-name">EnableDiscoveryClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token comment">// 启用Eureka客户端,自动将本服务注册到Eureka中</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token comment">// 服务注册与发现(让其他的微服务发现自己,并得到自己的服务信息)</span>
<span class="token annotation punctuation">@EnableDiscoveryClient</span>
<span class="token comment">// 添加Hystrix对熔断的支持</span>
<span class="token annotation punctuation">@EnableCircuitBreaker</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hystrix_8001</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Hystrix_8001</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-controller" tabindex="-1"><a class="header-anchor" href="#_4-controller"><span>4. Controller</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">hystrix<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>javanica<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">HystrixCommand</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>javanica<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">HystrixProperty</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>api<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">Dept</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">hystrix<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">DeptService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PathVariable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token comment">// 提供Restful服务</span>
<span class="token annotation punctuation">@RestController</span> <span class="token comment">// 只能用@RestController，不能用@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeptController</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">DeptService</span> service<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">DeptController</span><span class="token punctuation">(</span><span class="token class-name">DeptService</span> service<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>service <span class="token operator">=</span> service<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 根据id查询部门，可能存在的问题是id不传，返回null类型，需要一个备选方案</span>
  <span class="token comment">// 现在熔断机制放到了当前类中，如果想要提取的话可以采用自定义注解加拦截器的方式</span>
  <span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>
    fallbackMethod <span class="token operator">=</span> <span class="token string">&quot;queryByHystrix&quot;</span><span class="token punctuation">,</span>
    commandProperties <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>
        name <span class="token operator">=</span> <span class="token string">&quot;execution.isolation.thread.timeoutInMilliseconds&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;500&quot;</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 超时时间</span>
      <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>
        name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.requestVolumeThreshold&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 请求阈值</span>
      <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>
        name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.errorThresholdPercentage&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;50&quot;</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 错误百分比</span>
      <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>
        name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.sleepWindowInMilliseconds&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;500&quot;</span>
      <span class="token punctuation">)</span> <span class="token comment">// 断路器关闭等待时间</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/dept/get/{id}&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">Dept</span> <span class="token function">queryById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token class-name">Dept</span> dept <span class="token operator">=</span> service<span class="token punctuation">.</span><span class="token function">queryById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;查询部门：&quot;</span> <span class="token operator">+</span> dept<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dept <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dept<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;用户不存在，找不到id:&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">&quot;的用户!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> dept<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;查询部门时发生异常: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">throw</span> e<span class="token punctuation">;</span> <span class="token comment">// 让 Hystrix 捕获异常</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 备选方案</span>
  <span class="token keyword">public</span> <span class="token class-name">Dept</span> <span class="token function">queryByHystrix</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 现在备选方案是返回一个Dept对象</span>
    <span class="token comment">// 也可以采用Ribbon实现负载均衡，调用集群中的其他服务</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Dept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">setDeptno</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">setDname</span><span class="token punctuation">(</span><span class="token string">&quot;该ID：&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">&quot;没有对应的信息,null--@HystrixCommand&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">setDb_source</span><span class="token punctuation">(</span><span class="token string">&quot;没有这个数据库&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-注意其他需要修改的地方-比如映射文件的路径" tabindex="-1"><a class="header-anchor" href="#_5-注意其他需要修改的地方-比如映射文件的路径"><span>5. 注意其他需要修改的地方，比如`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`映射文件的路径`);
      } else {
        return [
          createTextVNode("映射文件的路径")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></a></h3><h3 id="_6-展示" tabindex="-1"><a class="header-anchor" href="#_6-展示"><span>6. 展示</span></a></h3><p>服务熔断：当一个请求失败时，为了保证链路畅通，请求直接走备选方案，继续往下执行。 <img${ssrRenderAttr("src", _imports_0)} alt="服务熔断"> 服务 Down 机什么样？ <img${ssrRenderAttr("src", _imports_1)} alt="服务Down机什么样？"> 显示服务的 ip 地址 <img${ssrRenderAttr("src", _imports_2)} alt="显示服务的ip地址"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/HyStrix服务熔断.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HyStrix_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "HyStrix服务熔断.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/HyStrix%E6%9C%8D%E5%8A%A1%E7%86%94%E6%96%AD.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"HyStrix 服务熔断","slug":"hystrix-服务熔断","link":"#hystrix-服务熔断","children":[{"level":3,"title":"1. 引入依赖","slug":"_1-引入依赖","link":"#_1-引入依赖","children":[]},{"level":3,"title":"2. 配置文件","slug":"_2-配置文件","link":"#_2-配置文件","children":[]},{"level":3,"title":"3. 启动类(启动熔断)","slug":"_3-启动类-启动熔断","link":"#_3-启动类-启动熔断","children":[]},{"level":3,"title":"4. Controller","slug":"_4-controller","link":"#_4-controller","children":[]},{"level":3,"title":"5. 注意其他需要修改的地方，比如映射文件的路径","slug":"_5-注意其他需要修改的地方-比如映射文件的路径","link":"#_5-注意其他需要修改的地方-比如映射文件的路径","children":[]},{"level":3,"title":"6. 展示","slug":"_6-展示","link":"#_6-展示","children":[]}]}],"git":{"updatedTime":1726824508000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/SpringCloud/HyStrix服务熔断.md","excerpt":"<h2>HyStrix 服务熔断</h2>\\n<blockquote>\\n<p>在父项目中新建模块 project-hystrix-provider-8004，将 project-provider-8001 赋值一份进行修改</p>\\n</blockquote>\\n<h3>1. 引入依赖</h3>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token comment\\">&lt;!--hystrix--&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework.cloud<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-cloud-starter-hystrix<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>1.4.6.RELEASE<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>"}');
export {
  HyStrix_____html as comp,
  data
};
