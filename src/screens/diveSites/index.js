import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { styles } from "./styles";

const DiveSite = () => {

    const profundidad = '6m / 40m'
    const nivel = 'Easy / Medium'
    const title = 'La Palapa'
    const description = 'Bahia, tortugas, estructura metalica, peces globo, stingray'

    const onSelect = () => {
        console.log('hi')
    }

    return(
        <View style={styles.containerOrganicer}>
            <TouchableOpacity onPress={onSelect} style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.data}>
                    <Text>Profundidades: {profundidad}</Text>
                    <Text>Nivel: {nivel}</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}


export default DiveSite