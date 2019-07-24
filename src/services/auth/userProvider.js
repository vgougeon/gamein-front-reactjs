import React, { createContext, Component } from "react";

export const UserContext = createContext({
    name: '',
});

class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Njak'
        }
    }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;