import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container: { 
        flex:1,
        backgroundColor: colors.secondary,
        padding: 10,
        height:'25%',
        alignItems:"flex-start",
        borderRadius:8,
        width:'96%',
        marginHorizontal:10,
        marginVertical:15,
    },
    text:{
        fontSize:16,
        marginVertical:5,
        fontWeight:'400',
    },
    title:{
        fontSize:18,
        fontWeight:"bold"
    },
    info: {
        justifyContent: 'center',
    },
    data:{
        flex:1,
        width:'100%',
        marginVertical:10,
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        borderRadius:40,
        justifyContent:'space-around',
        backgroundColor:colors.iceberg
    },
});