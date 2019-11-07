import React, { Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import styles from "../styles/styles";

export default class Splash extends Component {

    constructor (props) {
      super (props)
      this.state = {
        listView : true,
        mapView : false, 
        longitude : "", 
        latitude : "",
        places : [1, 2, 3]
      }

    }
   
      componentDidMount = () => {
       setTimeout(() => 
       this.props.navigation.navigate('Welcome'), 2000)
      
      }
     
     
     
      
  render () { 
  return (<View style={styles.container}>
    <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')}></Image>
    <Text style={styles.splashTextFont}>Kindergarten & {"\n"} Schools </Text>
 </View>)} 
        
  }








