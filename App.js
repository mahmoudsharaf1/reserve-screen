import React, { Suspense, useState } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistedStore } from './src/redux/store';
import Reserve from './src/screens/ReserveScreen';
import { getReviews } from './src/redux/actions/getReviews';
import { StatusBar } from 'react-native';
import { Colors } from './src/common/foundation';

export default () => {
  const [loading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading(false);
  }, 100);

  if (!loading) {
    return (
      <Suspense>
        <Provider store={store}>
          <StatusBar backgroundColor={Colors.transparent} barStyle='dark-content' />
          <PersistGate persistor={persistedStore}>
            <Reserve />
          </PersistGate>
        </Provider>
      </Suspense>
    );
  }
};