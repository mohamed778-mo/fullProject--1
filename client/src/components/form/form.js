import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';




const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    console.log("done")
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(postData)
    if (currentId) {
      dispatch(updatePost(currentId, postData));
      clear();
    } else {
      dispatch(createPost(postData));
      clear();
    }
  };
  
  return (
    // <div >
    //   <form autoComplete="off" noValidate onSubmit={handleSubmit}>
    //     <h6 >{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</h6>
    //     <input name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
    //     <input name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
    //     <input name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
    //     <input name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
    //     <div ><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
    //     <button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</button>
    //     <button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</button>
    //   </form>
    // </div>
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="create-text text-2xl text-center font-bold text-gray-700 capitalize dark:text-white">Share Us</h2>

        <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">Name</label>
                    <input 
                      id="username" type="text" placeholder='Ali'
                      value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200">idea </label>
                    <input 
                      id="emailAddress" type="text" placeholder='SpongeBob'
                      value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="password">Tags</label>
                    <input 
                      placeholder='(coma separated)'
                      value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                      id="password" type="text" 
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>

                <div> 
                    <label class="text-gray-700 dark:text-gray-200" >Photo </label>
                    <div className='mt-[15px]'><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                    {/* <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/> */}
                </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4">
              <textarea 
                value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                placeholder='write your ideas .......'
                className="form-area block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div class="flex justify-end mt-6">
                <button 
                onClick={handleSubmit} 
                class="mr-5 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">ADD
                </button>
                <button 
                onClick={handleSubmit} 
                class="mr-5 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">clear
                </button>
            </div>
        </form>
    </section>
  );
};

export default Form;