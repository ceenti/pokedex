import React, { Component } from 'react';
// import { oneOfType, arraOf, node } from 'prop-types';
import Header from '../../components/Header';
import Main from '../../components/Main';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render () {
        return (
            <div className='homeContainer'>
                <Header/>
                {/* Container */}
                {/* Footer */}
                <Main />
            </div>
        );
    }
};

Home.propTypes = {
};

Home.defaultProps = {

};

export default Home;