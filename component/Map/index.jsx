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
    <View style={{ backgroundColor: 'white' }}>
      <ImageBackground
        source={require('../../images/map.jpg')}
        style={styles.bgcimage}
        resizeMode='contain'
      >
        <Svg height={height} width={width} style={styles.path}>
          <Path
            d="M0 0 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25"
            fill="none"
            stroke="red"
            translateX={width / 2}
            translateY={height / 2}
          />

        </Svg>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
  bgcimage: {
    width: '100%',
    height: '100%'
  },
  path: {
    flex: 1,

  }
})
