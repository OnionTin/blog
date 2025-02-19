## 在 idea 中集成 Tomcat

1. 创建新的 Web 项目
   - 打开 IntelliJ IDEA，选择 File > New > Project。
   - 在新窗口中，选择 Java Enterprise 类别下的 Web Application，点击 Next > Next。
   - 填写项目名称（例如 MyWebApp），选择项目存储位置，点击 Finish。
2. 配置 Tomcat 服务器
   - 打开 File > Settings（或 Preferences on macOS）。
   - 转到 Build, Execution, Deployment > Application Servers，点击+，选择本地安装的 Tomcat 路径，点击 OK。
3. 添加 Servlet 依赖 -如果你的项目是 Maven 项目，确保 pom.xml 文件中包含以下 Servlet API 依赖：

```xml
<dependency>
  <groupId>javax.servlet</groupId>
  <artifactId>javax.servlet-api</artifactId>
  <version>4.0.1</version>
  <scope>provided</scope>
</dependency>
```

如果是 Gradle 项目，在 build.gradle 中添加：

```groovy
dependencies {
  providedCompile 'javax.servlet:javax.servlet-api:4.0.1'
}
```

4. 创建 Servlet 类

   - 在 src\main\java 目录下，右键你的包名，选择 New > Servlet（如果看不到 Servlet 选项，确保你选择了正确的目录层级，或者直接创建一个普通的 Java 类）。命名你的 Servlet（例如 HelloWorldServlet），并实现逻辑。

5. 配置 web.xml -在 WEB-INF 目录下的 web.xml 中，配置 Servlet 映射：

```xml
<servlet>
    <servlet-name>HelloWorldServlet</servlet-name>
    <servlet-class>your.package.name.HelloWorldServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>HelloWorldServlet</servlet-name>
    <url-pattern>/hello</url-pattern>
</servlet-mapping>
```

6. 部署并运行项目
   - 右键项目，选择 Run > Edit Configurations。
   - 点击左上角的+，选择 Tomcat Server > Local。
   - 在新出现的配置窗口中，选择你刚才创建的项目作为 Deployment。
   - 点击 Apply，然后 OK。
   - 使用菜单栏的 Run > Run 'MyWebApp'来启动 Tomcat 服务器。
7. 访问 Servlet

   - 打开浏览器，输入 http://localhost:8080/your-context-path/hello（your-context-path 通常是项目名，除非你在部署时指定了不同的上下文路径），
   - 你应该能看到 Servlet 的响应。
   - 这样，你就成功地在 IntelliJ IDEA 中创建了一个 Web 项目，并通过 Tomcat 服务器访问了 Servlet。

8. - 注意：

- 1. 选择到 Tomcat 的安装根目录，而不是 bin 目录。Tomcat 的根目录通常包含了 bin、conf、lib 等多个子目录。
- 2. 快捷键 ctrl + alt + s 快速打开配置窗口
