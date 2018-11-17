import React, { Component } from 'react';
import { View } from 'react-native';

import StatusBar from './Components/StatusBar.component';
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