import React, { Component } from 'react';
import { MaArTiWrapper } from './style';
import ShowTable from './components/showtable';
import { Route, Switch } from 'react-router-dom';
import EditArticle from './components/editarticle';

class MaArTi extends Component {
    render() {
        return (
            <MaArTiWrapper>
                <Switch>
                    <Route path='/admin/article' exact component={ShowTable}></Route>
                    <Route path='/admin/article/edit' component={EditArticle}></Route>
                </Switch>
            </MaArTiWrapper>
        );
    }
}

export default MaArTi;
