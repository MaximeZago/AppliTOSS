import React from 'react';
import {Text, View, TouchableOpacity, StatusBar,Platform} from 'react-native'
import {Icon, Container, Header, Left, Body, Title, Right} from 'native-base'

import ResultatsBasketF from './Feminin/ResultatsBasketF'
import ResultatsBasketM from './Masculin/ResultatsBasketM';

export default class ResultatBasket extends React.Component {

  constructor (props) {
    super(props)
    this.state = {masculin: true}
  }

  colorTab () {
    return('#070027')
  }

  styleBox (genre) {
    if (genre === 'masculin') {
      if (this.state.masculin) {
        return ({
          flex: 1,
          backgroundColor: 'white',
          marginLeft: 10,
          marginRight: 5,
          marginVertical: 8,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center'
        })
      } else {
        return ({
          flex: 1,
          backgroundColor: this.colorTab(),
          marginLeft: 10,
          marginRight: 5,
          marginVertical: 8,
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems:'center'
        })
      }
    } else {
      if (this.state.masculin) {
        return ({
          flex: 1,
          backgroundColor: this.colorTab(),
          marginLeft: 5,
          marginRight: 10,
          marginVertical: 8,
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center'
        })
      } else {
        return ({
          flex: 1,
          backgroundColor: 'white',
          marginLeft: 5,
          marginRight: 10,
          marginVertical: 8,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center'
        })
      }
    }
  }
  
  styleText (genre) {
    if (genre === 'masculin') {
      if (this.state.masculin) {
        return ({
          color: this.colorTab(),
          fontWeight:'bold'
        })
      } else {
        return ({
          color: 'white',
          fontWeight: 'bold'
        })
      }
    } else {
      if (this.state.masculin) {
        return ({
          color: 'white',
          fontWeight: 'bold'
        })
      } else {
        return ({
          color: this.colorTab(),
          fontWeight: 'bold'
        })
      }
    }
  }

  changeMasculin1 () {
    this.setState({masculin: true})
  }

  changeMasculin2 () {
    this.setState({masculin: false})
  }

  displayVue () {
    if (this.state.masculin) {
      return (<ResultatsBasketM/>)
    } else {
      return (<ResultatsBasketF/>)
    }
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
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('ListeResultats')} style={{flex:1,justifyContent:'center'}}>
                      <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='arrow-back'/>
                  </TouchableOpacity>
                </View>
                <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Résultats Basketball</Text>
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
            <Title style={{color:'white'}}>Résultats Basketball</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }

        <View style = {{
          flexDirection: 'row',
          height: 50,
          backgroundColor: this.colorTab()}}>
          <View style = {{flex: 1}}>
            <TouchableOpacity onPress = {() => this.changeMasculin1()}
              style = {this.styleBox('masculin')}>
              <Text style = {this.styleText('masculin')}>MASCULIN</Text>
            </TouchableOpacity>
          </View>
          <View style = {{flex: 1}}>
            <TouchableOpacity onPress = {() => this.changeMasculin2()}
              style = {this.styleBox('feminin')}>
              <Text style = {this.styleText('feminin')}>FEMININ</Text>
            </TouchableOpacity>
          </View>
        </View>

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