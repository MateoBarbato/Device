import { View, Text } from "react-native";
import MapView, {Marker} from "react-native-maps";
import { styles } from "./styles";
import { useState } from "react";

const Maps = ({ navigation }) => {
  const [selectedLocation,setSelectedLocation] = useState(null)

  const initialRegion = {
    latitude: 87.78,
    longitude: -152.43,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0921,
  };

  const handleSelectLocation = event => {
    setSelectedLocation ({
      lat : event.nativeEvent.coordinate.latitude,
      lng : event.nativeEvent.coordinate.longitude,
    })
  }

  return (
    <MapView style={styles.map} initialRegion={initialRegion} onPress={handleSelectLocation}>
      {selectedLocation && (
        <Marker
          title='Picked Location'
          coordinate={{
            latitude:selectedLocation.lat,
            longitude:selectedLocation.long
          }}
        />
      )}
    </MapView>
  )
}

export default Maps;
