import React from 'react'
import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator,createSwitchNavigator,DrawerItems} from 'react-navigation'
import HomeScreen from '../Components/Menu/Accueil/HomeScreen'
import SettingsScreen from '../Components/Menu/Paramètres/SettingsScreen'

//Import des résultats des sports
import ListeResultats from '../Components/Menu/Résultats Sports/ListeResultats'   

import ResultatBasket from '../Components/Menu/Résultats Sports/Basketball/ResultatBasket'
import ResultatFoot from '../Components/Menu/Résultats Sports/Football/ResultatFoot'
import ResultatHand from '../Components/Menu/Résultats Sports/Handball/ResultatHandball'
import ResultatVolley from '../Components/Menu/Résultats Sports/Volleyball/ResultatVolley'
import ResultatRugby from '../Components/Menu/Résultats Sports/Rugby/ResultatRugby'
import ResultatEquitation from '../Components/Menu/Résultats Sports/Equitation/ResultatsEquitation'
import ResultatEscrime from '../Components/Menu/Résultats Sports/Escrime/ResultatEscrime'
import ResultatCheer from '../Components/Menu/Résultats Sports/Cheerleading/ResultatsCheer'
import ResultatWaterpolo from '../Components/Menu/Résultats Sports/Waterpolo/ResultatWaterpolo'
import ResultatUltimate from '../Components/Menu/Résultats Sports/Ultimate/ResultatUltimate'
import ResultatTennis from '../Components/Menu/Résultats Sports/Tennis/ResultatTennis'
import Resultat10km from '../Components/Menu/Résultats Sports/Resultats10km/Resultat10km'
import ResultatRaid from '../Components/Menu/Résultats Sports/Raid/ResultatsRaid'
import ResultatNatation from '../Components/Menu/Résultats Sports/Natation/ResultatsNatation'
import ResultatJudo from '../Components/Menu/Résultats Sports/Judo/ResultatJudo'
import ResultatEscalade from '../Components/Menu/Résultats Sports/Escalade/DiffOrBlocs'
import ResultatBlocs from '../Components/Menu/Résultats Sports/Escalade/Blocs/ResultatsBlocs'
import ResultatDiff from '../Components/Menu/Résultats Sports/Escalade/Difficultes/ResultatsDiff'
import ResultatPingPong from '../Components/Menu/Résultats Sports/PingPong/ResultatPingPong'
import ResultatsBadSF from '../Components/Menu/Résultats Sports/Badminton/Simple F/ResultatsBadSF'
import ResultatsBadSH from '../Components/Menu/Résultats Sports/Badminton/Simple M/ResultatsBadSM'
import ResultatsBadDH from '../Components/Menu/Résultats Sports/Badminton/Double M/ResultatsBadDM'
import ResultatsBadDF from '../Components/Menu/Résultats Sports/Badminton/Double F/ResultatsBadDF'
import ResultatsBadDM from '../Components/Menu/Résultats Sports/Badminton/Double Mixte/ResultatsBadDM'
import ResultatBad from '../Components/Menu/Résultats Sports/Badminton/ResultatsBad'
//Fin
import Partenaires from '../Components/Menu/Partenaires/Partenaires'
import Planning from '../Components/Menu/Planning/Planning'
import Plan from '../Components/Menu/Résultats Ecoles/ResultatsEcoles'
import BarreMenu from '../Navigation/BarreMenu'
import Classement1 from '../Components/Menu/Classement/Classement'
import Classement from '../Components/Menu/Classement/Tableau_medailles'
import Contacts from '../Components/Menu/Contacts/Contacts'
import PageEcole from '../Components/Menu/Résultats Ecoles/PageEcole'
//import AuthLoadingScreen from '../Components/AuthLoadingScreen'

import Administration from '../Components/Menu/Administration/Administration'

import Carte from '../Components/Menu/Plan/Carte'
import Navette from '../Components/Menu/Navette/Navette'
import Durable from '../Components/Menu/Durable/Durable'
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,Dimensions,Image,ScrollView,StatusBar} from 'react-native'

const {width}=Dimensions.get('window')
const CustomDrawerComponent = (props)=>(
  <View style={{flex:1}}>
    {/* <View style={{height:150,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../Images/logo_TOSS.png')} style={{height:120,width:120,borderRadius:60}}/>
    </View> */}
    
    <View style={{height:65,backgroundColor:'#070027',justifyContent:'flex-end',alignItems:'center'}}>
      <Image style={{height:30,width:100,marginBottom:10}} source={require('../Images/Logo_TOSS_Blanc.png')}/>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
)

