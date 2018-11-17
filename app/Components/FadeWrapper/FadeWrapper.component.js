import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

class FadeWrapper extends Component {
    state = {
        scaleX: new Animated.Value(0),
        scaleY: new Animated.Value(0),
        isInactive: true
    };

    scaleIn = (time, callback = null) => {
        Animated.parallel([
            Animated.timing(this.state.scaleX, {
                toValue: 1,
                easing: Easing.quad,
                duration: time
            }),
            Animated.timing(this.state.scaleY, {
                toValue: 1,
                easing: Easing.quad,
                duration: time
            })
        ]).start(() => {
            this.setState({ ...this.state, isInactive: false });
            if (callback)
                callback();
        });
    };

    scaleOut = (time, callback = null) => {
        Animated.parallel([
            Animated.timing(this.state.scaleX, {
                toValue: 0,
                easing: Easing.back(),
                duration: time
            }),
            Animated.timing(this.state.scaleY, {
                toValue: 0,
                easing: Easing.back(),
                duration: time
            })
        ]).start(() => {
            this.setState({ ...this.state, isInactive: true });
            if (callback)
                callback();
        });
    }

    render() {
        return(
            <Animated.View scaleX={this.state.scaleX} scaleY={this.state.scaleY}
            style={{...this.props.style}} disabled={this.state.isInactive}>
                {this.props.children}
            </Animated.View>
        );
    }
}

export default FadeWrapper;