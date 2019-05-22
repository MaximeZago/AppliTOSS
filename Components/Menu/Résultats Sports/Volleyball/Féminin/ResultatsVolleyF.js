import React from 'react';
import {Container, Tabs, Tab} from 'native-base'

import ResultatsPoules from './ResultatsPoules'
import ResultatsHuitiemes from './ResultatsHuitiemes'
import ResultatsQuarts from './ResultatsQuarts'
import ResultatsDemies from './ResultatsDemies'
import ResultatsFinale from './ResultatsFinale'

export default class ResultatsBasketM extends React.Component {

    colorTab () {
        return ('#1C1F2A')
    }

    render () {

        return (
            <Container>

                <Tabs tabContainerStyle = {{height: 40}}
                    tabBarUnderlineStyle = {{
                        backgroundColor: this.colorTab(),
                        height: 2}}>         
                    <Tab heading = "Poules" 
                        textStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab(),
                            opacity: 0.75}}
                        activeTextStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab()}}
                        tabStyle = {{backgroundColor:'white'}}
                        activeTabStyle = {{backgroundColor:'white'}}>
                        <ResultatsPoules/>
                    </Tab>
                    <Tab heading = "Huitièmes" 
                        textStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab(),
                            opacity: 0.75}}
                        activeTextStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab()}}
                        tabStyle = {{backgroundColor:'white'}}
                        activeTabStyle = {{backgroundColor:'white'}}>
                        <ResultatsHuitiemes/>
                    </Tab>
                    <Tab heading = "Quarts" 
                        textStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab(),
                            opacity: 0.75}}
                        activeTextStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab()}}
                        tabStyle = {{backgroundColor:'white'}}
                        activeTabStyle = {{backgroundColor:'white'}}>
                        <ResultatsQuarts/>
                    </Tab>
                    <Tab heading = "Demies" 
                        textStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab(),
                            opacity: 0.75}}
                        activeTextStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab()}}
                        tabStyle = {{backgroundColor:'white'}}
                        activeTabStyle = {{backgroundColor:'white'}}>
                        <ResultatsDemies/>
                    </Tab>
                    <Tab heading = "Finale" 
                        textStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab(),
                            opacity: 0.75}}
                        activeTextStyle = {{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: this.colorTab()}}
                        tabStyle = {{backgroundColor:'white'}}
                        activeTabStyle = {{backgroundColor:'white'}}>
                        <ResultatsFinale/>
                    </Tab>
                </Tabs>

            </Container>
        )
    }
}