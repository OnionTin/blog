## LinkedHashMap 实现类

根<RouteLink to="/admin/Java/Java常用Api/单列集合Collection/Set/LinkedHashSet实现类.md">LinkedHashSet</RouteLink>和<RouteLink to="/admin/Java/Java常用Api/单列集合Collection/Set/HashSet实现类.md">HashSet</RouteLink>一样；LinkedHashMap 实现类比<RouteLink to="/admin/Java/Java常用Api/双列集合Map/HashMap实现类.md">HashMap</RouteLink>多了一个<font color=red>有序</font>的特性。

```java
package com.wuziqi.gobang.Map;

import java.util.LinkedHashMap;

public class DemoLinkedHashMap {
    public static void main(String[] args) {
        LinkedHashMap<String, Integer> map = new LinkedHashMap<String, Integer>();
        map.put("bbb", 18);
        map.put("aaa", 16);
        map.put("ccc", 22);
        for (String key : map.keySet()) {
            System.out.println(key + "=" + map.get(key));
            // 结果：有序的，怎么存怎么返
            // bbb=18
            // aaa=16
            // ccc=22
        }
    }
}
```
