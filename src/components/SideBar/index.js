import React from 'react';
import { string, arrayOf, shape, func, noop } from 'prop-types';
import CategoryName from '../CategoryName';
// import Filter 

const SideBar = ({items, icon, gen_items, onSelect}) => {
    console.log('sideBar', gen_items);
    return (
        <aside className='sideBar'>
            <CategoryName title={'Generation'} icon={icon} categoryItems={gen_items}/>
            <CategoryName title={'Type'} icon={icon} categoryItems={items} onSelect={onSelect}/>
        </aside>
    );
};

SideBar.propTypes = {
    title: string,
    icon: string,
    items: arrayOf(shape()),
    gen_items: arrayOf(shape()),
    onSelect: func
};

SideBar.defaultProps = {
    title: '',
    icon: '',
    items: [],
    gen_items: [],
    onSelect: noop
};

export default SideBar;