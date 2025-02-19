## Spring 整合 MyBatis

> Spring 整合 MyBatis 主要是将 MyBatis 的 SqlSessionFactory 交给 Spring 管理，同时将 Mapper 接口的代理对象交给 Spring 管理。不再像以前一样在 xml 文件中配置及获取
>
> Spring 整合 MyBatis 又分成利用 SqlSessionTemplate 整合和利用 SqlSessionDaoSupport 整合(官网有案例)，注意各自需要的依赖

```xml
<!-- 主配置文件 -->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
  PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
  <!--别名-->
  <typeAliases>
    <package name="haha.pojo"/>
  </typeAliases>
  <!--其他配置：比如日志啥的-->
</configuration>
```

```xml
<!--Spring整合MyBatis文件，都是配置，所以不用再修改了-->
<?xml version="1.0" encoding="UTF-8"?>
<!--使用Spring(Ioc和Aop)来整合MyBatis-->
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd">
  <!--数据源的配置：使用Spring提供的JDBC(org.springframework.jdbc.datasource依赖)-->
  <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
    <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
    <property name="url" value="jdbc:mysql://localhost:3306/sister?serverTimezone=UTC"/>
    <property name="username" value="root"/>
    <property name="password" value="123456"/>
  </bean>
  <!--Spring中提供sqlSessionFactory-->
  <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
    <property name="dataSource" ref="dataSource"/>
    <!--MyBatis核心配置文件-->
    <property name="configLocation" value="classpath:mybatis-config.xml"/>
    <!--映射文件(*: 所有xml文件)-->
    <property name="mapperLocations" value="classpath:haha/mapper/*.xml"/>
  </bean>
  <!--SqlSessionTemplate: 如同sqlSession-->
  <bean id="sqlSession" class="org.mybatis.spring.SqlSessionTemplate">
    <!--只能使用构造依赖注入，没有set方法-->
    <constructor-arg index="0" ref="sqlSessionFactory"/>
  </bean>
</beans>
```

```xml
<!--多配置整合文件-->
<?xml version="1.0" encoding="UTF-8"?>
<!--使用Spring(Ioc和Aop)来整合MyBatis-->
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd">
  <import resource="spring-dao.xml"/>
  <!--
  SqlSessionTemplate：
  注入使用的依赖
  -->
  <bean id="userMapper2" class="haha.mapper.Impl.UserMapperImpl">
    <property name="sqlSession" ref="sqlSession"/>
  </bean>
  <!--
  SqlSessionDaoSupport：
  直接把sqlSessionFactory注入进来即可
  -->
  <bean id="userMapper" class="haha.mapper.Impl.UserMapperImpl2">
    <property name="sqlSessionFactory" ref="sqlSessionFactory"/>
  </bean>
</beans>
```

```java
// 实体类
package haha.pojo;

import lombok.Data;

@Data
public class User {
  private int id;
  private String name;
  private String age;
}
// 接口
package haha.mapper;
import haha.pojo.User;

import java.util.List;

public interface UserMapper {
  public List<User> selectUser();
}
// SqlSessionTemplate实现类
package haha.mapper.Impl;

import haha.mapper.UserMapper;
import haha.pojo.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;

import java.util.List;
@AllArgsConstructor
@Data
@NoArgsConstructor
public class UserMapperImpl implements UserMapper {
  // 之前所有的操作都是在SqlSession中操作，现在使用SqlSessionTemplate
  private SqlSessionTemplate sqlSession;
  @Override
  public List<User> selectUser() {
    UserMapper mapper = sqlSession.getMapper(UserMapper.class);
    return mapper.selectUser();
  }
}

// SqlSessionDaoSupport实现类
package haha.mapper.Impl;

import haha.mapper.UserMapper;
import haha.pojo.User;
import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.support.SqlSessionDaoSupport;

import java.util.List;

public class UserMapperImpl2 extends SqlSessionDaoSupport implements UserMapper {
  @Override
  public List<User> selectUser() {
    /*
    SqlSession sqlSession = getSqlSession();
    UserMapper mapper = sqlSession.getMapper(UserMapper.class);
    return mapper.selectUser();
    */
    // 上边的简化版
    return getSqlSession().getMapper(UserMapper.class).selectUser();
  }
}
```

```xml
<!--映射文件-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="haha.mapper.UserMapper">
  <select id="selectUser" resultType="user">
    select * from user
  </select>
</mapper>
```

```java
// 测试类
import haha.mapper.UserMapper;
import haha.pojo.User;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class MyTest {
@Test
public void test() {
ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
  UserMapper userMapper = ac.getBean("userMapper", UserMapper.class);
  List<User> users = userMapper.selectUser();
  for (User user : users){
    System.out.println(user);
  }
}
}
```
