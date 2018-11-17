import React, { Component } from 'react';
import { View, WebView, StyleSheet } from 'react-native';

//const source = 'https://payment.megafon.ru/vjet/tmpl?form_request_id=466bfd1e-6e08-4ef2-bbee-38bde85235da';
const source = 'http://10.33.128.133:3000';

class WebViewGame extends Component {
    render() {
        return(
            <View style={styles.container}>
                <WebView source={{uri: source}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WebViewGame;