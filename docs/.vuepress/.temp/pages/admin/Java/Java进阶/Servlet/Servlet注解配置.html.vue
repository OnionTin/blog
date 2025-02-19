<template><div><h2 id="servlet-注解配置" tabindex="-1"><a class="header-anchor" href="#servlet-注解配置"><span>Servlet 注解配置</span></a></h2>
<blockquote>
<p>我们可以在 web.xml 文件中，设置多个 servlet、servlet-mapping 这种 Servlet 对象配置，但是一旦如果多了，就很显得很乱，所以除了通过在 web.xml 文件中配置 Servlet 之外，还可以通过注解来配置 Servlet。</p>
</blockquote>
<h3 id="xml-中配置-servlet" tabindex="-1"><a class="header-anchor" href="#xml-中配置-servlet"><span>xml 中配置 Servlet</span></a></h3>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--web.xml文件中设置Servlet--></span>
<span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://xmlns.jcp.org/xml/ns/javaee<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
    http://xmlns.jcp.org/xml/ns/javaee
    http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd<span class="token punctuation">"</span></span>
  <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4.0<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">></span></span>index.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">></span></span>index.htm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">></span></span>index.jsp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">></span></span>default.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">></span></span>default.htm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">></span></span>default.jsp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file-list</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 第一个Servlet --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>aaa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">></span></span>com.Servlet.ServletDemo01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>aaa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">></span></span>/bbb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 第二个Servlet --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>demo01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">></span></span>com.Servlet.ServletDemo01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>demo01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">></span></span>/demo01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- ... 第n个Servlet对象 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注解中配置-servlet" tabindex="-1"><a class="header-anchor" href="#注解中配置-servlet"><span>注解中配置 Servlet</span></a></h3>
<blockquote>
<p>在 @WebServlet 参数中，value 其实就是 url-pattern，url-pattern 就是访问路径；所以等同于 urlPatterns，即有多种写法。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span></span><span class="token class-name">Servlet</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token comment">//@WebServlet(name = "ServletDemo02", urlPatterns = "/ServletDemo02")</span>
<span class="token comment">//@WebServlet(urlPatterns = {"/ServletDemo02"})</span>
<span class="token comment">//@WebServlet(urlPatterns = "/ServletDemo02")</span>
<span class="token comment">//@WebServlet(value = "/ServletDemo02")</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/ServletDemo02"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletDemo02</span> <span class="token keyword">implements</span> <span class="token class-name">Servlet</span> <span class="token punctuation">{</span>
  <span class="token class-name">ServletDemo02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ServletDemo02 构造器先于初始化方法执行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">ServletConfig</span> sc<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ServletDemo02 初始化方法执行了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">ServletConfig</span> <span class="token function">getServletConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> sReq<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> sRes<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ServletDemo02 执行了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getServletInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url-pattern-配置" tabindex="-1"><a class="header-anchor" href="#url-pattern-配置"><span>url-pattern 配置</span></a></h3>
<blockquote>
<ol>
<li>精确匹配：<code v-pre>/ServletDemo02</code></li>
<li>目录匹配：<code v-pre>/xxxxxx/*</code></li>
<li>后缀名匹配：<code v-pre>*.xxxxxxx</code></li>
<li>任意匹配：<code v-pre>/*</code></li>
<li>任意匹配：<code v-pre>/</code>
优先级：精确匹配 &gt; 目录匹配 &gt; 后缀名匹配 &gt; 任意匹配</li>
</ol>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 精确匹配：</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/ServletDemo02"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/aaa/ServletDemo02"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/aaa/bbb"</span><span class="token punctuation">)</span>
<span class="token comment">// 目录匹配：</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/aaa/*"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/aaa/bbb/*"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/aaa/bbb/ccc"</span><span class="token punctuation">)</span>
<span class="token comment">// 后缀名匹配：</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"*.do"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"*.do/*"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"*.do/bbb"</span><span class="token punctuation">)</span>
<span class="token comment">// 任意匹配：</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/*"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ol>
<li>有了任意通配符了，所以可以简写了</li>
<li>/和 *.do 不能写在一起使用</li>
<li>当/*/ServletDemo02 时，*就不代表通配符了，而是符号*</li>
</ol>
<p><img src="@source/admin/Java/Java进阶/images/url-partten.jpg" alt="url-partten优先级"></p>
</div></template>


