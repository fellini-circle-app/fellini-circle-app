// components/ui/VIPButton.tsx
import { Text, TouchableOpacity } from 'react-native';
export default function VIPButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 12, backgroundColor: 'gold', borderRadius: 8 }}>
      <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );
}
