import React, { useEffect } from "react";
import { View,Text, FlatList } from "react-native";
import DiveSiteItem from "../../components/diveSite-item";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const DiveSite = () => {
    const sites = useSelector((state) => state.sites.sites)

  // useEffect(() => {
  //   dispatch
  // })

    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
          <Text style={styles.empty}>No places yet</Text>
        </View>
      );
    const renderItem = ({ item }) => (
        <DiveSiteItem
          {...item}
          onSelect={console.log('hi')}
        />
      );

      

    return(
            <FlatList 
            data={sites}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={ListEmptyComponent}
            />
    )
}


export default DiveSite