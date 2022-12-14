
import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

const DiveSiteItem = ({title,description,depth,difficulty,onSelect}) => {
    
  return ( 
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{description}</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.text}>Profundidades: {depth}</Text>
                    <Text style={styles.text}>Nivel: {difficulty}</Text>
                </View>
            </View>
  );
};

export default DiveSiteItem;
