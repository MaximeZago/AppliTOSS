import React from 'react';
import {StyleSheet, Text, View, Image, FlatList, ActivityIndicator} from 'react-native'

import MatchBasketballAVenir from './MatchBadAVenir'
import MatchBasketball from './MatchBad';

const firebase = require("firebase");
require("firebase/firestore");

export default class MatchsPoules extends React.Component {

    constructor (props) {
        super(props)
        this.state = ({
            donnees: [],
            stats: [],
            loading: true,
            matchsTermines: [],
            matchsAVenir: [],
            stats2: []
        })
    }

    componentDidMount () {
        this._loadMatchs()
        this.loadClassement()
    }

    componentWillReceiveProps (props) {
        const {poule,refresh} = this.props;

        if (props.poule !== poule) {
          this._loadMatchs()
          this.loadClassement()
        }

        if(props.refresh !== refresh) {
            console.log('refresh')
            this._loadMatchs()
            this.loadClassement()
        }
    }

    _loadMatchs () {
        this.setState({donnees: []}, ()=>{
            const sport = 'BadSH'
            const poule = this.props.poule
            var that = this
            
            var db = firebase.firestore();
            db.settings({
                timestampsInSnapshots: true
                });
            var docRef = db.collection("Sports").doc(sport).collection("Matchs").where("Phase","==",poule)
            docRef.get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    var match = doc.data()
                    that.setState({donnees:that.state.donnees.concat(match)})
                });
            })
            .then(() => this.sortMatchs())
            .catch(function (error) {
                console.log("Error getting document:", error);
            })
            .then(() => this.setState({loading: false}))
        })
    }

    sortMatchs () {
        var listeMatchs = this.state.donnees
        longueur = listeMatchs.length
        
        var matchsAVenir = []
        var matchsTermines = []
        
        for (i = 0; i < longueur; i++) {
            var match = listeMatchs[i]
            var horaire = match.horaire
            var liste = horaire.split(':')
            var n = parseInt(liste[0]) * 100 + parseInt(liste[1])
            match.horaireNum = n
            
            if (match.matchTermine === true) {
                matchsTermines.push(match)
            } else {
                matchsAVenir.push(match)
            }
        }
        
        matchsAVenir.sort(function (match1, match2) {
            return(match1.horaireNum - match2.horaireNum) 
        })
        matchsTermines.sort(function (match1, match2) {
            return(match1.horaireNum - match2.horaireNum) 
        })
        
        this.setState({
            matchsTermines: matchsTermines,
            matchsAVenir: matchsAVenir
        })
    }

    loadClassement () {
        this.setState({stats: []}, () => {
            const poule = this.props.poule
            const sport = 'BadSH'
            var that = this
            var db = firebase.firestore();
            db.settings({
                timestampsInSnapshots: true
                });
            var docRef = db.collection("Statistiques").doc(sport).collection("Ecoles").where("poule","==",poule)
            docRef.get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    var stat = doc.data()
                    that.setState({stats: that.state.stats.concat(stat)})
                })
            })
            .then(() => this.sortClassement())
            .then(() => {this.setState({loading: false})})
            .catch(error => console.log(error))
        })
    }

    sortClassement () {
        var statsliste = this.state.stats
        statsliste.sort(function (ecole1, ecole2) {
            return (ecole1.classement - ecole2.classement)
        })
        this.setState({stats2: statsliste})
    }

    imageEcole(idEcole){
        switch (idEcole){
            case 1:
                return(require('../../../../../Images/LogoEcoles/LogoEcole_1.png'))
                break;
            case 2:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_2.png'))
            break;
            case 3:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_3.png'))
            break;
            case 4:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_4.png'))
            break;
            case 5:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_5.png'))
            break;
            case 6:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_6.png'))
            break;
            case 7:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_7.png'))
            break;
            case 8:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_8.png'))
            break;
            case 9:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_9.png'))
            break;
            case 10:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_10.png'))
            break;
            case 11:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_11.png'))
            break;
            case 12:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_12.png'))
            break;
            case 13:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_13.png'))
            break;
            case 14:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_14.png'))
            break;
            case 15:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_15.png'))
            break;
            case 16:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_16.png'))
            break;
            case 17:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_17.png'))
            break;
            case 18:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_18.png'))
            break;
            case 19:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_19.png'))
            break;
            case 20:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_20.png'))
            break;
            case 21:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_21.png'))
            break;
            case 22:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_22.png'))
            break;
            case 23:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_23.png'))
            break;
            case 24:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_24.png'))
            break;
            case 25:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_25.png'))
            break;
            case 26:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_26.png'))
            break;
            case 27:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_27.png'))
            break;
            case 28:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_28.png'))
            break;
            case 29:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_29.png'))
            break;
            case 30:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_30.png'))
            break;
            case 31:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_31.png'))
            break;
            case 32:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_32.png'))
            break;
            case 33:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_33.png'))
            break;
            case 34:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_34.png'))
            break;
            case 35:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_35.png'))
            break;
            case 36:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_36.png'))
            break;
            case 37:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_37.png'))
            break;
            case 38:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_38.png'))
            break;
            case 39:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_39.png'))
            break;
            case 40:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_40.png'))
            break;
            case 41:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_41.png'))
            break;
            case 42:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_42.png'))
            break;
            case 43:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_43.png'))
            break;
            case 44:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_44.png'))
            break;
            case 45:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_45.png'))
            break;
            case 46:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_46.png'))
            break;
            case 47:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_47.png'))
            break;
            case 48:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_48.png'))
            break;
            case 49:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_49.png'))
            break;
            case 50:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_50.png'))
            break;
            case 51:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_51.png'))
            break;
            case 52:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_52.png'))
            break;
            case 53:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_53.png'))
            break;
            case 54:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_54.png'))
            break;
            case 55:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_55.png'))
            break;
            case 56:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_56.png'))
            break;
            case 57:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_57.png'))
            break;
            case 58:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_58.png'))
            break;
            case 59:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_59.png'))
            break;
            case 60:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_60.png'))
            break;
            case 61:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_61.png'))
            break;
            case 62:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_62.png'))
            break;
            case 63:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_63.png'))
            break;
            case 64:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_64.png'))
            break;
            case 65:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_65.png'))
            break;
            case 66:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_66.png'))
            break;
            case 67:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_67.png'))
            break;
            case 68:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_68.png'))
            break;
            case 69:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_69.png'))
            break;
            case 70:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_70.png'))
            break;
            case 71:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_71.png'))
            break;
            case 72:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_72.png'))
            break;
            case 73:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_73.png'))
            break;
            case 74:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_74.png'))
            break;
            case 75:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_75.png'))
            break;
            case 76:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_76.png'))
            break;
            case 77:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_77.png'))
            break;
            case 78:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_78.png'))
            break;
            case 79:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_79.png'))
            break;
            case 80:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_80.png'))
            break;
            case 81:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_81.png'))
            break;
            case 82:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_82.png'))
            break;
            case 83:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_83.png'))
            break;
            case 84:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_84.png'))
            break;
            case 85:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_85.png'))
            break;
            case 86:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_86.png'))
            break;
            case 87:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_87.png'))
            break;
            case 88:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_88.png'))
            break;
            case 89:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_89.png'))
            break;
            case 90:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_90.png'))
            break;
            case 91:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_91.png'))
            break;
            case 92:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_92.png'))
            break;
            case 93:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_93.png'))
            break;
            case 94:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_94.png'))
            break;
            case 95:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_95.png'))
            break;
            case 96:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_96.png'))
            break;
            case 97:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_97.png'))
            break;
            case 98:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_98.png'))
            break;
            case 99:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_99.png'))
            break;
            case 100:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_100.png'))
            break;
            case 101:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_101.png'))
            break;
            case 102:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_102.png'))
            break;
            case 103:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_103.png'))
            break;
            case 104:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_104.png'))
            break;
            case 105:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_105.png'))
            break;
            case 106:
            return(require('../../../../../Images/LogoEcoles/LogoEcole_106.png'))
            break;
            default:
            return(require('../../../../../Images/logo_TOSS.png'))

        }
    }

    render () {
        return (

            <View>

                <View style = {{
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#EBEBEB'}}>
                     <Text style = {{
                        fontWeight: 'bold',
                        fontSize: 14}}>Classement</Text>
                </View>

                {!this.state.loading ? (

                    <View style = {{
                        borderColor: '#EBEBEB',
                        borderWidth: 1,
                        marginHorizontal: 10,
                        marginVertical: 10,
                        height: 210}}>

                        <View style = {{
                            flexDirection: 'row',
                            height: 30,
                            borderColor: '#EBEBEB',
                            borderBottomWidth: 1}}>
                            <View style = {{flex: 7.5}}></View>

                            <View style = {{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'}}>
                                <Text style = {styles.texteTitre}>V</Text>
                            </View>

                           

                            <View style = {{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'}}>
                                <Text style = {styles.texteTitre}>D</Text>
                            </View>

                            <View style = {{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'}}>
                                <Text style = {styles.texteTitre}>SP</Text>
                            </View>

                            <View style = {{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'}}>
                                <Text style = {styles.texteTitre}>SC</Text>
                            </View>

                            <View style = {{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'}}>
                                <Text style = {styles.texteTitre}>Pts</Text>
                            </View>
                         </View>
                        
                        <FlatList scrollEnabled = {false}
                            data = {this.state.stats2}
                            keyExtractor = {(item) => item.equipe.toString()}
                            renderItem = {({item}) =>

                            <View style = {{
                                flexDirection: 'row',
                                height: 45,
                                borderColor: '#EBEBEB',
                                borderBottomWidth: 1}}>

                                <View style = {{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                                    <Text style = {{
                                        fontWeight: 'bold',
                                        fontSize: 14,
                                        color: '#C8102E'}}>{item.classement}</Text>
                                </View>

                                <View style = {{flex: 1.5}}>
                                    <Image style = {{
                                        flex: 1,
                                        height: null,
                                        width: null,
                                        margin: 10,
                                        resizeMode: 'contain'}}
                                        source = {this.imageEcole(item.idEcole)}/>
                                </View>

                                <View style = {{
                                    flex: 5,
                                    justifyContent: 'center'}}>
                                    <Text style = {{fontWeight: 'bold'}}>{item.equipe}</Text>
                                </View>


                                <View style = {{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                                    <Text style = {styles.texteClassement}>{item.victoires}</Text>
                                </View>

                              

                                <View style = {{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                                    <Text style = {styles.texteClassement}>{item.defaites}</Text>
                                </View>

                                <View style = {{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                                    <Text style = {styles.texteClassement}>{item.SetPour}</Text>
                                </View>

                                <View style = {{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                                    <Text style = {styles.texteClassement}>{item.SetContre}</Text>
                                </View>

                                <View style = {{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                                    <Text style = {styles.texteClassement}>{item.points}</Text>
                                </View>

                            </View>

                        }/>

                    </View >

                ) : (

                    <View style = {{
                        borderColor: '#EBEBEB',
                        borderWidth: 1,
                        height: 180,
                        marginHorizontal: 30,
                        marginVertical: 10,
                        justifyContent: 'center',
                        alignItems: 'center'}}>
                        <ActivityIndicator/>
                    </View>

                )}

                <View style = {{
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#EBEBEB'}}>
                    <Text style = {{
                        fontWeight: 'bold',
                        fontSize: 14}}>Matchs</Text>
                </View>

                <FlatList data = {this.state.matchsTermines}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => 
                    <MatchBasketball equipe1 = {item.Equipe1}
                        equipe2 = {item.Equipe2}
                        scoreEquipe1 = {item.scoreEquipe1}
                        scoreEquipe2 = {item.scoreEquipe2}
                        idEcole1={item.idEquipe1}
                        idEcole2={item.idEquipe2}
                        matchTermine = {item.matchTermine}
                        horaire = {item.horaire}
                        lieu = {item.Lieu}/>}/>

                <FlatList data = {this.state.matchsAVenir}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => 
                    <MatchBasketballAVenir equipe1 = {item.Equipe1}
                        equipe2 = {item.Equipe2}
                        scoreEquipe1 = {item.scoreEquipe1}
                        scoreEquipe2 = {item.scoreEquipe2}
                        idEcole1={item.idEquipe1}
                        idEcole2={item.idEquipe2}
                        matchTermine = {item.matchTermine}
                        horaire = {item.horaire}
                        lieu = {item.Lieu}/>}/>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    texteClassement: {
        fontWeight: 'bold'
    }
})