const ResultatsNavigator= createStackNavigator({
  ListeResultats:{
    screen:ListeResultats,
    navigationOptions:{
      header:null
    }
  },
 
  ResultatFoot:{
    screen:ResultatFoot,
    navigationOptions:{
      header:null
    }
  },
  
  ResultatHand:{
    screen:ResultatHand,
    navigationOptions:{
      header:null
    }
  },

  ResultatBasket:{
    screen:ResultatBasket,
    navigationOptions:{
      header:null
    }
  },
  ResultatVolley:{
    screen:ResultatVolley,
    navigationOptions:{
      header:null
    }
  },
  ResultatRugby:{
    screen:ResultatRugby,
    navigationOptions:{
      header:null
    }
  },
  ResultatEquitation:{
    screen:ResultatEquitation,
    navigationOptions:{
      header:null
    }
  },
  ResultatCheer:{
    screen:ResultatCheer,
    navigationOptions:{
      header:null
    }
  },

  ResultatEscrime:{
    screen:ResultatEscrime,
    navigationOptions:{
      header:null
    }
  },
  ResultatWaterpolo:{
    screen:ResultatWaterpolo,
    navigationOptions:{
      header:null
    }
  },
  ResultatUltimate:{
    screen:ResultatUltimate,
    navigationOptions:{
      header:null
    }
  },
  ResultatTennis:{
    screen:ResultatTennis,
    navigationOptions:{
      header:null
    }
  },
  Resultat10km:{
    screen:Resultat10km,
    navigationOptions:{
      header:null
    }
  },
  ResultatRaid:{
    screen:ResultatRaid,
    navigationOptions:{
      header:null
    }
  },
  ResultatNatation:{
    screen:ResultatNatation,
    navigationOptions:{
      header:null
    }
  },
  ResultatJudo:{
    screen:ResultatJudo,
    navigationOptions:{
      header:null
    }
  },
  ResultatEscalade:{
    screen:ResultatEscalade,
    navigationOptions:{
      header:null
    }
  },
  ResultatBlocs:{
    screen:ResultatBlocs,
    navigationOptions:{
      header:null
    }
  },
  ResultatDiff:{
    screen:ResultatDiff,
    navigationOptions:{
      header:null
    }
  },
  ResultatPingPong:{
    screen:ResultatPingPong,
    navigationOptions:{
      header:null
    }
  },
  ResultatBad:{
    screen:ResultatBad,
    navigationOptions:{
      header:null
    }
  },
  ResultatsBadSH:{
    screen:ResultatsBadSH,
    navigationOptions:{
      header:null
    }
  },
  ResultatsBadDH:{
    screen:ResultatsBadDH,
    navigationOptions:{
      header:null
    }
  },
  ResultatsBadSF:{
    screen:ResultatsBadSF,
    navigationOptions:{
      header:null
    }
  },
  ResultatsBadDF:{
    screen:ResultatsBadDF,
    navigationOptions:{
      header:null
    }
  },
  ResultatsBadDM:{
    screen:ResultatsBadDM,
    navigationOptions:{
      header:null
    }
  }

})

const ClassementNavigator= createStackNavigator({
  Classement:{
    screen:Classement,
    navigationOptions:{
      header:null
    }
  },
  Classement1:{
    screen:Classement1,
    navigationOptions:{
      header:null
    }
  },
  PageEcole:{
    screen:PageEcole,
    navigationOptions:{
      header:null
    }
  }

})

const PlanNavigator= createStackNavigator({
  Plan:{
    screen:Plan,
    navigationOptions:{
      header:null
    }
  },
  PageEcole:{
    screen:PageEcole,
    navigationOptions:{
      header:null
    }
  }

})

const PlanningNavigator= createStackNavigator({
  Planning:{
    screen:Planning,
    navigationOptions:{
      header:null
    }
  }

})

// const AccueilNavigator= createStackNavigator({
//   HomeScreen:{
//     screen:HomeScreen,
//     navigationOptions:{
//       header:null
//     }
//   },
//   ListeResultats:{
//     screen:ListeResultats,
//     navigationOptions:{
//       header:null
//     }
//   },
//   Resultat:{
//     screen:Resultat,
//     navigationOptions:{
//       header:null
//     }
//   }

// })

const  MyNavigator= createDrawerNavigator({
  Home:HomeScreen,
  Carte:Carte,
  Résultats:ResultatsNavigator,
  
  Plan:PlanNavigator,
  Classement:ClassementNavigator,
  Planning:PlanningNavigator,
  Partenaires:Partenaires,
  Contacts:Contacts,
  Durable:Durable
 
  

},
{
  contentComponent:CustomDrawerComponent,
  drawerWidth:0.8*width,
  contentOptions:{
    activeTintColor:'orange',

  }
})

// AccueilNavigator.navigationOptions={
// drawerLabel : ({tintColor})=>(
//   <BarreMenu couleur={tintColor} titre={'Accueil'} logo={'home'}/>
// )
// }

ResultatsNavigator.navigationOptions ={
    header:null,
    drawerLabel : ({tintColor})=>(
      <BarreMenu couleur={tintColor} titre={'Résultats'} logo={'ios-basketball'}/>
    )
  }
ClassementNavigator.navigationOptions={
  header:null,
  drawerLabel : ({tintColor})=>(
    <BarreMenu couleur={tintColor} titre={'Classement'} logo={'ios-podium'}/>
  )
}

PlanningNavigator.navigationOptions={
  header:null,
  drawerLabel : ({tintColor})=>(
    <BarreMenu couleur={tintColor} titre={'Planning'} logo={'calendar'}/>
  )
}

PlanNavigator.navigationOptions={
  drawerLabel : ({tintColor})=>(
    <BarreMenu couleur={tintColor} titre={'Ecoles'} logo={'school'}/>
  )
}


export default MyNavigator
//logo plan : 'map'