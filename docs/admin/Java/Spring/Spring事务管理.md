## 事务

> 把一组业务放在一起，<font color=red>要么全部成功，要么全部失败</font>。
>
> 事务在项目开发中十分重要，涉及数据一致性，不能马虎。
>
> <font color=red>确保完整性和一致性</font>

### 事物的 ACID 原则

1. 原子性（Atomicity）: 事务中的所有操作要么全部成功，要么全部失败。
2. 一致性（Consistency）: 事务执行之前和执行之后都必须处于一致性状态。
3. 隔离性（Isolation）: 多个业务可能同时操作一个资源，事务之间不能互相影响。
4. 持久性（Durability）: 事务一旦提交，结果就会永久的保存在数据库中，不可逆。

### Spring 中的事务

1. 编程式事务管理：通过编程的方式实现事务管理。
2. 声明式事务管理：Spring 中通过 AOP 的方式实现声明式事务管理。

```java
// 实体类
package haha.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
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
 public int addUser(User user);
 public int deleteUser(int id);
}

// 实现类(SqlSessionDaoSupport整合)
package haha.mapper.Impl;

import haha.mapper.UserMapper;
import haha.pojo.User;
import org.mybatis.spring.support.SqlSessionDaoSupport;

import java.util.List;

public class UserMapperImpl extends SqlSessionDaoSupport implements UserMapper {
  @Override
  public List<User> selectUser() {
    User user = new User(3,"事务","20");
    UserMapper mapper = getSqlSession().getMapper(UserMapper.class);
    mapper.addUser(user);
    mapper.deleteUser(3);
    return mapper.selectUser();
  }

  @Override
  public int addUser(User user) {
    return getSqlSession().getMapper(UserMapper.class).addUser(user);
  }

  @Override
  public int deleteUser(int id) {
    return getSqlSession().getMapper(UserMapper.class).deleteUser(id);
  }
}
```

```xml
<!-- 映射文件 -->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
  PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="haha.mapper.UserMapper">
  <select id="selectUser" resultType="user">
    select * from user
  </select>
  <insert id="addUser" parameterType="user">
    insert into user(id,name,age) values(#{id},#{name},#{age})
  </insert>
  <delete id="deleteUser" parameterType="int">
    delete from user where id = #{id}
  </delete>
</mapper>
```

```xml
<!-- xml整合文件 -->
<?xml version="1.0" encoding="UTF-8"?>
<!--使用Spring(SqlSessionDaoSupport)来整合MyBatis-->
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd">
  <import resource="spring-dao.xml"/>
  <!--注入依赖-->
  <bean id="userMapper" class="haha.mapper.Impl.UserMapperImpl">
    <property name="sqlSessionFactory" ref="sqlSessionFactory"/>
  </bean>
</beans>
```

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
<!-- 配置文件 -->
<?xml version="1.0" encoding="UTF-8"?>
<!--使用Spring(Ioc和Aop)来整合MyBatis，这写配置就不再修改了-->
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:aop="http://www.springframework.org/schema/aop"
  xmlns:tx="http://www.springframework.org/schema/tx"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd
  http://www.springframework.org/schema/aop
  https://www.springframework.org/schema/aop/spring-aop.xsd
  http://www.springframework.org/schema/tx
  http://www.springframework.org/schema/tx/spring-tx.xsd">
  <!--数据源的配置：使用Spring提供的JDBC(org.springframework.jdbc.datasource依赖)-->
  <bean
    id="dataSource"
    class="org.springframework.jdbc.datasource.DriverManagerDataSource"
  >
    <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
    <property
      name="url"
      value="jdbc:mysql://localhost:3306/sister?serverTimezone=UTC"
    />
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
  <!--配置声明式事务-->
  <bean
    id="transactionManager"
    class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <!--可以用构造依赖注入，也可以使用set方法，下边是使用set方法-->
    <property name="dataSource" ref="dataSource"/>
  </bean>
  <!--结合Aop实现事务通知-->
  <tx:advice id="txAdvice" transaction-manager="transactionManager">
    <tx:attributes>
      <!--
        给哪些方法配置事务
        name：*代表所有方法(add或者delete等方法)
        propagation: 传播策略(一般使用REQUIRED)
      -->
      <tx:method name="*" propagation="REQUIRED"/>
    </tx:attributes>
  </tx:advice>
  <!--配置事务的切入-->
  <aop:config>
    <!-- 切入点 -->
    <aop:pointcut id="txPointCut" expression="execution(* haha.mapper.*.*(..))"/>
    <!--  -->
    <aop:advisor advice-ref="txAdvice" pointcut-ref="txPointCut"/>
  </aop:config>
</beans>
```
