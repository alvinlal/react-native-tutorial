/**
 * @format
 */

import {Alert, AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  setBackgroundMessageHandler,
  setForegroundMessageHander,
} from './src/services/notificationService/notificationService';

setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

setForegroundMessageHander(async remoteMessage => {
  Alert.alert('A new FC message arrived', JSON.stringify(remoteMessage));
});

AppRegistry.registerComponent(appName, () => App);
