import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

class MoveWrapper extends Component {
    state = {
        x: new Animated.Value(0),
        y: new Animated.Value(640),
        isInactive: true
    };

    moveFromTo = (fromX, fromY, toX, toY, time, callback = null) => {
        this.state.x.setValue(fromX);
        this.state.y.setValue(fromY);

        Animated.parallel([
            Animated.timing(this.state.x, {
                toValue: toX,
                duration: time
            }),
            Animated.timing(this.state.y, {
                toValue: toY,
                duration: time
            })
        ]).start(() => {
            if (callback)
                callback();
            isInactive = false;
        });
    };

    moveToTop = (time, toY, callback = null) => {
        this.state.y.setValue(640);

        Animated.timing(this.state.y, {
            toValue: toY,
            duration: time
        }).start(() => {
            if (callback)
                callback();
            isInactive = false;
        });
    }

    moveToDown = (time, callback = null) => {
        Animated.timing(this.state.y, {
            toValue: 640,
            duration: time
        }).start(() => {
            if (callback)
                callback();
            isInactive = false;
        });
    }

    render() {
        return (
            <Animated.View
                style={{ ...this.props.style, top: this.state.y }} disabled={this.state.isInactive}>
                {this.props.children}
            </Animated.View>
        );
    }
}

export default MoveWrapper;