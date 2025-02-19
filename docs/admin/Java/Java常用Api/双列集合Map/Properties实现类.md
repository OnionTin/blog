## Properties 实现类

> 是 <RouteLink to="/admin/Java/Java常用Api/双列集合Map/HashTable实现类.md">HashTable 实现类</RouteLink>的子类；
>
> 表示一个持久的属性集；
>
> 可以保存在流中或从流中加载；属性列表中的每个键及其对应的值都是一个字符串。

### 常见的构造方法

| 方法                                   | 作用                                       |
| -------------------------------------- | ------------------------------------------ |
| public Properties()                    | 创建一个无默认值的空属性列表               |
| public Properties(Properties defaults) | 创建一个空属性列表，使用默认属性列表初始化 |

### 常用的方法

| 方法                           | 作用       |
| ------------------------------ | ---------- |
| put (Object key, Object value) | 添加键值对 |
| get (Object key)               | 获取键值对 |
| keySet ()                      | 获取所有键 |

### 方法的使用

```java
package com.wuziqi.gobang.Map;

import java.util.Properties;
import java.util.Set;

public class DemoProperties {
    public static void main(String[] args) {
        // public Properties()
        Properties p = new Properties();

        p.put("张三", 18);
        p.put("李四", 19);
        p.put("王五", 20);
        System.out.println(p); // {王五=20, 张三=18, 李四=19}

        // 遍历
        Set<Object> set = p.keySet();
        for (Object key : set) {
            Object value = p.get(key);
            System.out.println(key + "=" + value);
            //王五=20
            //张三=18
            //李四=19
        }
    }
}
```

### 特有的方法

> 主要的用途是用来<font color=red>加载配置文件(.properties)</font>的
>
> 特定的文件，必须是键值对的形式；其中符号可以是等于号或者是冒号

| 方法                                                    | 作用                                               |
| ------------------------------------------------------- | -------------------------------------------------- |
| public String getProperty(String key)                   | 返回指定键的值，等于之前的 get                     |
| public Object setProperty(String key, String value)     | 设置指定键的值，等同于之前的 put                   |
| public `Set<String>` stringPropertyNames()              | 获取所有键的集合，等同于之前的 keySet              |
| public void store(OutputStream out, String comments)    | 将字节集合写入文件中(comments：文件注释)           |
| <font color=red>public void load(InputStream in)</font> | <font color=red>将特定文件中的数据读取出来</font>  |
| public void store(Writer w, String comments)            | 将字符集合写入文件中(comments：文件注释)           |
| <font color=red>public void load(Reader r) </font>      | <font color=red>将特定文件中的数据读取出来 </font> |

### 方法的使用

```java
package com.wuziqi.gobang.Map;

import java.util.Properties;
import java.util.Set;

public class DemoProperties2 {
    public static void main(String[] args) {
        Properties p = new Properties();

        // public Object setProperty(String key, String value)
        p.setProperty("name", "张三");
        p.setProperty("name", "李四");
        p.setProperty("name", "王五");
        System.out.println(p); // {name=王五}

        // 遍历：public `Set<String>` stringPropertyNames()
        Set<String> set = p.stringPropertyNames();
        for (String key : set) {
            // public String getProperty(String key)
            p.getProperty(key);
        }
    }
}
```

```java
package com.wuziqi.gobang.Map;

import org.omg.CORBA.portable.OutputStream;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Properties;

public class DemoProperties3 {
    public static void main(String[] args) throws Exception {
        Properties p = new Properties();

        p.setProperty("tom", "18");
        p.setProperty("jerry", "19");
        p.setProperty("rose", "20");
        p.setProperty("jerry", "18");
        p.setProperty("rose", "18");
        System.out.println(p);

        // public void store(OutputStream out, String comments)
        p.store(new FileOutputStream("aaa/p.txt"), "加一个注释");
        System.out.println(p);

        // public void load(InputStream in)
        p.load(new FileInputStream("aaa/p.txt"));
        System.out.println(p);
    }
}
```
