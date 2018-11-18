import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

class FadeWrapper extends Component {
    state = {
        opacity: new Animated.Value(0),
        isInactive: true
    };

    fadeIn = (time, callback = null) => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: time
        }).start(() => {
            this.setState({ ...this.state, isInactive: false });
            if (callback)
                callback();
        });
    };

    fadeOut = (time, callback = null) => {
        Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: time
        }).start(() => {
            this.setState({ ...this.state, isInactive: true });
            if (callback)
                callback();
        });
    }

    fadeInOutCB1 = (time, throttle, callback) => {
        setTimeout(this.fadeInOutCB2, throttle, time, callback);
    }

    fadeInOutCB2 = (time, callback) => {
        Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: time
        }).start(() => {
            if (callback)
                callback();
        });
    }

    fadeInOut = (time, throttle, callback = null) => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: time
        }).start(() => this.fadeInOutCB1(time, throttle, callback));
    }

    render() {
        return (
            <Animated.View opacity={this.state.opacity}
                style={{ ...this.props.style }} disabled={this.state.isInactive}>
                {this.props.children}
            </Animated.View>
        );
    }
}

export default FadeWrapper;