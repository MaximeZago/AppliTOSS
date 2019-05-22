import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ActivityIndicator,Vibration,StatusBar,Dimensions,Platform} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Form,Item,Label,Input} from 'native-base'
import BarreMenu from '../../../Navigation/BarreMenu'
import {Font} from 'expo'

const { width, height } = Dimensions.get('window')
const heightImage=height-65

export default class HomeScreen extends React.Component {



    

    static navigationOptions={
        drawerLabel : ({tintColor})=>(
          <BarreMenu couleur={tintColor} titre={'Accueil'} logo={'home'}/>
        )
      }
    


    render(){
        return(
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
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Accueil</Text>
                </View>
                <View style={{flex:1}}>
                </View>
              </View>
             </View>
        :
        
         <Header transparent style={{backgroundColor:'#070027',height:65}}>
          <StatusBar barStyle={'light-content'}/>
          <Left >
            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{flex:1,justifyContent:'center'}}>
                <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='menu'/>
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Accueil</Title>
          </Body>
          <Right/>  
        </Header> 
        }
                
          <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('Planning')} 
            activeOpacity={0.8}
              style = {{
                width: width / 2 - 3,
                marginLeft: 2,
                marginRight: 1,
                marginTop: 2,
                height: (height - 73) / 3  
              }}>
              <Image style = {styles.image}
                source = {require('../../../Images/ImagesAccueil/actualites.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => this.props.navigation.navigate('Carte')} 
            activeOpacity={0.8}
              style = {{
                width: width / 2 - 3,
                marginLeft: 1,
                marginRight: 2,
                marginTop: 2,
                height: (height - 73) / 3
              }}>
              <Image style = {styles.image}
                source = {require('../../../Images/ImagesAccueil/plan.png')}/>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress = {() => this.props.navigation.navigate('Résultats')} 
          activeOpacity={0.8}
            style = {{
              width: width - 4,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 2,
              height: (height - 73) / 3
            }}>
            <Image style = {styles.image}
              source = {require('../../../Images/ImagesAccueil/resultats_sports_2.png')}/>
          </TouchableOpacity>

          <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('Classement')} 
            activeOpacity={0.8}
              style = {{
                width: width / 2 - 3,
                marginLeft: 2,
                marginRight: 1,
                marginTop: 2,
                marginBottom: 2,
                height: (height - 73) / 3
              }}>
              <Image style = {styles.image}
                source = {require('../../../Images/ImagesAccueil/podium.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => this.props.navigation.navigate('Durable')} 
            activeOpacity={0.8}
              style = {{
                width: width / 2 - 3,
                marginLeft: 1,
                marginRight: 2,
                marginTop: 2,
                marginBottom: 2,
                height: (height - 73) / 3
              }}>
              <Image style = {styles.image}
                source = {require('../../../Images/ImagesAccueil/dd3.png')}/>
            </TouchableOpacity>
          </View>
        
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