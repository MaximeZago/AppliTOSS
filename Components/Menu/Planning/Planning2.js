import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import {Container,Content,Right,Left,Icon,Header,Title,Body,Button,Form,Item,Label,Input,CardItem} from 'native-base'
import BarreMenu from '../../../Navigation/BarreMenu'

const firebase = require("firebase");
require("firebase/firestore");

export default class Planning extends React.Component {

  

  constructor(props){
    super(props)
    this.state={
      pseudo:'',
      email:'',
      password:'',
      connected:false
    }
  }

  checkConnection(){
    var user = firebase.auth().currentUser
      if (user !=null){
        
        this.setState({connected:true})
      }
      else{

        this.setState({connected:false})
      }
    
   
    
  }

  componentDidMount(){
    this.checkConnection()
  }

  signUpUser = (email,password)=>{
    try{
      if(this.state.password.length<6){
        alert('Entrez un mot de passe plus long')
        return
      }
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch((error)=>{alert(error.toString())})
      .then(()=>{
        var user = firebase.auth().currentUser
        user.updateProfile({
          displayName: this.state.pseudo,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
      }).then(()=>{alert('Inscirption réussie')})
      .catch((error)=>{console.log(error)})

    }
    catch(error){
      console.log(error.toString()) 
    }
    
  }

  logInUser = (email,password)=>{
    
    try{
      
      firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{this.checkConnection()})
      .catch((error)=>{alert(error.toString())})


    }
    catch(error){
      console.log(error.toString())
    }
    
  }

  logOut(){
    firebase.auth().signOut().then(()=>{this.checkConnection()}).catch((error)=>{console.log(error)})
    
  }

  test(){
    var user = firebase.auth().currentUser
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;
    } 
    console.log(name,email,photoUrl,emailVerified,uid)
  }

  render(){
    
    var user = firebase.auth().currentUser
    var name

    if (user !=null){
      name=user.displayName
    }
    
    if (this.state.connected){
      return(
        <View style={{flex:1,backgroundColor:'white'}}>
          <Header>
          <Left>
           <Icon style={{margin:10}} onPress={()=>this.props.navigation.openDrawer()}  name='menu'/>
          </Left>
          <Body>
            <Title> Accueil </Title>
          </Body>
          <Right/>
        </Header>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Bienvenue {name}</Text>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Fichiers')}}
            style={{marginTop:30,backgroundColor:'#e7e7e7',marginHorizontal:10,flexDirection:'row',height:40,borderRadius:20}}>
              <Left>
                <Text style={{fontWeight:'bold',marginLeft:15}}>Mes fichiers</Text>
              </Left> 
              <Right>
                <Icon style={{color:'black',marginRight:10}} name="arrow-forward"/>
              </Right>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:15,backgroundColor:'#e7e7e7',marginHorizontal:10,flexDirection:'row',height:40,borderRadius:20}}>
              <Left>
                <Text style={{fontWeight:'bold',marginLeft:15}}>Mes photos</Text>
              </Left> 
              <Right>
                <Icon style={{color:'black',marginRight:10}} name="arrow-forward"/>
              </Right>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:15,backgroundColor:'#e7e7e7',marginHorizontal:10,flexDirection:'row',height:40,borderRadius:20}}>
              <Left>
                <Text style={{fontWeight:'bold',marginLeft:15}}>Mes notes</Text>
              </Left> 
              <Right>
                <Icon style={{color:'black',marginRight:10}} name="arrow-forward"/>
              </Right>
            </TouchableOpacity>
          </View>
          <View style={{height:100}}>
            <Button style={{marginTop:20,marginHorizontal:40,backgroundColor:'#ddd0f5'}}
              full rounded onPress={()=>this.logOut()}>
                <Text>Log Out</Text>
            </Button>
          </View>
          
        </View>
      )
    }
    else{
    return(
      <Container>
        <Header>
          <Left>
           <Icon style={{margin:10}} onPress={()=>this.props.navigation.openDrawer()}  name='menu'/>
          </Left>
          <Body>
            <Title> Planning </Title>
          </Body>
          <Right/>
        </Header>
        <View style={{flex:1}}>
          <Form style={{marginTop:40}}>
            <Item floatingLabel>
                <Label>Pseudo</Label>
                <Input
                onChangeText={(pseudo)=>this.setState({pseudo})}
                autoCorrect={false}
                autoCapitalize="none"/>
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
              onChangeText={(email)=>this.setState({email})}
              autoCorrect={false}
              autoCapitalize="none"/>
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
              onChangeText={(password)=>this.setState({password})}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"/>
            </Item>
            <Button style={{marginTop:20,marginHorizontal:10,backgroundColor:'#ddd0f5'}}
            full rounded onPress={()=>this.logInUser(this.state.email,this.state.password)}>
              <Text>Login</Text>
            </Button>
            <Button style={{marginTop:20,marginHorizontal:10,backgroundColor:'#ddd0f5'}}
            full rounded primary onPress={()=>this.signUpUser(this.state.email,this.state.password)}>
              <Text>Sign up</Text>
            </Button>
            <Button style={{marginTop:20,marginHorizontal:10,backgroundColor:'#ddd0f5'}}
            full rounded primary onPress={()=>{console.log(firebase.apps.length)}}>
              <Text>Test</Text>
            </Button>
            {/* <Button style={{marginTop:20,marginHorizontal:10}}
            full rounded primary onPress={()=>this.logOut()}>
              <Text>Log Out</Text>
            </Button>
            <Button style={{marginTop:20,marginHorizontal:10}}
            full rounded primary onPress={()=>this.test()}>
              <Text>Test</Text>
            </Button> */}
          </Form>
        </View>
      </Container>
    )
    }
  }
}
