import { router } from 'expo-router';
import { Image, Text, View } from 'react-native';
import VIPButton from '../../components/ui/VIPButton';

export default function VIPScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-black justify-center items-center p-6">
      <Image
        source={require('../../assets/images/vip-success.jpg')}
        className="w-full h-60 rounded-xl mb-6"
        resizeMode="cover"
      />
      <Text className="text-2xl font-bold text-black dark:text-white mb-4 text-center">
        Welcome to the VIP Lounge
      </Text>
      <VIPButton
        title="Request VIP Invite"
        onPress={() => {
          router.push('/vip/success');
        }}
      />
    </View>
  );
}


