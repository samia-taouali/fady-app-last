import React , { useEffect, useState }from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import GreetingAnimation from './components/GreetingAnimation';
import BirdButton from './components/BirdButton';
import HomeIndicator from './components/HomeIndicator';
import styles from './styles/AppStyles';
import ModalPopup from './components/ModalPopup';
import  useBirdPress  from './utils/useBirdPress';
import usePopupPanResponder from './hooks/usePopupPanResponder';
import AnimationButton from './components/AnimationRotation';

const App = () => {
  const { panResponder, popupVisible, setPopupVisible, popupTranslateY, overlayOpacity } = usePopupPanResponder();
  const handleBirdPress = useBirdPress();
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Hide the splash screen after a certain duration (e.g., 2 seconds)
    const timer = setTimeout(() => {
      SplashScreen.hide();
      setShowAnimation(true); // Show the animation component
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
<SafeAreaView style={styles.container} {...panResponder.panHandlers}>
      {/* <GreetingAnimation />
      <BirdButton onPress={handleBirdPress} /> */}
      {showAnimation && <AnimationButton />}
      <ModalPopup
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
        popupTranslateY={popupTranslateY}
        overlayOpacity={overlayOpacity}
      />
      <HomeIndicator />

    </SafeAreaView>
  );
};

export default App;
