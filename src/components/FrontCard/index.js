import React from 'react';
import { string } from 'prop-types';

const FrontCard = (props) => {
    const { title, description, image } = props;
    return (
        <div>
            Aquí la FrontCard
            {title}
            {description}
            {image}
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