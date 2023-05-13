import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native'

export default function Home({ navigation }) {
    const [rosFlag, setROSFlag] = useState(false);
    const [ip, setIp] = useState('');

    const goToMap = () => {
        if (ip == '123') {
            Alert.alert('提示', '连接失败',);
        } else {
            Alert.alert('提示', '连接成功', [
                { text: "OK", onPress: () => navigation.navigate('Tracker') }
            ]);
        }
    }
    const goToVideo = () => navigation.navigate('Video');

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ paddingTop: 25, fontSize: 30 }}>IP地址：</Text>
                    <TextInput
                        placeholder='请输入IP地址'
                        clearTextOnFocus
                        allowFontScaling //允许跟随系统字体大小缩放
                        style={{ height: 100, width: 200 }}
                        keyboardType='number-pad'
                        onChangeText={(value) => {
                            setIp(value);
                        }}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ paddingTop: 25, fontSize: 30 }}>端口号：</Text>
                    <TextInput
                        placeholder='请输入端口号'
                        clearTextOnFocus
                        allowFontScaling
                        style={{ height: 100, width: 200 }}
                        keyboardType='number-pad'
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goToMap}
                >
                    <Text style={{ fontSize: 20 }}>连接</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={goToVideo}
                >
                    <Text style={{ fontSize: 20 }}>查看无人机成像</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 200,
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
