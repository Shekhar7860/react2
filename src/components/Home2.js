import React, { Component} from 'react'
import {View, Text, Image,TextInput,  TouchableOpacity, FlatList,  Modal, TouchableHighlight} from 'react-native'
import styles from "../styles/styles";
import {  Card, Divider, SearchBar, List, ListItem  } from 'react-native-elements';
import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Service from "../services/Service";

export default class Home2 extends Component {

  constructor (props) {
    super (props)
    this.state = {
      listView : true,
      mapView : false, 
      longitude : "", 
      latitude : "",
      places : [{heart : true},
        {heart : true},
        {heart : true},
        {heart : true},
        {heart : true},
        {heart : true}],
      modalVisible: false
      
    }
    service = new Service()
  }
    goToPage = (page) => {
        this.props.navigation.navigate(page)
    }

    makeItem = () => {
        return {
            heart : false
          };
    }
    checkItem = (object, index) => {
    console.log(object, 'hdhhdhd', index)
    if(object.heart == true ) {
       
  this.state.places[index].heart = false
  this.setState({
    places: [...this.state.places]
  });
    }
    
    else
    {
    this.state.places[index].heart = true
    this.setState({
        places: [...this.state.places]
      });
    }
}
    setView = (val) => {
      if(val == "list" ) {
        this.setState({mapView: false, listView: true}) 
      }else{
        this.setState({mapView: true, listView: false}) 
        }
      }
    componentDidMount = () => {
      console.log('im working')
     // Geolocation.requestAuthorization();
      this.getProfiles()
      // Geolocation.getCurrentPosition(info => this.sendLocation(info));
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('Position -> ',position);
          this.setState({latitude : position.coords.latitude, longitude : position.coords.longitude})
        },
        (error) => console.log(error, 'error')
        
    );
    }

   
    getCategoriesPlaces = () => {
      service.getCategories().then(res => {
        console.log("myres", res);
       
      });
    }
    getProfiles = () => {
      service.getProfiles().then(res => {
        console.log("new", res);
     //   this.setState({places : res.profileList})
      });
    }
   
    searchFilterFunction = text => {
      this.setState({
         value: text,
       });
   
      
     }

     toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
    
render () { 
return (<View style={styles.container}>
    
   
    <View style={{marginTop:10}}>
       <FlatList
  data={this.state.places}
  numColumns={2}
  renderItem={({item, index}) =>
  <View style={styles.row}>
    <View style={styles.imageDimension2}>
  
     <Image  style={styles.imageWidthList2} source={require('../images/food.jpg')} ></Image>
     <TouchableOpacity  style={styles.float} onPress = {this.checkItem.bind(this, item, index)}>
     {this.state.places[index].heart ? <Image  style={styles.icon2} source={require('../images/like.png')} ></Image> : <Image  style={styles.icon2} source={require('../images/unlike.png')} ></Image>} 
     </TouchableOpacity>
     <Text style={styles.homeTextStyle}>
     Gaspar Braserie 
    </Text>
<Text style={styles.homeTextStyle2}>San FranscisCo, CA</Text>
<View style={{alignItems:'flex-start'}}>
<Stars
        default={2.5}
        count={5}
        half={true}
        fullStar={<Icon name={'star'} size={22} style={[styles.myStarStyle]}/>}
        emptyStar={<Icon name={'star-outline'} size={22}style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
        halfStar={<Icon name={'star-half'} size={22} style={[styles.myStarStyle]}/>}
      />
      </View>
      </View>
    
    
     
       </View>
  
  }
  
/> 
</View>
     
    
    
  
 

     
  
      
    </View>)} 
      
}