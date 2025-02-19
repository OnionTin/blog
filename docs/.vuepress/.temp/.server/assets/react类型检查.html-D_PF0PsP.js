import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="react-类型检查" tabindex="-1"><a class="header-anchor" href="#react-类型检查"><span>react 类型检查</span></a></h2><p>基础数据类型:</p><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "center" })}">类型</th><th style="${ssrRenderStyle({ "text-align": "center" })}">描述</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.array</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查数组</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.bool</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查布尔值</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.func</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查函数</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.number</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查数字</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.object</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查对象</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.string</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查字符串</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.symbol</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查符号</td></tr></tbody></table><p>React 元素:</p><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "center" })}">类型</th><th style="${ssrRenderStyle({ "text-align": "center" })}">描述</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.element</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查 React 元素</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.elementType</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查 React 元素类型</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.instanceOf(class)</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查是否是某个类的实例</td></tr></tbody></table><p>其他类型:</p><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "center" })}">类型</th><th style="${ssrRenderStyle({ "text-align": "center" })}">描述</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.node</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查任何可以被渲染的 React 元素</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.objectOf(type)</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查对象中的所有值是否是某个类型</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.shape(obj)</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查对象是否具有某些属性</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.any</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查任何类型</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.oneOf(values)</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查值是否在某个数组中</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">PropTypes.oneOfType(types)</td><td style="${ssrRenderStyle({ "text-align": "center" })}">检查值是否是某个类型的子类型</td></tr></tbody></table><h3 id="arrof-和-objectof-多重嵌套类型检测" tabindex="-1"><a class="header-anchor" href="#arrof-和-objectof-多重嵌套类型检测"><span>arrOf 和 objectOf 多重嵌套类型检测</span></a></h3><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// An array of a certain type</span>
<span class="token literal-property property">optionalArrayOf</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">arrayOf</span><span class="token punctuation">(</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token comment">// An object with property values of a certain type</span>
<span class="token literal-property property">optionalObjectOf</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">objectOf</span><span class="token punctuation">(</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token comment">//示例</span>
<span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">todoList</span><span class="token operator">:</span>PropTypes<span class="token punctuation">.</span><span class="token function">arrayOf</span><span class="token punctuation">(</span>PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span>PropTypes<span class="token punctuation">.</span>string
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shape-检测不同对象的不同属性的不同数据类型" tabindex="-1"><a class="header-anchor" href="#shape-检测不同对象的不同属性的不同数据类型"><span>shape 检测不同对象的不同属性的不同数据类型:</span></a></h3><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// An object taking on a particular shape</span>
<span class="token literal-property property">optionalObjectWithShape</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">optionalProperty</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
  <span class="token literal-property property">requiredProperty</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">.</span>isRequired
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token comment">//示例</span>
<span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">object</span><span class="token operator">:</span>PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span>PropTypes<span class="token punctuation">.</span>number
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/react类型检查.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const react_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "react类型检查.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/react%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"react 类型检查","slug":"react-类型检查","link":"#react-类型检查","children":[{"level":3,"title":"arrOf 和 objectOf 多重嵌套类型检测","slug":"arrof-和-objectof-多重嵌套类型检测","link":"#arrof-和-objectof-多重嵌套类型检测","children":[]},{"level":3,"title":"shape 检测不同对象的不同属性的不同数据类型:","slug":"shape-检测不同对象的不同属性的不同数据类型","link":"#shape-检测不同对象的不同属性的不同数据类型","children":[]}]}],"git":{"updatedTime":1727684271000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/React/react类型检查.md","excerpt":"<h2>react 类型检查</h2>\\n<p>基础数据类型:</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">类型</th>\\n<th style=\\"text-align:center\\">描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\">PropTypes.array</td>\\n<td style=\\"text-align:center\\">检查数组</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">PropTypes.bool</td>\\n<td style=\\"text-align:center\\">检查布尔值</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">PropTypes.func</td>\\n<td style=\\"text-align:center\\">检查函数</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">PropTypes.number</td>\\n<td style=\\"text-align:center\\">检查数字</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">PropTypes.object</td>\\n<td style=\\"text-align:center\\">检查对象</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">PropTypes.string</td>\\n<td style=\\"text-align:center\\">检查字符串</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">PropTypes.symbol</td>\\n<td style=\\"text-align:center\\">检查符号</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  react_____html as comp,
  data
};
