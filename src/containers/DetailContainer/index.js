import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import DetailsCard from '../../components/DetailsCard';

const DetailContainer = () => {
    const { id } = useParams();
    return (
        <Layout>
            <DetailsCard id={id} />
        </Layout>
    );    
};

DetailContainer.propTypes = {};

DetailContainer.defaultProps = {};

export default DetailContainer;
