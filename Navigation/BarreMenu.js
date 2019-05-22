import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Card,CardItem} from 'native-base'
import { AntDesign,Ionicons,MaterialCommunityIcons } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesome ,Entypo} from '@expo/vector-icons'

const {width}=Dimensions.get('window')
export default class BarreMenu extends React.Component {


  createIcon(type,name,couleur,titre){
    if (titre==='Partenaires'){
      
      return(
        <FontAwesome active name={name} size={20}  style={{marginRight:10,color:couleur}}/>
      )
    }
    if (titre==='Contacts'){
      
      return(
        <Entypo active name={name} size={25}  style={{marginRight:10,color:couleur}}/>
      )
    }
    if (type===undefined){
      return(
        <Icon active name={name} style={{marginRight:10,color:couleur}} />
      )
    }

    
    else{
      switch(type){
        case 'MaterialIcons':
          return(
            <MaterialIcons active size={27} name={name} style={{marginRight:10,color:couleur}} />
          )
      }
    }
  }

  render(){

    return(
      <CardItem style={{width:width*0.8}} >
              <Left>
                {this.createIcon(this.props.type,this.props.logo,this.props.couleur,this.props.titre)}
                <Text style={{fontWeight:'bold',color:this.props.couleur}}>{this.props.titre}</Text>
              </Left> 
              <Right>
                <Icon  style={{color:this.props.couleur}} name="arrow-forward" />
              </Right>
      </CardItem>
    )
  }
}
