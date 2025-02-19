import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="servlet-生命周期" tabindex="-1"><a class="header-anchor" href="#servlet-生命周期"><span>Servlet 生命周期</span></a></h2><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>init</td><td>初始化</td></tr><tr><td>service</td><td>执行方法</td></tr><tr><td>destory</td><td>销毁方法</td></tr></tbody></table><h3 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>init</span></a></h3><ul><li>初始化方法，在 servlet 被创建时执行，只会执行一次</li><li>用于加载资源，初始化 servlet 对象</li></ul><h3 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>service</span></a></h3><ul><li>服务方法，每次请求都会执行</li><li>用于处理请求，响应数据</li></ul><h3 id="destory" tabindex="-1"><a class="header-anchor" href="#destory"><span>destory</span></a></h3><ul><li>销毁方法，在 服务被正常关闭时，只会执行一次</li></ul><h3 id="如何将-servlet-对象的创建提前" tabindex="-1"><a class="header-anchor" href="#如何将-servlet-对象的创建提前"><span>如何将 Servlet 对象的创建提前</span></a></h3><blockquote><p>load-on-startup：用来表示创建 Servlet 对象的时机，默认值为-1，设置的值越小(正整数)，优先级越高；相同优先级，按照 servlet-name 的字典顺序执行</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>ServletDemo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">&gt;</span></span>com.atguigu.servlet.ServletDemo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 创建 Servlet 对象的时机 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>load-on-startup</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>load-on-startup</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/Servlet/Servlet生命周期.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Servlet_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Servlet生命周期.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Servlet 生命周期","slug":"servlet-生命周期","link":"#servlet-生命周期","children":[{"level":3,"title":"init","slug":"init","link":"#init","children":[]},{"level":3,"title":"service","slug":"service","link":"#service","children":[]},{"level":3,"title":"destory","slug":"destory","link":"#destory","children":[]},{"level":3,"title":"如何将 Servlet 对象的创建提前","slug":"如何将-servlet-对象的创建提前","link":"#如何将-servlet-对象的创建提前","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/Servlet/Servlet生命周期.md","excerpt":"<h2>Servlet 生命周期</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>init</td>\\n<td>初始化</td>\\n</tr>\\n<tr>\\n<td>service</td>\\n<td>执行方法</td>\\n</tr>\\n<tr>\\n<td>destory</td>\\n<td>销毁方法</td>\\n</tr>\\n</tbody>\\n</table>\\n<h3>init</h3>\\n<ul>\\n<li>初始化方法，在 servlet 被创建时执行，只会执行一次</li>\\n<li>用于加载资源，初始化 servlet 对象</li>\\n</ul>"}');
export {
  Servlet_____html as comp,
  data
};
