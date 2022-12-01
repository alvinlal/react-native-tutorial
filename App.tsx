import React, {useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {addDevice} from './src/api/device';
import {
  getFcmToken,
  requestUserPermission,
} from './src/services/notificationService/notificationService';
import DeviceInfo from 'react-native-device-info';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    requestUserPermission();
  }, []);

  const handleAddDevice = async () => {
    const token = await getFcmToken();
    const deviceId = DeviceInfo.getDeviceId();
    try {
      await addDevice({token, deviceId});
      console.log('device successfully added');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Button title="add device" onPress={handleAddDevice} />
      <Text>Hi</Text>
    </SafeAreaView>
  );
};

export default App;
