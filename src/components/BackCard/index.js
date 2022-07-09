import React from 'react';
import { string } from 'prop-types';

const BackCard = (props) => {
    const { title, description, image } = props;
    return (
        <div>
            Aquí la BackCard
            {title}
            {description}
            {image}
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