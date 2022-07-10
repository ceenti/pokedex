import React, { Component } from 'react';
// import { oneOfType, arraOf, node } from 'prop-types';
import Header from '../../components/Header';
import Main from '../../components/Main';
import icon from '../../assets/icons/pokeball.png';
import logo from '../../assets/icons/logoPokemon.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render () {
        return (
            <div className='homeContainer'>
                <Header logo={logo} icon={icon}/>
                <Main title={'Category'} icon={icon}/>
            </div>
        );
    }
};

Home.propTypes = {
};

Home.defaultProps = {

};

export default Home;