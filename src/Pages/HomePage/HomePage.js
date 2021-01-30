import React, { Component } from "react";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage-container">
        <section className="title">
          <h1> The Hive Audio</h1>
          <h3> Extended features may not work in Demo Mode.</h3>
          <p>
            We are Audio Engineers and Producers that help musicians get their
            music out to the people! <br />
            Once logged in you'll be able to select from one of our Audio
            Engineers. Just select the name of the Engineer, pick your Service
            and Time, then check your profile. Your appointment will be updated!
            So Login or Sign up and we can take care of your incomplete albums!
          </p>
        </section>
      </div>
    );
  }
}
