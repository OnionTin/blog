import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="jdbc-中事务处理" tabindex="-1"><a class="header-anchor" href="#jdbc-中事务处理"><span>JDBC 中事务处理</span></a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "center" })}">方法</th><th style="${ssrRenderStyle({ "text-align": "center" })}">作用</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">setAutoCommit(boolean autoCommit)</td><td style="${ssrRenderStyle({ "text-align": "center" })}">开启关闭事务自动提交，true 关闭， false 开启</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">commit()</td><td style="${ssrRenderStyle({ "text-align": "center" })}">提交事务</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">rollback()</td><td style="${ssrRenderStyle({ "text-align": "center" })}">回滚事务</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 转账的案例，其中用到了封装的JDBC工具类</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token constant">JDBC</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">PreparedStatement</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ShiWuChuLi</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">UtilClass</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
         * 开启事务
         * 在控制台上是把1变成0
         * 在JDBC中是把ture变成false
         */</span>
        conn<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update user set money = money + ? where name = ?&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// tom减去100</span>
        ps<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ps<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 模拟异常 System.out.println(1/0);</span>

        <span class="token comment">// jerry加上100</span>
        ps<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;jerry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ps<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 提交事务(不提交自动回滚)</span>
        conn<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">UtilClass</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> ps<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MySql/JDBC中事务处理.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JDBC______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "JDBC中事务处理.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MySql/JDBC%E4%B8%AD%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"JDBC 中事务处理","slug":"jdbc-中事务处理","link":"#jdbc-中事务处理","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/JDBC中事务处理.md","excerpt":"<h2>JDBC 中事务处理</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">方法</th>\\n<th style=\\"text-align:center\\">作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\">setAutoCommit(boolean autoCommit)</td>\\n<td style=\\"text-align:center\\">开启关闭事务自动提交，true 关闭， false 开启</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">commit()</td>\\n<td style=\\"text-align:center\\">提交事务</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">rollback()</td>\\n<td style=\\"text-align:center\\">回滚事务</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  JDBC______html as comp,
  data
};
