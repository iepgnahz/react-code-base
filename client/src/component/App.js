import React, {Component} from 'react';
import '../../style/index.less'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:"zhangpei"
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.text || "aaaaaaaaaaa"}</h1>
                <img src='/images/zhao.JPG' />
            </div>
        );
    }
}

export default App;