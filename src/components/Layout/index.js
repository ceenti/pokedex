import React, { Component } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import Header from '../Header';
import icon from '../../assets/icons/pokeball.png';
import logo from '../../assets/icons/logoPokemon.png';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render () {
        const { children } = this.props;
        return (
            <>
                <Header logo={logo} icon={icon}/>
                {children}
            </>
        );
    }
};

Layout.propTypes = {
    children: oneOfType([arrayOf(node),node]).isRequired
};

Layout.defaultProps = {

};

export default Layout;