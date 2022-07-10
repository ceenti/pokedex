import React from 'react';
import { string } from 'prop-types';
import SideBar from '../SideBar';
import Catalog from '../Catalog';

const Main = (props) => {
    const { title, icon } = props;
    return (
        <div className='main'>
            <SideBar />
            {title}
            {icon}
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