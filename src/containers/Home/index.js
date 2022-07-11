import React, { Component } from 'react';
// import { oneOfType, arraOf, node } from 'prop-types';
import Main from '../../components/Main';
import icon from '../../assets/icons/pokeball.png';
import Layout from '../../components/Layout';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render () {
        return (
            <Layout>
                <Main title={'Category'} icon={icon}/>
            </Layout>
        );
    }
};

Home.propTypes = {
};

Home.defaultProps = {

};

export default Home;