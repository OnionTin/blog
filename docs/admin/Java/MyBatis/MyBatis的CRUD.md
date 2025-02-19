## MyBatis 的 CRUD

> 基于 User 实体类 和 SqlMapConfig.xml 核心配置文件，都不需要反复修改，所以直接展示 UserDao 接口、 UserTest 测试类以及 UserMap.xml 的修改部分。

### 应用案例

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!--
  配置映射文件的详细信息
  namespace：命名空间，指定具体的某一个抽象接口
-->
<mapper namespace="com.api.MyBatis.dao.UserDao">
  <!--
    select：配置查询操作；
    id：指定 UserDao 接口中具体的某一个方法
    resultType：返回值类型，指的是映射文件的返回类型，即映射文件返回的实体类 User；
    resultType：可以省略，不设置底层自动设置成实体类 User。
    parameterType：参数类型；不设置底层自动设置；
    parameterType：有参数就配置，不需要参数就不需要配置。
    insert：添加
    delete：删除
    update：修改
    select：查询(使用select时不需要手动设置事务提交，查询底层自动提交了)
  -->
  <insert id="add" parameterType="com.api.MyBatis.domain.User">
    insert into user
    values (null, #{name}, #{age})
  </insert>
  <insert id="addReturnId" parameterType="com.api.MyBatis.domain.User">
    <!--
      selectKey：获取自增主键的sql
      keyColumn：表中的字段名
      keyProperty：类中的属性名
      resultType：指定映射文件的返回类型
      order：执行顺序，BEFORE，AFTER：表示执行完sql语句后再执行selectKey语句
    -->
    <selectKey keyColumn="id" keyProperty="id" resultType="int" order="AFTER">
      select last_insert_id()
    </selectKey>
    insert into user values (null, #{name}, #{age})
  </insert>
  <delete id="delete" parameterType="int">
    delete from user where id = #{id}
  </delete>
  <update id="update" parameterType="com.api.MyBatis.domain.User">
    update user set name = #{name}, age  = #{age} where id = #{id}
  </update>
  <select id="findAll" resultType="com.api.MyBatis.domain.User">
    select * from user
  </select>
  <select
    id="findById1"
    resultType="com.api.MyBatis.domain.User"
    parameterType="Integer"
  >
    select * from user where id = #{id}
  </select>
  <!--
    id = ???
    id = Person.getUser().getId()
    id = Person.#{user}.#{id}
    id = #{user.id}
  -->
  <select
    id="findById2"
    parameterType="com.api.MyBatis.test.Person"
    resultType="com.api.MyBatis.domain.User"
  >
    select * from user where id = #{user.id}
  </select>
  <select id="count" resultType="int">
    select count(*) from user
  </select>
  <select
    id="findByName1"
    parameterType="string"
    resultType="com.api.MyBatis.domain.User"
  >
    select * from user where name like #{name}
  </select>
  <select
    id="findByName2"
    parameterType="string"
    resultType="com.api.MyBatis.domain.User"
  >
    select * from user where name like '%${value}%'
  </select>
  <select
    id="findByPage1"
    parameterType="map"
    resultType="com.api.MyBatis.domain.User"
  >
    select * from user limit #{start},#{size}
  </select>
  <select id="findByPage2" resultType="com.api.MyBatis.domain.User">
    select * from user limit #{start},#{size}
  </select>
  <!--sql动态判断：where和id的使用-->
  <select id="findByCondition" parameterType="user" resultType="user">
    select * from user
    <where>
      <if test="name != null">
        and name like #{name}
      </if>
      <if test="age != null &amp;&amp; age != 0">
        and age = #{age}
      </if>
    </where>
  </select>
  <!--sql动态判断：forEach的使用-->
  <select id="findByIds" parameterType="int[]" resultType="user">
    select * from user where id in
    <foreach collection="array" open="(" close=")" separator="," item="id">
      #{id}
    </foreach>
  </select>
</mapper>
```

```java
// UserDao.java
package com.api.MyBatis.dao;

import com.api.MyBatis.domain.User;
import com.api.MyBatis.test.Person;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface UserDao {
  public void add(User user);

  // 新增后获取id值进行后续操作
  public void addReturnId(User user);

  public void delete(int id);

  public void update(User user);

  public List<User> findAll();

  public User findById1(int id);

  // 根据Id查询一条记录
  public User findById2(Person p);

  public int count();

  // 模糊查询
  public List<User> findByName1(String name);

  public List<User> findByName2(String name);

  // 分页查询1
  public List<User> findByPage1(Map<String, Integer> map);

  // 分页查询2：注解可以放在形参上
  public List<User> findByPage2(@Param("start") int aaa, @Param("size") int bbb);

  // 根据条件查询(多个条件，且每个条件都是可有可无)
  List<User> findByCondition(User user);

  // 根据多个id值进行查询
  List <User> findByIds(int [] ids);
}
```

```java
// UserTest.java
package com.api.MyBatis.test;

import com.api.MyBatis.dao.UserDao;
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
  private UserDao userDao;

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
    userDao = session.getMapper(UserDao.class);
  }

  @AfterEach
  public void after() {
    // 7. 提交事务(增删改需要提交；查询时不要提交)
    session.commit();
    // 8. 释放资源
    session.close();
  }

  @Test
  public void add() {
    userDao.add(new User("李四", 21));
    userDao.add(new User("王五", 22));
    userDao.add(new User("张三", 33));
  }

  // 新增后获取id值进行后续操作
  @Test
  public void addReturnId() {
    User user = new User();
    user.setName("赵六");
    user.setAge(18);
    userDao.addReturnId(user);
    System.out.println(user.getId());
    // 结果：
    // 40
  }

  @Test
  public void delete() {
    userDao.delete(1);
  }

  @Test
  public void update() {
    userDao.update(new User(2, "王五", 20));
  }

  // 查询全部
  @Test
  public void selectAll() {
    List<User> usersAll = userDao.findAll();
    for (User user : usersAll) {
      System.out.println(user);
      // 结果：
      // User [id=1, name=李四, age=20]
      // User [id=2, name=王五, age=20]
      // User [id=3, name=张三, age=30]
    }
  }

  // 查询单条
  @Test
  public void selectById1() {
    User user = userDao.findById1(32);
    System.out.println(user);
    // 结果;
    // User [id=3, name=张三, age=30]
  }

  // 根据Id查询一条记录
  @Test
  public void selectById2() {
    Person p = new Person();
    User user = new User();
    user.setId(32);
    p.setUser(user);
    User u = userDao.findById2(p);
    System.out.println(u);
    // 结果：
    // User [id=32, name=李四, age=21]
  }

  // 查询总数
  @Test
  public void selectCount() {
    int count = userDao.count();
    System.out.println(count);
    // 结果：
    // 3
  }

  // 根据姓名模糊查询（一）
  @Test
  public void selectByName() {
    List<User> users = userDao.findByName1("%张%");
    for (User user : users) {
      System.out.println(user);
      // 结果：
      // User [id=3, name=张三, age=30]
    }
  }

  // 根据姓名模糊查询（二）
  @Test
  public void selectByName2() {
    List<User> users = userDao.findByName2("李");
    for (User user : users) {
      System.out.println(user);
      // 结果：
      // User [id=3, name=张三, age=30]
    }
  }

  // 分页查询一：(select * from user limit (currentPage-1)*size, size)
  @Test
  public void selectByPage() {
    Map<String, Integer> map = new HashMap<>();
    map.put("start", 0);
    map.put("size", 2);
    List<User> users = userDao.findByPage1(map);
    for (User user : users) {
      System.out.println(user);
      // 结果：
      // User [id=32, name=李四, age=21]
      // User [id=33, name=王五, age=22]
    }
  }

  // 分页查询二：注解形式
  @Test
  public void selectByPage2() {
    List<User> users = userDao.findByPage2(0, 2);
    for (User user : users) {
      System.out.println(user);
      // 结果：
      // User [id=32, name=李四, age=21]
      // User [id=33, name=王五, age=22]
    }
  }

  // 根据条件查询(多个条件，且每个条件都是可有可无)
  @Test
  public void selectByCondition() {
    User user = new User();
    user.setAge(20);
    List<User> users = userDao.findByCondition(user);
    for (User u : users) {
      System.out.println(u);
    }
  }

  // 根据多个id值进行查询
  @Test
  public void selectByIds() {
    List<User> users = userDao.findByIds(new int[]{1, 20, 38});
    for (User user : users) {
      System.out.println(user);
      // 结果：
      // User [id=1, name=李四, age=20]
    }
  }
}
```

```java
// User实体类
package com.api.MyBatis.domain;

public class User {
  private int id;
  private String name;
  private int age;

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

  @Override
  public String toString() {
    return "User [id=" + id + ", name=" + name + ", age=" + age + "]";
  }
}
```

```java
// Person 实体类
package com.api.MyBatis.test;

import com.api.MyBatis.domain.User;

public class Person {
  private User user;

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }
}
```
