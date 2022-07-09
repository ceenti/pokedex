import React from 'react';
import { oneOfType, arraOf, node } from 'prop-types';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render () {
        return (
            <div>
                Hola Layout
            </div>
        );
    }
};

Layout.propTypes = {
children: oneOfType([arraOf(node), node]).isRequired
};

Layout.defaultProps = {

};