import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="druid" tabindex="-1"><a class="header-anchor" href="#druid"><span>Druid</span></a></h2><blockquote><p>Druid 是阿里巴巴开源的一款数据库连接池，它提供了丰富的功能和性能优化，包括 SQL 监控、连接池管理、SQL 防火墙、慢查询分析等。</p></blockquote><h3 id="druid-使用步骤" tabindex="-1"><a class="header-anchor" href="#druid-使用步骤"><span>Druid 使用步骤</span></a></h3><ol><li>添加 Druid 依赖</li><li>配置 Druid 数据源</li><li>配置 Druid 监控</li></ol><h3 id="druid-依赖" tabindex="-1"><a class="header-anchor" href="#druid-依赖"><span>Druid 依赖</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--druid--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--log4j: Druid需要log4j依赖进行日志--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="druid-数据源" tabindex="-1"><a class="header-anchor" href="#druid-数据源"><span>Druid 数据源</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">spring.datasource</span><span class="token punctuation">:</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> root
  <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
  <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/sister<span class="token punctuation">?</span>useUnicode=true
    <span class="token important">&amp;characterEncoding=utf-8&amp;serverTimezone=UTC</span>
  <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
  <span class="token comment"># 数据源改成Druid，没有就是默认的Hikari</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
  <span class="token comment"># SpringBoot默认不注入的属性，需要自己配置的</span>
  <span class="token comment"># Druid</span>
  <span class="token comment"># 初始化大小</span>
  <span class="token key atrule">initial-size</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token comment"># 最小空闲连接数</span>
  <span class="token key atrule">min-Idle</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token comment"># 最大连接数</span>
  <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">20</span>
  <span class="token comment"># 配置获取连接等待超时的时间</span>
  <span class="token key atrule">max-wait</span><span class="token punctuation">:</span> <span class="token number">6000</span>
  <span class="token comment"># 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒</span>
  <span class="token key atrule">time-between-eviction-runs-millis</span><span class="token punctuation">:</span> <span class="token number">60000</span>
  <span class="token comment"># 配置一个连接在池中最小生存的时间，单位是毫秒</span>
  <span class="token key atrule">min-evictable-idle-time-millis</span><span class="token punctuation">:</span> <span class="token number">300000</span>
  <span class="token comment"># 用来检测连接是否有效的sql，要求是一个查询语句</span>
  <span class="token key atrule">validation-query</span><span class="token punctuation">:</span> SELECT 1 FROM DUAL
  <span class="token comment"># 申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能</span>
  <span class="token key atrule">test-while-idle</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># 申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能</span>
  <span class="token key atrule">test-on-borrow</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># 归还连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能</span>
  <span class="token key atrule">test-on-return</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># 打开PSCache，并且指定每个连接上PSCache的大小</span>
  <span class="token key atrule">pool-prepared-statements</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># 配置监控拦截统计的filters(stat:监控统计, log4j: 日志记录, wall: 预防sql注入)</span>
  <span class="token comment"># 如果报错如下: java.lang.ClassNotFoundException: org.apache.log4j.Priority</span>
  <span class="token comment"># 择需要导入log4j的依赖</span>
  <span class="token comment"># 通过connectProperties属性来打开mergeSql功能；慢SQL记录</span>
  <span class="token key atrule">connection-properties</span><span class="token punctuation">:</span> druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500
  <span class="token comment"># 配置监控统计拦截的filters，去掉后监控界面sql无法统计，&#39;wall&#39;用于防火墙</span>
  <span class="token key atrule">filters</span><span class="token punctuation">:</span> stat<span class="token punctuation">,</span>wall<span class="token punctuation">,</span>log4j
  <span class="token comment"># 合并多个DruidDataSource的监控数据</span>
  <span class="token key atrule">use-global-datasource-stat</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># 配置监控统计拦截的filters，去掉后监控界面sql无法统计，&#39;wall&#39;用于防火墙</span>
  <span class="token key atrule">max-pool-prepared-statement-per-connection-size</span><span class="token punctuation">:</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="druid-监控" tabindex="-1"><a class="header-anchor" href="#druid-监控"><span>Druid 监控</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>filter<span class="token punctuation">.</span>stat<span class="token punctuation">.</span></span><span class="token class-name">StatFilter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>support<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">StatViewServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>support<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">WebStatFilter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">FilterRegistrationBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletRegistrationBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token comment">// 自定义Druid配置类</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DruidConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// 绑定配置文件中的属性</span>
  <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">)</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">druidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 后台监控功能(因为SpringBoot内置Servlet，所以没有相关配置</span>
  <span class="token comment">// 这个类就相当于web.xml，访问: 项目启动后，</span>
  <span class="token comment">// 在浏览器中将访问的url改成druid，http://localhost:8080/druid/sql.html)</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span> <span class="token function">statViewServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ServletRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">StatViewServlet</span><span class="token punctuation">&gt;</span></span> bean
    <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StatViewServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;/druid/*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 需要有人登录才能访问</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> initParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;loginUsername&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// key 是固定的</span>
    initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;loginPassword&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// key 是固定的</span>
    <span class="token doc-comment comment">/**
     * allow: 允许谁可以访问，如果配置了，需要将ip白名单配置，否则不允许所有ip访问
     *   “”：默认就是允许所有访问
     *   localhost: 表示本机访问
     *   192.168.1.1: 表示指定ip访问
     * deny: 拒绝谁访问
     */</span>
    initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;allow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;deny&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.3.33&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bean<span class="token punctuation">.</span><span class="token function">setInitParameters</span><span class="token punctuation">(</span>initParams<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化参数</span>
    <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// filter过滤</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">FilterRegistrationBean</span> <span class="token function">webStatFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">FilterRegistrationBean</span> bean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterRegistrationBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bean<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WebStatFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 配置过滤哪些</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> initParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 不记录哪些页面</span>
    initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;exclusions&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.js,*.css,/druid/*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bean<span class="token punctuation">.</span><span class="token function">setInitParameters</span><span class="token punctuation">(</span>initParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置log4j</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">StatFilter</span> <span class="token function">statFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">StatFilter</span> statFilter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StatFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    statFilter<span class="token punctuation">.</span><span class="token function">setSlowSqlMillis</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 慢sql，单位ms</span>
    statFilter<span class="token punctuation">.</span><span class="token function">setLogSlowSql</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 是否记录慢sql</span>
    statFilter<span class="token punctuation">.</span><span class="token function">setMergeSql</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 合并sql</span>
    <span class="token keyword">return</span> statFilter<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># 加上这个配置文件后会把日志输出到控制台上</span>
<span class="token comment"># log4j.properties</span>
<span class="token key attr-name">log4j.rootLogger</span><span class="token punctuation">=</span><span class="token value attr-value">INFO, console</span>

<span class="token comment"># Console Appender</span>
<span class="token key attr-name">log4j.appender.console</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.log4j.ConsoleAppender</span>
<span class="token key attr-name">log4j.appender.console.Target</span><span class="token punctuation">=</span><span class="token value attr-value">System.out</span>
<span class="token key attr-name">log4j.appender.console.layout</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.log4j.PatternLayout</span>
<span class="token key attr-name">log4j.appender.console.layout.ConversionPattern</span><span class="token punctuation">=</span><span class="token value attr-value">%d{ABSOLUTE} %5p %c{1}:%L - %m%n</span>

<span class="token comment"># Druid Logger</span>
<span class="token key attr-name">log4j.logger.druid</span><span class="token punctuation">=</span><span class="token value attr-value">DEBUG, console</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringBoot/数据库集成/Druid.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Druid_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Druid.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringBoot/%E6%95%B0%E6%8D%AE%E5%BA%93%E9%9B%86%E6%88%90/Druid.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Druid","slug":"druid","link":"#druid","children":[{"level":3,"title":"Druid 使用步骤","slug":"druid-使用步骤","link":"#druid-使用步骤","children":[]},{"level":3,"title":"Druid 依赖","slug":"druid-依赖","link":"#druid-依赖","children":[]},{"level":3,"title":"Druid 数据源","slug":"druid-数据源","link":"#druid-数据源","children":[]},{"level":3,"title":"Druid 监控","slug":"druid-监控","link":"#druid-监控","children":[]}]}],"git":{"updatedTime":1725614718000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1},{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringBoot/数据库集成/Druid.md","excerpt":"<!-- @format -->\\n<h2>Druid</h2>\\n<blockquote>\\n<p>Druid 是阿里巴巴开源的一款数据库连接池，它提供了丰富的功能和性能优化，包括 SQL 监控、连接池管理、SQL 防火墙、慢查询分析等。</p>\\n</blockquote>\\n<h3>Druid 使用步骤</h3>\\n<ol>\\n<li>添加 Druid 依赖</li>\\n<li>配置 Druid 数据源</li>\\n<li>配置 Druid 监控</li>\\n</ol>\\n<h3>Druid 依赖</h3>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token comment\\">&lt;!--druid--&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>com.alibaba<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>druid<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>1.2.6<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token comment\\">&lt;!--log4j: Druid需要log4j依赖进行日志--&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>log4j<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>log4j<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>1.2.17<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>"}');
export {
  Druid_html as comp,
  data
};
