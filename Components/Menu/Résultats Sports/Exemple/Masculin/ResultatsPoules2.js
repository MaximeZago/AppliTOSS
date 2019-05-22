import React from 'react'
import {View} from 'react-native'
import { Container, Header, Content, List, ListItem, Text,Accordion ,Footer,Right, Left,Body,Title,Icon} from 'native-base'
import Vue1 from './Vue1'
import MatchsPoules from './MatchsPoules'
import MatchFootball from './MatchFootball'

const dataArray = [
{ title: "POULE A", content: "" },
{ title: "POULE B", content: "" },
{ title: "POULE C", content: "" },
{ title: "POULE D", content: "" },
{ title: "POULE E", content: "" },
{ title: "POULE F", content: "" },
{ title: "POULE G", content: "" },
{ title: "POULE H", content: "" },
];
class ResultatsPoules extends React.Component{

  _renderContent(title) {
    var sport=this.props.sport
    return (
      <MatchsPoules poule={title} sport={sport}/>
    )
  }
  _renderHeader(title,expanded){
    
    return(

    <View style={{ marginBottom:5,flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor:'#EBEBEB'}}>
      <View>
        <Title> {title} </Title>
      </View>
      <View>
      {expanded
      ? <Icon style={{ fontSize: 18 }} name="arrow-up" />
      : <Icon style={{ fontSize: 18 }} name="arrow-down" />}
      </View>
    </View>

    )
  }

  render(){

    return(
      <Container >
        <Content padder >
          <Accordion dataArray={dataArray}
          renderContent={({title})=>this._renderContent(title)}
          renderHeader={({title},expanded)=>this._renderHeader(title,expanded)}
          />
        </Content>
      </Container>
    )
  }
}
export default ResultatsPoules
