<!-- @format -->

## Jsoup

> Jsoup 是一款用于处理真实世界 HTML 的 Java 库。它提供了一个非常方便的 API 来提取和操作数据，使用 DOM、CSS 和类似 jQuery 的方法。

### 引入依赖

```xml
<dependency>
    <groupId>org.jsoup</groupId>
    <artifactId>jsoup</artifactId>
    <version>1.12.1</version>
</dependency>
```

### 爬京东商品工具类

```java
package com.ths.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@Component
// 这是一个基础的爬页面的工具类
public class HtmlParseUtil {
  public static List<JDContent> parseJD(String keyword) throws IOException {
    // url
    String url = "https://search.jd.com/Search?keyword=" + keyword;
    // 解析网页
    Document document = Jsoup.parse(new URL(url), 30000);
    // 解析回来的就是浏览器document对象，js能用的就都能用了
    Element element = document.getElementById("J_goodsList");
    // 获取所有的li标签
    Elements elements = element.getElementsByTag("li");
    // 定义一个ArrayList
    ArrayList<JDContent> list = new ArrayList<>();
    for (Element el : elements) {
      // 获取图片地址(正常是获取src，懒加载获取source-data-lazy-img的)
      String img = el.getElementsByTag("img").eq(0).attr("source-data-lazy-img");
      // 获取标题
      String title = el.getElementsByClass("p-name").eq(0).text();
      // 获取价格
      String price = el.getElementsByClass("p-price").eq(0).text();
      // 添加到集合中
      JDContent content = new JDContent(title, price, img);
      list.add(content);
    }
    return list;
  }

  @Data
  @AllArgsConstructor
  @NoArgsConstructor
  public static class JDContent {
    private String title;
    private String price;
    private String img;
  }
}
```

```java
// 测试
@Test
void contextLoads5() throws IOException {
  HtmlParseUtil.parseJD("Java").forEach(System.out::println);
}
```
