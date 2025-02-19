import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="mybatis-plus" tabindex="-1"><a class="header-anchor" href="#mybatis-plus"><span>Mybatis-Plus</span></a></h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h3><blockquote><p>MyBatis-Plus（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。</p></blockquote><h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h3><table><thead><tr><th>特性</th></tr></thead><tbody><tr><td>无侵入：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑</td></tr><tr><td>损耗小：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作，无需自己编写 CRUD 代码</td></tr><tr><td>强大的 CRUD 操作：内置通用 Mapper、通用 Service，仅仅通过`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`少量配置即可实现单表大部分 CRUD 操作`);
      } else {
        return [
          createTextVNode("少量配置即可实现单表大部分 CRUD 操作")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，更有强大的条件构造器，满足各类使用需求</td></tr><tr><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`支持 Lambda `);
      } else {
        return [
          createTextVNode("支持 Lambda ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`形式调用：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错</td></tr><tr><td>支持`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`主键自动生成`);
      } else {
        return [
          createTextVNode("主键自动生成")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题</td></tr><tr><td>支持 ActiveRecord 模式：支持 ActiveRecord 形式调用，`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`实体类只需继承 Model 类即可进行强大的 CRUD 操作`);
      } else {
        return [
          createTextVNode("实体类只需继承 Model 类即可进行强大的 CRUD 操作")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>支持自定义全局通用操作：`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`支持全局通用方法注入(Write once, use anywhere)`);
      } else {
        return [
          createTextVNode("支持全局通用方法注入(Write once, use anywhere)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`内置分页插件`);
      } else {
        return [
          createTextVNode("内置分页插件")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询</td></tr><tr><td>内置性能分析插件：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`快速揪出慢查询`);
      } else {
        return [
          createTextVNode("快速揪出慢查询")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>内置全局拦截插件：提供全表 delete 、 update 操作`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`智能分析阻断，也可自定义拦截规则，预防误操作`);
      } else {
        return [
          createTextVNode("智能分析阻断，也可自定义拦截规则，预防误操作")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`内置代码生成器：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置`);
      } else {
        return [
          createTextVNode("内置代码生成器：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>内置逻辑删除功能：`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`支持全局逻辑删除扫描，支持业务逻辑删除，无需自己写逻辑删除的代码`);
      } else {
        return [
          createTextVNode("支持全局逻辑删除扫描，支持业务逻辑删除，无需自己写逻辑删除的代码")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>内置自动填充功能：`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`可自动填充字段，无需手动设置 CREATE_TIME、UPDATE_TIME、DELETED 等字段值`);
      } else {
        return [
          createTextVNode("可自动填充字段，无需手动设置 CREATE_TIME、UPDATE_TIME、DELETED 等字段值")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>内置序列化功能：`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`提供 JSON 序列化插件，可解决序列化问题，无需额外引入第三方库`);
      } else {
        return [
          createTextVNode("提供 JSON 序列化插件，可解决序列化问题，无需额外引入第三方库")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>可自定义注解、全局配置、支持自定义插件扩展</td></tr></tbody></table><h3 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h3><h4 id="_1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_1-引入依赖"><span>1. 引入依赖</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.4.3.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-配置数据源" tabindex="-1"><a class="header-anchor" href="#_2-配置数据源"><span>2. 配置数据源</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/mybatis_plus<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf-8&amp;useSSL=false&amp;serverTimezone=UTC</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> root
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>/mapper/<span class="token important">*.xml</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.example.demo.entity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-创建实体类" tabindex="-1"><a class="header-anchor" href="#_3-创建实体类"><span>3. 创建实体类</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-创建-mapper-接口" tabindex="-1"><a class="header-anchor" href="#_4-创建-mapper-接口"><span>4. 创建 Mapper 接口</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-测试" tabindex="-1"><a class="header-anchor" href="#_5-测试"><span>5. 测试</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DemoApplicationTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> users <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    users<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="crud-扩展" tabindex="-1"><a class="header-anchor" href="#crud-扩展"><span>CRUD 扩展</span></a></h3><h4 id="_1-插入操作" tabindex="-1"><a class="header-anchor" href="#_1-插入操作"><span>1. 插入操作</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">testInsert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  user<span class="token punctuation">.</span><span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan@atguigu.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id = &quot;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-主键策略" tabindex="-1"><a class="header-anchor" href="#_2-主键策略"><span>2. 主键策略</span></a></h4><ul><li>ID_WORKER - 全局唯一 ID (Long 类型的主键)</li><li>ID_WORKER_STR - 字符串全局唯一 ID (String 类型的主键)</li><li>UUID - 全局唯一 ID (UUID 类型的主键)</li><li>AUTO - 数据库 ID 自增</li><li>INPUT - 用户输入 ID (该类型可以通过自己注册自动填充插件进行填充)</li><li>NONE - 无状态 (适合那种把 ID 放在了业务字段里面的情况)</li><li>IDENTITY - 数据库 ID 自增(只支持 mysql,oracle,db2)</li></ul><h4 id="_3-更新操作" tabindex="-1"><a class="header-anchor" href="#_3-更新操作"><span>3. 更新操作</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">testUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;张三丰&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  user<span class="token punctuation">.</span><span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsanfeng@atguigu.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 根据id进行更新,没有传值的字段将更新为null</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-自动填充" tabindex="-1"><a class="header-anchor" href="#_4-自动填充"><span>4. 自动填充</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">INSERT</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> createTime<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">INSERT_UPDATE</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> updateTime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyMetaObjectHandler</span> <span class="token keyword">implements</span> <span class="token class-name">MetaObjectHandler</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertFill</span><span class="token punctuation">(</span><span class="token class-name">MetaObject</span> metaObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">strictInsertFill</span><span class="token punctuation">(</span>metaObject<span class="token punctuation">,</span> <span class="token string">&quot;createTime&quot;</span><span class="token punctuation">,</span> <span class="token class-name">LocalDateTime</span><span class="token operator">::</span><span class="token function">now</span><span class="token punctuation">,</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">strictInsertFill</span><span class="token punctuation">(</span>metaObject<span class="token punctuation">,</span> <span class="token string">&quot;updateTime&quot;</span><span class="token punctuation">,</span> <span class="token class-name">LocalDateTime</span><span class="token operator">::</span><span class="token function">now</span><span class="token punctuation">,</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateFill</span><span class="token punctuation">(</span><span class="token class-name">MetaObject</span> metaObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">strictUpdateFill</span><span class="token punctuation">(</span>metaObject<span class="token punctuation">,</span> <span class="token string">&quot;updateTime&quot;</span><span class="token punctuation">,</span> <span class="token class-name">LocalDateTime</span><span class="token operator">::</span><span class="token function">now</span><span class="token punctuation">,</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-乐观锁" tabindex="-1"><a class="header-anchor" href="#_5-乐观锁"><span>5. 乐观锁</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Version</span>
  <span class="token keyword">private</span> <span class="token class-name">Integer</span> version<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DemoApplicationTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testOptimisticLocker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">User</span> user2 <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;张三丰&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user2<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    userMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    userMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-查询操作" tabindex="-1"><a class="header-anchor" href="#_6-查询操作"><span>6. 查询操作</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">testSelectById</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-分页查询" tabindex="-1"><a class="header-anchor" href="#_7-分页查询"><span>7. 分页查询</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBatisPlusConfig</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">PaginationInterceptor</span> <span class="token function">paginationInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PaginationInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DemoApplicationTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userMapper<span class="token punctuation">.</span><span class="token function">selectPage</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    page<span class="token punctuation">.</span><span class="token function">getRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getCurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">hasPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-删除操作" tabindex="-1"><a class="header-anchor" href="#_8-删除操作"><span>8. 删除操作</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">testDeleteById</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-批量删除" tabindex="-1"><a class="header-anchor" href="#_9-批量删除"><span>9. 批量删除</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">testDeleteBatchIds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> idList <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">3L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteBatchIds</span><span class="token punctuation">(</span>idList<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-逻辑删除" tabindex="-1"><a class="header-anchor" href="#_10-逻辑删除"><span>10. 逻辑删除</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@TableLogic</span>
  <span class="token keyword">private</span> <span class="token class-name">Integer</span> deleted<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DemoApplicationTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testLogicDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11-条件构造器" tabindex="-1"><a class="header-anchor" href="#_11-条件构造器"><span>11. 条件构造器</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DemoApplicationTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    queryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectOne</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-代码生成器" tabindex="-1"><a class="header-anchor" href="#_12-代码生成器"><span>12. 代码生成器</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CodeGenerator</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">AutoGenerator</span> autoGenerator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AutoGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 全局配置</span>
    <span class="token class-name">GlobalConfig</span> globalConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GlobalConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> projectPath <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.dir&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    globalConfig<span class="token punctuation">.</span><span class="token function">setOutputDir</span><span class="token punctuation">(</span>projectPath <span class="token operator">+</span> <span class="token string">&quot;/src/main/java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    globalConfig<span class="token punctuation">.</span><span class="token function">setAuthor</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    globalConfig<span class="token punctuation">.</span><span class="token function">setOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    globalConfig<span class="token punctuation">.</span><span class="token function">setSwagger2</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    autoGenerator<span class="token punctuation">.</span><span class="token function">setGlobalConfig</span><span class="token punctuation">(</span>globalConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 数据源配置</span>
    <span class="token class-name">DataSourceConfig</span> dataSourceConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSourceConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dataSourceConfig<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/mybatis_plus?useUnicode=true&amp;useSSL=false&amp;characterEncoding=utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dataSourceConfig<span class="token punctuation">.</span><span class="token function">setDriverName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dataSourceConfig<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dataSourceConfig<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    autoGenerator<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dataSourceConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 包配置</span>
    <span class="token class-name">PackageConfig</span> packageConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PackageConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    packageConfig<span class="token punctuation">.</span><span class="token function">setModuleName</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    packageConfig<span class="token punctuation">.</span><span class="token function">setParent</span><span class="token punctuation">(</span><span class="token string">&quot;com.example.demo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    autoGenerator<span class="token punctuation">.</span><span class="token function">setPackageInfo</span><span class="token punctuation">(</span>packageConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 策略配置</span>
    <span class="token class-name">StrategyConfig</span> strategyConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StrategyConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    strategyConfig<span class="token punctuation">.</span><span class="token function">setInclude</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    strategyConfig<span class="token punctuation">.</span><span class="token function">setNaming</span><span class="token punctuation">(</span><span class="token class-name">NamingStrategy</span><span class="token punctuation">.</span>underline_to_camel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    strategyConfig<span class="token punctuation">.</span><span class="token function">setColumnNaming</span><span class="token punctuation">(</span><span class="token class-name">NamingStrategy</span><span class="token punctuation">.</span>underline_to_camel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    strategyConfig<span class="token punctuation">.</span><span class="token function">setEntityLombokModel</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    strategyConfig<span class="token punctuation">.</span><span class="token function">setRestControllerStyle</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    strategyConfig<span class="token punctuation">.</span><span class="token function">setControllerMappingHyphenStyle</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    autoGenerator<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span>strategyConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

    autoGenerator<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-分页插件" tabindex="-1"><a class="header-anchor" href="#_13-分页插件"><span>13. 分页插件</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token class-name">DbType</span><span class="token punctuation">.</span><span class="token constant">MYSQL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DemoApplicationTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userMapper<span class="token punctuation">.</span><span class="token function">selectPage</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> records <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">getRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    records<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前页：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getCurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;每页显示的条数：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总记录数：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总页数：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;是否有上一页：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">hasPrevious</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;是否有下一页：&quot;</span> <span class="token operator">+</span> page<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_14-乐观锁插件" tabindex="-1"><a class="header-anchor" href="#_14-乐观锁插件"><span>14. 乐观锁插件</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OptimisticLockerInnerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DemoApplicationTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testOptimisticLocker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string">&quot;test@baomidou.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setVersion</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_15-性能分析插件" tabindex="-1"><a class="header-anchor" href="#_15-性能分析插件"><span>15. 性能分析插件</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PerformanceInnerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_16-逻辑删除插件" tabindex="-1"><a class="header-anchor" href="#_16-逻辑删除插件"><span>16. 逻辑删除插件</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LogicSqlInjector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_17-自动填充插件" tabindex="-1"><a class="header-anchor" href="#_17-自动填充插件"><span>17. 自动填充插件</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MetaObjectHandlerInnerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_18-sql-注入器" tabindex="-1"><a class="header-anchor" href="#_18-sql-注入器"><span>18. SQL 注入器</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LogicSqlInjector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_19-多租户插件" tabindex="-1"><a class="header-anchor" href="#_19-多租户插件"><span>19. 多租户插件</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TenantLineInnerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_20-动态表名插件" tabindex="-1"><a class="header-anchor" href="#_20-动态表名插件"><span>20. 动态表名插件</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DynamicTableNameInnerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringBoot/数据库集成/Mybatis-Plus.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MybatisPlus_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Mybatis-Plus.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringBoot/%E6%95%B0%E6%8D%AE%E5%BA%93%E9%9B%86%E6%88%90/Mybatis-Plus.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Mybatis-Plus","slug":"mybatis-plus","link":"#mybatis-plus","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"特性","slug":"特性","link":"#特性","children":[]},{"level":3,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]},{"level":3,"title":"CRUD 扩展","slug":"crud-扩展","link":"#crud-扩展","children":[]}]}],"git":{"updatedTime":1725614718000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1},{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringBoot/数据库集成/Mybatis-Plus.md","excerpt":"<!-- @format -->\\n<h2>Mybatis-Plus</h2>\\n<h3>简介</h3>\\n<blockquote>\\n<p>MyBatis-Plus（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。</p>\\n</blockquote>\\n<h3>特性</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>特性</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>无侵入：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑</td>\\n</tr>\\n<tr>\\n<td>损耗小：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作，无需自己编写 CRUD 代码</td>\\n</tr>\\n<tr>\\n<td>强大的 CRUD 操作：内置通用 Mapper、通用 Service，仅仅通过，更有强大的条件构造器，满足各类使用需求</td>\\n</tr>\\n<tr>\\n<td>形式调用：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错</td>\\n</tr>\\n<tr>\\n<td>支持：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题</td>\\n</tr>\\n<tr>\\n<td>支持 ActiveRecord 模式：支持 ActiveRecord 形式调用，</td>\\n</tr>\\n<tr>\\n<td>支持自定义全局通用操作：</td>\\n</tr>\\n<tr>\\n<td>：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询</td>\\n</tr>\\n<tr>\\n<td>内置性能分析插件：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能</td>\\n</tr>\\n<tr>\\n<td>内置全局拦截插件：提供全表 delete 、 update 操作</td>\\n</tr>\\n<tr>\\n<td></td>\\n</tr>\\n<tr>\\n<td>内置逻辑删除功能：</td>\\n</tr>\\n<tr>\\n<td>内置自动填充功能：</td>\\n</tr>\\n<tr>\\n<td>内置序列化功能：</td>\\n</tr>\\n<tr>\\n<td>可自定义注解、全局配置、支持自定义插件扩展</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  MybatisPlus_html as comp,
  data
};
