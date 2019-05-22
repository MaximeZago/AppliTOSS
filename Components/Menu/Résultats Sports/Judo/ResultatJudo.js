import React from 'react';
import {Text, View, TouchableOpacity, StatusBar,Platform} from 'react-native'
import {Icon, Container, Header, Left, Body, Title, Right} from 'native-base'

import ResultatsJudoH from './MasculinH/ResultatsJudoH'
import ResultatsJudoL from './MasculinL/ResultatsJudoL'
import ResultatsJudoF from './Feminin/ResultatsJudoF';

export default class ResultatJudo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      male: true,
      weight: true
    }
  }

  colorTab () {
    return('#070027')
  }

  styleBox (genre) {
    if ((genre === 'heavy' && this.state.male && this.state.weight) || (genre === 'light' && this.state.male && !this.state.weight) || (genre === 'female' && !this.state.male)) {
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
  }
  
  styleText (genre) {
    if ((genre === 'heavy' && this.state.male && this.state.weight) || (genre === 'light' && this.state.male && !this.state.weight) || (genre === 'female' && !this.state.male)) {
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
  }

  changeWeightToHeavy () {
    this.setState({
      weight: true,
      male: true
    })
  }

  changeWeightToLight () {
    this.setState({
      weight: false,
      male: true
    })
  }

  changeToF () {
    this.setState({male: false})
  }

  displayVue () {
    if (this.state.male) {
      if (this.state.weight) {
        return (<ResultatsJudoH/>)
      } else {
        return (<ResultatsJudoL/>)
      }
    } else {
      return (<ResultatsJudoF/>)
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
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Résultats Judo</Text>
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
            <Title style={{color:'white'}}>Résultats Judo</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }

        <View style = {{
          flexDirection: 'row',
          height: 50,
          backgroundColor: this.colorTab()}}>
          <View style = {{flex: 1}}>
            <TouchableOpacity onPress = {() => this.changeWeightToHeavy()}
              style = {this.styleBox('heavy')}>
              <Text style = {this.styleText('heavy')}>+ 73 kg M</Text>
            </TouchableOpacity>
          </View>

          <View style = {{flex: 1}}>
            <TouchableOpacity onPress = {() => this.changeWeightToLight()}
              style = {this.styleBox('light')}>
              <Text style = {this.styleText('light')}>- 73 kg M</Text>
            </TouchableOpacity>
          </View>

          <View style = {{flex: 1}}>
            <TouchableOpacity onPress = {() => this.changeToF()}
              style = {this.styleBox('female')}>
              <Text style = {this.styleText('female')}>FEMININ</Text>
            </TouchableOpacity>
          </View>
        </View>

        {this.displayVue()}

      </Container>
    )
  }
}