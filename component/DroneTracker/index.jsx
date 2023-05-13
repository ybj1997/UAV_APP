import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native'
import { Svg, Line } from 'react-native-svg';
import roslib from "roslib"

const Tracker = () => {
  // 模拟从你那里获取的实时数据
  const [data, setData] = useState([]);

  useEffect(() => {
    // 在此处添加获取实时坐标数据的代码，如：
    let ros = new roslib.Ros({
      url: 'ws://192.168.0.74:9090'
    });
    //判断是否连接成功并输出相应的提示消息到web控制台
    ros.on('connection', function () {
      console.log('Connected to websocket server.');
    });

    ros.on('error', function (error) {
      console.log('Connect to websocket server failed.');
    });

    ros.on('close', function () {
      console.log('Connection to websocket server closed.');
    });

    let listener = new roslib.Topic({
      ros: ros,
      name: '/mavros/local_position/pose',
      messageType: 'geometry_msgs/PoseStamped',
      throttle_rate: 500
    });
    // listener.subscribe(function (message) {
    //   console.log('Received message on ' + listener.name + ': ' + message.pose.position.x);
    // });


    // // //模拟数据
    // const interval = setInterval(() => {
    listener.subscribe(function (message) {
      if (!!message) {
        const newData = { x: message.pose.position.x * 100, y: message.pose.position.y * 100 };
        console.log('更新前：', newData);
        setData(oldData => [...oldData, newData]);
        console.log('更新后：', newData);
      }
    });
    // }, 1000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.map}>
      <ImageBackground
        source={require('../../images/map.jpg')}
        style={styles.bgcimage}
        resizeMode='contain'
      >
        <Svg height="50%" width="100%" style={styles.path}>
          {data.length > 1 && data.slice(1).map((point, index) => (
            <Line
              key={index}
              x1={data[index].x.toString()}
              y1={data[index].y.toString()}
              x2={point.x.toString()}
              y2={point.y.toString()}
              stroke="red"
              strokeWidth="1"
              translateX={200}
              translateY={200}
            />
          ))}
        </Svg>
      </ImageBackground>
      <View style={styles.second}><Text></Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '100%',
    backgroundColor: 'white'
  },
  bgcimage: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  path: {
    position: 'absolute',
    transform: [{ translateX: -25 }, { translateY: -50 }],
    flex: 1,
  },
  second: {
    flex: 1,
  }
}
)
export default Tracker;