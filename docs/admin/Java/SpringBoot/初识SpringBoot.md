## 初识 SpringBoot

### 最简单的项目

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project
  xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="
    http://maven.apache.org/POM/4.0.0
    https://maven.apache.org/xsd/maven-4.0.0.xsd
  "
>
  <modelVersion>4.0.0</modelVersion>
  <!--parent：父项目-->
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.2.0.RELEASE</version>
    <relativePath/>
  </parent>
  <groupId>com.ths</groupId>
  <artifactId>spring-boot-2-2-0</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <name>spring-boot-2-2-0</name>
  <description>spring-boot-2-2-0</description>
  <url/>
  <licenses>
    <license/>
  </licenses>
  <developers>
    <developer/>
  </developers>
  <scm>
    <connection/>
    <developerConnection/>
    <tag/>
    <url/>
  </scm>
  <properties>
    <!--java版本-->
    <java.version>1.8</java.version>
  </properties>
  <dependencies>
    <!--web依赖，包含SpringMvc，负责：tomcat、dispatchServlet、jsp...配置-->
    <!--starter: 启动器-->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!--跟Junit类似，用于单元测试-->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <!--打包-->
  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>

</project>
```

### 端口号和自定义 banner

```properties
# 应用名称
spring.application.name=spring-boot-2
# 端口号
service.port=8080
# 自定义Banner
# resources 目录下放入一个banner.txt文件即可自动识别
```

#### banner 网站

[https://www.bootschool.net/ascii-art/people](https://www.bootschool.net/ascii-art/people)

### 打包运行

1. 首先用 maven package 打包
2. 打包完成后，在 target 目录下找到 jar 包
3. 使用 java -jar 命令运行 jar 包(mcd 下输入 java -jar xxx.jar)

### SpringBoot-2.2.0.RELEASE

[官方文档](https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/reference/htmlsingle/#boot-documentation)
