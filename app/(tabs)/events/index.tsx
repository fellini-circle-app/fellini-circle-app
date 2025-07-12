import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import EventCard from '../../../components/ui/EventCard';

const EventsScreen = () => {
  const router = useRouter();

  const eventsData = [
    {
      id: '1',
      title: 'Exclusive Event 1',
      date: 'July 20, 2025',
    },
    {
      id: '2',
      title: 'Premium Gala Night',
      date: 'August 15, 2025',
    },
  ];

  const handlePress = () => {
    router.push('/rsvp/form');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={eventsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard
            title={item.title}
            date={item.date}
            onPress={handlePress}
          />
        )}
      />
    </View>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
});
