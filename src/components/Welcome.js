import React, { Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import MapView from 'react-native-maps'
import Loader from './Loader';
import { strings } from './i18n';
import I18n from 'react-native-i18n';
export default class Welcome extends Component {
    constructor (props) {
        super (props)
        this.state = {
          email : "",
          password : "",
          loading: false,
          currentLanguage: 'hi'
        }
       
      }
    goToPage = (page) => {
        this.props.navigation.navigate(page)
    }
    componentDidMount = () => {
        // this.setState({loading : true})
        // setTimeout (() => this.setState({loading : false }), 2000)
      }
render () { 
  I18n.locale = this.state.currentLanguage;
  I18n.fallbacks = true;
return (<View style={styles.container}>
    <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
    <Text style={styles.textStyle}>for creative kids</Text>
    <Text style={styles.welcomeTextStyle}>Welcome To Your School Finding APP</Text>
     <TouchableOpacity style={styles.buttonBackground} onPress={this.goToPage.bind(this, 'Login')}>
        <Text   style={styles.welcomeLoginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackgroundSignUp} onPress={this.goToPage.bind(this, 'Register')}>
        <Text >Sign Up</Text>
        </TouchableOpacity>
        <Loader
          loading={this.state.loading} /></View>)} 
      
}