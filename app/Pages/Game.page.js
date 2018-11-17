import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import Game from 'app/Features/Game/Game.component';

class GamePage extends Component {
    static navigationOptions = ({
        header: null
    })

    render() {
        return(
            <View style={{flex: 1}}>
                <StatusBar backgroundColor={'#F6F6F600'} barStyle={'dark-content'} translucent={true}/>
                <Game {...this.props} />
            </View>
        );
    }   
}

export default GamePage;