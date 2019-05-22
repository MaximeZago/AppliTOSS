import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,FlatList,ActivityIndicator} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Form,Item,Label,Input,CardItem} from 'native-base'
import BarreMenu from '../../../Navigation/BarreMenu'

const firebase = require("firebase");
require("firebase/firestore");

export default class FichiersUser extends React.Component{


    constructor(props){
        super(props)
        this.state={
            texte:'',
            donnees:[],
            loading:false
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        this.loadTache()
    }

    loadTache(){

        var that=this
        var user = firebase.auth().currentUser
        var uid
        if (user !=null){
            uid = user.uid
        }
        var db = firebase.firestore();
        db.settings({
        timestampsInSnapshots: true
        })
        
        var docRef = db.collection("Users").doc(uid).collection("Notes")
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var note=doc.data()
                that.setState({donnees:that.state.donnees.concat(note)},()=>{console.log(that.state.donnees)})
                
                
            });
        })
        .then(()=>{this.setState({loading:false})})
    }

    addTache(){
        var db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        })
        var user = firebase.auth().currentUser
        var uid
        if (user !=null){
            uid = user.uid
        }
        var id = Math.floor(Math.random() * Math.floor(1000000000))
        var note='Note '+id.toString()
        db.collection("Users").doc(uid).collection('Notes').doc(note).set({
            Texte:this.state.texte,
            Id:id
            
        })
        .then(()=>{this.setState({donnees:[],loading:true})})
        .then(()=>{this.loadTache()})
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    deleteNote(ID){
        var db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        })
        var user = firebase.auth().currentUser
        var uid
        if (user !=null){
            uid = user.uid
        }
        var name="Note "+ID.toString()
        db.collection("Users").doc(uid).collection("Notes").doc(name).delete()
        .then(()=>{this.setState({donnees:[],loading:true})})
        .then(()=>this.loadTache())
        .catch(error=>console.log(error))

    }

    isLoading(){
        if (this.state.loading){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator/>
                </View>
            )
        }
    }


    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Icon style={{marginLeft:5}} onPress={()=>this.props.navigation.goBack()} name='arrow-back'/>
                    </Left>
                    <Body>
                        <Title>Mes fichiers</Title>
                    </Body>
                    <Right/>
                </Header>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>this.addTache()}
                            style={{marginTop:30,backgroundColor:'#e7e7e7',marginHorizontal:10,flexDirection:'row',height:40,borderRadius:20}}>
                            <Left>
                                <Text style={{fontWeight:'bold',marginLeft:15}}>Ajouter une tâche</Text>
                            </Left> 
                            <Right>
                                <Icon style={{color:'black',marginRight:10}} name="add"/>
                            </Right>
                         </TouchableOpacity>
                         <TextInput
                            style={{height: 80, borderColor: '#dadada', borderWidth: 1,marginHorizontal:30,marginTop:5,padding:10}}
                            onChangeText={(texte) => this.setState({texte})}
                            multiline={true}
                            blurOnSubmit={true}
                        />
                        <View
                            style={{marginTop:20,backgroundColor:'#e7e7e7',marginHorizontal:10,justifyContent:'center',alignItems:'center',height:40,borderRadius:20}}>
                                <Text style={{fontWeight:'bold',marginLeft:15}}>Mes tâches</Text>
                        </View>
                        {this.isLoading()}
                        <FlatList
                            data={this.state.donnees}
                            keyExtractor={(item)=> item.Id.toString()}
                            renderItem={({item}) =>
                                <View style={{height:50, borderColor: '#dadada', borderWidth: 1,marginHorizontal:30,marginTop:5,justifyContent:'center',flexDirection:'row'}}>
                                    <View style={{flex:10,justifyContent:'center'}}>
                                        <Text style={{paddingLeft:10}}>{item.Texte}</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                      <Icon  style={{fontSize:24}}name='trash' onPress={()=>this.deleteNote(item.Id)}/>
                                    </View>
                                </View>
                            }
                            
        
                        />
                    </View>

            </Container>

        )
    }
}