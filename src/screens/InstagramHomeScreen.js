// This is Meeting 5
import React from "react";
import { View, Text, Image, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import { ShowStory, Feed } from "../components/InstagramComponent";


const InstagramHomeScreen = () => {
    const username = ['catherine', 'bard', 'tiffany', 'john', 'ellie']
    return (
        <View style={{ flex: 1}}>
            {/* Instagram Logo and 3 Icons */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                
                <Text style={{ fontFamily: 'StyleScript-Regular', fontSize:40, marginLeft: 16, color: 'black'}}>
                    Instagram
                </Text>
                
                
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 8}}>
                    <View style={{ margin: 8 }}>
                        <Icon 
                            name="plus-square-o" 
                            type="font-awesome" 
                            size={26} 
                        />
                    </View>
                    <View style={{ margin: 8 }}>
                    <Icon 
                            name="heart-o" 
                            type="font-awesome" 
                            size={26} 
                        />
                    </View>
                    <View style={{ margin: 8 }}>
                        <Icon 
                            name="paper-plane-outline" 
                            type="ionicon" 
                            size={26} 
                        />
                    </View>
                </View>
            </View>

 
            
            {/* Instagram Post */}
            <ScrollView showsVerticalScrollIndicator={false}>
                           {/* Instagram Story */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ShowStory 
                        profile={require('../../assets/images/profilePicture1.png')}
                        username={username[0]}
                    />
                    <ShowStory 
                        profile={require('../../assets/images/profilePicture2.png')}
                        username={username[1]}
                    />
                    <ShowStory 
                        profile={require('../../assets/images/profilePicture3.png')}
                        username={username[2]}
                    />
                    <ShowStory 
                        profile={require('../../assets/images/profilePicture4.png')}
                        username={username[3]}
                    />
                    <ShowStory 
                        profile={require('../../assets/images/profilePicture5.png')}
                        username={username[4]}
                    />


                    {/* <View style={{marginBottom: 50, flexDirection: 'row', }}>
                        <View style={{marginLeft: 5, marginRight: 5,}}>
                            <Image style={{width: 80, height:80, borderRadius: 100}} source={require('../../assets/images/profilePicture1.png')} />
                            <View style={{alignItems:'center'}}>
                                <Text style={{color: 'black', fontSize: 12, marginTop: 5}}>catherine</Text>
                            </View>
                        </View>
                    </View> */}
                </ScrollView>
                <View style={{borderBottomWidth: 1, borderColor: '#E9E4E4'}} />



                <Feed 
                    profile={require('../../assets/images/profilePicture1.png')}
                    username={username[0]}
                    post={{uri:'https://wallpaperaccess.com/full/201215.jpg'}}
                />


                <Feed 
                    profile={require('../../assets/images/profilePicture2.png')}
                    username={username[1]}
                    post={{uri:'https://images4.alphacoders.com/292/292026.jpg'}}
                />

                <Feed 
                    profile={require('../../assets/images/profilePicture3.png')}
                    username={username[2]}
                    post={{uri:'https://wallpaperaccess.com/full/496881.jpg'}}
                />

                <Feed 
                    profile={require('../../assets/images/profilePicture4.png')}
                    username={username[3]}
                    post={{uri:'https://images5.alphacoders.com/316/316297.jpg'}}
                />

                <Feed 
                    profile={require('../../assets/images/profilePicture5.png')}
                    username={username[4]}
                    post={{uri:'https://wallpaperaccess.com/full/1403923.jpg'}}
                />
            </ScrollView>
        </View>
    )
}

export default InstagramHomeScreen;