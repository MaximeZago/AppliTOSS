import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar,Platform} from 'react-native'
import {Icon,Button,Container,Header,Content,Left,Body,Title,Right,Footer,FooterTab,Tabs,Tab,TabHeading} from 'native-base'

import ResultatsFootM from './Masculin/ResultatsPingPongM'
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
    return(<ResultatsFootM/>)
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
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Tennis de table</Text>
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
            <Title style={{color:'white'}}>Tennis de table</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }
        
        
        {this.displayVue()}
        

        
      </Container>

    )
  }
}



{/* <Tab heading={ 
            <TabHeading style={{backgroundColor:this.colorTab()}}>
            <View style={{justifyContent:'center',alignItems:'center',flex:1,marginHorizontal:10,height:50,borderColor:this.colorTab(),borderWidth:1,borderRadius:10,backgroundColor:'white'}}>
            <Text style={{fontSize:18,color:this.colorTab()}}>MASCULIN</Text>
            </View>
            </TabHeading>}>
            {this.resultatVue()}
          </Tab> */}

{/* <Tabs tabContainerStyle={{height:40,backgroundColor:this.colorTab()}} tabBarUnderlineStyle={{height:0}} locked={true}>
        <Tab heading='Masculin'
            textStyle={{fontSize:11,fontWeight:'bold',color:'white',opacity:0.75}}
            activeTextStyle={{fontSize:15,fontWeight:'bold',color:this.colorTab()}}
            tabStyle={{backgroundColor:this.colorTab()}}
            activeTabStyle={{backgroundColor:'#ccd8ff',borderRightWidth:5,borderLeftWidth:5,borderTopWidth:5,borderBottomWidth:5,borderColor:this.colorTab()}}>
            {this.resultatVue()}
            </Tab>
            <Tab heading='Féminin'
            textStyle={{fontSize:11,fontWeight:'bold',color:'white',opacity:0.75}}
            activeTextStyle={{fontSize:15,fontWeight:'bold',color:this.colorTab()}}
            tabStyle={{backgroundColor:this.colorTab()}}
            activeTabStyle={{backgroundColor:'#EBEBEB',borderWidth:3,borderColor:this.colorTab()}}>
            {this.resultatVue()}
            </Tab>
        </Tabs> */}