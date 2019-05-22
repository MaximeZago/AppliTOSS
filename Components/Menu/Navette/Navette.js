import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button} from 'native-base'
import BarreMenu from '../../../Navigation/BarreMenu'


export default class SettingsScreen extends React.Component {

  static navigationOptions={
    drawerLabel : ({tintColor})=>(
      <BarreMenu  couleur={tintColor} titre={'Navette'} logo={'bus'}/>
    )
  }

  render() {
    return(
      <Container>
        <Header transparent style={{backgroundColor:'#070027',height:65}}>
          <StatusBar barStyle={'light-content'}/>
          <Left >
            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{flex:1,justifyContent:'center'}}>
                <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='menu'/>
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Navettes</Title>
          </Body>
          <Right/>
        </Header>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View>
                
            </View>
        </View>
      </Container>
    )
  }
}
