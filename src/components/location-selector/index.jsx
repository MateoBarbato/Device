import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { useNavigation , useRoute } from "@react-navigation/native";
import colors from "../../utils/colors";
import MapPreview from "../map-preview";
import { styles } from "./styles";

const LocationSelector = ({ onLocation }) => {
  const navigation = useNavigation()
  const route = useRoute();
  const [pickedLocation, setPickedLocation] = useState(null);
  const {mapLocation} = route.params || {}


  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("you need to grant location permissions to use this app", [{ text: "Okay" }]);
      return false;
    }
    return true;
  };


  const onHandlerLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000}); 
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  
  const onHandlerPickMap = () => {
    const hasPermission = verifyPermissions();
    if(!hasPermission) return ;
    
    navigation.navigate('Maps')

  }

  useEffect(()=> {
    setPickedLocation(mapLocation);
    onLocation(mapLocation)
  },[mapLocation])

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>No location select yet.</Text>
      </MapPreview>
      <Button title="Get Location" color={colors.secondary} onPress={onHandlerLocation} />
      <Button title="Set Location" color={colors.secondary} onPress={onHandlerPickMap} />
    </View>
  );
};

export default LocationSelector;