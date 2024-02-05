import Notifications from "../Notifications/Notifications";
import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { AppContext, user } from "./AppContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true,
    });
  };

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false,
    });
  };

  logIn = (email, password) => {
    this.setState({
      user: {
        ...this.state.user,
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: {
        ...this.state.user,
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  };

  render() {
    const { displayDrawer, user } = this.props;

    const listCourses = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];

    const randomText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget neque ornare, venenatis eros non, placerat elit.";

    return (
      <AppContext.Provider
        value={{ user: this.state.user, logOut: this.state.logOut }}
      >
        <div className={css(styles.app)}>
          <Notifications
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <div className={css(styles.appHeader)}>
            <Header />
          </div>
          <div className={css(styles.appBody)}>
            {this.state.user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>{randomText}</p>
            </BodySection>
          </div>
          <div className={css(styles.appFooter)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

// Define styles using Aphrodite
const styles = StyleSheet.create({
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
    margin: "0.625rem",
    flex: 1,
  },
  appFooter: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    color: "#000000",
    borderTop: "1.9px solid #dc3630",
    height: "2.5rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontStyle: "italic",
  },
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
