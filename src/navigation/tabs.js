import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import  colors  from '../utils/colors'
import PlacesNavigator from './places'

const BottomTap = createBottomTabNavigator();


const TabsNavigator = () => {
    return (
        <BottomTap.Navigator
            initialRouteName='Dive Sites'
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    // fontFamily:'Lato-Bold',
                    color:colors.primary
                }
            }}
        >
            <BottomTap.Screen
                name='Dive Sites'
                component={PlacesNavigator}
                options={{
                    title:'Shop',
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                        name={focused ? 'home' : "home-outline" }
                        size={24} 
                        color={colors.primary}/>
                    )
                }}
            />
        </BottomTap.Navigator>
    )
}

export default TabsNavigator;