import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="jdbc" tabindex="-1"><a class="header-anchor" href="#jdbc"><span>JDBC</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// JDBC 最基础的用法</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 注册驱动</span>
  <span class="token comment">// 已经过时，请弃用</span>

  <span class="token comment">// 2. 获取数据库连接对象</span>
  <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>
    <span class="token string">&quot;jdbc:mysql://localhost:3306/sister?serverTimezone=UTC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sap@1q2w3e4r&quot;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 3. 获取执行sql语句的对象</span>
  <span class="token comment">// 有问题，请更换</span>
  <span class="token class-name">Statement</span> sta <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 4. 执行sql语句</span>
  <span class="token keyword">int</span> i <span class="token operator">=</span> sta<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string">&quot;insert into user values(3,&#39;rose&#39;, 20)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>

  <span class="token comment">// 5. 释放资源</span>
  rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  sta<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdbc-基本步骤" tabindex="-1"><a class="header-anchor" href="#jdbc-基本步骤"><span>JDBC 基本步骤</span></a></h3><ol><li>注册驱动</li><li>获取数据库连接对象</li><li>获取执行 SQL 的对象</li><li>执行 SQL 语句</li><li>释放资源</li></ol><h3 id="获取数据库连接对象" tabindex="-1"><a class="header-anchor" href="#获取数据库连接对象"><span>获取数据库连接对象</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public static Connection getConnection(String url, String user, String password)</td><td>根据地址、用户名、密码连接数据库</td></tr><tr><td>public static Connection getConnection(String url)</td><td>根据全路径连接数据库</td></tr><tr><td>public static Connection getConnection(String url, java.util.Properties info)</td><td>根据配置文件连接</td></tr></tbody></table><h3 id="获取执行-sql-语句的对象" tabindex="-1"><a class="header-anchor" href="#获取执行-sql-语句的对象"><span>获取执行 sql 语句的对象</span></a></h3><p>Statement 会有 SQL 注入的风险，所以不推荐使用；解决方案：`);
  _push(ssrRenderComponent(_component_RouteLink, {
    active: "",
    to: "/db/MySql/预处理语句.md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`预处理语句`);
      } else {
        return [
          createTextVNode("预处理语句")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`。</p><p>SQL 注入？</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// SQL 注入案例</span>
<span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;tom&#39; or &#39;1&#39; = &#39;1&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from user where username = &#39;&quot;</span> <span class="token operator">+</span> username
<span class="token operator">+</span> <span class="token string">&quot;&#39; and password = &#39;&quot;</span> <span class="token operator">+</span> password <span class="token operator">+</span> <span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 正确写法</span>
<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from user where username = ? and password = ?&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行-sql-语句" tabindex="-1"><a class="header-anchor" href="#执行-sql-语句"><span>执行 SQL 语句</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>int executeUpdate()</td><td>增删改，返回实际影响的行数</td></tr><tr><td>ResultSet executeQuery()</td><td>查，返回获取到的结果集</td></tr><tr><td>boolean execute()</td><td>增删改查；底层使用，我们很少用；查询返回 true, 增删改返回 false</td></tr></tbody></table><h3 id="resultset-结果集方法" tabindex="-1"><a class="header-anchor" href="#resultset-结果集方法"><span>ResultSet 结果集方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>boolean next()</td><td>判断结果集的下一条是否有数据，如果有数据返回 true，并把光标下移一位</td></tr><tr><td>int getInt(int i)</td><td>根据当前下标获取数据(1 tom 20：1 的下标 1，tom 下标 2，20 下标 3)</td></tr><tr><td>int getInt(String name)</td><td>根据当前字段名获取数据</td></tr><tr><td>String getString(int i)</td><td>根据当前下标获取数据</td></tr><tr><td>String getString(String name)</td><td>根据当前字段名获取数据</td></tr></tbody></table><h3 id="方法的使用" tabindex="-1"><a class="header-anchor" href="#方法的使用"><span>方法的使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token constant">JDBC</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DriverManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">ResultSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Statement</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> demo01 <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 注册驱动</span>
    <span class="token comment">// 已经过时，请弃用</span>
    <span class="token comment">// Class.forName(&quot;com.mysql.jdbc.Driver&quot;);</span>

    <span class="token comment">// 2. 获取数据库连接对象</span>
    <span class="token comment">// public static Connection getConnection(String url,String user,String password)</span>
    <span class="token comment">// public static Connection getConnection(String url)</span>
    <span class="token comment">// public static Connection getConnection(String url,java.util.Properties info)</span>
      <span class="token comment">/*
      Connection conn = DriverManager.getConnection(
          &quot;jdbc:mysql://localhost:3306/sister?serverTimezone=UTC&quot;,
          &quot;root&quot;,
          &quot;Sap@1q2w3e4r&quot;
      )
      */</span><span class="token punctuation">;</span>
    <span class="token comment">/*
    Connection conn = DriverManager.getConnection(
        &quot;jdbc:mysql://localhost:3306/sister?
        serverTimezone=UTC&amp;user=root&amp;password=Sap@1q2w3e4r&quot;
    );
    */</span>
    <span class="token class-name">Properties</span> pt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pt<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pt<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sap@1q2w3e4r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>&quot;jdbc<span class="token operator">:</span>mysql<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>
    localhost<span class="token operator">:</span><span class="token number">3306</span><span class="token operator">/</span>sister<span class="token operator">?</span>serverTimezone<span class="token operator">=</span><span class="token constant">UTC</span>&quot;<span class="token punctuation">,</span> pt<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3. 获取执行sql语句的对象</span>
    <span class="token comment">// 当前的写法有弊端，后续被弃用了，请放弃</span>
    <span class="token class-name">Statement</span> sta <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 4. 执行sql语句</span>
    <span class="token comment">// int executeUpdate()：增删改，返回实际影响的行数</span>
    <span class="token comment">// ResultSet executeQuery()：查</span>
    <span class="token comment">// boolean execute()：增删改查；底层使用，我们很少用；查询返回 true, 增删改返回 false</span>

    <span class="token keyword">int</span> i <span class="token operator">=</span> sta<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token string">&quot;insert into user values(4,&#39;tony&#39;, 22)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>

    <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> al <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> sta<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ResultSet 结果集方法</span>
    <span class="token comment">// boolean next()：判断结果集的下一条是否有数据，如果有数据返回true，并把光标下移一位</span>
    <span class="token comment">// int getInt(int i)：根据当前下标获取数据， 1 tom 20： 1的下标1，tom下标2，20下标3</span>
    <span class="token comment">// int getInt(String name)：根据当前字段名获取数据</span>
    <span class="token comment">// String getString(int i)：根据当前下标获取数据</span>
    <span class="token comment">// String getString(String name)：根据当前字段名获取数据</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> id <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>id <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 1 tom 20</span>
        <span class="token comment">// 2 jerry 20</span>
        <span class="token comment">// 3 rose 20</span>
        <span class="token comment">// 4 tony 22</span>

        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        al<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 5. 释放资源</span>
    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sta<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> u<span class="token operator">:</span> al<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// User{id=1, name=&#39;tom&#39;, age=20}</span>
        <span class="token comment">// User{id=2, name=&#39;jerry&#39;, age=20}</span>
        <span class="token comment">// User{id=3, name=&#39;rose&#39;, age=20}</span>
        <span class="token comment">// User{id=4, name=&#39;tony&#39;, age=22}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

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
    <span class="token keyword">return</span> <span class="token string">&quot;User{&quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;id=&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span>
            <span class="token string">&quot;, name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
            <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
            <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MySql/JDBC.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JDBC_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "JDBC.html.vue"]]);
const data = JSON.parse(`{"path":"/admin/Java/MySql/JDBC.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"JDBC","slug":"jdbc","link":"#jdbc","children":[{"level":3,"title":"JDBC 基本步骤","slug":"jdbc-基本步骤","link":"#jdbc-基本步骤","children":[]},{"level":3,"title":"获取数据库连接对象","slug":"获取数据库连接对象","link":"#获取数据库连接对象","children":[]},{"level":3,"title":"获取执行 sql 语句的对象","slug":"获取执行-sql-语句的对象","link":"#获取执行-sql-语句的对象","children":[]},{"level":3,"title":"执行 SQL 语句","slug":"执行-sql-语句","link":"#执行-sql-语句","children":[]},{"level":3,"title":"ResultSet 结果集方法","slug":"resultset-结果集方法","link":"#resultset-结果集方法","children":[]},{"level":3,"title":"方法的使用","slug":"方法的使用","link":"#方法的使用","children":[]}]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/JDBC.md","excerpt":"<h2>JDBC</h2>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// JDBC 最基础的用法</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">Exception</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 1. 注册驱动</span>\\n  <span class=\\"token comment\\">// 已经过时，请弃用</span>\\n\\n  <span class=\\"token comment\\">// 2. 获取数据库连接对象</span>\\n  <span class=\\"token class-name\\">Connection</span> conn <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">DriverManager</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getConnection</span><span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token string\\">\\"jdbc:mysql://localhost:3306/sister?serverTimezone=UTC\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"root\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"Sap@1q2w3e4r\\"</span>\\n  <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 3. 获取执行sql语句的对象</span>\\n  <span class=\\"token comment\\">// 有问题，请更换</span>\\n  <span class=\\"token class-name\\">Statement</span> sta <span class=\\"token operator\\">=</span> conn<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createStatement</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 4. 执行sql语句</span>\\n  <span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> sta<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">executeUpdate</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"insert into user values(3,'rose', 20)\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 1</span>\\n\\n  <span class=\\"token comment\\">// 5. 释放资源</span>\\n  rs<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  sta<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  conn<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}`);
export {
  JDBC_html as comp,
  data
};
