import React, { Component } from "react";

class UserProfile extends Component {
  state = {
    userInfo: {}
  };
  componentDidMount() {
    async function getData() {
      let res = await fetch("https://api.randomuser.me/");
      let data = await res.json();
      console.log(data.results)
      return data.results[0];
    }
    getData().then(data => {
      this.setState({
        userInfo: data
      });
    });
  }
  renderNewUser(){
      console.log(this.state)
  }
  render() {
    return <div>{this.renderNewUser()}</div>;
  }
}

export default UserProfile;
