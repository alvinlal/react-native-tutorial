import axiosClient from '..';
import {AddDevicePayload} from './types/AddDevicePayload';
import {AddDeviceResponse} from './types/AddDeviceResponse';

export const addDevice = (data: AddDevicePayload) =>
  axiosClient.post<AddDeviceResponse>('/user/device', data);
