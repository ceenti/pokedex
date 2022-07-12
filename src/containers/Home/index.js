import React, { useState } from 'react';
// import { oneOfType, arraOf, node } from 'prop-types';
import Main from '../../components/Main';
import icon from '../../assets/icons/pokeball.png';
import Layout from '../../components/Layout';
import { useQuery } from '@apollo/client';
import { GET_ALL_POKEMON } from '../../ApolloClient/src/queries';
import ReactLoading from 'react-loading';


const Home = () => {
    const { loading, error, data } = useQuery( GET_ALL_POKEMON );
    const [isLoading, setIsLoading] = useState(false);

    const loadingComponent = <ReactLoading className='loading' type={'spinningBubbles'} color={'gray'} width={40} height={40}/>
    const content = <Main title={'Category'} icon={icon} data={data?.pokedex} isLoading={isLoading} loadingOn={setIsLoading}/>
    if (error) return <p>Error :(</p>;
    return (
        <Layout>
            {loading || isLoading ? loadingComponent :  content}
        </Layout>
    );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;