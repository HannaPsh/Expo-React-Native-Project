import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

export default function AppButton({ title, onPress, color = 'primary' }) {
  /* secondary - setToDefault, but still reusable  */
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 15,
    width: '100%',
    /* backgroundColor: colors.primary, */
  },
  text: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
