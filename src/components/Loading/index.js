import React from 'react';
import ReactLoading from 'react-loading';


const Loading = () => {
    return (
        <ReactLoading className='loading' type={'spinningBubbles'} color={'gray'} width={'3rem'} height={'3rem'} />
    );
};

export default Loading;