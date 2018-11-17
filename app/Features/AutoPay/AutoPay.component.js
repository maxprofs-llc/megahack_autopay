import React, { Component } from 'react';
import {
    View, Image, ScrollView, Text,
    StyleSheet, TouchableOpacity
} from 'react-native';

class AutoPay extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('WebViewGame')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Game</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 150,
        height: 50,
        borderRadius: 10
    },
    button: {
        flex: 1,
        backgroundColor: '#00B956',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#731982'
    }
});

export default AutoPay;