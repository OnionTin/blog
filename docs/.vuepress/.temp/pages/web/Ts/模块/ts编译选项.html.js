import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/模块/ts编译选项.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E6%A8%A1%E5%9D%97/ts%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"ts 编译选项\",\"slug\":\"ts-编译选项\",\"link\":\"#ts-编译选项\",\"children\":[{\"level\":3,\"title\":\"include 指定需要编译的文件\",\"slug\":\"include-指定需要编译的文件\",\"link\":\"#include-指定需要编译的文件\",\"children\":[]},{\"level\":3,\"title\":\"exclude 排除不需要编译的文件\",\"slug\":\"exclude-排除不需要编译的文件\",\"link\":\"#exclude-排除不需要编译的文件\",\"children\":[]},{\"level\":3,\"title\":\"files: [ ... 文件名 ]\",\"slug\":\"files-文件名\",\"link\":\"#files-文件名\",\"children\":[]},{\"level\":3,\"title\":\"compilerOptions 配置选项\",\"slug\":\"compileroptions-配置选项\",\"link\":\"#compileroptions-配置选项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/模块/ts编译选项.md\",\"excerpt\":\"<h2>ts 编译选项</h2>\\n<h3>include 指定需要编译的文件</h3>\\n<div class=\\\"language-json\\\" data-ext=\\\"json\\\" data-title=\\\"json\\\"><pre class=\\\"language-json\\\"><code>include<span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"./src/**/*\\\"</span><span class=\\\"token punctuation\\\">]</span> <span class=\\\"token comment\\\">// (src: src 目录下 \\\\*_: 任意目录 _: 任意文件)</span>\\n</code></pre></div>\"}")
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
