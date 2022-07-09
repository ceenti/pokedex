import React, { Component } from 'react';
// import { oneOfType, arraOf, node } from 'prop-types';
import Header from '../../components/Header';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render () {
        return (
            <div>
                <Header/>
                {/* Container */}
                {/* Footer */}
                Hola
            </div>
        );
    }
};

Home.propTypes = {
};

Home.defaultProps = {

};

export default Home;