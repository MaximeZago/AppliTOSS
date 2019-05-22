import React from 'react';
import {StatusBar, Image, View, StyleSheet, TouchableOpacity,Platform,Text} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body} from 'native-base'

export default class DiffOrBlocs extends React.Component {

  colorTab () {
    return('#1C1F2A')
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
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Discipline</Text>
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
            <Title style={{color:'white'}}>Discipline</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }

        <View style = {styles.mainContainer}>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate("ResultatDiff")}
          activeOpacity={0.8}
          style = {styles.topContainer}>
            <Image source = {require('../../../../Images/PhotosEscalade/photo_diff.jpg')}
            style = {styles.mainImage}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate("ResultatBlocs")}
          activeOpacity={0.8}
          style = {styles.bottomContainer}>
            <Image source = {require('../../../../Images/PhotosEscalade/photo_blocs.jpg')}
            style = {styles.mainImage}/>
          </TouchableOpacity>
        </View>
      </Container>
    )
  }
}
      
const styles=StyleSheet.create({
  mainImage:{
    height:null,
    width:null,
    flex:1,
    resizeMode: 'cover'
  },
  mainContainer:{
    flex:1,
  },
  topContainer:{
    flex:1,
  },
  bottomContainer:{
    marginTop:1,
    flex:1,
  }
})