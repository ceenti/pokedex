import React from 'react';
import { string } from 'prop-types';

const BackCard = (props) => {
    const { title, description, image } = props;
    return (
        <div className='backCard'>
            <p>
                Pokedex Entry
            </p>
            <p>
                Stats
            </p>
            <p>
                Moves
            </p>
            <p>
                Abilities
            </p>
            <p>
                Evolution Chain
            </p>
        </div>
    );
};

BackCard.propTypes = {
title: string,
description: string,
image: string
};

BackCard.defaultProps = {
title: '',
description: '',
image: ''
};

export default BackCard;