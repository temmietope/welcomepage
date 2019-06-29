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
          <h2>Welcome {name.first} {name.last}</h2>
        </header>
        <section>
          <p>Name: {name.first} {name.last}</p>
          <p> Gender: {gender}</p>
          <p>Address: {location.street}, {location.city}, {location.state}</p>
          <p>Email: <span>{email}</span></p>
          <p>Username: <span>{login.username}</span></p>
          <p>Date of Birth: {dob.date}</p>
          <p>PhoneNumber: {phone}</p>
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
