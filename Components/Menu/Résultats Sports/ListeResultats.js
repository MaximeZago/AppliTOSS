import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar,Image,Dimensions,Platform} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,List,ListItem} from 'native-base'
import BarreMenu from '../../../Navigation/BarreMenu'
const ratio=120/400



const {width,height}= Dimensions.get('window')
export default class ListeResultats extends React.Component {

  
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
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Résultats</Text>
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
            <Title style={{color:'white'}}>Résultats</Title>
          </Body>
          <Right/>  
        </Header> 
        }
        

        <Content>

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatBad",{sport:'Badminton'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Bad.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("ResultatBasket",{sport:'Basketball'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Basket.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatCheer",{sport:'Cheerleading'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Cheerleading.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatEquitation",{sport:'Equitation'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
              <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Equitation.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatEscalade",{sport:'Escalade'})}}
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Escalade.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatEscrime",{sport:'Escrime'})}}
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Escrime.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatFoot",{sport:'Football'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Foot.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatHand",{sport:'Handball'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Hand.jpg')}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatJudo",{sport:'Judo'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Judo.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatNatation",{sport:'Natation'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Natation.jpg')}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatVolley",{sport:'Volleyball'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Volley.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatRaid",{sport:'Raid'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
              <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Raid.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatRugby",{sport:'Rugby'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Rugby.jpg')}/>
          </TouchableOpacity>
          
          
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatTennis",{sport:'Tennis'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Tennis.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatPingPong",{sport:'Ping Pong'})}}
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Tennisdetable.jpg')}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatUltimate",{sport:'Ultimate'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
              <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Ultimate.jpg')}/>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResultatWaterpolo",{sport:'Water-polo'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Waterpolo.jpg')}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Resultat10km",{sport:'10 km Mazars'})}} 
          activeOpacity={0.8}
          style={styles.imageSport}>
            <Image style={styles.image}
            source={require('../../../Images/ListeResultats/Cross.jpg')}/>
          </TouchableOpacity>
          
        </Content>
      </Container>
      
    )
  }
}

{/* <ListItem onPress={()=>{this.props.navigation.navigate("ResultatFoot",{sport:'Escrime'})}}>
                <Left> <Text style={{fontSize:20}}>Escrime</Text></Left>
                <Right><Icon name="arrow-forward" /></Right>
            </ListItem> */}


          
const styles=StyleSheet.create({
  imageSport:{
    width:width,
    marginHorizontal:0,
    marginTop:2,
    height:height/7,
    
  },
  image:{
    height:null,
    width:null,
    flex:1,
    resizeMode:'cover'
  }
})