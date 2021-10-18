import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import TestScreen from './src/screens/TestScreen';
import NavigationTabBar from './src/navigation/NavigationTabBar';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          {/* <NavigationTabBar /> */}
          <DrawerNavigation />
        </NavigationContainer>
        {/* <TestScreen /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
