import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 276,
        height: 130,
        position: 'absolute',
        left: 44,
        top: 210,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    block: {
        width: 268,
        height: 100,
        backgroundColor: '#00B956'
    },
    message: {
        width: 245,
        height: 75,
        marginLeft: 11,
        marginTop: 14,
        fontSize: 14,
        fontFamily: 'gtwalsheimpro_ultrabold',
        color: 'white'
    },
    okText: {
        fontSize: 18,
        fontFamily: 'gtwalsheimpro_ultrabold',
        color: 'white'
    },
    okContainer: {
        position: 'relative',
        left: 217,
        top: 71,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#731982'
    }
});

export default styles;