import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'

const SecondScreen = () => {
    const openAlert = (game) => {
        if(game === 'mobileLegends'){
            alert('You choose Mobile Legends!')
        } else if(game === 'pubg'){
            alert('You choose PUBG!')
        }
    };

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
                <TouchableOpacity 
                    style={{
                        backgroundColor: 'white',
                        padding: 8,
                        margin: 8,
                        borderRadius: 50,
                        borderWidth: 2
                    }}
                    onPress={ () => openAlert('mobileLegends')}
                >
                    <Text style={{color:'lightcoral'}}>
                        Mobile Legends Button
                    </Text>
                </TouchableOpacity>
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
            <View>
                <TouchableOpacity 
                    style={{
                        backgroundColor: 'white',
                        padding: 8,
                        margin: 8,
                        borderRadius: 50,
                        borderWidth: 2
                    }}
                    onPress={ () => openAlert('pubg')}
                >
                    <Text style={{color:'lightcoral'}}>
                        PUBG Button
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ChallengeScreenM2 = () => {
    const showAlert = (system) => {
        if(system === 'ios'){
            alert('You choose iOS')
        } else if(system === 'android'){
            alert('You choose Android!')
        }
    };
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>

            {/* iOS */}
            <View style={{marginBottom: 10}}>
                <Text style={{color: 'blue', textDecorationLine: 'underline' , fontWeight: 'bold', fontSize: 20}}>iOS</Text>
            </View>
            <View style={{
                backgroundColor:'bisque',
                marginLeft: 15,
                marginRight: 15,
                borderWidth: 1,
                borderStyle: "dashed",
                borderRadius: 20,
                padding: 10,
                marginBottom: 15
            }}>
                <Text style={{textAlign: 'justify', color:'black'}}>
                    <Text style={{fontWeight:'bold'}}>iOS</Text> (formerly iPhone OS) is a mobile operating system created and developed by <Text style={{fontStyle: "italic", fontWeight:"bold", color: "magenta"}}>Apple Inc.</Text> exclusively for its hardware. It is the operating system that powers many of the company’s mobile devices, including the iPhone and iPod Touch.
                </Text>
            </View>
            <View>
                <TouchableOpacity 
                    style={{
                        backgroundColor: 'white',
                        padding: 8,
                        margin: 8,
                        borderRadius: 50,
                        borderWidth: 2
                    }}
                    onPress={ () => showAlert('ios')}
                >
                    <Text style={{color:'lightcoral'}}>
                        iOS Button
                    </Text>
                </TouchableOpacity>
            </View>


            <View>
                <Text style={{ fontSize: 24,fontWeight: 'bold', color: 'black'}}>VS.</Text>
            </View>


            {/* Android */}
            <View style={{marginBottom: 10, marginTop: 15}}>
                <Text style={{color: 'green', textTransform: 'uppercase' , textDecorationLine: 'underline' , fontWeight: 'bold', fontSize: 20}}>Android</Text>
            </View>
            <View style={{
                backgroundColor:'#FFDAB9',
                marginLeft: 15,
                marginRight: 15,
                borderWidth: 1,
                borderStyle: "dashed",
                borderRadius: 20,
                padding: 10,
                marginBottom: 15
            }}>
                <Text style={{color: 'black', textAlign: 'justify'}}>
                    <Text style={{fontWeight: 'bold'}}>Android</Text> is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets. Android is developed by a consortium of developers known as the <Text style={{fontWeight: 'bold', fontStyle: 'italic', color: 'purple'}}>Open Handset Alliance</Text> and commercially sponsored by <Text style={{fontWeight: 'bold', fontStyle: 'italic', color: 'blue'}}>Google.</Text>
                </Text>
            </View>
            <View>
                <TouchableOpacity 
                    style={{
                        backgroundColor: 'white',
                        padding: 8,
                        margin: 8,
                        borderRadius: 50,
                        borderWidth: 2
                    }}
                    onPress={ () => showAlert('android')}
                >
                    <Text style={{color:'lightcoral'}}>
                        Android Button
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ChallengeScreenM2