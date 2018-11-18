import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';

import { modalStartImage } from 'app/Services/images';

import styles from './InstructionModal.styles';

class InstructionModal extends Component {
    state = {
        isOpened: true
    }

    closeModal = () => {
        this.setState({ isOpened: false });
    }

    render() {
        const {closeModal} = this.props;

        return(
            <Modal isOpen={this.state.isOpened} onClosed={closeModal}
                position={'center'} backButtonClose={true} style={styles.modal}>
                <Image source={modalStartImage} style={styles.image} />

                <TouchableOpacity style={styles.buttonTouchContainer} onPress={this.closeModal}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Понял!</Text>
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    }
}

export default InstructionModal;