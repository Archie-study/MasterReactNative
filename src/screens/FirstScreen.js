import React from "react";
import { View, Text, Button } from 'react-native'


const FirstScreen = () => {
    const openAlert = () => {
        alert('You clicked the button!')
    }
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{margin: 16}}>
                Hello <Text style={{ color: 'red'}}>World!</Text>
            </Text>
            <Button title="This is button" onPress={openAlert} />
        </View>
    )
}

const ChallengeScreenM1 = () => {
    const showAlert = () => {
        alert('You are awesome!!!')
    }
    return (
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Text style={{color: 'green', margin: 10}}>Let's Learn React Native Framework</Text>
            <Text style={{margin: 10}}>My name is Michael</Text>
            <Text style={{textAlign:'center', margin: 10}}>Now I'm learning about <Text style={{color: 'blue'}}>React Native Components</Text> to build the user interface for android apps</Text>
            <Text style={{color: 'red', margin: 10}}>I Love Coding</Text>
            <Button title="Click Me" onPress={showAlert} />
        </View>
    )
}

export default ChallengeScreenM1;