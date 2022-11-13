import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import colors from "../../utils/colors";
import { styles } from "./styles";
import {app} from '../../firebase/config'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc } from "firebase/firestore"; 
import uuid from 'react-native-uuid';



const NewDiveSite = ({ navigation}) => {
  const [title, setTitle] = useState("");
  const [description,setDescription] = useState("")
  const [depth,setDepth]= useState('')
  const [difficulty,setDifficulty]= useState('')

  const db = getFirestore(app);


  async function setSite (data) {
    const docRef = await addDoc(collection(db, "sites"), data);

  }
 
  

  const onHandleChangeText = (text) => {
    setTitle(text);
  };
  
  
  const onHandleChangeDesc = (text) => {
    setDescription(text);
  };

  const onHandleSubmit = () => {
      setSite({
        id:uuid.v4(),
        title,
        description,
        depth,
        difficulty

      })
    navigation.goBack();
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
  