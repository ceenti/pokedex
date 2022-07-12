import React from 'react';
import ReactLoading from 'react-loading';


const Loading = () => {
    return (
        <ReactLoading className='loading' type={'spinningBubbles'} color={'gray'} width={'10rem'} height={'10rem'}/>
    );
};

export default Loading;