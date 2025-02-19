<template><div><h2 id="其他更改-具体参考-vue-迁移指南" tabindex="-1"><a class="header-anchor" href="#其他更改-具体参考-vue-迁移指南"><span>其他更改 (具体参考 vue 迁移指南)</span></a></h2>
<h3 id="_1-data-必须是函数-不能是对象类型" tabindex="-1"><a class="header-anchor" href="#_1-data-必须是函数-不能是对象类型"><span>1. data 必须是函数，不能是对象类型</span></a></h3>
<h3 id="_2-过度类-关于类名的更改" tabindex="-1"><a class="header-anchor" href="#_2-过度类-关于类名的更改"><span>2. 过度类 关于类名的更改</span></a></h3>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">// Vue2.x写法
.v-enter,
.v-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-leave,
.v-enter-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">// Vue3.x写法
.v-enter-from,
.v-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-leave-from,
.v-enter-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-移除-keycode-作为-v-on-的修饰符-同时不再支持-vue-config-keycodes" tabindex="-1"><a class="header-anchor" href="#_4-移除-keycode-作为-v-on-的修饰符-同时不再支持-vue-config-keycodes"><span>4. 移除 keyCode 作为 v-on 的修饰符，同时不再支持 Vue.config.keyCodes</span></a></h3>
<h3 id="_5-移除-v-on-native-修饰符" tabindex="-1"><a class="header-anchor" href="#_5-移除-v-on-native-修饰符"><span>5. 移除 v-on.native 修饰符</span></a></h3>
<h3 id="_6-移除-filter" tabindex="-1"><a class="header-anchor" href="#_6-移除-filter"><span>6. 移除 filter</span></a></h3>
<h3 id="_7-移除内联模板" tabindex="-1"><a class="header-anchor" href="#_7-移除内联模板"><span>7. 移除内联模板</span></a></h3>
<h3 id="_8-移除-children" tabindex="-1"><a class="header-anchor" href="#_8-移除-children"><span>8. 移除 $children</span></a></h3>
<h3 id="_9-移除-listeners" tabindex="-1"><a class="header-anchor" href="#_9-移除-listeners"><span>9. 移除 $listeners</span></a></h3>
<h3 id="_10-移除-set" tabindex="-1"><a class="header-anchor" href="#_10-移除-set"><span>10. 移除 $set</span></a></h3>
<h3 id="_11-移除-delete" tabindex="-1"><a class="header-anchor" href="#_11-移除-delete"><span>11. 移除 $delete</span></a></h3>
<h3 id="_12-移除-on-off-和-once-实例方法" tabindex="-1"><a class="header-anchor" href="#_12-移除-on-off-和-once-实例方法"><span>12. 移除 $on, $off 和 $once 实例方法</span></a></h3>
<h3 id="_13-移除-destroy-实例方法" tabindex="-1"><a class="header-anchor" href="#_13-移除-destroy-实例方法"><span>13. 移除 $destroy 实例方法</span></a></h3>
<h3 id="_14-移除-on-off-和-once-实例方法" tabindex="-1"><a class="header-anchor" href="#_14-移除-on-off-和-once-实例方法"><span>14. 移除 $on, $off 和 $once 实例方法</span></a></h3>
<h3 id="_15-移除-destroy-实例方法" tabindex="-1"><a class="header-anchor" href="#_15-移除-destroy-实例方法"><span>15. 移除 $destroy 实例方法</span></a></h3>
<h3 id="_16-移除-isserver-实例属性" tabindex="-1"><a class="header-anchor" href="#_16-移除-isserver-实例属性"><span>16. 移除 $isServer 实例属性</span></a></h3>
<h3 id="_17-移除-scopedslots-实例属性" tabindex="-1"><a class="header-anchor" href="#_17-移除-scopedslots-实例属性"><span>17. 移除 $scopedSlots 实例属性</span></a></h3>
<h3 id="_18-移除-createelement-实例方法" tabindex="-1"><a class="header-anchor" href="#_18-移除-createelement-实例方法"><span>18. 移除 $createElement 实例方法</span></a></h3>
<h3 id="_19-移除-attrs-和-listeners-属性" tabindex="-1"><a class="header-anchor" href="#_19-移除-attrs-和-listeners-属性"><span>19. 移除 $attrs 和 $listeners 属性</span></a></h3>
<h3 id="_20-移除-slots-属性" tabindex="-1"><a class="header-anchor" href="#_20-移除-slots-属性"><span>20. 移除 $slots 属性</span></a></h3>
<h3 id="_21-移除-createelement-实例方法" tabindex="-1"><a class="header-anchor" href="#_21-移除-createelement-实例方法"><span>21. 移除 $createElement 实例方法</span></a></h3>
<h3 id="_22-移除-attrs-和-listeners-属性" tabindex="-1"><a class="header-anchor" href="#_22-移除-attrs-和-listeners-属性"><span>22. 移除 $attrs 和 $listeners 属性</span></a></h3>
<h3 id="_23-移除-slots-属性" tabindex="-1"><a class="header-anchor" href="#_23-移除-slots-属性"><span>23. 移除 $slots 属性</span></a></h3>
<h3 id="_24-移除-createelement-实例方法" tabindex="-1"><a class="header-anchor" href="#_24-移除-createelement-实例方法"><span>24. 移除 $createElement 实例方法</span></a></h3>
</div></template>


