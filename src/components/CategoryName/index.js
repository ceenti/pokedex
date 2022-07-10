import React from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faShuttleSpace} from '@fortawesome/free-solid-svg-icons';
import { faAtom } from '@fortawesome/free-solid-svg-icons';

const CategoryName = ({ title, icon }) => {
    return (
        <div className='categoryItem'>
          <FontAwesomeIcon icon={faAtom} color='white'/>
          <span className='title'>{title}</span>
        </div>
    );
};

CategoryName.propTypes = {
  title: string
};

CategoryName.defaultProps = {
  title: ''
};

export default CategoryName;