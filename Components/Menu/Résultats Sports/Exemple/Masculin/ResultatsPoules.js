import React from 'react'
import {View, Text,TouchableOpacity,RefreshControl,StyleSheet,TextInput,FlatList,Image,StatusBar,Picker,Animated,Dimensions,ScrollView} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Card,CardItem,Tab,Tabs} from 'native-base'
import MatchsPoules from './MatchsPoules'
const {width,height}=Dimensions.get('window')
import {Font} from 'expo'

export default class ResultatsPoules extends React.Component{

    async componentDidMount(){
        await Font.loadAsync({
            'police1':require('../../../../../assets/fonts/WendyOne-Regular.ttf')
        })
        this.setState({fontLoaded:true})
    }

    constructor(props){
        super(props)
        this.state={refresh:false,refreshing:false,fontLoaded:false,selectedValue:'Poule A',poule:'Poule A',topPosition: new Animated.Value(height)}
        
    }

    changeValue(value){
        this.poule=value
    }

    colorTab(){
        return('#1C1F2A')
    }

    choixPoule(){
       Animated.timing(
           this.state.topPosition,
           {
               toValue:(height-405),
               duration:1000
           }
       ).start()
    }

    deleteChoixPoule(){
        Animated.timing(
            this.state.topPosition,
            {
                toValue:height,
                duration:1000
            }
        ).start()
        
    }

    _onRefresh() {
        
        this.setState({ refreshing: true,refresh:!this.state.refresh  });
        setTimeout(() => {
        this.setState({ refreshing: false});
        }, 1000);
        
        
       
      }

    menuChoixPoule(){
        return(
            <Animated.View style={{position:'absolute',top:this.state.topPosition,height:300,width:width}}>
                    <View style={{height:40,backgroundColor:this.colorTab(),flexDirection:'row'}}>
                        <View style={{flex:4}}>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>this.deleteChoixPoule()}>
                            <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}> OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Picker
                            selectedValue={this.state.poule}
                            style={{ width: width}}
                            onValueChange={(itemValue, itemIndex) => {this.setState({poule:itemValue})}}
                            itemStyle={{backgroundColor:'white'}}
                            >
                            <Picker.Item label="Poule A" value="Poule A" />
                            <Picker.Item label="Poule B" value="Poule B" />
                            <Picker.Item label="Poule C" value="Poule C" />
                            <Picker.Item label="Poule D" value="Poule D" />
                            <Picker.Item label="Poule E" value="Poule E" />
                            <Picker.Item label="Poule F" value="Poule F" />
                            <Picker.Item label="Poule G" value="Poule G" />
                            <Picker.Item label="Poule H" value="Poule H" />
                        </Picker>
                    </View>
                </Animated.View>
        )
    }

    render(){
        
        return(
            <View style={{flex:1}}>
                <ScrollView
                refreshControl={
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={()=>this._onRefresh()}
                    />}>
                
                <View style={{height:60}}>
                    <TouchableOpacity onPress={()=>this.choixPoule()}  style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View  style={{borderColor:this.colorTab(),borderWidth:1,borderRightWidth:0,borderTopLeftRadius:5,borderBottomLeftRadius:5,width:150,height:35,justifyContent:'center'}}>
                            <Text style={{marginLeft:10,fontSize:14,fontWeight:'bold'}}>{this.state.poule}</Text>
                        </View>
                        <View  
                        style={{borderColor:this.colorTab(),borderWidth:1,borderLeftWidth:0,borderTopRightRadius:5,borderBottomRightRadius:5,height:35,width:40,justifyContent:'center',alignItems:'center'}}>
                            <Icon  style={{margin:5}} name='arrow-down'/>
                        </View>
                    </TouchableOpacity>
                </View>
                
                    
                    <MatchsPoules refresh={this.state.refresh} poule={this.state.poule.toUpperCase()} />
                    
                 </ScrollView>
                {this.menuChoixPoule()}

                
            </View>
        )   
    }
}