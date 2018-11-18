import React, { Component } from 'react';

import Result from 'app/Features/Result/Result.component';

class ResultPage extends Component {
    static navigationOptions = ({
        header: null
    })

    render() {
        return(
            <Result />
        );
    }
}

export default ResultPage;