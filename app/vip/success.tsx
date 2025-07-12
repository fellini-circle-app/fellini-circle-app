// app/vip/success.tsx
import { router } from 'expo-router';
import { Image, Text, View } from 'react-native';
import VIPButton from '../../components/ui/VIPButton';

export default function VIPSuccessScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-black justify-center items-center p-6">
    <Image
  source={require('../../assets/images/vip-success.jpg')}
  style={{ width: 300, height: 200, marginBottom: 20, borderRadius: 12 }}
  resizeMode="cover"
/>



      <Text className="text-2xl font-bold text-center text-black dark:text-white mb-4">
        You're In, VIP Member!
      </Text>
      <VIPButton
        title="Back to VIP"
        onPress={() => {
          router.replace('/vip');
        }}
      />
    </View>
  );
}



