import React from 'react';
import {Container, Tabs, Tab} from 'native-base'

import ResultatsPoules from './ResultatsPoules'
import ResultatsFinal from './ResultatsFinal'

export default class ResultatsEpee extends React.Component {

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
                    <Tab heading = "Classement après poules" 
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
                    <Tab heading = "Classement final" 
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
                        <ResultatsFinal/>
                    </Tab>
                </Tabs>

            </Container>
        )
    }
}