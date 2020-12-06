import React, {Component} from 'react';
import "./User.css"

class User extends Component {
    render() {
        let {user,cls} = this.props;
        return (
            <div className={cls}> {user.name} | Age: {user.age} | City: {user.address} | Status: {user.status.toString()} </div>
        );
    }
}

export default User;