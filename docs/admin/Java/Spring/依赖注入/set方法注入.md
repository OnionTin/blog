## set 方法注入

> 依赖注入：实际都是 set 注入

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd">

  <bean id="address" class="com.haha.pojo.Address">
    <property name="address" value="地址"/>
  </bean>
  <bean id="student" class="com.haha.pojo.Student">
    <!--普通值注入: value-->
    <property name="name" value="姓名"/>
    <!--Bean注入：ref-->
    <property name="address" ref="address"/>
    <!--数组注入：-->
    <property name="books">
      <array>
        <value>三国演义</value>
        <value>西游记</value>
      </array>
    </property>
    <!--list注入：-->
    <property name="hobbies">
      <list>
        <value>唱歌</value>
        <value>跳舞</value>
      </list>
    </property>
    <!--map注入：-->
    <property name="cards">
      <map>
        <entry key="身份证" value="123456"/>
        <entry key="银行卡" value="123456789"/>
      </map>
    </property>
    <!--set注入：-->
    <property name="games">
      <set>
        <value>LOL</value>
        <value>王者荣耀</value>
      </set>
    </property>
    <!--空指针注入-->
    <property name="wife" value=""/>
    <!--Properties注入：-->
    <property name="info">
      <props>
        <prop key="学号">123456</prop>
        <prop key="性别">男</prop>
      </props>
    </property>
  </bean>
</beans>
```

```java
// Student
package com.haha.pojo;

import lombok.Data;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

@Data
public class Student {
  private String name;
  private Address address;
  private String[] books;
  private List<String> hobbies;
  private Map<String, String> cards;
  private Set<String> games;
  private String wife;
  private Properties info;
}


// Address
package com.haha.pojo;

import lombok.Data;

@Data
public class Address {
  private String address;
}

// Test
import com.haha.pojo.Address;
import com.haha.pojo.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class Test {
  public static void main(String[] args){
    ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml");
    Student student = (Student) context.getBean("student");

    System.out.println(student.getName()); // 姓名
    Address address = student.getAddress();
    System.out.println(address.getAddress()); // 地址

    String[] books = student.getBooks();
    for (String book : books) {
      System.out.println(book);
      // 三国演义
      // 西游记
    }

    List<String> hobbies = student.getHobbies();
    for (String hobby : hobbies){
      System.out.println(hobby);
      // 唱歌
      // 跳舞
    }

    Map<String, String> cards = student.getCards();
    for (String key : cards.keySet()){
      System.out.println(key + " : " + cards.get(key));
      // 身份证 : 123456
      // 银行卡 : 123456789
    }

    Set<String> games = student.getGames();
    for (String game : games){
      System.out.println(game);
      // LOL
      // 王者荣耀
    }

    System.out.println(student.getWife()); // 空格

    Properties info = student.getInfo();
    for (String key : info.stringPropertyNames()){
      System.out.println(key + " : " + info.getProperty(key));
      // 学号 : 123456
      // 性别 : 男
    }
  }
}
```
