## FileOutputStream 类.md

### 常见的构造方法

| 方法                                                 | 作用                                                                    |
| ---------------------------------------------------- | ----------------------------------------------------------------------- |
| public FileOutputStream(File file)                   | 将输出流写到给定 File 对象的文件中                                      |
| public FileOutputStream(String name)                 | 作用同上，区别先去创建一个文件对象                                      |
| public FileOutputStream(String name, Boolean append) | 目的同上，但是与上边两个不同点是可以控制是否<font color=red>追加</font> |

### 常见的成员方法

| 方法                                        | 作用                                                       |
| ------------------------------------------- | ---------------------------------------------------------- |
| public void write(int b)                    | 在文件中写`一个字节大小`的数据                             |
| public void write(byte[] b)                 | 将一个字节数组写到文件中                                   |
| public void write(byte[] b,int off,int len) | 将字节数组的一部分写到文件中，从 off 位置开始，写入 len 个 |

### 方法的使用

```java
package com.wuziqi.gobang.IO.ZiJieOutput;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class DemoFileOutputStream {
    public static void main(String[] args) throws IOException {
        // aaa目录对象
        File file = new File("aaa");
        // 创建aaa目录对象
        boolean isFolderAaa = file.mkdir();
        // aaa.txt文件对象
        File file1 = new File("aaa.txt");
        // 创建aaa.txt文件
        boolean isTxtAaa = file1.createNewFile();
        // bbb.txt文件对象
        File file2 = new File(file,"bbb.txt");
        // 在aaa目录下创建bbb.txt文件
        boolean isTxtBbb = file2.createNewFile();


        // 在aaa.txt文件中写入一个字节长度的内容
        // public FileOutputStream(File file)
        FileOutputStream fos = new FileOutputStream(file1);
        // public void write(int b)
        fos.write(1); // 在文件中是一个字符长度的二进制乱码 
        fos.write(97); // 在文件中表现为a
        // 两个添加执行完成后文件中内容为a
        // 但是整个程序再执行一次的时候，默认文件是空着的，重新添加内容

        // 在bbb.txt文件中写入一个字节数组，或者说多个字节的内容
        // public void write(byte[] b)
        byte[] bytes = {97, 98, 99, 100, 101, 102, 103, 104};
        FileOutputStream fosb = new FileOutputStream(file2);
        fosb.write(bytes);// 文件中内容为 abcdefghi
        fosb.write(bytes, 2, 3);// 文件中内容为 cde
        // 两个方法执行完成后文件中内容为abcdefghcde
        // 但是整个程序再执行一次的时候，默认文件是空着的，重新添加内容
    }
}
```

### 两个小问题

1. 如何换行？

```js
换行符：
windows：\r\n
linux：\n
mac：\r

FileOutputStream fosb = new FileOutputStream("aaa.txt");
/*
 * write(byte[] b)
 * getBytes: 将字符串转换为字节数组
*/
fosb.write("\r\n".getBytes());
```

2. 如何追加？

   正常情况下每次运行程序，文件都会被清空，如果想要追加，需要使用第三个构造方法，并且需要传入一个布尔值，传入 true 表示追加，传入 false 表示覆盖；默认是 false。

```java
// public FileOutputStream(String name, Boolean append)
FileOutputStream fosb = new FileOutputStream(file2, true);
```
