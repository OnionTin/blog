## Maven 的依赖范围与依赖传递

> 比如正式环境肯定不需要测试环境的依赖了
>
> 依赖范围就是用来控制依赖的传递

### 依赖的基本配置

| 属性       | 说明                               |
| ---------- | ---------------------------------- |
| groupid    | 公司名称                           |
| artifactid | 项目名称                           |
| version    | 版本号                             |
| scope      | 依赖范围                           |
| type       | 依赖类型，默认就是 jar，基本不用变 |
| exclusions | 排除依赖                           |

### Scope 依赖范围

| 依赖范围 | 说明                                                                                                 |
| -------- | ---------------------------------------------------------------------------------------------------- |
| compile  | 默认范围，编译、测试、运行三种 classpath 都有效，在本地仓库中找                                      |
| provided | 编译、测试有效，运行无效，比如 servlet-api.jar 只需要编译和测试的时候使用，运行的时候容器已经提供    |
| runtime  | 测试、运行有效，编译无效，比如 jdbc 驱动，编译时只需要 java 的 jdbc 接口，只有运行时才需要 jdbc 驱动 |
| test     | 只在测试时有效                                                                                       |
| system   | 编译、测试有效，运行无效，在硬盘上找                                                                 |

```xml
<dependencies>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.3.9</version>
    <scope>compile</scope>
  </dependency>
  <dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>3.1.0</version>
    <scope>provided</scope>
  </dependency>
  <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.26</version>
    <scope>runtime</scope>
  </dependency>
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.11</version>
    <scope>test</scope>
  </dependency>
</dependencies>
```

### 依赖排除

> 如果引入的依赖中，有我们不需要的依赖，那么就可以使用排除依赖，比如 a.jar 引入了 b.jar(1.0 版本)，c.jar 引入了 b.jar(2.0 版本)，那么 a.jar 和 c.jar 引入的 b.jar 版本不同，就会产生冲突，这个时候就需要排除依赖

```xml
<dependencies>
  <dependency>
    <groupId>com.aaa</groupId>
    <artifactId>a</artifactId>
    <version>1.0</version>
    <exclusions>
      <exclusion>
        <groupId>com.bbb</groupId>
        <artifactId>b</artifactId>
      </exclusion>
    </exclusions>
  </dependency>
  <dependency>
    <groupId>com.ccc</groupId>
    <artifactId>c</artifactId>
    <version>1.0</version>
  </dependency>
  <dependency>
    <groupId>com.bbb</groupId>
    <artifactId>b</artifactId>
    <version>2.0</version>
  </dependency>
</dependencies>
```

### 依赖传递

> A 依赖 B，B 依赖 C，那么 A 也会依赖 C，被依赖的依赖要写在最下面，比如 A 依赖 B，B 依赖 C，那么 A 的依赖范围要写在 B 的依赖范围下面，B 的依赖范围要写在 C 的依赖范围下面

```xml
<dependencies>
  <dependency>
    <groupId>com.aaa</groupId>
    <artifactId>a</artifactId>
    <version>1.0</version>
    <scope>compile</scope>
  </dependency>
  <dependency>
    <groupId>com.bbb</groupId>
    <artifactId>b</artifactId>
    <version>1.0</version>
    <scope>compile</scope>
  </dependency>
  <dependency>
    <groupId>com.ccc</groupId>
    <artifactId>c</artifactId>
    <version>1.0</version>
    <scope>compile</scope>
  </dependency>
</dependencies>
```
