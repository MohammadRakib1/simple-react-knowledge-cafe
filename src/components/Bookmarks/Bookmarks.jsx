import React from 'react';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className='md:w-1/3 mt-4'>
            <h3>Bookmarks : {bookmarks.length}</h3>
        </div>
    );
};

export default Bookmarks;