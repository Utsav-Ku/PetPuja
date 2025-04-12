import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-card">
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Agartala</h3>
                <h4>Contact: test123@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;