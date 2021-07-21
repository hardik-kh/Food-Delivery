import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions
} from "react-native";
import MapView, { PROVIDER_DEFAULT, Marker,Polyline } from 'react-native-maps';
import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../constants";
import MapViewDirections from "react-native-maps-directions";

const OrderDelivery = ({route , navigation}) => {
  const [restaurant, setRestaurant] = React.useState(null)
  const [streetName, setStreetName] = React.useState("")
  const [fromLocation, setFromLocation] = React.useState(null)
  const [toLocation, setToLocation] = React.useState(null)
  const [region, setRegion] = React.useState(null)

  const duration = 10;
  var fromLoc,toLoc;

  React.useEffect(() => {
    let { restaurant, currentLocation } = route.params;

     fromLoc = currentLocation.gps
     toLoc = restaurant.location
    let street = currentLocation.streetName

    let mapRegion = {
        latitude: (fromLoc.latitude + toLoc.latitude) / 2,
        longitude: (fromLoc.longitude + toLoc.longitude) / 2,
        latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
        longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
        
    }

    setRestaurant(restaurant)
    setStreetName(street)
    setFromLocation(fromLoc)
    setToLocation(toLoc)
    setRegion(mapRegion)

}, [])



    
    function renderMap(){
      const destinationMarker = () => (
        <Marker
            coordinate={fromLocation}
        >
            <View
                style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.white
                }}
            >
                <View
                    style={{
                        height: 30,
                        width: 30,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.primary
                    }}
                >
                    <Image
                        source={icons.pin}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}
                    />
                </View>
            </View>
        </Marker>
    )

    const carIcon = () => (
      <Marker
          coordinate={toLocation}
          anchor={{ x: 0.5, y: 0.5 }}
          flat={true}
      >
          <Image
              source={icons.car}
              style={{
                  width: 40,
                  height: 40
              }}
          />
      </Marker>
  )

        return(
    <View style={styles.container}>
      <MapView style={styles.map}
      provider={PROVIDER_DEFAULT}
      initialRegion={region}
      showsBuildings={true}
      showsIndoors={true}
      showsCompass={false}>


        {destinationMarker()}
        {carIcon()}

      </MapView>
    </View>
        )
    }

    function renderDestinationHeader() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    left: 0,
                    right: 0,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    <Image
                        source={icons.red_pin}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: SIZES.padding
                        }}
                    />

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontFamily:'serif',fontWeight:'bold',fontSize:16 }}>{streetName}</Text>
                    </View>

                    <Text style={{ fontFamily:'monospace',fontWeight:'bold' }}>{Math.ceil(duration)} mins</Text>
                </View>
            </View>
        )
    }

    function renderDeliveryInfo() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 50,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding * 3,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* Avatar */}
                        <Image
                            source={restaurant?.courier.avatar}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25
                            }}
                        />

                        <View style={{ flex: 1, marginLeft: SIZES.padding }}>
                            {/* Name & Rating */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight:'bold',fontSize:18 }}>{restaurant?.courier.name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={icons.star}
                                        style={{ width: 18, height: 18, tintColor: COLORS.primary, marginRight: SIZES.padding }}
                                    />
                                    <Text style={{ fontWeight:'bold' }}>{restaurant?.rating}</Text>
                                </View>
                            </View>

                            {/* Restaurant */}
                            <Text style={{ color: COLORS.darkgray, fontWeight:'bold' }}>{restaurant?.name}</Text>
                        </View>
                    </View>

                    {/* Buttons */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding * 2,
                            justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: 50,
                                marginRight: 10,
                                backgroundColor: "deepskyblue",
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                            onPress={() => navigation.navigate("Home")}
                        >
                            <Text style={{ fontWeight:'bold', color: COLORS.white }}>Call</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: 50,
                                backgroundColor: COLORS.secondary,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={{ fontWeight:'bold', color: COLORS.white }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }


    return(
        <View style={{flex:1}}>
            {renderMap()}
            {renderDestinationHeader()}
            {renderDeliveryInfo()}

        </View>
        
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default OrderDelivery;