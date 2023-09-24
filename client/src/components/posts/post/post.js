import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({post , setCurrentId}) => {
  const dispatch = useDispatch();
  return (
    // <div >
    //   <img  image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
    //   <div >
    //     <h4 variant="h6">{post.creator}</h4>
    //     <h4 variant="body2">{moment(post.createdAt).fromNow()}</h4>
    //   </div>
    //   <div >
    //     <button style={{ color: 'white' }} size="small" onClick={() =>  setCurrentId(post._id)}><oreorizcon fontSize="default" /></button>
    //   </div>
    //   <div >
    //     <h4 variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</h4>
    //   </div>
    //   <h4  gutterBottom variant="h5" component="h2">{post.title}</h4>
    //   <div>
    //     <h4 variant="body2" color="textSecondary" component="p">{post.message}</h4>
    //   </div>
    //   <div >
    //     <button size="small" color="primary" onClick={() => dispatch(likePost(post._id)) }><thumbuptlticon fontSize="small" /> &nbsp;Like&nbsp;{post.likeCount} </button>
    //     <button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><deleteicon fontSize="small" /> Delete</button>
    //   </div>
    // </div>
    <div class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img class="object-cover object-center w-full h-56" src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt="avatar"/>

        <div class="flex items-center px-6 py-3 bg-gray-900">
            <svg aria-label="headphones icon" class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"/>
            </svg>

            <h1 class="mx-3 text-lg font-semibold text-white">{post.title}</h1>
        </div>

        <div class="px-6 py-4">
            <h1 class="text-lg font-semibold text-gray-800 dark:text-white">{post.message}</h1>

            <p class="py-2 text-gray-700 dark:text-gray-400">{post.creator}</p>

            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <svg aria-label="suitcase icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 11H10V13H14V11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"/>
                </svg>

                <h1 class="px-2 text-sm">{post.tags.map((tag) => `#${tag} `)}</h1>
            </div>

            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <svg aria-label="location pin icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"/>
                </svg>

                <h1 class="px-2 text-sm">{moment(post.createdAt).fromNow()}</h1>
            </div>
            <div class="post-bottom flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <div>
                    <button 
                        onClick={() =>{  setCurrentId(post._id); window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
                        type="button" class="mr-2 px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        edit
                    </button>
                    <button 
                        onClick={() => dispatch(deletePost(post._id))}
                        type="button" class="mr-2 px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        delete
                    </button>
                </div>
                <div>
                    <button 
                        onClick={() => dispatch(likePost(post._id)) }
                        type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                        </svg>
                        &nbsp;Like&nbsp;{post.likeCount}
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Post