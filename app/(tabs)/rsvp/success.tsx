// app/(tabs)/rsvp/success.tsx
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native';

const RSVPConfirmation = () => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Fade in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Navigate after delay
    const timeout = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        router.push('/events'); // Navigate to Events tab
      });
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ImageBackground
        source={require('../../assets/images/confirmation.jpg')}
        style={styles.background}
        imageStyle={{ opacity: 0.4 }}
      >
        <View style={styles.content}>
          <Text style={styles.title}>You're In 🍷</Text>
          <Text style={styles.subtitle}>We’ll be in touch soon with details.</Text>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 30,
    borderRadius: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    color: '#111',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
  },
});

export default RSVPConfirmation;
