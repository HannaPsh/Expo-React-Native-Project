import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      style={{ zIndex: 1 }}
      autoPlay
      loop
      source={require('../assets/animations/98194-loading.json')}
    />
  );
}

export default ActivityIndicator;
