// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } =  styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            height:2,
            width:0
        }
    },
    textStyle: {
        fontSize: 20,
    }
};

// Make the component available to other parts of the application
export default Header;
