import React, { Component } from 'react';
// import { oneOfType, arraOf, node } from 'prop-types';
import Catalog from '../../components/Catalog';
import Search from '../../components/Search';

class CatalogContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render () {
        return (
            <div>
                <Search />
                {/* <Catalog /> */}
                Hola
            </div>
        );
    }
};

CatalogContainer.propTypes = {
};

CatalogContainer.defaultProps = {

};

export default CatalogContainer;