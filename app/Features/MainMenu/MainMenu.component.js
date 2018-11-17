import React, { Component } from 'react';
import { View, Image, ScrollView, Text,
         StyleSheet, TouchableOpacity } from 'react-native';

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

const styles = StyleSheet.create({
    menu: {
        resizeMode: 'contain',
        flex: 1,
        width: 360,
        //height: 1334
    },
    button: {
        width: 360,
        height: 56,
        position: 'absolute',
        top: 654
    }
});

export default MainMenu;