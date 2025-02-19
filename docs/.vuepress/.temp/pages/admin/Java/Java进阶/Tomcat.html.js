import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Tomcat.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Tomcat.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Tomcat\",\"slug\":\"tomcat\",\"link\":\"#tomcat\",\"children\":[{\"level\":3,\"title\":\"下载\",\"slug\":\"下载\",\"link\":\"#下载\",\"children\":[]},{\"level\":3,\"title\":\"启动\",\"slug\":\"启动\",\"link\":\"#启动\",\"children\":[]},{\"level\":3,\"title\":\"开启后出现闪退的几种问题\",\"slug\":\"开启后出现闪退的几种问题\",\"link\":\"#开启后出现闪退的几种问题\",\"children\":[]},{\"level\":3,\"title\":\"关闭\",\"slug\":\"关闭\",\"link\":\"#关闭\",\"children\":[]},{\"level\":3,\"title\":\"Tomcat 目录结构\",\"slug\":\"tomcat-目录结构\",\"link\":\"#tomcat-目录结构\",\"children\":[]},{\"level\":3,\"title\":\"Web 项目目录结构\",\"slug\":\"web-项目目录结构\",\"link\":\"#web-项目目录结构\",\"children\":[]},{\"level\":3,\"title\":\"Tomcat 内部机制\",\"slug\":\"tomcat-内部机制\",\"link\":\"#tomcat-内部机制\",\"children\":[]},{\"level\":3,\"title\":\"部署 Web 项目\",\"slug\":\"部署-web-项目\",\"link\":\"#部署-web-项目\",\"children\":[]},{\"level\":3,\"title\":\"本地域名设置\",\"slug\":\"本地域名设置\",\"link\":\"#本地域名设置\",\"children\":[]},{\"level\":3,\"title\":\"在 idea 中集成 Tomcat\",\"slug\":\"在-idea-中集成-tomcat\",\"link\":\"#在-idea-中集成-tomcat\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Tomcat.md\",\"excerpt\":\"<h2>Tomcat</h2>\\n<blockquote>\\n<p>Tomcat：部署静态资源(打包后的文件都是静态资源，如 html、css、js、图片等)</p>\\n</blockquote>\\n<h3>下载</h3>\\n<p>尽量不要下载最新的版本，可能会出现版本更新过快而导致的问题，建议下载已经稳定的版本。\\nhttps://tomcat.apache.org</p>\\n<h3>启动</h3>\\n<p>双击 bin\\\\startup.bat</p>\\n<h3>开启后出现闪退的几种问题</h3>\\n<ol>\\n<li>环境变量中没有配置 JAVA_HOME</li>\\n<li>重复 Tomcat</li>\\n<li>端口被占用</li>\\n<li>自行设置的配置出现问题</li>\\n</ol>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
