import React,{useState,useEffect} from 'react';
import { StyleSheet, View,TextInput,FlatList,Text,TouchableOpacity, Alert,Platform,PermissionsAndroid,AppState,StatusBar,ImageBackground,useWindowDimensions,ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function Area({navigation}){
    const [city,setCity] = useState('');
    const [cities,setCities] = useState([]);
    const [location, setLocation] = useState(null);

    handleAppStateChange = nextAppState => {
        state={
          appState:AppState.currentState
        };
        if (
          this.state.appState.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('App has come to the foreground!');
          this._getLocationAsync();
        }
        this.setState({ appState: nextAppState });
      };
    
    
      useEffect(() => {
          (async () => {
            if (Platform.OS === 'android' && !Constants.isDevice) {
              setErrorMsg(
                'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
              );
              return;
            }
            try{
              let { status } = await Location.requestForegroundPermissionsAsync();
              if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
              }
        
              let location = await Location.getCurrentPositionAsync({});
              setLocation(location);
      
            }
            catch{
              console.log("error");
            }
      
          })();
        }, []);

        const clickHandler= ()=> {
  
          if (location) {
            console.log(JSON.stringify(location.coords.latitude));
            console.log(JSON.stringify(location.coords.longitude));
            const latitude = JSON.stringify(location.coords.latitude);
            const longitude=JSON.stringify(location.coords.longitude);
            axios.get("https://api.weatherbit.io/v2.0/forecast/daily?&lat="+latitude+"&lon="+longitude+"&key=c8a42097ee0148de82b6fe4c5e85b6b5")
            .then(info =>{
              const city = info.data.city_name;
              setCity('');
              setCities('');
              console.log(city,latitude,longitude);
              //navigation.navigate('Home',{city: city,latitude: latitude,longitude: longitude});
              navigation.navigate('Home', {
                screen: 'Home',
                params: { city: city,latitude: latitude,longitude: longitude },
              });
          })
        }
        else{
            const granted = PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: "Alert!",
                message:
                  "Please allow this app to use your Location", 
                buttonNegative: "Cancel",
                buttonPositive: "OK"
              }
            );
            AppState.addEventListener('change',this.handleAppStateChange)
            
  
        }
      }

    const fetchCities=(val)=>{
        setCity(val);
        if(val.length==0){
            val=val;
        }
        else{
            axios.get("https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query="+val+"&locationType=city&format=json")
            .then(data=>{
                setCities(data.data.location.address.slice(0,7))
                })
            .catch(error=>{
                setCity('');
                setCities('');
                Alert.alert('OOPS!','Something Went Wrong',[
                    {text:'OK',onPress:()=> console.log('error')}
                ])
                
            })

        }
    }

    const pressHandler = (item)=>{
      const length =item.split(',').length;
      const city = item.split(',')[0];
      const state = item.split(',')[length-1];
      axios.get("https://api.weatherbit.io/v2.0/forecast/daily?city="+city+","+state+"&key=c8a42097ee0148de82b6fe4c5e85b6b5")
      .then(info =>{
        const latitude = info.data.lat;
        const longitude = info.data.lon;
        setCity('');
        setCities('');
        navigation.navigate('Home', {
          screen: 'Home',
          params: { city: city,latitude: latitude,longitude: longitude },
        });
      })
    }

    const {width:windowWidth, height:windowHeight} = useWindowDimensions();

    return(
      <ScrollView style={{flex:1}}>
                              <StatusBar barStyle='light-content'/>
                    <ImageBackground source={require('../assets/images/bg1.jpg')}
          style={{width:windowWidth,height:windowHeight}}>

          <View style={{alignItems:'center',flex:1}}>
            <TextInput
                style={styles.input}
                placeholder='Enter Location'
                value={city}
                onChangeText={(val) => fetchCities(val)} />

<TouchableOpacity onPress={() => clickHandler()}>
        <View style={styles.button}>
          <Text style={styles.text}>Use my Location</Text>

            </View>

        </TouchableOpacity>

<FlatList
            data={cities}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={() => pressHandler(item)}>
                    <Card 
                    style={{margin:2,padding:12,justifyContent:'center',alignItems: 'center',width:300,borderWidth:2,borderColor:'green'}}>
                        
                            <Text style={{fontWeight:'bold',fontFamily:'monospace',textAlign:'center'}}>{item}</Text>
                        
                    </Card>
                    </TouchableOpacity>

                )
            }}
            keyExtractor={item=>item}
        />

            </View>
          


            </ImageBackground>

        </ScrollView>


    )

}
const styles = StyleSheet.create({

    input:{
        marginTop: '30%',
        marginBottom:'2%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding:10,
        borderWidth:1,
        borderColor:'#777',
        width:300,
        borderRadius:15,
        color:'black',
        backgroundColor:'white',
        textShadowColor:'black'
    },
    button:{
        marginTop:'5%',
        marginBottom:'5%',
        borderRadius:8,
        backgroundColor:'deepskyblue',
        paddingVertical:12,
        paddingHorizontal:16
    },
    text:{
      color:'white',
      fontWeight:'bold',
      fontSize:16,
      textTransform:'uppercase'
    }
});


