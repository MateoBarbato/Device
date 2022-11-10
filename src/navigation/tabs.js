import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import  colors  from '../utils/colors'
import PlacesNavigator from './places'
import DiveSitesNavigator from './diveSites';

const BottomTap = createBottomTabNavigator();


const TabsNavigator = () => {
    return (
        <BottomTap.Navigator
            initialRouteName='Log Book'
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    // fontFamily:'Lato-Bold',
                    color:colors.black,
                }
            }}
        >
            <BottomTap.Screen
                name='Log Book'
                component={PlacesNavigator}
                options={{
                    title:'Log Book',
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                        name={focused ? 'home' : "home-outline" }
                        size={24} 
                        color={colors.primary}/>
                    )
                }}
            />
            <BottomTap.Screen
                name='Catalog'
                component={DiveSitesNavigator}
                options={{
                    title:'Dive Sites',
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                            name={focused ? 'file-tray-full' : 'file-tray-full-outline'}
                            size={22}
                            color={colors.primary}/>
                        )
                }}
            />
        </BottomTap.Navigator>
    )
}

export default TabsNavigator;