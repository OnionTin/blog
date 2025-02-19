import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="yaml" tabindex="-1"><a class="header-anchor" href="#yaml"><span>yaml</span></a></h2><blockquote><p><a href="https://docs.spring.io/spring-boot/appendix/application-properties/index.html#appendix.application-properties" target="_blank" rel="noopener noreferrer">官方配置`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>yaml 比 properties 更加简洁，并且支持数据类型更多</p><p>yaml 文件可以注入到配置类中</p></blockquote><h3 id="yaml-语法" tabindex="-1"><a class="header-anchor" href="#yaml-语法"><span>yaml 语法</span></a></h3><ol><li>key: value，冒号后面必须有空格</li><li>大小写敏感</li><li>使用缩进表示层级关系，k-v 对的缩进不允许使用 tab，只允许空格</li><li>缩进的空格数不重要，只要相同层级的元素左对齐即可</li><li>&#39;#&#39; 表示注释</li><li>字符串默认不使用引号，单引号和双引号都可以，单引号转义字符无效，双引号转义字符有效</li><li>yaml 支持的数据类型有：null、boolean、string、number、date、array、map</li><li>yaml 支持的数据结构有：scalar、sequence、mapping</li><li>yaml 文件可以注册到配置类中</li><li>yaml，支持松散绑定</li></ol><h3 id="yaml-与-properties-的区别" tabindex="-1"><a class="header-anchor" href="#yaml-与-properties-的区别"><span>yaml 与 properties 的区别</span></a></h3><ol><li>yaml 可以写对象或者数组，properties 不行</li><li>yaml 写对象可以使用行内写法</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">student</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> zhangsan
  <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">18</span>
<span class="token comment"># 等价于</span>
<span class="token key atrule">student</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> zhangsan<span class="token punctuation">,</span> <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>yaml 写数组</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">pets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> cat
  <span class="token punctuation">-</span> dog
<span class="token comment"># 等价于</span>
<span class="token key atrule">pets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>cat<span class="token punctuation">,</span> dog<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>yaml 支持多行字符串，注意缩进</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">my</span><span class="token punctuation">:</span>
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> <span class="token punctuation">&gt;</span><span class="token scalar string">
    hello
    world</span>
<span class="token comment"># 等价于</span>
<span class="token key atrule">my</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">desc</span><span class="token punctuation">:</span> <span class="token string">&quot;hello\\nworld&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringBoot/yaml/yaml.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yaml_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "yaml.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringBoot/yaml/yaml.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"yaml","slug":"yaml","link":"#yaml","children":[{"level":3,"title":"yaml 语法","slug":"yaml-语法","link":"#yaml-语法","children":[]},{"level":3,"title":"yaml 与 properties 的区别","slug":"yaml-与-properties-的区别","link":"#yaml-与-properties-的区别","children":[]}]}],"git":{"updatedTime":1725354999000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringBoot/yaml/yaml.md","excerpt":"<h2>yaml</h2>\\n<blockquote>\\n<p><a href=\\"https://docs.spring.io/spring-boot/appendix/application-properties/index.html#appendix.application-properties\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方配置</a></p>\\n<p>yaml 比 properties 更加简洁，并且支持数据类型更多</p>\\n<p>yaml 文件可以注入到配置类中</p>\\n</blockquote>\\n<h3>yaml 语法</h3>"}');
export {
  yaml_html as comp,
  data
};
