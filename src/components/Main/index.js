import React from 'react';
import { string } from 'prop-types';
import SideBar from '../SideBar';
import Catalog from '../Catalog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';


const Main = (props) => {
    const { title } = props;
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
            <SideBar />
            <Catalog />
        </div>
    );
};

Main.propTypes = {
title: string,
icon: string
};

Main.defaultProps = {
title: '',
icon: ''
};

export default Main;