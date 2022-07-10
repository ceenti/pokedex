import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import PokeCard from '../PokeCard';
const Catalog = (props) => {
    const { title, items } = props;
    return (
        <main className='catalog'>
            {title}
            {items.map(item => {
                return (
                    <PokeCard />
                );
            })}
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
        </main>
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