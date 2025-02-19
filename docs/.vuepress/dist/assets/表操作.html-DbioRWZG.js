import{_ as t,o as d,c as n,e as a}from"./app-CvP7wor-.js";const e={},r=a(`<h2 id="表操作" tabindex="-1"><a class="header-anchor" href="#表操作"><span>表操作</span></a></h2><table><thead><tr><th>语法</th><th>作用</th></tr></thead><tbody><tr><td>show tables;</td><td>查看当前数据库中的所有表</td></tr><tr><td>create table 表名(字段 1 数据类型, 字段 2 数据类型, ...)</td><td>创建新表</td></tr><tr><td>show create table 表名;</td><td>查看创建表的时的语句</td></tr><tr><td>desc 表名;</td><td>查看表结构</td></tr><tr><td>alter table 表名 add 字段 数据类型;</td><td>向表内新增一个字段</td></tr><tr><td>alter table 表名 change 原字段名 新字段名 数据类型;</td><td>修改字段名</td></tr><tr><td>alter table 表名 modify 字段 数据类型;</td><td>修改字段数据类型</td></tr><tr><td>alter table 表名 drop 字段名;</td><td>删除表内字段</td></tr><tr><td>rename table 原表名 to 新表名;</td><td>修改表名</td></tr><tr><td>drop table 表名;</td><td>删除表</td></tr></tbody></table><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> person<span class="token punctuation">(</span>
  name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  age <span class="token keyword">int</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见的数据类型" tabindex="-1"><a class="header-anchor" href="#常见的数据类型"><span>常见的数据类型</span></a></h3><table><thead><tr><th>类型</th><th>说明</th><th>备注</th></tr></thead><tbody><tr><td>int</td><td>整型</td><td>整数类型</td></tr><tr><td>decimal(5,2)</td><td>浮点型</td><td>整数位是 5 位，小数点后保留 2 位</td></tr><tr><td>date</td><td>日期型</td><td>年月日，新增时默认为 null</td></tr><tr><td>datetime</td><td>日期时间型</td><td>年月日时分秒，新增时默认为 null</td></tr><tr><td>timestamp</td><td>日期时间型</td><td>年月日时分秒，新增时默认为当前时间</td></tr><tr><td>varchar(20)</td><td>字符串</td><td>限制最多 20 个字符</td></tr><tr><td>char(4)</td><td>定长字符串</td><td>限制最多 4 个字符，字符串长度不足 4 时，用空格填充</td></tr><tr><td>blob</td><td>二进制数据</td><td>-</td></tr><tr><td>text</td><td>字符串</td><td>-</td></tr><tr><td>enmur</td><td>枚举类型</td><td>-</td></tr><tr><td>set</td><td>集合类型</td><td>-</td></tr><tr><td>tinyint</td><td>布尔型</td><td>-</td></tr></tbody></table>`,5),s=[r];function l(o,c){return d(),n("div",null,s)}const h=t(e,[["render",l],["__file","表操作.html.vue"]]),p=JSON.parse('{"path":"/admin/Java/MySql/%E8%A1%A8%E6%93%8D%E4%BD%9C.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"表操作","slug":"表操作","link":"#表操作","children":[{"level":3,"title":"常见的数据类型","slug":"常见的数据类型","link":"#常见的数据类型","children":[]}]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/表操作.md","excerpt":"<h2>表操作</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>语法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>show tables;</td>\\n<td>查看当前数据库中的所有表</td>\\n</tr>\\n<tr>\\n<td>create table 表名(字段 1 数据类型, 字段 2 数据类型, ...)</td>\\n<td>创建新表</td>\\n</tr>\\n<tr>\\n<td>show create table 表名;</td>\\n<td>查看创建表的时的语句</td>\\n</tr>\\n<tr>\\n<td>desc 表名;</td>\\n<td>查看表结构</td>\\n</tr>\\n<tr>\\n<td>alter table 表名 add 字段 数据类型;</td>\\n<td>向表内新增一个字段</td>\\n</tr>\\n<tr>\\n<td>alter table 表名 change 原字段名 新字段名 数据类型;</td>\\n<td>修改字段名</td>\\n</tr>\\n<tr>\\n<td>alter table 表名 modify 字段 数据类型;</td>\\n<td>修改字段数据类型</td>\\n</tr>\\n<tr>\\n<td>alter table 表名 drop 字段名;</td>\\n<td>删除表内字段</td>\\n</tr>\\n<tr>\\n<td>rename table 原表名 to 新表名;</td>\\n<td>修改表名</td>\\n</tr>\\n<tr>\\n<td>drop table 表名;</td>\\n<td>删除表</td>\\n</tr>\\n</tbody>\\n</table>"}');export{h as comp,p as data};
