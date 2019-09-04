import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import TweetScreen from './src/screens/TweetScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Tweet: TweetScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#1b1c51'
    },
    headerTintColor: '#eb5647',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: "center", 
      flex:1 
    },
    title: 'devTweets'
  }
});

export default createAppContainer(navigator);