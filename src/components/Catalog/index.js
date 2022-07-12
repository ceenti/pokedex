import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import PokeCard from '../PokeCard';

const Catalog = ({title, items}) => (
    <main className='catalog'>
        {title}
        {items.map(item => <PokeCard key={item.id} pokemon={item} /> )}
    </main>
);

Catalog.propTypes = {
    title: string,
    items: arrayOf(shape())
};

Catalog.defaultProps = {
    title: '',
    items: []
};

export default Catalog;