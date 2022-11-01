import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import  colors  from '../utils/colors'
import PlacesNavigator from './places'
import DiveSite from '../screens/diveSites';
import DiveSitesNavigator from './diveSites';

const BottomTap = createBottomTabNavigator();


const TabsNavigator = () => {
    return (
        <BottomTap.Navigator
            initialRouteName='Dive Sites'
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    // fontFamily:'Lato-Bold',
                    color:colors.black,
                }
            }}
        >
            <BottomTap.Screen
                name='Dive Sites'
                component={PlacesNavigator}
                options={{
                    title:'Dive Sites',
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                        name={focused ? 'home' : "home-outline" }
                        size={24} 
                        color={colors.primary}/>
                    )
                }}
            />
            <BottomTap.Screen
                name='Detail'
                component={DiveSitesNavigator}
                options={{
                    title:'Detail',
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