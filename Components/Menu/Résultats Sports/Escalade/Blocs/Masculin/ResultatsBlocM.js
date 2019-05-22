import React from 'react';
import {Container, Tabs, Tab} from 'native-base'
import ResultatsQualifsM from './ResultatsQualifsM'
import ResultatsFinaleM from './ResultatsFinaleM'

export default class ResultatsBlocM extends React.Component {

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
                        <ResultatsQualifsM/>
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
                        <ResultatsFinaleM/>
                    </Tab>
                </Tabs>

            </Container>
        )
    }
}