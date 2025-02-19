## api 服务

> api 服务提供实体

### 依赖

```xml
<dependencies>
  <!--lombok-->
  <dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
  </dependency>
</dependencies>
```

### 实体类

```java
package com.ths.api.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true) // 链式写法的注解
public class Dept implements Serializable { // 分布式，所有实体类必须序列化
  private Long deptno;
  private String dname;
  private String db_source; // 哪个数据库中的字段
}
```
