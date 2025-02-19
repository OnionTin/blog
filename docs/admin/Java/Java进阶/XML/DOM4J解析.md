## DOM4J 解析

需要先导入相关的 jar 包

### DOM4J 解析的步骤：

1. 创建一个 SAXReader 对象
2. 调用 read 方法读取 XML 文件，并返回 Document 对象
3. 获取根元素
4. 获取子元素
5. 获取属性
6. 获取文本内容
7. 遍历

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

### 相关的常用 api

SAXReader：

| 方法                          | 作用                                                  |
| ----------------------------- | ----------------------------------------------------- |
| Document read(InputStream is) | 将配置文件加载进内存，转成 dom 树，获取 document 对象 |

Document：

| 方法                     | 作用           |
| ------------------------ | -------------- |
| Element getRootElement() | 获取根元素对象 |

xpath：(xpath：//标签)

| 方法                                      | 作用                              |
| ----------------------------------------- | --------------------------------- |
| List&lt;Node&gt;selectNodes(String xpath) | 根据 xpath 表达式获取多个节点对象 |
| Node selectSingleNode(String xpath)       | 根据 xpath 表达式获取单个节点对象 |

Element：

| 方法                                      | 作用                           |
| ----------------------------------------- | ------------------------------ |
| List&lt;Element&gt; elements(String name) | 获取指定名称的子节点对象集合   |
| Element element(String name)              | 获取指定名称的第一个子节点对象 |
| String getText()                          | 获取当前节点的文本内容         |
| String getName()                          | 获取当前节点的名称             |
| String attributeValue(String name)        | 获取指定名称的属性值           |
| String elementText(String name)           | 获取指定名称的子节点文本内容   |

node：

| 方法             | 作用                 |
| ---------------- | -------------------- |
| String getName() | 获取节点对象名字     |
| String getText() | 获取节点对象标签文本 |

### DOM4J 解析-标签选择器方式

```java
package com.api.XML;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import java.io.InputStream;
import java.util.List;

//xml解析
public class XmlDemo01 {
    public static void main(String[] args) throws Exception {
        // 创建解析器对象
        SAXReader reader = new SAXReader();
        // 加载配置文件：配置文件在 classpath 类路径下
        InputStream inputStream = XmlDemo01.class.getResourceAsStream("/student.xml");
        if (inputStream != null) {
            // 加载配置文件，获取Document对象
            Document document = reader.read(inputStream);
            // 关闭输入流
            inputStream.close();
            // 获取到根节点对象
            Element rootElement = document.getRootElement();
            // 获取跟标签下的所有的子标签对象
            List<Element> elements = rootElement.elements();
            for (Element element : elements) {
                List<Element> eles = element.elements();
                // 获取id属性的值
                String id = element.attributeValue("id");
                System.out.println("id:"+id);
                // 获取标签文本值
                for (Element ele:eles) {
                    System.out.println(ele.getName()+":"+ele.getText());
                    // 结果：
                    // id:9527
                    // name:张三
                    // age:20
                    // sex:男
                    // id:9528
                    // name:李四
                    // age:20
                    // sex:女
                }
            }
        } else {
            System.out.println("无法找到student.xml文件");
        }
    }
}
```

### DOM4J 解析-xpath 方式(更便捷)

```java
package com.api.XML;

import org.dom4j.Document;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;

import java.io.InputStream;
import java.util.List;

public class XmlDemo02 {
    public static void main(String[] args) throws Exception {
        // 创建解析器对象
        SAXReader reader = new SAXReader();
        // 加载配置文件：配置文件在 classpath 类路径下
        InputStream inputStream = XmlDemo01.class.getResourceAsStream("/student.xml");
        if (inputStream != null) {
            // 加载配置文件，获取Document对象
            Document document = reader.read(inputStream);
            // 关闭输入流
            inputStream.close();
            // 使用xpath解析（//BBB：得到所有的BBB节点）
            List<Node> nodes_student = document.selectNodes("//student");
            // 遍历所有的student节点
            for (Node node : nodes_student) {
                String name = node.getName();
                System.out.println(name);
                // 结果：
                // student
                // student
            }
            List<Node> nodes_name = document.selectNodes("//name");
            // 遍历所有的name节点
            for (Node node : nodes_name) {
                String name = node.getName();
                String value = node.getText();
                System.out.println(name + ":" + value);
                // 结果：
                // name:张三
                // name:李四
            }

            // 获取单个节点
            Node age_node_2 = document.selectSingleNode("(//age)[2]");
            System.out.println(age_node_2.getName() + ":" + age_node_2.getText());
            // 结果：
            // age：20
        } else {
            System.out.println("无法找到student.xml文件");
        }
    }
}
```
