import{_ as a,o as n,c as t,e as s}from"./app-C_RrakEG.js";const l="/blog/assets/Tomcat内部机制-7M9P35RK.jpg",e={},i=s('<h2 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat"><span>Tomcat</span></a></h2><blockquote><p>Tomcat：部署静态资源(打包后的文件都是静态资源，如 html、css、js、图片等)</p></blockquote><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h3><p>尽量不要下载最新的版本，可能会出现版本更新过快而导致的问题，建议下载已经稳定的版本。 https://tomcat.apache.org</p><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h3><p>双击 bin\\startup.bat</p><h3 id="开启后出现闪退的几种问题" tabindex="-1"><a class="header-anchor" href="#开启后出现闪退的几种问题"><span>开启后出现闪退的几种问题</span></a></h3><ol><li>环境变量中没有配置 JAVA_HOME</li><li>重复 Tomcat</li><li>端口被占用</li><li>自行设置的配置出现问题</li></ol><h3 id="关闭" tabindex="-1"><a class="header-anchor" href="#关闭"><span>关闭</span></a></h3><p>双击 bin\\shutdown.bat</p><h3 id="tomcat-目录结构" tabindex="-1"><a class="header-anchor" href="#tomcat-目录结构"><span>Tomcat 目录结构</span></a></h3><ol><li>bin：存放 Tomcat 的启动和关闭的脚本文件</li><li>conf：存放 Tomcat 的配置文件</li><li>lib：存放 Tomcat 的依赖 jar 包</li><li>logs：存放 Tomcat 的日志文件</li><li>temp：存放 Tomcat 的临时文件</li><li>webapps：存放部署的 Web 项目</li><li>work：存放 Tomcat 运行时编译的文件</li></ol><h3 id="web-项目目录结构" tabindex="-1"><a class="header-anchor" href="#web-项目目录结构"><span>Web 项目目录结构</span></a></h3><ol><li>html</li><li>css</li><li>js</li><li>META-INF：存放项目的描述文件</li><li>WEB-INF：存放项目的配置文件 <ul><li>web.xml：项目的核心配置文件</li><li>classes：存放项目的字节码文件</li><li>lib：存放项目的依赖 jar 包</li></ul></li><li>index.jsp：项目的首页</li></ol><h3 id="tomcat-内部机制" tabindex="-1"><a class="header-anchor" href="#tomcat-内部机制"><span>Tomcat 内部机制</span></a></h3><p>了解内部机制，才能知道 tomcat 相关的配置和 server.xml 文件的作用 <img src="'+l+`" alt="Tomcat内部机制"></p><h3 id="部署-web-项目" tabindex="-1"><a class="header-anchor" href="#部署-web-项目"><span>部署 Web 项目</span></a></h3><h4 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一"><span>方式一</span></a></h4><ol><li>将 web 项目复制到 Tomcat 的 webapps 目录下</li><li>启动 Tomcat</li><li>访问项目：http://localhost:8080/项目名/资源路径</li><li>localhost:8080/web-app/a.html</li></ol><ul><li>注意：如果项目名是 ROOT，访问时是不需要写 ROOT 的。</li></ul><h4 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二"><span>方式二</span></a></h4><ol><li>在 Tomcat 的 conf 中的 server.xml 文件中配置项目</li><li>启动 Tomcat</li><li>访问项目：http://localhost:8080/项目名/资源路径</li></ol><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--
  path: 访问项目的虚拟目录
  docBase: 项目存放的全路径
  注意：
    1. 路径不能使用相对路径
    2. 路径不能使用中文
    3. 路径不能使用特殊字符
    4. 路径不能使用空格
 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/项目名<span class="token punctuation">&quot;</span></span> <span class="token attr-name">docBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>D:\\XXX\\XXX\\项目名<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方式三" tabindex="-1"><a class="header-anchor" href="#方式三"><span>方式三</span></a></h4><ol><li>在 Tomcat 的 conf\\catalina\\localhost 目录下创建一个 xml 文件</li><li>在 xml 文件中配置项目</li><li>启动 Tomcat</li><li>访问项目：http://localhost:8080/项目名/资源路径</li></ol><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span> <span class="token attr-name">docBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>D:\\XXX\\XXX\\项目名<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>注意：</li></ul><ol><li>与方式二类似，但是比方式二更方便灵活，不用反复启动 tomcat</li><li>不要 path 来指定虚拟目录，而把项目名就当作是虚拟目录</li></ol><h4 id="方式四" tabindex="-1"><a class="header-anchor" href="#方式四"><span>方式四</span></a></h4><ol><li>将 Web 项目打成 war 包</li><li>将 war 包复制到 Tomcat 的 webapps 目录下，会自动解压</li><li>启动 Tomcat</li><li>访问项目：http://localhost:8080/项目名/资源路径</li></ol><h3 id="本地域名设置" tabindex="-1"><a class="header-anchor" href="#本地域名设置"><span>本地域名设置</span></a></h3><ol><li>在 C:\\Windows\\System32\\drivers\\etc\\hosts 文件中添加</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>127.0.0.1   www.aaa.com
127.0.0.1   www.bbb.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>修改 tomcat 配置文件中添加配置</li></ol><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Host</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>www.aaa.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">appBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aaa_webapp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">unpackWARs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autoDeploy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Host</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>www.bbb.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">appBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bbb_app<span class="token punctuation">&quot;</span></span> <span class="token attr-name">unpackWARs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autoDeploy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在 bin 目录统计结构处新建 aaa_webapp 和 bbb_app</li><li>将项目分别复制到 aaa_webapp 和 bbb_app 中</li><li>访问项目：http://www.aaa.com:8080/项目名/a.html</li><li>访问项目：http://www.bbb.com:8080/项目名/b.html</li></ol><ul><li>注意：</li></ul><ol><li>端口号 8080 可以在 server.xml 中自由配置</li><li>如果端口号被改成 80 了，则访问时就不需要加端口号了，因为 80 是 Tomcat 的默认端口号</li><li>如果项目名是 ROOT，则访问时就不需要写项目名了</li><li>如果访问的文件是 index.html，则访问时就不需要写文件名了</li><li>最终访问可能就像www.aaa.com(www.baidu.com)一样就可以访问项目了</li></ol><h3 id="在-idea-中集成-tomcat" tabindex="-1"><a class="header-anchor" href="#在-idea-中集成-tomcat"><span>在 idea 中集成 Tomcat</span></a></h3>`,39),o=[i];function c(p,u){return n(),t("div",null,o)}const d=a(e,[["render",c],["__file","Tomcat.html.vue"]]),m=JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/Tomcat.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Tomcat","slug":"tomcat","link":"#tomcat","children":[{"level":3,"title":"下载","slug":"下载","link":"#下载","children":[]},{"level":3,"title":"启动","slug":"启动","link":"#启动","children":[]},{"level":3,"title":"开启后出现闪退的几种问题","slug":"开启后出现闪退的几种问题","link":"#开启后出现闪退的几种问题","children":[]},{"level":3,"title":"关闭","slug":"关闭","link":"#关闭","children":[]},{"level":3,"title":"Tomcat 目录结构","slug":"tomcat-目录结构","link":"#tomcat-目录结构","children":[]},{"level":3,"title":"Web 项目目录结构","slug":"web-项目目录结构","link":"#web-项目目录结构","children":[]},{"level":3,"title":"Tomcat 内部机制","slug":"tomcat-内部机制","link":"#tomcat-内部机制","children":[]},{"level":3,"title":"部署 Web 项目","slug":"部署-web-项目","link":"#部署-web-项目","children":[]},{"level":3,"title":"本地域名设置","slug":"本地域名设置","link":"#本地域名设置","children":[]},{"level":3,"title":"在 idea 中集成 Tomcat","slug":"在-idea-中集成-tomcat","link":"#在-idea-中集成-tomcat","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/Tomcat.md","excerpt":"<h2>Tomcat</h2>\\n<blockquote>\\n<p>Tomcat：部署静态资源(打包后的文件都是静态资源，如 html、css、js、图片等)</p>\\n</blockquote>\\n<h3>下载</h3>\\n<p>尽量不要下载最新的版本，可能会出现版本更新过快而导致的问题，建议下载已经稳定的版本。\\nhttps://tomcat.apache.org</p>\\n<h3>启动</h3>\\n<p>双击 bin\\\\startup.bat</p>\\n<h3>开启后出现闪退的几种问题</h3>\\n<ol>\\n<li>环境变量中没有配置 JAVA_HOME</li>\\n<li>重复 Tomcat</li>\\n<li>端口被占用</li>\\n<li>自行设置的配置出现问题</li>\\n</ol>"}');export{d as comp,m as data};
