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
    title: 'devTweets'
  }
});

export default createAppContainer(navigator);