import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="linkedlist-实现类" tabindex="-1"><a class="header-anchor" href="#linkedlist-实现类"><span>LinkedList 实现类</span></a></h2><p>需要导包，在 java.util 下；LinkedList 是 List 接口的实现类；底层是双向链表数据结构。</p><h3 id="linkedlist-类的特点-同-arraylist" tabindex="-1"><a class="header-anchor" href="#linkedlist-类的特点-同-arraylist"><span>LinkedList 类的特点(`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`同 ArrayList`);
      } else {
        return [
          createTextVNode("同 ArrayList")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`)</span></a></h3><ol><li>`);
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
  _push(`</li><li>元素都`);
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
  _push(`</li></ol><h3 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public LinkedList</td><td>new 对象</td></tr></tbody></table><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`同 ArrayList`);
      } else {
        return [
          createTextVNode("同 ArrayList")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<table><thead><tr><th>LinkedList 特有的方法</th><th>作用</th></tr></thead><tbody><tr><td>public void addFirst(Object e)</td><td>在首位添加元素</td></tr><tr><td>public void addLast(Object e)</td><td>在末尾添加元素</td></tr><tr><td>public Object getFirst()</td><td>获取首位元素</td></tr><tr><td>public Object getLast()</td><td>获取末尾元素</td></tr><tr><td>public Object removeFirst()</td><td>删除首位元素，返回被删除的元素</td></tr><tr><td>public Object removeLast()</td><td>删除末尾元素，返回被删除的元素</td></tr></tbody></table><h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历"><span>遍历</span></a></h3>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`同 ArrayList`);
      } else {
        return [
          createTextVNode("同 ArrayList")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 id="到底用-arraylist-还是-linkedlist" tabindex="-1"><a class="header-anchor" href="#到底用-arraylist-还是-linkedlist"><span>到底用 ArrayList 还是 LinkedList</span></a></h3><blockquote><p>需要判断对时间和空间的权衡来选择使用哪种集合类。</p><p>ArrayList：`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/数据结构.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`数组数据结构`);
      } else {
        return [
          createTextVNode("数组数据结构")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`查询快，增删慢`);
      } else {
        return [
          createTextVNode("查询快，增删慢")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p>LinkedList：`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/数据结构.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`链表数据结构`);
      } else {
        return [
          createTextVNode("链表数据结构")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`查询慢，增删快`);
      } else {
        return [
          createTextVNode("查询慢，增删快")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></blockquote><ol><li><p>需要考虑存取速度和 LinkedList 需要更多的内存空间</p></li><li><p>如果需要频繁的插入和删除元素，建议使用 LinkedList</p></li><li><p>如果需要频繁的随机访问元素，建议使用 ArrayList</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/单列集合Collection/List/LinkedList实现类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LinkedList____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "LinkedList实现类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/List/LinkedList%E5%AE%9E%E7%8E%B0%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"LinkedList 实现类","slug":"linkedlist-实现类","link":"#linkedlist-实现类","children":[{"level":3,"title":"LinkedList 类的特点(同 ArrayList)","slug":"linkedlist-类的特点-同-arraylist","link":"#linkedlist-类的特点-同-arraylist","children":[]},{"level":3,"title":"常见的构造方法","slug":"常见的构造方法","link":"#常见的构造方法","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"遍历","slug":"遍历","link":"#遍历","children":[]},{"level":3,"title":"到底用 ArrayList 还是 LinkedList","slug":"到底用-arraylist-还是-linkedlist","link":"#到底用-arraylist-还是-linkedlist","children":[]}]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/单列集合Collection/List/LinkedList实现类.md","excerpt":"<h2>LinkedList 实现类</h2>\\n<p>需要导包，在 java.util 下；LinkedList 是 List 接口的实现类；底层是双向链表数据结构。</p>\\n<h3>LinkedList 类的特点(<a href=\\"/blog/admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.md\\" target=\\"_blank\\">同 ArrayList</a>)</h3>\\n<ol>\\n<li>\\n的集合（即：存进去的顺序和取出来的顺序是一致的）</li>\\n<li>\\n</li>\\n<li>元素都</li>\\n</ol>\\n<h3>常见的构造方法</h3>"}');
export {
  LinkedList____html as comp,
  data
};
