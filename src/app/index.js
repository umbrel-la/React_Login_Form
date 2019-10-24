import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import routes, { routesMap } from '@/routes';

export default class extends React.Component {
  render(){
    let routesComponents = routes.map((route) => {
        return <Route path={route.url}
                      component={route.component}
                      exact={route.exact}
                      key={route.url}
                />;
    });
    return(
      <Router>
          <div className="container d-flex justify-content-center">
              <div className="row">

                      <Switch>
                          {routesComponents}
                      </Switch>

              </div>
          </div>
      </Router>
    );
  }
}
