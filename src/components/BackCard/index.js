import React from 'react';
import { string } from 'prop-types';

const BackCard = (props) => {
    const { title, description, image } = props;
    return (
        <div className='backCard'>
            <p className='abilities'>
                <h4>Abilities</h4>
                <span>Overgrow</span>
                <span>Chlorophyll</span>
            </p>
            <p>
                <span><b>Height</b> 0.7m</span>
                <span><b>Weight</b> 6.9kg</span>
            </p>
            <p>
                <h4>Base Stats</h4>
                <span><b>HP</b> 45</span>
                <span><b>Attack</b> 49</span>
                <span><b>Defense</b> 49</span>
                <span><b>Sp. Atk</b> 65</span>
                <span><b>Sp. Def</b> 65</span>
                <span><b>Speed</b> 45</span>
            </p>
            <p>
                <h4>Evolution Chain</h4>
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