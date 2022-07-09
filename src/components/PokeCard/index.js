import React from 'react';
import { string } from 'prop-types';

const PokeCard = (props) => {
    const { title, description, image } = props;
    return (
        <div>
            Aquí la PokeCard
            {title}
            {description}
            {image}
        </div>
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