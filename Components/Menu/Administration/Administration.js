import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ActivityIndicator,Picker,StatusBar} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Form,Item,Label,Input} from 'native-base'
import BarreMenu from '../../../Navigation/BarreMenu'


export default class Administration extends React.Component {

    static navigationOptions={
        drawerLabel : ({tintColor})=>(
          <BarreMenu couleur={tintColor} titre={'Administration'} logo={'school'}/>
        )
      }
    render(){
        return(
            <View style={{flex:1}}>
            <Header transparent style={{backgroundColor:'#070027',height:65}}>
                    <StatusBar barStyle={'light-content'}/>
                    <Left>
                    <Icon style={{margin:10,color:'white'}} onPress={()=>this.props.navigation.openDrawer()}  name='menu'/>
                    </Left>
                    <Body>
                        <Title style={{color:'white'}}> Administration </Title>
                    </Body>
                    <Right/>
                </Header>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Administration</Text>
            </View>
          </View>
          )
    }
}