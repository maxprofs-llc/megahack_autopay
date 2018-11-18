import React, { Component } from 'react';
import {
    View, Text, Image,
    TouchableWithoutFeedback, TouchableOpacity
} from 'react-native';

/* Dependencies */
import PhoneRenderer from 'app/Features/PhoneRenderer/PhoneRenderer.component';
import ScaleWrapper from 'app/Components/ScaleWrapper/ScaleWrapper.component';
import FadeWrapper from 'app/Components/FadeWrapper/FadeWrapper.component';
import MoveWrapper from 'app/Components/MoveWrapper/MoveWrapper.component';
import InstructionModal from 'app/Features/InstructionModal/InstructionModal.component';
import AfterQuestionView from 'app/Features/AfterQuestionView/AfterQuestionView.component';
import DescriptionModal from 'app/Features/DescriptionModal/DescriptionModal.component';

/* All app image assets */
import * as images from 'app/Services/images';

/* Game questions */
import q from 'app/Services/questions.json';
let final = q.final;
let questions = q.questions;

function getNextQuestion() {
    let size = questions.length;
    let newIndex = Math.floor(Math.random() * size);

    let newQuestion = questions[newIndex];
    questions.splice(newIndex, 1);

    return newQuestion;
}

/* Screen styles */
import styles, { GOOD_COLOR, BAD_COLOR } from './Game.styles';

/* Constants */
const SCALE_IN_TIME = 200;
const SCALE_OUT_TIME = 200;
const FADE_IN_OUT_TIME = 300;
const FADE_IN_OUT_THROTTLE = 1000;
const PHONE_BLINKING_FREQUENCY = 1000;

const TIME_AFTER_INSTRUCTION = 1000;

const MONEY_LIMIT = 2000;

/* Blink anim intervalId */
let phoneBlinkId = null;

function Emotion(props) {
    let name;
    switch (props.emotionType) {
        case 'sad':
            name = 'emotionSad';
            break;
        case 'serious':
            name = 'emotionSerious';
            break;
        case 'happy':
            name = 'emotionHappy';
            break;
    }
    return <Image source={images[name]} style={styles.playerFace} />
}

class Game extends Component {
    state = {
        isPhoneOn: false,
        isHandOn: false,
        emotion: 'serious',
        currentQuestion: {
            question: ''
        },
        lastAction: '',
        money: 10000,
        difference: '',
        callsAmount: 0,
        isFinal: false,
        finalTouches: 0,
        testResult: {
            volatile: 0,
            inattentive: 0,
            temporary: 0,
            economical: 0,
            practical: 0,
            careless: 0,
            busy: 0,
            ideal: 0
        },
        isDescriptionOpen: false
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
    }

    startMoveToTop = (time, toY, object) => {
        object.moveToTop(time, toY);
    }

    startMoveToDown = (time, object) => {
        object.moveToDown(time);
    }

    increaseMoney = (amount, action) => {
        this.setState({
            ...this.state, difference: '+' + amount,
            money: this.state.money + amount, callsAmount: this.state.callsAmount + 1, 
            isHandOn: false, isPhoneOn: false, lastAction: action, emotion: 'happy'
        });
        this.refs.differenceText.fadeInOut(FADE_IN_OUT_TIME, FADE_IN_OUT_THROTTLE);
    }

    decreaseMoney = (amount, action) => {
        this.setState({
            ...this.state, difference: amount+'',
            money: this.state.money + amount, callsAmount: this.state.callsAmount + 1, 
            isHandOn: false, isPhoneOn: false, lastAction: action, emotion: 'sad'
        });
        this.refs.differenceText.fadeInOut(FADE_IN_OUT_TIME, FADE_IN_OUT_THROTTLE);
    }

    getDifferenceColor = (char) => {
        if (char == '+')
            return { color: GOOD_COLOR }
        else
            return { color: BAD_COLOR }
    }

    incomingCall = () => {
        phoneBlinkId = setInterval(this.blinkAction, PHONE_BLINKING_FREQUENCY);
    }

    blinkAction = () => {
        this.setState({...this.state, isPhoneOn: !this.state.isPhoneOn});
    }

    acceptCall = () => {
        //get new question
        let question = getNextQuestion();

        clearInterval(phoneBlinkId);
        this.setState({...this.state, isHandOn: true, currentQuestion: question});

        if (this.state.money < MONEY_LIMIT) {
            this.setState({...this.state, currentQuestion: final, isFinal: true, isHandOn: true})
        }
        
        this.startScaleIn(SCALE_IN_TIME);
    }

    onInstructionClose = () => {
        this.incomingCall();
        setTimeout(this.acceptCall, TIME_AFTER_INSTRUCTION);
    }

    displayAfterQuestionPopup = () => {
        this.startMoveToTop(300, 210, this.refs.afterQuestion);
        this.incomingCall();
    }

    onMessagePopupClose = () => {
        this.startMoveToDown(300, this.refs.afterQuestion);
        this.acceptCall();
    }

    commonAnswerAction = () => {
        this.startScaleOut(SCALE_OUT_TIME);
        this.displayAfterQuestionPopup();
    }

