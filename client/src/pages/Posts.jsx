import React, { useEffect, useState } from 'react'
import Posts from '../components/posts/posts';
import Form from '../components/form/form';
import { useDispatch } from 'react-redux';
import {getPosts} from '../actions/posts'

const PostsPage = () => {

    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);

    useEffect(()=>{
        dispatch(getPosts());
      },[dispatch])

  return (
    <div maxWidth="lg">
       <div in>
          <div>
            <div container justifyContent='space-between' alignItems='stretch' spacing={3}>
              <div item xs={12} sm={12}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </div>
              <div item xs={12} sm={12}>
                <Posts setCurrentId={setCurrentId}/>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default PostsPage