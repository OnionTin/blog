<template><div><h2 id="jsr303-数据校验" tabindex="-1"><a class="header-anchor" href="#jsr303-数据校验"><span>jsr303 数据校验</span></a></h2>
<h3 id="常用注解" tabindex="-1"><a class="header-anchor" href="#常用注解"><span>常用注解</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">注解</th>
<th style="text-align:left">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">@Validated</td>
<td style="text-align:left">开启校验</td>
</tr>
<tr>
<td style="text-align:left">@Range(min=, max=)</td>
<td style="text-align:left">被指定的元素必须在合适的范围内</td>
</tr>
<tr>
<td style="text-align:left">@CreditCardNumber</td>
<td style="text-align:left">信用卡验证</td>
</tr>
<tr>
<td style="text-align:left">@Email</td>
<td style="text-align:left">邮箱地址验证</td>
</tr>
<tr>
<td style="text-align:left">@Pattern</td>
<td style="text-align:left">正则表达式验证</td>
</tr>
<tr>
<td style="text-align:left">@URL</td>
<td style="text-align:left">URL 地址验证</td>
</tr>
</tbody>
</table>
<h3 id="空检查" tabindex="-1"><a class="header-anchor" href="#空检查"><span>空检查</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">注解</th>
<th style="text-align:left">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">@Null</td>
<td style="text-align:left">验证对象是否为 null</td>
</tr>
<tr>
<td style="text-align:left">@NotNull</td>
<td style="text-align:left">验证对象是否不为 null，长度为 0 的字符串无法查验</td>
</tr>
<tr>
<td style="text-align:left">@NotBlank</td>
<td style="text-align:left">查验字符串是不是 null 还有被 trim 的长度是否大于 0，只对字符串，且会去掉前后空格</td>
</tr>
<tr>
<td style="text-align:left">@NotEmpty</td>
<td style="text-align:left">是否为 null 或者 empty</td>
</tr>
</tbody>
</table>
<h3 id="boolean-检查" tabindex="-1"><a class="header-anchor" href="#boolean-检查"><span>Boolean 检查</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">注解</th>
<th style="text-align:left">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">@AssertTrue</td>
<td style="text-align:left">验证 Boolean 对象是否为 true</td>
</tr>
<tr>
<td style="text-align:left">@AssertFalse</td>
<td style="text-align:left">验证 Boolean 对象是否为 false</td>
</tr>
</tbody>
</table>
<h3 id="长度检查" tabindex="-1"><a class="header-anchor" href="#长度检查"><span>长度检查</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">注解</th>
<th style="text-align:left">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">@Size(min=, max=)</td>
<td style="text-align:left">验证对象(Array,Collection,Map,String)长度是否在给定的范围内</td>
</tr>
<tr>
<td style="text-align:left">@Length(min=, max=)</td>
<td style="text-align:left">验证字符串长度是否在给定的范围内</td>
</tr>
</tbody>
</table>
<h3 id="日期检查" tabindex="-1"><a class="header-anchor" href="#日期检查"><span>日期检查</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">注解</th>
<th style="text-align:left">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">@Past</td>
<td style="text-align:left">验证 Date 和 Calendar 对象是否在当前时间之前</td>
</tr>
<tr>
<td style="text-align:left">@Future</td>
<td style="text-align:left">验证 Date 和 Calendar 对象是否在当前时间之后</td>
</tr>
<tr>
<td style="text-align:left">@Pattern</td>
<td style="text-align:left">验证 String 对象是否符合正则表达式的规则</td>
</tr>
</tbody>
</table>
<h3 id="数值检查" tabindex="-1"><a class="header-anchor" href="#数值检查"><span>数值检查</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">注解</th>
<th style="text-align:left">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">@Min</td>
<td style="text-align:left">不小于</td>
</tr>
<tr>
<td style="text-align:left">@Max</td>
<td style="text-align:left">不大于</td>
</tr>
<tr>
<td style="text-align:left">@DecimalMax</td>
<td style="text-align:left">不大于</td>
</tr>
<tr>
<td style="text-align:left">@DecimalMin</td>
<td style="text-align:left">不小于</td>
</tr>
<tr>
<td style="text-align:left">@Positive</td>
<td style="text-align:left">值必须&gt;0</td>
</tr>
<tr>
<td style="text-align:left">@PositiveOrZero</td>
<td style="text-align:left">值必须&gt;=0</td>
</tr>
<tr>
<td style="text-align:left">@Negative</td>
<td style="text-align:left">值必须&lt;0</td>
</tr>
<tr>
<td style="text-align:left">@NegativeOrZero</td>
<td style="text-align:left">值必须&lt;= 0</td>
</tr>
</tbody>
</table>
<h3 id="案例说明" tabindex="-1"><a class="header-anchor" href="#案例说明"><span>案例说明</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PropertySource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>validation<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Validated</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>validation<span class="token punctuation">.</span>constraints<span class="token punctuation">.</span></span><span class="token class-name">Email</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Component</span> <span class="token comment">// 注册bean</span>
<span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"classpath:yaml2.properties"</span><span class="token punctuation">)</span> <span class="token comment">// 加载指定的配置文件</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">"person"</span><span class="token punctuation">)</span> <span class="token comment">// 读取配置文件</span>
<span class="token annotation punctuation">@Validated</span> <span class="token comment">// 开启数据校验</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Email</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">"不是email格式啊"</span><span class="token punctuation">)</span> <span class="token comment">// @Email：email格式校验</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Boolean</span> happy<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> books<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> list<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启校验后，如果不通过，编译时会报错，如下图：
<img src="@source/admin/Java/SpringBoot/imgs/303校验.jpg" alt="303校验.jpg"></p>
</div></template>


