import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import {LocationSelector } from "../../components";
import {saveSite } from "../../store/diveSite.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";


const NewDiveSite = ({ navigation, route}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description,setDescription] = useState("")
  const [location, setLocation] = useState("");
  const [depth,setDepth]= useState('')
  const [difficulty,setDifficulty]= useState('')


  const onHandleChangeText = (text) => {
    setTitle(text);
  };
  
  
  const onHandleChangeDesc = (text) => {
    setDescription(text);
  };

  const onHandleSubmit = () => {
    dispatch(saveSite(title,description,location,depth,difficulty))
   
    navigation.goBack();
  };

  const onHandlerLocation = (location) => {
    setLocation(location);
  };

  const onHandleReferenceDepth = (text) => {
    setDepth(text)
  }

  const onHandleReferenceDiffiiculty = (text)=> {
    setDifficulty(text)
  }

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
        <LocationSelector onLocation={onHandlerLocation} />
        <TextInput
          style={styles.description}
          placeholder="Fill a description about the dive and conditions..."
          onChangeText={onHandleChangeDesc}
          value={description}
          multiline={true}
          numberOfLines={6}
        />
        <View style={styles.referencebox}>
          <TextInput 
          style={styles.referencetext}
          placeholder='Depth'
          onChangeText={onHandleReferenceDepth}
          value={depth}
          keyboardType='numeric'
          maxLength={10}
           />
          <TextInput 
          style={styles.referencetext}
          placeholder='Difficulty'
          onChangeText={onHandleReferenceDiffiiculty}
          value={difficulty}
           />
          
        </View>
        <Button title="Save Place" onPress={onHandleSubmit} color={colors.primary} />
      </View>
    </ScrollView>
    );
  };
  
  export default NewDiveSite;
  