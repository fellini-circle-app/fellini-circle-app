// components/ScreenLayout.tsx

import { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

type Props = {
  children: ReactNode;
};

export default function ScreenLayout({ children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

