## 控制

> 通过下面的案例，理解 IoC 的控制，即通过 Spring 容器来管理对象，而不是我们手动去创建对象。

```xml
<!-- bean.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd">
<!--
使用Spring来创建对象，在Spring中这些都称为bean
正常我们创建对象：
Hello hello = new Hello();
类型  变量名 = new 类名();
  id: 唯一标识符，即变量名
  class: 指定这个bean对象的类型，即类名
  name: 别名(调用时也可以用别名来获取该对象)
  property: 对bean对象中的属性进行赋值
    name: 属性的名称(类中的属性)
    value: 属性的值
    ref: 引用另一个bean对象
-->
<bean id="hello" class="com.haha.pojo.Hello" name="hello2, h2, h3">
  <property name="str" value="spring-hello"/>
</bean>
</beans>
```

```java
// Hello
package com.haha.pojo;

public class Hello {
  private String str;

  public String getStr() {
    return str;
  }

  public void setStr(String str) {
    this.str = str;
  }
}
```

```java
// TestBean
import com.haha.pojo.Hello;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestBean {
  public static void main(String[] args) {
    // 获取Spring上下文对象
    ApplicationContext ac = new ClassPathXmlApplicationContext("bean.xml");
    // 我们的对象现在都在Spring中进行管理了，获取的时候，直接根据id获取就可以了
    Hello str = (Hello)ac.getBean("hello");
    System.out.println(str.getStr());
  }
}
```
