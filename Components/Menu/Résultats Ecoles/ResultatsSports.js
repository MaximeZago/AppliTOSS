import React from 'react'
import {View, Text,TouchableOpacity,ScrollView,RefreshControl,StyleSheet,TextInput,FlatList,Image,StatusBar} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Card,CardItem,Tab,Tabs} from 'native-base'
import MatchFootball from '../Résultats Sports/Football/Masculin/MatchFootball'


export default class ResultatsSports extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        console.log(this.props.matchPoules)
        return(
            <View>
                {
                    
                }
            </View>
        )
    }
}