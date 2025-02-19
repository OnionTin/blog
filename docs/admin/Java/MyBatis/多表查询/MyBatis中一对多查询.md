## MyBatis 中一对一查询(<font color=red>collection</font>)

> 一对多查询：即一个用户有很多个电脑，如果查询 user 的时候，也要查出其 computer，从结果上看是查询一个及其多个，这种在 MyBatis 中叫一对多或者多对一。

### 查询所有的用户及其名下的所有电脑

```xml
<!--User.xml-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
  <!--方式一-->
  <resultMap id="userAndComputerMap" type="user">
    <id column="id" property="id"/>
    <result column="name" property="name"/>
    <result column="age" property="age"/>
    <!--
    collection：一对多关系，association：一对一
    property：要查询数值的字段是computers
    column：要根据id去查
    ofType：集合中存放的类型，与association中的javaType有一点区别
    ofType：ofType是集合中存放的类型，javaType是集合的类型
    -->
    <collection property="computers" column="id" ofType="computer">
      <id column="c_id" property="id"/>
      <result column="c_name" property="name"/>
      <result column="uid" property="uid"/>
    </collection>
  </resultMap>
  <select id="findUserAndComputer" resultMap="userAndComputerMap">
    select
      u.*, c.id c_id, c.name c_name, c.uid
      from user u, computer c
      where u.id = c.uid
  </select>
  <!--方式二-->
  <resultMap id="userAndComputerMap" type="user">
    <id column="id" property="id"/>
    <result column="name" property="name"/>
    <result column="age" property="age"/>
    <collection
      property="computers"
      column="id"
      ofType="computer"
      select="com.api.MyBatis.dao.ComputerMapper.findByUid"
    >
      <id column="c_id" property="id"/>
      <result column="c_name" property="name"/>
      <result column="uid" property="uid"/>
    </collection>
  </resultMap>
  <select id="findUserAndComputer" resultMap="userAndComputerMap">
    select * from user
  </select>
</mapper>
```

```xml
<!--computer.xml-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.api.MyBatis.dao.ComputerMapper">
  <select id="findByUid" parameterType="int" resultType="computer">
    select * from computer where uid = #{uid}
  </select>
</mapper>
```

```java
// User.java实体类
package com.api.MyBatis.domain;

import java.util.List;

public class User {
  private int id;
  private String name;
  private int age;
  private List<Computer> computers;

  public User() {
  }

  public User(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public User(int id, String name, int age) {
    this(name, age);
    this.id = id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public List<Computer> getComputers() {
    return computers;
  }

  public void setComputers(List<Computer> computers) {
    this.computers = computers;
  }

  @Override
  public String toString() {
    return "User{" +
        "id=" + id +
        ", name='" + name + '\'' +
        ", age=" + age +
        ", computers=" + computers +
        '}';
  }
}
```

```java
// Computer.java实体类
package com.api.MyBatis.domain;

public class Computer {
  private int id;
  private String name;
  private int uid;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getUid() {
    return uid;
  }

  public void setUid(int uid) {
    this.uid = uid;
  }

  @Override
  public String toString() {
    return "Computer{" +
        "id=" + id +
        ", name='" + name + '\'' +
        ", uid=" + uid +
        '}';
  }
}
```

```java
// User接口
package com.api.MyBatis.dao;

import com.api.MyBatis.domain.User;

import java.util.List;

public interface UserMapper {
  // 查询所有的用户及其名下的所有电脑
  List<User> findUserAndComputer();
}
```

```java
// Computer接口
package com.api.MyBatis.dao;

import com.api.MyBatis.domain.Computer;

import java.util.List;

public interface ComputerMapper {
  List<Computer> findByUid(int uid);
}
```

```java
// 测试类
package com.api.MyBatis.test;

import com.api.MyBatis.dao.UserMapper;
import com.api.MyBatis.domain.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserTest {
  private SqlSession session;
  private UserMapper userDao;

  @BeforeEach
  public void before() throws Exception {
    // 1. 获取流对象，读取核心配置文件
    InputStream is = Resources.getResourceAsStream("SqlMapConfig.xml");
    // 2. 创建 SqlSession 工厂的构建者对象
    SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
    // 3. 获取 SqlSession 工厂对象
    SqlSessionFactory factory = builder.build(is);
    // 4. 获取 SqlSession 对象
    session = factory.openSession();
    // 5. 获取 UserDao 代理类对象
    userDao = session.getMapper(UserMapper.class);
  }

  @AfterEach
  public void after() {
    // 7. 提交事务(增删改需要提交；查询时不要提交)
    session.commit();
    // 8. 释放资源
    session.close();
  }

  // 查询所有的用户及其名下的电脑
  @Test
  public void findUserAndComputer() {
    List<User> usersAll = userDao.findUserAndComputer();
    for (User user : usersAll) {
      System.out.println(user);
      // 结果：
      // User{
      //  id=1,
      //  name='tom',
      //  age=18,
      //  computers=[
      //     Computer{id=1, name='联想', uid=1,},
      //     Computer{id=2, name='华为', uid=1},
      //     Computer{id=4, name='戴尔', uid=1}
      //   ]
      // }
      // User{
      //  id=2,
      //  name='tony',
      //  age=19,
      //  computers=[
      //     Computer{id=3, name='华硕', uid=2}
      //   ]
      // }
      // User{id=3, name='rose', age=18, computers=[]}
    }
  }
}
```
