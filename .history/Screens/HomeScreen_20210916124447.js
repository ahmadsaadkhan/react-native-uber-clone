import React from "react";
import {View, Text} from 'react-native'
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return (
        <View>
            <Text style={tw`text-red-500`}>Home Screen</Text>
        </View>
     );
}
 
export default HomeScreen;