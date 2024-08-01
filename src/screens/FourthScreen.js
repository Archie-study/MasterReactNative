import React from "react";
import { View, Text, ImageBackground, TextInput, ScrollView } from 'react-native'
import { InputComponent } from "../components/InputComponent";

const FourthScreen = () => {
    return (
        <ScrollView>
            <View style={{margin: 16}}>
                <ImageBackground 
                    style={{
                        width: '100%',
                        height: 300,
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start'
                    }}
                    imageStyle={{ borderRadius: 10, opacity: 0.5}}
                    source={{ uri: 'https://wallpaperaccess.com/full/250180.jpg'}}
                >
                    <Text 
                        style={{
                            backgroundColor:'mistyrose',
                            padding: 8,
                            margin: 8,
                            fontSize: 18,
                            fontWeight: 'bold'
                        }}
                    >
                        Disneyland
                    </Text>
                </ImageBackground>


                {/* DESCRIPTION */}
                <Text style={{ marginTop:12, marginBottom: 12}}>
                    Description
                </Text>

                <TextInput 
                    style={{
                        padding:10,
                        borderWidth: 1,
                        height: 140,
                        fontSize: 16
                    }}
                    placeholder="About the place"
                    multiline={true}
                    keyboardType="default"
                />



                {/* PHONE NUMBER */}
                <Text style={{ marginTop:12, marginBottom: 12}}>
                    Phone Number
                </Text>

                <TextInput 
                    style={{
                        padding:10,
                        borderWidth: 1,
                        height: 40,
                        fontSize: 16
                    }}
                    placeholder="Phone Number"
                    multiline={true}
                    keyboardType="phone-pad"
                />


                {/* LOCATION */}
                <InputComponent 
                    title="Location"
                    height={40}
                    placeholder="Location"
                    multiline={true}
                    keyboardType="default"
                />
            </View>
        </ScrollView>
    )
}

export default FourthScreen