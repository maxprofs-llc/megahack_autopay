import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 150,
        height: 50,
        borderRadius: 10
    },
    button: {
        flex: 1,
        backgroundColor: '#00B956',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
});

export default styles;