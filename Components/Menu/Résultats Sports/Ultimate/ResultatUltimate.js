import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar,Platform} from 'react-native'
import {Icon,Button,Container,Header,Content,Left,Body,Title,Right,Footer,FooterTab,Tabs,Tab,TabHeading} from 'native-base'

import ResultatsUltimate from './Masculin/ResultatsUltimateM'
export default class ResultatFoot extends React.Component {

  constructor(props){
    super(props)
    this.state={masculin:true}
  }

  colorTab(){
    return('#070027')
    var couleur='1C1F2A'
    // '#070027'
  }

  


  displayVue(){
    return(<ResultatsUltimate/>)
  }
  

  render() {

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
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Résultats Ultimate</Text>
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
            <Title style={{color:'white'}}>Résultats Ultimate</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }
        {this.displayVue()}
        

        
      </Container>

    )
  }
}



