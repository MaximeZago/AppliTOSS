import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import {Container, Content} from 'native-base'

import MatchBad from './MatchBad'
import MatchBadAVenir from './MatchBadAVenir'

const firebase = require("firebase");
require("firebase/firestore");

export default class ResultatsSeiziemes extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            donnees: [],
            matchs: [],
            loading: true
        }
    }

    componentDidMount () {
        this._loadMatchs()
    }

    _loadMatchs () {
        this.setState({donnees: []}, ()=>{
            const sport = 'BadSH'
            var that = this
            
            var db = firebase.firestore();
            db.settings({
                timestampsInSnapshots: true
                });
            var docRef = db.collection("Sports").doc(sport).collection("Matchs").where("Phase","==",'SEIZIEMES')
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
        
        var matchs = []
        
        for (i = 0; i < longueur; i++) {
            var match = listeMatchs[i]

            if ((match.Equipe1.length > 0) || (match.Equipe2.length > 0)) {
                var horaire = match.horaire
                var liste = horaire.split(':')
                var n = parseInt(liste[0]) * 100 + parseInt(liste[1])
                match.horaireNum = n
                
                matchs.push(match)
            }
        }
        
        matchs.sort(function (match1, match2) {
            return(match1.horaireNum - match2.horaireNum) 
        })
        
        this.setState({
            matchs: matchs
        })
    }

    printMatch (n) {
        const matchs = this.state.matchs
        
        if (matchs.length >= n) {
            if (matchs[n-1].matchTermine) {
                return (
                    <MatchBad equipe1 = {matchs[n-1].Equipe1}
                        equipe2 = {matchs[n-1].Equipe2}
                        scoreEquipe1 = {matchs[n-1].scoreEquipe1}
                        scoreEquipe2 = {matchs[n-1].scoreEquipe2}
                        matchTermine = {matchs[n-1].matchTermine}
                        horaire = {matchs[n-1].horaire}
                        lieu = {matchs[n-1].Lieu}
                        idEcole1 = {matchs[n-1].idEquipe1}
                        idEcole2 = {matchs[n-1].idEquipe2}/>
                )
            } else {
                return (
                    <MatchBadAVenir equipe1 = {matchs[n-1].Equipe1}
                        equipe2 = {matchs[n-1].Equipe2}
                        scoreEquipe1 = {matchs[n-1].scoreEquipe1}
                        scoreEquipe2 = {matchs[n-1].scoreEquipe2}
                        matchTermine = {matchs[n-1].matchTermine}
                        horaire = {matchs[n-1].horaire}
                        lieu = {matchs[n-1].Lieu}
                        idEcole1 = {matchs[n-1].idEquipe1}
                        idEcole2 = {matchs[n-1].idEquipe2}/>
                )
            }
        }
    }

    printLoading () {
        if (this.state.loading) {
            return (

                <View style = {{
                    height: 50,
                    margin: 5,
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <ActivityIndicator/>
                </View>

            )
        }
    }

    render () {
        console.log(this.state.loading)
        return (

            <Container>
                <Content>
                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 1</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(1)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 2</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(2)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 3</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(3)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 4</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(4)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 5</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(5)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 6</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(6)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 7</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(7)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 8</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(8)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 9</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(9)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 10</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(10)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 11</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(11)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 12</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(12)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 13</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(13)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 14</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(14)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 15</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(15)}
                    </View>

                    <View style = {{marginVertical: 10}}>
                        <View style = {styles.titre}>
                            <Text style = {styles.texte}>Match 16</Text>
                        </View>
                        {this.printLoading()}                  
                        {this.printMatch(16)}
                    </View>
                    </Content>
            </Container>

        )
    }
}

const styles = StyleSheet.create({
    texte: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    },
    titre: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EBEBEB'
    }
})