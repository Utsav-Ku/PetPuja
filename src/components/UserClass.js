import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 5,
            count2: 2,
        }
    }

    render() {
        const { count, count2 } = this.state;
        return (
            <div className="user-card">
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Agartala</h3>
                <h4>Contact: test123@gmail.com</h4>
                <h4>Count = {count}</h4>
                <h4>Count2 = {count2}</h4>
            </div>
        )
    }
}

export default UserClass;