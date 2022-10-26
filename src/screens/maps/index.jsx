import { View, Text, TouchableOpacity } from "react-native";
import MapView, {Marker} from "react-native-maps";
import { styles } from "./styles";
import { useState } from "react";
import { useLayoutEffect } from "react";
import Ionicons from '@expo/vector-icons/Ionicons'
import colors from "../../utils/colors";

const Maps = ({ navigation }) => {
  const [selectedLocation,setSelectedLocation] = useState(null)

  const initialRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleSelectLocation = event => {
    setSelectedLocation ({
      lat : event.nativeEvent.coordinate.latitude,
      lng : event.nativeEvent.coordinate.longitude,
    })
  }

  const onHandleSaveLocation = () => {
     if(selectedLocation) navigation.navigate('NewPlace', {mapLocation:selectedLocation})
  }

  useLayoutEffect( () => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onHandleSaveLocation}>
          <Ionicons name='md-save-sharp' size={24} color={colors.black}/>
        </TouchableOpacity>
      )
    })
  })

  return (
    <MapView style={styles.container} initialRegion={initialRegion} onPress={handleSelectLocation}>
      {selectedLocation && (
        <Marker
          title='Picked Location'
          coordinate={{
            latitude:selectedLocation.lat ? selectedLocation.lat : 0,
            longitude:selectedLocation.lng ? selectedLocation.lng : 0
          }}
        />
      )}
    </MapView>
  )
}

export default Maps;
