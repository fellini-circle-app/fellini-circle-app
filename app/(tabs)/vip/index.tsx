import { Image, StyleSheet, Text, View } from 'react-native';

export default function VipScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/vip-invite.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>VIP Lounge</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 12,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

