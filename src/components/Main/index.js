import React, {useEffect} from 'react';
import { string, arrayOf, shape, func, noop } from 'prop-types';
import SideBar from '../SideBar';
import Catalog from '../Catalog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import { GET_TYPES } from '../../ApolloClient/src/queries';

const Main = ({title, data, loadingOn}) => {
    const { loading, error, data: types_data } = useQuery( GET_TYPES );
    
    useEffect(() => {
        if (!loading && data) loadingOn(false);
    }, []);

    if (error) return <p>Error :(</p>;
    return (
        <div className='main'>
            <div className='headerMain'>
                <div className='headerSide'>
                    <FontAwesomeIcon icon={faFilter} />
                    <span>{title}</span>
                </div>
                <div>
                </div>
            
            </div>

            <SideBar items={types_data?.types} />
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
