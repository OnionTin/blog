## fastjson

> 阿里巴巴推出的一款插件

| 方法                  | 作用                    |
| --------------------- | ----------------------- |
| `JSON.toJSONString()` | java 对象转 json 字符串 |
| `JSON.parseObject()`  | json 字符串转 java 对象 |
| `JSON.parseArray()`   | json 字符串转 java 集合 |
| `JSON.toJavaObject()` | json 字符串转 java 对象 |
| `JSON.parse()`        | json 字符串转 java 对象 |

## 常用注解

| 注解                              | 作用                |
| --------------------------------- | ------------------- |
| `@JSONField`                      | json 字段名映射     |
| `@JSONType`                       | json 类型映射       |
| `@JSONField(serialize = false)`   | json 字段不序列化   |
| `@JSONField(deserialize = false)` | json 字段不反序列化 |

### 案例

```java
// FastJsonController
package com.haha.controller;

import com.alibaba.fastjson.JSON;
import com.haha.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/fastjson")
public class FastJsonController {
  @RequestMapping("/f1")
  @ResponseBody
  public String f1(){
    User u1 = new User("小明", 18, "男");
    User u2 = new User("小光", 20, "女");
    User u3 = new User("大道", 18, "男");

    List<User> users = new ArrayList<User>();
    users.add(u1);
    users.add(u2);
    users.add(u3);

    return JSON.toJSONString(users);
  }
}

// User
package com.haha.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class User {
  private String name;
  private int age;
  private String sex;
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:mvc="http://www.springframework.org/schema/mvc"
  xmlns:context="http://www.springframework.org/schema/context"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd
  http://www.springframework.org/schema/mvc
  https://www.springframework.org/schema/mvc/spring-mvc.xsd
  http://www.springframework.org/schema/context
  https://www.springframework.org/schema/context/spring-context.xsd">

  <context:component-scan base-package="com.haha.controller"/>

  <!-- Json乱码问题配置 -->
  <mvc:annotation-driven>
    <mvc:message-converters register-defaults="true">
      <!--消息转化机制-->
      <bean class="org.springframework.http.converter.StringHttpMessageConverter">
        <constructor-arg value="UTF-8"/>
      </bean>
      <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
        <property name="objectMapper">
          <bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean">
            <property name="failOnEmptyBeans" value="false"/>
          </bean>
        </property>
      </bean>
    </mvc:message-converters>
  </mvc:annotation-driven>

  <mvc:default-servlet-handler/>
  <bean
    class="org.springframework.web.servlet.view.InternalResourceViewResolver"
    id="InternalResourceViewResolver"
  >
    <property name="prefix" value="/WEB-INF/jsp/"/>
    <property name="suffix" value=".jsp"/>
  </bean>
</beans>
```
