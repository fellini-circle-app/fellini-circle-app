import { useNavigation } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import StyledButton from '../../../components/StyledButton';

export default function RSVPIndex() {
  const navigation = useNavigation();

  const handleRSVP = () => {
    navigation.navigate('rsvp/form');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/rsvp.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Be Part of the Circle</Text>
      <StyledButton title="Join the Circle" onPress={handleRSVP} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
});
