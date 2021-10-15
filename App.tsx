import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import TestScreen from './src/screens/TestScreen';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTabBar from './src/navigation/NavigationTabBar';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <NavigationTabBar />
        </NavigationContainer>
        {/* <TestScreen /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
