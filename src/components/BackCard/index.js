import React from 'react';
import { string } from 'prop-types';

const BackCard = (props) => {
    const { title, description, image } = props;
    return (
        <article className='backCard'>
            <div className='abilities'>
                <h4>Abilities</h4>
                <span>Overgrow</span>
                <span>Chlorophyll</span>
            </div>
            <div>
                <span><b>Height</b> 0.7m</span>
                <span><b>Weight</b> 6.9kg</span>
            </div>
            <p className="stats">
                <h4>Base Stats</h4>
                <span className="hp"><b>HP</b> 45</span>
                <span className="atk"><b>Attack</b> 49</span>
                <span className="def"><b>Defense</b> 49</span>
                <span className="sp_atk"><b>Sp. Atk</b> 65</span>
                <span className="sp_def"><b>Sp. Def</b> 65</span>
                <span className="speed"><b>Speed</b> 45</span>
            </p>
            <p>
                <h4>Evolution Chain</h4>
            </p>
        </article>
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