// app/screens/VipSuccess.tsx
import { router } from 'expo-router';
import { Text, View } from 'react-native';
import PrimaryButton from '../../components/ui/PrimaryButton';

export default function VipSuccess() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black px-4">
      <Text className="text-xl font-bold text-black dark:text-white mb-6">
        Welcome to the Inner Circle!
      </Text>
      <PrimaryButton title="Return" onPress={() => router.back()} />
    </View>
  );
}

