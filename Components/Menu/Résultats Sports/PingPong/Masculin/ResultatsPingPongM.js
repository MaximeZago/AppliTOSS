import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar} from 'react-native'
import {Icon,Button,Container,Header,Content,Left,Body,Title,Right,Footer,FooterTab,Tabs,Tab,TabHeading,ScrollableTab} from 'native-base'
import ResultatsDemies from './ResultatsDemies'
import ResultatsFinale from './ResultatsFinale'
import ResultatsPoules from './ResultatsPoules'
import ResultatsHuitiemes from './ResultatsHuitiemes'
import ResultatsSeiziemes from './ResultatsSeiziemes'
import ResultatsQuarts from './ResultatsQuarts'
export default class ResultatsFootM extends React.Component{

    colorTab(){
        return('#1C1F2A')
        var couleur='1C1F2A'
        // '#070027'
      }

    render(){
        return(
            <Container>
                <Tabs renderTabBar={()=> <ScrollableTab />}
                    tabContainerStyle={{ height: 40}}
                    tabBarUnderlineStyle={{
                    backgroundColor: this.colorTab(),
                    height: 2,
                }}
                >         
                <Tab heading="Poules" 
                textStyle={{fontSize:11,fontWeight:'bold',color:this.colorTab(),opacity:0.75}}
                activeTextStyle={{fontSize:11,fontWeight:'bold',color:this.colorTab()}}
                tabStyle={{backgroundColor:'white'}}
                activeTabStyle={{backgroundColor:'white'}}
                >
                    <ResultatsPoules/>
                </Tab>
                <Tab heading="Seizièmes" 
                textStyle={{fontSize:11,fontWeight:'bold',color:this.colorTab(),opacity:0.75}}
                activeTextStyle={{fontSize:11,fontWeight:'bold',color:this.colorTab()}}
                tabStyle={{backgroundColor:'white'}}
                activeTabStyle={{backgroundColor:'white'}}
                >  
                    <ResultatsSeiziemes/>
                </Tab>
                <Tab heading="Huitièmes" 
                textStyle={{fontSize:11,fontWeight:'bold',color:this.colorTab(),opacity:0.75}}
                activeTextStyle={{fontSize:11,fontWeight:'bold',color:this.colorTab()}}
                tabStyle={{backgroundColor:'white'}}
                activeTabStyle={{backgroundColor:'white'}}
                >  
                    <ResultatsHuitiemes/>
                </Tab>
                    
                <Tab heading="Quarts" 
                textStyle={{fontSize:11,fontWeight:'bold',color:this.colorTab(),opacity:0.75}}
                activeTextStyle={{fontSize:11,fontWeight:'bold',color:this.colorTab()}}
                tabStyle={{backgroundColor:'white'}}
                activeTabStyle={{backgroundColor:'white'}}
                >
                    <ResultatsQuarts />
                </Tab>
                <Tab heading="Demies" 
                textStyle={{fontSize:11,fontWeight:'bold',color:this.colorTab(),opacity:0.75}}
                activeTextStyle={{fontSize:11,fontWeight:'bold',color:this.colorTab()}}
                tabStyle={{backgroundColor:'white'}}
                activeTabStyle={{backgroundColor:'white'}}
                >
                    <ResultatsDemies />
                </Tab>
                <Tab heading="Finale" 
                textStyle={{fontSize:11,fontWeight:'bold',color:this.colorTab(),opacity:0.75}}
                activeTextStyle={{fontSize:11,fontWeight:'bold',color:this.colorTab()}}
                tabStyle={{backgroundColor:'white'}}
                activeTabStyle={{backgroundColor:'white'}}
                >
                    <ResultatsFinale />
                </Tab>
                </Tabs>
            </Container>
        )
    }
}