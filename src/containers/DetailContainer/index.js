import React, { Component } from 'react';
// import { oneOfType, arraOf, node } from 'prop-types';
import SideBar from '../../components/SideBar';
import CatalogContainer from '../CatalogContainer';

class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render () {
        return (
            <div className='DetailContainer'>
                <SideBar/>
                <CatalogContainer/>
                Hola
            </div>
        );
    }
};

DetailContainer.propTypes = {
};

DetailContainer.defaultProps = {

};

export default DetailContainer;