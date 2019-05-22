import React from 'react'
import {View, Text,TouchableOpacity,ScrollView,RefreshControl,ActivityIndicator,StyleSheet,TextInput,FlatList,StatusBar,Image,Animated,Easing,Dimensions} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Card,CardItem} from 'native-base'
import {LinearGradient} from 'expo'
import BarreMenu from '../../../Navigation/BarreMenu'

import ElementClassement from './ElementClassement'

const {width}=Dimensions.get("window")


export default class Classement extends React.Component{

  constructor(props){
    super(props)
    this.searchedText=""
    this.state={
      donnees:[],listeEcoles:[],refreshing:false,
      leftPosition: new Animated.Value(width),
      refreshingLeft:false
    }
  }

  componentDidMount(){
      this._loadClassement()
  }

  _loadClassement(){
    
    this.GetEcolesFromAPI().then((data)=>{
      this.setState({
        donnees:data.values
      },()=>{this.triDonnes()})
    })
  }

  _onRefresh(){
    this.setState({refreshing: true})
    this._loadClassement()
  }

  triDonnes(){
    var tableau = this.state.donnees.filter(function(ecole){
      ecoleNom=ecole[1].toUpperCase()
      return((ecoleNom!='NOM'))})
    this.setState({donnees:tableau,refreshing:false,refreshingLeft:false})

  }

  GetEcolesFromAPI(){
    const url='https://sheets.googleapis.com/v4/spreadsheets/13KI5bDD6AvddR6AVJTSmmCQf6CiDfYebWcgEG2n04Vw/values/Feuille%201?valueRenderOption=FORMATTED_VALUE&key=AIzaSyA_mdFbHs0qvEyyx9ZFIFP8fu2ACRWHtL4'
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  _displayPageEcole=(nomEcole,scoreEcole,classement,basketball,football,volleyball)=>{
    this.props.navigation.navigate("PageEcole",{nomEcole:nomEcole,scoreEcole:scoreEcole,classement:classement,basketball:basketball,football:football,volleyball:volleyball})

  }

  leftRefreshRender(){
    if (!this.state.refreshingLeft){
      return(
          <Icon name='refresh' style={{marginRight:10,color:'white'}} onPress={()=>this.leftRefresh()}/>
      )
    }
    else{
      return(
        <ActivityIndicator style={{marginRight:10}}/>
      )
    }
  }

  leftRefresh(){
    this.setState({refreshingLeft:true})
    this._loadClassement()

  }

  trierEcoles(){
    var listeEcoles=this.state.listeEcoles
    var n=listeEcoles.length
    for (k=0;k<n;k++){
      var ecole=listeEcoles[k]
      var or=ecole.or
      var j=k
      while ((j>0)&&(or<listeEcoles[j-1].or)){
        listeEcoles[j]=listeEcoles[j-1]
        j=j-1
      }
      listeEcoles[j]=ecole
    }
    this.setState({listeEcoles:listeEcoles})
  }

   
               
 

  render(){

    return(
        <Container>
            
            <Header style={{height:65,backgroundColor:'#070027'}}>
            
                <StatusBar barStyle={'light-content'}/> 
                <Left >
                  <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{flex:1,justifyContent:'center'}}>
                      <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='menu'/>
                  </TouchableOpacity>
                </Left>
                <Body>
                    <Title style={{color:'white'}}> Classement </Title>
                </Body>
                <Right>
                  {this.leftRefreshRender()}
                </Right>
            
            </Header>
    
            
            <ScrollView style={{flex:1}}
            refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={()=>this._onRefresh()}
                />}
            >
                <FlatList
                data={this.state.donnees}
                keyExtractor={(item)=> item[2].toString()}
                renderItem={({item}) =>
                <ElementClassement classement={item[3]} nom={item[1]} score={item[0]}/>
                }
                />
            </ScrollView>
         </Container>
    )
  }
}


