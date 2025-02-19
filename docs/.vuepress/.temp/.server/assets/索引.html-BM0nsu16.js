import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h2><p>索引？</p><p>Mysql 数据库，高效获取数据的一种数据结构</p><p>索引是数据库管理系统中一个排序的数据结构，以协助高效查询、更新数据库表中数据。</p><p>主键和外键自带索引，其他索引需要手动创建</p><h3 id="索引的分类" tabindex="-1"><a class="header-anchor" href="#索引的分类"><span>索引的分类</span></a></h3><ol><li>功能分类</li></ol><ul><li>普通索引</li><li>主键索引</li><li>外键索引</li><li>联合索引</li><li>全文索引</li><li>唯一索引</li></ul><ol start="2"><li>结构分类</li></ol><ul><li>BTree 索引：底层 B + Tree 树结构</li><li>Hash 索引：底层哈希表结构</li></ul><h3 id="索引的优点" tabindex="-1"><a class="header-anchor" href="#索引的优点"><span>索引的优点</span></a></h3><ul><li>提高数据检索的效率，降低数据库的 IO 成本</li><li>通过索引列对数据进行排序，降低数据排序的成本，降低 CPU 的消耗</li></ul><h3 id="索引的缺点" tabindex="-1"><a class="header-anchor" href="#索引的缺点"><span>索引的缺点</span></a></h3><ul><li>实际上索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录，所以索引列也是要占用空间的</li><li>虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行 INSERT、UPDATE 和 DELETE。因为更新表时，MySQL 不仅要保存数据，还要保存一下索引文件每次对表进行增删改，都会调整因为增删改而产生的碎片，碎片到达一定程度时，会降低效率，解决方法就是定期对表进行 optimize 操作</li></ul><h3 id="索引的查询" tabindex="-1"><a class="header-anchor" href="#索引的查询"><span>索引的查询</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 格式</span>
<span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> 表名<span class="token punctuation">;</span>

<span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="给某个字段添加索引" tabindex="-1"><a class="header-anchor" href="#给某个字段添加索引"><span>给某个字段添加索引</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 比如某个查询比较频繁，还想要高效一些</span>
<span class="token comment">-- 格式</span>
<span class="token keyword">create</span> <span class="token keyword">index</span> 索引名称 <span class="token keyword">on</span> 表名<span class="token punctuation">(</span>列名<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">index</span> index_name onb <span class="token keyword">user</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除索引" tabindex="-1"><a class="header-anchor" href="#删除索引"><span>删除索引</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 格式</span>
<span class="token keyword">drop</span> <span class="token keyword">index</span> 索引名称 <span class="token keyword">on</span> 表名<span class="token punctuation">;</span>

<span class="token keyword">drop</span> <span class="token keyword">index</span> index_name <span class="token keyword">on</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/MySql/索引.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "索引.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E7%B4%A2%E5%BC%95.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[{"level":3,"title":"索引的分类","slug":"索引的分类","link":"#索引的分类","children":[]},{"level":3,"title":"索引的优点","slug":"索引的优点","link":"#索引的优点","children":[]},{"level":3,"title":"索引的缺点","slug":"索引的缺点","link":"#索引的缺点","children":[]},{"level":3,"title":"索引的查询","slug":"索引的查询","link":"#索引的查询","children":[]},{"level":3,"title":"给某个字段添加索引","slug":"给某个字段添加索引","link":"#给某个字段添加索引","children":[]},{"level":3,"title":"删除索引","slug":"删除索引","link":"#删除索引","children":[]}]}],"git":{"updatedTime":1719909739000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/MySql/索引.md","excerpt":"<h2>索引</h2>\\n<p>索引？</p>\\n<p>Mysql 数据库，高效获取数据的一种数据结构</p>\\n<p>索引是数据库管理系统中一个排序的数据结构，以协助高效查询、更新数据库表中数据。</p>\\n<p>主键和外键自带索引，其他索引需要手动创建</p>\\n<h3>索引的分类</h3>\\n<ol>\\n<li>功能分类</li>\\n</ol>\\n<ul>\\n<li>普通索引</li>\\n<li>主键索引</li>\\n<li>外键索引</li>\\n<li>联合索引</li>\\n<li>全文索引</li>\\n<li>唯一索引</li>\\n</ul>\\n<ol start=\\"2\\">\\n<li>结构分类</li>\\n</ol>\\n<ul>\\n<li>BTree 索引：底层 B + Tree 树结构</li>\\n<li>Hash 索引：底层哈希表结构</li>\\n</ul>"}');
export {
  ___html as comp,
  data
};
