import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,StatusBar,ScrollView,FlatList,AsyncStorage,Platform} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,List,ListItem} from 'native-base'
import BarreMenu from '../../../Navigation/BarreMenu'
import {SearchBar} from 'react-native-elements'


const firebase = require("firebase");
require("firebase/firestore");

const listeEcoles=[
  {
   "ecole": "ARCHI",
   "idEcole": 1,
 },
  {
   "ecole": "Arts et Métiers Metz",
   "idEcole": 2,
 },
  {
   "ecole": "CPE Lyon",
   "idEcole": 11,
 },
  {
   "ecole": "Centrale Lille",
   "idEcole": 3,
 },
  {
   "ecole": "Centrale Lyon",
   "idEcole": 4,
 },
  {
   "ecole": "Centrale Marseille",
   "idEcole": 5,
 },
  {
   "ecole": "Centrale Nantes",
   "idEcole": 6,
 },
  {
   "ecole": "CentraleSupélec Gif",
   "idEcole": 7,
 },
  {
   "ecole": "CentraleSupélec Metz",
   "idEcole": 8,
 },
  {
   "ecole": "CentraleSupélec Rennes",
   "idEcole": 9,
 },
  {
   "ecole": "Chimie ParisTech",
   "idEcole": 10,
 },
  {
   "ecole": "Devoteam",
   "idEcole": 12,
 },
  {
   "ecole": "ECAM",
   "idEcole": 13,
 },
  {
   "ecole": "EDF",
   "idEcole": 108,
 },
  {
   "ecole": "EFOM",
   "idEcole": 15,
 },
  {
   "ecole": "EFREI",
   "idEcole": 16,
 },
  
  {
   "ecole": "EIVP",
   "idEcole": 18,
 },
  {
   "ecole": "ENKRE",
   "idEcole": 19,
 },
  {
   "ecole": "ENS Cachan",
   "idEcole": 20,
 },
  {
   "ecole": "ENS Lyon",
   "idEcole": 21,
 },
  {
   "ecole": "ENS Ulm",
   "idEcole": 22,
 },
  {
   "ecole": "ENSAE",
   "idEcole": 23,
 },
  {
   "ecole": "ENSAI",
   "idEcole": 24,
 },
  {
   "ecole": "ENSAIT",
   "idEcole": 25,
 },
  {
   "ecole": "ENSAM Lille",
   "idEcole": 26,
 },
  {
   "ecole": "ENSG Nancy",
   "idEcole": 27,
 },
  {
   "ecole": "ENSI Caen",
   "idEcole": 28,
 },
  {
   "ecole": "ENSI Poitiers",
   "idEcole": 29,
 },
  {
   "ecole": "ENSIAME",
   "idEcole": 30,
 },
  {
   "ecole": "ENSIIE",
   "idEcole": 31,
 },
  {
   "ecole": "ENSIMAG",
   "idEcole": 32,
 },
  {
   "ecole": "ENSISA",
   "idEcole": 33,
 },
  {
   "ecole": "ENSMA",
   "idEcole": 34,
 },
  {
   "ecole": "ENSMM",
   "idEcole": 35,
 },
  {
   "ecole": "ENSSAT",
   "idEcole": 36,
 },
  {
   "ecole": "ENSTA Bretagne",
   "idEcole": 37,
 },
  {
   "ecole": "ENSTA Paristech",
   "idEcole": 38,
 },
  {
   "ecole": "ENTPE",
   "idEcole": 39,
 },
  {
   "ecole": "ENVA",
   "idEcole": 40,
 },
  {
   "ecole": "EPF Sceaux",
   "idEcole": 41,
 },
  
  {
   "ecole": "ESA",
   "idEcole": 44,
 },
  {
   "ecole": "ESA Lyon",
   "idEcole": 45,
 },
  {
   "ecole": "ESIEE Paris",
   "idEcole": 46,
 },
  {
   "ecole": "ESIGELEC",
   "idEcole": 47,
 },
  {
   "ecole": "ESILV",
   "idEcole": 48,
 },
  {
   "ecole": "ESM Saint-Cyr",
   "idEcole": 49,
 },
  {
   "ecole": "ESME Sudria",
   "idEcole": 50,
 },
  
  {
   "ecole": "ESSEC",
   "idEcole": 53,
 },
  {
   "ecole": "ESTACA",
   "idEcole": 54,
 },
  {
   "ecole": "ESTP",
   "idEcole": 55,
 },
  {
   "ecole": "EURIA",
   "idEcole": 56,
 },
  {
   "ecole": "Ecole Polytechnique (X)",
   "idEcole": 14,
 },
  {
   "ecole": "Epita",
   "idEcole": 43,
 },
  {
   "ecole": "Faculté des Sciences du Sport",
   "idEcole": 57,
 },
  {
   "ecole": "Grenoble INP",
   "idEcole": 58,
 },
  {
   "ecole": "HEC Paris",
   "idEcole": 59,
 },
  {
   "ecole": "HEI",
   "idEcole": 60,
 },
  {
   "ecole": "ICN Business School",
   "idEcole": 61,
 },
  {
   "ecole": "IFMK Rouen",
   "idEcole": 62,
 },
  {
   "ecole": "IMT Atlantique",
   "idEcole": 64,
 },
  
  {
   "ecole": "INSA Rouen",
   "idEcole": 66,
 },
  {
   "ecole": "INSA Strasbourg",
   "idEcole": 67,
 },
  
  
  {
   "ecole": "IPSA",
   "idEcole": 69,
 },
  {
   "ecole": "ISAE - Supaéro",
   "idEcole": 70,
 },
  {
   "ecole": "ISARA Lyon",
   "idEcole": 71,
 },
  {
   "ecole": "ISEP",
   "idEcole": 72,
 },
  {
   "ecole": "Imperial College London",
   "idEcole": 63,
 },
  {
   "ecole": "Mazars",
   "idEcole": 107,
 },
  
  {
   "ecole": "Mines d'Ales",
   "idEcole": 77,
 },
  {
   "ecole": "Mines de Paris",
   "idEcole": 78,
 },
  {
   "ecole": "Médecine Dijon",
   "idEcole": 73,
 },
  {
   "ecole": "Médecine Paris 6",
   "idEcole": 74,
 },
  {
   "ecole": "Médecine Paris Descartes",
   "idEcole": 75,
 },
  {
   "ecole": "Paris 10",
   "idEcole": 79,
 },
  {
   "ecole": "Polytech Nancy",
   "idEcole": 82,
 },
  {
   "ecole": "Polytech Orléans",
   "idEcole": 83,
 },
  {
   "ecole": "Polytech Paris UPMC",
   "idEcole": 84,
 },
  {
   "ecole": "Polytech Paris-Sud",
   "idEcole": 85,
 },
  {
   "ecole": "Ponts et chaussées",
   "idEcole": 86,
 },
  
  {
   "ecole": "Pôle Universitaire Leonard de Vinci",
   "idEcole": 81,
 },
  {
   "ecole": "SIGMA Clermont",
   "idEcole": 89,
 },
  {
   "ecole": "STAPS Marseille",
   "idEcole": 91,
 },
  {
   "ecole": "Sciences Po Bordeaux",
   "idEcole": 87,
 },
  {
   "ecole": "Sciences Po Paris",
   "idEcole": 88,
 },
  {
   "ecole": "Sorbonne",
   "idEcole": 90,
 },
  {
   "ecole": "Supméca",
   "idEcole": 92,
 },
  {
   "ecole": "Supoptique",
   "idEcole": 93,
 },
  {
   "ecole": "TELECOM SudParis",
   "idEcole": 97,
 },
  {
   "ecole": "Technische Universitat Kaiserslautern",
   "idEcole": 94,
 },
  {
   "ecole": "Télécom ParisTech",
   "idEcole": 95,
 },
  {
   "ecole": "Télécom Physique Strasbourg",
   "idEcole": 96,
 },
  {
   "ecole": "UFR",
   "idEcole": 98,
 },
  {
   "ecole": "UTC",
   "idEcole": 105,
 },
  {
   "ecole": "UTT",
   "idEcole": 106,
 },
  {
   "ecole": "Université Lyon 1",
   "idEcole": 99,
 },
  {
   "ecole": "Université Paris 6",
   "idEcole": 100,
 },
  
  {
   "ecole": "Université Paris Diderot - Paris 7",
   "idEcole": 102,
 },
  {
   "ecole": "Université ParisSud",
   "idEcole": 103,
 },
  {
   "ecole": "Université Polytechnique Hauts de France",
   "idEcole": 104,
 },
]

