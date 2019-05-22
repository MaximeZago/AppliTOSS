import React from 'react';
import {Text, View, TouchableOpacity, StatusBar,Platform} from 'react-native'
import {Icon, Container, Header, Left, Body, Title, Right} from 'native-base'

import ResultatsEpee from './Epee/ResultatsEpee'
import ResultatsFleuret from './Fleuret/ResultatsFleuret';

export default class ResultatEscrime extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      epee: true
    }
  }

  colorTab () {
    return('#070027')
  }

  styleBox (genre) {
    if ((genre === 'epee' && this.state.epee) || (genre === 'fleuret' && !this.state.epee)) {
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
    if ((genre === 'epee' && this.state.epee) || (genre === 'fleuret' && !this.state.epee)) {
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

  changeToEpee () {
    this.setState({
      epee: true
    })
  }

  changeToFleuret () {
    this.setState({
      epee: false
    })
  }

  displayVue () {
    if (this.state.epee) {
      return (<ResultatsEpee/>)
    } else {
      return (<ResultatsFleuret/>)
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
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Résultats Escrime</Text>
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
            <Title style={{color:'white'}}>Résultats Escrime</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }

        <View style = {{
          flexDirection: 'row',
          height: 50,
          backgroundColor: this.colorTab()}}>
          <View style = {{flex: 1}}>
            <TouchableOpacity onPress = {() => this.changeToEpee()}
              style = {this.styleBox('epee')}>
              <Text style = {this.styleText('epee')}>EPEE</Text>
            </TouchableOpacity>
          </View>

          <View style = {{flex: 1}}>
            <TouchableOpacity onPress = {() => this.changeToFleuret()}
              style = {this.styleBox('fleuret')}>
              <Text style = {this.styleText('fleuret')}>FLEURET</Text>
            </TouchableOpacity>
          </View>
        </View>

        {this.displayVue()}

      </Container>
    )
  }
}