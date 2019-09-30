import React,{ Component } from 'react';
import { HomeWrapper } from './style'
import imgUrl from '../../static/home.jpeg';

class HomePage extends Component {
    render() {
        return (
            <HomeWrapper>
                <img alt='...' src={imgUrl} />
            </HomeWrapper>
        );
    }
}

export default HomePage;