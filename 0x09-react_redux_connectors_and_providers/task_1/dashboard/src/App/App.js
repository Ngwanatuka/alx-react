import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { AppContext, user } from "./AppContext";
import { getLatestNotification } from "../utils/utils";
import { MapStateToProps } from "react-redux";
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "../actions/uiActionCreators";

class App extends Component {
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

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  }

  render() {
    const { isLoggedIn } = this.props;
    const randomText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget neque ornare, venenatis eros non, placerat elit.";

    return (
      <AppContext.Provider value={{ user: user, logOut: this.logOut }}>
        <div className={css(styles.app)}>
          <Notifications />
          <div className={css(styles.appHeader)}>
            <Header />
          </div>
          <div className={css(styles.appBody)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList />
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
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

const MapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.get("isUserLoggedIn"),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(MapStateToProps, mapDispatchToProps)(App);
