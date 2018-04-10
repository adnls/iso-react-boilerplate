import React, {Component} from 'react';

class Home extends Component {
    render(){
    return (
        <div>
            <h1>Home page</h1>
            <br/>
            <button onClick={() => alert('It\'s workin\'')}>Click me...</button>
        </div>
        );
    };
}

export default Home;
