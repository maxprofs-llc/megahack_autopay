import React, { Component } from 'react';
import {
    View, Text, Image,
    TouchableWithoutFeedback, TouchableOpacity
} from 'react-native';

/* Dependencies */
import PhoneRenderer from 'app/Features/PhoneRenderer/PhoneRenderer.component';
import FadeWrapper from 'app/Components/FadeWrapper/FadeWrapper.component';

/* All app image assets */
import * as images from 'app/Services/images';

/* Screen styles */
import styles from './Game.styles';

/* Constants */
const SCALE_IN_TIME = 200;
const SCALE_OUT_TIME = 200;

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

    startScaleIn = (time, animIndex = 0) => {
        if (animIndex == 5) {
            this.refs[this.mapStateToAnimIndexes[5]].scaleIn(time);
            this.refs[this.mapStateToAnimIndexes[6]].scaleIn(time);
            this.refs[this.mapStateToAnimIndexes[7]].scaleIn(time);
            return;
        }

        this.refs[this.mapStateToAnimIndexes[animIndex]].scaleIn(time, () => {
            this.startScaleIn(time, animIndex + 1);
        });
    }

    startScaleOut = (time) => {
        for (let i = 0; i < 8; ++i)
            this.refs[this.mapStateToAnimIndexes[i]].scaleOut(time);
        this.setState({ ...this.state, callsAmount: this.state.callsAmount + 1 })
    }

    yesAction = () => {
        this.startScaleOut(SCALE_OUT_TIME);
    }

    noAction = () => {
        this.startScaleOut(SCALE_OUT_TIME);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.startScaleIn(SCALE_IN_TIME)}
                style={{ flex: 1 }}>
                <View style={styles.container}>
                    {/* Status header */}
                    <View style={styles.headerContainer}>
                        <View style={styles.moneyIcon} />
                        <Text style={styles.moneyText}>{this.state.money}</Text>
                        <Text style={styles.differenceText}>{this.state.difference}</Text>

                        <Image source={images.headerPhoneImage} style={styles.headerPhoneIcon} />
                        <Text style={styles.callsAmountText}>{this.state.callsAmount}</Text>
                    </View>

                    {/* Yes / No */}
                    <FadeWrapper ref={'yesText'} style={styles.yesButtonContainer}>
                        <TouchableOpacity onPress={this.yesAction} style={{
                            flex: 1, justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={styles.yesButton}>ДА</Text>
                        </TouchableOpacity>
                    </FadeWrapper>
                    <FadeWrapper ref={'noText'} style={styles.noButtonContainer}>
                        <TouchableOpacity onPress={this.noAction} style={{
                            flex: 1, justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={styles.noButton}>НЕТ</Text>
                        </TouchableOpacity>
                    </FadeWrapper>

                    {/* Question */}
                    <FadeWrapper ref={'questionText'} style={styles.questionTextContainer}>
                        <Text style={styles.questionText}>{this.state.question}</Text>
                    </FadeWrapper>

                    {/* Circles */}
                    <FadeWrapper ref={'circle_b2'} style={styles.circle_b2} />
                    <FadeWrapper ref={'circle_b1'} style={styles.circle_b1} />
                    <FadeWrapper ref={'circle_3'} style={styles.circle_3} />
                    <FadeWrapper ref={'circle_2'} style={styles.circle_2} />
                    <FadeWrapper ref={'circle_1'} style={styles.circle_1} />

                    {/* Table, Player, Phone */}
                    <Image source={images.playerImage} style={styles.player} />
                    <Image source={images.tableImage} style={styles.table} />
                    <PhoneRenderer isPhoneOn={this.state.isPhoneOn} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default Game;