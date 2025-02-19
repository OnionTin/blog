## FileInputStream 类.md

### 常见的构造方法

| 方法                                | 作用                             |
| ----------------------------------- | -------------------------------- |
| public FileInputStream(File file)   | 读取给定的已经存在的文件中的数据 |
| public FileInputStream(String name) | 作用同上                         |

### 常见的成员方法

| 方法                                      | 作用                         |
| ----------------------------------------- | ---------------------------- |
| public int read()                         | 读取`一个字节大小`的数据     |
| public int read(byte[] b)                 | 实际上读取到了几个字符的个数 |
| public int read(byte[] b,int off,int len) | 读取文件中字节数组的一部分   |

### 方法的使用

```java
package com.wuziqi.gobang.IO.ZiJieInput;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Arrays;

public class DemoFileInputStream {
    public static void main(String[] args) throws IOException {
        // 在aaa.txt文件中读取一个字节长度的内容
        // public FileInputStream(File file)
        File file1 = new File("aaa/bbb.txt");
        FileInputStream fis = new FileInputStream(file1);

        /*
         * public int read(): 每次读取一个字节，返回一个int类型的值
         * 返回值：如果读取到了，返回一个字节对应int值，如果到了末尾，开始返回-1
         * 每次执行都会继续读取，直到读取到末尾
         * 当前文件中只有abc三个字符，所以读取到abc后，再读取就会返回-1
         */
        int by1 = fis.read();
        System.out.println((char)by1); // a
        int by2 = fis.read();
        System.out.println((char)by2); // b
        int by3 = fis.read();
        System.out.println((char)by3); // c
        int by4 = fis.read();
        System.out.println(by4); // -1
        int by5 = fis.read();
        System.out.println(by5); // -1

        /*
         * 循环读取1：
         * 上边是已知当前文件有三个字符，
         * 假设不知道一个文件有多少个字符，
         * 可以用当前的循环方法
        */
        int byt1 = fis.read();
        while(byt1 !=-1){
            System.out.println((char)byt1);
            byt1 = fis.read();
        }
        //循环读取2：循环1的优化
        int byt2 = 0;
        while((byt2 = fis.read()) !=-1){
            System.out.println((char)byt2);
        }

        /*
         * public int read(byte[] b): 实际上读取到了几个字符的个数
         * new byte[n]: 会读取n个字符，但是实际读取要看文件中的字符个数；
         * 如果文件中的字符个数超过了n，则当前返回值就是n；
         * 如果文件中的字符个数不足n，则当前返回值就是实际读取到的字符个数；
         * 其中，读取到的字符内容，会给到new byte[n]，所以最好用一个变量接收便于使用
         */
        byte[] byts1 = new byte[3];
        int number0 = fis.read(byts1);
        System.out.println(number0); // 3
        System.out.println(Arrays.toString(byts1)); // [97, 98, 99]
        String sss = new String(byts1);
        System.out.println(sss); // [a, b, c]

        int number1 = fis.read(new byte[4]);
        System.out.println(number1); // 3

        int number2 = fis.read(new byte[5]);
        System.out.println(number2); // 3

        int number3 = fis.read(new byte[2]);
        System.out.println(number3); // 2

        int number4 = fis.read(new byte[1]);
        System.out.println(number4); // 1

        /*
         * 循环读取：上边是已知文件字符数，如果不知道的话就需要循环了
         * 每次读n个
         * 直到读取的个数为 -1，即没读取到，结束
         */
        byte[] bytes = new byte[5];
        int len = 0;
        while( (len = fis.read(bytes)) !=-1){
            String s = new String(bytes, 0, len);
            System.out.println(s);
        }
    }
}
```

### 关闭流

| 方法              | 作用                 |
| ----------------- | -------------------- |
| public void close | 关闭输入流或者输出流 |

### 文件复制

```java
// 方式一(一次读取一个字节，一次写入一个字节)
package com.wuziqi.gobang.IO.ZiJieInput;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class DemoCopyFile1 {
    public static void main(String[] args) throws IOException {
        // 创建一个字节输入流对象
        FileInputStream fis = new FileInputStream("aaa/bbb.txt");
        // 创建一个字节输出流对象
        FileOutputStream fos = new FileOutputStream("aaa/b.txt");
        // 一次读取一个字节，一次写入一个字节
        int by = 0;
        while ((by = fis.read()) != -1) {
            fos.write(by);
        }
        // 释放资源，关闭流
        fis.close();
        fos.close();
    }
}
```

```java
// 方式二(一次读取一个字节数组，一次写入一个字节数组的一部分)
package com.wuziqi.gobang.IO.ZiJieInput;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class DemoCopyFile2 {
    public static void main(String[] args) throws IOException {
        // 创建字节输入流对象
        FileInputStream fis = new FileInputStream("aaa/b.txt");
        // 创建字节输出流对象
        FileOutputStream fos = new FileOutputStream("aaa/a.txt");
        // 一次读取一个字节数组，一次写入一个字节数组的一部分
        byte[] bys = new byte[5];
        int len = 0;
        while( (len = fis.read(bys)) != -1 ){
            fos.write(bys, 0, len);
        }
        // 释放资源
        fis.close();
        fos.close();
    }
}
```
