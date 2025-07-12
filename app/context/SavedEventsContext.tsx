import { createContext, ReactNode, useContext, useState } from 'react';

type Event = { id: string; title: string; date: string };

type SavedEventsContextType = {
  savedEvents: Event[];
  saveEvent: (event: Event) => void;
};

const SavedEventsContext = createContext<SavedEventsContextType | undefined>(undefined);

export const SavedEventsProvider = ({ children }: { children: ReactNode }) => {
  const [savedEvents, setSavedEvents] = useState<Event[]>([]);

  const saveEvent = (event: Event) => {
    setSavedEvents((prev) => [...prev, event]);
  };

  return (
    <SavedEventsContext.Provider value={{ savedEvents, saveEvent }}>
      {children}
    </SavedEventsContext.Provider>
  );
};

export const useSavedEvents = () => {
  const context = useContext(SavedEventsContext);
  if (!context) throw new Error('useSavedEvents must be used within a SavedEventsProvider');
  return context;
};
export default SavedEventsContext;
