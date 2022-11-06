import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

export default function AppText({ children, style }) {
  return <Text style={[styles.container, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 20,
  },
});
