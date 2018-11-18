import React, { Component } from 'react';
import { Image } from 'react-native';
import Modal from 'react-native-modalbox';

import { modalStartImage } from 'app/Services/images';

import styles from './InstructionModal.styles';

class InstructionModal extends Component {
    state = {
        isOpened: true
    }

    render() {
        const {closeModal} = this.props;

        return(
            <Modal isOpen={this.state.isOpened} onClosed={closeModal}
                position={'center'} backButtonClose={true} style={styles.modal}>
                <Image source={modalStartImage} style={styles.image} />
            </Modal>
        );
    }
}

export default InstructionModal;