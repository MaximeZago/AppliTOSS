import React from 'react';
import {Container, Tabs, Tab} from 'native-base'

import ResultatsPoules from './ResultatsPoules'

export default class ResultatsJudoH extends React.Component {

    colorTab () {
        return ('#1C1F2A')
    }

    render () {

        return (
            <Container>

                <ResultatsPoules/>

            </Container>
        )
    }
}