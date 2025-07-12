import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StyledButton from './StyledButton';

export default function RSVPForm() {
  const router = useRouter();

  const handleRSVP = () => {
    router.push('/rsvp/confirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join The Circle</Text>
      <StyledButton title="RSVP Now" onPress={handleRSVP} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
