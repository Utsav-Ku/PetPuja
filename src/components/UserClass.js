import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Utsav",
                location: "Agartala",
                avatar_url: "https://avatars.githubusercontent.com/u/12345678?v=4",
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/utsav-ku");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        console.log(json);
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="User Avatar" />
                <h2>Name: { name }</h2>
                <h3>Location: { location }</h3>
                <h4>Contact: test123@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;