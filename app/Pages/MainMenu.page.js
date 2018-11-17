import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { Header } from 'react-navigation';

import MainMenu from 'app/Features/MainMenu/MainMenu.component';

class MainMenuPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <View style={styles.view}>
                <Image style={styles.image} source={require('app/Assets/Images/megafon_header.png')} />
            </View>
        )
    });

    render() {
        return(
            <MainMenu {...this.props} />
        );
    }
}

const styles = StyleSheet.create({
    view: {
        width: 360,
        height: Header.HEIGHT,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#00B956',
        paddingLeft: 23,
    },
    image: {
        width: 125,
        height: 23
    }
});

export default MainMenuPage;