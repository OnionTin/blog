import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/域对象的产生和销毁-DQPIBPrM.jpg";
const _imports_1 = "/blog/assets/请求转发实现数据共享-Blb9ZtH5.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="共享相关方法" tabindex="-1"><a class="header-anchor" href="#共享相关方法"><span>共享相关方法</span></a></h2><blockquote><p>在 web 核心中有 4 大域对象(ServletContext、HttpSession、ServletRequest、HttpServletResponse)， 每个域对象负责管理自己所在的范围，Request 域对象负责管理的就是一次请求和一次响应之间的范围。根据域对象所具备的方法可以判断出，域对象就是一个容器，容器在一次请求时生成，在一次请求后就销毁了。注意，是一次请求和一次响应之间。</p></blockquote><p>域对象的产生和销毁 <img${ssrRenderAttr("src", _imports_0)} alt="域对象的产生和销毁"></p><table><thead><tr><th>域对象方法</th><th>作用</th></tr></thead><tbody><tr><td>void setAttribute(String name, Object value)</td><td>存储数据</td></tr><tr><td>Object getAttribute(String name)</td><td>获取数据</td></tr><tr><td>void removeAttribute(String name)</td><td>移除数据</td></tr></tbody></table><h3 id="转发请求实现共享数据" tabindex="-1"><a class="header-anchor" href="#转发请求实现共享数据"><span>转发请求实现共享数据</span></a></h3><blockquote><p>因为域对象的销毁是在一次请求和一次相应之间的，第二次请求时已经销毁，获取到的是 null，目前可以通过请求转发来实现共享数据。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Servlet1</span>
<span class="token comment">// 存储数据</span>
request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 请求转发</span>
request<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/Servlet2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Servlet2</span>
<span class="token comment">// 获取数据</span>
<span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> request<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 张三</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求转发实现数据共享 <img${ssrRenderAttr("src", _imports_1)} alt="请求转发实现数据共享"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/Http/Request对象/共享相关方法.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "共享相关方法.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Request%E5%AF%B9%E8%B1%A1/%E5%85%B1%E4%BA%AB%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"共享相关方法","slug":"共享相关方法","link":"#共享相关方法","children":[{"level":3,"title":"转发请求实现共享数据","slug":"转发请求实现共享数据","link":"#转发请求实现共享数据","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/Http/Request对象/共享相关方法.md","excerpt":"<h2>共享相关方法</h2>\\n<blockquote>\\n<p>在 web 核心中有 4 大域对象(ServletContext、HttpSession、ServletRequest、HttpServletResponse)，\\n每个域对象负责管理自己所在的范围，Request 域对象负责管理的就是一次请求和一次响应之间的范围。根据域对象所具备的方法可以判断出，域对象就是一个容器，容器在一次请求时生成，在一次请求后就销毁了。注意，是一次请求和一次响应之间。</p>\\n</blockquote>\\n<p>域对象的产生和销毁\\n</p>\\n<table>\\n<thead>\\n<tr>\\n<th>域对象方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>void setAttribute(String name, Object value)</td>\\n<td>存储数据</td>\\n</tr>\\n<tr>\\n<td>Object getAttribute(String name)</td>\\n<td>获取数据</td>\\n</tr>\\n<tr>\\n<td>void removeAttribute(String name)</td>\\n<td>移除数据</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  _______html as comp,
  data
};
