## JDBC 中事务处理

|               方法                |                     作用                     |
| :-------------------------------: | :------------------------------------------: |
| setAutoCommit(boolean autoCommit) | 开启关闭事务自动提交，true 关闭， false 开启 |
|             commit()              |                   提交事务                   |
|            rollback()             |                   回滚事务                   |

```java
// 转账的案例，其中用到了封装的JDBC工具类
package com.api.JDBC;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class ShiWuChuLi {
    public static void main(String[] args) throws Exception {
        Connection conn = UtilClass.getConnection();

        /*
         * 开启事务
         * 在控制台上是把1变成0
         * 在JDBC中是把ture变成false
         */
        conn.setAutoCommit(false);

        String sql = "update user set money = money + ? where name = ?";

        PreparedStatement ps = conn.prepareStatement(sql);
        // tom减去100
        ps.setInt(1, -100);
        ps.setString(2, "tom");
        ps.executeUpdate();

        // 模拟异常 System.out.println(1/0);

        // jerry加上100
        ps.setInt(1, 100);
        ps.setString(2, "jerry");
        ps.executeUpdate();

        // 提交事务(不提交自动回滚)
        conn.commit();

        UtilClass.close(conn, ps);
    }
}
```
