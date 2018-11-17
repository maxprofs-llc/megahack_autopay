import React, { Component } from 'react';
import { View } from 'react-native';

import StatusBar from 'app/Components/StatusBar/StatusBar.component';
import UserScriptNavigation from './Routes/main';

class App extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                {StatusBar}
                <UserScriptNavigation />
            </View>
        );
    }
}

export default App;