import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, handleUserProfile } from "./firebase/utils";
//  Layouts
import MainLayout from "./layouts/MainLayout";
import HomePageLayout from "./layouts/HomepageLayout";
//  Pages
import Home from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import "./default.scss";

const initState = {
  currentUser: null,
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initState,
    };
  }
  //  Event Listener
  authListener = null;
  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({
        ...initState,
      });
    });
  }

  //  To make sue we don't get any memory leaks
  componentWillUnmount() {
    this.authListener();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePageLayout currentUser={currentUser}>
                <Home />
              </HomePageLayout>
            )}
          />
          <Route
            path="/registration"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )}
          />
          <Route
            path="/login"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
              )
            }
          />
        </Switch>
        {/* </div> */}
      </div>
    );
  }
}

export default App;
