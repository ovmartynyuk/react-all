import React, {Component} from 'react';
import {users} from "./Data/Users";
import User from "./Component/User/User";


class App extends Component {
    render() {
        return (
            users.map((user, index) => {
                let cls = index % 2 ? "cl1" : "cl2"
                return (<User user={user} cls={cls} key={index}/>)
            })
        );
    }
}

export default App;