import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import { checkUserSession } from "./redux/User/user.actions";

//  hoc
import WithAuth from "./hoc/withAuth";
//  Layouts
import MainLayout from "./layouts/MainLayout";
import HomePageLayout from "./layouts/HomepageLayout";

//  Pages
import Home from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import Dashboard from "./pages/Dashboard";
import "./default.scss";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePageLayout>
              <Home />
            </HomePageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </WithAuth>
          )}
        />
      </Switch>
      {/* </div> */}
    </div>
  );
};

export default App;
