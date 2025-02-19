<!-- @format -->

## Mybatis-Plus

### 简介

> MyBatis-Plus（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。

### 特性

| 特性                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 无侵入：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑                                                                                           |
| 损耗小：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作，无需自己编写 CRUD 代码                                                                  |
| 强大的 CRUD 操作：内置通用 Mapper、通用 Service，仅仅通过<font color=red>少量配置即可实现单表大部分 CRUD 操作</font>，更有强大的条件构造器，满足各类使用需求 |
| <font color=red>支持 Lambda </font>形式调用：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错                                                  |
| 支持<font color=red>主键自动生成</font>：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题                          |
| 支持 ActiveRecord 模式：支持 ActiveRecord 形式调用，<font color=red>实体类只需继承 Model 类即可进行强大的 CRUD 操作</font>                                   |
| 支持自定义全局通用操作：<font color=red>支持全局通用方法注入(Write once, use anywhere)</font>                                                                |
| <font color=red>内置分页插件</font>：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询                               |
| 内置性能分析插件：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能<font color=red>快速揪出慢查询</font>                                           |
| 内置全局拦截插件：提供全表 delete 、 update 操作<font color=red>智能分析阻断，也可自定义拦截规则，预防误操作</font>                                          |
| <font color=red>内置代码生成器：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置</font>   |
| 内置逻辑删除功能：<font color=red>支持全局逻辑删除扫描，支持业务逻辑删除，无需自己写逻辑删除的代码</font>                                                    |
| 内置自动填充功能：<font color=red>可自动填充字段，无需手动设置 CREATE_TIME、UPDATE_TIME、DELETED 等字段值</font>                                             |
| 内置序列化功能：<font color=red>提供 JSON 序列化插件，可解决序列化问题，无需额外引入第三方库</font>                                                          |
| 可自定义注解、全局配置、支持自定义插件扩展                                                                                                                   |

### 快速开始

#### 1. 引入依赖

```xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.4.3.4</version>
</dependency>
```

#### 2. 配置数据源

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/mybatis_plus?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=UTC
    username: root
    password: root
