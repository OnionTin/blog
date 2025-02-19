## MyBatis 延迟加载

> 在<font color=red>MyBatis 一堆多查询中</font>，如果我们在实际应用中或者测试类中，还用不到这些数据，那么我们就可以使用延迟加载来优化查询。比如在查询所有用户和其名下的电脑的时候，我们只需要查询用户的信息，而不需要查询用户的电脑信息，只有当用户需要查看电脑信息的时候，我们才去查询电脑信息。

### 开启延迟加载

```xml
SqlMapConfig.xml
<settings>
  <!--全局开启延迟加载-->
  <setting name="lazyLoadingEnabled" value="true"/>
  <setting name="aggressiveLazyLoading" value="false"/>
</settings>
```
