import { Slot } from 'expo-router';
import { SavedEventsProvider } from '../context/SavedEventsContext';

export default function RootLayout() {
  return (
    <SavedEventsProvider>
      <Slot />
    </SavedEventsProvider>
  );
}
