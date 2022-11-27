import React from "react";
import Inicio from "../index/index";
import Login from "../login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../auth/privaterouter";
import Empleados from "../empleados/inicio";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <PrivateRoute
                    exact
                    path={["/empleados"]}
                    component={Empleados}
                />
                <Route exact path={["/login"]} component={Login} />
                <Route exact path={["/", "/index"]} component={Inicio} />
                <Route
                    path={"*"}
                    component={() => (
                        <h1 style={{ marginTop: 300 }}>
                            404
                            <br />
                            Página no encontrada
                        </h1>
                    )}
                />
            </Switch>
        </Router>
    );
}
