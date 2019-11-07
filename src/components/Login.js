import React, { Component} from 'react'
import {View, Text, Image,TextInput, Alert, TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import Service from "../services/Service";
import { LoginManager,   AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
export default class Login extends Component {

     constructor (props) {
    super (props)
    this.state = {
      email : "",
      password : "",
      loading: false
    }
    service = new Service()
  }
  componentDidMount = () => {
    GoogleSignin.configure({
      scopes: ['openid', 'email', 'profile'],
      shouldFetchBasicProfile: true,// what API you want to access on behalf of the user, default is email and profile
      webClientId: '1012229639116-h85hqugmo9iaunhk5o1pla9t7p5b5lcn.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
    this.setState({loading : true})
    setTimeout (() => this.setState({loading : false }), 2000)
  }
    goToPage = (page) => {
      if(this.state.email && this.state.password)
      {
        if (!service.validateEmail(this.state.email)) {
          Alert.alert("please enter valid email")
        } 
        else
        {
         this.props.navigation.navigate(page)
        }
      }
      else
      {
        if(!this.state.email  && !this.state.password ) {
             Alert.alert("please enter email & password both")
        }
       else  if(!this.state.email )
        {
            Alert.alert("please enter email")
        }
         else if(!this.state.password )
        {
            Alert.alert("please enter password")
        }
      }
       
    }


    signIn = async () => {
      try {
      //  await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
      alert(JSON.stringify(userInfo))
      } catch (error) {
        console.log(error, 'err')
        // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //   // user cancelled the login flow
        // } else if (error.code === statusCodes.IN_PROGRESS) {
        //   // operation (e.g. sign in) is in progress already
        // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //   // play services not available or outdated
        // } else {
        //   // some other error happened
        // }
      }
    };

    LoginFacebook = () => {
      // Alert.alert("Logging With Facebook")
      LoginManager.logInWithPermissions(["public_profile", "email"]).then(
        result => {
          console.log(result, 'res')
          if (result.isCancelled) {
            console.log("Login cancelled");
          } else {
            console.log(
              "Login success with permissions: " +
                result.grantedPermissions.toString()
            );
            AccessToken.getCurrentAccessToken().then(
              (data) => {
                    this.getUserProfile(data.accessToken);
            });
           
          }
        },
        error => {
          console.log("Login fail with error: " + error);
        }
      );
    }

    LoginGuest = () => {
      this.props.navigation.navigate("Home2")
    }
    LoginGoogle = () => {
      Alert.alert("Logging With Google")
    }

    getUserProfile = (token) =>{ 
      fetch('https://graph.facebook.com/v2.9/me?fields=picture.width(720).height(720).as(picture_large),name,email,friends&access_token=' + token)
      .then((response) => response.json())
      .then((json) => {
        console.log(json, 'shjshhshs')
        // service.saveUserData('user', json);
        // this.props.navigation.navigate('Home')
      })
      .catch((err) => {
      //  alert(JSON.stringify(err))
      })
     
  }
render () { 
return (<View style={styles.container}>
    <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
   
    <TextInput value={this.state.email} onChangeText={(text)=>this.setState({ email:text})} style={styles.input} placeholder="Email"  placeholderTextColor = "black"></TextInput>
    <TextInput value={this.state.password} style={styles.input} onChangeText={(text)=>this.setState({ password:text})} placeholder="Password"  placeholderTextColor = "black" secureTextEntry={true}></TextInput>
     <TouchableOpacity style={styles.buttonBackground} onPress={this.goToPage.bind(this, 'Home2')}>
        <Text  style={styles.welcomeLoginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle2}>OR</Text>
        <TouchableOpacity style={styles.buttonBackgroundfb}  onPress={this.LoginFacebook.bind(this)}>
        <Text style={styles.textWhite}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackgroundgplus} onPress={() => this.signIn()}>
        <Text style={styles.textWhite} >Google</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle2}>OR</Text>
        <TouchableOpacity style={styles.buttonBackgroundGuest}  onPress={this.LoginGuest.bind(this, 'Home2')}>
        <Text style={styles.textWhite}>Login As Guest</Text>
        </TouchableOpacity>
        </View>)} 
      
}