    commonFinalRoute = (lastAction) => {
        if (this.state.finalTouches == 2) {
            this.startMoveToTop(500, 0, this.refs.gameover);
        }

        this.setState({ ...this.state, finalTouches: this.state.finalTouches + 1, lastAction: lastAction });
    }

    yesAction = () => {
        if (this.state.isFinal) {
            this.commonFinalRoute('yes');
            return;
        }

        this.commonAnswerAction();
        if (this.state.currentQuestion.yes.money) {
            if (this.state.currentQuestion.yes.money > 0)
                this.increaseMoney(this.state.currentQuestion.yes.money, 'yes');
            else
                this.decreaseMoney(this.state.currentQuestion.yes.money, 'yes');
        }
        else {
            this.setState({
                ...this.state, callsAmount: this.state.callsAmount + 1, 
                isHandOn: false, isPhoneOn: false, lastAction: 'yes', emotion: 'serious'
            });
        }
    }

    noAction = () => {
        if (this.state.isFinal) {
            this.commonFinalRoute('no');
            return;
        }

        this.commonAnswerAction();
        if (this.state.currentQuestion.no.money) {
            if (this.state.currentQuestion.no.money > 0)
                this.increaseMoney(this.state.currentQuestion.no.money, 'no');
            else
                this.decreaseMoney(this.state.currentQuestion.no.money, 'no');
        }
        else {
            this.setState({
                ...this.state, callsAmount: this.state.callsAmount + 1, 
                isHandOn: false, isPhoneOn: false, lastAction: 'no', emotion: 'serious'
            });
        }
    }

    onGameoverPress = () => {
        this.props.navigation.navigate('Result');
    }

    onDescriptionClose = () => {
        
    }

    prepareMessage = () => {
        if (!this.state.currentQuestion.yes || this.state.lastAction == '')
            return '';
        
        return this.state.currentQuestion[this.state.lastAction].message;
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Status header */}
                <View style={styles.headerContainer}>
                    <View style={styles.moneyIcon} />
                    <Text style={styles.moneyText}>{this.state.money}</Text>
                    <FadeWrapper ref={'differenceText'} style={styles.differenceTextContainer}>
                        <Text style={[styles.differenceText, this.getDifferenceColor(this.state.difference[0])]}>
                            {this.state.difference}
                        </Text>
                    </FadeWrapper>

                    <Image source={images.headerPhoneImage} style={styles.headerPhoneIcon} />
                    <Text style={styles.callsAmountText}>{this.state.callsAmount}</Text>
                </View>

                {/* Yes / No */}
                <ScaleWrapper ref={'yesText'} style={styles.yesButtonContainer}>
                    <TouchableOpacity onPress={this.yesAction} style={{
                        justifyContent: 'center',
                        alignItems: 'flex-start', width: 80, height: 80
                    }}>
                        <Text style={styles.yesButton}>ДА</Text>
                    </TouchableOpacity>
                </ScaleWrapper>
                <ScaleWrapper ref={'noText'} style={styles.noButtonContainer}>
                    <TouchableOpacity onPress={this.noAction} style={{
                        justifyContent: 'center',
                        alignItems: 'flex-end', width: 80, height: 80
                    }}>
                        <Text style={styles.noButton}>НЕТ</Text>
                    </TouchableOpacity>
                </ScaleWrapper>

                {/* Question */}
                <ScaleWrapper ref={'questionText'} style={styles.questionTextContainer}>
                    <Text style={styles.questionText}>{this.state.currentQuestion.question}</Text>
                </ScaleWrapper>

                {/* Circles */}
                <ScaleWrapper ref={'circle_b2'} style={styles.circle_b2} />
                <ScaleWrapper ref={'circle_b1'} style={styles.circle_b1} />
                <ScaleWrapper ref={'circle_3'} style={styles.circle_3} />
                <ScaleWrapper ref={'circle_2'} style={styles.circle_2} />
                <ScaleWrapper ref={'circle_1'} style={styles.circle_1} />

                {/* Table, Player, Phone */}
                <Emotion emotionType={this.state.emotion} />
                <Image source={images.playerImage} style={styles.player} />
                <Image source={images.tableImage} style={styles.table} />
                <PhoneRenderer isPhoneOn={this.state.isPhoneOn} isHandOn={this.state.isHandOn} />

                {/* First-launch instruction */}
                <InstructionModal closeModal={this.onInstructionClose} />

                {/* After question popup */}
                <MoveWrapper ref={'afterQuestion'} style={styles.afterQuestionPopup}>
                    <AfterQuestionView message={this.prepareMessage()} 
                                       pressCallback={this.onMessagePopupClose} />
                </MoveWrapper>
                
                {/* Gameover overlay image */}
                <MoveWrapper ref={'gameover'} style={styles.gameoverPopup}>
                    <TouchableWithoutFeedback onPress={this.onGameoverPress}>
                        <Image source={images.gameoverImage} style={styles.gameoverImage} />
                    </TouchableWithoutFeedback>
                </MoveWrapper>
            </View>
        );
    }
}

export default Game;