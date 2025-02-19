import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/面向对象01-CM_mWEFx.png";
const _imports_1 = "/blog/assets/面向对象02-BYSLaZHG.png";
const _imports_2 = "/blog/assets/面向对象03-BIRqGqpF.png";
const _imports_3 = "/blog/assets/面向对象04-CQioJLrf.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象"><span>面向对象</span></a></h2><p><code>new一个新对象会创建一个空间、对象的指向问题</code></p><h3 id="理解面向对象和面向过程" tabindex="-1"><a class="header-anchor" href="#理解面向对象和面向过程"><span>理解面向对象和面向过程</span></a></h3><blockquote><p>旅游:</p><ol><li>面向过程: 自己订票, 自己订酒店, 自己订车, 自己安排行程</li><li>面向对象: 找旅行社, 旅行社安排, 旅行社负责订票, 订酒店, 订车, 安排行程</li></ol></blockquote><blockquote><p>开发:</p><ol><li>面向过程: 自己写代码, 自己写文档</li><li>面向对象: 花钱找一个程序员, 这个程序员写代码, 程序员写文档</li></ol></blockquote><h3 id="类和对象" tabindex="-1"><a class="header-anchor" href="#类和对象"><span>类和对象</span></a></h3><blockquote><p>类: 类是事物的属性(外在特征)和行为(具备的功能)的集合，抽象的 比如说人类 这个就是类</p><p>对象: 具体存在的, 是一个类的具体的体现 比如说小明，是具体的某一个人，是人类的具体体现</p></blockquote><h3 id="面向对象三大特性" tabindex="-1"><a class="header-anchor" href="#面向对象三大特性"><span>面向对象三大特性</span></a></h3><ol><li>封装</li></ol><ul><li>把客观事物封装成抽象的类, 并且类可以把自己的数据和方法只让可信的类或者对象操作, 对不可信的进行信息隐藏</li></ul><ol start="2"><li>继承</li></ol><ul><li>子类继承父类的特征和行为, 使得子类对象（实例）具有父类的实例域和方法, 即子类对象（实例）可以调用这些被继承的方法</li></ul><ol start="3"><li>多态</li></ol><ul><li><p>多种状态</p><ul><li>父类定义一个方法不去实现, 让继承它的子类去实现, 每一个子类有不同的表现</li></ul></li></ul><h3 id="练习题" tabindex="-1"><a class="header-anchor" href="#练习题"><span>练习题</span></a></h3><ol><li><code>类与对象的基础用法</code></li></ol><p><img${ssrRenderAttr("src", _imports_0)} alt="案例一"></p><ol start="2"><li><p><code>一个对象指向一个地址，创建多个就分别指向不同的地址</code><img${ssrRenderAttr("src", _imports_1)} alt="案例二"></p></li><li><p><code>创建(new 一个对象)就会开辟一个新的地址</code><img${ssrRenderAttr("src", _imports_2)} alt="案例三"></p></li><li><p><code>当两个对象指向同一个地址时，一个对象的属性发生更改就都跟着改了</code><img${ssrRenderAttr("src", _imports_3)} alt="案例四"></p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java基础/面向对象.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "面向对象.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"面向对象","slug":"面向对象","link":"#面向对象","children":[{"level":3,"title":"理解面向对象和面向过程","slug":"理解面向对象和面向过程","link":"#理解面向对象和面向过程","children":[]},{"level":3,"title":"类和对象","slug":"类和对象","link":"#类和对象","children":[]},{"level":3,"title":"面向对象三大特性","slug":"面向对象三大特性","link":"#面向对象三大特性","children":[]},{"level":3,"title":"练习题","slug":"练习题","link":"#练习题","children":[]}]}],"git":{"updatedTime":1710404435000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java基础/面向对象.md","excerpt":"<h2>面向对象</h2>\\n<p><code>new一个新对象会创建一个空间、对象的指向问题</code></p>\\n<h3>理解面向对象和面向过程</h3>\\n<blockquote>\\n<p>旅游:</p>\\n<ol>\\n<li>面向过程: 自己订票, 自己订酒店, 自己订车, 自己安排行程</li>\\n<li>面向对象: 找旅行社, 旅行社安排, 旅行社负责订票, 订酒店, 订车, 安排行程</li>\\n</ol>\\n</blockquote>\\n<blockquote>\\n<p>开发:</p>\\n<ol>\\n<li>面向过程: 自己写代码, 自己写文档</li>\\n<li>面向对象: 花钱找一个程序员, 这个程序员写代码, 程序员写文档</li>\\n</ol>\\n</blockquote>"}');
export {
  _____html as comp,
  data
};
