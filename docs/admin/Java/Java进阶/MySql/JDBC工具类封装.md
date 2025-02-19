## JDBC 工具类封装

```properties
#jdbc.properties
driver=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/sister?serverTimezone=UTC
username=root
password=root
```

```java
package com.api.JDBC;

import java.sql.*;
import java.util.Properties;

public class UtilClass {
  private static String driver;
  private static String url;
  private static String username;
  private static String password;
  private static Connection conn;

  static {
    try {
      Properties p = new Properties();
      p.load(UtilClass.class.getClassLoader().getResourceAsStream("jdbc.properties"));
      System.out.println(p.getProperty("driver"));
      driver = p.getProperty("driver");
      url = p.getProperty("url");
      username = p.getProperty("username");
      password = p.getProperty("password");

      try {
        Class.forName(driver);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      }
    } catch (Exception e) {
      System.out.println("加载配置文件出错");
      e.printStackTrace();
    }
  }

  public static Connection getConnection() throws Exception {
    Connection conn = DriverManager.getConnection(url, username, password);
    return conn;
  }

  public static void close(Connection conn, PreparedStatement ps, ResultSet rs) {
    if (rs != null) {
      try {
        rs.close();
      } catch (SQLException e) {
        e.printStackTrace();
      }
    }
    if (ps != null) {
      try {
        ps.close();
      } catch (SQLException e) {
        e.printStackTrace();
      }
    }
    if (conn != null) {
      try {
        conn.close();
      } catch (SQLException e) {
        e.printStackTrace();
      }
    }
  }

  public static void close(Connection conn, PreparedStatement ps) {
    close(conn, ps, null);
  }
}
```
