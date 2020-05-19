import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp, BaseRouter} from '@react-navigation/native';
import {RootStackParamList} from '../navigator';

interface IProps {
  route: RouteProp<RootStackParamList, 'Detail'>; //泛型中第二个参数传当前页面
}
class Detail extends React.Component<IProps> {
  render() {
    const {id} = this.props.route.params;
    return (
      <View>
        <Text>详情页</Text>
        <Text>{id}</Text>
      </View>
    );
  }
}

export default Detail;
