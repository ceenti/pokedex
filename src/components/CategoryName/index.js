import React, { useState } from 'react';
import { string, arrayOf, shape, func, noop } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CategoryName = ({ title, categoryItems, onSelect, selectedType }) => {

  const [display, setDisplay] = useState(true);
  const toggle = () => {
    setDisplay(!display);
  }
  let selectAll;
  if(selectedType === ''){ 
    selectAll = 'selected'
  };
    return (
      <div>
        <button className='categoryItem' onClick={() => toggle()} type='button'>
          <span className='title'>{title}</span>
          <FontAwesomeIcon icon={display ? faChevronUp : faChevronDown} className='crevron' fontSize={13} fontWeight={faBold}/>
        </button>
        <div className={display ? `categoryItems` :  'displayItems'}>
        <button className={`${display} itemClass all ${selectAll}`}  onClick={() => onSelect('')}>All</button>
          {categoryItems.map(item => {
            const customeStyle = selectedType === item.name ? 'selected' : '';
            return (
            <button key={item.id} className={`${display} itemClass ${item.name} ${customeStyle}`}  onClick={() => onSelect(item.name)}>{item.name}</button>
          )})}
        </div>
      </div>
    );
};

CategoryName.propTypes = {
  title: string,
  categoryItems: arrayOf(shape()),
  onSelect: func,
  selectedType: string
};

CategoryName.defaultProps = {
  title: '',
  categoryItems: [],
  onSelect: noop,
  selectedType: ''
};

export default CategoryName;