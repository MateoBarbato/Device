import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";

import { MapPreview } from "../../components";
import { styles } from "./styles";

const PlaceDetail = ({ navigation, route }) => {
  const { placeId } = route.params;
  const place = useSelector((state) =>
    state.place.places.find((placeItem) => placeItem.id === placeId)
  );
  console.log(place)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerImg}> 
      <Image source={{ uri: place.image }} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text styles={styles.titleBanner}>Dive Site Title:</Text>
        <Text styles={styles.title}>{place.title.toUpperCase()}</Text>
        </View>
      </View>
      <View style={styles.content}>
          <View style={styles.addressContainer}>
            <MapPreview style={styles.map} location={{ lat: place.coords.lat, lng: place.coords.lng }}>
              <Text>Location it not available</Text>
            </MapPreview>
            <Text style={styles.address}>{place.address}Yo</Text>
          </View>
        <View style={styles.containerDesc}>
          <Text styles={styles.titleBanner}>Description:</Text>
          <Text style={styles.description}>
            {place.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;