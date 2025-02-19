## LinkedList 实现类

需要导包，在 java.util 下；LinkedList 是 List 接口的实现类；底层是双向链表数据结构。

### LinkedList 类的特点(<RouteLink to="/admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.md">同 ArrayList</RouteLink>)

1. <font color=red>有序</font>的集合（即：存进去的顺序和取出来的顺序是一致的）
2. <font color=red>有索引</font>
3. 元素都<font color=red>允许重复</font>

### 常见的构造方法

| 方法              | 作用     |
| ----------------- | -------- |
| public LinkedList | new 对象 |

### 常见的成员方法

<RouteLink to="/admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.md">同 ArrayList</RouteLink>
| LinkedList 特有的方法 | 作用 |
| ----------------- | -------- |
| public void addFirst(Object e) | 在首位添加元素|
| public void addLast(Object e) | 在末尾添加元素 |
| public Object getFirst() | 获取首位元素 |
| public Object getLast() | 获取末尾元素 |
| public Object removeFirst() | 删除首位元素，返回被删除的元素 |
| public Object removeLast() | 删除末尾元素，返回被删除的元素 |

### 遍历

<RouteLink to="/admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.md">同 ArrayList</RouteLink>

### 到底用 ArrayList 还是 LinkedList

> 需要判断对时间和空间的权衡来选择使用哪种集合类。
>
> ArrayList：<RouteLink to="/admin/Java/Java常用Api/数据结构.md">数组数据结构</RouteLink>，<font color=red>查询快，增删慢</font>
>
> LinkedList：<RouteLink to="/admin/Java/Java常用Api/数据结构.md">链表数据结构</RouteLink>，<font color=red>查询慢，增删快</font>

1. 需要考虑存取速度和 LinkedList 需要更多的内存空间

2. 如果需要频繁的插入和删除元素，建议使用 LinkedList

3. 如果需要频繁的随机访问元素，建议使用 ArrayList
