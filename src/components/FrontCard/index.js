import React from 'react';
import { string } from 'prop-types';

const FrontCard = (props) => {
    const { title, description, image } = props;
    return (
        <div className='frontCard'>
            PokeCard
            <p>
                <span># Number</span>
                <span>Name</span>
            </p>
            <span>Pokemon Image</span>
            <p>
                <span>Types</span>
                <span>Dark</span>
            </p>
        </div>
    );
};

FrontCard.propTypes = {
title: string,
description: string,
image: string
};

FrontCard.defaultProps = {
title: '',
description: '',
image: ''
};

export default FrontCard;