> 使用 jackson-databind 处理数据

```xml
<!-- 配置文件 -->
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
  <mvc:annotation-driven/>
  <bean
    class="org.springframework.web.servlet.view.InternalResourceViewResolver"
    id="InternalResourceViewResolver">
    <property name="prefix" value="/WEB-INF/jsp/"/>
    <property name="suffix" value=".jsp"/>
  </bean>
</beans>
```

```java
// JsonController.java
package com.haha.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.haha.pojo.User;
import com.haha.utils.JsonUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/json")
public class JsonController {
  @RequestMapping(value = "/j1", produces = {"application/json;charset=utf-8"})
  @ResponseBody
  public String json1() throws JsonProcessingException {
    ObjectMapper mapper = new ObjectMapper();
    User user = new User(1,"小明",23);
    String str = mapper.writeValueAsString(user);
    return str;
  }
  // 返回json
  @RequestMapping("/j2")
  @ResponseBody // 让当前的方法不返回视图，只返回json数据
  public String json2() throws JsonProcessingException {
    ObjectMapper mapper = new ObjectMapper();
    User user = new User(1,"中文",23);
    String str = mapper.writeValueAsString(user);
    return str;
  }

  // 返回数组(方法1)
  @RequestMapping("/j3")
  @ResponseBody // 让当前的方法不返回视图，只返回json数据
  public String json3() throws JsonProcessingException {
    User user1 = new User(1,"中文",23);
    User user2 = new User(1,"中文",23);
    User user3 = new User(1,"中文",23);
    User user4 = new User(1,"中文",23);

    List userList = new ArrayList();
    userList.add(user1);
    userList.add(user2);
    userList.add(user3);
    userList.add(user4);

    String str = new ObjectMapper().writeValueAsString(userList);
    return str;
  }

  // 返回时间戳
  @RequestMapping("/j4")
  @ResponseBody
  public String json4() throws JsonProcessingException {
    // 默认的生成的是时间戳
    Date date = new Date();
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    return new ObjectMapper().writeValueAsString(sdf.format(date));
  }

  // 时间戳工具类
  @RequestMapping("/j5")
  @ResponseBody
  public String json5() throws JsonProcessingException {
    Date date = new Date();
    return JsonUtil.getJson(date, "yyyy-MM-dd HH:mm:ss");
  }

  // 返回数组(方法2-使用封装的工具类)
  @RequestMapping("/j6")
  @ResponseBody
  public String json6() throws JsonProcessingException {
    User user1 = new User(1,"中文",23);
    User user2 = new User(1,"中文",23);
    User user3 = new User(1,"中文",23);
    User user4 = new User(1,"中文",23);

    List userList = new ArrayList();
    userList.add(user1);
    userList.add(user2);
    userList.add(user3);
    userList.add(user4);

    return JsonUtil.getJson(userList);
  }
}


// User.java
package com.haha.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class User {
  private int id;
  private String name;
  private int age;
}


// JsonUtil
package com.haha.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import java.text.SimpleDateFormat;

// Json工具类 - 时间戳
// params : obj - 要转换的对象, dateFormat - 时间格式
public class JsonUtil {
  public static String getJson(Object obj, String dateFormat) {
    ObjectMapper mapper = new ObjectMapper();
    mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
    SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);
    mapper.setDateFormat(sdf);
    try {
      return mapper.writeValueAsString(obj);
    } catch (JsonProcessingException e) {
      e.printStackTrace();
    }
    return null;
  }

  // 默认返回json
  public static String getJson(Object obj) throws JsonProcessingException {
    ObjectMapper mapper = new ObjectMapper();
    return mapper.writeValueAsString(obj);
  }
}
```
