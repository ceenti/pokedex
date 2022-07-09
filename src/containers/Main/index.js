import React, { Component } from 'react';
// import { oneOfType, arraOf, node } from 'prop-types';
import SideBar from '../../components/SideBar';
import CatalogContainer from '../CatalogContainer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render () {
        return (
            <div>
                <SideBar/>
                <CatalogContainer/>
                Hola
            </div>
        );
    }
};

Main.propTypes = {
};

Main.defaultProps = {

};

export default Main;