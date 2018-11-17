import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AutoPay from 'app/Features/AutoPay/AutoPay.component';

class AutoPayPage extends Component {
    static navigationOptions = ({
        headerStyle: {
            backgroundColor: '#00B956'
        },
        headerTintColor: 'white'
    })

    render() {
        return (
            <View style={{flex: 1}}>
                <AutoPay {...this.props} />
            </View>
        );
    }
}

export default AutoPayPage;