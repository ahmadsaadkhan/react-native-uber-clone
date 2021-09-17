import React from "react";
import {View, Text, SafeAreaView} from 'react-native'
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View>
                <Image
                style={{
                    width: 100,
                    height:100,
                    resizeMode: 'contain',
                }}
                />
            </View>
        </SafeAreaView>
     );
}
 
export default HomeScreen;