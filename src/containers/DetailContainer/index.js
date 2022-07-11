import React, { Component } from 'react';
import Layout from '../../components/Layout';
import DetailsCard from '../../components/DetailsCard';

class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render () {
        return (
            <Layout>
                <DetailsCard />
            </Layout>
        );
    }
};

DetailContainer.propTypes = {
};

DetailContainer.defaultProps = {

};

export default DetailContainer;