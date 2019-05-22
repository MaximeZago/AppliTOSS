import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar,Platform,FlatList,Image,ScrollView,RefreshControl,ActivityIndicator,Dimensions,WebView,Linking} from 'react-native'
import {Icon,Button,Container,Header,Content,Left,Body,Title,Right,Footer,FooterTab,Tabs,Tab,TabHeading} from 'native-base'


const firebase = require("firebase");
  
require("firebase/firestore");

export default class ResultatsCheer extends React.Component{
    
    constructor(props){
        super(props)
        this.state={listeEquipes:[],refreshing:false,loading:true}
    }
    
    componentDidMount(){
      const uri = 'http://cs-sports.fr/10km/results.pdf';
      if (Platform.OS==='android'){
        
        Linking.openURL(uri)
        this.props.navigation.navigate('ListeResultats')
      }
    }
    

    

    render() {
      const uri = 'http://cs-sports.fr/10km/results.pdf';
        return (
          <Container>
            {Platform.OS==='android'?
            <View>
              <View style={{height:StatusBar.currentHeight,backgroundColor:'#070027'}}>

              </View>
              <View style={{height:50,flexDirection:'row',backgroundColor:'#070027'}}>
                <View style={{flex:1}}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('ListeResultats')} style={{flex:1,justifyContent:'center'}}>
                      <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='arrow-back'/>
                  </TouchableOpacity>
                </View>
                <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Résultats 10km Mazars</Text>
                </View>
                <View style={{flex:1}}>
                </View>
              </View>
             </View>
        :
        
         <Header transparent style={{backgroundColor:'#070027',height:65}}>
          <StatusBar barStyle={'light-content'}/>
          <Left style={{flex:1}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ListeResultats')} style={{flex:1,justifyContent:'center'}}>
                <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='arrow-back'/>
            </TouchableOpacity>
          </Left>
          <Body style={{flex:5}}>
            <Title style={{color:'white'}}>Résultats 10km Mazars</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }
        
       <View style={{flex:1}}>
       
        {Platform.OS==='ios'?
      <WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri }}
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
:
null
        }
       </View>
            
          </Container>
    
        )
    }
    
    
}



