import React from 'react';
import { string } from 'prop-types';
import TypePill from '../TypePill';

const FrontCard = (props) => {
    const { title, description, image } = props;
    return (
        <div className='frontCard'>
            <h3>#001 Bulbasaur</h3>
            <p className='sprite'>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' alt='Bulbasaur sprite' />
            </p>
            <p className="types">
                <TypePill name="grass" />
                <TypePill name="poison" />
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