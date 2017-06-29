## 单例模式

### 什么叫单例模式

``` bash
  单例从字面上理解为单个实例，也就是说只负责创建类的单个实例.为什么要这么做，好处呢?其实这要看实际应用场景了.最常见的一个实例就是数据库连接类.假如在这种情况下不使用单例的话，每次访问数据库就创建一个实例.
```

More info: [Writing](https://leepy87/doc/pattern-design/)


### 如何实现
  
#### 1.设置静态私有变量来保存单个实例

``` bash
class singelInstance{

   		private static $singeInstance = null;
   		....
```
#### 2.防止克隆和构造方法生成实例

``` bash
   	private function __construct(){}
   	private function __clone(){};防止实例被克隆构造将这两个方法设置为私有的，且没有实现的方法
```

#### 3.写一个静态方法回调单个实例

``` bash
	public static function getSingeInstance(){
   			if(self::$singeInstance != null){
   				self::$singeInstance = new self();如果在内存中已经创建了这个实例则直接返回new self() 当前了自身回实例   			}   			
               return self::$singeInstance;
   		}
```
