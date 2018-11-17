import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Animated,
         TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

const tableImage = require('app/Assets/Images/table.png');
const playerImage = require('app/Assets/Images/player.png');
const phoneOffImage = require('app/Assets/Images/phone_off.png');
const phoneOnImage = require('app/Assets/Images/phone_on.png');
const headerPhoneImage = require('app/Assets/Images/header_phone.png');

class FadeWrapper extends Component {
    state = {
        opacity: new Animated.Value(0),
        isInactive: true
    };

    fadeIn = (time, callback = null) => {
        Animated.timing(this.state.opacity,
            {
                toValue: 1,
                duration: time
            }
        ).start(() => {
            this.setState({...this.state, isInactive: false});
            if (callback) 
                callback();
        });
    };

    fadeOut = (time, callback = null) => {
        Animated.timing(this.state.opacity,
            {
                toValue: 0,
                duration: time
            }
        ).start(() => {
            this.setState({...this.state, isInactive: true});
            if (callback)
                callback();
        });
    }

    render() {
        return(
            <Animated.View opacity={this.state.opacity}
            style={{...this.props.style}} disabled={this.state.isInactive}>
                {this.props.children}
            </Animated.View>
        );
    }
}

class PhoneRenderer extends Component {
    render() {
        const isPhoneOn = this.props.isPhoneOn;

        if (isPhoneOn)
            return <Image source={phoneOnImage} style={styles.phone} />;
        else
            return <Image source={phoneOffImage} style={styles.phone} />;
    }
}

class Game extends Component {
    state = {
        isPhoneOn: true,
        question: 'А? А? А? А?А? А? А? А?А? А? А? А?А? А? А? А?А? А? А? А?А? А? А? А?',
        money: 10000,
        difference: '-200',
        callsAmount: 0
    }

    mapStateToAnimIndexes = {
        0: 'circle_1',
        1: 'circle_2',
        2: 'circle_3',
        3: 'circle_b1',
        4: 'circle_b2',
        5: 'questionText',
        6: 'yesText',
        7: 'noText'
    }

    startFadeIn = (time, animIndex = 0) => {
        if (animIndex == 5) {
            this.refs[this.mapStateToAnimIndexes[5]].fadeIn(time);
            this.refs[this.mapStateToAnimIndexes[6]].fadeIn(time);
            this.refs[this.mapStateToAnimIndexes[7]].fadeIn(time);
            return;
        }

        this.refs[this.mapStateToAnimIndexes[animIndex]].fadeIn(time, () => {
            this.startFadeIn(time, animIndex + 1);
        });
    }

    startFadeOut = (time) => {
        for (let i = 0; i < 8; ++i)
            this.refs[this.mapStateToAnimIndexes[i]].fadeOut(time);
        this.setState({...this.state, callsAmount: this.state.callsAmount + 1})
    }

    yesAction = () => {
        this.startFadeOut(200);
    }

    noAction = () => {
        this.startFadeOut(200);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.startFadeIn(200)}
                                      style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={styles.moneyIcon} />
                        <Text style={styles.moneyText}>{this.state.money}</Text>
                        <Text style={styles.differenceText}>{this.state.difference}</Text>

                        <Image source={headerPhoneImage} style={styles.headerPhoneIcon} />
                        <Text style={styles.callsAmountText}>{this.state.callsAmount}</Text>
                    </View>

                    <FadeWrapper ref={'yesText'} style={styles.yesButtonContainer}>
                        <TouchableOpacity onPress={this.yesAction} style={{ flex: 1, justifyContent: 'center', 
                        alignItems: 'center' }}>
                            <Text style={styles.yesButton}>ДА</Text>
                        </TouchableOpacity>
                    </FadeWrapper>
                    <FadeWrapper ref={'noText'} style={styles.noButtonContainer}>
                        <TouchableOpacity onPress={this.noAction} style={{ flex: 1, justifyContent: 'center',
                        alignItems: 'center' }}>
                            <Text style={styles.noButton}>НЕТ</Text>
                        </TouchableOpacity>
                    </FadeWrapper>


                    <FadeWrapper ref={'questionText'} style={styles.questionTextContainer}>
                            <Text style={styles.questionText}>{this.state.question}</Text>
                    </FadeWrapper>
                    
                    <FadeWrapper ref={'circle_b2'} style={styles.circle_b2} />
                    <FadeWrapper ref={'circle_b1'} style={styles.circle_b1} />
                    <FadeWrapper ref={'circle_3'} style={styles.circle_3} />
                    <FadeWrapper ref={'circle_2'} style={styles.circle_2} />
                    <FadeWrapper ref={'circle_1'} style={styles.circle_1} />

                    <Image source={playerImage} style={styles.player} />
                    <Image source={tableImage} style={styles.table} />
                    <PhoneRenderer isPhoneOn={this.state.isPhoneOn} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

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
    phone: {
        width: 10,
        height: 16,
        position: 'absolute',
        left: 131,
        bottom: 55,
        zIndex: 2
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
        marginLeft: 87,
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

export default Game;