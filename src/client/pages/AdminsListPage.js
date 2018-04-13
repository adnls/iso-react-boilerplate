import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions/index.js';
import requireAuth from '../components/hocs/requireAuth.js';

class AdminsListPage extends Component{
    componentDidMount(){
        this.props.fetchAdmins();
    }
    renderAdmins(){
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>;
        })
    }
    render(){
        return(
            <div>
                <h3>Protected list of admins</h3>
                <ul>{this.renderAdmins()}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { admins: state.admins };
}

const loadData = store => {
    return store.dispatch(fetchAdmins());
}

export default {
    component:connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
    loadData: loadData
}