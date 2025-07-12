import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import exploreDetails from '../../data/exploreDetails';

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <FlatList
      data={exploreDetails}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item, index }) => (
        <Animated.View entering={FadeInLeft.delay(index * 100)} style={styles.card}>
          <TouchableOpacity onPress={() => router.push(`/explore/${item.id}`)}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 24,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  title: {
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
