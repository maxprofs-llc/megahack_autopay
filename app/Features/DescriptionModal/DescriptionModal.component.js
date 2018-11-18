import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';

import { popupDetailsImage } from 'app/Services/images';

import styles from './DescriptionModal.styles';

class DescriptionModal extends Component {
    state = {
        isOpened: false
    }

    closeModal = () => {
        this.setState({ isOpened: false });
    }

    render() {
        const {closeModal, isOpen} = this.props;
        this.state.isOpened = isOpen;

        return(
            <Modal isOpen={this.state.isOpened} onClosed={closeModal}
                position={'center'} backButtonClose={true} style={styles.modal}>
                <Image source={popupDetailsImage} style={styles.image} />

                <TouchableOpacity style={styles.buttonTouchContainer} onPress={this.closeModal}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Подробнее</Text>
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    }
}

export default DescriptionModal;