import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar,Dimensions,Image,ScrollView,Linking,Platform} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button} from 'native-base'
import BarreMenu from '../../../Navigation/BarreMenu'


const {width}=Dimensions.get('window')

export default class SettingsScreen extends React.Component {

  static navigationOptions={
    drawerLabel : ({tintColor})=>(
      <BarreMenu couleur={tintColor} titre={'Partenaires'} logo={'handshake-o'}/>
    )
  }

  render() {
      console.log(width)
    return(
      <Container>
        {Platform.OS==='android'?
            <View>
              <View style={{height:StatusBar.currentHeight,backgroundColor:'#070027'}}>

              </View>
              <View style={{height:50,flexDirection:'row',backgroundColor:'#070027'}}>
                <View style={{flex:1}}>
                  <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{flex:1,justifyContent:'center'}}>
                      <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='menu'/>
                  </TouchableOpacity>
                </View>
                <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Nos partenaires</Text>
                </View>
                <View style={{flex:1}}>
                </View>
              </View>
             </View>
        :
        
         <Header transparent style={{backgroundColor:'#070027',height:65}}>
          <StatusBar barStyle={'light-content'}/>
          <Left style={{flex:1}}>
            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{flex:1,justifyContent:'center'}}>
                <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='menu'/>
            </TouchableOpacity>
          </Left>
          <Body style={{flex:4}}>
            <Title style={{color:'white'}}>Nos partenaires</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }
        
          <View style={{flex:1}}>
                <ScrollView style={{}}>
                    {/* <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                        <Text style={{fontWeight:'bold',fontSize:18}}>Partenaires offficiels</Text>
                    </View> */}
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://www.edf.fr/edf-recrute')}} style={{width:width,height:1*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosPartenaires/EDF.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://www.mazars.fr/')}} style={{width:width,height:1*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosPartenaires/Mazars.png')}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://france.devoteam.com/')}} style={{width:width,height:1.3296*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosPartenaires/Devoteam.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://www.bouygues-es.com/')}} style={{width:width,height:1.2963*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosPartenaires/Bouygues.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://lydia-app.com/fr/')}} style={{width:width,height:1.574*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosPartenaires/Lydia.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Linking.openURL('https://mabanque.bnpparibas/')}} style={{width:width,height:0.8333*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosPartenaires/BNPP.png')}/>
                    </TouchableOpacity>
                  
                    <View activeOpacity={0.8} style={{width:width,height:0.648*width,borderBottomWidth:2,borderColor:'#E9EAEB',marginBottom:15}}>
                        <Image style={{height:null,width:null,flex:1}} source={require('../../../Images/PhotosPartenaires/Kermess.png')}/>
                    </View>
                   
                    
                </ScrollView>
          </View>
      </Container>
    )
  }
}
