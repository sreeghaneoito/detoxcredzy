import 'react-native-gesture-handler';
import React from 'react';
import RootNavigation from './src/routes/rootNavigation';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store/store';
import {Provider} from 'react-redux';
import AppToast from './src/components/Toast/Toast.component';
import {ErrorBoundary} from './src/components/Error/Error-boundary';
import FlashMessage from 'react-native-flash-message';
import crashlytics from '@react-native-firebase/crashlytics';
import {NetworkIndicator} from './src/components';
import codePush from 'react-native-code-push';
import Maintenance from './src/components/Maintenance/Maintenance.component';
import Toast from 'react-native-toast-message';

const App = () => {
  try {
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundary catchErrors={'always'}>
              <RootNavigation />
              <FlashMessage />
              <Toast />
              <AppToast />
              <NetworkIndicator />
              {/* <Maintenance /> */}
            </ErrorBoundary>
          </PersistGate>
        </Provider>
      </>
    );
  } catch (err) {
    console.log('err', err);
    crashlytics().recordError(err);
    return null;
  }
};

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

// export default App;
export default codePush(codePushOptions)(App);
