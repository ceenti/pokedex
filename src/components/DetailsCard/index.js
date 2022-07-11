import React from 'react';
import { string } from 'prop-types';

const DetailsCard = (props) => {
    const { title } = props;
    return (
        <div className='details'>
            <div className='headerMain'>
                <div className='headerSide'>
                    <span>{title}</span>
                    </div><div>
                </div>
            </div>
        </div>
    );
};

DetailsCard.propTypes = {
title: string,
icon: string
};

DetailsCard.defaultProps = {
title: '',
icon: ''
};

export default DetailsCard;