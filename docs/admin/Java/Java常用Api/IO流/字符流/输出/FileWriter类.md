## FileWriter 类

### 常见的构造方法

| 方法                                               | 作用                               |
| -------------------------------------------------- | ---------------------------------- |
| public FileWriter(File file)                       | 将输出流写到给定 File 对象的文件中 |
| public FileWriter(File file, boolean append)       | 同上，追加                         |
| public FileWriter(String fileName)                 | 将输出流写到指定名字的文件中       |
| public FileWriter(String fileName, boolean append) | 同上并追加                         |

### 常见的成员方法

| 方法                                             | 作用                         |
| ------------------------------------------------ | ---------------------------- |
| public void close                                | 释放资源                     |
| public void flush                                | 刷新                         |
| public void write(int c)                         | 写入一个字符数据             |
| public void write(char[] cbuf)                   | 写入一个字符数组数据         |
| public void write(char[] cbuf, int off, int len) | 写入一个字符数组的一部分数据 |
| public void write(String str)                    | 写入一个字符串数据           |
| public void write(String str, int off, int len)  | 写入一个字符串的一部分数据   |

### 示例

```java
package com.wuziqi.gobang.IO.ZiFuOutput;

import java.io.FileWriter;

public class FileWriterDemo01 {
    public static void main(String[] args) throws Exception {
        // 给定了一个不存在的文件，那么会自动创建
        // public FileWriter(String fileName)

        FileWriter fw = new FileWriter("aaa/111.txt");
        System.out.println(fw); // java.io.FileWriter@23fc625e

        // public void write(int c)
        fw.write(97); // a
        fw.write(105); // i

        // public void write(char[] cbuf)
        char[] cbuf = {'约', '不'};
        fw.write(cbuf); // 约不

        // public void write(char[] cbuf, int off, int len)
        fw.write(cbuf, 0, 1); // 约

        // public void write(String str)
        fw.write("？"); // ？

        // public void write(String str, int off, int len)
        fw.write("？随便吧。爱约不约", 1, 4); // 随便吧。

        fw.flush();
        fw.close();

        // ai约不约？随便吧。
    }
}
```
