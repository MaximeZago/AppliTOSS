import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList,ActivityIndicator} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,CardItem,Card} from 'native-base'
import MatchFootball from './MatchFootball'
import MatchFootballAVenir from './MatchFootballAVenir'
const firebase = require("firebase");
require("firebase/firestore");


export default class MatchsPoules extends React.Component {
    

    constructor(props){
        super(props)
        this.state=({
            donnees:[],stats:[],loading:true,
            matchsTermines:[],matchsAVenir:[],stats2:[]
        })

    }

    componentDidMount(){
        this._loadMatchs()
        this.loadClassement()
    }

    componentWillReceiveProps(props) {
        
        const {poule,refresh} = this.props;
        if (props.poule !== poule) {
          this._loadMatchs()
          this.loadClassement()
        }
        if(props.refresh!==refresh){
            console.log('refresh')
            this._loadMatchs()
            this.loadClassement()
        }
      }

    _loadMatchs(){
        this.setState({donnees:[]},()=>{
            const sport='Football'
            const poule=this.props.poule
            var that=this
            
            var db = firebase.firestore();
            db.settings({
            timestampsInSnapshots: true
            });
        
            var docRef = db.collection("Sports").doc(sport).collection("Matchs").where("Phase","==",poule)
            docRef.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    var match=doc.data()
                    that.setState({donnees:that.state.donnees.concat(match)})
                    
                    
                });
            })
            .then(()=>this.sortMatchs())
            .catch(function(error) {
                console.log("Error getting document:", error);
            })
            .then(()=>this.setState({loading:false}))
        }
        )
    
        
    }

    sortMatchs(){
        
        var listeMatchs=this.state.donnees
        longueur=listeMatchs.length
        
        var matchsAVenir=[]
        var matchsTermines=[]
        
        for (i=0;i<longueur;i++){
            
            var match=listeMatchs[i]
            var horaire=match.horaire
            var liste=horaire.split(':')
            var n=parseInt(liste[0])*100+parseInt(liste[1])
            match.horaireNum=n
             
            
            if (match.matchTermine===true){
                matchsTermines.push(match)
            }
            else{
                matchsAVenir.push(match)
            }
        }
        
        matchsAVenir.sort(function(match1,match2){
            return(match1.horaireNum-match2.horaireNum) 
        }
        )
        matchsTermines.sort(function(match1,match2){
            return(match1.horaireNum-match2.horaireNum) 
        }
        )
        
        
        this.setState({matchsTermines:matchsTermines,matchsAVenir:matchsAVenir})
    }

    loadClassement(){
        this.setState({stats:[]},()=>{
            const poule=this.props.poule
            const sport='Football'
            var that=this
            var db = firebase.firestore();
                db.settings({
                timestampsInSnapshots: true
                });
            
            var docRef = db.collection("Statistiques").doc(sport).collection("Ecoles").where("poule","==",poule)
            docRef.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    var stat=doc.data()
                    that.setState({stats:that.state.stats.concat(stat)})
                    
                    
                });
            })
            .then(()=>this.sortClassement())
            .then(()=>{this.setState({loading:false})})
            .catch(error=>console.log(error))

        })
        
        
    }
    sortClassement(){
        
        var statsliste=this.state.stats
        statsliste.sort(function(ecole1,ecole2){
            return(ecole1.classement-ecole2.classement)
        })
        this.setState({stats2:statsliste})
    }

    


    render() {
        
        return (
            <View>
                <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                     <Text style={{fontWeight:'bold',fontSize:14}}>Classement</Text>
                </View>

                {
                    !this.state.loading?(
                    <View style={{borderColor:'#EBEBEB',borderWidth:1,marginHorizontal:10,marginVertical:10,height:210}}>

                        <View style={{flexDirection:'row',height:30,borderColor:'#EBEBEB',borderBottomWidth:1}}>
                            <View style={{flex:7.5}}></View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.texteTitre}>V</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.texteTitre}>N</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.texteTitre}>D</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.texteTitre}>BP</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.texteTitre}>BC</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.texteTitre}>Pts</Text>
                            </View>
                         </View>
                        <FlatList
                        scrollEnabled={false}
                        data={this.state.stats2}
                        keyExtractor={(item)=>item.equipe.toString()}
                        renderItem={({item})=>

                        <View style={{flexDirection:'row',height:45,borderColor:'#EBEBEB',borderBottomWidth:1}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:14,color:'#C8102E'}}>{item.classement}</Text>
                            </View>
                            <View style={{flex:1.5}}>
                                <Image style={{flex:1,height:null,width:null,margin:10,resizeMode:'contain'}} source={require('../../../../../Images/logo_TOSS.png')}/>
                            </View>
                            <View style={{flex:5,justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold'}}>{item.equipe}</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.texteClassement}>{item.victoires}</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.texteClassement}>{item.nuls}</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.texteClassement}>{item.defaites}</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.texteClassement}>{item.butPour}</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.texteClassement}>{item.butContre}</Text>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.texteClassement}>{item.points}</Text>
                            </View>
                        </View>
                        }/>
                    </View >
                    ):
                    <View style={{borderColor:'#EBEBEB',borderWidth:1,height:180,marginHorizontal:30,marginVertical:10,justifyContent:'center',alignItems:'center'}}>
                        <ActivityIndicator/>
                    </View>
                }

                <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                    <Text style={{fontWeight:'bold',fontSize:14}}>Matchs</Text>
                </View>
                <FlatList
                data={this.state.matchsTermines}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item}) => 
                <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                }
                />
                <FlatList
                data={this.state.matchsAVenir}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item}) => 
                <MatchFootballAVenir equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                }
                />
            </View>

        )
    }
}

const styles=StyleSheet.create({
    texteClassement:{
        fontWeight:'bold'
    }

})