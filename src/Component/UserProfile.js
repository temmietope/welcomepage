import React, { Component } from "react";

class UserProfile extends Component {
  state = {
    userInfo: null
  };
  componentDidMount() {
    async function getData() {
      let res = await fetch("https://api.randomuser.me/");
      let data = await res.json();
      console.log(data.results[0]);
      return data.results[0];
    }
    getData().then(data => {
      this.setState({
        userInfo: data
      });
    });
  }
  renderNewUser() {
    const {
      gender,
      name,
      location,
      email,
      login,
      dob,
      phone
    } = this.state.userInfo;
    return (
      <main>
        <header>
          <h1>Welcome</h1>
        </header>
        <section>
          Name: {name.first}, {name.last} <br />
          Gender: {gender} <br />
          Address: {location.street}, {location.city}, {location.state} <br />
          Email: {email} <br />
          Username:{login.username} <br />
          Date of Birth:{dob.date} <br />
          PhoneNumber:{phone} <br />
        </section>
      </main>
    );
  }
  renderLoading() {
    return <div>Loading...</div>;
  }
  render() {
    return (
      <div>
        {this.state.userInfo ? this.renderNewUser() : this.renderLoading()}
      </div>
    );
  }
}

export default UserProfile;
