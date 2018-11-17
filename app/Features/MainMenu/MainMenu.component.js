import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from './MainMenu.styles';

class MainMenu extends Component {
    render() {
        return(
            <View style={{ flex: 1 }}>
                <ScrollView style={{flex: 1}} contentContainerStyle={{width: 360, height: 1334.3}}>
                    <Image resizeMethod={'auto'} style={styles.menu} source={require('app/Assets/Images/mocked_main.png')}  />
                    <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('AutoPay')}}>
                        {/* <View style={{ flex: 1, backgroundColor: 'red' }} /> */}
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

export default MainMenu;