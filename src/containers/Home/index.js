import React, { useEffect } from 'react';
// import { oneOfType, arraOf, node } from 'prop-types';
import Main from '../../components/Main';
import icon from '../../assets/icons/pokeball.png';
import Layout from '../../components/Layout';
import { useQuery } from '@apollo/client';
import { GET_ALL_POKEMON } from '../../ApolloClient/src/queries';

const Home = () => {
    const { loading, error, data } = useQuery( GET_ALL_POKEMON );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <Layout>
            <Main title={'Category'} icon={icon} data={data?.pokedex} />
        </Layout>
    );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;