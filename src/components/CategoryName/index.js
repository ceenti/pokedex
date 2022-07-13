import React, { useState } from 'react';
import { string, arrayOf, shape, func, noop } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CategoryName = ({ title, categoryItems, onSelect }) => {

  const [display, setDisplay] = useState(false);
  const toggle = () => {
    setDisplay(!display);
  }
    return (
      <div>
        <button className='categoryItem' onClick={() => toggle()} type='button'>
          <span className='title'>{title}</span>
          <FontAwesomeIcon icon={display ? faChevronUp : faChevronDown} className='crevron' fontSize={13} fontWeight={faBold}/>
        </button>
        <div className={display ? `categoryItems` :  'displayItems'}>
          {categoryItems.map(item => <button key={item.id} className={`${display} itemClass ${item.name}`}  onClick={() => onSelect(item.name)}>{item.name}</button>)}
        </div>
      </div>
    );
};

CategoryName.propTypes = {
  title: string,
  categoryItems: arrayOf(shape()),
  onSelect: func
};

CategoryName.defaultProps = {
  title: '',
  categoryItems: [],
  onSelect: noop
};

export default CategoryName;