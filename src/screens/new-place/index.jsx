import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { ImageSelector,LocationSelector } from "../../components";
import { savePlace } from "../../store/place.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewPlace = ({ navigation, route}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description,setDescription] = useState("")
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");



  const onHandleChangeText = (text) => {
    setTitle(text);
  };
  
  
  const onHandleChangeDesc = (text) => {
    setDescription(text);
  };

  const onHandleSubmit = () => {
    dispatch(savePlace(title, image, location, description));
   
    navigation.goBack();
  };

  const onHandlerImage = (imageUri) => {
    setImage(imageUri);
  };

  const onHandlerLocation = (location) => {
    setLocation(location);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="new location"
          onChangeText={onHandleChangeText}
          value={title}
        />
        <ImageSelector onImage={onHandlerImage} />
        <LocationSelector onLocation={onHandlerLocation} />
        <TextInput
          style={styles.description}
          placeholder="Fill a description about the dive and conditions..."
          onChangeText={onHandleChangeDesc}
          value={description}
          multiline={true}
          numberOfLines={6}
        />
        <Button title="Save Place" onPress={onHandleSubmit} color={colors.primary} />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
