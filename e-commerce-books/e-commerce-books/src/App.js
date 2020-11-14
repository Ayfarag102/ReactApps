import React from "react";
import { Switch, Route } from "react-router-dom";

//  Layouts
import MainLayout from "./layouts/MainLayout";
import HomePageLayout from "./layouts/HomepageLayout";
//  Pages
import Home from "./pages/Homepage";
import Registration from "./pages/Registration";
import "./default.scss";

function App() {
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
      </Switch>
      {/* </div> */}
    </div>
  );
}

export default App;
