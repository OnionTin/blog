## JdbcTemplate 基本使用

### 常用 api

| 方法                                                                                          | 作用                                                                             |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| List &lt;T&gt; query(String sql, new BeanPropertyRowMapper &lt;T&gt; T.class, Object... args) | 执行查询，将每行数据转换为 T 对象，并返回一个包含这些对象的列表。                |
| T queryForObject(String sql, new BeanPropertyRowMapper &lt;T&gt; T.class, Object... args)     | 执行查询，将结果集中第一行数据转换为 T 对象，并返回。                            |
| queryForObject(String sql, Object.class, Object... args);                                     | 根据指定的返回值类型的 class 和特定的参数，查询返回具体的值                      |
| int update(String sql, Object... args)                                                        | 执行更新语句（包括：update、insert、delete）。                                   |
| queryForList (String sql, Object.class, Object... args)                                       | 执行查询语句，将每行数据转换为一个 Map 对象，并返回一个包含这些 Map 对象的列表。 |
| queryForMap(String sql, Object.class, Object... args)                                         | 执行查询语句，将结果集第一行数据转换为一个 Map 对象，并返回该对象。              |

```java
package com.api.JdbcTemplate;

import com.alibaba.druid.pool.DruidDataSourceFactory;
import com.mchange.v2.c3p0.ComboPooledDataSource;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import java.util.List;
import java.util.Properties;

public class Demo01 {
  public static void main(String[] args) throws Exception {
    // 创建连接池对象
    // DataSource dataSource = new ComboPooledDataSource();
    Properties p = new Properties();
    p.load(
      Demo01.class.getClassLoader().getResourceAsStream("druid.properties")
    );
    DataSource dataSource= new DruidDataSourceFactory().createDataSource(p);

    // 创建 JdbcTemplate 对象，并通过有参构造方式绑定连接池
    JdbcTemplate jt = new JdbcTemplate(dataSource);
    /*
    // 创建 JdbcTemplate 对象，并绑定连接池
    JdbcTemplate jt = new JdbcTemplate();
    jt.setDataSource(dataSource);
    */

    /*
      * 执行sql语句
      */
    // 增加
    int num1 = jt.update(
      "insert into user values(null,?,?)",
      "tom",
      1000
    );
    System.out.println(num1);
    // 删除
    int num2 = jt.update(
      "delete from user where age = ?",
      1000
    );
    System.out.println(num2);
    // 修改
    int num3 = jt.update(
      "update user set age = ?, name=? where id = ?",
      30,
      "tom",
      1
    );
    System.out.println(num3);
    // 查询
    // 1. 查询多条记录（底层都是反射，所以能获取到User.class数据）
    // 查询全部数据
    List<User> users = jt.query(
      "select * from user",
      new BeanPropertyRowMapper<User>(User.class)
    );
    for (User u : users) {
      System.out.println(u);
    }
    // 查询id为1和2的数据
    List<User> list = jt.query(
      "select * from user where id in (?, ?)",
      new BeanPropertyRowMapper<User>(User.class),
      1,
      2
    );
    for (User u : list) {
      System.out.println(u);
    }
    // 2. 查询一条记录（查询id为1的数据）
    User user = jt.queryForObject(
      "select * from user where id = ?",
      new BeanPropertyRowMapper<User>(User.class),
      1
    );
    System.out.println(user);
    // 3. 查询一个数据
    // 查询id为1的数据的name值
    String name = jt.queryForObject(
      "select name from user where id = ?",
      String.class,
      1
    );
    System.out.println(name);
    // 查询表中记录的总条数
    int count = jt.queryForObject(
      "select count(*) from user",
      Integer.class
    );
    System.out.println(count);
  }
}
```

```java
// Use.java
package com.api.JdbcTemplate;

public class User {
    private int id;
    private String name;
    private int age;

    public User() {

    }

    public User(int id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User [id=" + id + ", name=" + name + ", age=" + age + "]";
    }
}
```
