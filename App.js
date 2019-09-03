import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator({
  Home: HomeScreen
  //Tweet: TweetScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Dev Tweets'
  }
});

export default createAppContainer(navigator);