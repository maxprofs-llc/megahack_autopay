import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import WebViewGame from 'app/Features/WebViewGame/WebViewGame.component';

class WebViewGamePage extends Component {
    static navigationOptions = ({
        // headerStyle: {
        //     backgroundColor: '#00B956'
        // },
        // headerTintColor: 'white'
        header: null
    })
    
    render() {
        return(
            <View style={{flex: 1}}>
                <WebViewGame {...this.props} />
            </View>
        );
    }
}

export default WebViewGamePage;