import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar,ActivityIndicator} from 'react-native'
import {Icon,Button,Container,Header,Content,Left,Body,Title,Right,Footer,FooterTab,Tabs,Tab,TabHeading,ListItem} from 'native-base'
import MatchFootball from './MatchFootball'
const firebase = require("firebase");
require("firebase/firestore");


export default class ResultatsFinale extends React.Component{

    constructor(props){
        super(props)
        this.state={
            donnees:[],
            loading:true

        }
    }

    componentDidMount(){
        this._loadMatchs()
    }

    _loadMatchs(){
        const sport='FootballM'

        var that=this
        
        var db = firebase.firestore();
        db.settings({
        timestampsInSnapshots: true
        });
        
        var docRef = db.collection("Sports").doc(sport).collection("Matchs").where("Phase","==",'FINALE')
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({donnees:that.state.donnees.concat(match)},()=>{console.log(that.state.donnees)})
                
                
            });
        }).then(()=>that.setState({loading:false}))
        .catch(function(error) {
            console.log("Error getting document:", error);
        });
        

    }

    printMatch(n){
        const donne=this.state.donnees
        
        if (this.state.donnees.length>=n){
            return(
                <MatchFootball equipe1={donne[n-1].Equipe1} equipe2={donne[n-1].Equipe2} scoreEquipe1={donne[n-1].ScoreEquipe1} scoreEquipe2={donne[n-1].ScoreEquipe2}/>
            )
        }
        
    }

    printLoading(){
        if (this.state.loading){
            
            return(
                <View style={{height:50,margin:5,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator/>
                </View>
            )
        }
    }

    render(){
        console.log(this.state.loading)
        return(
            <Container>
                <Content>
                    <View style={{marginVertical:10}}>
                        <View style={styles.titre}>
                            <Text style={styles.texte}>Finale</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(1)}
                    </View>
                    
                    </Content>
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    texte:{
        textAlign:'center',
        fontSize:12,
        fontWeight:'bold'
    },
    titre:{
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#EBEBEB',
        
    }
})