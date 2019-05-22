import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ActivityIndicator,Vibration,StatusBar,Dimensions} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Form,Item,Label,Input} from 'native-base'
import BarreMenu from '../../../Navigation/BarreMenu'
import Carousel from 'react-native-looped-carousel'

const { width, height } = Dimensions.get('window')
const ratio=1500/2250
export default class HomeScreen2 extends React.Component {

    static navigationOptions={
        drawerLabel : ({tintColor})=>(
          <BarreMenu couleur={tintColor} titre={'Accueil'} logo={'home'}/>
        )
      }

      _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
      }
    
    constructor(props) {
        super(props);
    
        this.state = {
          size: { width, height },
        };
      }
    render() {
        return (
            <Container>
                <Header transparent style={{backgroundColor:'#070027',height:65}}>
                    <StatusBar barStyle={'light-content'}/>
                    <Left>
                    <Icon style={{margin:10,color:'white'}} onPress={()=>this.props.navigation.openDrawer()}  name='menu'/>
                    </Left>
                    <Body>
                        <Title style={{color:'white'}}> Accueil </Title>
                    </Body>
                    <Right/>
                </Header>
                {/* <View style={{backgroundColor:'#070027'}}>
                <View style={{width:width-200,height:50,marginHorizontal:100,marginVertical:10}}>
                    <Image source={require('../Images/Logo_TOSS_Blanc.png')} style={{flex:1,height:null,width:null,resizeMode:'contain'}} />
                </View>
                </View> */}
                {/* <View style={{height:150,justifyContent:'center',alignItems:'center',width:width-50,marginHorizontal:25}}>
                    <Text style={{fontSize:32,color:'#070027',fontWeight:'bold',textAlign:'center'}}>Bienvenue au TOSS 2019</Text>
                </View> */}
                <View style={{width:width-100,height:100,marginHorizontal:50,marginVertical:30}}>
                    <Image source={require('../../../Images/Logo_TOSS_long.png')} style={{flex:1,height:null,width:null,resizeMode:'contain'}} />
                </View> 

                <View style={{marginTop:0}} onLayout={this._onLayoutDidChange}>
                    <Carousel
                    delay={2000}
                    style={styles.caroussel}
                    autoplay={false}
                    arrows
                    rightArrowText={'▶'}
                    leftArrowStyle={{color: 'white', fontSize: 22,fontWeight:'bold', margin: 5}}
                    leftArrowText={'◀'}
                    rightArrowStyle={{color: 'white', fontSize: 22,fontWeight:'bold', margin:5}}
                    >
                    <View style={styles.caroussel}>
                        <Image source={require('../../../Images/photosTOSS/artifice.jpg')} style={{flex:1,width:null,height:null,resizeMode:'contain'}}/>
                    </View>
                    <View style={styles.caroussel}>
                        <Image source={require('../../../Images/photosTOSS/départCross.jpg')} style={{flex:1,width:null,height:null,resizeMode:'contain'}}/>
                    </View>
                    <View style={styles.caroussel}>
                        <Image source={require('../../../Images/photosTOSS/rugby.jpg')} style={{flex:1,width:null,height:null,resizeMode:'cover'}}/>
                    </View>
                    <View style={styles.caroussel}>
                        <Image source={require('../../../Images/photosTOSS/showfire.jpg')} style={{flex:1,width:null,height:null,resizeMode:'cover'}}/>
                    </View>
                    </Carousel>
                 </View>
                 <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB',marginTop:30}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>Actualités</Text>
                </View>
                <View style={{height:30}}>
                    <View style={{height:20,justifyContent:'center',margin:5,marginLeft:10}}>
                        <Text style={{fontWeight:'bold',fontSize:13}}>18h : Show Surprise</Text>
                    </View>
                    <View style={{height:20,justifyContent:'center',margin:5,marginLeft:10}}>
                        <Text style={{fontWeight:'bold',fontSize:13}}>19h : Dîner au bâtiment Breguet</Text>
                    </View>
                    <View style={{height:20,justifyContent:'center',margin:5,marginLeft:10}}>
                        <Text style={{fontWeight:'bold',fontSize:13}}>22h : Début de la soirée</Text>
                    </View>
                </View>
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    caroussel:{
        width:width,
        height:ratio*width,
        
    }
})