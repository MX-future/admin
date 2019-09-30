import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Login from './pages/login/index';
import Home from './home/index';


class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path='/' exact component={Login} />
                <Route path='/admin' component={Home} />
            </BrowserRouter>
        </Provider>


    );
  }
}



export default App;
