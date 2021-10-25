import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import PersonalDiary from './src/components/PersonalDiary';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PersonalDiary />
      </PersistGate>
    </Provider>
  );
};

export default App;
