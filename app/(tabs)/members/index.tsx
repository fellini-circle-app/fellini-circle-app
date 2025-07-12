import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MembersScreen() {
  const members = [
    {
      id: '1',
      name: 'Anthony Hope',
      role: 'VIP Member',
      image: require('../../../assets/images/profile.jpg'),
    },
    {
      id: '2',
      name: 'Sophia Lane',
      role: 'Circle Member',
      image: require('../../../assets/images/members-profile.jpg'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fellini Circle Members</Text>
      {members.map((member) => (
        <View key={member.id} style={styles.card}>
          <Image source={member.image} style={styles.avatar} />
          <View style={styles.info}>
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.role}>{member.role}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF8F0',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  role: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
