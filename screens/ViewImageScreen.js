import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.openIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image style={styles.image} source={require('../assets/chair.jpg')} />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  openIcon: {
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    right: 30,
  },
});
