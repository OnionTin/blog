## XML 概述

什么是 XML，和 HTML 有什么区别？

XML 指可扩展标记语言。

XML 和 HTML 的区别：

- XML 不是 HTML 的替代。
- XML 传输和存储数据，常用作配置文件；HTML 用来展示页面及显示数据。
- XML 标签可以扩展，可以自定义；HTML 标签是预定义的。
- XML 文件后缀是 .xml；HTML 文件后缀是 .html；都可以用浏览器打开检查。

### XML 语法

- XML 有且只有一个根元素；标签之间必须正确嵌套；标签必须正确闭合，语法严谨，错一点都不行
- 多个属性值可以写在一起，用空格分隔；属性值必须用引号(单引号或者双引号都行)括起来。
- XML 标签对大小写敏感。
- XML 注释使用 <!-- -->。
- 转义字符 < 用&lt;，> 用&gt;，& 用&amp;，空格用&nbsp;。
- 多行转移需要使用 CDATA 标签，CDATA 标签可以防止 XML 解析器将某些字符进行解析。
- XML 第一行必须是文档声明，其中 version 属性必须有值，encoding 编码格式可以确少。

```xml
<!-- 语法小案例 -->
<?xml version="1.0" encoding="UTF-8"?>
<students>
    <student id="001">
        <name>张三</name>
        <age>18</age>
    </student>
    <student id="002">
        <name>李四</name>
        <age>19</age>
    </student>
    <_a.a>可以下划线开头</_a.a>
    <aaa>大小写一直，用大全大，用小全小</aaa>
    <aaa>
      &lt;a&gt;单行转义符&lt;/a&gt;
      <![CDATA[
        <a>多行转义符</a>
        <a>多行转义符</a>
      ]]>
    </aaa>
</students>
```

### XML 命名规则

标签名、属性名、实体名称等名称，都遵循命名规则：

- 名称可以包含字母、数字以及其他的字符
- 名称不能以数字或者标点符号开始
- 名称不能以字母 xml（或者 XML、Xml 等等）开始
- 名称不能包含空格

### XML 和 properties

- XML 配置文件可以和 properties 配置文件一起使用。
- XML 配置文件比 properties 配置文件更加直观，易于阅读。
- XML 可以配置多项，而 properties 只能配置一项。
- XML 配置文件可以包含注释、多行值、数据处理、条件判断、动态更新等，而 properties 配置文件不包含。
- XML 配置文件可以支持数据库连接池的配置，而 properties 配置文件不支持数据库连接池的配置。

```xml
<!-- 数据库配置文件案例 jdbc.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<config>
    <jdbc id="mysql">
        <driver>com.mysql.jdbc.Driver</driver>
        <url>jdbc:mysql://localhost:3306/test</url>
        <username>root</username>
        <password>root</password>
    </jdbc>
    <jdbc id="oracle">
        <driver>com.oracle.jdbc.Driver</driver>
        <url>jdbc:oracle://localhost:3306/test</url>
        <username>root</username>
        <password>root</password>
    </jdbc>
</config>
```