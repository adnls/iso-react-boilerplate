import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index.js';
import { Helmet } from 'react-helmet';
class UsersListPage extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }
    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        })
    }
    head(){
        return(
            <Helmet>
                <title>{`${this.props.users.length} Users loaded `}</title>
                <meta property='og:title' content='Users app'/>
            </Helmet>
        );
    }
    render(){
        return(
            <div>
                {this.head()}
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { users: state.users };
}

const loadData = store => {
    return store.dispatch(fetchUsers());
}

export default {
    component:connect(mapStateToProps, { fetchUsers })(UsersListPage),
    loadData:loadData
};