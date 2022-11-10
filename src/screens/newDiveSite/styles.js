import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
    
  },
  description:{
    flex:1,
    borderColor: colors.primary,
    borderWidth: 1,
    marginVertical:20,
    padding: 10,
    textAlignVertical:'top',
    height:200,
    fontSize:15,
    borderRadius:5,
  },
  referencebox:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    borderColor: colors.primary,
    borderWidth: 1,
    justifyContent:'space-evenly',
    marginVertical:20,
    minHeight:180,
    borderRadius:5,
    
  },
  referencetext:{
    borderColor: colors.primary,
    borderWidth: 1,
    width:'65%',
    padding:5,
    borderRadius:10,
  },

});
