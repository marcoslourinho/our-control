import {AsyncStorage} from 'react-native';
import {create} from 'apisauce';

const api  = create({
	baseURL: 'http://ourcontrol-staging.jambu.in',
});

// api.addAsyncRequestTransform(request => async () => {
// 	const token = await AsyncStorage.getItem('@Api:token');
// 	if(token)
// 		request.headers['token'] = `Bearer ${token}`
// });

api.addResponseTransform(response => {
	if (!response.ok) throw response;
});

export default api;