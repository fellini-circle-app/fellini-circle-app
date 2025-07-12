// app/screens/vip/invite.tsx

import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import PrimaryButton from '../../components/ui/PrimaryButton';

export default function VIPInviteScreen() {
  const router = useRouter();

  const handleRSVP = () => {
    router.push('/screens/vip/success');
  };

  return (
    <View className="flex-1 bg-white dark:bg-black items-center justify-center p-6">
      <Image
        source={require('../../assets/images/vip-success.jpg')}
        className="w-full h-64 rounded-lg mb-6"
        resizeMode="cover"
      />
      <Text className="text-2xl font-bold text-center text-black dark:text-white mb-4">
        Your Exclusive VIP Invitation Awaits
      </Text>
      <Text className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Join us for an unforgettable evening of elegance, fine cuisine, and exquisite company.
      </Text>
      <PrimaryButton onPress={handleRSVP} title="RSVP Now" />
    </View>
  );
}
