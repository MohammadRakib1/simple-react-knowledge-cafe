import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
    const { id, title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className='rounded-xl' src={cover} alt="" />
            <div className='md:flex items-center justify-between'>
                <div className='md:flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h5>{author}</h5>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='md:flex items-center'>
                    <p>{reading_time} min read</p>
                    <button className='ml-2 text-sky-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h4>{title}</h4>
            <p>
                {
                    hashtags.map(hash => <span className='mr-4'><a href="">#{hash}</a></span>)
                }
            </p>
            <button className='text-[#6047EC] font-semibold underline'>Mark as read</button>
        </div>
    );
};

export default Blog;