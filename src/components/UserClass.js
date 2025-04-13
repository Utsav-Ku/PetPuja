import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 5,
        }
    }

    render() {
        const { count } = this.state;
        return (
            <div className="user-card">
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Agartala</h3>
                <h4>Contact: test123@gmail.com</h4>
                <h4>Count = {count}</h4>
                <button onClick={() => { this.setState({
                        count: this.state.count + 1,
                    })
                }}
                >Increase Count</button>
            </div>
        )
    }
}

export default UserClass;