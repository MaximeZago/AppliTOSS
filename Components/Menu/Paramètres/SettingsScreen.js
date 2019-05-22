import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button} from 'native-base'
import BarreMenu from '../../../Navigation/BarreMenu'


export default class SettingsScreen extends React.Component {

  static navigationOptions={
    drawerLabel : ({tintColor})=>(
      <BarreMenu couleur={tintColor} titre={'Paramètres'} logo={'ios-settings'}/>
    )
  }

  render() {
    return(
      <Container>
        <Header>
          <Left>
           <Icon style={{margin:10}} onPress={()=>this.props.navigation.openDrawer()}  name='menu'/>
          </Left>
          <Body>
            <Title> Paramètres </Title>
          </Body>
          <Right/>
        </Header>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text> Paramètres! </Text>
          </View>
      </Container>
    )
  }
}
