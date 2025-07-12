import { useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';

const RSVPDetailScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <Animated.View style={styles.container}>
      <Text style={styles.heading}>RSVP Event Details</Text>
      <Text style={styles.subheading}>Event ID: {id}</Text>

      <Image
        source={require('../../../assets/images/confirmation.jpg')}
        style={styles.image}
      />

      <Text style={styles.description}>
        Thank you for your RSVP! We look forward to seeing you at the event.
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 12,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default RSVPDetailScreen;
