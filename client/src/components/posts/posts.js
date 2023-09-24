import React from 'react'
import Post from './post/post'
import {useSelector} from 'react-redux'
const Posts = ({ setCurrentId }) => {

  const posts = useSelector((state)=> state.posts);
  console.log(posts);
  return (
    !posts.length ? <circularprogress/> :(
      <div className='all-cards'>
        {posts.map((post) => (
            <div key={post._id} className='one-card'>
              <Post post={post} setCurrentId={setCurrentId} />
            </div>
          ))}
      </div>
    )
  )
}

export default Posts