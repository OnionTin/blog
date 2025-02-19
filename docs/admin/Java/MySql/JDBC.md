## JDBC

```java
// JDBC 最基础的用法
public static void main(String[] args) throws Exception {
  // 1. 注册驱动
  // 已经过时，请弃用

  // 2. 获取数据库连接对象
  Connection conn = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/sister?serverTimezone=UTC", "root", "Sap@1q2w3e4r"
  );

  // 3. 获取执行sql语句的对象
  // 有问题，请更换
  Statement sta = conn.createStatement();

  // 4. 执行sql语句
  int i = sta.executeUpdate("insert into user values(3,'rose', 20)");
  System.out.println(i); // 1

  // 5. 释放资源
  rs.close();
  sta.close();
  conn.close();
}
```

### JDBC 基本步骤

1. 注册驱动
2. 获取数据库连接对象
3. 获取执行 SQL 的对象
4. 执行 SQL 语句
5. 释放资源

### 获取数据库连接对象

| 方法                                                                             | 作用                             |
| -------------------------------------------------------------------------------- | -------------------------------- |
| public static Connection getConnection(String url, String user, String password) | 根据地址、用户名、密码连接数据库 |
| public static Connection getConnection(String url)                               | 根据全路径连接数据库             |
| public static Connection getConnection(String url, java.util.Properties info)    | 根据配置文件连接                 |

### 获取执行 sql 语句的对象

Statement 会有 SQL 注入的风险，所以不推荐使用；解决方案：<RouteLink active to="/db/MySql/预处理语句.md">预处理语句</RouteLink>。

SQL 注入？

```java
// SQL 注入案例
String username = "tom' or '1' = '1";
String password = "123456";
String sql = "select * from user where username = '" + username
+ "' and password = '" + password + "'";

// 正确写法
String sql = "select * from user where username = ? and password = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, username);
ps.setString(2, password);
```

### 执行 SQL 语句

| 方法                     | 作用                                                            |
| ------------------------ | --------------------------------------------------------------- |
| int executeUpdate()      | 增删改，返回实际影响的行数                                      |
| ResultSet executeQuery() | 查，返回获取到的结果集                                          |
| boolean execute()        | 增删改查；底层使用，我们很少用；查询返回 true, 增删改返回 false |

### ResultSet 结果集方法

| 方法                          | 作用                                                                |
| ----------------------------- | ------------------------------------------------------------------- |
| boolean next()                | 判断结果集的下一条是否有数据，如果有数据返回 true，并把光标下移一位 |
| int getInt(int i)             | 根据当前下标获取数据(1 tom 20：1 的下标 1，tom 下标 2，20 下标 3)   |
| int getInt(String name)       | 根据当前字段名获取数据                                              |
| String getString(int i)       | 根据当前下标获取数据                                                |
| String getString(String name) | 根据当前字段名获取数据                                              |

### 方法的使用

```java
package com.api.JDBC;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Properties;

public class demo01 {
  public static void main(String[] args) throws Exception {
    // 1. 注册驱动
    // 已经过时，请弃用
    // Class.forName("com.mysql.jdbc.Driver");

    // 2. 获取数据库连接对象
    // public static Connection getConnection(String url,String user,String password)
    // public static Connection getConnection(String url)
    // public static Connection getConnection(String url,java.util.Properties info)
      /*
      Connection conn = DriverManager.getConnection(
          "jdbc:mysql://localhost:3306/sister?serverTimezone=UTC",
          "root",
          "Sap@1q2w3e4r"
      )
      */;
    /*
    Connection conn = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/sister?
        serverTimezone=UTC&user=root&password=Sap@1q2w3e4r"
    );
    */
    Properties pt = new Properties();
    pt.setProperty("user", "root");
    pt.setProperty("password", "Sap@1q2w3e4r");
    Connection conn = DriverManager.getConnection("jdbc:mysql://
    localhost:3306/sister?serverTimezone=UTC", pt);

    // 3. 获取执行sql语句的对象
    // 当前的写法有弊端，后续被弃用了，请放弃
    Statement sta = conn.createStatement();

    // 4. 执行sql语句
    // int executeUpdate()：增删改，返回实际影响的行数
    // ResultSet executeQuery()：查
    // boolean execute()：增删改查；底层使用，我们很少用；查询返回 true, 增删改返回 false

    int i = sta.executeUpdate("insert into user values(4,'tony', 22)");
    System.out.println(i); // 1

    ArrayList<User> al = new ArrayList<User>();
    ResultSet rs = sta.executeQuery("select * from user");
    // ResultSet 结果集方法
    // boolean next()：判断结果集的下一条是否有数据，如果有数据返回true，并把光标下移一位
    // int getInt(int i)：根据当前下标获取数据， 1 tom 20： 1的下标1，tom下标2，20下标3
    // int getInt(String name)：根据当前字段名获取数据
    // String getString(int i)：根据当前下标获取数据
    // String getString(String name)：根据当前字段名获取数据
    while (rs.next()) {
        int id = rs.getInt(1);
        String name = rs.getString("name");
        int age = rs.getInt(3);
        System.out.println(id + " " + name + " " + age);
        // 结果：
        // 1 tom 20
        // 2 jerry 20
        // 3 rose 20
        // 4 tony 22

        User user = new User(id, name, age);
        al.add(user);
    }

    // 5. 释放资源
    rs.close();
    sta.close();
    conn.close();

    for (User u: al){
        System.out.println(u);
        // 结果：
        // User{id=1, name='tom', age=20}
        // User{id=2, name='jerry', age=20}
        // User{id=3, name='rose', age=20}
        // User{id=4, name='tony', age=22}
    }
  }
}
class User{
  private int id;
  private String name;
  private int age;

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
    return "User{" +
            "id=" + id +
            ", name='" + name + '\'' +
            ", age=" + age +
            '}';
  }
}
```
