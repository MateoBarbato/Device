
import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

const DiveSiteItem = ({title,location,description,depth,difficulty,onSelect}) => {
    
  return ( 
            <TouchableOpacity onPress={onSelect} style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.data}>
                    <Text>Profundidades: {depth}</Text>
                    <Text>Nivel: {difficulty}</Text>
                </View>
            </TouchableOpacity>
  );
};

export default DiveSiteItem;
