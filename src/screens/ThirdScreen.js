import React from "react";
import { View, Text } from 'react-native'

const ThirdScreen = () => {
    return (
        <View style={{backgroundColor:'mistyrose', flex: 1}}>
            <View style={{backgroundColor: 'red', flex: 1}}>
                <Text style={{color: 'white'}}>
                    Pikachu
                </Text>
            </View>


            <View style={{backgroundColor: 'orange', flex: 2}}>
                <Text>
                    Flareon
                </Text>
            </View>


            <View style={{backgroundColor: 'yellow', flex: 3}}>
                <Text>
                    Rapidash
                </Text>
            </View>
        </View>

    )
}

export default ThirdScreen;