import{_ as n,o as s,c as a,e as t}from"./app-CilA4iky.js";const e={},p=t(`<h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志"><span>日志</span></a></h2><p>需要导包，logback</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">MyBatis</span><span class="token punctuation">.</span>test<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoggerTest</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger<span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">UserTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不再使用 System.out.println</span>
    logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;debug test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;info test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;warn test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;error test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 结果：</span>
    <span class="token comment">// 11:28:21.150 [main] DEBUG com.api.MyBatis.test.UserTest - debug test</span>
    <span class="token comment">// 11:28:21.154 [main] INFO  com.api.MyBatis.test.UserTest - info test</span>
    <span class="token comment">// 11:28:21.154 [main] WARN  com.api.MyBatis.test.UserTest - warn test</span>
    <span class="token comment">// 11:28:21.154 [main] ERROR com.api.MyBatis.test.UserTest - error test</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token comment">&lt;!--配置--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--
    输出器配置
    name：输出器名称
    class：输出器实现类
    ConsoleAppender：控制台输出器
    FileAppender：文件输出器
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>STDOUT<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.ConsoleAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--设置输出文件地址和追加模式
    &lt;file&gt;file.log&lt;/file&gt;
    &lt;append&gt;true&lt;/append&gt;--&gt;</span>
    <span class="token comment">&lt;!--输出格式配置--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!--格式--&gt;</span>
      <span class="token comment">&lt;!--
          %d{HH:mm:ss.SSS}：时间
          %thread：线程名
          %-5level：日志级别；如果不指定，默认使用上级输出器级别
          %logger{36}：日志输出器名称
          %msg：日志信息
          %n：换行
      --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--
    logger：局部设置；所以当然就可以有多个logger
    name：指定监测的文件所在包
    level：日志输出级别(DEBUG, INFO, WARN, ERROR)
    additivity：是否允许输出器向上级输出器(全局)输出日志
    ref：指定具体的输出器
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.api<span class="token punctuation">&quot;</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>debug<span class="token punctuation">&quot;</span></span> <span class="token attr-name">additivity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>STDOUT<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>logger</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!--
    全局设置
    太过详细了，每一步都会输出；
    可以和局部的logger结合使用
  --&gt;</span>
  <span class="token comment">&lt;!--&lt;root level=&quot;info&quot;&gt;
      &lt;appender-ref ref=&quot;STDOUT&quot; /&gt;
  &lt;/root&gt;--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","日志.html.vue"]]),r=JSON.parse('{"path":"/admin/Java/MyBatis/%E6%97%A5%E5%BF%97.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"日志","slug":"日志","link":"#日志","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MyBatis/日志.md","excerpt":"<h2>日志</h2>\\n<p>需要导包，logback</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">package</span> <span class=\\"token namespace\\">com<span class=\\"token punctuation\\">.</span>api<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">MyBatis</span><span class=\\"token punctuation\\">.</span>test<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>slf4j<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">Logger</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>slf4j<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">LoggerFactory</span></span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">LoggerTest</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">Logger</span> logger<span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">LoggerFactory</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getLogger</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">UserTest</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 不再使用 System.out.println</span>\\n    logger<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">debug</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"debug test\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    logger<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">info</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"info test\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    logger<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">warn</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"warn test\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    logger<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"error test\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// 结果：</span>\\n    <span class=\\"token comment\\">// 11:28:21.150 [main] DEBUG com.api.MyBatis.test.UserTest - debug test</span>\\n    <span class=\\"token comment\\">// 11:28:21.154 [main] INFO  com.api.MyBatis.test.UserTest - info test</span>\\n    <span class=\\"token comment\\">// 11:28:21.154 [main] WARN  com.api.MyBatis.test.UserTest - warn test</span>\\n    <span class=\\"token comment\\">// 11:28:21.154 [main] ERROR com.api.MyBatis.test.UserTest - error test</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre></div>"}');export{k as comp,r as data};
