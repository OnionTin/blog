import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/Mybatis文件路径-BdUfZ5t1.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="sqlmapconfig" tabindex="-1"><a class="header-anchor" href="#sqlmapconfig"><span>SqlMapConfig</span></a></h2><table><thead><tr><th>属性</th><th>作用</th></tr></thead><tbody><tr><td>typeAliases</td><td>配置别名，简化实体类文件的引用路径</td></tr><tr><td>properties</td><td>配置四大参数</td></tr><tr><td>environments</td><td>配置多个环境，想用哪个，default 的值就是哪个 environment 的 id 值</td></tr><tr><td>transactionManager</td><td>事务管理器</td></tr><tr><td>dataSource</td><td>数据源配置</td></tr><tr><td>mappers</td><td>配置映射文件</td></tr><tr><td>mapper</td><td>配置映射文件</td></tr><tr><td>package</td><td>配置映射文件包</td></tr><tr><td>cache</td><td>配置缓存</td></tr><tr><td>cache-ref</td><td>配置缓存</td></tr><tr><td>useCache</td><td>配置是否使用缓存</td></tr></tbody></table><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
    <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Config 3.0//EN&quot;</span>
    <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--动态配置四大参数--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jdbc.properties<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--如果需要属性加密，可以在这里配置解密工具--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--
      配置别名
      目的：简化实体类文件的引用路径
      type：指定别名指向的实体类
      alias：别名，在映射文件中用别名就可以替代实体类
      parameterType=“user”
      resultType=“person”
      typeAlias：配置文件的别名
      package：配置整个包下的所有实体类的别名
        比如User.java会用user来替代
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAliases</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
    &lt;typeAlias type=&quot;com.api.MyBatis.domain.User&quot; alias=&quot;user&quot;&gt;&lt;/typeAlias&gt;
    &lt;typeAlias type=&quot;com.api.MyBatis.test.Person&quot; alias=&quot;person&quot;&gt;&lt;/typeAlias&gt;
    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAlias</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.api.MyBatis.test.Person<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alias</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>person<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeAlias</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.api.MyBatis.domain<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeAliases</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--
    environments：环境的详细配置；
    environments：可以配置多个环境，想用哪个，default的值就是哪个environment的id值。
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environments</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>development<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>development<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!--
        transactionManager：事务管理器；
        type：参数，JDBC：表示使用JDBC的事务管理方式；
        Connection
          setAutoCommit(false)：开启事务；
          commit()：提交事务；
          rollback()：回滚事务。
      --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>JDBC<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token comment">&lt;!--
        dataSource：数据源配置；
        type：有三个参数；
          POOLED：表示使用连接池，由MyBatis底层自己实现的；
          UNPOOLED：不使用连接池；
          JNDI：使用JNDI，一般不使用；
        property：配置四大参数
      --&gt;</span>
      <span class="token comment">&lt;!--
      &lt;dataSource type=&quot;POOLED&quot;&gt;
        &lt;property name=&quot;driver&quot; value=&quot;com.mysql.cj.jdbc.Driver&quot;/&gt;
        &lt;property
          name=&quot;url&quot;
          value=&quot;jdbc:mysql://localhost:3306/sister?serverTimezone=UTC&quot;
        /&gt;
        &lt;property name=&quot;username&quot; value=&quot;root&quot;/&gt;
        &lt;property name=&quot;password&quot; value=&quot;Sap@1q2w3e4r&quot;/&gt;
      &lt;/dataSource&gt;
      --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POOLED<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--使用\${}引用properties文件中的属性--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>driver<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${driver}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${url}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${username}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${password}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environments</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--
    mappers：映射文件
    mapper：单独加载映射器；
      resource：映射文件的路径，文件夹之间用&quot;/&quot;隔开；
    package：批量加载映射器
      name：指定要扫描的包的名称
      recursive：是否递归扫描，默认为false，只扫描指定包下的映射器，不包括子包下的映射器，
      如果为true，则扫描指定包下的所有映射器，包括子包下的映射器；
      注意：dao中的java文件名和映射文件名必须一致，否则找不到映射文件
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
      如果使用package方式，且没有配置自动扫描，而是手动配置，则需要配置mapper接口的全类名
      如果使用package方式，且配置了自动扫描，则不需要配置mapper接口的全类名
      name：指定要扫描的包名
      需要保证接口文件和xml文件同名，且在同一个包下，
      所以需要在resources下创建com.api.MyBatis.dao文件下，将xml放在此文件夹下
      而使用mapper方式，则需要指定mapper接口的全类名(位置+文件名叫全类名)
    --&gt;</span>
    <span class="token comment">&lt;!--&lt;mapper resource=&quot;mappers/UserMapper.xml&quot;/&gt;--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.api.MyBatis.dao<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="Mybatis文件路径"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MyBatis/SqlMapConfig.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SqlMapConfig_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "SqlMapConfig.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MyBatis/SqlMapConfig.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"SqlMapConfig","slug":"sqlmapconfig","link":"#sqlmapconfig","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MyBatis/SqlMapConfig.md","excerpt":"<h2>SqlMapConfig</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>属性</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>typeAliases</td>\\n<td>配置别名，简化实体类文件的引用路径</td>\\n</tr>\\n<tr>\\n<td>properties</td>\\n<td>配置四大参数</td>\\n</tr>\\n<tr>\\n<td>environments</td>\\n<td>配置多个环境，想用哪个，default 的值就是哪个 environment 的 id 值</td>\\n</tr>\\n<tr>\\n<td>transactionManager</td>\\n<td>事务管理器</td>\\n</tr>\\n<tr>\\n<td>dataSource</td>\\n<td>数据源配置</td>\\n</tr>\\n<tr>\\n<td>mappers</td>\\n<td>配置映射文件</td>\\n</tr>\\n<tr>\\n<td>mapper</td>\\n<td>配置映射文件</td>\\n</tr>\\n<tr>\\n<td>package</td>\\n<td>配置映射文件包</td>\\n</tr>\\n<tr>\\n<td>cache</td>\\n<td>配置缓存</td>\\n</tr>\\n<tr>\\n<td>cache-ref</td>\\n<td>配置缓存</td>\\n</tr>\\n<tr>\\n<td>useCache</td>\\n<td>配置是否使用缓存</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  SqlMapConfig_html as comp,
  data
};
