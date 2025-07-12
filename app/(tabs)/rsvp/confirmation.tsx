import MaskedView from '@react-native-masked-view/masked-view';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const ConfirmationScreen = () => {
  const shimmerTranslate = useSharedValue(-100);

  useEffect(() => {
    shimmerTranslate.value = withRepeat(
      withTiming(200, { duration: 2000 }),
      -1,
      false
    );

    const timeout = setTimeout(() => {
      router.push('/events');
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shimmerTranslate.value }],
  }));

  const ShimmerTitle = () => (
    <MaskedView maskElement={<Text style={styles.title}>You're In the Circle ✨</Text>}>
      <Animated.View style={[{ flexDirection: 'row' }, shimmerStyle]}>
        <LinearGradient
          colors={['transparent', '#ffffffaa', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ width: 300, height: 40 }}
        />
      </Animated.View>
    </MaskedView>
  );

  return (
    <ImageBackground
      source={require('../../assets/images/confirmation.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ShimmerTitle />
        <Text style={styles.subtitle}>We’ll see you soon.</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 16,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default ConfirmationScreen;
