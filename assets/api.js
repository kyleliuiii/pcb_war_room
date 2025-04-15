import axios from 'axios';
const domainURL = 'http://192.168.50.10';
const userRequest = axios.create({
	baseURL: domainURL,
	withCredentials: false
});

export const apiSignalData = () => userRequest.get('/api/v1/light_signal');
export const apiLogData = () => userRequest.get('/api/v1/error_msg');
export const apiPackagesHistoryData = () => userRequest.get('/api/v1/other_packages');
export const apiPackagesRealtimeData = () => userRequest.get('/api/v1/packages');
export const apiCadcamData = () => userRequest.get('/api/v1/map_light');
export const apiProcessStatus = () => userRequest.get('/api/v1/status');
