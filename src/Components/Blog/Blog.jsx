
import PropTypes from 'prop-types';

import { PiBookmarkSimple } from "react-icons/pi";
const Blog = ({blog,handleAddToBookMark,handleMarkAsRead}) => {
   const{title,cover,reading_time, author, author_img,posted_date,hashtags}=blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='full mb-8' src={cover} alt={`cover picture of the title${title}`} />
            <div className='flex  justify-between mb-4 '>
                <div className='flex'>
              <img className='w-14' src={author_img} alt="" />
              <div className='ml-4' >
                <h1 className='text-2xl font-bold'>{author}</h1>
                <h1>{posted_date}</h1>
              </div>
                </div>
                <div>
              <span>{reading_time}min red</span>
              <button onClick={()=>handleAddToBookMark(blog)} className='btn ml-2 text-red-300 text-2xl'><PiBookmarkSimple /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=> <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='btn text-red-200 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookMark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;