## XML 约束

> schema 约束：xsd 格式的约束文档 (推荐使用)
>
> dtd 约束：dtd 格式的约束文档

#### 根据 dtd 文档编写 xml

> ELEMENT：元素；#PCDATA：标签属性
>
> ATTLIST：属性；CDATA：元素属性；#FIXED：固定值；#REQUIRED：必须有值；#IMPLIED：可选值

案例 1：

```dtd
  <!-- book.dtd -->
  <!ELEMENT 书架 (书+)>
    <!ELEMENT 书 (书名, 作者, 价格)>
      <!ELEMENT 书名 (#PCDATA)>
      <!ELEMENT 作者 (#PCDATA)>
      <!ELEMENT 价格 (#PCDATA)>
  <!ATTLIST 书
    出版社 CDATA "新华书店"
    属性1 CDATA #FIXED "不能修改"
    编号 ID #REQUIRED
  >
  <!ATTLIST 作者
    性别(男|女) #IMPLIED
    年龄(18|19|20) #IMPLIED
  >
```

```xml
<!-- book.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE 书架 SYSTEM "book.dtd">
<书架>
    <书 编号="001" 出版社="新华出版社" 属性1="不能修改">
        <书名>Java 编程思想</书名>
        <作者 性别="男">Bruce Eckel</作者>
        <价格>100</价格>
    </书>
    <书 编号="002" 出版社="新华出版社" 属性1="不能修改">
        <书名>Java 核心技术</书名>
        <作者 年龄=20"">Cay S. Horstmann</作者>
        <价格>100</价格>
    </书>
</书架>
```

案例 2：

```dtd
<!-- student.dtd -->
<!ELEMENT students (student*)>
<!ELEMENT student (name, ages,sex)>
<!ELEMENT student name(#PCDATA)>
<!ELEMENT student age(#PCDATA)>
<!ELEMENT student sex(#PCDATA)>
<!ATTLIST student
    number ID #REQUIRED
  >
```

```xml
<!-- student.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE students SYSTEM "student.dtd">
<students>
  <student number="001">
    <name>张三</name>
    <ages>20</ages>
    <sex>男</sex>
  </student>
  <student number="002">
    <name>李四</name>
    <ages>20</ages>
    <sex>女</sex>
  </student>
</students>
```

#### 根据 xsd 文档编写 xml

> schema 约束文档，自身也是一个 xml，其中，根标签的属性是引入的 xsd 的地址
>
> xml 中 xmlns 的值：xsd 文档中 targetNamespace 的值，默认名称空间；
>
> xml 中 xmlns:xsi 的值(xsi: 不固定，别名)：xsd 文档中 xsi:schemaLocation 的值 + "-instance"；
>
> xml 中 xsi(xsi: 同上):schemaLocation 的值：xsd 文档中 targetNamespace 的值 + xsd 文件;

案例 1：

```xsd
<!-- book.xsd -->
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  targetNamespace="xxx"
  elementFormDefault="qualified"
  >
  <xs:element name="书架">
    <!-- xs:complexType：复杂的类型 -->
    <xs:complexType>
      <!-- xs:sequence：要求其子元素必须按照顺序 -->
      <xs:sequence>
        <!-- maxOccurs="unbounded" 子元素可以出现无限次 -->
        <xs:element name="书" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <!-- xs:element name="xxx" type="yyy" xxx：元素名称 yyy：元素类型 -->
              <xs:element name="书名" type="xs:string"/>
              <xs:element name="作者" type="xs:string"/>
              <xs:element name="价格" type="xs:int"/>
            </xs:sequence>
            <xs:attribute name="编号" type="xs:int" use="required"/>
            <xs:attribute name="出版社" type="xs:string" use="required"/>
            <xs:attribute name="属性1" type="xs:string" use="required"/>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

```xml
<!-- book.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<书架 xmlns="xxx"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="xxx book.xsd">
        <书>
          <书名>Java 编程思想</书名>
          <作者>Bruce Eckel</作者>
          <价格>100</价格>
          <编号>1</编号>
          <出版社>机械工业出版社</出版社>
          <属性1>Java 编程思想</属性1>
        </书>
        <书>
          <书名>Effective Java</书名>
          <作者>Joshua Bloch</作者>
          <价格>100</价格>
          <编号>2</编号>
        </书>
</书架>
```

案例 2：

```xsd
<!-- shiporder.xsd -->

<?xml version="1.0" encoding="UTF-8"?>
<xs:schema
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  targetNamespace="http:www.baidu.com"
  elementFormDefault="qualified"
  >
  <xs:element name="shiporder">
    <xs:complexType>
      <xs:element name="orderpersonal" type="xs:string"/>
      <xs:element name="shipto">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="name" type="xs:string"/>
            <xs:element name="address" type="xs:string"/>
            <xs:element name="city" type="xs:string"/>
            <xs:element name="country" type="xs:string"/>
          </xs:sequence>
        </xs:complexType>
      </xs:element>
      <xs:element name="item" maxOccurs="unbounded">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="title" type="xs:string"/>
            <xs:element name="note" type="xs:string" minOccurs="0"/>
            <xs:element name="quantity" type="xs:positiveInteger"/>
            <xs:element name="price" type="xs:decimal"/>
          </xs:sequence>
          <xs:attribute name="id" type="xs:string" use="required"/>
        </xs:complexType>
      </xs:element>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

```xml
<!-- shiporder.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<shiporder
  xmlns="http:www.baidu.com"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http:www.baidu.com shiporder.xsd"
  >
  <orderpersonal>John Smith</orderpersonal>
  <shipto>
    <name>Ola Nordmann</name>
    <address>Langgt 23</address>
    <city>4000 Stavanger</city>
    <country>Norway</country>
  </shipto>
  <item>
    <title>Basketball</title>
    <note>Basketball is a physical sport</note>
    <quantity>1</quantity>
    <price>100</price>
    <id>BK001</id>
  </item>
  <item>
    <title>Gaming Console</title>
    <quantity>1</quantity>
    <price>100</price>
    <id>GC001</id>
  </item>
</shiporder>
```
