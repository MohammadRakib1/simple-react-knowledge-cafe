import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='border-b-2 mb-6'>
            <img className='rounded-xl w-full mb-8' src={cover} alt="" />
            <div className='md:flex items-center mb-4 justify-between'>
                <div className='md:flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h5 className='font-bold text-2xl'>{author}</h5>
                        <p className='text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div className='md:flex items-center'>
                    <p className='text-[#11111199]'>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-sky-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h4 className='mb-4 font-bold text-4xl'>{title}</h4>
            <p className='mb-5 text-[#11111199]'>
                {
                    hashtags.map(hash => <span className='mr-4'><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-[#6047EC] font-semibold underline mb-10'>Mark as read</button>
        </div>
    );
};

export default Blog;