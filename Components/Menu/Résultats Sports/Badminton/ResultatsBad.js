import React from 'react';
import {TouchableOpacity, StatusBar, Dimensions, StyleSheet, Image, View,Platform,Text} from 'react-native'
import {Icon, Container, Header, Left, Body, Title, Right, Content} from 'native-base'

const {width, height} = Dimensions.get('window')

export default class ResultatsBad extends React.Component {

  constructor (props) {
    super(props)
  }

  colorTab () {
    return ('#1C1F2A')
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
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Résultats Badminton</Text>
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
            <Title style={{color:'white'}}>Résultats Badminton</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }
        <Content>
          <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('ResultatsBadSH')} 
            activeOpacity={0.8}
              style = {{
                width: width / 2 - 7.5,
                marginLeft: 5,
                marginRight: 2.5,
                marginTop: 5,
                height: (height - 85) / 3
              }}>
              <Image style = {styles.image}
                source = {require('../../../../Images/LogosBadminton/bad_simple_H.jpg')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => this.props.navigation.navigate('ResultatsBadSF')} 
            activeOpacity={0.8}
              style = {{
                width: width / 2 - 7.5,
                marginLeft: 2.5,
                marginRight: 5,
                marginTop: 5,
                height: (height - 85) / 3
              }}>
              <Image style = {styles.image}
                source = {require('../../../../Images/LogosBadminton/bad_simple_F.jpg')}/>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress = {() => this.props.navigation.navigate('ResultatsBadDM')} 
          activeOpacity={0.8}
            style = {{
              width: width - 10,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 5,
              height: (height - 85) / 3
            }}>
            <Image style = {styles.image}
              source = {require('../../../../Images/LogosBadminton/bad_double_M.jpg')}/>
          </TouchableOpacity>

          <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('ResultatsBadDH')} 
            activeOpacity={0.8}
              style = {{
                width: width / 2 - 7.5,
                marginLeft: 5,
                marginRight: 2.5,
                marginTop: 5,
                marginBottom: 5,
                height: (height - 85) / 3
              }}>
              <Image style = {styles.image}
                source = {require('../../../../Images/LogosBadminton/bad_double_H.jpg')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => this.props.navigation.navigate('ResultatsBadDF')} 
            activeOpacity={0.8}
              style = {{
                width: width / 2 - 7.5,
                marginLeft: 2.5,
                marginRight: 5,
                marginTop: 5,
                marginBottom: 5,
                height: (height - 85) / 3
              }}>
              <Image style = {styles.image}
                source = {require('../../../../Images/LogosBadminton/bad_double_F.jpg')}/>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>

    )
  }
}

const styles = StyleSheet.create({
  image: {
    height: null,
    width: null,
    flex: 1,
    resizeMode: 'cover'
  }
})