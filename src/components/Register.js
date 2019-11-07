import React, { Component} from 'react'
import {View, Text,TextInput, Image, TouchableOpacity, Alert} from 'react-native'
import styles from "../styles/styles";
export default class Register extends Component {
     constructor (props) {
    super (props)
    this.state = {
      email : "",
      username : "",
      password : "",
      confirmPassword : ""
    }
  }
    goToPage = (page) => {
       

      if(this.state.email && this.state.password && this.state.username && this.state.confirmPassword)
      {
        if ( !service.validateEmail(this.state.email)) {
          Alert.alert("please enter valid email")
        } 
        else if ( this.state.password != this.state.confirmPassword) {
          Alert.alert("password and confirmpassword do not match")
        } 
        else
        {
         this.props.navigation.navigate(page)
        }
         
      }

      else
      {
        if(!this.state.email && !this.state.password && !this.state.username && !this.state.confirmPassword) {
             Alert.alert("please enter all details")
        }
       else  if(!this.state.email )
        {
            Alert.alert("please enter email")
        }
         else if(!this.state.password )
        {
            Alert.alert("please enter password")
        }
        else  if(!this.state.username )
        {
            Alert.alert("please enter email")
        }
         else if(!this.state.confirmPassword )
        {
            Alert.alert("please enter confirm password")
        }
       
      }
        
    }
render () { 
return (<View style={styles.container}>
      <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
    <View style={{marginTop:10}}>
    <TextInput style={styles.input} placeholder="Email" onChangeText={(text)=>this.setState({ email:text})} placeholderTextColor = "black"></TextInput>
    <TextInput style={styles.input} placeholder="User Name" onChangeText={(text)=>this.setState({ username:text})} placeholderTextColor = "black"></TextInput>
    <TextInput style={styles.input} placeholder="Password" onChangeText={(text)=>this.setState({ password:text})} placeholderTextColor = "black" secureTextEntry={true}></TextInput>
    <TextInput style={styles.input} placeholder="Confirm Password" onChangeText={(text)=>this.setState({ confirmPassword:text})} placeholderTextColor = "black" secureTextEntry={true}></TextInput>
    <TouchableOpacity style={styles.buttonBackground} onPress={this.goToPage.bind(this, 'Home2')}>
        <Text  style={styles.welcomeLoginText}>SignUp</Text>
        </TouchableOpacity>
        
        </View></View>)} 
      
}