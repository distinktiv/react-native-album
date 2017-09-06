import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AlbumDetail } from './AlbumDetail';


class AlbumList extends Component{
    componentWillMount(){
        console.log('Mounting');
    }


    render(){
        return (
            <View>
                <Text>Album List! </Text>

            </View>
        );
    };
}

export default AlbumList;