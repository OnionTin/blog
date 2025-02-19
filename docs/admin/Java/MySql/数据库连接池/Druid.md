## Druid

### 使用配置文件方式

```java
package com.api.SqlPool;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidDataSourceFactory;

import javax.sql.DataSource;
import java.sql.Connection;
import java.util.Properties;

public class Druid {
    public static void main(String[] args) throws Exception{
        /*使用官方配置文件的方式
        1. 导入 jar 包
        2. 导入配置文件
        3. 创建数据库连接池对象
        4. 获取数据库连接对象
        5. 归还连接对象
        */
        // 导入配置文件
        Properties p = new Properties();
        p.load(Druid.class.getClassLoader().getResourceAsStream("druid.properties"));
        // 创建数据库连接池对象
        DataSource dataSource = new DruidDataSourceFactory().createDataSource(p);
        // 获取数据库连接对象
        Connection conn = dataSource.getConnection();
        System.out.println("成功获取连接");
        System.out.println(conn);
        // 归还连接对象
        conn.close();
    }
}
```

```properties
# src/main/resources/druid.properties
driverClassName=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://localhost:3306/sister?serverTimezone=UTC
username=root
password=Sap@1q2w3e4r
initialSize=5
maxActive=10
maxWait=3000
```

### 不使用配置文件方式

```java
package com.api.SqlPool;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidDataSourceFactory;

import javax.sql.DataSource;
import java.sql.Connection;
import java.util.Properties;

public class Druid {
    public static void main(String[] args) throws Exception{
        /*不使用官方配置文件方式
        1. 导入 jar 包
        2. 获取数据库连接池对象
        3. 配置参数
        4. 获取数据库连接对象
        5. 归还连接对象
        */

        // 获取数据库连接池对象（DataSource是父类，不能创建实例）
        // DataSource dataSource = new DruidDataSource();
        DruidDataSource dataSource = new DruidDataSource();
        // 配置参数
        dataSource.setUsername("root");
        dataSource.setPassword("Sap@1q2w3e4r");
        dataSource.setUrl("jdbc:mysql://localhost:3306/sister?serverTimezone=UTC");
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        // 获取数据库连接对象
        Connection conn = dataSource.getConnection();
        System.out.println("成功获取连接");
        System.out.println(conn);
        // 归还连接对象
        conn.close();
    }
}
```

### Druid 工具类封装

```java
package com.api.SqlPool;

import com.alibaba.druid.pool.DruidDataSourceFactory;

import javax.sql.DataSource;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;

// 封装Druid工具类
public class DruidUtil {
    private static DataSource dataSource;

    static {
        Properties p = new Properties();
        try {
            p.load(
              DruidUtil.class.getClassLoader().getResourceAsStream("druid.properties")
            );
        } catch (IOException e) {
            System.out.println("读取配置文件失败");
            e.printStackTrace();
        }
        try {
            dataSource = DruidDataSourceFactory.createDataSource(p);
        } catch (Exception e) {
            System.out.println("创建数据源失败");
            e.printStackTrace();
        }
    }

    public static DataSource getDataSource() {
        return dataSource;
    }

    public static Connection getConnection() throws SQLException {
        return dataSource.getConnection();
    }

    public static void close(Connection conn, PreparedStatement ps, ResultSet rs) {
        if (rs != null) {
            try {
                rs.close();
            } catch (Exception e) {
            }
        }
        if (ps != null) {
            try {
                ps.close();
            } catch (Exception e) {
            }
        }
        if (conn != null) {
            try {
                conn.close();
            } catch (Exception e) {
            }
        }
    }
}
```

```java
// 测试封装的工具类
package com.api.SqlPool;

import java.sql.Connection;
import java.sql.SQLException;

public class DruidUtilTest {
    public static void main(String[] args) {
        try {
            Connection conn = DruidUtil.getConnection();
            System.out.println(conn);
        } catch (SQLException e) {
            System.out.println("获取连接失败");
            e.printStackTrace();
        }
    }
}
```
