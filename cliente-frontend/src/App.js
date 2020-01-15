import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./components/user/ListUserComponent";
import AddUserComponent from "./components/user/AddUserComponent";
import EditUserComponent from "./components/user/EditUserComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>Crud Clientes</h1>
                  <Switch>
                      <Route path="/" exact component={ListUserComponent} />
                      <Route path="/clientes" component={ListUserComponent} />
                      <Route path="/add-cliente" component={AddUserComponent} />
                      <Route path="/edit-cliente" component={EditUserComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