mybatis-plus:
  mapper-locations: classpath:/mapper/*.xml
  type-aliases-package: com.example.demo.entity
```

#### 3. 创建实体类

```java
@Data
@TableName("user")
public class User {
  @TableId(type = IdType.AUTO)
  private Long id;
  private String name;
  private Integer age;
  private String email;
}
```

#### 4. 创建 Mapper 接口

```java
@Mapper
public interface UserMapper extends BaseMapper<User> {
}
```

#### 5. 测试

```java
@SpringBootTest
class DemoApplicationTests {
  @Autowired
  private UserMapper userMapper;
  @Test
  void contextLoads() {
    List<User> users = userMapper.selectList(null);
    users.forEach(System.out::println);
  }
}
```

### CRUD 扩展

#### 1. 插入操作

```java
@Test
void testInsert() {
  User user = new User();
  user.setName("张三");
  user.setAge(18);
  user.setEmail("zhangsan@atguigu.com");
  int result = userMapper.insert(user);
  System.out.println("result = " + result);
  System.out.println("id = " + user.getId());
}
```

#### 2. 主键策略

- ID_WORKER - 全局唯一 ID (Long 类型的主键)
- ID_WORKER_STR - 字符串全局唯一 ID (String 类型的主键)
- UUID - 全局唯一 ID (UUID 类型的主键)
- AUTO - 数据库 ID 自增
- INPUT - 用户输入 ID (该类型可以通过自己注册自动填充插件进行填充)
- NONE - 无状态 (适合那种把 ID 放在了业务字段里面的情况)
- IDENTITY - 数据库 ID 自增(只支持 mysql,oracle,db2)

#### 3. 更新操作

```java
@Test
void testUpdate() {
  User user = new User();
  user.setId(1L);
  user.setName("张三丰");
  user.setAge(100);
  user.setEmail("zhangsanfeng@atguigu.com");
  int result = userMapper.updateById(user); // 根据id进行更新,没有传值的字段将更新为null
  System.out.println("result = " + result);
}
```

#### 4. 自动填充

```java
@Data
@TableName("user")
public class User {
  @TableId(type = IdType.AUTO)
  private Long id;
  private String name;
  private Integer age;
  private String email;
  @TableField(fill = FieldFill.INSERT)
  private LocalDateTime createTime;
  @TableField(fill = FieldFill.INSERT_UPDATE)
  private LocalDateTime updateTime;
}
```

```java
@Component
public class MyMetaObjectHandler implements MetaObjectHandler {
  @Override
  public void insertFill(MetaObject metaObject) {
    this.strictInsertFill(metaObject, "createTime", LocalDateTime::now, LocalDateTime.class);
    this.strictInsertFill(metaObject, "updateTime", LocalDateTime::now, LocalDateTime.class);
  }

  @Override
  public void updateFill(MetaObject metaObject) {
    this.strictUpdateFill(metaObject, "updateTime", LocalDateTime::now, LocalDateTime.class);
  }
}
```

#### 5. 乐观锁

```java
@Data
@TableName("user")
public class User {
  @TableId(type = IdType.AUTO)
  private Long id;
  private String name;
  private Integer age;
  private String email;
  @Version
  private Integer version;
}
```

```java
@Mapper
public interface UserMapper extends BaseMapper<User> {
}
```

```java
@SpringBootTest
class DemoApplicationTests {
  @Autowired
  private UserMapper userMapper;
  @Test
  void testOptimisticLocker() {
    User user = userMapper.selectById(1L);
    user.setName("张三");
    user.setAge(18);

    User user2 = userMapper.selectById(1L);
    user2.setName("张三丰");
    user2.setAge(100);

    userMapper.updateById(user2);
    userMapper.updateById(user);
  }
}
```

#### 6. 查询操作

```java
@Test
void testSelectById() {
  User user = userMapper.selectById(1L);
  System.out.println(user);
}
```

#### 7. 分页查询

```java
@Configuration
public class MyBatisPlusConfig {
  @Bean
  public PaginationInterceptor paginationInterceptor() {
    return new PaginationInterceptor();
  }
}
```

```java
@SpringBootTest
class DemoApplicationTests {
  @Autowired
  private UserMapper userMapper;

  @Test
  void testPage() {
    Page<User> page = new Page<>(1, 3);
    userMapper.selectPage(page, null);
    page.getRecords().forEach(System.out::println);
    System.out.println(page.getCurrent());
    System.out.println(page.getPages());
    System.out.println(page.getSize());
    System.out.println(page.getTotal());
    System.out.println(page.hasNext());
    System.out.println(page.hasPrevious());
  }
}
```

#### 8. 删除操作

```java
@Test
void testDeleteById() {
  int result = userMapper.deleteById(1L);
  System.out.println("result = " + result);
}
```

#### 9. 批量删除

```java
@Test
void testDeleteBatchIds() {
  List<Long> idList = Arrays.asList(1L, 2L, 3L);
  int result = userMapper.deleteBatchIds(idList);
  System.out.println("result = " + result);
}
```

#### 10. 逻辑删除

```java
@Data
@TableName("user")
public class User {
  @TableId(type = IdType.AUTO)
  private Long id;
  private String name;
  private Integer age;
  private String email;
  @TableLogic
  private Integer deleted;
}
```

```java
@Mapper
public interface UserMapper extends BaseMapper<User> {
}
```

```java
@SpringBootTest
class DemoApplicationTests {
  @Autowired
  private UserMapper userMapper;

  @Test
  void testLogicDelete() {
      int result = userMapper.deleteById(1L);
      System.out.println("result = " + result);
  }
}
```

#### 11. 条件构造器

```java
@SpringBootTest
class DemoApplicationTests {
  @Autowired
  private UserMapper userMapper;

  @Test
  void testCondition() {
    QueryWrapper<User> queryWrapper = new QueryWrapper<>();
    queryWrapper.eq("name", "张三");
    User user = userMapper.selectOne(queryWrapper);
    System.out.println(user);
  }
}
```

#### 12. 代码生成器

```java
public class CodeGenerator {
  public static void main(String[] args) {
    AutoGenerator autoGenerator = new AutoGenerator();

    // 全局配置
    GlobalConfig globalConfig = new GlobalConfig();
    String projectPath = System.getProperty("user.dir");
    globalConfig.setOutputDir(projectPath + "/src/main/java");
    globalConfig.setAuthor("test");
    globalConfig.setOpen(false);
    globalConfig.setSwagger2(true);
    autoGenerator.setGlobalConfig(globalConfig);

    // 数据源配置
    DataSourceConfig dataSourceConfig = new DataSourceConfig();
    dataSourceConfig.setUrl("jdbc:mysql://localhost:3306/mybatis_plus?useUnicode=true&useSSL=false&characterEncoding=utf8");
    dataSourceConfig.setDriverName("com.mysql.cj.jdbc.Driver");
    dataSourceConfig.setUsername("root");
    dataSourceConfig.setPassword("123456");
    autoGenerator.setDataSource(dataSourceConfig);

    // 包配置
    PackageConfig packageConfig = new PackageConfig();
    packageConfig.setModuleName("user");
    packageConfig.setParent("com.example.demo");
    autoGenerator.setPackageInfo(packageConfig);

    // 策略配置
    StrategyConfig strategyConfig = new StrategyConfig();
    strategyConfig.setInclude("user");
    strategyConfig.setNaming(NamingStrategy.underline_to_camel);
    strategyConfig.setColumnNaming(NamingStrategy.underline_to_camel);
    strategyConfig.setEntityLombokModel(true);
    strategyConfig.setRestControllerStyle(true);
    strategyConfig.setControllerMappingHyphenStyle(true);
    autoGenerator.setStrategy(strategyConfig);

    autoGenerator.execute();
  }
}
```

#### 13. 分页插件

```java
@Configuration
public class MybatisPlusConfig {
  @Bean
  public MybatisPlusInterceptor mybatisPlusInterceptor() {
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
    return interceptor;
  }
}
```

```java
@SpringBootTest
class DemoApplicationTests {
  @Autowired
  private UserMapper userMapper;

  @Test
  void testPage() {
    Page<User> page = new Page<>(1, 3);
    userMapper.selectPage(page, null);
    List<User> records = page.getRecords();
    records.forEach(System.out::println);
    System.out.println("当前页：" + page.getCurrent());
    System.out.println("每页显示的条数：" + page.getSize());
    System.out.println("总记录数：" + page.getTotal());
    System.out.println("总页数：" + page.getPages());
    System.out.println("是否有上一页：" + page.hasPrevious());
    System.out.println("是否有下一页：" + page.hasNext());
  }
}
```

#### 14. 乐观锁插件

```java
@Configuration
public class MybatisPlusConfig {
  @Bean
  public MybatisPlusInterceptor mybatisPlusInterceptor() {
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor());
    return interceptor;
  }
}
```

```java
@SpringBootTest
class DemoApplicationTests {
  @Autowired
  private UserMapper userMapper;
  @Test
  void testOptimisticLocker() {
    User user = new User();
    user.setId(1L);
    user.setName("test");
    user.setAge(20);
    user.setEmail("test@baomidou.com");
    user.setVersion(1);
    int result = userMapper.updateById(user);
    System.out.println("result = " + result);
  }
}
```

#### 15. 性能分析插件

```java
@Configuration
public class MybatisPlusConfig {
  @Bean
  public MybatisPlusInterceptor mybatisPlusInterceptor() {
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new PerformanceInnerInterceptor());
    return interceptor;
  }
}
```

#### 16. 逻辑删除插件

```java
@Configuration
public class MybatisPlusConfig {
  @Bean
  public MybatisPlusInterceptor mybatisPlusInterceptor() {
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new LogicSqlInjector());
    return interceptor;
  }
}
```

#### 17. 自动填充插件

```java
@Configuration
public class MybatisPlusConfig {
  @Bean
  public MybatisPlusInterceptor mybatisPlusInterceptor() {
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new MetaObjectHandlerInnerInterceptor());
    return interceptor;
  }
}
```

#### 18. SQL 注入器

```java
@Configuration
public class MybatisPlusConfig {
  @Bean
  public MybatisPlusInterceptor mybatisPlusInterceptor() {
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new LogicSqlInjector());
    return interceptor;
  }
}
```

#### 19. 多租户插件

```java
@Configuration
public class MybatisPlusConfig {
  @Bean
  public MybatisPlusInterceptor mybatisPlusInterceptor() {
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new TenantLineInnerInterceptor());
    return interceptor;
  }
}
```

#### 20. 动态表名插件

```java
@Configuration
public class MybatisPlusConfig {
  @Bean
  public MybatisPlusInterceptor mybatisPlusInterceptor() {
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new DynamicTableNameInnerInterceptor());
    return interceptor;
  }
}
```
