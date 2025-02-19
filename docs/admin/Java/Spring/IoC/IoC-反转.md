## IoC-反转

### 反转

> 通过下面的案例，理解 IoC 的反转，即当我们的程序需求在不断变更的时候，我们不能反复修改 `private UserDao userDao = new UserDaoImpl(); `这段代码的赋值情况，而是应该在调用时通过外部传入(注入)，而不去改变`UserServiceImpl`原来的代码。

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

// MyTest
package com.haha.test;
import com.haha.dao.Impl.UserDaoImpl;
import com.haha.dao.Impl.UserDaoMySqlImpl;
import com.haha.dao.Impl.UserDaoOracleImpl;
import com.haha.service.Impl.UserServiceImpl;
import com.haha.service.UserService;
import org.junit.Test;

public class MyTest {
    @Test
    public void test() {
        UserService userService = new UserServiceImpl();
        // 只需要修改注入的对象(setUserDao的参数)即可达到需求的变更
        ((UserServiceImpl) userService).setUserDao(new UserDaoImpl());
        userService.getUser();
        // 输出：默认获取用户数据
    }
    @Test
    public void mYSqlTest() {
        UserService userService = new UserServiceImpl();
        // 只需要修改注入的对象(setUserDao的参数)即可达到需求的变更
        ((UserServiceImpl) userService).setUserDao(new UserDaoMySqlImpl());
        userService.getUser();
        // 输出：获取MySql用户数据
    }
    @Test
    public void oracleTest() {
        UserService userService = new UserServiceImpl();
        // 只需要修改注入的对象(setUserDao的参数)即可达到需求的变更
        ((UserServiceImpl) userService).setUserDao(new UserDaoOracleImpl());
        userService.getUser();
        // 输出：获取Oracle用户数据
    }
}
```
