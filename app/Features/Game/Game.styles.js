import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    player: {
        width: 70,
        height: 109.95,
        marginBottom: -17,
        zIndex: 2
    },
    table: {
        width: 360,
        height: 72,
        zIndex: 1
    },
    circle_1: {
        width: 14,
        height: 14,
        position: 'absolute',
        left: 136,
        bottom: 167,
        borderRadius: 7,
        backgroundColor: '#CBE8D9'
    },
    circle_2: {
        width: 32,
        height: 32,
        position: 'absolute',
        left: 104,
        bottom: 196,
        borderRadius: 16,
        backgroundColor: '#9AD4B9'
    },
    circle_3: {
        width: 44,
        height: 44,
        position: 'absolute',
        left: 106,
        bottom: 244,
        borderRadius: 22,
        backgroundColor: '#00A664'
    },
    circle_b1: {
        width: 162,
        height: 162,
        position: 'absolute',
        left: 55,
        bottom: 300,
        borderRadius: 81,
        backgroundColor: '#00B956'
    },
    circle_b2: {
        width: 162,
        height: 162,
        position: 'absolute',
        left: 148,
        bottom: 274,
        borderRadius: 81,
        backgroundColor: '#582E91'
    },
    questionText: {
        textAlign: 'center',
        fontFamily: 'roboto_bold',
        fontSize: 12,
        color: 'white'
    },
    questionTextContainer: {
        width: 205,
        height: 64,
        position: 'absolute',
        left: 80,
        bottom: 340,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3
    },
    yesButton: {
        fontFamily: 'roboto_black',
        fontSize: 14,
        color: '#00A664'
    },
    yesButtonContainer: {
        position: 'absolute',
        left: 18,
        bottom: 363,
    },
    noButton: {
        fontFamily: 'roboto_black',
        fontSize: 14,
        color: '#582E91'
    },
    noButtonContainer: {
        position: 'absolute',
        right: 11,
        bottom: 363,
    },
    headerContainer: {
        marginTop: 10,
        width: 289,
        height: 29,
        position: 'absolute',
        left: 31,
        top: 29,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    moneyIcon: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#FFBD14'
    },
    moneyText: {
        marginLeft: 14,
        fontFamily: 'roboto_bold',
        fontSize: 18,
        color: 'black'
    },
    differenceText: {
        marginLeft: 12,
        fontFamily: 'roboto_bold',
        fontSize: 18,
        color: '#FFBD14'
    },
    headerPhoneIcon: {
        marginTop: 2,
        marginLeft: 'auto',
        width: 21,
        height: 21
    },
    callsAmountText: {
        marginLeft: 6,
        fontFamily: 'roboto_bold',
        fontSize: 24,
        color: '#582E91'
    }
});

export default styles;