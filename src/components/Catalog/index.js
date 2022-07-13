import React from 'react';
import { arrayOf, shape } from 'prop-types';
import PokeCard from '../PokeCard';

const Catalog = ({title, items}) => (
    <main className='catalog'>
        {items.map(item => <PokeCard key={item.id} pokemon={item} /> )}
    </main>
);

Catalog.propTypes = {
    items: arrayOf(shape())
};

Catalog.defaultProps = {
    items: []
};

export default Catalog;
