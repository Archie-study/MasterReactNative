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
                <Text>Mobile Legends</Text>
            </View>

            {/* PUBG */}
            <View style={{
                backgroundColor: 'cornflowerblue', 
                paddingTop: 10, 
                paddingBottom: 10, 
                paddingLeft: 20, 
                paddingRight: 20, 
                margin: 10,
                borderWidth: 2,
                borderColor: 'red',
                borderStyle: 'dotted',
                borderRadius: 10
                }}>
                <Text>PUBG</Text>
            </View>
        </View>
    )
}

export default SecondScreen