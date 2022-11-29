import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from 'src/app/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;
