// components/ui/PrimaryButton.tsx
import { Text, TouchableOpacity } from 'react-native';

export default function PrimaryButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#CBA052',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
      }}
    >
      <Text style={{ color: '#121212', fontWeight: 'bold', fontSize: 16 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}




export default PrimaryButton;
