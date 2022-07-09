import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import PokeCard from '../PokeCard';
const Catalog = (props) => {
    const { title, items } = props;
    return (
        <div>
            Aquí la PokeCard
            {title}
            {items.map(item => {
                return (
                    <PokeCard />
                );
            })}
        </div>
    );
};

Catalog.propTypes = {
title: string,
items: arrayOf(shape())
};

Catalog.defaultProps = {
title: '',
items: []
};

export default Catalog;