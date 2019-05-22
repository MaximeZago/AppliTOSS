import React from 'react'
import {View, Text,TouchableOpacity,ScrollView,RefreshControl,StyleSheet,TextInput,FlatList,Image,StatusBar,Platform} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Card,CardItem,Tab,Tabs} from 'native-base'

import MatchsTermines from './MatchsTermines'
import Informations from './Informations'
import MatchsAvenir from './MatchsAvenir'
const firebase = require("firebase");
require("firebase/firestore");

export default class PageEcole extends React.Component{
    
    
    colorTab(){
        var couleur='#070027'
        return(couleur)
        
      }
    
    render(){

        const params=this.props.navigation.state.params
        
        
        return(
            <Container>
                {Platform.OS==='android'?
            <View>
              <View style={{height:StatusBar.currentHeight,backgroundColor:'#070027'}}>

              </View>
              <View style={{height:50,flexDirection:'row',backgroundColor:'#070027'}}>
                <View style={{flex:1}}>
                  <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{flex:1,justifyContent:'center'}}>
                      <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='arrow-back'/>
                  </TouchableOpacity>
                </View>
                <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>{params.nomEcole}</Text>
                </View>
                <View style={{flex:1}}>
                </View>
              </View>
             </View>
        :
        
         <Header transparent style={{backgroundColor:'#070027',height:65}}>
          <StatusBar barStyle={'light-content'}/>
          <Left style={{flex:1}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{flex:1,justifyContent:'center'}}>
                <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='arrow-back'/>
            </TouchableOpacity>
          </Left>
          <Body style={{flex:4}}>
            <Title style={{color:'white'}}>{params.nomEcole}</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }
                <Tabs tabContainerStyle={{ height: 40}}
        tabBarUnderlineStyle={{
        backgroundColor: "#8ab7f7",
        height: 3,
      }}
      >
          <Tab heading="Informations" 
          textStyle={{fontSize:11,fontWeight:'bold',color:'white',opacity:0.75}}
          activeTextStyle={{fontSize:11,fontWeight:'bold',color:'white'}}
          tabStyle={{backgroundColor:this.colorTab()}}
          activeTabStyle={{backgroundColor:this.colorTab()}}
          >
        <Informations idEcole={params.idEcole}/>
          </Tab>
          <Tab heading="Matchs à venir" 
          textStyle={{fontSize:11,fontWeight:'bold',color:'white',opacity:0.75}}
          activeTextStyle={{fontSize:11,fontWeight:'bold',color:'white'}}
          tabStyle={{backgroundColor:this.colorTab()}}
          activeTabStyle={{backgroundColor:this.colorTab()}}
          >  
          {/* <Matchenir idEcole={params.idEcole}/> */}
          <MatchsAvenir idEcole={params.idEcole}/>
            
          </Tab>
            
          <Tab heading="Matchs terminés" 
          textStyle={{fontSize:11,fontWeight:'bold',color:'white',opacity:0.75}}
          activeTextStyle={{fontSize:11,fontWeight:'bold',color:'white'}}
          tabStyle={{backgroundColor:this.colorTab()}}
          activeTabStyle={{backgroundColor:this.colorTab()}}
          >
          <MatchsTermines idEcole={params.idEcole}/>
            
         
            
          </Tab>
        </Tabs>
            </Container>
        )
    }
}