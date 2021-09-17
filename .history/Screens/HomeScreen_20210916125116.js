import React from "react";
import {View, Text, SafeAreaView} from 'react-native'
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-red-500`}>
            <Text style={tw`text-red-500 p-10`}>Home Screen</Text>
        </SafeAreaView>
     );
}
 
export default HomeScreen;