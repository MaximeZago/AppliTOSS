import React from 'react'
import {View, Text,TouchableOpacity,ScrollView,RefreshControl,StyleSheet,TextInput,FlatList,Image,Animated,Easing,Dimensions} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Card,CardItem} from 'native-base'

const {width}=Dimensions.get("window")


export default class ElementClassement extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            leftPosition: new Animated.Value(width)
        }
    }


    render(){
        return(
             
            <TouchableOpacity>
                <Card>
                    <CardItem>
                        <Left style={{flex:1}}>
                            <Text style={{fontSize:20,fontWeight:'bold',marginRight:5}}>{this.props.classement}</Text>
                            
                        </Left>
                        <Body style={{flex:7,flexDirection:'row',alignItems:'center'}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Image source={require('../../../Images/logo_TOSS.png')} style={{height:30,width:30,marginRight:5}}/>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{fontSize:14,fontWeight:'bold'}}> {this.props.nom} </Text>
                                <Text style={{fontSize:12}}> Score : {this.props.score} </Text>
                            </View>
                            
                        </Body>
                        
                    </CardItem>
                </Card>
            </TouchableOpacity>
        
        )
    }
}