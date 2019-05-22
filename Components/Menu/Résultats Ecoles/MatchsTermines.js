import React from 'react'
import {View, Text,TouchableOpacity,ScrollView,RefreshControl,StyleSheet,TextInput,FlatList,Image,StatusBar,Clipboard} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Card,CardItem,Tab,Tabs,Accordion} from 'native-base'
import MatchFootball from '../Résultats Sports/Football/Masculin/MatchFootball'
import ResultatsSports from './ResultatsSports';



const firebase = require("firebase");
require("firebase/firestore");


export default class MatchsTermines extends React.Component{
    constructor(props){
        super(props)
        this.state={matchsBasketballM:[],matchsBasketballF:[], resultatsCheerleading:[], matchsUltimate:[],matchsFootballM:[],matchsFootballF:[],matchsRugbyF:[],matchsRugbyM:[],matchsVolleyM:[],matchsVolleyF:[],matchsHandballM:[],matchsHandballF:[],matchsTennis:[],matchsTennisDeTable:[],matchsWaterpolo:[]}
    }

    componentDidMount(){
        
        this.loadMatchs()
    }

    loadMatchs(){
        
        var that=this
        var idEcole=Number(this.props.idEcole)
       
        var db = firebase.firestore();
            db.settings({
            timestampsInSnapshots: true
            });
        
        // ------------- Football M -----------------

        var docRef1 = db.collection("Sports").doc('FootballM').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                
                that.setState({matchsFootballM:that.state.matchsFootballM.concat(match)})
            });
        })
        var docRef2 = db.collection("Sports").doc('FootballM').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
        docRef2.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({matchsFootballM:that.state.matchsFootballM.concat(match)})
            });
        })

        // ------------- Football F -----------------

        var docRef1 = db.collection("Sports").doc('FootballF').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                
                that.setState({matchsFootballF:that.state.matchsFootballF.concat(match)})
            });
        })
        var docRef2 = db.collection("Sports").doc('FootballF').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
        docRef2.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({matchsFootballF:that.state.matchsFootballF.concat(match)})
            });
        })

        // ------------- Rugby M -----------------

        var docRef1 = db.collection("Sports").doc('RugbyM').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                
                that.setState({matchsRugbyM:that.state.matchsRugbyM.concat(match)})
            });
        })
        var docRef2 = db.collection("Sports").doc('RugbyM').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
        docRef2.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({matchsRugbyM:that.state.matchsRugbyM.concat(match)})
            });
        })

        // ------------- Rugby F -----------------

        var docRef1 = db.collection("Sports").doc('RugbyF').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                
                that.setState({matchsRugbyF:that.state.matchsRugbyF.concat(match)})
            });
        })
        var docRef2 = db.collection("Sports").doc('RugbyF').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
        docRef2.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({matchsRugbyF:that.state.matchsRugbyF.concat(match)})
            });
        })

        // ------------- Volley M -----------------

        var docRef1 = db.collection("Sports").doc('VolleyM').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                
                that.setState({matchsVolleyM:that.state.matchsVolleyM.concat(match)})
            });
        })
        var docRef2 = db.collection("Sports").doc('VolleyM').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
        docRef2.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({matchsVolleyM:that.state.matchsVolleyM.concat(match)})
            });
        })
        // ------------- Volley F -----------------

        var docRef1 = db.collection("Sports").doc('VolleyF').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                
                that.setState({matchsVolleyF:that.state.matchsVolleyF.concat(match)})
            });
        })
        var docRef2 = db.collection("Sports").doc('VolleyF').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
        docRef2.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({matchsVolleyF:that.state.matchsVolleyF.concat(match)})
            });
        })

        // ------------- Handball M -----------------

        var docRef1 = db.collection("Sports").doc('HandballM').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                
                that.setState({matchsHandballM:that.state.matchsHandballM.concat(match)})
            });
        })
        var docRef2 = db.collection("Sports").doc('HandballM').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
        docRef2.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({matchsHandballM:that.state.matchsHandballM.concat(match)})
            });
        })

        // ------------- Handball F -----------------

        var docRef1 = db.collection("Sports").doc('HandballF').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                
                that.setState({matchsHandballF:that.state.matchsHandballF.concat(match)})
            });
        })
        var docRef2 = db.collection("Sports").doc('HandballF').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
        docRef2.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({matchsHandballF:that.state.matchsHandballF.concat(match)})
            });
        })

         // ------------- BAsket M -----------------

         var docRef1 = db.collection("Sports").doc('BasketballM').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
         docRef1.get().then(function(querySnapshot) {
             querySnapshot.forEach(function(doc) {
                 
                 var match=doc.data()
                 
                 that.setState({matchsBasketballM:that.state.matchsBasketballM.concat(match)})
             });
         })
         var docRef2 = db.collection("Sports").doc('BasketballM').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
         docRef2.get().then(function(querySnapshot) {
             querySnapshot.forEach(function(doc) {
                 var match=doc.data()
                 that.setState({matchsBasketballM:that.state.matchsBasketballM.concat(match)})
             });
         })
 
         // ------------- Basketball F -----------------
 
         var docRef1 = db.collection("Sports").doc('BasketballF').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
         docRef1.get().then(function(querySnapshot) {
             querySnapshot.forEach(function(doc) {
                 
                 var match=doc.data()
                 
                 that.setState({matchsBasketballF:that.state.matchsBasketballF.concat(match)})
             });
         })
         var docRef2 = db.collection("Sports").doc('BasketballF').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
         docRef2.get().then(function(querySnapshot) {
             querySnapshot.forEach(function(doc) {
                 var match=doc.data()
                 that.setState({matchsBasketballF:that.state.matchsBasketballF.concat(match)})
             });
         })
 
 

        // ------------- Tennis -----------------

        var docRef1 = db.collection("Sports").doc('Tennis').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                
                that.setState({matchsTennis:that.state.matchsTennis.concat(match)})
            });
        })
        var docRef2 = db.collection("Sports").doc('Tennis').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
        docRef2.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                that.setState({matchsTennis:that.state.matchsTennis.concat(match)})
            });
        })

        // ------------- Tennis de table -----------------

        var docRef1 = db.collection("Sports").doc('TennisDeTable').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                that.setState({matchsTennisDeTable:that.state.matchsTennisDeTable.concat(match)})
                
                
            });
        })
        var docRef2 = db.collection("Sports").doc('TennisDeTable').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
        docRef2.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                
                that.setState({matchsTennisDeTable:that.state.matchsTennisDeTable.concat(match)})
                
            });
        })

        // ------------- Waterpolo -----------------

        var docRef1 = db.collection("Sports").doc('Waterpolo').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                
                that.setState({matchsWaterpolo:that.state.matchsWaterpolo.concat(match)})
                
                
            });
        })
        var docRef2 = db.collection("Sports").doc('Waterpolo').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
        docRef2.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                
                that.setState({matchsWaterpolo:that.state.matchsWaterpolo.concat(match)})
                
            });
        })

        // ------------- Ultimate -----------------

        var docRef1 = db.collection("Sports").doc('Ultimate').collection("Matchs").where("idEquipe1","==",idEcole).where('matchTermine','==',true)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                
                that.setState({matchsUltimate:that.state.matchsUltimate.concat(match)})
                
                
            });
        })
        var docRef2 = db.collection("Sports").doc('Ultimate').collection("Matchs").where("idEquipe2",'==',idEcole).where('matchTermine','==',true)
        docRef2.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var match=doc.data()
                
                that.setState({matchsUltimate:that.state.matchsUltimate.concat(match)})
                
            });
        })

        // ------------- Cheerleading -----------------

        var docRef1 = db.collection("Statistiques").doc('Cheerleading').collection("Ecoles").where("id","==",idEcole)
        docRef1.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                
                var match=doc.data()
                
                that.setState({resultatsCheerleading:that.state.resultatsCheerleading.concat(match)})
                
                
            });
        })
       
    }
    imageEcole(idEcole){
        switch (idEcole){
            case 1:
                return(require('../../../Images/LogoEcoles/LogoEcole_1.png'))
                break;
            case 2:
            return(require('../../../Images/LogoEcoles/LogoEcole_2.png'))
            break;
            case 3:
            return(require('../../../Images/LogoEcoles/LogoEcole_3.png'))
            break;
            case 4:
            return(require('../../../Images/LogoEcoles/LogoEcole_4.png'))
            break;
            case 5:
            return(require('../../../Images/LogoEcoles/LogoEcole_5.png'))
            break;
            case 6:
            return(require('../../../Images/LogoEcoles/LogoEcole_6.png'))
            break;
            case 7:
            return(require('../../../Images/LogoEcoles/LogoEcole_7.png'))
            break;
            case 8:
            return(require('../../../Images/LogoEcoles/LogoEcole_8.png'))
            break;
            case 9:
            return(require('../../../Images/LogoEcoles/LogoEcole_9.png'))
            break;
            case 10:
            return(require('../../../Images/LogoEcoles/LogoEcole_10.png'))
            break;
            case 11:
            return(require('../../../Images/LogoEcoles/LogoEcole_11.png'))
            break;
            case 12:
            return(require('../../../Images/LogoEcoles/LogoEcole_12.png'))
            break;
            case 13:
            return(require('../../../Images/LogoEcoles/LogoEcole_13.png'))
            break;
            case 14:
            return(require('../../../Images/LogoEcoles/LogoEcole_14.png'))
            break;
            case 15:
            return(require('../../../Images/LogoEcoles/LogoEcole_15.png'))
            break;
            case 16:
            return(require('../../../Images/LogoEcoles/LogoEcole_16.png'))
            break;
            case 17:
            return(require('../../../Images/LogoEcoles/LogoEcole_17.png'))
            break;
            case 18:
            return(require('../../../Images/LogoEcoles/LogoEcole_18.png'))
            break;
            case 19:
            return(require('../../../Images/LogoEcoles/LogoEcole_19.png'))
            break;
            case 20:
            return(require('../../../Images/LogoEcoles/LogoEcole_20.png'))
            break;
            case 21:
            return(require('../../../Images/LogoEcoles/LogoEcole_21.png'))
            break;
            case 22:
            return(require('../../../Images/LogoEcoles/LogoEcole_22.png'))
            break;
            case 23:
            return(require('../../../Images/LogoEcoles/LogoEcole_23.png'))
            break;
            case 24:
            return(require('../../../Images/LogoEcoles/LogoEcole_24.png'))
            break;
            case 25:
            return(require('../../../Images/LogoEcoles/LogoEcole_25.png'))
            break;
            case 26:
            return(require('../../../Images/LogoEcoles/LogoEcole_26.png'))
            break;
            case 27:
            return(require('../../../Images/LogoEcoles/LogoEcole_27.png'))
            break;
            case 28:
            return(require('../../../Images/LogoEcoles/LogoEcole_28.png'))
            break;
            case 29:
            return(require('../../../Images/LogoEcoles/LogoEcole_29.png'))
            break;
            case 30:
            return(require('../../../Images/LogoEcoles/LogoEcole_30.png'))
            break;
            case 31:
            return(require('../../../Images/LogoEcoles/LogoEcole_31.png'))
            break;
            case 32:
            return(require('../../../Images/LogoEcoles/LogoEcole_32.png'))
            break;
            case 33:
            return(require('../../../Images/LogoEcoles/LogoEcole_33.png'))
            break;
            case 34:
            return(require('../../../Images/LogoEcoles/LogoEcole_34.png'))
            break;
            case 35:
            return(require('../../../Images/LogoEcoles/LogoEcole_35.png'))
            break;
            case 36:
            return(require('../../../Images/LogoEcoles/LogoEcole_36.png'))
            break;
            case 37:
            return(require('../../../Images/LogoEcoles/LogoEcole_37.png'))
            break;
            case 38:
            return(require('../../../Images/LogoEcoles/LogoEcole_38.png'))
            break;
            case 39:
            return(require('../../../Images/LogoEcoles/LogoEcole_39.png'))
            break;
            case 40:
            return(require('../../../Images/LogoEcoles/LogoEcole_40.png'))
            break;
            case 41:
            return(require('../../../Images/LogoEcoles/LogoEcole_41.png'))
            break;
            case 42:
            return(require('../../../Images/LogoEcoles/LogoEcole_42.png'))
            break;
            case 43:
            return(require('../../../Images/LogoEcoles/LogoEcole_43.png'))
            break;
            case 44:
            return(require('../../../Images/LogoEcoles/LogoEcole_44.png'))
            break;
            case 45:
            return(require('../../../Images/LogoEcoles/LogoEcole_45.png'))
            break;
            case 46:
            return(require('../../../Images/LogoEcoles/LogoEcole_46.png'))
            break;
            case 47:
            return(require('../../../Images/LogoEcoles/LogoEcole_47.png'))
            break;
            case 48:
            return(require('../../../Images/LogoEcoles/LogoEcole_48.png'))
            break;
            case 49:
            return(require('../../../Images/LogoEcoles/LogoEcole_49.png'))
            break;
            case 50:
            return(require('../../../Images/LogoEcoles/LogoEcole_50.png'))
            break;
            case 51:
            return(require('../../../Images/LogoEcoles/LogoEcole_51.png'))
            break;
            case 52:
            return(require('../../../Images/LogoEcoles/LogoEcole_52.png'))
            break;
            case 53:
            return(require('../../../Images/LogoEcoles/LogoEcole_53.png'))
            break;
            case 54:
            return(require('../../../Images/LogoEcoles/LogoEcole_54.png'))
            break;
            case 55:
            return(require('../../../Images/LogoEcoles/LogoEcole_55.png'))
            break;
            case 56:
            return(require('../../../Images/LogoEcoles/LogoEcole_56.png'))
            break;
            case 57:
            return(require('../../../Images/LogoEcoles/LogoEcole_57.png'))
            break;
            case 58:
            return(require('../../../Images/LogoEcoles/LogoEcole_58.png'))
            break;
            case 59:
            return(require('../../../Images/LogoEcoles/LogoEcole_59.png'))
            break;
            case 60:
            return(require('../../../Images/LogoEcoles/LogoEcole_60.png'))
            break;
            case 61:
            return(require('../../../Images/LogoEcoles/LogoEcole_61.png'))
            break;
            case 62:
            return(require('../../../Images/LogoEcoles/LogoEcole_62.png'))
            break;
            case 63:
            return(require('../../../Images/LogoEcoles/LogoEcole_63.png'))
            break;
            case 64:
            return(require('../../../Images/LogoEcoles/LogoEcole_64.png'))
            break;
            case 65:
            return(require('../../../Images/LogoEcoles/LogoEcole_65.png'))
            break;
            case 66:
            return(require('../../../Images/LogoEcoles/LogoEcole_66.png'))
            break;
            case 67:
            return(require('../../../Images/LogoEcoles/LogoEcole_67.png'))
            break;
            case 68:
            return(require('../../../Images/LogoEcoles/LogoEcole_68.png'))
            break;
            case 69:
            return(require('../../../Images/LogoEcoles/LogoEcole_69.png'))
            break;
            case 70:
            return(require('../../../Images/LogoEcoles/LogoEcole_70.png'))
            break;
            case 71:
            return(require('../../../Images/LogoEcoles/LogoEcole_71.png'))
            break;
            case 72:
            return(require('../../../Images/LogoEcoles/LogoEcole_72.png'))
            break;
            case 73:
            return(require('../../../Images/LogoEcoles/LogoEcole_73.png'))
            break;
            case 74:
            return(require('../../../Images/LogoEcoles/LogoEcole_74.png'))
            break;
            case 75:
            return(require('../../../Images/LogoEcoles/LogoEcole_75.png'))
            break;
            case 76:
            return(require('../../../Images/LogoEcoles/LogoEcole_76.png'))
            break;
            case 77:
            return(require('../../../Images/LogoEcoles/LogoEcole_77.png'))
            break;
            case 78:
            return(require('../../../Images/LogoEcoles/LogoEcole_78.png'))
            break;
            case 79:
            return(require('../../../Images/LogoEcoles/LogoEcole_79.png'))
            break;
            case 80:
            return(require('../../../Images/LogoEcoles/LogoEcole_80.png'))
            break;
            case 81:
            return(require('../../../Images/LogoEcoles/LogoEcole_81.png'))
            break;
            case 82:
            return(require('../../../Images/LogoEcoles/LogoEcole_82.png'))
            break;
            case 83:
            return(require('../../../Images/LogoEcoles/LogoEcole_83.png'))
            break;
            case 84:
            return(require('../../../Images/LogoEcoles/LogoEcole_84.png'))
            break;
            case 85:
            return(require('../../../Images/LogoEcoles/LogoEcole_85.png'))
            break;
            case 86:
            return(require('../../../Images/LogoEcoles/LogoEcole_86.png'))
            break;
            case 87:
            return(require('../../../Images/LogoEcoles/LogoEcole_87.png'))
            break;
            case 88:
            return(require('../../../Images/LogoEcoles/LogoEcole_88.png'))
            break;
            case 89:
            return(require('../../../Images/LogoEcoles/LogoEcole_89.png'))
            break;
            case 90:
            return(require('../../../Images/LogoEcoles/LogoEcole_90.png'))
            break;
            case 91:
            return(require('../../../Images/LogoEcoles/LogoEcole_91.png'))
            break;
            case 92:
            return(require('../../../Images/LogoEcoles/LogoEcole_92.png'))
            break;
            case 93:
            return(require('../../../Images/LogoEcoles/LogoEcole_93.png'))
            break;
            case 94:
            return(require('../../../Images/LogoEcoles/LogoEcole_94.png'))
            break;
            case 95:
            return(require('../../../Images/LogoEcoles/LogoEcole_95.png'))
            break;
            case 96:
            return(require('../../../Images/LogoEcoles/LogoEcole_96.png'))
            break;
            case 97:
            return(require('../../../Images/LogoEcoles/LogoEcole_97.png'))
            break;
            case 98:
            return(require('../../../Images/LogoEcoles/LogoEcole_98.png'))
            break;
            case 99:
            return(require('../../../Images/LogoEcoles/LogoEcole_99.png'))
            break;
            case 100:
            return(require('../../../Images/LogoEcoles/LogoEcole_100.png'))
            break;
            case 101:
            return(require('../../../Images/LogoEcoles/LogoEcole_101.png'))
            break;
            case 102:
            return(require('../../../Images/LogoEcoles/LogoEcole_102.png'))
            break;
            case 103:
            return(require('../../../Images/LogoEcoles/LogoEcole_103.png'))
            break;
            case 104:
            return(require('../../../Images/LogoEcoles/LogoEcole_104.png'))
            break;
            case 105:
            return(require('../../../Images/LogoEcoles/LogoEcole_105.png'))
            break;
            case 106:
            return(require('../../../Images/LogoEcoles/LogoEcole_106.png'))
            break;
            default:
            return(require('../../../Images/logo_TOSS.png'))
            

        }
    }

    afficherResultatsCheer(){
        var resultat=this.state.resultatsCheerleading
        
        if (resultat.length>0){
            if (resultat[0].classement>=1){
                return(
                    <Accordion
                    dataArray={[{"title":'Cheerleading',"content":'Cheerleading'}]}
                    renderHeader={({content},expanded)=>this._renderHeader(content,expanded)}
                    renderContent={()=>{
                            return(
                                
                                <View  style={{height :55, flexDirection: 'row',borderColor:'#EEEFF0',borderBottomWidth:1}}>
                                    <View style={{flex:6,flexDirection:'row'}}>
                                        <View style={{ flex: 1, alignItems: 'center',flexDirection:'row'}}>
                                            <Text style={{fontWeight:'bold', marginLeft:15, fontSize:17}}>{resultat[0].classement}</Text>
                                            <Image source={this.imageEcole(resultat[0].id)} style={{height:30,width:30,marginLeft:20,resizeMode:'contain'}}/>
                                        </View>
                                        <View style={{flexDirection:'row',alignItems:'center',flex:3.5,paddingRight:5,paddingLeft:5,justifyContent:'space-between'}}>
                                        
                                            <Text style={{fontWeight:'bold',marginLeft:5}} >{resultat[0].equipe}</Text>
                                            {
                                                resultat[0].classement===1?<Image style={{height:30,width:30,marginRight:10}} source={require('../../../Images/Medailles/gold-medal.png')}/>
                                                : null
                                            }
                                            {
                                                resultat[0].classement===2?<Image style={{height:30,width:30,marginRight:10}} source={require('../../../Images/Medailles/silver-medal.png')}/>
                                                : null
                                            }
                                            {
                                                resultat[0].classement===3?<Image style={{height:30,width:30,marginRight:10}} source={require('../../../Images/Medailles/bronze-medal.png')}/>
                                                : null
                                            }
                                            
                                            
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                        
                        
                    }
                    />
                )}
        }
        
        }
        
       
        
    

    

    afficherResultats(sportChoisi,descriptionSport){
        var sport=sportChoisi
        var listeMatchs=[]
        switch (sport){
            case 'FootballM':
                var listeMatchs=this.state.matchsFootballM
                break;
            case 'FootballF':
                var listeMatchs=this.state.matchsFootballF
                break;
            case 'RugbyF':
                var listeMatchs=this.state.matchsRugbyF
                break;
            case 'RugbyM':
                var listeMatchs=this.state.matchsRugbyM
                break;
            case 'VolleyM':
                var listeMatchs=this.state.matchsVolleyM
                break;
            case 'VolleyF':
                var listeMatchs=this.state.matchsVolleyF
                break;
            case 'HandballM':
                var listeMatchs=this.state.matchsHandballM
                break;
            case 'HandballF':
                var listeMatchs=this.state.matchsHandballF
                break;
            case 'Tennis':
                var listeMatchs=this.state.matchsTennis
                break;
            case 'TennisDeTable':
                var listeMatchs=this.state.matchsTennisDeTable
                break;
            case 'Waterpolo':
                var listeMatchs=this.state.matchsWaterpolo
                break;
            case 'Ultimate':
                var listeMatchs=this.state.matchsUltimate
                break;
            case 'BasketballM':
                var listeMatchs=this.state.matchsBasketballM
                break;
            case 'BasketballF':
                var listeMatchs=this.state.matchsBasketballF
                break;


        }
        var matchPoules=listeMatchs.filter(function(el){
            return(el.Phase.substring(0,5).toUpperCase()==='POULE')
        })
        var matchSeiziemes=listeMatchs.filter(function(el){
            return(el.Phase.toUpperCase()==='SEIZIEMES')
        })
        var matchHuitiemes=listeMatchs.filter(function(el){
            return(el.Phase.toUpperCase()==='HUITIEMES')
        })
        var matchQuarts=listeMatchs.filter(function(el){
            return(el.Phase.toUpperCase()==='QUARTS')
        })
        var matchDemies=listeMatchs.filter(function(el){
            return(el.Phase.toUpperCase()==='DEMIES')
        })
        var matchFinales=listeMatchs.filter(function(el){
            return(el.Phase.toUpperCase()==='FINALES')
        })

        
        return(
            <View>

            {
                matchPoules.length>0?

                <Accordion
                dataArray={[{"title":sport,"content":descriptionSport}]}
                renderHeader={({content},expanded)=>this._renderHeader(content,expanded)}

                renderContent={()=>{
                    return(
                        <View>
                {matchPoules.length>0?
                <View>
                <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB',marginTop:2}}>
                <Text style={{fontWeight:'bold',fontSize:14}}>Poules</Text>
                </View>
                    <FlatList
                    listKey={1}
                    scrollEnabled={false}
                    data={matchPoules}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item}) =>{ return(
                        <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} idEcole1={item.idEquipe1} idEcole2={item.idEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                    )}}
                    />
                </View>
                :null}
                {matchSeiziemes.length>0?
                <View>
                <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                <Text style={{fontWeight:'bold',fontSize:14}}>Seizièmes</Text>
                </View>
                    <FlatList
                    listKey={2}
                    scrollEnabled={false}
                    data={matchSeiziemes}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item}) =>{ return(
                        <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} idEcole1={item.idEquipe1} idEcole2={item.idEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                    )}}
                    />
                </View>
                :null}
                {matchHuitiemes.length>0?
                <View>
                <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                <Text style={{fontWeight:'bold',fontSize:14}}>Huitièmes</Text>
                </View>
                    <FlatList
                    listKey={3}
                    scrollEnabled={false}
                    data={matchHuitiemes}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item}) =>{ return(
                        <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} idEcole1={item.idEquipe1} idEcole2={item.idEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                    )}}
                    />
                </View>
                :null}
                {matchQuarts.length>0?
                <View>
                <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                <Text style={{fontWeight:'bold',fontSize:14}}>Quarts</Text>
                </View>
                    <FlatList
                    listKey={4}
                    scrollEnabled={false}
                    data={matchQuarts}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item}) =>{ return(
                        <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} idEcole1={item.idEquipe1} idEcole2={item.idEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                    )}}
                    />
                </View>
                :null}
                {matchDemies.length>0?
                <View>
                <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                <Text style={{fontWeight:'bold',fontSize:14}}>Demies</Text>
                </View>
                    <FlatList
                    listKey={5}
                    scrollEnabled={false}
                    data={matchDemies}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item}) =>{ return(
                        <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} idEcole1={item.idEquipe1} idEcole2={item.idEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                    )}}
                    />
                </View>
                :null}
                {matchFinales.length>0?
                <View>
                <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                <Text style={{fontWeight:'bold',fontSize:14}}>Finales</Text>
                </View>
                    <FlatList
                    listKey={6}
                    scrollEnabled={false}
                    data={matchFinales}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item}) =>{ return(
                        <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} idEcole1={item.idEquipe1} idEcole2={item.idEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                    )}}
                    />
                </View>
                :null}
            </View>
                    )
                }}
                />

                :null
            }
            
            
            </View>
           
            //<ResultatsSports matchPoules={matchPoules} matchSeiziemes={matchSeiziemes} matchHuitiemes={matchHuitiemes} matchQuarts={matchQuarts} matchDemies={matchDemies} matchFinales={matchFinales}   />
        )

    }

    _renderHeader(title,expanded){
        return(
        <View style={{ marginTop:5,flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor:'#cddff8'}}>
      <View>
        <Title style={{color:'black'}}> {title} </Title>
      </View>
      <View>
      {expanded
      ? <Icon style={{ fontSize: 18 }} name="arrow-up" />
      : <Icon style={{ fontSize: 18 }} name="arrow-down" />}
      </View>
    </View>
        )
    }

    

    render(){
        
        return(

            <View style={{flex:1}}>
            <ScrollView>
                
                {this.afficherResultats('FootballM','Football M by EDF')}
                {this.afficherResultats('FootballF','Football F by EDF')}
                {this.afficherResultats('RugbyM','Rugby M')}
                {this.afficherResultats('RugbyF','Rugby F')}
                {this.afficherResultats('VolleyM','Volley M')}
                {this.afficherResultats('VolleyF','Volley F')}
                {this.afficherResultats('HandballM','Handball M')}
                {this.afficherResultats('HandballF','Handball F')}
                {this.afficherResultats('BasketballM','Basketball M')}
                {this.afficherResultats('BasketballF','Basketball F')}
                {this.afficherResultats('Tennis','Tennis')}
                {this.afficherResultats('TennisDeTable','Tennis de table')}
                {this.afficherResultats('Waterpolo','Water-polo')}
                {this.afficherResultats('Ultimate','Ultimate')}
                {this.afficherResultatsCheer()}
                {/* <TouchableOpacity onPress={()=>{alert('Numéro copié')
                    Clipboard.setString('07 70 10 16 84')}}>
                    <Text>COUCOU</Text>
                </TouchableOpacity> */}
                

                

                {/* <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                    <Text style={{fontWeight:'bold',fontSize:14}}>Poules</Text>
                </View>
                <FlatList
                scrollEnabled={false}
                data={this.state.matchsFootball}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item}) =>{
                    if (item.Phase.substring(0,5).toUpperCase()==='POULE'){
                        return(
                            <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} idEcole1={item.idEquipe1} idEcole2={item.idEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                        )
                    }
                } 
                
                }
                />
                <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                    <Text style={{fontWeight:'bold',fontSize:14}}>Poules</Text>
                </View>
                <FlatList
                scrollEnabled={false}
                data={this.state.matchsFootball}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item}) =>{
                    if (item.Phase.substring(0,5).toUpperCase()==='POULE'){
                        return(
                            <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} idEcole1={item.idEquipe1} idEcole2={item.idEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                        )
                    }
                } 
                
                }
                />
                <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                    <Text style={{fontWeight:'bold',fontSize:14}}>Seizièmes</Text>
                </View>
                <FlatList
                scrollEnabled={false}
                data={this.state.matchsFootball}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item}) =>{
                    if (item.Phase.toUpperCase()==='SEIZIEMES'){
                        return(
                            <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} idEcole1={item.idEquipe1} idEcole2={item.idEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                        )
                    }
                } 
                
                }
                />
                <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                    <Text style={{fontWeight:'bold',fontSize:14}}>Poules</Text>
                </View>
                <FlatList
                scrollEnabled={false}
                data={this.state.matchsFootball}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item}) =>{
                    if (item.Phase.toUpperCase()==='HUITIEMES'){
                        return(
                            <View>
                            <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                                 <Text style={{fontWeight:'bold',fontSize:14}}>Huitiemes</Text>
                            </View>
                            <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} idEcole1={item.idEquipe1} idEcole2={item.idEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                        </View>)
                    }
                } 
                
                }
                />
                <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                    <Text style={{fontWeight:'bold',fontSize:14}}>Poules</Text>
                </View>
                <FlatList
                scrollEnabled={false}
                data={this.state.matchsFootball}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item}) =>{
                    if (item.Phase.toUpperCase()==='QUARTS'){
                        return(
                            <View>
                            <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                                 <Text style={{fontWeight:'bold',fontSize:14}}>Quarts</Text>
                            </View>
                            <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} idEcole1={item.idEquipe1} idEcole2={item.idEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                        </View>)
                    }
                } 
                
                }
                />

                
                <FlatList
                scrollEnabled={false}
                data={this.state.matchsFootball}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item}) =>{
                    if (item.Phase.toUpperCase()==='DEMIES'){
                        return(
                        <View>
                            <View style={{height:30,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBEB'}}>
                                 <Text style={{fontWeight:'bold',fontSize:14}}>Poules</Text>
                            </View>
                            <MatchFootball equipe1={item.Equipe1} equipe2={item.Equipe2} scoreEquipe1={item.scoreEquipe1} scoreEquipe2={item.scoreEquipe2} idEcole1={item.idEquipe1} idEcole2={item.idEquipe2} matchTermine={item.matchTermine} horaire={item.horaire} lieu={item.Lieu}/>
                        </View>
                        )
                    }
                } 
                
                }
                /> */}




                </ScrollView>
            </View>
        )
    }
}