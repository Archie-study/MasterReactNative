import React from "react";
import { View, Text, ImageBackground, TextInput, ScrollView, Image } from 'react-native'
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
                {/* <Text style={{ marginTop:12, marginBottom: 12}}>
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
                /> */}
                <InputComponent 
                    title="Description"
                    height={140}
                    placeholder="About The Place"
                    multiline={true}
                    keyboardType="default"
                />



                {/* PHONE NUMBER */}
                {/* <Text style={{ marginTop:12, marginBottom: 12}}>
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
                /> */}
                <InputComponent 
                    title="Phone Number"
                    height={40}
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

const ChallengeScreenM4 = () => {
    return (
        <View style={{ flex: 1}}>
            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: 'center'
                }}
                imageStyle={{opacity:0.2}}
                source={{uri:'https://i.pinimg.com/736x/e4/28/c5/e428c5f6e045bcf567fa4267f7985076.jpg'}}
            >
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 18,
                        backgroundColor: 'beige',
                        padding: 16,
                        margin:16,
                        color:'black'
                    }}>
                        Colosseum
                    </Text>
                </View>
                <View style={{ margin: 8, padding:8}}>
                    <InputComponent 
                        title="Description"
                        height={140}
                        placeholder="About the place"
                        multiline={true}
                        keyboardType="default"
                    />
                    <InputComponent 
                    title="Phone Number"
                    height={40}
                    placeholder="Phone Number"
                    multiline={false}
                    keyboardType="phone-pad"
                    />

                    <InputComponent 
                        title="Location"
                        height={40}
                        placeholder="Location"
                        multiline={true}
                        keyboardType="default"
                    />
                </View>
            </ImageBackground>
        </View>
        
    )

}

export default ChallengeScreenM4


