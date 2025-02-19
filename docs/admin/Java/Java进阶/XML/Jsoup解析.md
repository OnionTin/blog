## Jsoup 解析

### 常用 api

Jsoup：

| 方法                                               | 作用     |
| -------------------------------------------------- | -------- |
| static Document parse(File in, String charsetName) | 解析文件 |

Document：

| 方法                                                           | 作用                |
| -------------------------------------------------------------- | ------------------- |
| Element getElementById(String id)                              | 根据 id 获取元素    |
| Elements getElementsByTag(String tag)                          | 根据标签获取元素    |
| Elements getElementsByClass(String className)                  | 根据 class 获取元素 |
| Elements getElementsByAttribute(String key)                    | 根据属性获取元素    |
| Elements getElementsByAttributeValue(String key, String value) | 根据属性值获取元素  |

Element：

| 方法                    | 作用       |
| ----------------------- | ---------- |
| String id()             | 获取 id    |
| String attr(String key) | 获取属性值 |
| String text()           | 获取文本   |
| String html()           | 获取 html  |

JXPath：

| 方法                                     | 作用         |
| ---------------------------------------- | ------------ |
| List&lt;JXNode&gt; selectN(String xpath) | 获取多个元素 |
| JXNode selectOne(String xpath)           | 获取单个元素 |

JXNode：

| 方法                 | 作用               |
| -------------------- | ------------------ |
| Element getElement() | 将节点转成元素对象 |
| String name()        | 获取标签名         |
| String text()        | 获取文本           |

### Jsoup 解析-标签选择器方式

```java
package com.api.XML;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.File;
import java.net.URL;

// jsoup，使用标签选择器解析xml
public class XmlDemo03 {
    public static void main(String[] args) throws Exception {
        // 获取document对象
        /*
        URL url = XmlDemo03.class.getClassLoader().getResource("student.xml");
        String path = url.getPath();
        Document document = Jsoup.parse(new File(path), "utf-8");
        */

        Document document = Jsoup.parse(
            new File(
                XmlDemo03.class.getClassLoader().getResource("student.xml").getPath()
            ),
            "utf-8"
        );
        // System.out.println(document);

        // 使用选择器方式获取标签对象和文本
        Elements elements1 = document.select("student");
        for (Element e : elements1) {
            System.out.println(e.getElementsByTag("name").text());
            // 结果：
            // 张三
            // 李四
        }

        Elements elements = document.getElementsByTag("student");
        Element element = document.getElementById("9527");
        System.out.println(element);
        // 结果：
        // <student id="9527">
        // <name>
        //  张三
        // </name>
        // <age>
        //  20
        // </age>
        // <sex>
        //  男
        // </sex>
        // </student>

        for (Element e : elements) {
            System.out.println(e.getElementsByTag("name").text());
            // 结果：
            // 张三
            // 李四
        }
    }
}
```

### Jsoup 解析-xpath 方式

```java
package com.api.XML;

import cn.wanghaomiao.xpath.model.JXDocument;
import cn.wanghaomiao.xpath.model.JXNode;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.File;
import java.util.List;

public class XmlDemo04 {
    public static void main(String[] args) throws Exception {
        // 获取document 对象
        Document document = Jsoup.parse(
            new File(
                XmlDemo03.class.getClassLoader().getResource("student.xml").getPath()
            ),
            "utf-8"
        );
        // System.out.println(document);

        // 使用xpath方式获取标签对象和文本
        JXDocument jxDocument = new JXDocument(document);

        // 获取想要的标签对象
        JXNode jxNode_1 = jxDocument.selNOne("//name");
        System.out.println(jxNode_1.getElement().text());
        // 结果：
        // 张三

        List<JXNode> jxNodes = jxDocument.selN("//student/name");
        for (JXNode jxNode : jxNodes) {
            System.out.println(jxNode.getElement().text());
            // 结果：
            // 张三
            // 李四
        }
    }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--学生信息配置文件-->
<students>
  <student id="9527">
    <name>张三</name>
    <age>20</age>
    <sex>男</sex>
  </student>
  <student id="9528">
    <name>李四</name>
    <age>20</age>
    <sex>女</sex>
  </student>
</students>
```
