import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="list-子接口" tabindex="-1"><a class="header-anchor" href="#list-子接口"><span>List 子接口</span></a></h2><p>需要导包，在 java.util 下；List 也是接口，是 Collection 的子接口。</p><h3 id="list-集合的特点" tabindex="-1"><a class="header-anchor" href="#list-集合的特点"><span>List 集合的特点</span></a></h3><ol><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`有序`);
      } else {
        return [
          createTextVNode("有序")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`的集合（即：存进去的顺序和取出来的顺序是一致的）</li><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`有索引`);
      } else {
        return [
          createTextVNode("有索引")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，所以 List 集合也被称为索引集合</li><li>元素都`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`允许重复`);
      } else {
        return [
          createTextVNode("允许重复")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，所以 List 集合也被称为有序集合</li></ol><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/Collection接口.md" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Collection 集合`);
            } else {
              return [
                createTextVNode("Collection 集合")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`的方法都被继承了，不描述了`);
      } else {
        return [
          createVNode(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/Collection接口.md" }, {
            default: withCtx(() => [
              createTextVNode("Collection 集合")
            ]),
            _: 1
          }),
          createTextVNode("的方法都被继承了，不描述了")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>boolean add(Object e)</td><td>添加元素</td></tr><tr><td>void add(int index, Object element)</td><td>添加元素</td></tr><tr><td>boolean remove(Object o)</td><td>删除元素</td></tr><tr><td>boolean removeIf(Predicate filter)</td><td>按照条件删除元素</td></tr><tr><td>Object remove(int index)</td><td>删除指定索引处的元素</td></tr><tr><td>Object set(int index, Object element)</td><td>修改指定索引处的元素，返回被修改的数据</td></tr><tr><td>Object get(int index)</td><td>返回指定索引处的元素</td></tr></tbody></table><h3 id="list-集合遍历" tabindex="-1"><a class="header-anchor" href="#list-集合遍历"><span>List 集合遍历</span></a></h3><ol><li><p>转数组循环遍历</p></li><li><p>迭代器遍历</p></li><li><p>增强 for 循环遍历(for each)</p></li><li><p>普通的 for 循环遍历(利用索引)</p></li></ol><h3 id="方法的使用案例" tabindex="-1"><a class="header-anchor" href="#方法的使用案例"><span>方法的使用案例</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Iterator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoList</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// void add(int index, Object element)</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;ddd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [aaa, ddd, bbb, ccc]</span>

        list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;ddd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// void remove(int index)</span>
        list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [aaa, ccc]</span>

        <span class="token comment">// Object set(int index, Object element)</span>
        list<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [bbb,ccc]</span>

        <span class="token comment">// Object get(int index)</span>
        list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bbb</span>

        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 转数组遍历</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> obj <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> obj<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 迭代器遍历</span>
        <span class="token class-name">Iterator</span> it <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 增强for遍历(for each)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> o <span class="token operator">:</span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 普通for缓存遍历(利用索引)</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/单列集合Collection/List/List子接口.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const List____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "List子接口.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/List/List%E5%AD%90%E6%8E%A5%E5%8F%A3.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"List 子接口","slug":"list-子接口","link":"#list-子接口","children":[{"level":3,"title":"List 集合的特点","slug":"list-集合的特点","link":"#list-集合的特点","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"List 集合遍历","slug":"list-集合遍历","link":"#list-集合遍历","children":[]},{"level":3,"title":"方法的使用案例","slug":"方法的使用案例","link":"#方法的使用案例","children":[]}]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/单列集合Collection/List/List子接口.md","excerpt":"<h2>List 子接口</h2>\\n<p>需要导包，在 java.util 下；List 也是接口，是 Collection 的子接口。</p>\\n<h3>List 集合的特点</h3>\\n<ol>\\n<li>\\n的集合（即：存进去的顺序和取出来的顺序是一致的）</li>\\n<li>\\n，所以 List 集合也被称为索引集合</li>\\n<li>元素都，所以 List 集合也被称为有序集合</li>\\n</ol>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>boolean add(Object e)</td>\\n<td>添加元素</td>\\n</tr>\\n<tr>\\n<td>void add(int index, Object element)</td>\\n<td>添加元素</td>\\n</tr>\\n<tr>\\n<td>boolean remove(Object o)</td>\\n<td>删除元素</td>\\n</tr>\\n<tr>\\n<td>boolean removeIf(Predicate filter)</td>\\n<td>按照条件删除元素</td>\\n</tr>\\n<tr>\\n<td>Object remove(int index)</td>\\n<td>删除指定索引处的元素</td>\\n</tr>\\n<tr>\\n<td>Object set(int index, Object element)</td>\\n<td>修改指定索引处的元素，返回被修改的数据</td>\\n</tr>\\n<tr>\\n<td>Object get(int index)</td>\\n<td>返回指定索引处的元素</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  List____html as comp,
  data
};
