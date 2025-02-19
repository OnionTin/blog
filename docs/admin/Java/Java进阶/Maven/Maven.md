## Maven

### 配置环境变量

```java
MAVEN_HOME=D:\Program Files\apache-maven-3.6.3

Path=%MAVEN_HOME%\bin

mvn -version
```

### 配置本地仓库

1. 找到 maven 下的 conf 文件夹
2. 找到 settings.xml 进行修改
3. 修改 localRepository 属性值

```xml
<!--settings.xml -->
<localRepository>D:/JavaPackage/repository</localRepository>
```

### 配置阿里云镜像

```xml
<mirror>
  <id>alimaven</id>
  <mirrorOf>central</mirrorOf>
  <name>aliyun maven</name>
  <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
</mirror>
```

### 下载基本的 jar 包

```java
mvn help:system
```

### 常用命令

> 进入到项目的根目录下执行，即 pom.xml 所在的目录下，cmd 执行

| 命令        | 作用 |
| ----------- | ---- |
| mvn clean   | 清理 |
| mvn compile | 编译 |
| mvn test    | 测试 |
| mvn package | 打包 |
| mvn install | 安装 |
| mvn deploy  | 部署 |
