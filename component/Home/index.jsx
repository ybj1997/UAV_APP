import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import roslib from "roslib"

export default function Home({ navigation }) {
    const [rosFlag, setROSFlag] = useState(false);

    useEffect(() => {
        console.log('副作用钩子');
        let ros = new roslib.Ros({
            url: 'ws://172.20.10.4:9090'
        });

        //判断是否连接成功并输出相应的提示消息到web控制台
        ros.on('connection', function () {
            console.log('Connected to websocket server.');
            setROSFlag(true);
        });

        ros.on('error', function (error) {
            console.log('Connect to websocket server failed.');
        });

        ros.on('close', function () {
            console.log('Connection to websocket server closed.');
        });
    }, [])

    const goToMap = () => {
        console.log(rosFlag);
        if (rosFlag) { 
            navigation.navigate('Map'); 
        }
        else {
            Alert.alert(
                "提示",
                "无人机正在运行，轨迹绘制尚未完成！",
                [
                  {
                    text: "好的",
                    style: "cancel",
                  },
                ]
              );
        }
    }
    const goToVideo = () => navigation.navigate('Video');

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goToMap}
                >
                    <Text style={{ fontSize: 20 }}>查看运动轨迹</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goToVideo}
                >
                    <Text style={{ fontSize: 20 }}>查看无人机成像</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "skyblue",
        padding: 10,
        width: 200,
        borderRadius: 10,
        margin: 50
    },
})
