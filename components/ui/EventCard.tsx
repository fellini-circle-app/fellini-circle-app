import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface EventCardProps {
  title: string;
  date: string;
  onPress: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </Pressable>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
});
