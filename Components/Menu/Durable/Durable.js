import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar,Dimensions,Image,ScrollView,Linking,Platform} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button} from 'native-base'
import BarreMenu from '../../../Navigation/BarreMenu'


const {width}=Dimensions.get('window')

export default class SettingsScreen extends React.Component {

  static navigationOptions={
    drawerLabel : ({tintColor})=>(
      <BarreMenu couleur={tintColor} titre={'Développement Durable'} logo={'leaf'}/>
    )
  }

  render() {
      console.log(width)
    return(
      <Container>
        {Platform.OS==='android'?
            <View>
              <View style={{height:StatusBar.currentHeight,backgroundColor:'#7b9741'}}>

              </View>
              <View style={{height:50,flexDirection:'row',backgroundColor:'#7b9741'}}>
                <View style={{flex:1}}>
                  <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{flex:1,justifyContent:'center'}}>
                      <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='menu'/>
                  </TouchableOpacity>
                </View>
                <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Développement durable</Text>
                </View>
                <View style={{flex:1}}>
                </View>
              </View>
             </View>
        :
        
         <Header transparent style={{backgroundColor:'#7b9741',height:65}}>
          <StatusBar barStyle={'light-content'}/>
          <Left style={{flex:1}} >
            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{flex:1,justifyContent:'center'}}>
                <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='menu'/>
            </TouchableOpacity>
          </Left>
          <Body style={{flex:4}}>
            <Title style={{color:'white'}}>Développement durable</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }
        
          <View style={{flex:1}}>
                <ScrollView style={{}}>
                    {/* <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                        <Text style={{fontWeight:'bold',fontSize:18}}>Partenaires offficiels</Text>
                    </View> */}
                    <View  style={{width:width,height:0.5855*width,marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosDurable/dd1.png')}/>
                    </View>
                    <View  style={{width:width,height:0.4871*width,marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosDurable/dd2.png')}/>
                    </View>
                    <View  style={{width:width,height:0.5968*width,marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosDurable/dd3.png')}/>
                    </View>
                    <View  style={{width:width,height:0.6254*width,marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosDurable/dd4.png')}/>
                    </View>
                    <View  style={{width:width,height:0.5736*width,marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosDurable/dd5.png')}/>
                    </View>
                    <View  style={{width:width,height:0.5780*width,marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosDurable/dd6.png')}/>
                    </View>
                    
                   
                    
                </ScrollView>
          </View>
      </Container>
    )
  }
}
