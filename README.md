### 基于ReactNative的无人机轨迹显示APP

------

主要实现功能：

1. 使用[`React Navigation`](https://reactnavigation.org/)实现APP内路由导航

2. 使用[`react-native-svg`](https://github.com/software-mansion/react-native-svg/blob/main/USAGE.md)实现APP无人机室内地图绘制以及无人机轨迹规制

3. 无人机方面通过ros采用发布订阅模式实现与APP的通信，其中运用到[`roslibjs`](https://github.com/RobotWebTools/roslibjs/blob/develop/test/examples/topic-listener.example.js)
