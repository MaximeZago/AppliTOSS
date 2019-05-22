import React from 'react'
import {View,Text,Image,FlatList,ScrollView,RefreshControl,StatusBar,TouchableOpacity,ActivityIndicator,Animated,Dimensions,Platform} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Tabs,Tab,Segment,Button} from 'native-base'





data= [{id:1,gold:3,silver:1,bronze:3,total:7},{id:2,gold:2, silver:5, bronze:1, total:8},{id:3,gold:0, silver:6, bronze:2, total:8}]

const firebase = require("firebase");
  
require("firebase/firestore");

const {height,width}=Dimensions.get("window")


export default class Tableau_medailles extends React.Component {
    
    constructor(props){
        super(props)
        this.state={active:[],listeEcole:[], refreshing:false,isLoading:true,topPosition:new Animated.Value(height),listeOr:[],listeArgent:[],listeBronze:[],ecole:'',idEcole:0}
        this.listeEcole=[]
    }
    
    componentWillMount(){
        this.chargerActivation().then(()=>this.chargerEcoles())
        
        
    }

    async chargerActivation(){
        var that=this
        var db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
            });
        var tab=[]

        var docRef=db.collection("ClassementActive")
        
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var ecole=doc.data()
                tab.push(ecole)
            })
           that.setState({active:tab})
            
        })
    }

    chargerEcoles(){
        var that=this
        var db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
            });
        var tab=[]

        var docRef=db.collection("Classement")
        
        docRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var ecole=doc.data()
                tab.push(ecole)
            })
            that.listeEcole=tab
            
        })
        .then(()=>this.trierEcoles())
        
    }

    onRefresh(){
        this.setState({refreshing: true})
        this.chargerActivation()
        this.chargerEcoles()
        
    }

    choixStyle(obj){
        n=obj.index
        if(n%2===0){
           return('#F2F6FF')
            return('#eef1ff')
        }
        else{
            return('#fff')
        }
    }
    
    trierEcoles(){
        var listeEcole=this.listeEcole

        // listeEcole.sort(function(a,b){
        //     if (a.or!=b.or){
        //         return (a.or-b.or)
        //     }
        //     else{
        //         if (a.argent!=b.argent){
        //             return(a.argent-b.argent)
        //         }
        //         else{
        //             return(a.bronze-b.bronze)
        //         } 
        //     }  
        // })

        listeEcole.sort(function(a,b){
            return(a.classement-b.classement)
        })

        this.setState({listeEcole:listeEcole,refreshing:false,isLoading:false})
    }

    openMenu(){
        Animated.timing(
            this.state.topPosition,
            {
                toValue:(height-400),
                duration:1000
            }
        ).start()
    }
    closeMenu(){
        Animated.timing(
            this.state.topPosition,
            {
                toValue:height,
                duration:1000
            }
        ).start()
    }

    pressEcole(ecole,listeOr,listeArgent,listeBronze,idEcole){
        this.setState({ecole,listeOr,listeArgent,listeBronze,idEcole})
        this.openMenu()
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
            case 107:
            return(require('../../../Images/LogoEcoles/LogoEcole_107.png'))
            break;
            default:
            return(require('../../../Images/logo_TOSS.png'))

        }
    }

    displayLoading(){
        if (this.state.isLoading){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <ActivityIndicator/>
                    </View>
            )
        }
        else{
            if (!this.state.active[0].Active){
                return(
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:20}}><Text style={{fontWeight:'bold',fontSize:20,textAlign:'center'}}>Rendez vous à la cérémonie de clotûre pour connaître le classement final</Text></View>
                )
            }
            else{
                return(
                    <View style={{flex:1}}>
                    <View style={{height :60, flexDirection: 'row'}}>
                        <View style={{ flex: 6}}></View>
                        <View style={{ flex: 1}}>
                            <Image source={require('../../../Images/Medailles/gold-medal.png')} style={{flex:1, height:null, width:null, resizeMode:'contain'}}/>
                        </View>
                        <View style={{ flex: 1}}>
                            <Image source={require('../../../Images/Medailles/silver-medal.png')} style={{flex:1, height:null, width:null, resizeMode:'contain'}}/>
                        </View>
                        <View style={{ flex: 1}}>
                            <Image source={require('../../../Images/Medailles/bronze-medal.png')} style={{flex:1, height:null, width:null, resizeMode:'contain'}}/>
                        </View>
                        <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontWeight:'bold', fontSize:15}}>TOTAL</Text>
                        </View>
                    </View>
                    
                    <ScrollView style={{flex:1}} 
                    refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={()=>this.onRefresh()}
                    />}>
                    
                    
                        <FlatList extraData={this.state} data={this.state.listeEcole} keyExtractor={(item)=>item.id.toString()}
                        renderItem={({item,index})=>{
                            return(
                                <TouchableOpacity onPress={()=>this.pressEcole(item.ecole,item.listeOr,item.listeArgent,item.listeBronze,item.idEcole)} style={{height :55, flexDirection: 'row',backgroundColor:this.choixStyle({index}),borderColor:'#EEEFF0',borderBottomWidth:1}}>
                                    <View style={{flex:6,flexDirection:'row'}}>
                                        <View style={{ flex: 1, justifyContent: 'center'}}>
                                            <Text style={{fontWeight:'bold', paddingLeft:15, fontSize:17}}>{item.classement}</Text>
                                        </View>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                            <Image style={{height:25,width:25}} source={this.imageEcole(item.idEcole)}/>
                                        </View>
                                        <View style={{flexDirection:'row',alignItems:'center',flex:4,paddingRight:5,paddingLeft:5}}>
                                            <Text  >{item.ecole}</Text>
                                            
                                        </View>
                                    </View>
                                        
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                        <Text>{item.or}</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                        <Text>{item.argent}</Text>                 
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                        <Text>{item.bronze}</Text>
                                    </View>
                                    <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontWeight:'bold', fontSize:15}}>{item.total}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        />
                    </ScrollView>
                    </View>
                )
            }
        }
    }
    

    render(){
        console.log(this.state.active)
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
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Classement général</Text>
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
            <Title style={{color:'white'}}>Classement général</Title>
          </Body>
          <Right style={{flex:1}}/>  
        </Header> 
        }
                

                

                {this.displayLoading()}
            
                <Animated.View style={{width:width,height:400,position:'absolute',top:this.state.topPosition,backgroundColor:'white'}}>
                    
                    <View style={{height:40,backgroundColor:'#1C1F2A',flexDirection:'row'}}>
                        <View style={{flex:4}}>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>this.closeMenu()}>
                                <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}> OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView>
                    <View style={{height:40,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',fontStyle:'italic'}}>{this.state.ecole}</Text>
                    </View>
                    <View style={{width:width,height:150,flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Image source={require('../../../Images/Medailles/gold-medal.png')} style={{flex:1, height:null, width:null, resizeMode:'contain',margin:2}}/>
                        </View>
                        <View style={{flex:1}}>
                            <Image source={require('../../../Images/Medailles//silver-medal.png')} style={{flex:1, height:null, width:null, resizeMode:'contain',margin:2}}/>
                        </View>
                        <View style={{flex:1}}>
                            <Image source={require('../../../Images/Medailles/bronze-medal.png')} style={{flex:1, height:null, width:null, resizeMode:'contain',margin:2}}/>
                        </View>
                    </View>
                    <View style={{width:width,flexDirection:'row'}}>
                        <View style={{flex:1,alignItems:'center'}}>
                            {this.state.listeOr.length===0?<Text style={{fontWeight:'bold',fontSize:15}}>-</Text>:
                            <View>
                                {this.state.listeOr.map(nom=>(
                                <Text style={{fontWeight:'bold',fontSize:15,textAlign:'center'}} key={nom.toString()}>{nom}</Text>
                                ))}
                            </View>
                            } 
                        </View>
                        <View style={{flex:1,alignItems:'center'}}>
                            {this.state.listeArgent.length===0?<Text style={{fontWeight:'bold',fontSize:15}}>-</Text>:
                            <View>
                                {this.state.listeArgent.map(nom=>(
                                <Text style={{fontWeight:'bold',fontSize:15,textAlign:'center'}} key={nom.toString()}>{nom}</Text>
                                ))}
                            </View>
                            } 
                        </View>
                        <View style={{flex:1,alignItems:'center'}}>
                            {this.state.listeBronze.length===0?<Text style={{fontWeight:'bold',fontSize:15}}>-</Text>:
                            <View>
                                {this.state.listeBronze.map(nom=>(
                                <Text style={{fontWeight:'bold',fontSize:15,textAlign:'center'}} key={nom.toString()}>{nom}</Text>
                                ))}
                            </View>
                            } 
                        </View>
                    </View>
                    <View style={{height:40,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('PageEcole',{nomEcole:this.state.ecole,idEcole:this.state.idEcole})} style={{height:20,width:width/2,justifyContent:'center',alignItems:'center',height:40}} >
                            <Text style={{fontSize:16,fontWeight:'bold'}}>Voir les détails</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </Animated.View>
            </Container>          
        )
    }
}



