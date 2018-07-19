import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Friends from './Friends';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends},
});

export default AppNavigator;
