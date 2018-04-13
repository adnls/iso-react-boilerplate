import React, {Component} from 'react';

class Home extends Component {
    render(){
    return (
        <div className='center-align' style={{marginTop:'200px'}}>
            <h3>Welcome</h3>
            <p>Check out this awesome features</p>
            <br/>
            <button onClick={() => alert('It\'s workin\'')}>Click me...</button>
        </div>
        );
    };
}

export default {
    component: Home
};
