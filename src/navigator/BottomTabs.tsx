import React from 'react';
import {
  NavigationContainer,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/pages/Home';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import {RootStackNavigation, RootStackParamList} from '.';

export type BottomTabParamList = {
  Home: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState;
};

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

const Tabs = createBottomTabNavigator<BottomTabParamList>();
const {Navigator, Screen} = Tabs;

function getTitle(route: Route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home';

  switch (routeName) {
    case 'Home':
      return '首页';
    case 'Listen':
      return '我听';
    case 'Found':
      return '发现';
    case 'Account':
      return '账户';
    default:
      return '首页';
  }
}

class BottomTabs extends React.Component<IProps> {
  //只要传入的props发生变化，就执行更新
  componentDidUpdate() {
    //动态修改标题栏
    const {navigation, route} = this.props;
    navigation.setOptions({
      headerTitle: getTitle(route),
    });
  }

  render() {
    return (
      <Navigator
        tabBarOptions={{
          activeTintColor: '#f86442',
        }}>
        <Screen
          name="Home"
          component={Home}
          options={{tabBarLabel: '首页'}}></Screen>
        <Screen
          name="Listen"
          component={Listen}
          options={{tabBarLabel: '我听'}}></Screen>
        <Screen
          name="Found"
          component={Found}
          options={{tabBarLabel: '发现'}}></Screen>
        <Screen
          name="Account"
          component={Account}
          options={{tabBarLabel: '我的'}}></Screen>
      </Navigator>
    );
  }
}

export default BottomTabs;
