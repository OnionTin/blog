import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/类加载器.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"类加载器\",\"slug\":\"类加载器\",\"link\":\"#类加载器\",\"children\":[{\"level\":3,\"title\":\"类加载器的作用\",\"slug\":\"类加载器的作用\",\"link\":\"#类加载器的作用\",\"children\":[]},{\"level\":3,\"title\":\"类加载器分类\",\"slug\":\"类加载器分类\",\"link\":\"#类加载器分类\",\"children\":[]},{\"level\":3,\"title\":\"类加载器的分层关系\",\"slug\":\"类加载器的分层关系\",\"link\":\"#类加载器的分层关系\",\"children\":[]},{\"level\":3,\"title\":\"类加载器的加载顺序\",\"slug\":\"类加载器的加载顺序\",\"link\":\"#类加载器的加载顺序\",\"children\":[]},{\"level\":3,\"title\":\"如何获取类加载器对象\",\"slug\":\"如何获取类加载器对象\",\"link\":\"#如何获取类加载器对象\",\"children\":[]},{\"level\":3,\"title\":\"类加载的相关方法\",\"slug\":\"类加载的相关方法\",\"link\":\"#类加载的相关方法\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/类加载器.md\",\"excerpt\":\"<h2>类加载器</h2>\\n<p>什么是类加载器？\\n用来加载.class 文件到内存中，并生成对应的 Class 对象。</p>\\n<h3>类加载器的作用</h3>\\n<p>用来把本地磁盘中的类(class)装载进内存中，形成一个字节码对象。</p>\\n<h3>类加载器分类</h3>\\n<ul>\\n<li>\\n<p>引导类加载器(Bootstrap ClassLoader)</p>\\n<p>加载的是 jdk 中，jre 下的 lib 目录下的 rt.jar 中的文件</p>\\n</li>\\n<li>\\n<p>扩展类加载器(Extension ClassLoader)</p>\\n<p>加载的是 jdk 中，jre 下的 lib 目录下的 ext 中的 jar 文件 中的文件</p>\\n</li>\\n<li>\\n<p>系统类加载器(System ClassLoader)</p>\\n<p>加载的是用户类路径(classpath)下的类库</p>\\n<p>classpath：用来存放.class 文件的路径；这个路径可以变化；由我们创建项目的时候指定的，如果不做修改，默认就是 项目名/bin</p>\\n</li>\\n</ul>\"}")
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
