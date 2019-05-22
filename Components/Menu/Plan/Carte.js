import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar,Dimensions,Animated,Keyboard,Image,Platform,Clipboard} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Tabs,Tab,Segment,Button} from 'native-base'
//import { MapView } from 'expo';
import MapView, { AnimatedRegion } from 'react-native-maps'
import {PROVIDER_GOOGLE} from 'react-native-maps'
import {UrlTile,Marker,Overlay} from 'react-native-maps'
import {SearchBar} from 'react-native-elements'
import { AntDesign,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler';
import BarreMenu from '../../../Navigation/BarreMenu'
import * as Permissions from 'expo-permissions'


async function checkMultiPermissions() {
  if (Platform.OS==='android'){
    const { Permissions } = Expo;
  var { status, expires, permissions } = await Permissions.askAsync(Permissions.LOCATION)
  }
  
  
  
}

var mapStyle=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
var mapStyle2=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
var mapStyle3=[
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
var listeSports=[
  {
    type:'Sport',
    nom:'Badminton',
    lieu:['Campus Orsay Bâtiment 310'],
    campus:'Orsay',
    description:'Campus Orsay Bâtiment 310',
    imageName:'badminton',
    id:6,
    region:[{latitude:48.700783, longitude:2.176774,latitudeDelta:0.004,longitudeDelta:0.004}]

  },

  {
    type:'Sport',
    nom:'Basket M',
    lieu:['Campus X'],
    campus:'X',
    description:'Campus X',
    imageName:'basketball',
    id:4,
    region:[{latitude: 48.711679, longitude:2.212807,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Sport',
    nom:'Basket M (finale)',
    lieu:['Bouygues'],
    campus:'CS',
    description:'Bouygues',
    imageName:'basketball',
    id:23,
    region:[{latitude:48.709303, longitude: 2.166508,latitudeDelta:0.004,longitudeDelta:0.004}]

  },
  {
    type:'Sport',
    nom:'Basket F',
    lieu:['Campus Orsay Bâtiment 225'],
    campus:'Orsay',
    description:'Campus Orsay Bâtiment 225',
    imageName:'basketball',
    id:11,
    region:[{latitude: 48.698671, longitude: 2.165720,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Sport',
    nom:'Basket F (finale)',
    lieu:['Bouygues'],
    campus:'CS',
    description:'Bouygues',
    imageName:'basketball',
    id:22,
    region:[{latitude:48.709303, longitude: 2.166508,latitudeDelta:0.004,longitudeDelta:0.004}]

  },
  {
    type:'Sport',
    nom:'Cheerleading',
    lieu:['Bouygues'],
    campus:'CS',
    description:'Bouygues',
    imageName:'cheer',
    id:16,
    region:[{latitude:48.709303, longitude: 2.166508,latitudeDelta:0.004,longitudeDelta:0.004}]

  }, 
  
  {
    type:'Sport',
    nom:'Escalade',
    lieu:['Campus X'],
    campus:'X',
    description:'Campus X',
    imageName:'escalade',
    id:18,
    region:[{latitude:48.711765,longitude:2.214790,latitudeDelta:0.004,longitudeDelta:0.004}]

  },
  {
    type:'Sport',
    nom:'Escrime',
    lieu:['Campus X'],
    campus:'X',
    description:'Campus X',
    imageName:'escrime',
    id:189,
    region:[{latitude:48.712187,longitude: 2.213519,latitudeDelta:0.004,longitudeDelta:0.004}]

  },
  {
    type:'Sport',
    nom:'Equitation',
    lieu:['Grange Martin'],
    campus:'CS',
    description:'Grange Martin',
    imageName:'equitation',
    id:17,
    region:[{latitude:48.704850,longitude: 2.116090,latitudeDelta:0.004,longitudeDelta:0.004}]

  },
  {
  type:'Sport',
  nom:'Foot M',
  lieu:['Village TOSS','Plaine des sports'],
  campus:'CS',
  description:'Village TOSS & Plaine des sports',
  imageName:'football',
  id:3,
  region:[{latitude:48.708373,longitude:2.157297,latitudeDelta:0.005,longitudeDelta:0.005}, {latitude:48.710517,longitude:2.157438,latitudeDelta:0.005,longitudeDelta:0.005}]
},
{
  type:'Sport',
  nom:'Foot F',
  lieu:['Plaine des sports'],
  campus:'CS',
  description:'Plaine des sports',
  imageName:'football',
  id:10,
  region:[{latitude:48.710517,longitude:2.157438,latitudeDelta:0.005,longitudeDelta:0.005}]

},
{
  type:'Sport',
  nom:'Hand M',
  lieu:['Bréguet','Bouygues'],
  campus:'CS',
  description:'Bréguet & Bouygues',
  imageName:'handball',
  id:13,
  region:[{latitude:48.709376,longitude:  2.164186,latitudeDelta:0.004,longitudeDelta:0.004},{latitude:48.709303, longitude: 2.166508,latitudeDelta:0.004,longitudeDelta:0.004}]

},
{
  type:'Sport',
  nom:'Hand F',
  lieu:['Campus Orsay Bâtiment 225'],
  campus:'Orsay',
  description:'Campus Orsay Bâtiment 225',
  imageName:'handball',
  id:7,
  region:[{latitude:48.698671,longitude: 2.165720,latitudeDelta:0.004,longitudeDelta:0.004}]

},
{
  type:'Sport',
  nom:'Hand F (finale)',
  lieu:['Bréguet'],
  campus:'CS',
  description:'Bréguet',
  imageName:'handball',
  id:21,
  region:[{latitude:48.709376,longitude:  2.164186,latitudeDelta:0.004,longitudeDelta:0.004}]

},
{
  type:'Sport',
  nom:'Judo',
  lieu:['Bouygues'],
  campus:'CS',
  description:'Bouygues',
  imageName:'judo',
  id:15,
  region:[{latitude:48.709303, longitude: 2.166508,latitudeDelta:0.004,longitudeDelta:0.004}]

},
{
  type:'Sport',
  nom:'Natation',
  lieu:['Campus X'],
  campus:'X',
  description:'Campus X',
  imageName:'natation',
  id:19,
  region:[{latitude:48.712425,longitude: 2.211640,latitudeDelta:0.004,longitudeDelta:0.004}]

},
{
  type:'Sport',
  nom:'Neymar Junior 5',
  lieu:['Village TOSS'],
  campus:'CS',
  description:'Village TOSS',
  imageName:'neymarjr5',
  id:24,
  region:[{latitude:48.707873, longitude: 2.158478,latitudeDelta:0.004,longitudeDelta:0.004}]

},
{
  type:'Sport',
  nom:'Rugby M',
  lieu:['Campus X','Plaine des sports'],
  campus:'X',
  description:'Campus X et Plaine des sports',
  imageName:'rugby',
  id:12,
  region:[{latitude:48.717268,longitude:2.208469,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.713935, longitude:2.154079,latitudeDelta:0.005,longitudeDelta:0.005}]

},
{
  type:'Sport',
  nom:'Rugby F',
  lieu:['Plaine des sports'],
  campus:'CS',
  description:'Plaine des sports',
  imageName:'rugby',
  id:5,
  region:[{latitude:48.713935, longitude:2.154079,latitudeDelta:0.005,longitudeDelta:0.005}]

},
{
  type:'Sport',
  nom:'Tennis',
  lieu:['Village TOSS'],
  campus:'CS',
  description:'Village TOSS',
  imageName:'tennis',
  id:1,
  region:[{latitude:48.709062,longitude:2.158220,latitudeDelta:0.005,longitudeDelta:0.005}]

},
{
  type:'Sport',
  nom:'Tennis de table',
  lieu:['Bouygues salle polyvalente'],
  campus:'CS',
  description:'Bouygues',
  imageName:'ping-pong',
  id:159,
  region:[{latitude:48.709303, longitude: 2.166508,latitudeDelta:0.004,longitudeDelta:0.004}]

},
{
  type:'Sport',
  nom:'Ultimate',
  lieu:['Campus X'],
  campus:'X',
  description:'Campus X',
  imageName:'ultimate',
  id:14,
  region:[{latitude:48.715200,longitude:2.214361,latitudeDelta:0.005,longitudeDelta:0.005}]

},
{
  type:'Sport',
  nom:'Volley M',
  lieu:['Campus X'],
  campus:'X',
  description:'Campus X',
  imageName:'volleyball',
  id:9,
  region:[{latitude:48.712176,longitude:2.213990,latitudeDelta:0.005,longitudeDelta:0.005}]

},
{
  type:'Sport',
  nom:'Volley F',
  lieu:['Village TOSS'],
  campus:'CS',
  description:'Village TOSS',
  imageName:'volleyball',
  id:2,
  region:[{latitude:48.708845,longitude:2.158710,latitudeDelta:0.005,longitudeDelta:0.005}]

},

 
  
  
  
  
  
  {
    type:'Sport',
    nom:'10 km Mazars',
    lieu:['Village TOSS'],
    campus:'CS',
    description:'Village TOSS',
    imageName:'10km',
    id:8,
    region:[{latitude:48.707125,longitude:2.158160,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  
  
   
   
   
  
   
   {
    type:'Sport',
    nom:'Waterpolo',
    lieu:['Campus X'],
    campus:'X',
    description:'Campus X',
    imageName:'waterpolo',
    id:20,
    region:[{latitude:48.712425,longitude: 2.211640,latitudeDelta:0.004,longitudeDelta:0.004}]

  }
  
  



 
]
var listeServices=[
  {
    type:'Service',
    nom:'Accueil',
    lieu:['Bouygues'],
    description:'Bouygues',
    campus:'CS',
    imageName:'accueil',
    id:3,
    region:[{latitude:48.709528, longitude:2.166622,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  
  {
    type:'Service',
    nom:'Toilettes CS',
    lieu:['Résidence 1', 'Bréguet', ],
    description:'Campus CS',
    campus:'CS',
    imageName:'toilettes',
    id:5,
    region:[{latitude:48.707778,longitude: 2.160398,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.708294,longitude:2.164983,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Service',
    nom:'Sanitaires',
    lieu:['Village TOSS', 'Bréguet', 'Bouygues'],
    description:'Campus CS',
    campus:'CS',
    imageName:'douche',
    id:6,
    region:[{latitude:48.708992,longitude: 2.158008,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.708397,longitude: 2.163993,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.708993,longitude: 2.166763,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Service',
    nom:'Banque de jour',
    lieu:['Village TOSS', 'Bréguet', 'Bouygues'],
    description:'Rechargement des bracelets',
    campus:'CS',
    imageName:'pointchange',
    id:7,
    region:[{latitude:48.708049,longitude: 2.157664,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Service',
    nom:'Secouristes CS',
    lieu:['Village TOSS', 'Bouygues', 'Plaine des sports'],
    description:'UMPS',
    campus:'CS',
    imageName:'secouriste',
    id:8,
    region:[{latitude:48.708706,longitude: 2.158652,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.709577,longitude: 2.166121,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.712301,longitude: 2.156357,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Service',
    nom:'Secouristes X',
    lieu:['Campus X'],
    description:'UMPS',
    campus:'X',
    imageName:'secouriste',
    id:9,
    region:[{latitude:48.717022,longitude: 2.210139,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Service',
    nom:'Départ navettes',
    lieu:['Bréguet', 'Campus X', 'Bâtiment 225 Orsay', 'Bâtiment 310 Orsay'],
    description:'Pôle navette',
    campus:'CS',
    imageName:'navette',
    id:10,
    region:[{latitude:48.709608,longitude: 2.162919,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.713055,longitude: 2.213924,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.698671,longitude: 2.165720,latitudeDelta:0.004,longitudeDelta:0.004},{latitude:48.700783, longitude:2.176774,latitudeDelta:0.004,longitudeDelta:0.004}]

  },
  {
    type:'Service',
    nom:'Champs de tentes',
    lieu:['N°1', 'N°2', 'N°3'],
    description:'Hébergement en tente',
    campus:'CS',
    imageName:'tente',
    id:11,
    region:[{latitude:48.707986,longitude: 2.159977,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.707315,longitude: 2.160646,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.708312,longitude: 2.166717,latitudeDelta:0.004,longitudeDelta:0.004}]

  },
  {
    type:'Service',
    nom:'Buvette CS',
    lieu:['Village TOSS'],
    description:'Village TOSS',
    campus:'CS',
    imageName:'buvette',
    id:12,
    region:[{latitude:48.707949,longitude: 2.157612,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Service',
    nom:'Buvette X',
    lieu:['Campus X'],
    description:'Campus X',
    campus:'X',
    imageName:'buvette',
    id:13,
    region:[{latitude:48.712554,longitude: 2.214495,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Activites',
    nom:'Dîner du samedi soir',
    lieu:['Bréguet'],
    campus:'CS',
    description:'Bréguet',
    imageName:'diner',
    id:231,
    region:[{latitude:48.708220, longitude: 2.164092,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Service',
    nom:'Pizza Domino\'s',
    lieu:['Agora'],
    description:'Récupérez ici les pizzas obtenues au shotgun',
    campus:'CS',
    imageName:'pizza',
    id:4,
    region:[{latitude:48.710088, longitude:2.164637,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Service',
    nom:'Distribution des packs déjeuner',
    lieu:['Village TOSS', 'Campus X'],
    description:'Village TOSS & Campus X',
    campus:'CS',
    imageName:'dejeuner',
    id:14,
    region:[{latitude:48.708582,longitude: 2.158721,latitudeDelta:0.005,longitudeDelta:0.005},{latitude:48.712549,longitude: 2.214789,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Service',
    nom:'Petit-Déjeuner',
    lieu:['Bréguet'],
    description:'Bréguet',
    campus:'CS',
    imageName:'breakfast',
    id:15,
    region:[{latitude:48.708225,longitude: 2.163852,latitudeDelta:0.005,longitudeDelta:0.005}]

  }


  
]

var listeActivites=[
  {
    type:'Activites',
    nom:'Biathlon',
    lieu:['Village TOSS'],
    campus:'CS',
    description:'Village TOSS',
    imageName:'biathlon',
    id:7,
    region:[{latitude:48.707574,longitude:2.161402,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Activites',
    nom:'Bubble Foot',
    lieu:['Village TOSS'],
    campus:'CS',
    description:'Village TOSS',
    imageName:'bubble-foot',
    id:13,
    region:[{latitude:48.708036,longitude: 2.156373,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Activites',
    nom:'Cérémonie de clôture',
    lieu:['Village TOSS'],
    campus:'CS',
    description:'Village TOSS',
    imageName:'ceremoniecloture',
    id:12,
    region:[{latitude:48.707858,longitude:2.158142,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Activites',
    nom:'Feu d\'artifice',
    lieu:['Village TOSS'],
    campus:'CS',
    description:'Village TOSS',
    imageName:'feuartifice',
    id:11,
    region:[{latitude:48.707395, longitude:2.163571,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Activites',
    nom:'Laser game',
    lieu:['Village TOSS'],
    campus:'CS',
    description:'Village TOSS',
    imageName:'lasergame',
    id:10,
    region:[{latitude:48.707510,longitude:2.163498,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Activites',
    nom:'Montgolfière',
    lieu:['Village TOSS'],
    campus:'CS',
    description:'Village TOSS',
    imageName:'montgolfiere',
    id:3,
    region:[{latitude:48.709241,longitude:2.157627,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Activites',
    nom:'Ostéopathes',
    lieu:['Village TOSS'],
    campus:'CS',
    description:'Village TOSS',
    imageName:'osteopathes',
    id:4,
    region:[{latitude:48.708457,longitude:2.157429,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Activites',
    nom:'Soirée',
    lieu:['Eiffel & Yvette'],
    campus:'CS',
    description:'Eiffel & Yvette',
    imageName:'confetti',
    id:14,
    region:[{latitude:48.709882,longitude: 2.166493,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Activites',
    nom:'Stand de tir',
    lieu:['Village TOSS'],
    campus:'CS',
    description:'Village TOSS',
    imageName:'standdetir',
    id:8,
    region:[{latitude:48.708470, longitude:2.157836,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Activites',
    nom:'Saut à l\'élastique',
    lieu:['Village TOSS'],
    campus:'CS',
    description:'Village TOSS',
    imageName:'sautelastique',
    id:9,
    region:[{latitude:48.707774,longitude:2.163246,latitudeDelta:0.005,longitudeDelta:0.005}]

  },
  {
    type:'Activites',
    nom:'Tir à l\'arc',
    lieu:['Village TOSS'],
    campus:'CS',
    description:'Village TOSS',
    imageName:'tiralarc',
    id:5,
    region:[{latitude:48.706572, longitude:2.157100,latitudeDelta:0.005,longitudeDelta:0.005}]

  }
  
  
  
  
  
  
  
  
  
]

const campusGifRegion={latitude:48.709743,longitude:2.162944,latitudeDelta:0.012,longitudeDelta:0.012}
const campusXRegion={latitude:48.712339,longitude:2.211394,latitudeDelta:0.012,longitudeDelta:0.012}
const campusOrsayRegion={latitude:48.699260,longitude: 2.180779,latitudeDelta:0.012,longitudeDelta:0.012}

const {width,height}=Dimensions.get('window')
export default class Carte extends React.Component {

  static navigationOptions={
    drawerLabel : ({tintColor})=>(
      <BarreMenu couleur={tintColor} titre={'Carte'} logo={'map'}/>
    )
  }

  componentDidMount(){
    checkMultiPermissions()
    }


  constructor(props){
    super(props)
    this.state={
      topPosition:new Animated.Value(height-450),
      recherche:'',
      listeMarkers:[],
      campus:'CS',
      listeRechercheSports:listeSports,
      listeRechercheServices:listeServices,
      listeRechercheActivites:listeActivites,
      region:campusGifRegion
    }
  }

  colorTab(){
    return('#1C1F2A')
    var couleur='1C1F2A'
    // '#070027'
  }

  closeSearch(){
    Animated.timing(
      this.state.topPosition,
      {
          toValue:height-60,
          duration:300
      }
  ).start()
  }

  changeText(text){
    this.setState({recherche:text},()=>this.triDonnes())
    
  }
  
  triDonnes(){

    var text=this.state.recherche.toUpperCase()
    console.log(text)
    var listeRechercheSports = listeSports.filter(function(data){
      var nom=data.nom.toUpperCase()
      return(nom.indexOf(text)!=-1)})
    var listeRechercheServices = listeServices.filter(function(data){
      var nom=data.nom.toUpperCase()
      return(nom.indexOf(text)!=-1)})
    var listeRechercheActivites = listeActivites.filter(function(data){
      var nom=data.nom.toUpperCase()
      return(nom.indexOf(text)!=-1)})
    console.log(listeRechercheSports)
    this.setState({listeRechercheActivites,listeRechercheServices,listeRechercheSports})

  }

  pressMap(){
    Keyboard.dismiss()
    this.closeSearch()
  }
  expandSearch(){
    Animated.timing(
      this.state.topPosition,
      {
          toValue:height-450,
          duration:300
      }
  ).start()
  }

  async addMarker(latlng,title,description,id){
    var marker={
      id:id,
      latlng:latlng,
      title:title,
      description:description
    }
    this.setState({
      listeMarkers:this.state.listeMarkers.concat(marker)
    })
  }

  addMarker2(latlng,title,description,id, image){
    var Tmarker
    Tmarker = []
    var n
    n=latlng.length
    var i
    for (i=0;i<n;i++){
        Tmarker.push({id:id[i],
                      latlng:latlng[i],
                      title:title[i],
                      description:description[i],
                      imageName: image
        } )
    console.log(Tmarker)}


    n=Tmarker.length
   
    
    
    this.setState({
      listeMarkers:this.state.listeMarkers.concat(Tmarker)
    })
  }

  clickSport(region,nom,lieu,id,campus,image){
    Keyboard.dismiss()
    this.closeSearch()
    
    
    var n=region.length
    
    
    this.setState({campus:campus})
    this.setState({listeMarkers:[]},()=>{
      var latlng=[]
      var title=[]
      var description=[]
      var id=[]
      var longitudes=[]
      var latitudes=[]
      var Slongitude=0
      var Slatitude=0

      for (i=0;i<n;i++){
        latlng.push({longitude:region[i].longitude, latitude:region[i].latitude})
        longitudes.push(region[i].longitude)
        latitudes.push(region[i].latitude)
        Slongitude=Slongitude+region[i].longitude
        Slatitude=Slatitude+region[i].latitude
        title.push(nom)
        description.push(lieu[i])
        id.push(id+200*i)
      }
      this.addMarker2(latlng,title,description,id,image)

      function compare(x, y) {
          return x - y;
      }
     
      latitudes.sort(compare)
      longitudes.sort(compare)
      var newRegion={latitude:(latitudes[latitudes.length-1]+latitudes[0])/2, longitude:(longitudes[longitudes.length-1]+longitudes[0])/2, latitudeDelta:(Math.abs(latitudes[latitudes.length-1]-latitudes[0])+0.005), longitudeDelta:(Math.abs(longitudes[longitudes.length-1]-longitudes[0])+0.005)}
      
      this.focusRegion(newRegion)
   })
 }

  focusRegion(region){
    
    this.mapview.animateToRegion(region,1000)
  }

  changeCampus(nom){
    this.setState({campus:nom})
    switch(nom){
      case 'CS':
        this.focusRegion(campusGifRegion)
        break
      case 'X':
        this.focusRegion(campusXRegion)
        break
      case 'Orsay':
        this.focusRegion(campusOrsayRegion)
    }
  }

  changeRegion(region){
    this.setState({region:region})
  }

  // createIcon(iconType,iconName,iconColor){
  //   switch(iconType){
  //     case 'Ionicons':
  //       return(
  //         <Ionicons name={iconName} size={35} color={iconColor}/>
  //       )
  //       break
  //     case 'MaterialCommunityIcons':
  //         return(
  //           <MaterialCommunityIcons name={iconName} size={35} color={iconColor}/>
  //         )
  //         break
  //     case 'FontAwesome5':
  //       return(
  //         <FontAwesome5 name={iconName} size={35} color={iconColor}/>
  //       )
  //       break
  //   }

  // }

  urlImage(nom){
    switch(nom){
      case 'football':
        return(require('../../../Images/LogosPlanSports/football.png'))
        break
      case 'handball':
        return(require("../../../Images/LogosPlanSports/handball.png"))
        break
      case 'volleyball':
        return(require('../../../Images/LogosPlanSports/volley-ball.png'))
        break
      case 'basketball':
        return(require('../../../Images/LogosPlanSports/ball-of-basketball.png'))
        break
      case 'cheer':
        return(require('../../../Images/LogosPlanSports/american-football-cheerleader-jump.png'))
        break
      case 'badminton':
        return(require('../../../Images/LogosPlanSports/badminton.png'))
        break
      case 'escalade':
        return(require('../../../Images/LogosPlanSports/climbing.png'))
        break
      case 'equitation':
        return(require('../../../Images/LogosPlanSports/horse-riding.png'))
        break
      case 'ultimate':
        return(require('../../../Images/LogosPlanSports/icon.png'))
        break
      case 'judo':
        return(require('../../../Images/LogosPlanSports/judo.png'))
        break
      case 'escrime':
        return(require('../../../Images/LogosPlanSports/man-practicing-fencing.png'))
        break
      case 'judo':
        return(require('../../../Images/LogosPlanSports/judo.png'))
        break
      case 'raid':
        return(require('../../../Images/LogosPlanSports/mountain-running-silhouette.png'))
        break
      case 'ping-pong':
        return(require('../../../Images/LogosPlanSports/ping-pong.png'))
        break
      case 'rugby':
        return(require('../../../Images/LogosPlanSports/rugby-player.png'))
        break
      case '10km':
        return(require('../../../Images/LogosPlanSports/running.png'))
        break
      case 'natation':
        return(require('../../../Images/LogosPlanSports/swimming.png'))
        break
      case 'tennis':
        return(require('../../../Images/LogosPlanSports/tennis-raquet-and-ball.png'))
        break
      case 'volleyball':
        return(require('../../../Images/LogosPlanSports/volley-ball.png'))
        break
      case 'waterpolo':
        return(require('../../../Images/LogosPlanSports/water-polo.png'))
        break
      case 'tiralarc':
        return(require('../../../Images/Activites/target.png'))
        break
      case 'montgolfiere':
        return(require('../../../Images/Activites/air-balloon.png'))
        break
      case 'standdetir':
        return(require('../../../Images/Activites/arm-target.png'))
        break
      case 'lasergame':
        return(require('../../../Images/Activites/blaster.png'))
        break
      case 'diner':
        return(require('../../../Images/Activites/dinner.png'))
        break
      case 'feuartifice':
        return(require('../../../Images/Activites/fireworks.png'))
        break
      case 'sautelastique':
        return(require('../../../Images/Activites/man-going-bungee-jumping.png'))
        break
      case 'osteopathes':
        return(require('../../../Images/Activites/massage-session.png'))
        break
      case 'neymarjr5':
        return(require('../../../Images/Activites/NJ5.png'))
        break
      case 'ceremoniecloture':
        return(require('../../../Images/Activites/prize-badge-with-star-and-ribbon.png'))
        break
      case 'biathlon':
        return(require('../../../Images/Activites/shooting.png'))
        break
      case 'pizza':
        return(require('../../../Images/Activites/pizza.png'))
        break
      case 'toilettes':
        return(require('../../../Images/Activites/toilet.png'))
        break
      case 'accueil':
        return(require('../../../Images/Activites/welcome.png'))
        break
      case 'douche':
        return(require('../../../Images/Activites/bathroom.png'))
        break
      case 'pointchange':
        return(require('../../../Images/Activites/euro.png'))
        break
      case 'buvette':
        return(require('../../../Images/Activites/food.png'))
        break
      case 'navette':
        return(require('../../../Images/Activites/bus.png'))
        break
      case 'secouriste':
        return(require('../../../Images/Activites/pharmacy-sign.png'))
        break
      case 'tente':
        return(require('../../../Images/Activites/tent.png'))
        break
      case 'dejeuner':
        return(require('../../../Images/Activites/dejeuner.png'))
        break
      case 'bubble-foot':
        return(require('../../../Images/Activites/bubble.png'))
        break
      case 'breakfast':
        return(require('../../../Images/Activites/breakfast.png'))
        break
      case 'confetti':
        return(require('../../../Images/Activites/confetti.png'))
        break
      case 'toss':
        return(require('../../../Images/Activites/toss.png'))
        break
      case 'coeur':
        return(require('../../../Images/Activites/coeur.png'))
        break







      default:
        return(require('../../../Images/LogosPlanSports/football.png'))
    }
  }

  render() {
    console.log(this.state.listeMarkers)
    const domicile=[[48.862787,2.190225],[48.861142, 2.193969]]
    const gif=[[48.709731,2.16],[48.707556,2.166679]]
    var hauteur= 0.091/(this.state.region.latitudeDelta)
    
    return(
      <Container>
        {Platform.OS==='android'?
            <View>
              <View style={{height:StatusBar.currentHeight,backgroundColor:'#070027'}}>

              </View>
              <View style={{height:50,flexDirection:'row',backgroundColor:'#070027'}}>
                <View style={{flex:1}}>
                  <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{flex:1,justifyContent:'center'}}>
                      <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='menu'/>
                  </TouchableOpacity>
                </View>
                <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Se repérer</Text>
                </View>
                <View style={{flex:1}}>
                </View>
              </View>
             </View>
        :
        
         <Header transparent style={{backgroundColor:'#070027',height:65}}>
          <StatusBar barStyle={'light-content'}/>
          <Left >
            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{flex:1,justifyContent:'center'}}>
                <Icon style={{marginLeft:15,marginRight:20,color:'white'}}   name='menu'/>
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Se repérer</Title>
          </Body>
          <Right/>  
        </Header> 
        }
        <View style={{height:35,width:width,flexDirection:'row',backgroundColor:'white',zIndex:1,opacity:0.8}}>
          <TouchableOpacity 
          onPress={()=>this.changeCampus('CS')}
          style={this.state.campus==='CS'?{flex:1,justifyContent:'center',alignItems:'center',borderBottomWidth:3,borderBottomColor:'#070027'}:
          {flex:1,justifyContent:'center',alignItems:'center'}}
          >
            <Text
            style={this.state.campus==='CS'?{fontWeight:'bold'}:{opacity:0.7}}
            >Campus CS</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>this.changeCampus('X')}
          style={this.state.campus==='X'?{flex:1,justifyContent:'center',alignItems:'center',borderBottomWidth:3,borderBottomColor:'#070027'}:
          {flex:1,justifyContent:'center',alignItems:'center'}}
          >
            <Text
            style={this.state.campus==='X'?{fontWeight:'bold'}:{opacity:0.7}}
            >Campus X</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>this.changeCampus('Orsay')}
          style={this.state.campus==='Orsay'?{flex:1,justifyContent:'center',alignItems:'center',borderBottomWidth:3,borderBottomColor:'#070027'}:
          {flex:1,justifyContent:'center',alignItems:'center'}}
          >
            <Text
            style={this.state.campus==='Orsay'?{fontWeight:'bold'}:{opacity:0.7}}
            >Orsay</Text>
          </TouchableOpacity>
        </View>
        <MapView
        ref={mapview=>this.mapview=mapview}
        showsUserLocation
        showsCompass={true}
        customMapStyle={mapStyle3}
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1}}
        initialRegion={campusGifRegion}
        showsMyLocationButton
        //onRegionChange={(region)=>this.changeRegion(region)}
        onPress={()=>this.pressMap()}
        >
        {this.state.listeMarkers.map(marker=>(
          <Marker
          key={marker.id}
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
           
          >
          <Image source={this.urlImage(marker.imageName)} style={{height:35,width:35}}/>
          </Marker>
        ))}
        
        <Marker
          key={12345}
          coordinate={{latitude:48.708356, longitude:2.158893}}
          title={'Village TOSS'}
          description={'Bienvenue au TOSS'}
           
          >
          <Image source={this.urlImage('toss')} style={{height:35,width:35}}/>
          </Marker>
        <Marker
          key={12346}
          coordinate={{latitude:48.709528, longitude:2.166622}}
          title={'Accueil'}
          description={'Bienvenue au TOSS'}
           
          >
          <Image source={this.urlImage('accueil')} style={{height:35,width:35}}/>
          </Marker>
         
         
          <Marker
          onPress={()=>{Clipboard.setString("Un jour quelqu'un décida de partir en Australie - Une légende du bds de son nom Marvaldi - Son absence a généré beaucoup de pleurs - Mais il restera à jamais dans nos coeurs ")}}
          key={12347}
          coordinate={{latitude:-27.486949, longitude:153.059514}}
          title={'Bagadou'}
          description={"On t'aime"}
           
          >
          <Image source={this.urlImage('coeur')} style={{height:35,width:35}}/>
          </Marker>
       
        
        
        </MapView>
        <View  style={{height:60}}>
          
        </View>
      
      <Animated.View style={{height:450,width:width,position:'absolute',top:this.state.topPosition,borderTopWidth:1,borderColor:'#E9EAEB',backgroundColor:'white'}}>
        <SearchBar
          
          platform="ios"
          cancelButtonTitle="Cancel"
          placeholder='Sports / Activités / Services' 
          onClearText={()=>{}
        }
          onFocus={()=>this.expandSearch()}
          onChangeText={(text)=>this.changeText(text)}
          onCancel={()=>{this.closeSearch()}}
          value={this.state.recherche}
        />
        <Tabs
          
          tabContainerStyle={{ height: 40}}
          tabBarUnderlineStyle={{backgroundColor: this.colorTab(),height: 2}}
        >
         

          <Tab heading="Services" 
          textStyle={{fontSize:13,fontWeight:'bold',color:this.colorTab(),opacity:0.75}}
          activeTextStyle={{fontSize:13,fontWeight:'bold',color:this.colorTab()}}
          tabStyle={{backgroundColor:'white'}}
          activeTabStyle={{backgroundColor:'white'}}
          >
            {this.state.listeRechercheServices.length===0?
            <View style={{flex:1,alignItems:'center'}}><Text style={{color:'grey',marginTop:20}}>Aucune suggestion trouvée</Text></View>:
            <FlatList
              onScroll={()=>Keyboard.dismiss()}
              keyboardShouldPersistTaps="handled"
              data={this.state.listeRechercheServices}
              keyExtractor={(item)=> item.id.toString()}
              renderItem={({item})=>{
                return(
                  <TouchableOpacity onPress={()=>this.clickSport(item.region,item.nom,item.lieu,item.id,item.campus,item.imageName)} style={{height:70,width:width,borderTopWidth:1,borderColor:'#e4e4e4',flexDirection:'row'}}>
                    <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
                        
                            <Image style={{height:30,width:30,resizeMode:'contain'}} source={this.urlImage(item.imageName)}/>
                        
                    </View>
                    <View style={{flex:10,flexDirection:'column',marginLeft:10,justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:19}}>{item.nom}</Text>
                        <Text style={{color:'grey',fontSize:16}}>{item.description}</Text>
                    </View>
                  </TouchableOpacity>
               )
              }}
             />
            }
            
          </Tab>
           <Tab heading="Sports" 
          textStyle={{fontSize:13,fontWeight:'bold',color:this.colorTab(),opacity:0.75}}
          activeTextStyle={{fontSize:13,fontWeight:'bold',color:this.colorTab()}}
          tabStyle={{backgroundColor:'white'}}
          activeTabStyle={{backgroundColor:'white'}}
          >

            {(this.state.listeRechercheSports.length===0)?
            <View style={{flex:1,alignItems:'center'}}><Text style={{color:'grey',marginTop:20}}>Aucune suggestion trouvée</Text></View>:
            <FlatList
              onScroll={()=>Keyboard.dismiss()}
              keyboardShouldPersistTaps="handled"
              data={this.state.listeRechercheSports}
              keyExtractor={(item)=> item.id.toString()}
              renderItem={({item})=>{
                return(
                  <TouchableOpacity onPress={()=>this.clickSport(item.region,item.nom,item.lieu,item.id,item.campus,item.imageName)} style={{height:70,width:width,borderTopWidth:1,borderColor:'#e4e4e4',flexDirection:'row'}}>
                    <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
                        
                            <Image style={{height:30,width:30,resizeMode:'contain'}} source={this.urlImage(item.imageName)}/>
                        
                    </View>
                    <View style={{flex:10,flexDirection:'column',marginLeft:10,justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:19}}>{item.nom}</Text>
                        <Text style={{color:'grey',fontSize:16}}>{item.description}</Text>
                    </View>
                  </TouchableOpacity>
               )
              }}
             />}
          </Tab>
          <Tab heading="Activités" 
          textStyle={{fontSize:13,fontWeight:'bold',color:this.colorTab(),opacity:0.75}}
          activeTextStyle={{fontSize:13,fontWeight:'bold',color:this.colorTab()}}
          tabStyle={{backgroundColor:'white'}}
          activeTabStyle={{backgroundColor:'white'}}
          >
            {this.state.listeRechercheActivites.length===0?
            <View style={{flex:1,alignItems:'center'}}><Text style={{color:'grey',marginTop:20}}>Aucune suggestion trouvée</Text></View>:
            <FlatList
              onScroll={()=>Keyboard.dismiss()}
              keyboardShouldPersistTaps="handled"
              data={this.state.listeRechercheActivites}
              keyExtractor={(item)=> item.id.toString()}
              renderItem={({item})=>{
                return(
                  <TouchableOpacity onPress={()=>this.clickSport(item.region,item.nom,item.lieu,item.id,item.campus,item.imageName)} style={{height:70,width:width,borderTopWidth:1,borderColor:'#e4e4e4',flexDirection:'row'}}>
                    <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
                        
                            <Image style={{height:30,width:30,resizeMode:'contain'}} source={this.urlImage(item.imageName)}/>
                        
                    </View>
                    <View style={{flex:10,flexDirection:'column',marginLeft:10,justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:19}}>{item.nom}</Text>
                        <Text style={{color:'grey',fontSize:16}}>{item.description}</Text>
                    </View>
                  </TouchableOpacity>
               )
              }}
             />}
          </Tab>

        </Tabs>
      </Animated.View>
          
      </Container>
    )
  }
}

{/* <Overlay
        style={{zIndex:-1}}
        image={require('../../../../../../../../../Images/TestPlan.png')}
        bounds={gif}
        /> */}
      
      {/* <Overlay
      image={require('../../../../../../../../../Images/planCS2.png')}
      bounds={[
        [48.710023, 2.160917],
        [48.707574, 2.166347]
      ]}
      /> */}


      {/* <View style={{flex:7,flexDirection:'row'}}>
            <View style={{flex:1,justifyContent:'flex-end'}}>
              <TouchableOpacity style={{borderColor:'white',borderWidth:1,justifyContent:'center',alignItems:'center',height:30,borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                <Text style={{color:'white'}}>Campus CS</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1,justifyContent:'flex-end'}}>
              <TouchableOpacity style={{borderColor:'white',borderWidth:1,justifyContent:'center',alignItems:'center',height:30}}>
                <Text style={{color:'white'}}>Campus X</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1,justifyContent:'flex-end'}}>
              <TouchableOpacity style={{borderColor:'white',borderWidth:1,justifyContent:'center',alignItems:'center',height:30,borderBottomRightRadius:5,borderTopRightRadius:5}}>
                <Text style={{color:'white'}}>Orsay</Text>
              </TouchableOpacity>
            </View> */}