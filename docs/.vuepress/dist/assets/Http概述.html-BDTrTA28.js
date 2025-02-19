import{_ as t,o as l,c as e,e as o}from"./app-CilA4iky.js";const p={},i=o('<h2 id="http-概述-md" tabindex="-1"><a class="header-anchor" href="#http-概述-md"><span>Http 概述.md</span></a></h2><blockquote><p>超文本传输协议(HyperText Transfer Protocol)</p><p>超文本：超级文本，不是一般的文本</p><p>传输协议：定义客户端和服务器端通信时，数据传输的格式</p></blockquote><h3 id="http-协议的特点" tabindex="-1"><a class="header-anchor" href="#http-协议的特点"><span>Http 协议的特点</span></a></h3><ol><li>基于 TCP/IP 的高级协议</li><li>默认端口号 80(一般网站把服务器端口设置成 80，所以访问的时候一般都不带端口号)</li><li>基于请求/响应模型的，一次请求对应一次响应</li><li>无状态的协议，在两个请求和响应之间，互相不干涉不影响</li></ol><h3 id="http-请求消息格式" tabindex="-1"><a class="header-anchor" href="#http-请求消息格式"><span>Http 请求消息格式</span></a></h3><ol><li><p>请求行(请求方式 + 请求 URI + 请求协议/版本)</p><blockquote><p>请求方式(GET、POST、PUT、DELETE、HEAD、OPTIONS、TRACE 一共 7 种)</p><p>GET：</p><ol><li>请求参数在地址栏上显示，实际参数在请求行中</li><li>请求的 URL 地址长度有限制</li><li>不太安全</li></ol><p>POST：</p><ol><li>请求参数在请求体中</li><li>请求的 URL 地址长度没有限制</li><li>相对安全</li></ol></blockquote><blockquote><p>URI：统一资源标识符(格式：虚拟目录 + 资源名称/资源的虚拟路径)</p><p>URL：统一资源定位符(格式：协议 + Ip + 端口 + 虚拟目录 + 资源名称/资源的虚拟路径)</p></blockquote><blockquote><p>协议版本：</p><p>HTTP/1.0：</p><ol><li>请求和响应的 header 和 body 都是明文</li><li>请求和响应的 header 和 body 都是不安全的</li><li>一次连接(tcp 连接)，只能有一次请求和一次响应，响应后会断开连接(tcp 连接：搭桥)</li></ol><p>HTTP/1.1：</p><ol><li>请求和响应的 header 是明文，body 是加密的</li><li>请求和响应的 header 和 body 都是不安全的</li><li>一次连接，可以有多次请求和响应，直到浏览器或服务器有一个断开、或者超时才会断开连接</li></ol><p>HTTP/2.0：</p><ol><li>请求和响应的 header 是明文，body 是加密的</li><li>请求和响应的 header 和 body 都是安全的</li></ol></blockquote></li><li><p>请求头</p></li></ol><blockquote><p>请求头都是 key: value 格式，其中 value 的值如果有多个，不要空格用逗号连接</p></blockquote><table><thead><tr><th>请求头</th><th>说明</th></tr></thead><tbody><tr><td>Accept</td><td>浏览器可以接收的 MIME 数据类型</td></tr><tr><td>Connection</td><td>表示是否需要持续链接</td></tr><tr><td>Content-Length</td><td>请求体的长度(get 没有，因为 get 没有请求体)</td></tr><tr><td>Referer</td><td>告诉服务器是从哪个页面跳转过来的，从浏览器中直接输入的是不会有的。一般做统计和防盗链。</td></tr><tr><td>User-Agent</td><td>告诉服务器访问的浏览器类型，当返回的数据和浏览器类型有关的时候这个属性非常有用。</td></tr><tr><td>Cookie</td><td>浏览器发送的 Cookie</td></tr></tbody></table><blockquote><p>MIME: 大类型/子类型</p><p>比如：text/html,text/css,text/javascript,image/jpeg,image/png,image/gif...都是 MIME 类型</p></blockquote><ol start="3"><li><p>请求空行</p></li><li><p>请求体</p></li></ol><h3 id="http-响应消息格式" tabindex="-1"><a class="header-anchor" href="#http-响应消息格式"><span>Http 响应消息格式</span></a></h3><ol><li>响应行(协议/版本 + 状态码)</li></ol><blockquote><p>状态码：1. 消息 2. 成功 3. 重定向(302：真正的重定向，304：资源未修改，缓存中获取) 4. 请求错误(404：没找到资源，405：请求方法错误，或者没写 doGet、doPost 方法) 5. 服务器错误(500：bug 等，503：服务器维护中)</p></blockquote><ol start="2"><li>响应头</li></ol><blockquote><p>响应头都是 key: value 格式，其中 value 的值如果有多个，不要空格用逗号连接</p></blockquote><table><thead><tr><th>响应头</th><th>说明</th></tr></thead><tbody><tr><td>Content-Type</td><td>告诉浏览器响应回来的 MIME 数据类型；以及让浏览器用什么编码方式进行解析</td></tr><tr><td>Location</td><td>服务器告诉浏览器，接下来去哪里，在重定向中需要使用</td></tr></tbody></table><blockquote><p>MIME: 大类型/子类型</p><p>比如：text/html,text/css,text/javascript,image/jpeg,image/png,image/gif...都是 MIME 类型；</p><p>一个标准的响应头格式：Content-Type: text/html;charset=utf-8(告诉浏览器 MIME 数据类型和解析的编码方式)</p></blockquote><ol start="3"><li><p>响应空行</p></li><li><p>响应体</p></li></ol>',18),a=[i];function d(r,h){return l(),e("div",null,a)}const c=t(p,[["render",d],["__file","Http概述.html.vue"]]),s=JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Http%E6%A6%82%E8%BF%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Http 概述.md","slug":"http-概述-md","link":"#http-概述-md","children":[{"level":3,"title":"Http 协议的特点","slug":"http-协议的特点","link":"#http-协议的特点","children":[]},{"level":3,"title":"Http 请求消息格式","slug":"http-请求消息格式","link":"#http-请求消息格式","children":[]},{"level":3,"title":"Http 响应消息格式","slug":"http-响应消息格式","link":"#http-响应消息格式","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/Http/Http概述.md","excerpt":"<h2>Http 概述.md</h2>\\n<blockquote>\\n<p>超文本传输协议(HyperText Transfer Protocol)</p>\\n<p>超文本：超级文本，不是一般的文本</p>\\n<p>传输协议：定义客户端和服务器端通信时，数据传输的格式</p>\\n</blockquote>\\n<h3>Http 协议的特点</h3>\\n<ol>\\n<li>基于 TCP/IP 的高级协议</li>\\n<li>默认端口号 80(一般网站把服务器端口设置成 80，所以访问的时候一般都不带端口号)</li>\\n<li>基于请求/响应模型的，一次请求对应一次响应</li>\\n<li>无状态的协议，在两个请求和响应之间，互相不干涉不影响</li>\\n</ol>"}');export{c as comp,s as data};
