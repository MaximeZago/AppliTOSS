import React from 'react';
import {Container, Tabs, Tab} from 'native-base'
import ResultatsQualifsF from './ResultatsQualifsF'
import ResultatsFinaleF from './ResultatsFinaleF'

export default class ResultatsDiffF extends React.Component {

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
                    <Tab heading = "Qualifications" 
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
                        <ResultatsQualifsF/>
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
                        <ResultatsFinaleF/>
                    </Tab>
                </Tabs>

            </Container>
        )
    }
}