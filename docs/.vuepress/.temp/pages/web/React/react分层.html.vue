<template><div><h2 id="react-分层" tabindex="-1"><a class="header-anchor" href="#react-分层"><span>react 分层</span></a></h2>
<p><code v-pre>State</code>: 数据状态</p>
<p><code v-pre>Reducer</code>：纯函数，只承担计算 State 的功能，不合适承担其他功能，也承担不了，因为理论上，纯函数不能进行读写操作。</p>
<p><code v-pre>View</code>：与 State 一一对应，可以看作 State 的视觉层，也不合适承担其他功能。</p>
<p><code v-pre>Action</code>：存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作。</p>
</div></template>


