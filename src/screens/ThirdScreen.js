import React from "react";
import { View, Text, Image } from 'react-native'

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

const AddImage = () => {
    return (
        <View>
            <View style={{ margin: 8, padding: 8 }}>
                <Image style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'aliceblue'
                }} 
                source={require('../../assets/images/pikachu.png')}
                />
            </View>
        </View>
    )
}

export default AddImage;