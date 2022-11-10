import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    minHeight:500,
  }, 
  containerImg:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:5,

  },
  containerDesc:{
    borderRadius: 10,
    padding:10,
    paddingVertical:25,
  },
  description:{
    borderColor:colors.secondary,
    borderWidth:1,
    borderRadius:5,
    minHeight:250,
    padding:15,
    marginTop:10,
  },
  titleContainer:{
    width:'50%',
  },
  title:{
    color:colors.black,
    fontSize:20,
  },
  titleBanner:{
    color:colors.black,
    fontWeight:'bold',
    fontSize:30,
    textAlign:'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius:45,
    marginLeft:10,
    marginTop:10
  },
  content: {
    flex:1,
    flexDirection:'column',
    minHeight:700,
    justifyContent:'center',
  },
  addressContainer: {
    padding: 15,
  },
  address: {
    color: colors.primary,
    textAlign: "center",
  },
  map: {
    height:250,
    width:'100%',
    marginBottom:20,
  },
});