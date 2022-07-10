import React from 'react';
import { string } from 'prop-types';

const BackCard = (props) => {
    const { title, description, image } = props;
    return (
        <div className='backCard'>
            <p>
                Abilities
                <span>Overgrow</span>
                <span>Chlorophyll</span>
            </p>
            <p>
                <span>Height: 0.7m</span>
                <span>Weight: 6.9kg</span>
            </p>
            <p>
                Base Stats
                <span>HP:45</span>
                <span>Attack:49</span>
                <span>Defense:49</span>
                <span>Sp. Atk:65</span>
                <span>Sp. Def:65</span>
                <span>Speed:45</span>
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