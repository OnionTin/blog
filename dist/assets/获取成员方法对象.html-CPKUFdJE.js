import{_ as o,r as p,o as l,c as i,a as n,b as s,d as a,w as t,e as u}from"./app-C_RrakEG.js";const k={},d=n("h2",{id:"获取成员方法对象",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#获取成员方法对象"},[n("span",null,"获取成员方法对象")])],-1),r=n("h3",{id:"如何获取普通的成员方法的对象",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#如何获取普通的成员方法的对象"},[n("span",null,"如何获取普通的成员方法的对象")])],-1),m=n("thead",null,[n("tr",null,[n("th",null,"方法"),n("th",null,"作用")])],-1),v=n("tr",null,[n("td",null,"public Method getMethod(String name, Class<?>... parameterTypes)"),n("td",null,"获取单个成员方法对象")],-1),b=n("td",null,"public Method[] getMethods()",-1),h=n("thead",null,[n("tr",null,[n("th",null,"方法"),n("th",null,"作用")])],-1),g=n("tr",null,[n("td",null,"public Method getDeclaredMethod(String name, Class<?%gt;... parameterTypes)"),n("td",null,"获取单个成员方法对象")],-1),f=n("td",null,"public Method[] getDeclaredMethods()",-1),_=u(`<h3 id="method-类中的方法" tabindex="-1"><a class="header-anchor" href="#method-类中的方法"><span>Method 类中的方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public Object invoke(Object obj, Object... args)</td><td>执行方法</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Reflex</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Constructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo06</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 字节码文件</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.api.Reflex.Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 构造方法对象</span>
        <span class="token class-name">Constructor</span> c <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建实例对象</span>
        <span class="token class-name">Object</span> o1 <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> o2 <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取公共的无参无返回值的方法对象</span>
        <span class="token class-name">Method</span> m_aaa <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用哪个实例对象的方法，以及传入的参数</span>
        <span class="token class-name">Object</span> aaa_value <span class="token operator">=</span> m_aaa<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aaa_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 无参无返回值</span>
        <span class="token comment">// null</span>

        <span class="token comment">// 获取公共的有参无返回值的方法对象（需要传入参数的class类型）</span>
        <span class="token class-name">Method</span> m_bbb <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用哪个实例对象的方法，以及传入的参数</span>
        <span class="token class-name">Object</span> bbb_value <span class="token operator">=</span> m_bbb<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> <span class="token string">&quot;bbb方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bbb_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// bbb方法</span>
        <span class="token comment">// null</span>

        <span class="token comment">// 获取私有的的无参有返回值的方法对象</span>
        <span class="token class-name">Method</span> m_ccc <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置暴力反射</span>
        m_ccc<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用哪个实例对象的方法，以及传入的参数</span>
        <span class="token class-name">Object</span> ccc_value <span class="token operator">=</span> m_ccc<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ccc_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 无参有返回值：10</span>

        <span class="token comment">// 获取没有修饰符的有参有返回值的方法对象（需要传入参数的class类型）</span>
        <span class="token class-name">Method</span> m_ddd <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">&quot;ddd&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置暴力反射</span>
        m_ddd<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用哪个实例对象的方法，以及传入的参数</span>
        <span class="token class-name">Object</span> ddd_value <span class="token operator">=</span> m_ddd<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span> <span class="token string">&quot;我传了个：&quot;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ddd_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 有参有返回值，我传了个：1000</span>

        <span class="token comment">// 向下转型</span>
        <span class="token class-name">Method</span> m_eee <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">&quot;eee&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置暴力反射</span>
        m_eee<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用哪个实例对象的方法，以及传入的参数</span>
        <span class="token class-name">Integer</span> eee_value <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span> m_eee<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>eee_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 123</span>

        <span class="token comment">// 获取所有的(哪怕是继承的也包含)公共的的成员方法</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods1 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// public java.lang.String com.api.Reflex.Cat.toString()</span>
            <span class="token comment">// public static void com.api.Reflex.Cat.aaa()</span>
            <span class="token comment">// public static void com.api.Reflex.Cat.bbb(java.lang.String)</span>
            <span class="token comment">// public final void java.lang.Object.wait() ...</span>
            <span class="token comment">// public final void java.lang.Object.wait(long,int) ...</span>
            <span class="token comment">// public final native void java.lang.Object.wait(long) ...</span>
            <span class="token comment">// public boolean java.lang.Object.equals(java.lang.Object)</span>
            <span class="token comment">// public native int java.lang.Object.hashCode()</span>
            <span class="token comment">// public final native java.lang.Class java.lang.Object.getClass()</span>
            <span class="token comment">// public final native void java.lang.Object.notify()</span>
            <span class="token comment">// public final native void java.lang.Object.notifyAll()</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 获取本类的所有的成员方法</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods2 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// public java.lang.String com.api.Reflex.Cat.toString()</span>
            <span class="token comment">// private int com.api.Reflex.Cat.ccc()</span>
            <span class="token comment">// public static void com.api.Reflex.Cat.bbb(java.lang.String)</span>
            <span class="token comment">// java.lang.String com.api.Reflex.Cat.ddd(int)</span>
            <span class="token comment">// public static void com.api.Reflex.Cat.aaa()</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Cat{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">&quot;, sex=&#39;&quot;</span> <span class="token operator">+</span> sex <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 无参无返回值</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;无参无返回值&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 有参无返回值</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bbb</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 无参有返回值</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">ccc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;无参有返回值：&quot;</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 有参有返回值</span>
    <span class="token class-name">String</span> <span class="token function">ddd</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;有参有返回值，&quot;</span> <span class="token operator">+</span> s <span class="token operator">+</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 向下转型</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> <span class="token function">eee</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function y(w,j){const c=p("RouteLink"),e=p("font");return l(),i("div",null,[d,n("p",null,[s("成员方法对象的访问权限相关的要求，与"),a(c,{to:"/admin/Java/Java进阶/反射/获取构造方法.md"},{default:t(()=>[s("构造方法对象")]),_:1}),s("的访问权限相关的要求相同，都涉及到"),a(e,{color:"red"},{default:t(()=>[s("暴力反射")]),_:1}),s("相关内容。")]),r,n("p",null,[s("获取"),a(e,{color:"red"},{default:t(()=>[s("public")]),_:1}),s(" 修饰的成员变量对象")]),n("table",null,[m,n("tbody",null,[v,n("tr",null,[b,n("td",null,[s("获取"),a(e,{color:"red"},{default:t(()=>[s("所有的(哪怕是继承的)公共的")]),_:1}),s("成员方法对象")])])])]),n("p",null,[s("获取"),a(e,{color:"red"},{default:t(()=>[s("忽略修饰符")]),_:1}),s("的成员变量对象")]),n("table",null,[h,n("tbody",null,[g,n("tr",null,[f,n("td",null,[s("获取"),a(e,{color:"red"},{default:t(()=>[s("本类中")]),_:1}),s("的所有成员方法对象")])])])]),_])}const S=o(k,[["render",y],["__file","获取成员方法对象.html.vue"]]),M=JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E8%8E%B7%E5%8F%96%E6%88%90%E5%91%98%E6%96%B9%E6%B3%95%E5%AF%B9%E8%B1%A1.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"获取成员方法对象","slug":"获取成员方法对象","link":"#获取成员方法对象","children":[{"level":3,"title":"如何获取普通的成员方法的对象","slug":"如何获取普通的成员方法的对象","link":"#如何获取普通的成员方法的对象","children":[]},{"level":3,"title":"Method 类中的方法","slug":"method-类中的方法","link":"#method-类中的方法","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/反射/获取成员方法对象.md","excerpt":"<h2>获取成员方法对象</h2>\\n<p>成员方法对象的访问权限相关的要求，与<a href=\\"/blog/admin/Java/Java进阶/反射/获取构造方法.md\\" target=\\"_blank\\">构造方法对象</a>的访问权限相关的要求相同，都涉及到相关内容。</p>\\n<h3>如何获取普通的成员方法的对象</h3>\\n<p>获取 修饰的成员变量对象</p>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public Method getMethod(String name, Class&lt;?&gt;... parameterTypes)</td>\\n<td>获取单个成员方法对象</td>\\n</tr>\\n<tr>\\n<td>public Method[] getMethods()</td>\\n<td>获取成员方法对象</td>\\n</tr>\\n</tbody>\\n</table>"}');export{S as comp,M as data};
