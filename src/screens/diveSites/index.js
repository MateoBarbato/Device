import React, { useEffect, useState } from "react";
import { View,Text, FlatList } from "react-native";
import DiveSiteItem from "../../components/diveSite-item";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getSites } from "../../store/diveSite.slice";
import {app} from '../../firebase/config';
// import { collection, getDocs,query } from "firebase/firestore"; 
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



const DiveSite = () => {

    const [sites,setSites]= useState('');

    const db = getFirestore(app);

    async function getCities(db) {
      const siteCol = collection(db, 'sites');
      const siteSnapshot = await getDocs(siteCol);
      const siteslist = siteSnapshot.docs.map(doc => doc.data());
      setSites(siteslist)
    }

    useEffect(() => {
      getCities(db)
      
    },[sites]);
 

    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
          <Text style={styles.empty}>No places yet</Text>
        </View>
      );
    const renderItem = ({ item }) => (
        <DiveSiteItem
          {...item}
        />
      );

    return(
            <FlatList 
            data={sites}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={ListEmptyComponent}
            />
    )
}


export default DiveSite