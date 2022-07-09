import React from 'react';
import { string, arrayOf, shape } from 'prop-types';

const Filter = (props) => {
    const { title, items } = props;
    return (
        <div>
            Aquí la Card
            {title}
            {items.map(item => {
                return <div>{item}</div>
            })}
        </div>
    );
};

Filter.propTypes = {
title: string,
items: arrayOf(shape())
};

Filter.defaultProps = {
title: '',
items: []
};

export default Filter;