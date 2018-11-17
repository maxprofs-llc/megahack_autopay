import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';

import styles from './AutoPay.styles';

class AutoPay extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Game')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Game</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AutoPay;