## IoC 控制反转-基础案例

> 就是 IoC-反转和 IoC-控制的结合，也是 IoC 最基本的案例

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

  <bean id="mySqlImpl" class="com.haha.dao.Impl.UserDaoMySqlImpl"/>
  <bean id="oracleImpl" class="com.haha.dao.Impl.UserDaoOracleImpl"/>

  <bean id="userServiceImpl" class="com.haha.service.Impl.UserServiceImpl">
  <!--
    name: 是userServiceImpl对象中的属性
    value：属性值，静态的属性值
    ref: 引用另一个bean对象
  -->
    <!-- 随着ref的引用的改变，获取到的数据等也随之改变了，不需要再去修改程序了 -->
    <property name="userDao" ref="mySqlImpl"/>
  </bean>
</beans>
```

```java
// UserDao
package com.haha.dao;

public interface UserDao {
  void getUser();
}


// UserDaoImpl
package com.haha.dao.Impl;

import com.haha.dao.UserDao;

public class UserDaoImpl implements UserDao {
  @Override
  public void getUser() {
    System.out.println("默认获取用户数据");
  }
}


// UserDaoMySqlImpl
package com.haha.dao.Impl;

import com.haha.dao.UserDao;

public class UserDaoMySqlImpl implements UserDao {
  @Override
  public void getUser() {
    System.out.println("获取MySql用户数据");
  }
}


// UserDaoOracleImpl
package com.haha.dao.Impl;

import com.haha.dao.UserDao;

public class UserDaoOracleImpl implements UserDao {
  @Override
  public void getUser() {
    System.out.println("获取Oracle用户数据");
  }
}


// UserService
package com.haha.service;

public interface UserService {
  void getUser();
}


// UserServiceImpl
package com.haha.service.Impl;
import com.haha.dao.UserDao;
import com.haha.service.UserService;
public class UserServiceImpl implements UserService {
  // private UserDao userDao = new UserDaoImpl(); 这就写死了
  private UserDao userDao;
  // set 注入：值不是写死的，而是注入的，也就是传进来的
  public void setUserDao(UserDao userDao) {
    this.userDao = userDao;
  }
  @Override
  public void getUser() {
    userDao.getUser();
  }
}

// MyTestIoC
package com.haha.test;

import com.haha.service.Impl.UserServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MyTestIoC {
  public static void main(String[] args) {
    // 获取Spring上下文对象
    ApplicationContext ac = new ClassPathXmlApplicationContext("bean.xml");
    // 我们的对象现在都在Spring中进行管理了，获取的时候，直接根据id获取就可以了
    // 注意：需要修改的时候，这些都不需要改动了，只需要修改配置文件即可
    UserServiceImpl userServiceImpl = (UserServiceImpl) ac.getBean("userServiceImpl");
    userServiceImpl.getUser();
    // 输出：获取MySql用户数据
  }
}
```
