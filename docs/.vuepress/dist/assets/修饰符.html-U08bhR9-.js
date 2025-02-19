import{_ as t,o as e,c as l,e as p}from"./app-CvP7wor-.js";const c="/blog/assets/导包-BIMQ3OdV.jpg",a="/blog/assets/不同包有继承关系-zp9EBy51.jpg",d="/blog/assets/同包不同类无继承关系-CyISECbP.jpg",i="/blog/assets/同包不同类有继承关系-BjWW5QbI.jpg",n={},r=p('<h2 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符"><span>修饰符</span></a></h2><p><code>开发中一般用public 修饰类，用private 修饰属性</code></p><p><code>public &gt; protected &gt; 默认的(什么都不写) &gt; private</code></p><p><code>public：都行</code></p><p><code>protected：既不同包又不继承那不行</code></p><p><code>默认的：不同包就不行</code></p><p><code>private：只有同类才能访问</code></p><blockquote><p>以后开发中，一个类的各个组成部分都用什么修饰符来修饰</p><p>类: public</p><p>属性: private</p><p>构造方法: public，偶尔用 private</p><p>成员方法: public</p></blockquote><h3 id="导包" tabindex="-1"><a class="header-anchor" href="#导包"><span>导包</span></a></h3><ol><li><p>import 包名.类名</p></li><li><p>快捷键: Ctrl + Shift + O</p></li><li><p>包名：一般是小写的域名的倒置，去掉 www</p></li><li><p>如果两个类不在同一个包下，类 A 想要使用 类 B，必须导入类 B 所在的包</p></li></ol><p>com.aaa</p><p>|-- A</p><p>com.bbb</p><p>|-- B</p><p><img src="'+c+'" alt="导包"></p><h3 id="访问权限修饰符" tabindex="-1"><a class="header-anchor" href="#访问权限修饰符"><span>访问权限修饰符</span></a></h3><p><code>public &gt; protected &gt; 默认的(什么都不写) &gt; private</code></p><p><code>public：都行</code></p><p><code>protected：既不同包又不继承那不行</code></p><p><code>默认的：不同包就不行</code></p><p><code>private：只有同类才能访问</code></p><table><thead><tr><th style="text-align:center;">修饰符</th><th style="text-align:center;">同类中</th><th style="text-align:center;">同包不同类有继承关系</th><th style="text-align:center;">同包不同类无继承关系</th><th style="text-align:center;">不同包有继承关系</th><th style="text-align:left;">不同包没有继承关系</th></tr></thead><tbody><tr><td style="text-align:center;">public</td><td style="text-align:center;">true</td><td style="text-align:center;">true</td><td style="text-align:center;">true</td><td style="text-align:center;">true</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:center;">protected</td><td style="text-align:center;">true</td><td style="text-align:center;">true</td><td style="text-align:center;">true</td><td style="text-align:center;">true</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">默认的</td><td style="text-align:center;">true</td><td style="text-align:center;">true</td><td style="text-align:center;">true</td><td style="text-align:center;">false</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">private</td><td style="text-align:center;">true</td><td style="text-align:center;">false</td><td style="text-align:center;">false</td><td style="text-align:center;">false</td><td style="text-align:left;">false</td></tr></tbody></table><ol><li>不同包有继承关系</li></ol><p><img src="'+a+'" alt="不同包有继承关系"></p><ol start="2"><li>同包不同类无继承关系</li></ol><p><img src="'+d+'" alt="同包不同类无继承关系"></p><ol start="3"><li>同包不同类有继承关系</li></ol><p><img src="'+i+'" alt="同包不同类有继承关系"></p>',28),o=[r];function s(g,h){return e(),l("div",null,o)}const x=t(n,[["render",s],["__file","修饰符.html.vue"]]),b=JSON.parse('{"path":"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E4%BF%AE%E9%A5%B0%E7%AC%A6.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"修饰符","slug":"修饰符","link":"#修饰符","children":[{"level":3,"title":"导包","slug":"导包","link":"#导包","children":[]},{"level":3,"title":"访问权限修饰符","slug":"访问权限修饰符","link":"#访问权限修饰符","children":[]}]}],"git":{"updatedTime":1710404435000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java基础/修饰符.md","excerpt":"<h2>修饰符</h2>\\n<p><code>开发中一般用public 修饰类，用private 修饰属性</code></p>\\n<p><code>public &gt; protected &gt; 默认的(什么都不写) &gt; private</code></p>\\n<p><code>public：都行</code></p>\\n<p><code>protected：既不同包又不继承那不行</code></p>\\n<p><code>默认的：不同包就不行</code></p>\\n<p><code>private：只有同类才能访问</code></p>\\n<blockquote>\\n<p>以后开发中，一个类的各个组成部分都用什么修饰符来修饰</p>\\n<p>类: public</p>\\n<p>属性: private</p>\\n<p>构造方法: public，偶尔用 private</p>\\n<p>成员方法: public</p>\\n</blockquote>"}');export{x as comp,b as data};
