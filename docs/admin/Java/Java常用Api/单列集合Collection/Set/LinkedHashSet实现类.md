## LinkedHashSet 实现类

与 <RouteLink to="/admin/Java/Java常用Api/单列集合Collection/Set/HashSet实现类.md">HashSet</RouteLink>实现类一样，唯一的不同就是 LinkedHashSet 实现类是<font color=red>有序</font>的集合（即：存进去的顺序和取出来的顺序是一致的）

```java
package com.wuziqi.gobang.Set;

import java.util.LinkedHashSet;

public class HashSets {
    public static void main(String[] args) {
        LinkedHashSet <String> lhs = new LinkedHashSet<String>();
        lhs.add("aaa");
        lhs.add("ccc");
        lhs.add("bbb");
        System.out.println(lhs); // [aaa, ccc, bbb]
    }
}
```
