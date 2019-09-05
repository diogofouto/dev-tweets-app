import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import TweetScreen from '../screens/TweetScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Tweet: TweetScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#1b1c51'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: "center", 
      flex:1 
    },
    title: 'Betacode'
  }
});

export default createAppContainer(navigator);