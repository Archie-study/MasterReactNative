import React from "react";
import { View, Text } from 'react-native'

const SecondScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lavender'}}>
            
            {/* Mobile Legends */}
            <View style={{
                backgroundColor: 'skyblue', 
                padding: 15, 
                margin: 10,
                borderWidth: 2,
                borderColor: 'red',
                borderStyle: 'dashed',
                borderRadius: 10
                }}>
                <Text style={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                    fontSize: 18

                }}>
                    Mobile Legends</Text>
            </View>
            <View style={{
                borderWidth: 3,
                borderStyle: 'solid',
                borderColor: 'black',
                backgroundColor: 'bisque',
                marginTop: 10,
                marginBottom: 20,
                marginLeft: 15,
                marginRight: 15,
                padding: 15
            }}>
                <Text style={{textAlign: 'center', color: 'black'}}>
                    <Text style={{fontWeight: 'bold'}}>Mobile Legends</Text> is a multiplayer online battle arena (MOBA) game. The <Text style={{color: 'red'}}>two opposing teams fight</Text> to reach and destroy the enemy's base while defending their own base for control of a path
                </Text>
            </View>

            <View>
                <Text style={{ fontSize: 24,fontWeight: 'bold', color: 'black'}}>VS.</Text>
            </View>

            {/* PUBG */}
            <View style={{
                backgroundColor: 'cornflowerblue', 
                paddingTop: 10, 
                paddingBottom: 10, 
                paddingLeft: 20, 
                paddingRight: 20, 
                margin: 10,
                borderWidth: 2  ,
                borderColor: 'red',
                borderStyle: 'dotted',
                borderRadius: 10
                }}>
                <Text style={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                    fontSize: 18,
                    color: 'white'
                }}>PUBG</Text>
            </View>
            <View style={{
                borderWidth: 3,
                borderStyle: 'solid',
                borderColor: 'black',
                backgroundColor: '#FAEBD7',
                marginTop: 10,
                marginBottom: 20,
                marginLeft: 15,
                marginRight: 15,
                padding: 15
            }}>
                <Text style={{textAlign: 'center', color: 'black'}}>
                    <Text style={{fontWeight:'bold'}}>Player Unknown's Battle Grounds,</Text> better known as PUBG, is a multiplayer battle royale game in which <Text style={{color: 'green'}}>players drop onto an island</Text> and <Text style={{color:'blue'}}>fight to be the last one left standing.</Text>
                </Text>
            </View>
        </View>
    )
}

export default SecondScreen