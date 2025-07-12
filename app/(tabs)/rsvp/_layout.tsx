import { Stack } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

export default function RSVCLayout() {
  return (
    <ImageBackground
      source={require('../../../assets/images/vip.jpg')}
      style={styles.background}
      imageStyle={styles.image}
    >
      <View style={styles.overlay}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
            contentStyle: { backgroundColor: 'transparent' },
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    opacity: 0.92,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)', // cinematic dark overlay
  },
});

