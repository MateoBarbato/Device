import { View, Text, ScrollView, Image} from "react-native";
import { MapPreview } from "../../components";
import { useSelector } from "react-redux";
import { styles } from "./styles";

const PlaceDetail = ({ navigation, route }) => {
  const { placeId } = route.params;
  const place = useSelector(state => 
    state.place.places.find((placeItem)=> placeItem.id === placeId))


  return (
    <ScrollView style={styles.container}>
      <Image source={{uri:place.image}} style={styles.image}/>
      <View style={styles.content}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview style={styles.map} location={{lat:place.coords.lat, lng:place.coords.lng}}/>
        <Text>Location its not available</Text>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;
