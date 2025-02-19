import{_ as l,o as e,c as i,e as t}from"./app-CvP7wor-.js";const r="/blog/assets/过滤器链-B8nj367U.jpg",a={},n=t('<h2 id="filter-概述" tabindex="-1"><a class="header-anchor" href="#filter-概述"><span>Filter 概述</span></a></h2><blockquote><p>Filter：拦截，过滤器，javaweb 三大组件(servlet、filter、listener)之一，属于服务器端；</p><p>过滤器的目的就是为了提高代码的复用性，简化代码；</p><p>Filter 与 Servlet 非常相似，区别在于 Servlet 用于处理客户端请求，生成响应，而 Filter 用于对 Servlet 产生的响应进行拦截和过滤，从而实现一些特殊的功能。</p><p>Filter 实现类是 javax.servlet.Filter</p></blockquote><h3 id="过滤器的步骤" tabindex="-1"><a class="header-anchor" href="#过滤器的步骤"><span>过滤器的步骤</span></a></h3><ol><li>创建一个类，实现 Filter 接口</li><li>重写方法</li><li>配置拦截路径</li></ol><h3 id="过滤器的使用场景" tabindex="-1"><a class="header-anchor" href="#过滤器的使用场景"><span>过滤器的使用场景</span></a></h3><ol><li>登录验证</li><li>权限控制</li><li>统一编码处理(比如获取请求参数中文乱码的问题，将代码从 servlet 中抽取出来)</li><li>敏感词汇过滤</li></ol><h3 id="filter-生命周期" tabindex="-1"><a class="header-anchor" href="#filter-生命周期"><span>Filter 生命周期</span></a></h3><ol><li>初始化 init()</li><li>过滤 doFilter()</li><li>销毁 destroy()</li></ol><h3 id="filter-servlet-执行顺序" tabindex="-1"><a class="header-anchor" href="#filter-servlet-执行顺序"><span>Filter + Servlet 执行顺序</span></a></h3><ol><li>服务器开启的时候执行 filter 的 init</li><li>然后执行 servlet 的 init</li><li>然后执行 filter 的 doFilter，拦截放行前的代码</li><li>然后执行 servlet 的 service, doGet/doPost</li><li>然后执行 filter 的 doFilter，拦截放行后的代码</li><li>服务器关闭的时候会执行 servlet 的 destroy</li><li>然后执行 filter 的 destroy</li></ol><h3 id="url-pattern-配置" tabindex="-1"><a class="header-anchor" href="#url-pattern-配置"><span>url-pattern 配置</span></a></h3><blockquote><p>servlet 的 url-pattern 配置：目的是为了设置具体如何访问这个 servlet 资源</p><p>filter 的 ur-pattern 配置的目的：为了设置具体的拦截或者说过滤的资源</p></blockquote><ol><li>精确匹配：/index.jsp</li><li>目录匹配：/user/*</li><li>后缀名匹配：*.jsp</li><li>拦截所有资源：/*</li></ol><h3 id="filter-的配置方式" tabindex="-1"><a class="header-anchor" href="#filter-的配置方式"><span>Filter 的配置方式</span></a></h3><ol><li>web.xml 配置</li><li>注解配置(@WebFilter(&quot;/*&quot;)</li></ol><h3 id="过滤器链及执行顺序" tabindex="-1"><a class="header-anchor" href="#过滤器链及执行顺序"><span>过滤器链及执行顺序</span></a></h3><blockquote><p>就是配置多个过滤器，合在一起就是过滤器链</p></blockquote><ol><li>配置文件方式：按照 filter 标签的配置顺序依次执行</li><li>注解方式：按照 filter 类文件的类名的字典顺序(从小到大)执行</li><li>destory 顺序和加载顺序正好倒过来</li></ol><p>两个过滤器的执行顺序：</p><ol><li>filter 1 init</li><li>filter 2 init</li><li>servlet init</li><li>filter 1 前</li><li>filter 2 前</li><li>servlet service</li><li>filter 2 后</li><li>filter 1 后</li><li>filter 2 destroy</li><li>filter 1 destroy</li></ol><p><img src="'+r+'" alt="过滤器链"></p>',21),s=[n];function o(p,h){return e(),i("div",null,s)}const d=l(a,[["render",o],["__file","Filter概述.html.vue"]]),f=JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/Filter/Filter%E6%A6%82%E8%BF%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Filter 概述","slug":"filter-概述","link":"#filter-概述","children":[{"level":3,"title":"过滤器的步骤","slug":"过滤器的步骤","link":"#过滤器的步骤","children":[]},{"level":3,"title":"过滤器的使用场景","slug":"过滤器的使用场景","link":"#过滤器的使用场景","children":[]},{"level":3,"title":"Filter 生命周期","slug":"filter-生命周期","link":"#filter-生命周期","children":[]},{"level":3,"title":"Filter + Servlet 执行顺序","slug":"filter-servlet-执行顺序","link":"#filter-servlet-执行顺序","children":[]},{"level":3,"title":"url-pattern 配置","slug":"url-pattern-配置","link":"#url-pattern-配置","children":[]},{"level":3,"title":"Filter 的配置方式","slug":"filter-的配置方式","link":"#filter-的配置方式","children":[]},{"level":3,"title":"过滤器链及执行顺序","slug":"过滤器链及执行顺序","link":"#过滤器链及执行顺序","children":[]}]}],"git":{"updatedTime":1719328568000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/Filter/Filter概述.md","excerpt":"<h2>Filter 概述</h2>\\n<blockquote>\\n<p>Filter：拦截，过滤器，javaweb 三大组件(servlet、filter、listener)之一，属于服务器端；</p>\\n<p>过滤器的目的就是为了提高代码的复用性，简化代码；</p>\\n<p>Filter 与 Servlet 非常相似，区别在于 Servlet 用于处理客户端请求，生成响应，而 Filter 用于对 Servlet 产生的响应进行拦截和过滤，从而实现一些特殊的功能。</p>\\n<p>Filter 实现类是 javax.servlet.Filter</p>\\n</blockquote>\\n<h3>过滤器的步骤</h3>"}');export{d as comp,f as data};
