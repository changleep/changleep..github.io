# Markdown 快速开始

>1. [简介](#简介 "简介")
1. [语法快速入门](#语法快速入门 "语法快速入门")
    1. [【标题】](#【标题】 "【标题】")
    1. [【修辞和强调】](#【修辞和强调】 "【修辞和强调】")
    1. [【删除线】](#【删除线】 "【删除线】")
    1. [【列表】](#【列表】 "【列表】")
    1. [【链接】](#【链接】 "【链接】")
    1. [【图片】](#【图片】 "【图片】")
    1. [【代码】](#【代码】 "【代码】")
    1. [【代码段】](#【代码段】 "【代码段】")
    1. [【表格】](#【表格】 "【表格】")
    1. [【引用】](#【引用】 "【引用】")
    1. [【分割线】](#【分割线】 "【分割线】")
    1. [【换行】](#【换行】 "【换行】")
    1. [【html】](#【html】 "【html】")
1. [研究更多 markdown 语法详细细节](#研究更多 markdown 语法详细细节 "研究更多 markdown 语法详细细节")


## 简介

## CSS常常忽略的细节
### 背景图片属性
-背景图片:background-image:url()属性 body{background-image:url(http://www.kkh86.com/it/html-base/img/img-demo.jpg);}
-background-repeat:no-repeat;//不重复显示 默认重复显示并且平铺
-background-size:width,height;//图片大小
-background-position:50px 100px;//偏移量 右 下
-简写 background:url('xxxx.jpg') no-repeat 50 100px;

### 显示属性
-Display: 可以通过document.getElementById('xxx').style.display ='block/none';//隐藏/显示
-visibility:visible/hidden 与上面的区别是保留隐藏的占位.

### 字体属性
font-weight 加粗
font-style  倾斜
text-align  文字居中
text-indent 标签缩进
letter-spacing 文字间隔

### css样式继承
div标签会继承样式 p  ul li标签会继承父标签的样式

### 外边距
-与当前元素的外部边距
-margin-top+margin-left使用
-margin-left:-20px;表示和左边元素重叠20px;
-简写
-margin:10px;//上下左右边距是10px
-margin:10px 20px;//上下10 左右20px
-margin：10px 20px 30px;/上10 左右20 下30
-margin:10px,20px,30px,40px; 上 下 左 右
-没有边距;margin:0;
-居中;margin:0 auto;//上下没有边距 左右居中
-继承性：margin属性不能被子标签继承 需要有选择器自定义该属性

### 内边距
-边框border:1px dotted/solid red; //边框距离 点状/实线 颜色
-padding-top:10px;//元素在原有高度基础乡下增加10px;  
-padding:10px; //上下增加10px;

### 权重
- !important 优先使用该样式
- 实例1 body div a{color:red; font-size:20px;} /*这里会把p里面的a都渲染成红色字*/
- 实例2 body a{color:black !important} /*这里这里,看这里 !important*/
- 实例3 body a{color:black } /*这里这里,会使用实例1的样式 因为元素描述位置更详细/

### 重置
- 浏览器会默认样式 如margin padding   a标签等.这时候需要我们根据需求重置样式.
- *{margin:0; padding:0;} a{color:#428BDD; text-decoration:none;} ul{list-style:none;}/*等等...*/
