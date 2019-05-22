import React from 'react'
import {View, Text, TouchableOpacity, RefreshControl, Picker, Animated, Dimensions, ScrollView, Platform} from 'react-native'
import {Icon} from 'native-base'
import {Font} from 'expo'

import MatchsPoules from './MatchsPoules'

export default class ResultatsPoules extends React.Component {

    async componentDidMount () {
        await Font.loadAsync({
            'police1':require('../../../../../assets/fonts/WendyOne-Regular.ttf')
        })
        this.setState({fontLoaded: true})
    }

    constructor (props) {
        super(props)
        this.state = {
            refresh: false,
            refreshing: false,
            fontLoaded: false,
            selectedValue: 'Poule A',
            poule: 'Poule A'
        }
    }

    colorTab () {
        return('#1C1F2A')
    }

    _onRefresh () {
        this.setState({
            refreshing: true,
            refresh: !this.state.refresh
        });
        setTimeout(() => {this.setState({ refreshing: false})}, 1000);
    }

    render () {
        return (
            <View style = {{flex: 1}}>

                <ScrollView refreshControl = {
                    <RefreshControl refreshing = {this.state.refreshing}
                        onRefresh = {() => this._onRefresh()}/>}>
                    
                    <MatchsPoules refresh = {this.state.refresh}
                        poule = {this.state.poule.toUpperCase()}/>
                    
                 </ScrollView>
                
            </View>
        )   
    }
}