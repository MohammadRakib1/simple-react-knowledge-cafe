import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 mt-4'>
            <div className='bg-[#6047EC1A] border-2 border-[#6047EC1A] mb-6 rounded-xl'>
                <h3 className='px-12 py-5 text-[#6047EC] text-xl font-bold'>Spent time on read : {readingTime} min</h3>
            </div>
            <div className='bg-[#1111110D] p-7 rounded-xl'>
                <h3 className='text-2xl font-bold'>Bookmarks : {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;