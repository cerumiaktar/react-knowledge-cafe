import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, title, cover_img, author_img, author_name, posted_date, reading_time, hashtag} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover_img} alt="" />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl font-bold'>{author_name}</h3>
                        <p className=''>{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-3xl mb-2'>{title}</h2>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span> )
                }
            </p>
            <button 
            onClick={() => handleMarkAsRead(id, reading_time)}
            className='text-purple-800 font-bold underline'
            >Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;