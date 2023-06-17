import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import NexfulButton from '../assets/Nexful-Button.svg'
const AnimationComponent = () => {
    const rotation = new Animated.Value(0);
    const rotateLogo = rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });
    
    useEffect(() => {
      startAnimation();
    }, []);
  
    const startAnimation = () => {
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000, // Adjust the duration as needed
        useNativeDriver: true,
      }).start();
    };
  
    return (
      <Animated.View
        style={{
          transform: [{ rotate: rotateLogo }],
          // Add other styles for your logo image, such as width, height, etc.
        }}
      >
      <NexfulButton width={345} height={250} />
      </Animated.View>
    );
  };
  
  export default AnimationComponent;
  