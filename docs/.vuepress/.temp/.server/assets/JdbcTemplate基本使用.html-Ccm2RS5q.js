import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="jdbctemplate-基本使用" tabindex="-1"><a class="header-anchor" href="#jdbctemplate-基本使用"><span>JdbcTemplate 基本使用</span></a></h2><h3 id="常用-api" tabindex="-1"><a class="header-anchor" href="#常用-api"><span>常用 api</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>List &lt;T&gt; query(String sql, new BeanPropertyRowMapper &lt;T&gt; T.class, Object... args)</td><td>执行查询，将每行数据转换为 T 对象，并返回一个包含这些对象的列表。</td></tr><tr><td>T queryForObject(String sql, new BeanPropertyRowMapper &lt;T&gt; T.class, Object... args)</td><td>执行查询，将结果集中第一行数据转换为 T 对象，并返回。</td></tr><tr><td>queryForObject(String sql, Object.class, Object... args);</td><td>根据指定的返回值类型的 class 和特定的参数，查询返回具体的值</td></tr><tr><td>int update(String sql, Object... args)</td><td>执行更新语句（包括：update、insert、delete）。</td></tr><tr><td>queryForList (String sql, Object.class, Object... args)</td><td>执行查询语句，将每行数据转换为一个 Map 对象，并返回一个包含这些 Map 对象的列表。</td></tr><tr><td>queryForMap(String sql, Object.class, Object... args)</td><td>执行查询语句，将结果集第一行数据转换为一个 Map 对象，并返回该对象。</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">JdbcTemplate</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSourceFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mchange<span class="token punctuation">.</span>v2<span class="token punctuation">.</span>c3p0<span class="token punctuation">.</span></span><span class="token class-name">ComboPooledDataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">BeanPropertyRowMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">JdbcTemplate</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建连接池对象</span>
    <span class="token comment">// DataSource dataSource = new ComboPooledDataSource();</span>
    <span class="token class-name">Properties</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    p<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>
      <span class="token class-name">Demo01</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;druid.properties&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">DataSource</span> dataSource<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建 JdbcTemplate 对象，并通过有参构造方式绑定连接池</span>
    <span class="token class-name">JdbcTemplate</span> jt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JdbcTemplate</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    // 创建 JdbcTemplate 对象，并绑定连接池
    JdbcTemplate jt = new JdbcTemplate();
    jt.setDataSource(dataSource);
    */</span>

    <span class="token comment">/*
      * 执行sql语句
      */</span>
    <span class="token comment">// 增加</span>
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> jt<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>
      <span class="token string">&quot;insert into user values(null,?,?)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span>
      <span class="token number">1000</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 删除</span>
    <span class="token keyword">int</span> num2 <span class="token operator">=</span> jt<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>
      <span class="token string">&quot;delete from user where age = ?&quot;</span><span class="token punctuation">,</span>
      <span class="token number">1000</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 修改</span>
    <span class="token keyword">int</span> num3 <span class="token operator">=</span> jt<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>
      <span class="token string">&quot;update user set age = ?, name=? where id = ?&quot;</span><span class="token punctuation">,</span>
      <span class="token number">30</span><span class="token punctuation">,</span>
      <span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span>
      <span class="token number">1</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 查询</span>
    <span class="token comment">// 1. 查询多条记录（底层都是反射，所以能获取到User.class数据）</span>
    <span class="token comment">// 查询全部数据</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> users <span class="token operator">=</span> jt<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>
      <span class="token string">&quot;select * from user&quot;</span><span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">BeanPropertyRowMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> u <span class="token operator">:</span> users<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 查询id为1和2的数据</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> jt<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>
      <span class="token string">&quot;select * from user where id in (?, ?)&quot;</span><span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">BeanPropertyRowMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token number">2</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> u <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2. 查询一条记录（查询id为1的数据）</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> jt<span class="token punctuation">.</span><span class="token function">queryForObject</span><span class="token punctuation">(</span>
      <span class="token string">&quot;select * from user where id = ?&quot;</span><span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">BeanPropertyRowMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token number">1</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3. 查询一个数据</span>
    <span class="token comment">// 查询id为1的数据的name值</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> jt<span class="token punctuation">.</span><span class="token function">queryForObject</span><span class="token punctuation">(</span>
      <span class="token string">&quot;select name from user where id = ?&quot;</span><span class="token punctuation">,</span>
      <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
      <span class="token number">1</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 查询表中记录的总条数</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> jt<span class="token punctuation">.</span><span class="token function">queryForObject</span><span class="token punctuation">(</span>
      <span class="token string">&quot;select count(*) from user&quot;</span><span class="token punctuation">,</span>
      <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token keyword">class</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Use.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">JdbcTemplate</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;User [id=&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">&quot;, name=&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MySql/JdbcTemplate/JdbcTemplate基本使用.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JdbcTemplate_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "JdbcTemplate基本使用.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MySql/JdbcTemplate/JdbcTemplate%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"JdbcTemplate 基本使用","slug":"jdbctemplate-基本使用","link":"#jdbctemplate-基本使用","children":[{"level":3,"title":"常用 api","slug":"常用-api","link":"#常用-api","children":[]}]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/JdbcTemplate/JdbcTemplate基本使用.md","excerpt":"<h2>JdbcTemplate 基本使用</h2>\\n<h3>常用 api</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>List &lt;T&gt; query(String sql, new BeanPropertyRowMapper &lt;T&gt; T.class, Object... args)</td>\\n<td>执行查询，将每行数据转换为 T 对象，并返回一个包含这些对象的列表。</td>\\n</tr>\\n<tr>\\n<td>T queryForObject(String sql, new BeanPropertyRowMapper &lt;T&gt; T.class, Object... args)</td>\\n<td>执行查询，将结果集中第一行数据转换为 T 对象，并返回。</td>\\n</tr>\\n<tr>\\n<td>queryForObject(String sql, Object.class, Object... args);</td>\\n<td>根据指定的返回值类型的 class 和特定的参数，查询返回具体的值</td>\\n</tr>\\n<tr>\\n<td>int update(String sql, Object... args)</td>\\n<td>执行更新语句（包括：update、insert、delete）。</td>\\n</tr>\\n<tr>\\n<td>queryForList (String sql, Object.class, Object... args)</td>\\n<td>执行查询语句，将每行数据转换为一个 Map 对象，并返回一个包含这些 Map 对象的列表。</td>\\n</tr>\\n<tr>\\n<td>queryForMap(String sql, Object.class, Object... args)</td>\\n<td>执行查询语句，将结果集第一行数据转换为一个 Map 对象，并返回该对象。</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  JdbcTemplate_____html as comp,
  data
};
