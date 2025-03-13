import React from 'react';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;

    return (
        <div>
            <h2 className='text-2xl p-4 my-4 bg-white rounded-xl'>{title}</h2>
        </div>
    );
};

export default Bookmark;