export default class Plan extends React.Component {

  

  constructor(props){
    
    super(props)
    this.state={
      valueSearch:'',
      listeEcoles:[],
      listeEcolesRecherchees:[],
      onResearch:false,
      recherchesRecentes:['','','']
    }
    this.listeEcoles=[]
  }

  

  componentDidMount(){
    
    this.chargerEcoles()
    
  }

  
  
  // loadListEcole(){
  //   const url='https://sheets.googleapis.com/v4/spreadsheets/13KI5bDD6AvddR6AVJTSmmCQf6CiDfYebWcgEG2n04Vw/values/Feuille%201?valueRenderOption=FORMATTED_VALUE&key=AIzaSyA_mdFbHs0qvEyyx9ZFIFP8fu2ACRWHtL4'
  //   const that=this
  //   fetch(url)
  //   .then((response)=>response.json())
  //   .then((data)=>{
  //     var l =data.values.length
  //     for (i=1;i<l;i++){
  //       that.listeEcoles.push([data.values[i][1],data.values[i][2]])
  //     }
  //     this.setState({listeEcoles:that.listeEcoles})
  //   })
  //   .catch((error)=>console.log(error))
  // }

  
//   chargerEcoles(){
//     var that=this
//     var db = firebase.firestore();
//     db.settings({
//         timestampsInSnapshots: true
//         });
//     var tab=[]

//     var docRef=db.collection("Classement")
    
//     docRef.get().then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             var ecole=doc.data()
//             tab.push(ecole)
//         })
//         that.setState({listeEcoles:tab})
        
//     })
    
    
// }

chargerEcoles(){
  this.setState({listeEcoles:listeEcoles})
}

// afficherEcolesT(){
//   var listeEcoles=this.state.listeEcoles
//   var liste=[]
//   var n=listeEcoles.length
  
//   for (i=0;i<n;i++){
//     el=listeEcoles[i]
//     var ecole=el.ecole
//     var idEcole=el.idEcole
//     liste.push({"ecole":ecole,"idEcole":idEcole})

//   }
//   console.log(liste)
// }

  
  // loadAsync=async()=>{
  //   try{
  //     var liste=await AsyncStorage.getItem('RecherchesRecentes')
  //     }
  //     catch(error){console.log(error)}
  //     if (liste==null){
  //       return
  //     }
  //     liste2=JSON.parse(liste)
      
