import { Text, View } from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import StyledButton from '../../../components/StyledButton';

export default function ProfileScreen() {
  return (
    <ScreenLayout>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome to your Profile</Text>
        <StyledButton
          title="Edit Profile"
          onPress={() => {
            // Add your profile edit action here
            console.log('Edit Profile button pressed');
          }}
        />
      </View>
    </ScreenLayout>
  );
}


