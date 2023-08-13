import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { AuthContext } from '../../../authContext';



export default function Index() {
    const {signOut} =React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <View style={styles.details}>
                    <Text style={styles.name}>SURYA</Text>
                    <Text style={styles.phonenumber}>8765432189</Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={()=>signOut()}>
                    <Text style={styles.editOption}>edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal: 10
    },
    header: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
    },
    details: {
         
    },
    editOption:{
        color:'#e91e63',
        fontSize:18,
        
    }



});
