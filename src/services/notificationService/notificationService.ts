import messaging from '@react-native-firebase/messaging';
import {
  getItem,
  setItem,
} from '../persistantStorageService/persistantStorageService';
import {storageKeys} from '../persistantStorageService/storageKeys';

export const requestUserPermission = async (): Promise<boolean> => {
  const authStatus = await messaging().requestPermission();
  const granted =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  return granted;
};

export const setBackgroundMessageHandler = <T extends () => Promise<any>>(
  handler: T,
): void => {
  messaging().setBackgroundMessageHandler(handler);
};

export const setForegroundMessageHander = <T extends () => Promise<any>>(
  handler: T,
): void => {
  messaging().onMessage(handler);
};

export const getFcmToken = async (): Promise<string> => {
  const fcmToken = await getItem(storageKeys.FCM_TOKEN);
  console.log(fcmToken);
  if (!fcmToken) {
    await messaging().registerDeviceForRemoteMessages();
    const newFcmToken = await messaging().getToken();
    console.log(fcmToken);
    if (newFcmToken) {
      await setItem(storageKeys.FCM_TOKEN, newFcmToken);
      return newFcmToken;
    }
  }
  return fcmToken!;
};
