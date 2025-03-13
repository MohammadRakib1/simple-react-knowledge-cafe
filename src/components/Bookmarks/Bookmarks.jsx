import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className='md:w-1/3 mt-4'>
            <h3 className='text-2xl font-bold'>Bookmarks : {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;