import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ActivityIndicator,Picker} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Form,Item,Label,Input} from 'native-base'
import BarreMenu from '../../../Navigation/BarreMenu'


const firebase = require("firebase");
require("firebase/firestore");

const listeEcole=['ASSAS','Centrale Lille','Centrale Lyon','Centrale Marseille','Centrale Nantes','CentraleSupélec' ,'CentraleSupélec Metz','CentraleSupélec Rennes','Chimie ParisTech','Cranfield','Devoteam','ECE','Ecole Polytechnique','EFOM','EFREI','EIVP','EMLYON','ENS Cachan','ENS Ulm','ENSAE','ENSAI','ENSAM','ENSEA','ENSEM']

const listeScores=[1,2,3,4,5,6]
const listeSports=['Football','Basketball','Handball','Volleyball','10 km Mazars','Raid','Escrime','Tennis','Badminton','Judo','Rugby','Cheerleading','Escalade','Ping-Pong','Natation']
const listeSportsSimples=['Football','Basketball','Handball','Volleyball','Rugby','Tennis']
const listePhases=['POULE A','POULE B','POULE C','POULE D','POULE E','POULE F','POULE G','POULE H',]
export default class Administration extends React.Component {
    static navigationOptions={
        drawerLabel : ({tintColor})=>(
          <BarreMenu couleur={tintColor} titre={'Administration'} logo={'school'}/>
        )
      }
      
    constructor(props){
        super(props)
        this.state=({
            Sport:'',
            Phase:'',
            Equipe1:'',
            Equipe2:'',
            ScoreEquipe1:0,
            ScoreEquipe2:0,
            compteur:1

        })
    }

    _aleatoireListe(liste){
        var l=liste.length
        var n= Math.floor(Math.random() * Math.floor(l))
        return(liste[n])
    }

    writeDatabase(Sport,Phase,Equipe1,Equipe2,ScoreEquipe1,ScoreEquipe2){
        var db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        var match = Phase.toString() + " - " + Equipe1 + " - " + Equipe2
        this.setState({compteur:this.state.compteur+1})
        var id = Math.floor(Math.random() * Math.floor(1000000000))
        db.collection("Sports").doc(Sport).collection("Matchs").doc(match).set({
            Phase:Phase,
            Equipe1:Equipe1,
            Equipe2:Equipe2,
            ScoreEquipe1:ScoreEquipe1,
            ScoreEquipe2:ScoreEquipe2,
            id:id
            
        })
        .then(function() {
            alert('Match bien enregistré');
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        

    }

    testQuery(){
        var db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        var sport = this._aleatoireListe(listeSportsSimples)
        var ecole1 = this._aleatoireListe(listeEcole)
        var ecole2 = this._aleatoireListe(listeEcole)
        var score1= this._aleatoireListe(listeScores)
        var score2= this._aleatoireListe(listeScores)
        var phase= this._aleatoireListe(listePhases)
        var id = Math.floor(Math.random() * Math.floor(1000000000))
        var match = phase + " - " + ecole1 + " - " + ecole2 
        
        db.collection("Sports").doc(sport).collection("Matchs").doc(match).set({
            Phase:phase,
            Equipe1:ecole1,
            Equipe2:ecole2,
            ScoreEquipe1:score1,
            ScoreEquipe2:score2,
            id:id
            
        })
        .then(function() {
            console.log("Match enregistré");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        console.log(match)
    }

    _test(){
        var i=0
        for (i=0;i<100;i++) {
            this.testQuery()
        }
    }

    simulateurPoule(){
        var db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        n=listePhases.length
        for (i=0;i<n;i++){
            var poule=listePhases[i]
            var sport='Football'
            var ecole1=this._aleatoireListe(listeEcole)
            var ecole2=this._aleatoireListe(listeEcole)
            var ecole3=this._aleatoireListe(listeEcole)
            var ecole4=this._aleatoireListe(listeEcole)
            var match1=[ecole1,ecole2]
            var match2=[ecole1,ecole3]
            var match3=[ecole1,ecole4]
            var match4=[ecole2,ecole3]
            var match5=[ecole2,ecole4]
            var match6=[ecole3,ecole4]
            var listeMatchs=[match1,match2,match3,match4,match5,match6]
            for (k=0;k<6;k++){
                var score1= this._aleatoireListe(listeScores)
                var score2= this._aleatoireListe(listeScores)
                var match = poule + " - " + listeMatchs[k][0] + " - " + listeMatchs[k][1]
                var id = Math.floor(Math.random() * Math.floor(1000000000))
                db.collection("Sports").doc(sport).collection("Matchs").doc(match).set({
                    Phase:poule,
                    Equipe1:listeMatchs[k][0],
                    Equipe2:listeMatchs[k][1],
                    ScoreEquipe1:score1,
                    ScoreEquipe2:score2,
                    id:id
                    
                })
                .then(()=>console.log('Match enregistré'))
                .catch(error=>console.log(error))

            }
        }
    }

    
    
    
    render(){
        return(
        <Container>
            <Header>
            <Left style={{flex:1}}>
            <Icon style={{margin:10}} onPress={()=>this.props.navigation.openDrawer()}  name='menu'/>
            </Left>
            <Body style={{flex:5}}>
                <Title> Administration </Title>
            </Body>
            <Right style={{flex:1}}></Right>
            </Header>
            <Content style={{margin:10}}>
                <Item style={{margin:10}} regular>
                    <Input onChangeText={(Sport)=>{this.setState({Sport})}} placeholder='Entrez un sport' />
                </Item>
                <Item style={{margin:10}} regular>
                    <Input onChangeText={(Phase)=>{this.setState({Phase})}} placeholder='Phase' />
                </Item>
                <Item style={{margin:10}} regular>
                    <Input onChangeText={(Equipe1)=>{this.setState({Equipe1})}} placeholder='Equipe 1' />
                </Item>
                <Item style={{margin:10}} regular>
                    <Input onChangeText={(Equipe2)=>{this.setState({Equipe2})}} placeholder='Equipe 2' />
                </Item>
                <Item style={{margin:10}} regular>
                    <Input onChangeText={(ScoreEquipe1)=>{this.setState({ScoreEquipe1})}} placeholder='Score Equipe 1' />
                </Item>
                <Item style={{margin:10}} regular>
                    <Input onChangeText={(ScoreEquipe2)=>{this.setState({ScoreEquipe2})}} placeholder='Score Equipe 2' />
                </Item>
                <Button style={{marginTop:20,marginHorizontal:10}}
                 full rounded primary onPress={()=>this.writeDatabase(this.state.Sport,this.state.Phase,this.state.Equipe1,this.state.Equipe2,this.state.ScoreEquipe1,this.state.ScoreEquipe2)}>
                    <Text>Envoyer</Text>
                </Button>
                <Button style={{marginTop:20,marginHorizontal:10}}
                 full rounded primary onPress={()=>this.simulateurPoule()}>
                    <Text>Test</Text>
                </Button>
            </Content>
        </Container>
        )
    }
        
}