# 网站优化

## PageSpeed 分数

初始状态检测为16分, 通过以下方面进行优化:

* 将全部图片进行压缩
* 使用gulp的HTML, CSS, JavaScript压缩插件对全部文件进行压缩
* JS文件异步加载
* 使用WebFontLoader异步加载字体
* 使用内联CSS
* 使用媒体查询, 避免请求只有在打印时才需要的CSS文件

优化后检测达到97分.

##去除卡顿

###帧数

通过分析main.js, 并录制Performance过程后发现:

* updatePositions()函数调用产生了大量的强制布局, 为性能瓶颈, 主要原因是在for循环体内, 多次读取**document.body.scrollTop**属性, 在循环体外定义一个变量来进行优化.
* 页面加载时生成披萨滑窗, 此段代码生成了200个固定定位的披萨, 达到同样视觉效果, 仅需**32**个, 故修改了披萨数量.

优化后重新录制Performance, 平均帧数达到60fps.

###计算效率
通过分析main.js, 并录制Performance过程后发现:

* 性能瓶颈为**changePizzaSizes()**函数
* 将**document.querySelectorAll(".randomPizzaContainer")**在循环体外保存为一个变量
* 删除**determinDX()**函数
* 将披萨width值直接用**%**表示

优化后滑块调整大小时间约为0.5ms

##备注
* 最终提交为压缩后版本, 源文件在/src目录和views/src目录中
* gulp配置文件 gulpfile.js 和 package.json 在根目录下