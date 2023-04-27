# BlockBreakerStarter

* 这里下载[V8_8.4.371.19](https://github.com/puerts/backend-v8/releases/tag/V8_8.4.371.19_230426)，解压到[Plugins/Puerts/ThirdParty](Plugins/Puerts/ThirdParty)

* 生成vs工程（window下vs工程，在mac下生成xcode工程），然后进入工程运行

* 如果要打包运行，要到“项目设置/打包/Additional Not-Asset Directories to Package”，把Content下的“JavaScript”目录添加进去。

* 本例子基于UE4，UE5的引擎API有点小改动，点击ue.d.ts生成按钮后，根据IDE错误提示稍稍修改即可