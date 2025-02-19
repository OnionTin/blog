import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="jstl" tabindex="-1"><a class="header-anchor" href="#jstl"><span>jstl</span></a></h2><blockquote><p>jstl 是 Jsp 标准标签函式库，用来替代 Java 代码的，提高了页面的维护性</p></blockquote><h3 id="jslt-如何使用" tabindex="-1"><a class="header-anchor" href="#jslt-如何使用"><span>jslt 如何使用</span></a></h3><ol><li>导入相关的 jar 包(依赖)</li><li>再 jsp 页面上引入指令</li><li>在 jsp 页面中写 jstl 标签库</li></ol><h3 id="常见的标签" tabindex="-1"><a class="header-anchor" href="#常见的标签"><span>常见的标签</span></a></h3><table><thead><tr><th>标签</th><th>作用</th></tr></thead><tbody><tr><td>if 标签</td><td>条件判断</td></tr><tr><td>c:forEach</td><td>循环</td></tr><tr><td>c:forTokens</td><td>循环</td></tr><tr><td>c:choose</td><td>分支选择</td></tr><tr><td>c:when</td><td>分支选择</td></tr><tr><td>c:otherwise</td><td>分支选择</td></tr><tr><td>c:out</td><td>输出</td></tr><tr><td>c:set</td><td>赋值</td></tr><tr><td>c:remove</td><td>删除</td></tr><tr><td>c:catch</td><td>异常处理</td></tr><tr><td>c:import</td><td>引入</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">%</span>@ page <span class="token keyword">import</span><span class="token operator">=</span><span class="token string">&quot;java.util.ArrayList&quot;</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span>@ page <span class="token keyword">import</span><span class="token operator">=</span><span class="token string">&quot;java.util.HashMap&quot;</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span>@ page contentType<span class="token operator">=</span><span class="token string">&quot;text/html;charset=UTF-8&quot;</span> language<span class="token operator">=</span><span class="token string">&quot;java&quot;</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span>@ taglib prefix<span class="token operator">=</span><span class="token string">&quot;c&quot;</span> uri<span class="token operator">=</span><span class="token string">&quot;http://java.sun.com/jsp/jstl/core&quot;</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>html<span class="token punctuation">&gt;</span></span>
<span class="token generics"><span class="token punctuation">&lt;</span>head<span class="token punctuation">&gt;</span></span>
  <span class="token generics"><span class="token punctuation">&lt;</span>title<span class="token punctuation">&gt;</span></span><span class="token class-name">Title</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>body<span class="token punctuation">&gt;</span></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>条件判断一：使用c<span class="token operator">:</span>set设置变量 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span>set <span class="token keyword">var</span><span class="token operator">=</span><span class="token string">&quot;num&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;\${3}&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span>choose<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>c<span class="token operator">:</span>when test<span class="token operator">=</span><span class="token string">&quot;\${num == 3}&quot;</span><span class="token operator">&gt;</span>
    约
  <span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>when<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>c<span class="token operator">:</span>otherwise<span class="token operator">&gt;</span>
    不约
  <span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>otherwise<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>choose<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">--</span>条件判断二：使用request<span class="token punctuation">.</span>setAttribute设置变量<span class="token operator">--</span><span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span>
  <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;\${num == 3}&quot;</span><span class="token operator">&gt;</span>约<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;\${num != 3}&quot;</span><span class="token operator">&gt;</span>不约<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">&gt;</span><span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">&gt;</span></span>

<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">--</span>
forEach 遍历
<span class="token keyword">var</span><span class="token operator">:</span> 定义的变量
begin<span class="token operator">:</span> 从几开始
end<span class="token operator">:</span> 到几结束
step<span class="token operator">:</span> 步长
varStatus<span class="token operator">:</span> 遍历状态
  index<span class="token operator">:</span> 索引
  count<span class="token operator">:</span> 遍历次数
