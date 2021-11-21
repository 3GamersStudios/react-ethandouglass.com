import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import Home from './Home';
import COMPSCI21_TRI1_T_Talks from './2021_TRI1_T_talks';
import COMPSCI21_TRI1_CLasswork from './2021_TRI1_Classwork';

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <ul className='header'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/2021/triOne/t-talks'>T-Talks</NavLink></li>
                        <li><NavLink to='/2021/triOne/classwork'>Classwork</NavLink></li>
                </ul>
                <div className='content'>
                        <Route exact path='/' component={Home} />
                        <Route path='/2021/triOne/t-talks' component={COMPSCI21_TRI1_T_Talks} />
                        <Route path='/2021/triOne/classwork' component={COMPSCI21_TRI1_CLasswork} />
                </div>
                </div>
            </HashRouter>

        );
    }
}

export default Main