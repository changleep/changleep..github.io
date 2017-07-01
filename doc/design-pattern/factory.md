###1.什么叫工厂模式？
定义一个类创建一个专门生成某个接口不同实现的实例的公共方法（根据配置或者参数）. 

###2.使用工厂模式的好处?
隐藏了创建过程的复杂度，不需要直接new类就可以获取想要类的实例。
1.隐藏具体类名，很多类隐藏得很深的，而且可能会在后续版本换掉
2.避免你辛苦的准备构造方法的参数
3.这个工厂类可以被配置成其它类
4.这个工厂对象可以被传递

最后来句重要的
new XXX其实也是一种硬编码！！！

###3.具体的实现
好了废话这么多也许你早就不耐烦了。那么直接上代码看下一个实例吧.
```
interface Shape{
    public function getArea();
    public function getCircumference();
}


class Rectangle implements shape{
    private $width;
    private $height;
    public function __construct($width, $height){
        $this->width = $width;
        $this->height = $height;
    }
    public function getArea(){
        return $this->width*$this->height;
    }

    public function getCircumference(){
        return 2*($this->width + $this->height);
    }
}

class Circle implements shape{
 
    private $radius=0;
    public function __construct($radius){
        $this->radius = $radius;
    }
    public function getArea(){
        return M_PI*pow($this->radius, 2);
    }

    public function getCircumference(){
        return 2*M_PI*$this->radius;
    }
}

class FactoryShape{

    public static function create(){
        switch(func_num_args()){
            case 1:
                return new Circle(func_get_arg(0));
            case 2:
                return new Rectangle(func_get_arg(0), func_get_arg(1));

            default:
              # code....
              break;
        }
         
    }
}
 
$rect = FactoryShape::create(5, 5);/*只需要通过参数传递到工厂方法就可以获取想要的实例，不需要直接new类本身，减去繁琐的构造参数，减少系统的耦合度，方便其他包调用，也方便接口的扩展*/
$area = $rect->getArea();
$circumference = $rect->getCircumference();
echo "面积是：".$area;

echo "周长是：".$circumference;
```
