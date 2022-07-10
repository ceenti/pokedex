import React from 'react';
import { string } from 'prop-types';

const TypePill = ({ name }) => {
    return (
        <span className={`pill ${name}`}>
          {name}
        </span>
    );
};

TypePill.propTypes = {
  name: string
};

TypePill.defaultProps = {
  name: ''
};

export default TypePill;