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
import AppContext from "./AppContext";
import { connect } from "react-redux";
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logout,
} from "../actions/uiActionCreators";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      listNotifications: [],
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }


  // Function to handle key press
  handleKeyPress(event) {
    if (event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  // Funtion to mark a notification as read
  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  }

  render() {
    const {
      isLoggedIn,
      isNotificationDrawerVisible,
      displayNotificationDrawer,
      hideNotificationDrawer,
      logIn,
      logOut,
    } = this.props;
    const { displayDrawer, user, listNotifications } = this.state;

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
      <AppContext.Provider value={{ user, logOut: logout }}>
        <div className={css(styles.app)}>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className={css(styles.appHeader)}>
            <Header displayDrawer={this.handleDisplayDrawer} />
          </div>

          {user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={login} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>{randomText}</p>
          </BodySection>

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
    borderTop: "2px solid #dc3630",
    height: "1.5rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontStyle: "italic",
  },
});

// Map state to props
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isLoggedIn,
    isNotificationDrawerVisible: state.ui.isNotificationDrawerVisible,
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout,
};

App.defaultProps = {
  isLoggedIn: false,
  isNotificationDrawerVisible: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  isNotificationDrawerVisible: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
