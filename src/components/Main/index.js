import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import SideBar from '../SideBar';
import Catalog from '../Catalog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';


const Main = ({title, data}) => (
    <div className='main'>
        <div className='headerMain'>
            <div className='headerSide'>
            <FontAwesomeIcon icon={faFilter} />
            <span>{title}</span>
            </div>
            <div>
            </div>

        </div>
        <SideBar />
        <Catalog items={data} />
    </div>
);

Main.propTypes = {
    title: string,
    icon: string,
    data: arrayOf(shape({}))
};

Main.defaultProps = {
    title: '',
    icon: '',
    data: []
};

export default Main;