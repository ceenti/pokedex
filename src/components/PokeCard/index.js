import React from 'react';
import { string } from 'prop-types';
import FrontCard from '../FrontCard';
import BackCard from '../BackCard';

const PokeCard = (props) => {
    const { title, description, image } = props;
    return (
        <article className='pokeCard'>
            <FrontCard />
            <BackCard />
        </article>
    );
};

PokeCard.propTypes = {
title: string,
description: string,
image: string
};

PokeCard.defaultProps = {
title: '',
description: '',
image: ''
};

export default PokeCard;