items<span class="token operator">:</span> 被遍历的容器<span class="token punctuation">(</span>数组、单双例集合<span class="token punctuation">)</span>
<span class="token operator">--</span><span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span>forEach <span class="token keyword">var</span><span class="token operator">=</span><span class="token string">&quot;num&quot;</span> begin<span class="token operator">=</span><span class="token string">&quot;1&quot;</span> end<span class="token operator">=</span><span class="token string">&quot;10&quot;</span> step<span class="token operator">=</span><span class="token string">&quot;1&quot;</span> varStatus<span class="token operator">=</span><span class="token string">&quot;status&quot;</span><span class="token operator">&gt;</span>
  $<span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token operator">--</span><span class="token operator">--</span>$<span class="token punctuation">{</span>status<span class="token punctuation">.</span>index<span class="token punctuation">}</span><span class="token operator">--</span><span class="token operator">--</span>$<span class="token punctuation">{</span>status<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">&gt;</span></span>
  <span class="token operator">&lt;</span>c<span class="token operator">:</span>out value<span class="token operator">=</span><span class="token string">&quot;\${num}&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>forEach<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">%</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;arr&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;xiaoming&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;map&quot;</span><span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span>forEach <span class="token keyword">var</span><span class="token operator">=</span><span class="token string">&quot;num&quot;</span> step<span class="token operator">=</span><span class="token string">&quot;1&quot;</span> varStatus<span class="token operator">=</span><span class="token string">&quot;status&quot;</span> items<span class="token operator">=</span><span class="token string">&quot;\${arr}&quot;</span><span class="token operator">&gt;</span>
  $<span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token operator">--</span><span class="token operator">--</span>$<span class="token punctuation">{</span>status<span class="token punctuation">.</span>index<span class="token punctuation">}</span><span class="token operator">--</span><span class="token operator">--</span>$<span class="token punctuation">{</span>status<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">&gt;</span></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>forEach<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span>forEach <span class="token keyword">var</span><span class="token operator">=</span><span class="token string">&quot;a&quot;</span> items<span class="token operator">=</span><span class="token string">&quot;\${list}&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>c<span class="token operator">:</span>out value<span class="token operator">=</span><span class="token string">&quot;\${a}&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">&gt;</span></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>forEach<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>c<span class="token operator">:</span>forEach <span class="token keyword">var</span><span class="token operator">=</span><span class="token string">&quot;b&quot;</span> items<span class="token operator">=</span><span class="token string">&quot;\${map}&quot;</span><span class="token operator">&gt;</span>
  $<span class="token punctuation">{</span>b<span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token operator">--</span><span class="token operator">--</span>$<span class="token punctuation">{</span>b<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">&gt;</span></span>
  <span class="token operator">&lt;</span>c<span class="token operator">:</span>out value<span class="token operator">=</span><span class="token string">&quot;\${b}&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token generics"><span class="token punctuation">&lt;</span>br<span class="token punctuation">&gt;</span></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>c<span class="token operator">:</span>forEach<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/jsp/jstl.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jstl_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "jstl.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/jsp/jstl.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"jstl","slug":"jstl","link":"#jstl","children":[{"level":3,"title":"jslt 如何使用","slug":"jslt-如何使用","link":"#jslt-如何使用","children":[]},{"level":3,"title":"常见的标签","slug":"常见的标签","link":"#常见的标签","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/jsp/jstl.md","excerpt":"<h2>jstl</h2>\\n<blockquote>\\n<p>jstl 是 Jsp 标准标签函式库，用来替代 Java 代码的，提高了页面的维护性</p>\\n</blockquote>\\n<h3>jslt 如何使用</h3>\\n<ol>\\n<li>导入相关的 jar 包(依赖)</li>\\n<li>再 jsp 页面上引入指令</li>\\n<li>在 jsp 页面中写 jstl 标签库</li>\\n</ol>\\n<h3>常见的标签</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>标签</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>if 标签</td>\\n<td>条件判断</td>\\n</tr>\\n<tr>\\n<td>c:forEach</td>\\n<td>循环</td>\\n</tr>\\n<tr>\\n<td>c:forTokens</td>\\n<td>循环</td>\\n</tr>\\n<tr>\\n<td>c:choose</td>\\n<td>分支选择</td>\\n</tr>\\n<tr>\\n<td>c:when</td>\\n<td>分支选择</td>\\n</tr>\\n<tr>\\n<td>c:otherwise</td>\\n<td>分支选择</td>\\n</tr>\\n<tr>\\n<td>c:out</td>\\n<td>输出</td>\\n</tr>\\n<tr>\\n<td>c:set</td>\\n<td>赋值</td>\\n</tr>\\n<tr>\\n<td>c:remove</td>\\n<td>删除</td>\\n</tr>\\n<tr>\\n<td>c:catch</td>\\n<td>异常处理</td>\\n</tr>\\n<tr>\\n<td>c:import</td>\\n<td>引入</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  jstl_html as comp,
  data
};
