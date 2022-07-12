import React, { useState } from 'react';
import { string, arrayOf, shape } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CategoryName = ({ title, categoryItems }) => {
  const {display, setDisplay} = useState(false);
  const toggle = () => {

  }
    return (
      <div>
        <div className='categoryItem'>
          <span className='title'>{title}</span>
          <FontAwesomeIcon icon={faChevronDown} className='crevron' fontSize={13} fontWeight={faBold}/>
        </div>
        <div className='categoryItems'>
          {categoryItems.map(item => <span key={item.id} className={`${display} ? itemClass ${item.name} `}>{item.name}</span>)}
        </div>
      </div>
    );
};

CategoryName.propTypes = {
  title: string,
  categoryItems: arrayOf(shape())
};

CategoryName.defaultProps = {
  title: '',
  categoryItems: []
};

export default CategoryName;