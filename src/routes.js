import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Login from './pages/login';
import Checkin from './pages/checkin';

export default createStackNavigator({
    Login,
    Checkin },
    { navigationOptions: {
            headerStyle: {
                backgroundColor: "#142638" //header color
            },
            headerTintColor: "#FFF" //heade font color
        }
    });