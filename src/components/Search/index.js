import React from 'react';
import { string, arrayOf, shape, func, noop } from 'prop-types';

const Search = (props) => {
    const { icon, items, searchResults } = props;
    return (
        <div>
            Aquí la Card
            {icon}
            {items.map(item => {
                console.log(item);
            })}
        </div>
    );
};

Search.propTypes = {
icon: string,
items: arrayOf(shape()),
searchResults: func
};

Search.defaultProps = {
icon: '',
items: [],
searchResults: noop
};

export default Search;