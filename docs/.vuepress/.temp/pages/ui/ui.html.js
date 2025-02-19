import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/ui/ui.html.vue"
const data = JSON.parse("{\"path\":\"/ui/ui.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Ui 设计网站积累\",\"slug\":\"ui-设计网站积累\",\"link\":\"#ui-设计网站积累\",\"children\":[{\"level\":3,\"title\":\"设计相关\",\"slug\":\"设计相关\",\"link\":\"#设计相关\",\"children\":[]},{\"level\":3,\"title\":\"Css\",\"slug\":\"css\",\"link\":\"#css\",\"children\":[]},{\"level\":3,\"title\":\"素材网站\",\"slug\":\"素材网站\",\"link\":\"#素材网站\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"ui/ui.md\",\"excerpt\":\"<h2>Ui 设计网站积累</h2>\\n<h3>设计相关</h3>\\n<ul>\\n<li><a href=\\\"https://js.design/community?category=explore\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">即时设计</a></li>\\n<li><a href=\\\"https://16map.com/#term-111265\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">ui 设计素材导航</a></li>\\n<li><a href=\\\"https://www.iamxk.com/ui-sources-website\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">ui 设计网站导航</a></li>\\n<li><a href=\\\"https://lanhuapp.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">蓝湖</a></li>\\n</ul>\"}")
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
