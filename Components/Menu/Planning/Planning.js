import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,StatusBar,Platform,WebView,Linking} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Form,Item,Label,Input,CardItem} from 'native-base'

export default class Planning extends React.Component{

    componentDidMount(){
        const uri = 'http://cs-sports.fr/10km/planning.pdf';
        if (Platform.OS==='android'){
          
          Linking.openURL(uri)
          this.props.navigation.navigate('Home')
        }
      }

      render() {
        const uri = 'http://cs-sports.fr/10km/planning.pdf';
          return (
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
                    <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Planning</Text>
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
            <Body style={{flex:3}}>
              <Title style={{color:'white'}}>Planning</Title>
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