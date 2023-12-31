import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomTabNavigator from './bottomTabNavigator';
import ListView from '../order/grocery/component/listView';
import Search from '../order/helper/search';
import GetLocation from '../region/component/getLocation';
import Map from '../region/component/map';
import Cart from '../order/cart/index';
import FullView from '../order/grocery/component/fullView'
const Stack = createStackNavigator();

function StackNavigator() {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,

        }}>

            <Stack.Screen name='Index' component={BottomTabNavigator} options={{
                title: false,
                headerShown: false
            }}
            />

            <Stack.Screen name="ListView" component={ListView} options={{
                headerTransparent: false,
                headerTitleStyle: {
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#5e5b54'
                },
                headerStyle: {
                    elevation: 0,
                },

            }}
            />

            <Stack.Screen name='FullView' component={FullView} options={{
                  headerShown: true,
                  title: false,
                  headerStyle: {
                      elevation: 0,
                  },
            }}
            />

            <Stack.Screen name="Search" component={Search} options={{
                headerShown: true,
                title: false,
                headerStyle: {
                    elevation: 0,
                },

            }}
            />
            <Stack.Screen name="Cart" component={Cart} options={{
                headerShown: true,
                title: 'Confirm order',
                headerTitleStyle: {
                    fontSize: 15,
                    fontWeight: '700',
                    color: '#5e5b54',
                },
                headerStyle: {
                    elevation: 0,
                    borderBottomWidth: 0.3
                },
            }}
            />
            <Stack.Screen name="GetLocation" component={GetLocation} options={{
                headerShown: true,
                title: false,
                headerStyle: {
                    elevation: 0,
                },
            }}
            />
            <Stack.Screen name="Map" component={Map} options={{
                headerShown: true,
                headerTransparent: true,
                title: false
            }}
            />
        </Stack.Navigator>
    )
};



export default StackNavigator;






