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
        <View style={{alignItems: 'center'}}>
            
            {/* Pikachu */}
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


            {/* Flareon */}
            <View style={{ margin: 8, padding: 8 }}>
                <Image style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'aliceblue'
                }} 
                source={require('../../assets/images/flareon.png')}
                />
            </View>


            {/* Rapidash */}
            <View style={{ margin: 8, padding: 8 }}>
                <Image style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'aliceblue'
                }} 
                source={require('../../assets/images/rapidash.png')}
                />
            </View>


            {/* Psyduck */}
            <View style={{ margin: 8, padding: 8 }}>
                <Image style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'aliceblue'
                }} 
                source={{uri: 'https://id.portal-pokemon.com/play/resources/pokedex/img/pm/0783062d0d860b8ae7d8e859241a700359c4d981.png'}}
                />
            </View>


            {/* Bulbasaur */}
            <View style={{ margin: 8, padding: 8 }}>
                <Image style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'aliceblue'
                }} 
                source={{uri: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg'}}
                />
            </View>




        </View>
    )
}

export default AddImage;