## HashTable 实现类

只有<font color=red>HashMap</font>的键值对都可以为 null， HashTable、TreeMap 的键和值都不可以为 null，否则会报空指针异常。

```java
package com.wuziqi.gobang.Map;

import sun.reflect.generics.tree.Tree;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.TreeMap;

public class DemoHashTable {
    public static void main(String[] args) {
        Hashtable<String, Integer> ht = new Hashtable<String, Integer>();
        ht.put("aaa", 1);
        // ht.put(null,null); // 报错
        // ht.put("bbb", null); // 报错
        // ht.put(null,2); // 报错
        System.out.println(ht);
        // 结果：{aaa=1}
        // 键和值都不能为 null

        HashMap<String, Integer> hm = new HashMap<String, Integer>();
        hm.put("aaa", 1);
        // hm.put(null,null);
        // hm.put("bbb", null);
        // hm.put(null,2);
        System.out.println(hm);
        // 结果：{aaa=1, null=2, bbb=null}
        // 键合值都可以为 null

        TreeMap<String, Integer> tm = new TreeMap<String, Integer>();
        tm.put("aaa", 1);
        // tm.put(null,null); // 报错
        // tm.put("bbb", null); // 报错
        // tm.put(null,2); // 报错
        System.out.println(tm);
        // 结果：{aaa=1}
        // 键和值都不能为 null
    }
}
```
