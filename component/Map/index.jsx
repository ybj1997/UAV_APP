import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg'

export default function Map() {
  const { width, height } = useWindowDimensions();

  const [data, setData] = useState(null);
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <View style={styles.map}>
      <ImageBackground
        source={require('../../images/map.jpg')}
        style={styles.bgcimage}
        resizeMode='contain'
      >
        <Svg style={styles.path}>
          <Path
            d="M0 0 L98 5 L55 55"
            fill="none"
            stroke="red"
          />
        </Svg>
      </ImageBackground>
      <View style={styles.second}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    flex:1,
    height: '100%',
    backgroundColor:'white'
  },
  bgcimage: {
    flex:2,
    position:'relative',
    width: '90%',
    height: '80%',
    alignItems:'center',
    justifyContent:'center',
    left:'10%'
  },
  path: {
    position:'absolute',
    left:'50%',
    top:'50%',
    transform:[{translateX:-25},{translateY:-50}],
    flex: 1,

  },
  second:{
    flex:1,
  }
})
