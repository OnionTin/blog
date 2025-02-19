import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="springmvc" tabindex="-1"><a class="header-anchor" href="#springmvc"><span>SpringMvc</span></a></h2><h3 id="创建步骤" tabindex="-1"><a class="header-anchor" href="#创建步骤"><span>创建步骤</span></a></h3><ol><li>servlet 配置文件(web.xml)</li><li>创建 SpringMvc 配置文件</li><li>创建 Controller 类</li><li>配置视图解析器</li><li>创建 jsp 及文件</li><li>启动查看是否 404</li><li>找到<code>项目结构</code>-&gt;<code>工件</code>-&gt;在<code>WEB-INF</code>下新建<code>lib文件夹</code>添加所有的依赖</li></ol><h3 id="实践" tabindex="-1"><a class="header-anchor" href="#实践"><span>实践</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- web.xml --&gt;</span>
<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://xmlns.jcp.org/xml/ns/javaee<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://xmlns.jcp.org/xml/ns/javaee
  http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--注册DispatcherServlet--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>springmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">&gt;</span></span>org.springframework.web.servlet.DispatcherServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--关联配置文件--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>contextConfigLocation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>classpath:springmvc.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--启动级别：1：表示在服务器启动的时候，就加载DispatcherServlet，并初始化--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>load-on-startup</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>load-on-startup</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--
    匹配servlet的访问路径：
    /：表示匹配所有请求，包括html，js，css，不包括jsp
    /*：表示匹配所有请求，包括jsp
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>springmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- springmvc.xml --&gt;</span>
<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--配置处理器映射器和适配器：处理接收前端发送的请求--&gt;</span>
  <span class="token comment">&lt;!--处理器映射：DisPatcherHandler根据请求地址找到对应的Handler(找Controller)--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--处理器适配器：按照特定的规则去调用处理器方法，也就是执行Handler(得到ViewModel)--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!--
  配置视图解析器：
    通过DisPatcherServlet将请求转发到指定的视图(返回ModelAndView并跳转到指定的页面)
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.web.servlet.view.InternalResourceViewResolver<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>InternalResourceViewResolver<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--前缀--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prefix<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/WEB-INF/jsp/<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--后缀--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>suffix<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.jsp<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!--配置Handler：处理器映射器根据id去查找对应的Handler，交给处理器适配器去执行--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/hello<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.haha.controller.HelloController<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>haha<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ModelAndView</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>mvc<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>

<span class="token comment">// 需要实现Controller接口</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token keyword">implements</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span>
    <span class="token class-name">HttpServletRequest</span> httpServletRequest<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> httpServletResponse
    <span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// ModelAndView：模型和视图</span>
    <span class="token class-name">ModelAndView</span> mv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 调用业务层</span>
    <span class="token comment">// .....</span>
    <span class="token comment">// addObject：添加一个对象，将其放在ModelAndView中</span>
    mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;HelloSpringMvc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// setViewName：设置视图的名字，就是传递一个要跳转的视图</span>
    mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 完整的路径其实是 /WEB-INF/jsp/test.jsp</span>
    <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsp line-numbers-mode" data-ext="jsp" data-title="jsp"><pre class="language-jsp"><code>&lt;!-- test.jsp --&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
\${msg}
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringMvc/SpringMvc应用.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SpringMvc___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "SpringMvc应用.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringMvc/SpringMvc%E5%BA%94%E7%94%A8.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"SpringMvc","slug":"springmvc","link":"#springmvc","children":[{"level":3,"title":"创建步骤","slug":"创建步骤","link":"#创建步骤","children":[]},{"level":3,"title":"实践","slug":"实践","link":"#实践","children":[]}]}],"git":{"updatedTime":1723909671000,"contributors":[{"name":"OnionTin]","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/SpringMvc/SpringMvc应用.md","excerpt":"<!-- @format -->\\n<h2>SpringMvc</h2>\\n<h3>创建步骤</h3>\\n<ol>\\n<li>servlet 配置文件(web.xml)</li>\\n<li>创建 SpringMvc 配置文件</li>\\n<li>创建 Controller 类</li>\\n<li>配置视图解析器</li>\\n<li>创建 jsp 及文件</li>\\n<li>启动查看是否 404</li>\\n<li>找到<code>项目结构</code>-&gt;<code>工件</code>-&gt;在<code>WEB-INF</code>下新建<code>lib文件夹</code>添加所有的依赖</li>\\n</ol>"}');
export {
  SpringMvc___html as comp,
  data
};
