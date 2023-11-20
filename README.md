# BlockBreakerStarter

* 这里下载[V8_8.4.371.19](https://github.com/puerts/backend-v8/releases/tag/V8_8.4.371.19_230822)，解压到[Plugins/Puerts/ThirdParty](Plugins/Puerts/ThirdParty)

* 生成vs工程（window下vs工程，在mac下生成xcode工程），然后进入工程运行

* 如果要打包运行，要到“项目设置/打包/Additional Not-Asset Directories to Package”，把Content下的“JavaScript”目录添加进去。

* 本例子基于UE4，UE5的引擎API有点小改动，点击ue.d.ts生成按钮后，根据IDE错误提示稍稍修改即可

* 这个是基于这个[commit](https://github.com/Tencent/puerts/commit/b3c9c599a6c323808b24080b75fa1b71ffcaff1f)的fps例子实现，这个修改的影响主要有

   - 定义了组件，就自动在蓝图创建组件，无需在构造函数中通过代码创建，规避了UE的一些多线程加载问题，也更简单些
   
   - 由于组件是Actor构造后才初始化，所以在构造函数访问组件会为null，建议一些初始化操作放到ReceiveBeginPlay，或者直接在生成的代理蓝图上修改