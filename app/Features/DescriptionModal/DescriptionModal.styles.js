import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        width: 283,
        height: 428,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        borderRadius: 5
    },
    image: {
        width: 283,
        height: 428,
        zIndex: 10
    },
    buttonTouchContainer: {
        position: 'absolute',
        width: 212,
        height: 37,
        left: 35,
        bottom: 26,
        borderRadius: 5
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 212,
        height: 37,
        borderRadius: 5,
        backgroundColor: '#00B956'
    },
    buttonText: {
        fontFamily: 'roboto_bold',
        fontSize: 12,
        color: 'white'
    }
});

export default styles;