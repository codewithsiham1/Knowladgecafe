
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
const [bookmarks,setBookmarks]=useState([]);
const[readingtime,setReadingTime]=useState([])
const handleAddToBookMark=blog=>{
  const newBookmarks=[...bookmarks,blog];
  setBookmarks(newBookmarks);
}
const handleMarkAsRead=time=>{
  setReadingTime(readingtime+time);
}

  return (
    <>
     
      
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
     <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
     </div>
    </>
  )
}

export default App
