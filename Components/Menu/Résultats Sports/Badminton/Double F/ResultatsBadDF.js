import React from 'react';
import {Text, View, TouchableOpacity, StatusBar,Platform} from 'react-native'
import {Icon, Container, Header, Left, Body, Title, Right, Tabs, Tab} from 'native-base'

import ResultatsQuarts from './ResultatsQuarts'
import ResultatsDemies from './ResultatsDemies'
import ResultatsFinale from './ResultatsFinale'
import ResultatsPoules from './ResultatsPoules'
export default class ResultatsBadDF extends React.Component {

    constructor (props) {
       super(props)
    }

    colorTab () {
        return ('#070027')
    }

    render () {

        return (
            <Container>
                {Platform.OS==='android'?
            <View>
              <View style={{height:StatusBar.currentHeight,backgroundColor:'#070027'}}>

              </View>
              <View style={{height:50,flexDirection:'row',backgroundColor:'#070027'}}>
                <View style={{flex:1}}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('ResultatBad')} style={{flex:1,justifyContent:'center'}}>
                      <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='arrow-back'/>
                  </TouchableOpacity>
                </View>
                <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Double Femmes</Text>
                </View>
                <View style={{flex:1}}>
                </View>
              </View>
             </View>
        :
        
         <Header transparent style={{backgroundColor:'#070027',height:65}}>
          <StatusBar barStyle={'light-content'}/>
          <Left style={{flex:1}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ResultatBad')} style={{flex:1,justifyContent:'center'}}>
                <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='arrow-back'/>
            </TouchableOpacity>
          </Left>
          <Body style={{flex:5}}>
            <Title style={{color:'white'}}>Double Femmes</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }

            <Tabs tabContainerStyle = {{height: 40}}
                    tabBarUnderlineStyle = {{
                        backgroundColor: this.colorTab(),
                        height: 2}}>         
                    <Tab heading = "Poules" 
                        textStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab(),
                            opacity: 0.75}}
                        activeTextStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab()}}
                        tabStyle = {{backgroundColor:'white'}}
                        activeTabStyle = {{backgroundColor:'white'}}>
                        <ResultatsPoules/>
                    </Tab>
                
                        
                    <Tab heading = "Quarts" 
                        textStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab(),
                            opacity: 0.75}}
                        activeTextStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab()}}
                        tabStyle = {{backgroundColor:'white'}}
                        activeTabStyle = {{backgroundColor:'white'}}>
                        <ResultatsQuarts/>
                    </Tab>
                    <Tab heading = "Demies" 
                        textStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab(),
                            opacity: 0.75}}
                        activeTextStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab()}}
                        tabStyle = {{backgroundColor:'white'}}
                        activeTabStyle = {{backgroundColor:'white'}}>
                        <ResultatsDemies/>
                    </Tab>
                    <Tab heading = "Finale" 
                        textStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab(),
                            opacity: 0.75}}
                        activeTextStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab()}}
                        tabStyle = {{backgroundColor:'white'}}
                        activeTabStyle = {{backgroundColor:'white'}}>
                        <ResultatsFinale/>
                    </Tab>
                </Tabs>

            </Container>
        )
    }
}