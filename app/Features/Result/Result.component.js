import React, { Component } from 'react';
import { View } from 'react-native';

import DescriptionModal from  'app/Features/DescriptionModal/DescriptionModal.component';
import AutopayModal from 'app/Features/AutopayModal/AutopayModal.component';

import styles from './Result.styles';

class Result extends Component {
    state = {
        isDescriptionOpen: true,
        isAutopayOpen: false
    }

    onDescriptionClose = () => {
        this.setState({isDescriptionOpen: false, isAutopayOpen: true});
    }

    render() {
        return(
            <View style={styles.container}>         
                {/* First modal */}
                <DescriptionModal ref={'descriptionModal'} closeModal={this.onDescriptionClose} 
                                  isOpen={this.state.isDescriptionOpen} />

                {/* Second modal */}
                <AutopayModal ref={'autopayModal'}
                                  isOpen={this.state.isAutopayOpen} />
            </View>
        );
    }
}

export default Result;