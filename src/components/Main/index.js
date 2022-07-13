import React, {useEffect} from 'react';
import { string, arrayOf, shape, func, noop } from 'prop-types';
import SideBar from '../SideBar';
import Catalog from '../Catalog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import { GET_TYPES, GET_GENERATIONS } from '../../ApolloClient/src/queries';

const Main = ({title, data, loadingOn}) => {
    const types = useQuery( GET_TYPES );
    const generations = useQuery(GET_GENERATIONS);
    console.log('generations', generations.data);
    
    useEffect(() => {
        if ((!types.loading || !generations.loading) && data) loadingOn(false);
    }, []);

    if (types.error || generations.error) return <p>Error :(</p>;
    return (
        <div className='main'>
            <div className='headerMain'>
                <div className='headerSide'>
                    <FontAwesomeIcon icon={faFilter} color={'gray'}/>
                    <h3 className='mainHeader'>{title}</h3>
                </div>
                <div>
                </div>
            </div>

            <SideBar items={types.data?.types} gen_items={generations.data?.generations} />
            <Catalog items={data} />

        </div>
    );
};

Main.propTypes = {
    title: string,
    icon: string,
    data: arrayOf(shape({})),
    loadingOn: func
};

Main.defaultProps = {
    title: '',
    icon: '',
    data: [],
    loadingOn: noop
};

export default Main;
