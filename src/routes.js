import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Login from './pages/login';
import Checkin from './pages/checkin';

export default createDrawerNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#142638" //header color
            },
            headerTintColor: "#FFF" //heade font color
        }
    },
    Checkin: {
        screen: Checkin,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#142638" //header color
            },
            headerTintColor: "#FFF" //heade font color
        }
    }
    });
  