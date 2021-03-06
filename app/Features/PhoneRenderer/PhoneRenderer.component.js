import React, { Component } from 'react';
import { Image } from 'react-native';

import { phoneOnImage, phoneOffImage, handImage } from 'app/Services/images';

import styles from './PhoneRenderer.styles';

class PhoneRenderer extends Component {
    render() {
        const { isPhoneOn, isHandOn } = this.props;

        if (isHandOn) 
            return <Image source={handImage} style={styles.handPhone} />;
        else if (isPhoneOn)
            return <Image source={phoneOnImage} style={styles.phone} />;
        else
            return <Image source={phoneOffImage} style={styles.phone} />;
    }
}

export default PhoneRenderer;