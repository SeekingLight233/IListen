/**
 * @description 导航器根目录
 * @author SeekingLight
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail';
import {Platform, StyleSheet} from 'react-native';
//根路径下的页面，类型别名
export type RootStackParamList = {
  BottomTabs: {
    screen?: string;
  };
  Detail: {id: number}; //允许Detail从外部接受参数
};
//导出根路径下的页面作为属性，传递出去
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
//Stack中包含Navigator和Screen
let Stack = createStackNavigator<RootStackParamList>();

class Navigator extends React.Component {
  render() {
    return (
      //所有的导航器必须放到NavigationContainer中
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            headerTitleAlign: 'center', //设置头部的title居中
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            //开启手势系统
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
              }),
            },
          }}>
          {/* Screen组件作为navigator子组件使用，用来定义路由 */}
          <Stack.Screen
            name="BottomTabs"
            //component中传入要渲染的组件
            component={BottomTabs}
            //Screen内的option优先级更高
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerTitle: '详情页',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
