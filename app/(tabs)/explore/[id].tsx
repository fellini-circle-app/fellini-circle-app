import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ExploreDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          title: `Explore ID: ${id}`,
          presentation: 'modal',          // Optional: modal-style
          animation: 'slide_from_bottom', // Smooth slide-up animation
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Explore Detail Screen</Text>
        <Text style={styles.subtitle}>Item ID: {id}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});
