import React from 'react'
import { View } from 'react-native';
import HomeRoutes from './home/routes/stackNavigator';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './signin/routes';
import AsyncStorage from '@react-native-community/async-storage'
import { AuthContext } from './authContext'
import jwt_decode from 'jwt-decode';


const Stack = createStackNavigator();

export default function StackNavigator() {

    const [state, dispatch] = React.useReducer(

        (prevState, action) => {
            switch (action.type) {
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isUser: true,
                        isLoading: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isUser: false,
                        isLoading: false,
                        userToken: null,
                    };
                }
            },
        {
            isLoading: true,
            isUser: false,
            userToken: null,
        }
    );

    const authContext = React.useMemo(
        () => ({
            signIn: async data => {
                await AsyncStorage.setItem('token', data).then((token) => {
                    dispatch({ type: 'SIGN_IN', token: token });
                })
            },
            signOut: async () => {
                try {
                    await AsyncStorage.removeItem('token').then(() => {
                        dispatch({ type: 'SIGN_OUT' })
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        []
    );


    function isTokenExpired(token) {

        if (token !== null) {
            let decoded = jwt_decode(token)
            decoded = decoded.exp - 7200;
            return decoded <= (Date.now() / 1000) ? null : token
        }
        else {
            return null;
        }
    }


    React.useEffect(() => {

        const bootstrapAsync = async () => {
            try {
                let token = await AsyncStorage.getItem('token');
                let checkTokenValidity = await isTokenExpired(token);
                if (token !== null && checkTokenValidity !== null) {

                    return dispatch({ type: 'SIGN_IN', token: token });
                }
                else {
                    return dispatch({ type: 'SIGN_OUT' })
                }
            }
            catch (e) {
                console.log(e)
            }
        }
        bootstrapAsync();
    }, [])
    

    return (
        state.isLoading ?
            <View style={{ flex: 1, backgroundColor: '#e91e63' }}></View>
            :
            <AuthContext.Provider value={authContext}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        {!state.isUser && state.userToken === null ?
                            (
                                <Stack.Screen name='Signin' component={Signin} />
                            ) : (
                                <Stack.Screen name='HomeRoutes' component={HomeRoutes} />
                            )
                        }
                    </Stack.Navigator>
                </NavigationContainer>
            </AuthContext.Provider>
    )
};









