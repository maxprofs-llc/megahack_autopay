import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './AfterQuestionView.styles';

class AfterQuestionView extends Component {
    render() {
        const { message, pressCallback } = this.props;

        return(
            <View style={styles.container}>
                <View style={styles.block}>
                    <Text style={styles.message}>{message}</Text>
                </View>

                <TouchableOpacity onPress={pressCallback}>
                    <View style={styles.okContainer}>
                        <Text style={styles.okText}>Ок</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AfterQuestionView;