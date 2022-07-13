import React from 'react';
import { string, arrayOf, shape, func, noop } from 'prop-types';
import CategoryName from '../CategoryName';
// import Filter 

const SideBar = ({items, icon, gen_items, onSelect, selectedType}) => {
    return (
        <aside className='sideBar'>
            <CategoryName title={'Type'} icon={icon} categoryItems={items} onSelect={onSelect} selectedType={selectedType}/>
        </aside>
    );
};

SideBar.propTypes = {
    title: string,
    icon: string,
    items: arrayOf(shape()),
    gen_items: arrayOf(shape()),
    onSelect: func,
    selectedType: string
};

SideBar.defaultProps = {
    title: '',
    icon: '',
    items: [],
    gen_items: [],
    onSelect: noop,
    selectedType: ''
};

export default SideBar;