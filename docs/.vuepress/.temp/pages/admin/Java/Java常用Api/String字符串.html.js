import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/String字符串.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/String%E5%AD%97%E7%AC%A6%E4%B8%B2.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"String 字符串\",\"slug\":\"string-字符串\",\"link\":\"#string-字符串\",\"children\":[{\"level\":3,\"title\":\"常见的构造方法\",\"slug\":\"常见的构造方法\",\"link\":\"#常见的构造方法\",\"children\":[]},{\"level\":3,\"title\":\"成员方法\",\"slug\":\"成员方法\",\"link\":\"#成员方法\",\"children\":[]}]}],\"git\":{\"updatedTime\":1711099054000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/Java常用Api/String字符串.md\",\"excerpt\":\"<h2>String 字符串</h2>\\n<p>什么是 String？</p>\\n<ul>\\n<li>String 类用于表示和操作字符串。</li>\\n<li>String 类是 final 类型的，因此不能被继承。</li>\\n<li>字符串是常量，一旦被赋值，就不能被更改(长度不可以改变的字符序列)。</li>\\n</ul>\\n<p>String 是一个引用数据类型</p>\\n<p>是 jdk 给我们提供好的一个现成的 String 类</p>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>String()</td>\\n<td>初始化一个新创建的 String 对象，使其表示一个空字符序列。</td>\\n</tr>\\n<tr>\\n<td>public String(byte[] bytes)</td>\\n<td>将字节数组转成字符串</td>\\n</tr>\\n<tr>\\n<td>public String(byte[] bytes,int offset,int length)</td>\\n<td>将字节数的一部分组转成字符串</td>\\n</tr>\\n<tr>\\n<td>public String(char[] value)</td>\\n<td>分配一个新的 String，将字符数组转成字符串</td>\\n</tr>\\n<tr>\\n<td>public String(char[] value,int offset,int count)</td>\\n<td>将字符数组的一部分转成字符串</td>\\n</tr>\\n<tr>\\n<td>public String(String original)</td>\\n<td>初始化一个新的 String 对象，使其表示一个与参数相同的字符序列；换句话说，新创建的字符串是该参数字符串的副本。</td>\\n</tr>\\n<tr>\\n<td>String s = \\\"abc\\\"</td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