  //     var tab=[liste2.ecole1,liste2.ecole2,liste2.ecole3]
  //     this.setState({recherchesRecentes:tab})
  // }


  blocEcoles(lettre){
    var dataEcole=this.state.listeEcoles.filter((tab)=>{
        var premiereLettre=tab.ecole[0].toUpperCase()
        return(premiereLettre==lettre)
    })
    if (dataEcole.length==0){return}
    
    return(
      <View>
        <View style={{height:40,backgroundColor:'#f3f3f3',justifyContent:'center'}}>
          <Text style={{marginLeft:10,fontWeight:'bold'}}>{lettre}</Text>
        </View>
        <FlatList
        data={dataEcole}
        keyExtractor={(item)=> item.ecole.toString()}
        renderItem={({item}) => {
          if (item==dataEcole[dataEcole.length-1]){
            return(
              <TouchableOpacity style={{height:50,justifyContent:'center'}}
              onPress={()=>this.pressEcole(item.ecole,item.idEcole)}>
                <View style={{height:50,marginLeft:10,borderColor:'#d6d6d6',borderBottomWidth:0,justifyContent:'center',flexDirection:'row'}}>
                  <View style={{flex:8,justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{item.ecole}</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Icon style={{fontSize:20}} name='arrow-forward'/>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }
          else{
          return(
            <TouchableOpacity style={{height:50,justifyContent:'center'}}
            onPress={()=>this.pressEcole(item.ecole,item.idEcole)}>
            <View style={{height:50,marginLeft:10,borderColor:'#d6d6d6',borderBottomWidth:0.8,justifyContent:'center',flexDirection:'row'}}>
              <View style={{flex:8,justifyContent:'center'}}>
                <Text style={{fontWeight:'bold'}}>{item.ecole}</Text>
              </View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Icon style={{fontSize:20}} name='arrow-forward'/>
              </View>

            </View>
          </TouchableOpacity>
          )
          }
        }
        }
        />
      </View>
    )
  }

  triDonnes(){
    var text=this.state.valueSearch.toUpperCase()
    var tableau = this.state.listeEcoles.filter(function(ecole){
      ecoleNom=ecole.ecole.toUpperCase()
      return((ecoleNom.indexOf(text)!=-1)&&(ecoleNom!='NOM'))})
    this.setState({listeEcolesRecherchees:tableau})
    

  }

  changeText(text){
    if (text.length==0){
      this.setState({onResearch:false})
    }
    else{
      this.setState({valueSearch:text,onResearch:true},()=>this.triDonnes())
    }
    
    
  }

  // createRecherchesRecentes=async()=>{
  //   try{
  //     const value = await AsyncStorage.getItem('RecherchesRecentes')
  //     if (value!==null){
  //       return
  //     }
  //   }
  //   catch(error){console.log(error)}
  //   const recherchesRecentes={
  //     ecole1:'',
  //     ecole2:'',
  //     ecole3:'',
  //   }
  //   try{
  //     await AsyncStorage.setItem('RecherchesRecentes',JSON.stringify(recherchesRecentes))
  //   }
  //   catch(error){console.log(error)}
  // }

   pressEcole(ecole,idEcole){
    
    this.props.navigation.navigate('PageEcole',{nomEcole:ecole,idEcole:idEcole})
    
    
    
   }

  // _storeData = async (ecole,idEcole) => {
  //   await this.createRecherchesRecentes()
  //   try{
  //   var liste=await AsyncStorage.getItem('RecherchesRecentes')
    
  //   }
  //   catch(error){console.log(error)}
  //   liste2=JSON.parse(liste)
    
  //   if (liste2.ecole1.length==0){
  //     liste2.ecole1=ecole
  //   }
  //   else{
  //     if (liste2.ecole2.length==0){
  //       if (liste2.ecole1!==ecole){
  //         liste2.ecole2=ecole
  //       }
        
  //     }
  //     else{
  //       if(liste2.ecole3.length==0){
  //         if ((liste2.ecole1!==ecole)&&(liste2.ecole2!==ecole)){
  //           liste2.ecole3=ecole
  //         }
          
  //       }
  //       else{
  //         liste2.ecole1=ecole
  //       }
  //     }
  //   }
    
  //   var tab=[liste2.ecole1,liste2.ecole2,liste2.ecole3]
  //   this.setState({recherchesRecentes:tab})
  //   try{
  //     await AsyncStorage.mergeItem('RecherchesRecentes',JSON.stringify(liste2))
  //   }
  //   catch(error){console.log(error)}

  // }

  // deleteRecherchesRecentes=async()=>{
  //   AsyncStorage.removeItem('RecherchesRecentes').then(()=>{
  //     tab=['','','']
  //   this.setState({recherchesRecentes:tab})
  //   })
    
  // }
  

  displayEcoles(){
    
    if (this.state.onResearch){
      return(
        <View style={{flex:1}}>
            <FlatList
              data={this.state.listeEcolesRecherchees}
              keyExtractor={(item)=>item.ecole.toString()}
              renderItem={({item})=>
              <TouchableOpacity style={{height:50,justifyContent:'center'}}
              onPress={()=>this.pressEcole(item.ecole,item.idEcole)}>
                <View style={{height:50,marginLeft:10,borderColor:'#d6d6d6',borderBottomWidth:0.8,justifyContent:'center',flexDirection:'row'}}>
                  <View style={{flex:8,justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{item.ecole}</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Icon style={{fontSize:20}} name='arrow-forward'/>
                  </View>
                </View>
              </TouchableOpacity>
            }
            />
        </View>

      )
    }
    if ((!this.state.onResearch)&&!((this.state.recherchesRecentes[0].length>0)||(this.state.recherchesRecentes[1].length>0)||(this.state.recherchesRecentes[2].length>0))){
      return(
        
            <View style={{borderTopWidth:0.8,borderColor:'#d6d6d6'}}>
                {this.blocEcoles('A')}
                {this.blocEcoles('B')}
                {this.blocEcoles('C')}
                {this.blocEcoles('D')}
                {this.blocEcoles('E')}
                {this.blocEcoles('F')}
                {this.blocEcoles('G')}
                {this.blocEcoles('H')}
                {this.blocEcoles('I')}
                {this.blocEcoles('J')}
                {this.blocEcoles('K')}
                {this.blocEcoles('L')}
                {this.blocEcoles('M')}
                {this.blocEcoles('N')}
                {this.blocEcoles('O')}
                {this.blocEcoles('P')}
                {this.blocEcoles('Q')}
                {this.blocEcoles('R')}
                {this.blocEcoles('S')}
                {this.blocEcoles('T')}
                {this.blocEcoles('U')}
                {this.blocEcoles('V')}
                {this.blocEcoles('W')}
                {this.blocEcoles('X')}
                {this.blocEcoles('Y')}
                {this.blocEcoles('Z')}

            </View>
            
      )
    }
  }

  // RechercheRecentesEcole(n){
  //   if (this.state.recherchesRecentes[n].length>0){
  //     return(
  //       <TouchableOpacity style={{height:50,justifyContent:'center'}}
  //       onPress={()=>this.pressEcole(this.state.recherchesRecentes[n])}>
  //         <View style={{height:50,marginLeft:10,borderColor:'#d6d6d6',borderTopWidth:0.8,justifyContent:'center',flexDirection:'row'}}>
  //           <View style={{flex:8,justifyContent:'center'}}>
  //             <Text style={{fontWeight:'bold'}}>{this.state.recherchesRecentes[n]}</Text>
  //           </View>
  //           <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //             <Icon style={{fontSize:20}} name='arrow-forward'/>
  //           </View>
  //         </View>
  //       </TouchableOpacity>
  //     )
  //   }
  //   else{return}
  // }

  // displayRechercheRecente(){
  //   if((this.state.recherchesRecentes[0].length>0)||(this.state.recherchesRecentes[1].length>0)||(this.state.recherchesRecentes[2].length>0)){
  //     return(
  //       <View style={{height:40,alignItems:'center',flexDirection:'row'}}>
  //         <View style={{flex:1}}></View>
  //         <View style={{flex:8,justifyContent:'center',alignItems:'center'}}>
  //         <Text style={{fontStyle:'italic'}}>Recherches récentes</Text>
  //         </View>
  //         <TouchableOpacity onPress={()=>this.deleteRecherchesRecentes()} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //         <Icon name='close'/>
  //         </TouchableOpacity>

  //       </View>
  //     )
  //   }
  // }

  // RechercheRecentes(){
  //     if(!this.state.onResearch){
  //     return(
  //       <View>
  //             {this.displayRechercheRecente()}
  //             {this.RechercheRecentesEcole(0)}
  //             {this.RechercheRecentesEcole(1)}
  //             {this.RechercheRecentesEcole(2)}
            
  //       </View>
  //     )
  //     }
  // }

  render(){
    
    return(
      <Container>
        {Platform.OS==='android'?
            <View>
              <View style={{height:StatusBar.currentHeight,backgroundColor:'#070027'}}>

              </View>
              <View style={{height:50,flexDirection:'row',backgroundColor:'#070027'}}>
                <View style={{flex:1}}>
                  <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{flex:1,justifyContent:'center'}}>
                      <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='menu'/>
                  </TouchableOpacity>
                </View>
                <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Résultats par école</Text>
                </View>
                <View style={{flex:1}}>
                </View>
              </View>
             </View>
        :
        
         <Header transparent style={{backgroundColor:'#070027',height:65}}>
          <StatusBar barStyle={'light-content'}/>
          <Left style={{flex:1}}>
            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{flex:1,justifyContent:'center'}}>
                <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='menu'/>
            </TouchableOpacity>
          </Left>
          <Body style={{flex:4}}>
            <Title style={{color:'white'}}>Résultats par école</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }
          <View style={{flex:1}} >
            <SearchBar
              platform="ios"
              cancelButtonTitle="Cancel"
              placeholder='Rechercher' 
              onClearText={()=>
            this.setState({onResearch:false,valueSearch:''})}
              onChangeText={(text)=>this.changeText(text)}
              value={this.state.valueSearch}/>
            <ScrollView>
           
            {this.displayEcoles()}
            </ScrollView>
          </View>

      </Container>
    )
  }
}
