import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '../navigator';

interface IProps {
  navigation: RootStackNavigation;
}
class Account extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    //从当前页跳转到Detail
    navigation.navigate('Detail', {id: 100});
  };
  render() {
    return (
      <View>
        <Text>Account</Text>
        <Button title="跳转到详情页面" onPress={this.onPress}></Button>
      </View>
    );
  }
}

export default Account;
