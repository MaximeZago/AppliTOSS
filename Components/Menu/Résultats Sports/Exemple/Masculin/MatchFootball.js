import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView,Animated,Dimensions} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,CardItem,Card} from 'native-base'

const {width} = Dimensions.get('window')

export default class MatchFootball extends React.Component {

    constructor(props){
        super(props)
        this.state={
            leftPosition: new Animated.Value(width)
        }
    }

    componentDidMount(){
        
        Animated.timing(
            this.state.leftPosition,
            {
            toValue: 0,
            duration: 1000, // Le temps est en milliseconds ici (3000ms = 3sec)
            
            }).start()
    }

    render() {
        return (
            
            <View>
                <Animated.View style={{height:50,flexDirection:'row',margin:5,borderWidth:1,borderRadius:10,borderColor:'#dedede',left:this.state.leftPosition}}>
                        <View style={{flex:5,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                            <Image source={require('../../../../../Images/logo_TOSS.png')} style={{height:20,width:20,marginRight:5,marginLeft:5}}/>
                            <Text style={{fontWeight:'bold',fontSize:13,flex:1,flexWrap:'wrap',textAlign:'center'}}>{this.props.equipe1}</Text>
                            
                        </View>
                        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:16}}>{this.props.scoreEquipe1} - {this.props.scoreEquipe2}</Text>
                        </View>
                        <View style={{flex:5,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:13,flex:1,flexWrap:'wrap',textAlign:'center'}}>{this.props.equipe2}</Text>
                            <Image source={require('../../../../../Images/logo_TOSS.png')} style={{height:20,width:20,marginLeft:5,marginRight:5}}/>
                        </View>
                </Animated.View>
            </View>

        )
    }
}